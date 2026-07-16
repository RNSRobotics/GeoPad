import { initializeApp } from 
"https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";

import { getAuth } from 
"https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

import { getFirestore } from
"https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";


const firebaseConfig = {

  apiKey: "AIzaSyC2XuxoNtOCFcPwkNVKZCRv3f6rqxjDEGg",

  authDomain: "geopad-46a21.firebaseapp.com",

  projectId: "geopad-46a21",

  storageBucket: "geopad-46a21.firebasestorage.app",

  messagingSenderId: "1076056608974",

  appId: "1:1076056608974:web:ea403915b0faa29e9fc09f",

  measurementId: "G-EECLGH2DE7"

};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);


export const db = getFirestore(app);
