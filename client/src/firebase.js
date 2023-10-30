// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-a0fee.firebaseapp.com",
  projectId: "mern-estate-a0fee",
  storageBucket: "mern-estate-a0fee.appspot.com",
  messagingSenderId: "859883414400",
  appId: "1:859883414400:web:f2c75c7a63638970861765",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
