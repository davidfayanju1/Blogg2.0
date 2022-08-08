import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const app = firebase.initializeApp({
    apiKey: "AIzaSyBVIpdTaB6ExV45P-FbT3zwkeSDcTvbdYg",
    authDomain: "the-blogg.firebaseapp.com",
    projectId: "the-blogg",
    storageBucket: "the-blogg.appspot.com",
    messagingSenderId: "898603089299",
    appId: "1:898603089299:web:7ee6657c7b1ede132afc66"
})

export const auth = app.auth();
export const db = app.firestore();