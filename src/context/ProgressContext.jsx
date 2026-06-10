import React, { createContext, useState, useEffect, useContext, useRef } from 'react';
import { db } from '../firebase-config';
import { doc, getDoc, setDoc, deleteField, serverTimestamp } from 'firebase/firestore';
import { AuthContext } from './AuthContext';
import { SHEETS, fetchAndParseSheet } from '../utils/dataParser';

export const ProgressContext = createContext();

const emptyQuestionProgress = { status: false, revision: false, note: '' };

const mergeQuestionProgress = (existing = emptyQuestionProgress, incoming = emptyQuestionProgress) => ({
  status: Boolean(existing.status) || Boolean(incoming.status),
  revision: Boolean(existing.revision) || Boolean(incoming.revision),
  note: existing.note || incoming.note || '',
});

const countSolvedQuestions = (progressData) => {
  let totalSolved = 0;
  Object.values(progressData || {}).forEach(sheet => {
    Object.values(sheet || {}).forEach(q => {
      if (q?.status) totalSolved++;
    });
  });
  return totalSolved;
};

// ─────────────────────────────────────────────────────────────
// Detects whether `progress` contains ANY flat boolean values,
// meaning it needs migration (handles pure old format AND the
// mixed state where a previous partial migration left both flat
// booleans and a nested a2z_flawless map side by side).
// ─────────────────────────────────────────────────────────────
const isOldFormat = (prog) => {
  const vals = Object.values(prog || {});
  if (vals.length === 0) return false;
  // Any boolean value at the top level = needs migration
  return vals.some(v => typeof v === 'boolean');
};

// Build the full set of question IDs that belong to the A2Z sheet specifically.
const buildA2ZQuestionIds = async () => {
  const ids = new Set();
  const parsed = await fetchAndParseSheet('a2z_flawless');
  if (!parsed) return ids;
  const traverse = (groups) => {
    groups.forEach(g => {
      (g.questions || []).forEach(q => { if (q.id) ids.add(q.id); });
      (g.subcategories || []).forEach(sub => traverse([sub]));
    });
  };
  traverse(parsed.data);
  return ids;
};

// ─────────────────────────────────────────────────────────────
// Handles three states of `cloudProgress`:
//   1. Pure old flat:  { qId: boolean, ... }
//   2. Pure new:       { a2z_flawless: { qId: { status, revision } } }
//   3. Mixed (the real case): both flat booleans AND a2z_flawless
//      map exist at the top level because a prior migration ran
//      partially. We must preserve the already-nested data and
//      migrate only the remaining flat booleans.
// ─────────────────────────────────────────────────────────────
const migrateToNewFormat = (cloudProgress, flatRevision) => {
  const newProgress = { a2z_flawless: {} };

  // Step 1: Preserve any data already correctly nested under a2z_flawless
  const existingA2Z = cloudProgress?.a2z_flawless;
  if (existingA2Z && typeof existingA2Z === 'object') {
    Object.assign(newProgress.a2z_flawless, existingA2Z);
  }

  // Step 2: Migrate flat boolean entries — skip nested maps like a2z_flawless itself
  Object.entries(cloudProgress || {}).forEach(([qId, val]) => {
    if (typeof val !== 'boolean') return;
    const existing = newProgress.a2z_flawless[qId] || emptyQuestionProgress;
    newProgress.a2z_flawless[qId] = mergeQuestionProgress(existing, { status: val === true });
  });

  // Step 3: Merge the flat revision map
  Object.entries(flatRevision || {}).forEach(([qId, val]) => {
    const existing = newProgress.a2z_flawless[qId] || emptyQuestionProgress;
    newProgress.a2z_flawless[qId] = mergeQuestionProgress(existing, { revision: val === true });
  });

  return newProgress;
};

// ─────────────────────────────────────────────────────────────
// Detect if new-format Firestore data has A2Z questions sitting
// in the wrong sheet bucket (e.g. SDE, blind75, neetcode150…).
// ─────────────────────────────────────────────────────────────
const hasScatteredA2ZProgress = (nestedProgress, a2zIds) => {
  for (const [sheetKey, questions] of Object.entries(nestedProgress)) {
    if (sheetKey === 'a2z_flawless') continue;
    if (!questions || typeof questions !== 'object') continue;
    for (const qId of Object.keys(questions)) {
      if (a2zIds.has(qId)) return true;
    }
  }
  return false;
};

// Consolidate: move all A2Z questions to a2z_flawless, keep others where they are.
const consolidateA2ZProgress = (nestedProgress, a2zIds) => {
  const fixed = {};

  for (const [sheetKey, questions] of Object.entries(nestedProgress)) {
    if (!questions || typeof questions !== 'object') continue;

    for (const [qId, qData] of Object.entries(questions)) {
      const realSheet = a2zIds.has(qId) ? 'a2z_flawless' : sheetKey;
      if (!fixed[realSheet]) fixed[realSheet] = {};

      const existing = fixed[realSheet][qId];
      if (!existing) {
        fixed[realSheet][qId] = { ...emptyQuestionProgress, ...qData };
      } else {
        fixed[realSheet][qId] = mergeQuestionProgress(existing, qData);
      }
    }
  }

  return fixed;
};

export const ProgressProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [progress, setProgress] = useState({});
  const [loadingCloud, setLoadingCloud] = useState(false);
  const progressRef = useRef(progress);

  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  // ─────────────────────────────────────────────────────────────
  // FIX (Bug 1): Track which uid we've already fetched for.
  // Firebase Auth fires onAuthStateChanged multiple times per
  // session (token refresh, profile updates, etc.), causing
  // `user` object reference to change even though it's the same
  // person. Without this guard, fetchCloudProgress re-runs and
  // overwrites the user's freshly-ticked progress with the older
  // data it reads back from Firestore before the tick write lands.
  // ─────────────────────────────────────────────────────────────
  const fetchedForUid = useRef(null);

  // 1. Initial Load from LocalStorage (for guest or initial state)
  useEffect(() => {
    const stored = localStorage.getItem('dsaTrackerProgress');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        // Skip old flat format — wait for Firestore migration
        if (isOldFormat(parsed)) return;

        // Validate: all top-level keys must be valid sheet IDs
        const validSheetIds = new Set(SHEETS.map(s => s.id));
        const storedKeys = Object.keys(parsed);
        const hasInvalidKey = storedKeys.some(k => !validSheetIds.has(k));
        if (hasInvalidKey) {
          console.log('🧹 Clearing corrupted localStorage progress (invalid sheet keys).');
          localStorage.removeItem('dsaTrackerProgress');
          return;
        }

        setProgress(parsed);
      } catch (_) { }
    }
  }, []);

  // 2. Fetch from Firestore on login — migrate or consolidate if needed
  useEffect(() => {
    // When user logs out, reset the guard so the next login fetches fresh.
    if (!user) {
      fetchedForUid.current = null;
      return;
    }

    // ── BUG 1 FIX: Only fetch once per uid, not on every re-render ──
    // Firebase frequently re-emits the same user (token refresh, etc.).
    // Without this check those re-emissions re-run the fetch, reading
    // stale Firestore data that then stomps on any ticks the user just made.
    if (fetchedForUid.current === user.uid) return;
    fetchedForUid.current = user.uid;

    const fetchCloudProgress = async () => {
      setLoadingCloud(true);
      try {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const docData = docSnap.data();
          const cloudProgress = docData.progress || {};
          const cloudRevision = docData.revision || {};

          let dataToLoad = cloudProgress;
          let needsWrite = false;
          let shouldDeleteOldRevision = false;

          // ── Case 1: Old flat format { questionId: boolean } ──
          if (
            isOldFormat(cloudProgress) ||
            (Object.keys(cloudProgress).length === 0 && Object.keys(cloudRevision).length > 0)
          ) {
            console.log('⚙️ Old flat format detected, migrating to nested…');
            // BUG 2 FIX: No ID filtering — pass only flat maps, keep all questions.
            dataToLoad = migrateToNewFormat(cloudProgress, cloudRevision);
            console.log('📦 Migration result:', Object.entries(dataToLoad).map(([k, v]) => `${k}: ${Object.keys(v).length}`));
            needsWrite = true;
            // After migration, wipe the old `revision` field so this branch
            // never triggers again for this user on future logins.
            shouldDeleteOldRevision = Object.keys(cloudRevision).length > 0;
          }
          // ── Case 2: New nested format but A2Z questions in wrong buckets ──
          else if (Object.keys(cloudProgress).length > 0) {
            const a2zIds = await buildA2ZQuestionIds();
            if (hasScatteredA2ZProgress(cloudProgress, a2zIds)) {
              console.log('🔧 A2Z questions found in wrong sheet buckets — consolidating…');
              dataToLoad = consolidateA2ZProgress(cloudProgress, a2zIds);
              console.log('📦 Consolidation result:', Object.entries(dataToLoad).map(([k, v]) => `${k}: ${Object.keys(v).length}`));
              needsWrite = true;
            }
          }

          // Count real entries to decide if cloud has data
          const cloudCount = Object.values(dataToLoad).reduce(
            (sum, sheet) => sum + Object.keys(sheet || {}).length, 0
          );

          if (cloudCount > 0) {
            setProgress(dataToLoad);
            localStorage.setItem('dsaTrackerProgress', JSON.stringify(dataToLoad));

            if (needsWrite) {
              const totalSolved = countSolvedQuestions(dataToLoad);

              await setDoc(docRef, {
                progress: dataToLoad,
                totalSolved,
                displayName: user.displayName || '',
                email: user.email || '',
                photoURL: user.photoURL || '',
                updatedAt: serverTimestamp(),
                // Remove the stale flat `revision` field so migration never re-fires.
                ...(shouldDeleteOldRevision ? { revision: deleteField() } : {}),
              }, { merge: true });
              console.log('✅ Fixed progress saved to Firestore.');
            }
          } else {
            // Cloud has no data → sync local to cloud
            console.log('Cloud empty, syncing local progress to cloud.');
            const localStored = localStorage.getItem('dsaTrackerProgress');
            if (localStored) {
              try {
                const localData = JSON.parse(localStored);
                if (!isOldFormat(localData) && Object.keys(localData).length > 0) {
                  await setDoc(docRef, { progress: localData }, { merge: true });
                  setProgress(localData);
                }
              } catch (_) { }
            }
          }
        } else {
          // No cloud doc at all → sync local to cloud or create new doc
          console.log('No cloud doc. Creating one and syncing local data...');
          const localStored = localStorage.getItem('dsaTrackerProgress');
          let localData = {};
          if (localStored) {
            try {
              const parsed = JSON.parse(localStored);
              if (!isOldFormat(parsed)) localData = parsed;
            } catch (_) { }
          }

          const totalSolved = countSolvedQuestions(localData);

          await setDoc(docRef, {
            progress: localData,
            totalSolved,
            displayName: user.displayName || '',
            email: user.email || '',
            photoURL: user.photoURL || '',
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
          }, { merge: true });
        }
      } catch (error) {
        console.error('Error fetching cloud progress:', error);
      } finally {
        setLoadingCloud(false);
      }
    };

    fetchCloudProgress();
  }, [user]);

  // ─────────────────────────────────────────────────────────────
  // FIX (Bug 3): Proper deep copy of the affected sheet so we
  // never mutate the existing progress state object in place.
  // The old code did `{ ...progress }` (shallow) which meant
  // `newProgress[sheetId]` was still the SAME object reference
  // as `progress[sheetId]`, so mutating it also mutated the
  // current state — a React anti-pattern that can cause subtle
  // update/batching bugs.
  // ─────────────────────────────────────────────────────────────
  const updateQuestionStatus = async (sheetId, questionId, status, isRevision = false) => {
    const currentProgress = progressRef.current;
    const newProgress = {
      ...currentProgress,
      [sheetId]: {
        ...(currentProgress[sheetId] || {}),
        [questionId]: {
          ...(currentProgress[sheetId]?.[questionId] || emptyQuestionProgress),
          [isRevision ? 'revision' : 'status']: status,
        },
      },
    };

    progressRef.current = newProgress;
    setProgress(newProgress);
    localStorage.setItem('dsaTrackerProgress', JSON.stringify(newProgress));

    if (user) {
      try {
        const docRef = doc(db, 'users', user.uid);

        const totalSolved = countSolvedQuestions(newProgress);

        await setDoc(docRef, {
          progress: newProgress,
          totalSolved,
          displayName: user.displayName || '',
          email: user.email || '',
          photoURL: user.photoURL || '',
          ...(!isRevision && status ? { lastSolvedAt: serverTimestamp() } : {}),
          updatedAt: serverTimestamp(),
        }, { merge: true });
      } catch (error) {
        console.error('Error syncing to Firestore:', error);
      }
    }
  };

  const updateQuestionNote = async (sheetId, questionId, note) => {
    const currentProgress = progressRef.current;
    const currentNote = currentProgress[sheetId]?.[questionId]?.note || '';
    if (currentNote === note) return;

    const newProgress = {
      ...currentProgress,
      [sheetId]: {
        ...(currentProgress[sheetId] || {}),
        [questionId]: {
          ...(currentProgress[sheetId]?.[questionId] || emptyQuestionProgress),
          note,
        },
      },
    };

    progressRef.current = newProgress;
    setProgress(newProgress);
    localStorage.setItem('dsaTrackerProgress', JSON.stringify(newProgress));

    if (user) {
      try {
        const docRef = doc(db, 'users', user.uid);

        await setDoc(docRef, {
          progress: newProgress,
          totalSolved: countSolvedQuestions(newProgress),
          displayName: user.displayName || '',
          email: user.email || '',
          photoURL: user.photoURL || '',
          updatedAt: serverTimestamp(),
        }, { merge: true });
      } catch (error) {
        console.error('Error syncing note to Firestore:', error);
      }
    }
  };

  const getSheetStats = (sheetId, totalQuestions) => {
    const sheetProgress = progress[sheetId] || {};
    let completed = 0;
    let revision = 0;

    Object.values(sheetProgress).forEach(q => {
      if (q.status) completed++;
      if (q.revision) revision++;
    });

    return {
      completed,
      revision,
      total: totalQuestions,
      percentage: totalQuestions === 0 ? 0 : Math.round((completed / totalQuestions) * 100),
    };
  };

  return (
    <ProgressContext.Provider value={{ progress, updateQuestionStatus, updateQuestionNote, getSheetStats, loadingCloud }}>
      {children}
    </ProgressContext.Provider>
  );
};
