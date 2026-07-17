// ═══════════════════════════════════════════════════════════════════════════
// PHASE 4+5 — Validate migrated data & run integrity checks.
//
// Recomputes the EXPECTED state from the Phase-1 snapshot (using the exact
// same merge logic as the migration) and compares it row-by-row against what
// is actually in Supabase. Run immediately after Phase 3, before cutover.
//
// Usage:  npm run validate
// ═══════════════════════════════════════════════════════════════════════════
import { readFileSync, writeFileSync } from 'node:fs';
import { getSupabase, tsMillis, SNAPSHOT_DIR, DATA_DIR } from './lib/clients.mjs';
import { mergeUserEntries, loadA2ZIds } from './lib/normalize.mjs';

const snapshot = JSON.parse(readFileSync(`${SNAPSHOT_DIR}/firebase-snapshot-latest.json`, 'utf8'));
const supabase = getSupabase();
const a2zIds = await loadA2ZIds(DATA_DIR);
const problems = [];
const ok = (label) => console.log(`✅ ${label}`);
const fail = (label, detail) => { console.log(`❌ ${label}`); problems.push({ label, detail }); };

// ── Expected state from snapshot ────────────────────────────────────────────
const entriesByEmail = new Map();
const uidSet = new Set([...Object.keys(snapshot.users), ...Object.keys(snapshot.userProgress)]);
for (const uid of uidSet) {
  const usersDoc = snapshot.users[uid] || null;
  const progressDoc = snapshot.userProgress[uid] || null;
  const email = ((usersDoc?.email || progressDoc?.email || '').trim().toLowerCase());
  if (!email) continue;
  if (!entriesByEmail.has(email)) entriesByEmail.set(email, []);
  entriesByEmail.get(email).push({ uid, usersDoc, progressDoc });
}
const expected = new Map([...entriesByEmail.entries()]
  .map(([email, entries]) => [email, mergeUserEntries(email, entries, a2zIds, tsMillis)]));

const expTotals = [...expected.values()].reduce((a, u) => ({
  users: a.users + 1, solved: a.solved + u.counts.solved,
  revision: a.revision + u.counts.revision, notes: a.notes + u.counts.notes,
}), { users: 0, solved: 0, revision: 0, notes: 0 });

// ── Actual state from Supabase ──────────────────────────────────────────────
async function fetchAll(table, columns, order) {
  const rows = [];
  for (let from = 0; ; from += 1000) {
    const { data, error } = await supabase.from(table).select(columns).order(order).range(from, from + 999);
    if (error) throw new Error(`${table} fetch failed: ${error.message}`);
    rows.push(...data);
    if (data.length < 1000) break;
  }
  return rows;
}

const profiles = await fetchAll('profiles', 'id,email,total_solved,migrated_from_firebase,firebase_uids', 'id');
const progressRows = await fetchAll('user_progress', 'user_id,sheet_id,question_slug,is_solved,is_revision,note', 'user_id');
const sheetStats = await fetchAll('user_sheet_stats', 'user_id,sheet_id,solved_count,revision_count,notes_count', 'user_id');

const profileByEmail = new Map(profiles.map((p) => [p.email.toLowerCase(), p]));
const rowsByUser = new Map();
for (const r of progressRows) {
  if (!rowsByUser.has(r.user_id)) rowsByUser.set(r.user_id, []);
  rowsByUser.get(r.user_id).push(r);
}

// ── Check 1: every user exists, no duplicates ──────────────────────────────
const emailCounts = new Map();
for (const p of profiles) emailCounts.set(p.email.toLowerCase(), (emailCounts.get(p.email.toLowerCase()) || 0) + 1);
const dupEmails = [...emailCounts.entries()].filter(([, n]) => n > 1);
dupEmails.length === 0
  ? ok('No duplicate e-mails in profiles (DB UNIQUE constraint holding)')
  : fail('Duplicate e-mails found in profiles', dupEmails);

const missingUsers = [...expected.keys()].filter((e) => !profileByEmail.has(e));
missingUsers.length === 0
  ? ok(`All ${expTotals.users} Firebase users exist in Supabase`)
  : fail(`${missingUsers.length} Firebase users missing from Supabase`, missingUsers);

// ── Check 2: per-user counts (solved / revision / notes) ───────────────────
let solvedMismatch = 0, revisionMismatch = 0, notesMismatch = 0, counterMismatch = 0;
const mismatchDetails = [];
for (const [email, exp] of expected) {
  const p = profileByEmail.get(email);
  if (!p) continue;
  const rows = rowsByUser.get(p.id) || [];
  const act = {
    solved: rows.filter((r) => r.is_solved).length,
    revision: rows.filter((r) => r.is_revision).length,
    notes: rows.filter((r) => r.note !== '').length,
  };
  if (act.solved < exp.counts.solved) { solvedMismatch++; mismatchDetails.push({ email, field: 'solved', expected: exp.counts.solved, actual: act.solved }); }
  if (act.revision < exp.counts.revision) { revisionMismatch++; mismatchDetails.push({ email, field: 'revision', expected: exp.counts.revision, actual: act.revision }); }
  if (act.notes < exp.counts.notes) { notesMismatch++; mismatchDetails.push({ email, field: 'notes', expected: exp.counts.notes, actual: act.notes }); }
  if (p.total_solved !== act.solved) { counterMismatch++; mismatchDetails.push({ email, field: 'total_solved counter', expected: act.solved, actual: p.total_solved }); }
}
solvedMismatch === 0 ? ok(`Solved counts match for all users (${expTotals.solved} total)`) : fail(`${solvedMismatch} users have FEWER solved than expected`, mismatchDetails);
revisionMismatch === 0 ? ok(`Revision counts match (${expTotals.revision} total)`) : fail(`${revisionMismatch} users have fewer revisions`, null);
notesMismatch === 0 ? ok(`Note counts match (${expTotals.notes} total)`) : fail(`${notesMismatch} users have fewer notes`, null);
counterMismatch === 0 ? ok('profiles.total_solved counters consistent with rows') : fail(`${counterMismatch} trigger-counter mismatches`, null);

// ── Check 3: deep spot-check of 15 random users ────────────────────────────
const sample = [...expected.keys()].sort(() => Math.random() - 0.5).slice(0, 15);
let deepFailures = 0;
for (const email of sample) {
  const p = profileByEmail.get(email);
  if (!p) continue;
  const rows = new Map((rowsByUser.get(p.id) || []).map((r) => [`${r.sheet_id}::${r.question_slug}`, r]));
  for (const [sheetId, questions] of Object.entries(expected.get(email).progress)) {
    for (const [slug, q] of Object.entries(questions)) {
      if (!q.status && !q.revision && !q.note) continue;
      const r = rows.get(`${sheetId}::${slug}`);
      if (!r || r.is_solved !== q.status || r.is_revision !== q.revision || r.note !== q.note) {
        deepFailures++;
        mismatchDetails.push({ email, sheetId, slug, expected: q, actual: r || 'MISSING' });
      }
    }
  }
}
deepFailures === 0
  ? ok(`Deep spot-check passed (${sample.length} users, row-by-row equality)`)
  : fail(`${deepFailures} row-level mismatches in spot-check`, null);

// ── Check 4: referential integrity / orphans ───────────────────────────────
const profileIds = new Set(profiles.map((p) => p.id));
const orphanProgress = progressRows.filter((r) => !profileIds.has(r.user_id)).length;
orphanProgress === 0 ? ok('No orphan progress rows (FK integrity)') : fail(`${orphanProgress} orphan progress rows`, null);

const { count: questionCount } = await supabase.from('questions').select('*', { count: 'exact', head: true });
const { count: inactiveCount } = await supabase.from('questions').select('*', { count: 'exact', head: true }).eq('is_active', false);
ok(`Question catalog: ${questionCount} rows (${inactiveCount} legacy/inactive placeholders — expected for unknown legacy slugs)`);

// stats table consistency
const statSum = sheetStats.reduce((a, s) => a + s.solved_count, 0);
const rowSolved = progressRows.filter((r) => r.is_solved).length;
statSum === rowSolved
  ? ok(`user_sheet_stats consistent (${statSum} solved)`)
  : fail(`user_sheet_stats total ${statSum} ≠ actual solved rows ${rowSolved}`, null);

// auth ↔ profile 1:1
const authIds = new Set();
for (let page = 1; ; page++) {
  const { data, error } = await supabase.auth.admin.listUsers({ page, perPage: 1000 });
  if (error) throw new Error(error.message);
  data.users.forEach((u) => authIds.add(u.id));
  if (data.users.length < 1000) break;
}
const profilesWithoutAuth = profiles.filter((p) => !authIds.has(p.id)).length;
profilesWithoutAuth === 0 ? ok('Every profile has an auth user') : fail(`${profilesWithoutAuth} profiles lack auth users`, null);

// ── Summary ────────────────────────────────────────────────────────────────
const report = {
  checkedAt: new Date().toISOString(),
  snapshotTakenAt: snapshot.takenAt,
  expected: expTotals,
  actual: {
    profiles: profiles.length,
    progressRows: progressRows.length,
    solved: rowSolved,
    revision: progressRows.filter((r) => r.is_revision).length,
    notes: progressRows.filter((r) => r.note !== '').length,
  },
  problems,
  mismatchDetails: mismatchDetails.slice(0, 200),
};
writeFileSync(`${SNAPSHOT_DIR}/validation-report-latest.json`, JSON.stringify(report, null, 2));

console.log('\n═══════════════ VALIDATION SUMMARY ═══════════════');
console.log(`Expected users ${expTotals.users} | in Supabase ${profiles.length} (may exceed if new sign-ups happened)`);
console.log(`Expected solved ${expTotals.solved} / revision ${expTotals.revision} / notes ${expTotals.notes}`);
console.log(`Actual   solved ${report.actual.solved} / revision ${report.actual.revision} / notes ${report.actual.notes}`);
console.log(problems.length === 0
  ? '\n🎉 ALL CHECKS PASSED — safe to cut production over to Supabase.'
  : `\n🛑 ${problems.length} CHECK(S) FAILED — see ${SNAPSHOT_DIR}/validation-report-latest.json. Do NOT cut over.`);
process.exit(problems.length ? 1 : 0);
