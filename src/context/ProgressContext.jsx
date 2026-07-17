import React, { createContext, useState, useEffect, useContext, useRef, useCallback } from 'react';
import { AuthContext } from './AuthContext';
import { supabase, ENABLE_REALTIME } from '../lib/supabaseClient';
import { fetchMyProgress, upsertQuestion } from '../services/progressService';

// ═══════════════════════════════════════════════════════════════════════════
// ProgressContext — Supabase is the single source of truth.
//
// What changed vs the Firestore version (and why the multi-device bug dies):
//   • ONE table row per (user, sheet, question) — a checkbox tick writes one
//     row, not the entire progress blob into two collections.
//   • Reads NEVER merge localStorage into cloud data. localStorage is only:
//       cache  (mdsa:v2:cache:<uid>)  — instant paint before the fetch lands,
//       outbox (mdsa:v2:outbox:<uid>) — queued writes while offline.
//     Server data always replaces the cache; the outbox replays through a
//     server-side last-write-wins guard, so a stale device can never
//     resurrect old progress ("zombie ticks") or clobber newer notes.
//   • Progress is refetched when the tab regains focus (throttled), so a
//     browser left open converges with writes made on other devices.
//     Optional realtime (VITE_ENABLE_REALTIME=true) makes that instant.
//   • The legacy shared localStorage keys that leaked progress between
//     accounts on the same machine are deleted on startup.
//
// Public contract is unchanged:
//   { progress, updateQuestionStatus, updateQuestionNote, getSheetStats,
//     loadingCloud, syncStatus, syncError, syncProgressNow }
// ═══════════════════════════════════════════════════════════════════════════

export const ProgressContext = createContext();

const emptyQuestionProgress = { status: false, revision: false, note: '', updatedAt: 0 };
const CACHE_PREFIX = 'mdsa:v2:cache:';
const OUTBOX_PREFIX = 'mdsa:v2:outbox:';
const REFRESH_THROTTLE_MS = 60 * 1000;
const FLUSH_INTERVAL_MS = 30 * 1000;

// One-time cleanup of the legacy keys that acted as a fake source of truth
// (shared 'dsaTrackerProgress' + per-uid copies + pending queues).
const purgeLegacyStorage = () => {
  try {
    const doomed = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('dsaTracker')) doomed.push(key);
    }
    doomed.forEach((k) => localStorage.removeItem(k));
  } catch { /* storage unavailable — irrelevant, it's only a cache */ }
};

const readJSON = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch { return fallback; }
};

const writeJSON = (key, value) => {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* cache only */ }
};

const applyToMap = (map, sheetId, slug, q) => ({
  ...map,
  [sheetId]: { ...(map[sheetId] || {}), [slug]: q },
});

export const ProgressProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const userUid = user?.uid;

  const [progress, setProgress] = useState({});
  const [loadingCloud, setLoadingCloud] = useState(false);
  const [syncStatus, setSyncStatus] = useState('idle');   // idle|syncing|synced|error
  const [syncError, setSyncError] = useState('');

  const progressRef = useRef(progress);
  const flushingRef = useRef(false);
  const lastFetchRef = useRef(0);

  useEffect(() => { progressRef.current = progress; }, [progress]);
  useEffect(() => { purgeLegacyStorage(); }, []);

  const cacheKey = userUid ? `${CACHE_PREFIX}${userUid}` : null;
  const outboxKey = userUid ? `${OUTBOX_PREFIX}${userUid}` : null;

  const readOutbox = useCallback(() => (outboxKey ? readJSON(outboxKey, {}) : {}), [outboxKey]);
  const writeOutbox = useCallback((box) => { if (outboxKey) writeJSON(outboxKey, box); }, [outboxKey]);

  // ── Apply server truth, but keep optimistic values for still-queued writes ─
  const applyServerProgress = useCallback((serverMap) => {
    const outbox = readOutbox();
    let next = serverMap;
    for (const item of Object.values(outbox)) {
      const serverQ = serverMap[item.sheetId]?.[item.questionSlug];
      if (!serverQ || (serverQ.updatedAt || 0) <= item.clientUpdatedAt) {
        next = applyToMap(next, item.sheetId, item.questionSlug, {
          status: item.status, revision: item.revision, note: item.note,
          updatedAt: item.clientUpdatedAt,
        });
      }
    }
    progressRef.current = next;
    setProgress(next);
    if (cacheKey) writeJSON(cacheKey, next);
  }, [cacheKey, readOutbox]);

  // ── Flush the offline outbox through the server-side LWW gate ────────────
  const flushOutbox = useCallback(async () => {
    if (!userUid || flushingRef.current || navigator.onLine === false) return true;
    const outbox = readOutbox();
    const items = Object.values(outbox);
    if (items.length === 0) return true;

    flushingRef.current = true;
    setSyncStatus('syncing');
    setSyncError('');
    let allOk = true;

    for (const item of items) {
      try {
        const authoritative = await upsertQuestion(item);
        const box = readOutbox();
        const key = `${item.sheetId}::${item.questionSlug}`;
        // Only clear if the user hasn't changed this question again meanwhile.
        if (box[key] && box[key].clientUpdatedAt === item.clientUpdatedAt) {
          delete box[key];
          writeOutbox(box);
        }
        // Reconcile with the authoritative row (covers LWW rejections).
        if (authoritative && !box[`${authoritative.sheetId}::${authoritative.questionSlug}`]) {
          const cur = progressRef.current[authoritative.sheetId]?.[authoritative.questionSlug];
          if (!cur || (cur.updatedAt || 0) <= authoritative.updatedAt) {
            const next = applyToMap(progressRef.current, authoritative.sheetId, authoritative.questionSlug, {
              status: authoritative.status, revision: authoritative.revision,
              note: authoritative.note, updatedAt: authoritative.updatedAt,
            });
            progressRef.current = next;
            setProgress(next);
            if (cacheKey) writeJSON(cacheKey, next);
          }
        }
      } catch (err) {
        allOk = false;
        console.error('Progress sync failed (kept in outbox for retry):', err);
      }
    }

    flushingRef.current = false;
    if (allOk) {
      setSyncStatus('synced');
    } else {
      setSyncStatus('error');
      setSyncError('Some changes could not be saved yet — they are queued and will retry automatically.');
    }
    return allOk;
  }, [userUid, readOutbox, writeOutbox, cacheKey, applyServerProgress]);

  // ── Fetch everything from the server (single round trip) ─────────────────
  const refreshFromServer = useCallback(async ({ force = false } = {}) => {
    if (!userUid) return;
    const now = Date.now();
    if (!force && now - lastFetchRef.current < REFRESH_THROTTLE_MS) return;
    lastFetchRef.current = now;
    try {
      const serverMap = await fetchMyProgress();
      applyServerProgress(serverMap);
      setSyncError('');
      if (Object.keys(readOutbox()).length === 0) setSyncStatus('synced');
    } catch (err) {
      console.error('Failed to load progress from Supabase:', err);
      setSyncStatus('error');
      setSyncError(err?.message || 'Failed to load progress.');
    }
  }, [userUid, applyServerProgress, readOutbox]);

  // ── Login / logout lifecycle ─────────────────────────────────────────────
  useEffect(() => {
    if (!userUid) {
      progressRef.current = {};
      setProgress({});
      setSyncStatus('idle');
      setSyncError('');
      return undefined;
    }

    let cancelled = false;
    // 1. Instant paint from cache (display only — server replaces it below).
    const cached = readJSON(`${CACHE_PREFIX}${userUid}`, null);
    if (cached) {
      progressRef.current = cached;
      setProgress(cached);
    }

    // 2. Server truth.
    (async () => {
      setLoadingCloud(true);
      lastFetchRef.current = Date.now();
      try {
        const serverMap = await fetchMyProgress();
        if (cancelled) return;
        applyServerProgress(serverMap);
        setSyncStatus('synced');
        setSyncError('');
      } catch (err) {
        if (cancelled) return;
        console.error('Initial progress load failed:', err);
        setSyncStatus('error');
        setSyncError(err?.message || 'Failed to load progress.');
      } finally {
        if (!cancelled) setLoadingCloud(false);
      }
      // 3. Replay anything still queued from an offline session.
      flushOutbox();
    })();

    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userUid]);

  // ── Cross-device convergence: refetch on focus + retry outbox ────────────
  useEffect(() => {
    if (!userUid) return undefined;

    const onWake = () => {
      if (document.visibilityState === 'hidden') return;
      flushOutbox();
      refreshFromServer();
    };
    const onOnline = () => { flushOutbox(); refreshFromServer({ force: true }); };

    const intervalId = window.setInterval(() => flushOutbox(), FLUSH_INTERVAL_MS);
    window.addEventListener('focus', onWake);
    document.addEventListener('visibilitychange', onWake);
    window.addEventListener('online', onOnline);
    return () => {
      window.clearInterval(intervalId);
      window.removeEventListener('focus', onWake);
      document.removeEventListener('visibilitychange', onWake);
      window.removeEventListener('online', onOnline);
    };
  }, [userUid, flushOutbox, refreshFromServer]);

  // ── Optional realtime: live cross-device sync (RLS-scoped to own rows) ───
  useEffect(() => {
    if (!userUid || !ENABLE_REALTIME) return undefined;

    const channel = supabase
      .channel(`progress:${userUid}`)
      .on('postgres_changes', {
        event: '*', schema: 'public', table: 'user_progress',
        filter: `user_id=eq.${userUid}`,
      }, (payload) => {
        const r = payload.new;
        if (!r?.sheet_id) return;
        const incoming = {
          status: Boolean(r.is_solved), revision: Boolean(r.is_revision),
          note: r.note || '', updatedAt: Number(r.client_updated_at) || 0,
        };
        const cur = progressRef.current[r.sheet_id]?.[r.question_slug];
        if (cur && (cur.updatedAt || 0) > incoming.updatedAt) return; // local is newer
        const next = applyToMap(progressRef.current, r.sheet_id, r.question_slug, incoming);
        progressRef.current = next;
        setProgress(next);
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, [userUid]);

  // ── Writes: optimistic UI + outbox + immediate flush ─────────────────────
  const writeQuestion = useCallback((sheetId, questionSlug, patch) => {
    if (!userUid) return; // guests cannot write (UI already gates this)

    const current = progressRef.current[sheetId]?.[questionSlug] || emptyQuestionProgress;
    const clientUpdatedAt = Date.now();
    const nextQ = { ...current, ...patch, updatedAt: clientUpdatedAt };

    // 1. Optimistic state + cache.
    const next = applyToMap(progressRef.current, sheetId, questionSlug, nextQ);
    progressRef.current = next;
    setProgress(next);
    if (cacheKey) writeJSON(cacheKey, next);

    // 2. Queue the FULL question state (idempotent, safe to replay).
    const box = readOutbox();
    box[`${sheetId}::${questionSlug}`] = {
      sheetId, questionSlug,
      status: nextQ.status, revision: nextQ.revision, note: nextQ.note,
      clientUpdatedAt,
    };
    writeOutbox(box);

    // 3. Push now (falls back to interval/online retry when offline).
    flushOutbox();
  }, [userUid, cacheKey, readOutbox, writeOutbox, flushOutbox]);

  const updateQuestionStatus = useCallback(async (sheetId, questionId, value, isRevision = false) => {
    writeQuestion(sheetId, questionId, isRevision ? { revision: value } : { status: value });
  }, [writeQuestion]);

  const updateQuestionNote = useCallback(async (sheetId, questionId, note) => {
    const cur = progressRef.current[sheetId]?.[questionId]?.note || '';
    if (cur === note) return;
    writeQuestion(sheetId, questionId, { note });
  }, [writeQuestion]);

  // Used by Header before logout: make sure nothing is left unsaved.
  const syncProgressNow = useCallback(async () => {
    if (!userUid) return true;
    const ok = await flushOutbox();
    return ok && Object.keys(readOutbox()).length === 0;
  }, [userUid, flushOutbox, readOutbox]);

  const getSheetStats = useCallback((sheetId, totalQuestions) => {
    const sheetProgress = progress[sheetId] || {};
    let completed = 0;
    let revision = 0;
    Object.values(sheetProgress).forEach((q) => {
      if (q.status) completed++;
      if (q.revision) revision++;
    });
    return {
      completed,
      revision,
      total: totalQuestions,
      percentage: totalQuestions === 0 ? 0 : Math.round((completed / totalQuestions) * 100),
    };
  }, [progress]);

  return (
    <ProgressContext.Provider value={{
      progress,
      updateQuestionStatus,
      updateQuestionNote,
      getSheetStats,
      loadingCloud,
      syncStatus,
      syncError,
      syncProgressNow,
    }}>
      {children}
    </ProgressContext.Provider>
  );
};
