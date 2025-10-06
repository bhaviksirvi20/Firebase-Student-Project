import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHi5XwpL6DCc0T9PHDoZe5rDERtVZEcSQ",
  authDomain: "fir-520e9.firebaseapp.com",
  projectId: "fir-520e9",
  storageBucket: "fir-520e9.firebasestorage.app",
  messagingSenderId: "154543551005",
  appId: "1:154543551005:web:40bb065b0f58bc81dd4cf4"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);