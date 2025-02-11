// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJe9CztQxXmc-G9qwZLywzkQ0Gv4ETXlo",
  authDomain: "event-27bce.firebaseapp.com",
  projectId: "event-27bce",
  storageBucket: "event-27bce.firebasestorage.app",
  messagingSenderId: "944281324316",
  appId: "1:944281324316:web:e1b3e0efc9886af6e048d9",
  measurementId: "G-KRFGQ0WE3L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);