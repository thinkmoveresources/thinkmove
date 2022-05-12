// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1ZVIkZqh1EdxSHbJ0A1IQVLk-VBW9jPk",
  authDomain: "firestore-crud-20b43.firebaseapp.com",
  projectId: "firestore-crud-20b43",
  storageBucket: "firestore-crud-20b43.appspot.com",
  messagingSenderId: "883422573118",
  appId: "1:883422573118:web:2580dd4627cb975296976f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Intialise the firestore
export const db=getFirestore(app);