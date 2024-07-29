// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chat-link-5baf8.firebaseapp.com",
  projectId: "chat-link-5baf8",
  storageBucket: "chat-link-5baf8.appspot.com",
  messagingSenderId: "678027988379",
  appId: "1:678027988379:web:827c012374f0a2d562e53e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// veri tabanının refaransını alıyoruz
export const db = getFirestore(app);
