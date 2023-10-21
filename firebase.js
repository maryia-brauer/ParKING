import {getAuth} from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
import {getDatabase} from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoLXouLmho3-aHMGzdJ2U2UAnm_yOZR3c",
  authDomain: "reactnative-dc928.firebaseapp.com",
  projectId: "reactnative-dc928",
  storageBucket: "reactnative-dc928.appspot.com",
  messagingSenderId: "784792102241",
  appId: "1:784792102241:web:3dca324c58b0815fc09120",
  measurementId: "G-SX9BWCT77K"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const authFire = getAuth(app);
export const store = getFirestore(app);
export const db = getDatabase(app);




const analytics = getAnalytics(app);