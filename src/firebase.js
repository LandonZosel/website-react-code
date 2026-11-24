'use strict';

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDG49YVN6JoKhv2OMddvKTF6Ik2j69GWmg",
    authDomain: "landonzoselgithubio.firebaseapp.com",
    projectId: "landonzoselgithubio",
    storageBucket: "landonzoselgithubio.firebasestorage.app",
    messagingSenderId: "462471670623",
    appId: "1:462471670623:web:a2c2c57d6b98d267fb64ea"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
