
import { initializeApp } from "firebase/app";
import {getAuth} from"firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD_Exxfm4M3NSgraF5TVFC5ep7XfMzotDU",
  authDomain: "coffee-store-259fb.firebaseapp.com",
  projectId: "coffee-store-259fb",
  storageBucket: "coffee-store-259fb.appspot.com",
  messagingSenderId: "2850346111",
  appId: "1:2850346111:web:d73a983ca5ac9ff3889b4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);