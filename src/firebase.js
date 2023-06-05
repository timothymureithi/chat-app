import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_xW0FnYH-YGIf0hb5B032Og15ubJpj4g",
  authDomain: "react-chat-37688.firebaseapp.com",
  projectId: "react-chat-37688",
  storageBucket: "react-chat-37688.appspot.com",
  messagingSenderId: "632795087883",
  appId: "1:632795087883:web:b559c2bf2e06e79d31330e",
  measurementId: "G-FHFTV7PVX1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);