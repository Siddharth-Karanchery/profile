// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDj-zlbKj0mDNNScOAWtpr6cwtwtY9JXDc",
  authDomain: "profile-fe78a.firebaseapp.com",
  projectId: "profile-fe78a",
  storageBucket: "profile-fe78a.appspot.com",
  messagingSenderId: "773718540011",
  appId: "1:773718540011:web:12770184eed5dc104a88ae",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
