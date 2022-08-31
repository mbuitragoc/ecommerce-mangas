import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNo2Zq7Z1C9TKfZPvP14AQ2RnKUciUwmw",
  authDomain: "ecommerce-manga-5ca58.firebaseapp.com",
  projectId: "ecommerce-manga-5ca58",
  storageBucket: "ecommerce-manga-5ca58.appspot.com",
  messagingSenderId: "678116721105",
  appId: "1:678116721105:web:6904808ec6e03edce6e0f0",
  measurementId: "G-B3E97TNH66",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
