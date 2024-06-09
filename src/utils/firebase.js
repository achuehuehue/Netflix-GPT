// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOVZ6sBSZchnNnIXGe3VjjskOTD2vEm6k",
  authDomain: "netflixgpt-e8e69.firebaseapp.com",
  projectId: "netflixgpt-e8e69",
  storageBucket: "netflixgpt-e8e69.appspot.com",
  messagingSenderId: "155036914221",
  appId: "1:155036914221:web:3ee64def1e23d153831ea4",
  measurementId: "G-RFBXJCCNKX"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();