import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyCWs63_dSp9B5kC12YXwBzsK7Kg4g4257I",

  authDomain: "navarre-appliance.firebaseapp.com",

  projectId: "navarre-appliance",

  storageBucket: "navarre-appliance.firebasestorage.app",

  messagingSenderId: "263786604140",

  appId: "1:263786604140:web:51defbd1455bead37fda49",

  measurementId: "G-ZM80WZSTN6"

};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);