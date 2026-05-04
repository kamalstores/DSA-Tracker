import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCmS7gEVkUI8QxMKjphppuxSlWGB-1wv98",
  authDomain: "dsa-tracker-be594.firebaseapp.com",
  projectId: "dsa-tracker-be594",
  storageBucket: "dsa-tracker-be594.firebasestorage.app",
  messagingSenderId: "1002103577156",
  appId: "1:1002103577156:web:a3ea3dfb1b112311f57a11"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
