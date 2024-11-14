import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIqXX4-zmhETb1hAr5Jf4if5Rg81SJKtA",
  authDomain: "ecommerce-nexus.firebaseapp.com",
  projectId: "ecommerce-nexus",
  storageBucket: "ecommerce-nexus.appspot.com",
  messagingSenderId: "393440840515",
  appId: "1:393440840515:web:2990d8d2b2233d63277df6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export default db