import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const config = {
  apiKey: "AIzaSyAKtmZP1bNjPHQpEWU6-hDnGKemPWagxU0",
  authDomain: "chemedia-b65fe.firebaseapp.com",
  projectId: "chemedia-b65fe",
  storageBucket: "chemedia-b65fe.appspot.com",
  messagingSenderId: "186248885597",
  appId: "1:186248885597:web:5344dbb3a600c1ebaf64b4"
};
const app = initializeApp(config);

const storage = getStorage(app);
const db = getFirestore(app);

export {db, storage};