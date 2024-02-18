// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3GRjshHXIYvYFhbByqLgiHN_Dko4seSg",
  authDomain: "chat-app-cb754.firebaseapp.com",
  projectId: "chat-app-cb754",
  storageBucket: "chat-app-cb754.appspot.com",
  messagingSenderId: "890544181134",
  appId: "1:890544181134:web:6e357281f87ff44cf1dedf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
