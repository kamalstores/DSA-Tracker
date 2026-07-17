import React, { createContext, useState, useEffect, useRef, useCallback } from 'react';
import { supabase } from '../lib/supabaseClient';
import { fetchMyProfile, touchLastSeen, updateOwnLocation } from '../services/progressService';

// ═══════════════════════════════════════════════════════════════════════════
// AuthContext — Supabase Auth with Google OAuth.
//
// Identity model (the fix for "different progress on different browsers"):
//   • Supabase Auth maps one verified Google e-mail to exactly ONE
//     auth.users row. The UUID of that row is the permanent user id.
//   • A database trigger (handle_new_user) creates the profiles row — the
//     client can neither create nor duplicate users.
//   • No sign-up path exists that could mint a second identity for the same
//     Google account, on any browser, on any device.
//
// The context exposes the same contract the components already use:
//   { user: {uid,email,displayName,photoURL}, login, logout, loading }
// plus { profile, isAdmin } (profile.is_admin comes from the DB, replacing
// the old hardcoded ADMIN_UIDS arrays).
// ═══════════════════════════════════════════════════════════════════════════

export const AuthContext = createContext();

const HEARTBEAT_INTERVAL_MS = 5 * 60 * 1000;

const normalizeUser = (sessionUser) => {
  if (!sessionUser) return null;
  const meta = sessionUser.user_metadata || {};
  return {
    uid: sessionUser.id,
    email: sessionUser.email || '',
    displayName: meta.full_name || meta.name || sessionUser.email || '',
    photoURL: meta.avatar_url || meta.picture || '',
  };
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const userUid = user?.uid;
  const locationTried = useRef(false);

  // ── Session bootstrapping + auth state subscription ──────────────────────
  useEffect(() => {
    let cancelled = false;

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (cancelled) return;
      setUser(normalizeUser(session?.user));
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser((prev) => {
        const next = normalizeUser(session?.user);
        // Avoid re-render loops on token refresh: same uid → keep the object.
        if (prev && next && prev.uid === next.uid) return prev;
        return next;
      });
      setLoading(false);
    });

    return () => {
      cancelled = true;
      subscription.unsubscribe();
    };
  }, []);

  // ── Load my profile row (is_admin, location, …) ──────────────────────────
  useEffect(() => {
    if (!userUid) { setProfile(null); return undefined; }
    let cancelled = false;

    (async () => {
      try {
        // The DB trigger creates the profile at signup; retry briefly covers
        // the very first sign-in race.
        for (let attempt = 0; attempt < 3; attempt++) {
          const p = await fetchMyProfile(userUid);
          if (cancelled) return;
          if (p) { setProfile(p); return; }
          await new Promise((r) => setTimeout(r, 700));
        }
      } catch (err) {
        console.error('Failed to load profile:', err);
      }
    })();

    return () => { cancelled = true; };
  }, [userUid]);

  // ── One-time best-effort location capture (feeds admin demographics) ─────
  useEffect(() => {
    if (!profile || locationTried.current) return;
    if (profile.location && profile.location !== 'Unknown') return;
    locationTried.current = true;

    (async () => {
      try {
        const res = await fetch('https://ipapi.co/json/');
        const d = await res.json();
        const loc = [d.city, d.region, d.country_name].filter(Boolean).join(', ');
        if (loc) await updateOwnLocation(loc);
      } catch {
        /* purely cosmetic — never block anything on this */
      }
    })();
  }, [profile]);

  // ── Presence heartbeat (server-side last_seen_at) ────────────────────────
  useEffect(() => {
    if (!userUid) return undefined;

    let last = 0;
    const beat = () => {
      if (document.visibilityState === 'hidden' || navigator.onLine === false) return;
      const now = Date.now();
      if (now - last < 60 * 1000) return; // throttle
      last = now;
      touchLastSeen();
    };

    beat();
    const id = window.setInterval(beat, HEARTBEAT_INTERVAL_MS);
    window.addEventListener('focus', beat);
    document.addEventListener('visibilitychange', beat);
    return () => {
      window.clearInterval(id);
      window.removeEventListener('focus', beat);
      document.removeEventListener('visibilitychange', beat);
    };
  }, [userUid]);

  // ── Actions ──────────────────────────────────────────────────────────────
  const login = useCallback(async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin,
          queryParams: { access_type: 'offline', prompt: 'select_account' },
        },
      });
      if (error) throw error;
    } catch (error) {
      console.error('Error signing in with Google', error);
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await supabase.auth.signOut();
      setProfile(null);
    } catch (error) {
      console.error('Error signing out', error);
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      profile,
      isAdmin: Boolean(profile?.is_admin),
      login,
      logout,
      loading,
    }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
