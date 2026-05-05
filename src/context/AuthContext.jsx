import React, { createContext, useState, useEffect } from 'react';
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleProvider, analytics } from '../firebase-config';
import { logEvent } from 'firebase/analytics';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      logEvent(analytics, "sign_up", { method: "google" });
      
      // Ensure user document exists in Firestore immediately upon signup
      if (result.user) {
        const { doc, getDoc, setDoc, serverTimestamp } = await import('firebase/firestore');
        const { db } = await import('../firebase-config');
        const userRef = doc(db, 'users', result.user.uid);
        const docSnap = await getDoc(userRef);
        
        if (!docSnap.exists()) {
          await setDoc(userRef, {
            displayName: result.user.displayName || '',
            email: result.user.email || '',
            photoURL: result.user.photoURL || '',
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
            progress: {},
            totalSolved: 0
          });
        }
      }
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
