import React, { createContext, useState, useEffect, useContext, useRef } from 'react';
import { db } from '../firebase-config';
import { doc, getDoc, setDoc, deleteField, serverTimestamp } from 'firebase/firestore';
import { AuthContext } from './AuthContext';
import { SHEETS, fetchAndParseSheet } from '../utils/dataParser';

export const ProgressContext = createContext();

// ─────────────────────────────────────────────────────────────
// Detects old flat format: { questionId: boolean }
// vs new nested format:  { sheetId: { questionId: { status } } }
// ─────────────────────────────────────────────────────────────
const isOldFormat = (prog) => {
  const vals = Object.values(prog || {});
  if (vals.length === 0) return false;
  return typeof vals[0] === 'boolean';
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
// FIX (Bug 2): Removed the `if (!a2zIds.has(qId)) return` filter.
// That filter was silently dropping all progress when old project
// question IDs didn't exactly match the new project's JSON IDs,
// which caused the migration to produce empty data and then
// re-trigger on every login — wiping new ticks each time.
// All old progress belongs to a2z_flawless, so we keep everything.
// ─────────────────────────────────────────────────────────────
const migrateToNewFormat = (flatProgress, flatRevision) => {
  const newProgress = { a2z_flawless: {} };

  const allIds = new Set([
    ...Object.keys(flatProgress || {}),
    ...Object.keys(flatRevision || {}),
  ]);

  allIds.forEach(qId => {
    newProgress.a2z_flawless[qId] = {
      status: flatProgress?.[qId] === true,
      revision: flatRevision?.[qId] === true,
    };
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
        fixed[realSheet][qId] = qData;
      } else {
        fixed[realSheet][qId] = {
          status: existing.status || qData.status,
          revision: existing.revision || qData.revision,
        };
      }
    }
  }

  return fixed;
};

export const ProgressProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [progress, setProgress] = useState({});
  const [loadingCloud, setLoadingCloud] = useState(false);

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
    if (!user) {
      sessionStorage.removeItem('pg_fetched_uid');
      return;
    }

    // Survive component remounts from OAuth popup — use sessionStorage not useRef
    if (sessionStorage.getItem('pg_fetched_uid') === user.uid) return;
    sessionStorage.setItem('pg_fetched_uid', user.uid);

    const fetchCloudProgress = async () => {
      // ... rest of your fetch logic unchanged ...
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
    const newProgress = {
      ...progress,
      [sheetId]: {
        ...(progress[sheetId] || {}),
        [questionId]: {
          ...(progress[sheetId]?.[questionId] || { status: false, revision: false }),
          [isRevision ? 'revision' : 'status']: status,
        },
      },
    };

    setProgress(newProgress);
    localStorage.setItem('dsaTrackerProgress', JSON.stringify(newProgress));

    if (user) {
      try {
        const docRef = doc(db, 'users', user.uid);

        let totalSolved = 0;
        Object.values(newProgress).forEach(sheet => {
          Object.values(sheet).forEach(q => { if (q.status) totalSolved++; });
        });

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
    <ProgressContext.Provider value={{ progress, updateQuestionStatus, getSheetStats, loadingCloud }}>
      {children}
    </ProgressContext.Provider>
  );
};