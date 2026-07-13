import React, { createContext, useState, useEffect } from 'react';
import {
  browserLocalPersistence,
  onAuthStateChanged,
  setPersistence,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { auth, googleProvider, analytics, db } from '../firebase-config';
import { logEvent } from 'firebase/analytics';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';

export const AuthContext = createContext();

const HEARTBEAT_INTERVAL_MS = 5 * 60 * 1000;

const ensureLocalAuthPersistence = async () => {
  try {
    await setPersistence(auth, browserLocalPersistence);
  } catch (error) {
    console.error('Failed to enable persistent Firebase auth', error);
  }
};

const updateLastSeen = async (uid) => {
  if (!uid) return;
  try {
    await setDoc(doc(db, 'users', uid), {
      lastSeenAt: serverTimestamp(),
    }, { merge: true });
  } catch (error) {
    console.error('Failed to update user activity heartbeat:', error);
  }
};

// Ensures every authenticated user has a Firestore document.
// This runs on every page load for logged-in users, so it will
// automatically backfill documents for users who signed up before
// this logic was added.
const ensureUserDocument = async (firebaseUser) => {
  if (!firebaseUser) return;
  try {
    const userRef = doc(db, 'users', firebaseUser.uid);
    const docSnap = await getDoc(userRef);

    let isNewUser = false;
    let needsLocation = false;

    if (!docSnap.exists()) {
      isNewUser = true;
      needsLocation = true;
    } else {
      const data = docSnap.data();
      if (!data.location || data.location === 'Unknown') {
        needsLocation = true;
      }
    }

    let locationString = 'Unknown';
    if (needsLocation) {
      try {
        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json();
        if (data.city && data.region && data.country_name) {
          locationString = `${data.city}, ${data.region}, ${data.country_name}`;
        } else if (data.city && data.country_name) {
          locationString = `${data.city}, ${data.country_name}`;
        } else if (data.country_name) {
          locationString = data.country_name;
        }
      } catch (locErr) {
        console.error('Failed to fetch location:', locErr);
      }
    }

    if (isNewUser) {
      // Brand new user — create their document immediately
      await setDoc(userRef, {
        displayName: firebaseUser.displayName || '',
        email: firebaseUser.email || '',
        photoURL: firebaseUser.photoURL || '',
        location: locationString,
        createdAt: serverTimestamp(),
        lastSeenAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        progress: {},
        totalSolved: 0,
      });
      console.log('✅ New user document created in Firestore:', firebaseUser.uid);

      // Send email notification to admin via Web3Forms
      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // Get this from web3forms.com
            subject: "New User Signup - DSA Tracker",
            from_name: "DSA Tracker System",
            message: `A new user has just signed up!\n\nName: ${firebaseUser.displayName || 'N/A'}\nEmail: ${firebaseUser.email || 'N/A'}\nLocation: ${locationString}\nUID: ${firebaseUser.uid}`
          })
        });
        console.log('📧 Signup notification sent to admin.');
      } catch (emailErr) {
        console.error('Failed to send admin notification email:', emailErr);
      }
    } else if (needsLocation && locationString !== 'Unknown') {
      // Silently update existing user with their newly fetched location
      await setDoc(userRef, {
        location: locationString,
        lastSeenAt: serverTimestamp(),
      }, { merge: true });
      console.log(`✅ Silently saved location for existing user ${firebaseUser.uid}: ${locationString}`);
    } else {
      await updateLastSeen(firebaseUser.uid);
    }
  } catch (err) {
    console.error('Error ensuring user document:', err);
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const userUid = user?.uid;

  useEffect(() => {
    let unsubscribe = () => {};
    let cancelled = false;

    const initAuth = async () => {
      await ensureLocalAuthPersistence();
      if (cancelled) return;

      unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
        // Ensure Firestore doc exists for every authenticated user
        // (catches both new sign-ups and existing users missing from Firestore)
        await ensureUserDocument(currentUser);
        setUser(currentUser);
        setLoading(false);
      });
    };

    initAuth();

    return () => {
      cancelled = true;
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!userUid) return undefined;

    const sendHeartbeat = () => {
      if (document.visibilityState === 'hidden' || navigator.onLine === false) return;
      updateLastSeen(userUid);
    };

    sendHeartbeat();
    const intervalId = window.setInterval(sendHeartbeat, HEARTBEAT_INTERVAL_MS);
    window.addEventListener('focus', sendHeartbeat);
    document.addEventListener('visibilitychange', sendHeartbeat);

    return () => {
      window.clearInterval(intervalId);
      window.removeEventListener('focus', sendHeartbeat);
      document.removeEventListener('visibilitychange', sendHeartbeat);
    };
  }, [userUid]);

  const login = async () => {
    try {
      await ensureLocalAuthPersistence();
      await signInWithPopup(auth, googleProvider);
      logEvent(analytics, 'sign_up', { method: 'google' });
    } catch (error) {
      console.error('Error signing in with Google', error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
