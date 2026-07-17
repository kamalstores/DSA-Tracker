// ═══════════════════════════════════════════════════════════════════════════
// Normalization of legacy Firestore progress data.
//
// This module faithfully reproduces (and slightly extends) the semantics the
// React app used in ProgressContext/AdminDashboard, so that what a user saw
// in the app is exactly what lands in Supabase:
//
//   Format 1  (oldest): users/{uid}.progress = { "<qId>": true, ... }
//             plus an optional flat users/{uid}.revision = { "<qId>": true }
//             → all belong to the a2z_flawless sheet.
//   Format 2  (nested): progress = { "<sheetId>": { "<qId>": {status,revision,note,updatedAt} } }
//   Format 3  (mixed):  both of the above in one document.
//   Anomaly A (scatter): A2Z question ids stored under the wrong sheet bucket.
//   Anomaly B (stray):   top-level keys that are single question objects.
//   Anomaly C (unknown): sheet-like keys not in the known sheet list — the old
//             app silently DROPPED these; we preserve them (no data loss).
//
// Merge semantics (same as the app's mergeQuestionProgress):
//   higher updatedAt wins outright; on ties booleans are OR-ed and the
//   incoming non-empty note is preferred.
// ═══════════════════════════════════════════════════════════════════════════

export const VALID_SHEET_IDS = new Set([
  'a2z_flawless', 'SDE', 'blind75', 'neetcode150', 'neetcode250', 'striver_cp',
]);

export const EMPTY_Q = Object.freeze({ status: false, revision: false, note: '', updatedAt: 0 });

export function normalizeQuestionProgress(value) {
  if (typeof value === 'boolean') return { ...EMPTY_Q, status: value };
  if (!value || typeof value !== 'object') return { ...EMPTY_Q };
  return {
    status: Boolean(value.status),
    revision: Boolean(value.revision),
    note: typeof value.note === 'string' ? value.note : '',
    updatedAt: Number(value.updatedAt) || 0,
  };
}

export function mergeQuestionProgress(existing = EMPTY_Q, incoming = EMPTY_Q) {
  const a = normalizeQuestionProgress(existing);
  const b = normalizeQuestionProgress(incoming);
  if (b.updatedAt > a.updatedAt) return b;
  if (a.updatedAt > b.updatedAt) return a;
  return {
    status: a.status || b.status,
    revision: a.revision || b.revision,
    note: b.note || a.note || '',
    updatedAt: b.updatedAt || a.updatedAt || 0,
  };
}

const looksLikeQuestionObject = (v) =>
  v && typeof v === 'object' && !Array.isArray(v) &&
  ('status' in v || 'revision' in v || 'note' in v || 'updatedAt' in v) &&
  Object.values(v).every((x) => typeof x !== 'object' || x === null);

/**
 * Normalize ONE document's progress payload into { sheetId: { slug: Q } }.
 * Nothing is dropped: unknown sheets are kept under their own key,
 * flat/stray entries land in a2z_flawless.
 */
export function normalizeDocProgress(rawProgress, rawRevision, a2zIds) {
  const out = {};
  const put = (sheetId, slug, value) => {
    if (!slug || typeof slug !== 'string') return;
    const target = a2zIds.has(slug) ? 'a2z_flawless' : sheetId; // scatter fix
    if (!out[target]) out[target] = {};
    out[target][slug] = mergeQuestionProgress(out[target][slug], value);
  };

  for (const [key, value] of Object.entries(rawProgress || {})) {
    if (typeof value === 'boolean') {
      put('a2z_flawless', key, { ...EMPTY_Q, status: value });           // Format 1
    } else if (value && typeof value === 'object' && !Array.isArray(value)) {
      if (VALID_SHEET_IDS.has(key)) {
        for (const [slug, q] of Object.entries(value)) put(key, slug, q); // Format 2
      } else if (looksLikeQuestionObject(value)) {
        put('a2z_flawless', key, value);                                  // Anomaly B
      } else {
        for (const [slug, q] of Object.entries(value)) put(key, slug, q); // Anomaly C (preserved)
      }
    }
  }

  for (const [slug, v] of Object.entries(rawRevision || {})) {            // legacy flat revision map
    if (v === true) put('a2z_flawless', slug, { ...EMPTY_Q, revision: true });
  }

  return out;
}

/** Merge many normalized maps; later sources win ties. */
export function mergeProgressMaps(...maps) {
  const merged = {};
  for (const map of maps) {
    for (const [sheetId, questions] of Object.entries(map || {})) {
      if (!merged[sheetId]) merged[sheetId] = {};
      for (const [slug, q] of Object.entries(questions || {})) {
        merged[sheetId][slug] = mergeQuestionProgress(merged[sheetId][slug], q);
      }
    }
  }
  return merged;
}

export function countProgress(map) {
  let solved = 0, revision = 0, notes = 0, rows = 0;
  for (const questions of Object.values(map || {})) {
    for (const q of Object.values(questions)) {
      rows++;
      if (q.status) solved++;
      if (q.revision) revision++;
      if (q.note) notes++;
    }
  }
  return { solved, revision, notes, rows };
}

/** Millis of the most recent activity on a user doc (for deterministic
 *  duplicate-merge ordering). */
export function docRecency(doc, tsMillis) {
  return Math.max(
    tsMillis(doc.lastSeenAt), tsMillis(doc.updatedAt),
    tsMillis(doc.lastSolvedAt), tsMillis(doc.createdAt),
  );
}

/**
 * Merge all Firestore documents that belong to one e-mail into a single
 * canonical user record. `entries` = [{ uid, usersDoc, progressDoc }]
 * (either doc may be null). Deterministic: sources are applied oldest→newest
 * so the most recently active document wins ties.
 */
export function mergeUserEntries(email, entries, a2zIds, tsMillis) {
  const sorted = [...entries].sort((x, y) =>
    docRecency(x.usersDoc || x.progressDoc || {}, tsMillis) -
    docRecency(y.usersDoc || y.progressDoc || {}, tsMillis));

  const maps = [];
  for (const e of sorted) {
    if (e.usersDoc)    maps.push(normalizeDocProgress(e.usersDoc.progress, e.usersDoc.revision, a2zIds));
    if (e.progressDoc) maps.push(normalizeDocProgress(e.progressDoc.progress, e.progressDoc.revision, a2zIds));
  }
  const progress = mergeProgressMaps(...maps);

  const pickLatest = (field, pred = (v) => v) => {
    let best = null, bestT = -1;
    for (const e of sorted) {
      for (const d of [e.usersDoc, e.progressDoc]) {
        if (d && pred(d[field]) && docRecency(d, tsMillis) >= bestT) {
          best = d[field]; bestT = docRecency(d, tsMillis);
        }
      }
    }
    return best;
  };

  const allCreated = sorted.flatMap((e) => [e.usersDoc?.createdAt, e.progressDoc?.createdAt])
    .filter(Boolean).map((iso) => ({ iso, t: tsMillis(iso) })).filter((x) => x.t > 0);
  const allSeen = sorted.flatMap((e) => [e.usersDoc?.lastSeenAt, e.progressDoc?.lastSeenAt])
    .filter(Boolean).map((iso) => ({ iso, t: tsMillis(iso) }));
  const allSolvedAt = sorted.flatMap((e) => [e.usersDoc?.lastSolvedAt, e.progressDoc?.lastSolvedAt])
    .filter(Boolean).map((iso) => ({ iso, t: tsMillis(iso) }));

  return {
    email,
    firebaseUids: [...new Set(sorted.map((e) => e.uid))],
    displayName: pickLatest('displayName', (v) => typeof v === 'string' && v.trim()) || '',
    photoURL: pickLatest('photoURL', (v) => typeof v === 'string' && v.trim()) || '',
    location: pickLatest('location', (v) => typeof v === 'string' && v && v !== 'Unknown') || 'Unknown',
    createdAt: allCreated.length ? allCreated.reduce((a, b) => (a.t < b.t ? a : b)).iso : null,
    lastSeenAt: allSeen.length ? allSeen.reduce((a, b) => (a.t > b.t ? a : b)).iso : null,
    lastSolvedAt: allSolvedAt.length ? allSolvedAt.reduce((a, b) => (a.t > b.t ? a : b)).iso : null,
    progress,
    counts: countProgress(progress),
    mergedDuplicates: entries.length > 1,
  };
}

/** Load the set of A2Z question ids from the app's static JSON. */
export async function loadA2ZIds(dataDir) {
  const { readFile } = await import('node:fs/promises');
  const raw = JSON.parse(await readFile(`${dataDir}/a2z_flawless.json`, 'utf8'));
  const ids = new Set();
  for (const step of raw) {
    for (const sub of step.sub_steps || []) {
      for (const t of sub.topics || []) if (t.id) ids.add(t.id);
    }
  }
  return ids;
}
