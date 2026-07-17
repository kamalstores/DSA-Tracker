// ═══════════════════════════════════════════════════════════════════════════
// PHASE 1 — Audit Firebase & take an immutable snapshot.        READ-ONLY.
//
// • Downloads the `users` and `userProgress` collections and the Firebase
//   Auth user list into ./snapshots/ (timestamped + "latest" copies).
// • Never writes to, and never deletes from, Firebase. The snapshot doubles
//   as an extra offline backup of all production data.
// • Prints an audit: duplicate e-mails, orphaned docs, legacy formats,
//   scattered A2Z entries, missing e-mails, per-collection counts.
//
// Usage:  npm run audit
// ═══════════════════════════════════════════════════════════════════════════
import { mkdirSync, writeFileSync } from 'node:fs';
import { getFirebase, plainify, tsMillis, SNAPSHOT_DIR, DATA_DIR } from './lib/clients.mjs';
import { normalizeDocProgress, countProgress, loadA2ZIds, VALID_SHEET_IDS } from './lib/normalize.mjs';

const { db, auth } = getFirebase();

async function dumpCollection(name) {
  const snap = await db.collection(name).get();
  const docs = {};
  snap.forEach((d) => { docs[d.id] = plainify(d.data()); });
  return docs;
}

async function dumpAuthUsers() {
  const users = [];
  let pageToken;
  do {
    const page = await auth.listUsers(1000, pageToken);
    for (const u of page.users) {
      users.push({
        uid: u.uid,
        email: (u.email || '').toLowerCase(),
        displayName: u.displayName || '',
        photoURL: u.photoURL || '',
        createdAt: u.metadata.creationTime ? new Date(u.metadata.creationTime).toISOString() : null,
        lastSignInAt: u.metadata.lastSignInTime ? new Date(u.metadata.lastSignInTime).toISOString() : null,
        providers: u.providerData.map((p) => p.providerId),
      });
    }
    pageToken = page.pageToken;
  } while (pageToken);
  return users;
}

const ts = new Date().toISOString().replace(/[:.]/g, '-');
mkdirSync(SNAPSHOT_DIR, { recursive: true });

console.log('⬇  Downloading Firestore collections (read-only)…');
const [users, userProgress, authUsers] = await Promise.all([
  dumpCollection('users'),
  dumpCollection('userProgress'),
  dumpAuthUsers(),
]);

const snapshot = { takenAt: new Date().toISOString(), users, userProgress, authUsers };
for (const file of [`firebase-snapshot-${ts}.json`, 'firebase-snapshot-latest.json']) {
  writeFileSync(`${SNAPSHOT_DIR}/${file}`, JSON.stringify(snapshot, null, 2));
}
console.log(`💾 Snapshot saved to ${SNAPSHOT_DIR}/firebase-snapshot-${ts}.json (+ latest copy)\n`);

// ── Audit ────────────────────────────────────────────────────────────────
const a2zIds = await loadA2ZIds(DATA_DIR);
const byEmail = new Map();
const noEmail = [];
const flatFormat = [];
const scattered = [];
const unknownSheets = new Set();

const uidSet = new Set([...Object.keys(users), ...Object.keys(userProgress)]);
for (const uid of uidSet) {
  const doc = users[uid] || userProgress[uid] || {};
  const email = (doc.email || '').trim().toLowerCase();
  if (!email) { noEmail.push(uid); continue; }
  if (!byEmail.has(email)) byEmail.set(email, []);
  byEmail.get(email).push(uid);

  const prog = (users[uid] || {}).progress || {};
  if (Object.values(prog).some((v) => typeof v === 'boolean')) flatFormat.push(uid);
  for (const [key, val] of Object.entries(prog)) {
    if (val && typeof val === 'object') {
      if (!VALID_SHEET_IDS.has(key) && !('status' in val)) unknownSheets.add(key);
      if (VALID_SHEET_IDS.has(key) && key !== 'a2z_flawless') {
        if (Object.keys(val).some((slug) => a2zIds.has(slug))) scattered.push(uid);
      }
    }
  }
}

const duplicates = [...byEmail.entries()].filter(([, uids]) => uids.length > 1);
const usersOnly = Object.keys(users).filter((uid) => !userProgress[uid]);
const progressOnly = Object.keys(userProgress).filter((uid) => !users[uid]);
const authEmails = new Map(authUsers.filter((u) => u.email).map((u) => [u.email, u.uid]));
const docsWithoutAuth = [...byEmail.keys()].filter((e) => !authEmails.has(e));

// Divergence between the two collections that were supposed to be identical
let diverged = 0;
for (const uid of Object.keys(users)) {
  if (!userProgress[uid]) continue;
  const a = countProgress(normalizeDocProgress(users[uid].progress, users[uid].revision, a2zIds));
  const b = countProgress(normalizeDocProgress(userProgress[uid].progress, userProgress[uid].revision, a2zIds));
  if (a.solved !== b.solved || a.notes !== b.notes || a.revision !== b.revision) diverged++;
}

const report = {
  takenAt: snapshot.takenAt,
  totals: {
    usersCollectionDocs: Object.keys(users).length,
    userProgressCollectionDocs: Object.keys(userProgress).length,
    firebaseAuthUsers: authUsers.length,
    uniqueEmails: byEmail.size,
  },
  problems: {
    duplicateEmailDocs: duplicates.map(([email, uids]) => ({ email, uids })),
    docsMissingEmail: noEmail,
    docsWithoutAuthAccount: docsWithoutAuth,
    usersDocWithoutProgressDoc: usersOnly.length,
    progressDocWithoutUsersDoc: progressOnly,
    legacyFlatFormatDocs: flatFormat,
    scatteredA2ZDocs: [...new Set(scattered)],
    unknownSheetKeys: [...unknownSheets],
    divergedDualCollectionDocs: diverged,
  },
};
writeFileSync(`${SNAPSHOT_DIR}/audit-report-${ts}.json`, JSON.stringify(report, null, 2));
writeFileSync(`${SNAPSHOT_DIR}/audit-report-latest.json`, JSON.stringify(report, null, 2));

console.log('═══════════════ FIREBASE AUDIT ═══════════════');
console.log(`users collection docs        : ${report.totals.usersCollectionDocs}`);
console.log(`userProgress collection docs : ${report.totals.userProgressCollectionDocs}`);
console.log(`Firebase Auth users          : ${report.totals.firebaseAuthUsers}`);
console.log(`Unique e-mails in docs       : ${report.totals.uniqueEmails}`);
console.log('──────────────── problems ────────────────────');
console.log(`E-mails with DUPLICATE docs  : ${duplicates.length}${duplicates.length ? '  ← will be merged' : ''}`);
for (const [email, uids] of duplicates) console.log(`   • ${email}  →  ${uids.join(', ')}`);
console.log(`Docs missing e-mail          : ${noEmail.length}${noEmail.length ? '  ← cannot be migrated automatically, see audit json' : ''}`);
console.log(`Doc e-mails w/o Auth account : ${docsWithoutAuth.length}  (orphaned old UIDs — merged by e-mail)`);
console.log(`userProgress-only docs       : ${progressOnly.length}`);
console.log(`Legacy flat-format docs      : ${flatFormat.length}`);
console.log(`Scattered-A2Z docs           : ${new Set(scattered).size}`);
console.log(`Unknown sheet keys           : ${[...unknownSheets].join(', ') || 'none'}`);
console.log(`users/userProgress diverged  : ${diverged} docs`);
console.log('═══════════════════════════════════════════════');
console.log(`\nFull report: ${SNAPSHOT_DIR}/audit-report-${ts}.json`);
console.log('Firebase was NOT modified. Next: npm run seed');
