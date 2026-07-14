import React, { createContext, useState, useEffect, useContext, useRef } from 'react';
import { db } from '../firebase-config';
import { doc, getDoc, setDoc, deleteField, serverTimestamp } from 'firebase/firestore';
import { AuthContext } from './AuthContext';
import { SHEETS, fetchAndParseSheet } from '../utils/dataParser';

export const ProgressContext = createContext();

const emptyQuestionProgress = { status: false, revision: false, note: '', updatedAt: 0 };
const LEGACY_PROGRESS_STORAGE_KEY = 'dsaTrackerProgress';
const PROGRESS_STORAGE_PREFIX = 'dsaTrackerProgress';
const PENDING_PROGRESS_STORAGE_PREFIX = 'dsaTrackerPendingProgress';

const getProgressStorageKey = (uid) => uid
  ? `${PROGRESS_STORAGE_PREFIX}:${uid}`
  : LEGACY_PROGRESS_STORAGE_KEY;

const getPendingProgressStorageKey = (uid) => `${PENDING_PROGRESS_STORAGE_PREFIX}:${uid}`;

const getValidSheetIds = () => new Set(SHEETS.map(s => s.id));

const normalizeQuestionProgress = (value) => {
  if (typeof value === 'boolean') {
    return { ...emptyQuestionProgress, status: value, updatedAt: 0 };
  }

  if (!value || typeof value !== 'object') {
    return emptyQuestionProgress;
  }

  return {
    status: Boolean(value.status),
    revision: Boolean(value.revision),
    note: value.note || '',
    updatedAt: Number(value.updatedAt) || 0,
  };
};

const mergeQuestionProgress = (existing = emptyQuestionProgress, incoming = emptyQuestionProgress) => {
  const normalizedExisting = normalizeQuestionProgress(existing);
  const normalizedIncoming = normalizeQuestionProgress(incoming);

  if (normalizedIncoming.updatedAt > normalizedExisting.updatedAt) {
    return normalizedIncoming;
  }

  if (normalizedExisting.updatedAt > normalizedIncoming.updatedAt) {
    return normalizedExisting;
  }

  // Legacy progress has no per-question timestamp. Prefer preserving solved
  // work instead of allowing an old empty browser copy to reset cloud progress.
  return {
    status: normalizedExisting.status || normalizedIncoming.status,
    revision: normalizedExisting.revision || normalizedIncoming.revision,
    note: normalizedIncoming.note || normalizedExisting.note || '',
    updatedAt: normalizedIncoming.updatedAt || normalizedExisting.updatedAt || 0,
  };
};

const mergeProgressData = (...progressSources) => {
  const validSheetIds = getValidSheetIds();
  const merged = {};

  progressSources.forEach(progressData => {
    Object.entries(progressData || {}).forEach(([sheetId, questions]) => {
      if (!validSheetIds.has(sheetId) || !questions || typeof questions !== 'object') return;

      Object.entries(questions).forEach(([questionId, questionProgress]) => {
        const normalized = normalizeQuestionProgress(questionProgress);
        const existing = merged[sheetId]?.[questionId] || emptyQuestionProgress;
        const next = mergeQuestionProgress(existing, normalized);

        if (!merged[sheetId]) merged[sheetId] = {};
        merged[sheetId][questionId] = next;
      });
    });
  });

  return merged;
};

const normalizeStoredProgress = (progressData) => {
  if (!progressData || typeof progressData !== 'object') return {};
  if (isOldFormat(progressData)) return migrateToNewFormat(progressData, {});
  return mergeProgressData(progressData);
};

const stableProgressData = (progressData) => {
  const normalized = mergeProgressData(progressData);
  return Object.keys(normalized).sort().reduce((sheetAcc, sheetId) => {
    sheetAcc[sheetId] = Object.keys(normalized[sheetId]).sort().reduce((questionAcc, questionId) => {
      questionAcc[questionId] = normalizeQuestionProgress(normalized[sheetId][questionId]);
      return questionAcc;
    }, {});
    return sheetAcc;
  }, {});
};

const progressDataEquals = (left, right) => (
  JSON.stringify(stableProgressData(left)) === JSON.stringify(stableProgressData(right))
);

const hasProgressEntries = (progressData) => (
  Object.values(progressData || {}).some(sheet => Object.keys(sheet || {}).length > 0)
);

const readProgressFromStorageKey = (key) => {
  try {
    const stored = localStorage.getItem(key);
    return stored ? normalizeStoredProgress(JSON.parse(stored)) : {};
  } catch (_) {
    return {};
  }
};

const readStoredProgress = (uid) => {
  if (!uid) return readProgressFromStorageKey(LEGACY_PROGRESS_STORAGE_KEY);

  const userProgress = readProgressFromStorageKey(getProgressStorageKey(uid));
  if (hasProgressEntries(userProgress)) return userProgress;

  return readProgressFromStorageKey(LEGACY_PROGRESS_STORAGE_KEY);
};

const saveStoredProgress = (uid, progressData) => {
  try {
    localStorage.setItem(getProgressStorageKey(uid), JSON.stringify(mergeProgressData(progressData)));
  } catch (error) {
    console.error('Failed to save progress locally:', error);
  }
};

const readPendingProgress = (uid) => {
  if (!uid) return {};
  return readProgressFromStorageKey(getPendingProgressStorageKey(uid));
};

const savePendingProgress = (uid, progressData) => {
  if (!uid) return;
  try {
    localStorage.setItem(getPendingProgressStorageKey(uid), JSON.stringify(mergeProgressData(progressData)));
  } catch (error) {
    console.error('Failed to queue pending progress sync:', error);
  }
};

const clearPendingProgress = (uid) => {
  if (!uid) return;
  try {
    localStorage.removeItem(getPendingProgressStorageKey(uid));
  } catch (_) { }
};

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

const saveProgressToCloud = async (firebaseUser, progressData, extraFields = {}) => {
  const docRef = doc(db, 'users', firebaseUser.uid);
  const normalizedProgress = mergeProgressData(progressData);

  await setDoc(docRef, {
    progress: normalizedProgress,
    totalSolved: countSolvedQuestions(normalizedProgress),
    displayName: firebaseUser.displayName || '',
    email: firebaseUser.email || '',
    photoURL: firebaseUser.photoURL || '',
    updatedAt: serverTimestamp(),
    ...extraFields,
  }, { merge: true });
};

export const ProgressProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const userUid = user?.uid;
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

  // 1. Load local progress for the current signed-in user (or guest).
  // Older builds used one shared localStorage key, so signed-in users also
  // merge that legacy copy once and then continue with their uid-scoped key.
  useEffect(() => {
    const storedProgress = readStoredProgress(userUid);
    progressRef.current = storedProgress;
    setProgress(storedProgress);
  }, [userUid]);

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

    let cancelled = false;

    const fetchCloudProgress = async () => {
      setLoadingCloud(true);
      try {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        const localProgress = readStoredProgress(user.uid);
        const pendingProgress = readPendingProgress(user.uid);
        let cloudDataToLoad = {};
        let needsWrite = false;
        let shouldDeleteOldRevision = false;
        let extraWriteFields = {};

        if (docSnap.exists()) {
          const docData = docSnap.data();
          const cloudProgress = docData.progress || {};
          const cloudRevision = docData.revision || {};

          cloudDataToLoad = normalizeStoredProgress(cloudProgress);

          // ── Case 1: Old flat format { questionId: boolean } ──
          if (
            isOldFormat(cloudProgress) ||
            (Object.keys(cloudProgress).length === 0 && Object.keys(cloudRevision).length > 0)
          ) {
            console.log('⚙️ Old flat format detected, migrating to nested…');
            // BUG 2 FIX: No ID filtering — pass only flat maps, keep all questions.
            cloudDataToLoad = migrateToNewFormat(cloudProgress, cloudRevision);
            console.log('📦 Migration result:', Object.entries(cloudDataToLoad).map(([k, v]) => `${k}: ${Object.keys(v).length}`));
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
              cloudDataToLoad = consolidateA2ZProgress(cloudProgress, a2zIds);
              console.log('📦 Consolidation result:', Object.entries(cloudDataToLoad).map(([k, v]) => `${k}: ${Object.keys(v).length}`));
              needsWrite = true;
            }
          }
        } else {
          // No cloud doc at all → sync local to cloud or create new doc
          console.log('No cloud doc. Creating one and syncing local data...');
          needsWrite = true;
          extraWriteFields = {
            createdAt: serverTimestamp(),
          };
        }

        const mergedProgress = mergeProgressData(cloudDataToLoad, localProgress, pendingProgress);
        const shouldWriteMerged = (
          needsWrite ||
          !progressDataEquals(mergedProgress, cloudDataToLoad) ||
          hasProgressEntries(pendingProgress)
        );

        if (!cancelled) {
          progressRef.current = mergedProgress;
          setProgress(mergedProgress);
          saveStoredProgress(user.uid, mergedProgress);
        }

        if (shouldWriteMerged) {
          await saveProgressToCloud(user, mergedProgress, {
            ...extraWriteFields,
            // Remove the stale flat `revision` field so migration never re-fires.
            ...(shouldDeleteOldRevision ? { revision: deleteField() } : {}),
          });
          clearPendingProgress(user.uid);
          console.log('✅ Progress merged and saved to Firestore.');
        }
      } catch (error) {
        console.error('Error fetching cloud progress:', error);
        const fallbackProgress = mergeProgressData(
          progressRef.current,
          readStoredProgress(user.uid),
          readPendingProgress(user.uid)
        );
        progressRef.current = fallbackProgress;
        setProgress(fallbackProgress);
        saveStoredProgress(user.uid, fallbackProgress);
        savePendingProgress(user.uid, fallbackProgress);
      } finally {
        if (!cancelled) setLoadingCloud(false);
      }
    };

    fetchCloudProgress();

    return () => {
      cancelled = true;
    };
  }, [user]);

  useEffect(() => {
    if (!user) return undefined;

    let syncing = false;

    const flushPendingProgress = async () => {
      if (syncing || navigator.onLine === false) return;

      const pendingProgress = readPendingProgress(user.uid);
      if (!hasProgressEntries(pendingProgress)) return;

      syncing = true;
      const mergedProgress = mergeProgressData(progressRef.current, pendingProgress);
      try {
        await saveProgressToCloud(user, mergedProgress);
        clearPendingProgress(user.uid);
        progressRef.current = mergedProgress;
        setProgress(mergedProgress);
        saveStoredProgress(user.uid, mergedProgress);
      } catch (error) {
        console.error('Error retrying pending progress sync:', error);
        savePendingProgress(user.uid, mergedProgress);
      } finally {
        syncing = false;
      }
    };

    flushPendingProgress();
    const intervalId = window.setInterval(flushPendingProgress, 60 * 1000);
    window.addEventListener('focus', flushPendingProgress);
    window.addEventListener('online', flushPendingProgress);

    return () => {
      window.clearInterval(intervalId);
      window.removeEventListener('focus', flushPendingProgress);
      window.removeEventListener('online', flushPendingProgress);
    };
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
          updatedAt: Date.now(),
        },
      },
    };

    progressRef.current = newProgress;
    setProgress(newProgress);
    saveStoredProgress(userUid, newProgress);

    if (user) {
      try {
        await saveProgressToCloud(user, newProgress, {
          ...(!isRevision && status ? { lastSolvedAt: serverTimestamp() } : {}),
        });
        clearPendingProgress(user.uid);
      } catch (error) {
        console.error('Error syncing to Firestore:', error);
        savePendingProgress(user.uid, newProgress);
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
          updatedAt: Date.now(),
        },
      },
    };

    progressRef.current = newProgress;
    setProgress(newProgress);
    saveStoredProgress(userUid, newProgress);

    if (user) {
      try {
        await saveProgressToCloud(user, newProgress);
        clearPendingProgress(user.uid);
      } catch (error) {
        console.error('Error syncing note to Firestore:', error);
        savePendingProgress(user.uid, newProgress);
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
