// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-5ed93.firebaseapp.com",
  projectId: "mern-estate-5ed93",
  storageBucket: "mern-estate-5ed93.appspot.com",
  messagingSenderId: "943668572352",
  appId: "1:943668572352:web:72947ead97ff1b28c03d25",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
