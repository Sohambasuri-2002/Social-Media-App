import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBliJNcER24y1AfEp5viN-SSPlik2EBHXg",
  authDomain: "social-media-app-e6775.firebaseapp.com",
  projectId: "social-media-app-e6775",
  storageBucket: "social-media-app-e6775.appspot.com",
  messagingSenderId: "654169889992",
  appId: "1:654169889992:web:95000f2825c81430c399fd"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);