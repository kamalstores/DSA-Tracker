// ═══════════════════════════════════════════════════════════════════════════
// PHASE 3 — Migrate the Firebase snapshot into Supabase.
//
// Guarantees:
//   • Firebase is NEVER touched (works purely from the Phase-1 snapshot).
//   • One Google e-mail  →  exactly one Supabase auth user + profile.
//   • Duplicate Firestore docs for the same e-mail are MERGED
//     (per-question: newest updatedAt wins; ties keep solved/revision/notes).
//   • Idempotent: re-running upserts the same rows; the LWW guard inside
//     migrate_upsert_progress() means a re-run can never overwrite data a
//     user has written in Supabase after cutover.
//   • Historical timestamps preserved (created/lastSeen/lastSolved/solvedAt).
//
// Usage:  npm run migrate:dry     ← plan only, writes nothing
//         npm run migrate         ← real run
// ═══════════════════════════════════════════════════════════════════════════
import { readFileSync, writeFileSync } from 'node:fs';
import { getSupabase, tsMillis, SNAPSHOT_DIR, DATA_DIR, BATCH_SIZE } from './lib/clients.mjs';
import { mergeUserEntries, loadA2ZIds } from './lib/normalize.mjs';

const DRY = process.argv.includes('--dry-run');
const RUN_ID = new Date().toISOString();
const ADMIN_EMAILS = (process.env.ADMIN_EMAILS || '').split(',').map((e) => e.trim().toLowerCase()).filter(Boolean);

let snapshot;
try {
  snapshot = JSON.parse(readFileSync(`${SNAPSHOT_DIR}/firebase-snapshot-latest.json`, 'utf8'));
} catch {
  console.error('❌ No snapshot found. Run `npm run audit` first (Phase 1).');
  process.exit(1);
}
console.log(`📦 Using snapshot taken at ${snapshot.takenAt}${DRY ? '   (DRY RUN — nothing will be written)' : ''}\n`);

// ── 1. Group every Firestore doc by e-mail and merge duplicates ────────────
const a2zIds = await loadA2ZIds(DATA_DIR);
const entriesByEmail = new Map();
const skippedNoEmail = [];

const uidSet = new Set([...Object.keys(snapshot.users), ...Object.keys(snapshot.userProgress)]);
for (const uid of uidSet) {
  const usersDoc = snapshot.users[uid] || null;
  const progressDoc = snapshot.userProgress[uid] || null;
  const email = ((usersDoc?.email || progressDoc?.email || '').trim().toLowerCase());
  if (!email) { skippedNoEmail.push(uid); continue; }
  if (!entriesByEmail.has(email)) entriesByEmail.set(email, []);
  entriesByEmail.get(email).push({ uid, usersDoc, progressDoc });
}

const mergedUsers = [...entriesByEmail.entries()]
  .map(([email, entries]) => mergeUserEntries(email, entries, a2zIds, tsMillis));

const dupes = mergedUsers.filter((u) => u.mergedDuplicates);
const totals = mergedUsers.reduce((acc, u) => ({
  solved: acc.solved + u.counts.solved,
  revision: acc.revision + u.counts.revision,
  notes: acc.notes + u.counts.notes,
  rows: acc.rows + u.counts.rows,
}), { solved: 0, revision: 0, notes: 0, rows: 0 });

console.log(`👥 Unique users (by e-mail)   : ${mergedUsers.length}`);
console.log(`🔀 E-mails merged from dupes  : ${dupes.length}`);
for (const d of dupes) console.log(`   • ${d.email}  ← ${d.firebaseUids.join(' + ')}  (${d.counts.solved} solved after merge)`);
console.log(`⚠️  Docs skipped (no e-mail)   : ${skippedNoEmail.length} ${skippedNoEmail.length ? JSON.stringify(skippedNoEmail) : ''}`);
console.log(`📊 Rows to migrate            : ${totals.rows} (solved ${totals.solved}, revision ${totals.revision}, notes ${totals.notes})\n`);

if (DRY) {
  writeFileSync(`${SNAPSHOT_DIR}/migration-plan-latest.json`, JSON.stringify({ RUN_ID, mergedUsers: mergedUsers.map(({ progress, ...rest }) => rest), skippedNoEmail }, null, 2));
  console.log(`📝 Plan written to ${SNAPSHOT_DIR}/migration-plan-latest.json — run \`npm run migrate\` to execute.`);
  process.exit(0);
}

const supabase = getSupabase();

// ── 2. Admin allow-list (drives profiles.is_admin) ─────────────────────────
for (const email of ADMIN_EMAILS) {
  const { error } = await supabase.from('admin_emails').upsert({ email, note: 'seeded by migration' }, { onConflict: 'email' });
  if (error) throw new Error(`admin_emails upsert failed: ${error.message}`);
}

// ── 3. Ensure ONE Supabase auth user per e-mail ────────────────────────────
console.log('🔐 Ensuring Supabase auth users…');
const authIdByEmail = new Map();
for (let page = 1; ; page++) {
  const { data, error } = await supabase.auth.admin.listUsers({ page, perPage: 1000 });
  if (error) throw new Error(`listUsers failed: ${error.message}`);
  for (const u of data.users) if (u.email) authIdByEmail.set(u.email.toLowerCase(), u.id);
  if (data.users.length < 1000) break;
}

const failures = [];
let createdCount = 0;
for (const u of mergedUsers) {
  if (authIdByEmail.has(u.email)) continue;
  const { data, error } = await supabase.auth.admin.createUser({
    email: u.email,
    email_confirm: true, // Google e-mails are verified; enables auto-linking on first OAuth sign-in
    user_metadata: {
      full_name: u.displayName,
      avatar_url: u.photoURL,
      migrated_from_firebase: true,
    },
  });
  if (error) { failures.push({ email: u.email, step: 'createUser', error: error.message }); continue; }
  authIdByEmail.set(u.email, data.user.id);
  createdCount++;
}
console.log(`   created ${createdCount}, already existed ${mergedUsers.length - createdCount - failures.filter(f => f.step === 'createUser').length}, failed ${failures.length}\n`);

// ── 4. Push progress rows through the LWW migration RPC ────────────────────
console.log('⬆  Migrating progress rows…');
const allRows = [];
for (const u of mergedUsers) {
  const userId = authIdByEmail.get(u.email);
  if (!userId) continue;
  const fallbackSolvedAt = u.lastSolvedAt || u.createdAt || null;
  for (const [sheetId, questions] of Object.entries(u.progress)) {
    for (const [slug, q] of Object.entries(questions)) {
      if (!q.status && !q.revision && !q.note) continue; // nothing to keep
      const at = q.updatedAt > 0 ? new Date(q.updatedAt).toISOString() : null;
      allRows.push({
        user_id: userId,
        sheet_id: sheetId,
        question_slug: slug,
        is_solved: q.status,
        is_revision: q.revision,
        note: q.note,
        client_updated_at: q.updatedAt || 0,
        first_solved_at: q.status ? (at || fallbackSolvedAt) : null,
        solved_at: q.status ? (at || fallbackSolvedAt) : null,
      });
    }
  }
}
let pushed = 0;
for (let i = 0; i < allRows.length; i += BATCH_SIZE) {
  const batch = allRows.slice(i, i + BATCH_SIZE);
  const { data, error } = await supabase.rpc('migrate_upsert_progress', { p_rows: batch });
  if (error) { failures.push({ step: 'progress_batch', at: i, error: error.message }); continue; }
  pushed += data ?? batch.length;
  process.stdout.write(`\r   ${Math.min(i + BATCH_SIZE, allRows.length)} / ${allRows.length}`);
}
console.log(`\n   ${pushed} rows upserted.\n`);

// ── 5. Restore authoritative profile fields & write the audit trail ────────
console.log('🪪 Finalizing profiles + audit records…');
for (const u of mergedUsers) {
  const userId = authIdByEmail.get(u.email);
  if (!userId) continue;

  const { error } = await supabase.from('profiles').update({
    display_name: u.displayName,
    photo_url: u.photoURL,
    location: u.location,
    is_admin: ADMIN_EMAILS.includes(u.email),
    migrated_from_firebase: true,
    firebase_uids: u.firebaseUids,
    created_at: u.createdAt || undefined,
    last_seen_at: u.lastSeenAt,
    last_solved_at: u.lastSolvedAt,
  }).eq('id', userId);
  if (error) { failures.push({ email: u.email, step: 'profile_update', error: error.message }); continue; }

  const { error: auditErr } = await supabase.from('migration_audit').upsert({
    run_id: RUN_ID,
    email: u.email,
    supabase_user_id: userId,
    firebase_uids: u.firebaseUids,
    merged_duplicates: u.mergedDuplicates,
    source_docs: u.firebaseUids.map((uid) => ({
      uid,
      inUsers: Boolean(snapshot.users[uid]),
      inUserProgress: Boolean(snapshot.userProgress[uid]),
    })),
    solved_count: u.counts.solved,
    revision_count: u.counts.revision,
    notes_count: u.counts.notes,
  }, { onConflict: 'run_id,email' });
  if (auditErr) failures.push({ email: u.email, step: 'audit', error: auditErr.message });
}

writeFileSync(`${SNAPSHOT_DIR}/migration-result-latest.json`, JSON.stringify({ RUN_ID, pushedRows: pushed, users: mergedUsers.length, failures, skippedNoEmail }, null, 2));

console.log('═══════════════ MIGRATION SUMMARY ═══════════════');
console.log(`Users migrated : ${mergedUsers.length - failures.filter((f) => f.step === 'createUser').length} / ${mergedUsers.length}`);
console.log(`Progress rows  : ${pushed} / ${allRows.length}`);
console.log(`Failures       : ${failures.length}${failures.length ? '  → see migration-result-latest.json' : ''}`);
console.log(`Firebase       : untouched (read-only source)`);
console.log('══════════════════════════════════════════════════');
console.log('Next: npm run validate');
process.exit(failures.length ? 1 : 0);
