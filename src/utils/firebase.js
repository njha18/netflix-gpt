// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBt1qzy-lieWMERa1JfUGCll2U7rpq1P2I",
  authDomain: "netflixgpt-9e73c.firebaseapp.com",
  projectId: "netflixgpt-9e73c",
  storageBucket: "netflixgpt-9e73c.firebasestorage.app",
  messagingSenderId: "992485895150",
  appId: "1:992485895150:web:6511b25e251f73a3587cff",
  measurementId: "G-KJ65ERT318"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);