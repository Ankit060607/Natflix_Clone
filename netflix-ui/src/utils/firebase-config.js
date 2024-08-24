// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnM7RDYWZP4b055BDutxr4u41G_HkuvaU",
  authDomain: "react-netflix-clone-e3274.firebaseapp.com",
  projectId: "react-netflix-clone-e3274",
  storageBucket: "react-netflix-clone-e3274.appspot.com",
  messagingSenderId: "816451748079",
  appId: "1:816451748079:web:dccee156960c1d50ae5b1a",
  measurementId: "G-YF4W8XVW8L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);