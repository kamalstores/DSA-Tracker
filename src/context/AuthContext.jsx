import React, { createContext, useState, useEffect } from 'react';
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleProvider, analytics, db } from '../firebase-config';
import { logEvent } from 'firebase/analytics';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';

export const AuthContext = createContext();

// Ensures every authenticated user has a Firestore document.
// This runs on every page load for logged-in users, so it will
// automatically backfill documents for users who signed up before
// this logic was added.
const ensureUserDocument = async (firebaseUser) => {
  if (!firebaseUser) return;
  try {
    const userRef = doc(db, 'users', firebaseUser.uid);
    const docSnap = await getDoc(userRef);

    if (!docSnap.exists()) {
      // Brand new user — create their document immediately
      await setDoc(userRef, {
        displayName: firebaseUser.displayName || '',
        email: firebaseUser.email || '',
        photoURL: firebaseUser.photoURL || '',
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        progress: {},
        totalSolved: 0,
      });
      console.log('✅ New user document created in Firestore:', firebaseUser.uid);

      // Send email notification to admin via FormSubmit
      try {
        await fetch("https://formsubmit.co/ajax/kamalsnitkkr@gmail.com", {
          method: "POST",
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            _subject: "New User Signup - DSA Tracker",
            name: "DSA Tracker System",
            email: "noreply@dsatracker.com",
            message: `A new user has just signed up!\n\nName: ${firebaseUser.displayName || 'N/A'}\nEmail: ${firebaseUser.email || 'N/A'}\nUID: ${firebaseUser.uid}`
          })
        });
        console.log('📧 Signup notification sent to admin.');
      } catch (emailErr) {
        console.error('Failed to send admin notification email:', emailErr);
      }
    }
  } catch (err) {
    console.error('Error ensuring user document:', err);
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      // Ensure Firestore doc exists for every authenticated user
      // (catches both new sign-ups and existing users missing from Firestore)
      await ensureUserDocument(currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async () => {
    try {
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
