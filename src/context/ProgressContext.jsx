import React, { createContext, useState, useEffect, useContext } from 'react';
import { db } from '../firebase-config';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
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

// Migrate old flat format { questionId: boolean } → new nested format.
// Since all old progress was from A2Z only, everything goes to a2z_flawless.
const migrateToNewFormat = (flatProgress, flatRevision, a2zIds) => {
  const newProgress = { a2z_flawless: {} };

  const allIds = new Set([
    ...Object.keys(flatProgress || {}),
    ...Object.keys(flatRevision || {}),
  ]);

  allIds.forEach(qId => {
    if (!a2zIds.has(qId)) return; // skip unknown IDs
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
// This happened because a prior migration ran when the JSON IDs
// were temporarily prefixed, causing mis-assignment.
// ─────────────────────────────────────────────────────────────
const hasScatteredA2ZProgress = (nestedProgress, a2zIds) => {
  for (const [sheetKey, questions] of Object.entries(nestedProgress)) {
    if (sheetKey === 'a2z_flawless') continue;
    if (!questions || typeof questions !== 'object') continue;
    for (const qId of Object.keys(questions)) {
      if (a2zIds.has(qId)) return true; // A2Z question in wrong bucket
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
      // Determine the real bucket: if the question belongs to A2Z, force it there
      const realSheet = a2zIds.has(qId) ? 'a2z_flawless' : sheetKey;

      if (!fixed[realSheet]) fixed[realSheet] = {};

      const existing = fixed[realSheet][qId];
      if (!existing) {
        fixed[realSheet][qId] = qData;
      } else {
        // Merge: keep any truthy state
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
          // Corrupted/scattered data — discard, let Firestore provide correct data
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
    const fetchCloudProgress = async () => {
      if (!user) return;

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

          // ── Case 1: Old flat format { questionId: boolean } ──
          if (
            isOldFormat(cloudProgress) ||
            (Object.keys(cloudProgress).length === 0 && Object.keys(cloudRevision).length > 0)
          ) {
            console.log('⚙️ Old flat format detected, migrating to nested…');
            const a2zIds = await buildA2ZQuestionIds();
            console.log('📋 A2Z IDs loaded:', a2zIds.size);
            console.log('🔑 Firestore keys (sample):', Object.keys(cloudProgress).slice(0, 5));
            dataToLoad = migrateToNewFormat(cloudProgress, cloudRevision, a2zIds);
            console.log('📦 Migration result:', Object.entries(dataToLoad).map(([k, v]) => `${k}: ${Object.keys(v).length}`));
            needsWrite = true;
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
              let totalSolved = 0;
              Object.values(dataToLoad).forEach(sheet => {
                Object.values(sheet).forEach(q => { if (q.status) totalSolved++; });
              });
              await setDoc(docRef, {
                progress: dataToLoad,
                totalSolved,
                displayName: user.displayName || '',
                email: user.email || '',
                photoURL: user.photoURL || '',
                updatedAt: serverTimestamp(),
              }, { merge: true });
              console.log('✅ Fixed progress saved to Firestore.');
            }
          } else {
            // Cloud has no data → sync local to cloud
            console.log('Cloud empty, syncing local progress to cloud.');
            const localStored = localStorage.getItem('dsaTrackerProgress');
            if (localStored) {
              const localData = JSON.parse(localStored);
              if (!isOldFormat(localData)) {
                await setDoc(docRef, { progress: localData }, { merge: true });
              }
            }
          }
        } else {
          // No cloud doc at all → sync local to cloud or create new doc
          console.log('No cloud doc. Creating one and syncing local data...');
          const localStored = localStorage.getItem('dsaTrackerProgress');
          let localData = {};
          if (localStored) {
            const parsed = JSON.parse(localStored);
            if (!isOldFormat(parsed)) {
              localData = parsed;
            }
          }
          
          let totalSolved = 0;
          Object.values(localData).forEach(sheet => {
            Object.values(sheet).forEach(q => { if (q.status) totalSolved++; });
          });

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

  const updateQuestionStatus = async (sheetId, questionId, status, isRevision = false) => {
    const newProgress = { ...progress };
    if (!newProgress[sheetId]) newProgress[sheetId] = {};
    if (!newProgress[sheetId][questionId]) {
      newProgress[sheetId][questionId] = { status: false, revision: false };
    }

    if (isRevision) {
      newProgress[sheetId][questionId].revision = status;
    } else {
      newProgress[sheetId][questionId].status = status;
    }

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
