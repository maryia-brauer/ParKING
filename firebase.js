import {getAuth, } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';
import { getFirestore, collection, getDoc, addDoc, getDocs } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3dvzfWrAhr6-n2FaY3HV0a_dxlmxIqEg",
  authDomain: "react2-505ca.firebaseapp.com",
  databaseURL: "https://react2-505ca-default-rtdb.firebaseio.com",
  projectId: "react2-505ca",
  storageBucket: "react2-505ca.appspot.com",
  messagingSenderId: "1014640904547",
  appId: "1:1014640904547:web:b8d825c51b85bb343a6b56"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const authFire = getAuth(app);

export const db = getFirestore(app);

export {getFirestore, collection, getDoc, addDoc, getDocs};

