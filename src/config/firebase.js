// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrzwqiPRLEdnoUfhs_b2z80-nNHRzY9EQ",
  authDomain: "furniture-project-48ce0.firebaseapp.com",
  projectId: "furniture-project-48ce0",
  storageBucket: "furniture-project-48ce0.appspot.com",
  messagingSenderId: "1017704056974",
  appId: "1:1017704056974:web:8fd0fc018a70d8133f61df",
  measurementId: "G-735XK2RYCJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

