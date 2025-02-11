// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB8nzKjJV0K7Gk_oUD8f82BVi46MD1P5z4",
    authDomain: "login-authentication-dd9e9.firebaseapp.com",
    projectId: "login-authentication-dd9e9",
    storageBucket: "login-authentication-dd9e9.firebasestorage.app",
    messagingSenderId: "771947437323",
    appId: "1:771947437323:web:dfb689b32b90f57da9960e",
    measurementId: "G-JNCMCTPXL2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);