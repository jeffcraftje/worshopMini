import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCeDYZwnd36ePCVlxJbNBluf8yIul-5VPQ",
  authDomain: "project-6502728263624052874.firebaseapp.com",
  projectId: "project-6502728263624052874",
  storageBucket: "project-6502728263624052874.appspot.com",
  messagingSenderId: "866107077905",
  appId: "1:866107077905:web:ad9f6100b89a73c77e08b0"
};

const app = initializeApp(firebaseConfig);
const google =  new GoogleAuthProvider();
const db = getFirestore();

export{
    app,
    google,
    db
}