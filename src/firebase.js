import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
require('firebase/auth');

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCQA-qZsT_na0XLdJAsFPFiPR4xZz94ntA",
    authDomain: "clone-9b433.firebaseapp.com",
    projectId: "clone-9b433",
    storageBucket: "clone-9b433.appspot.com",
    messagingSenderId: "559281081274",
    appId: "1:559281081274:web:591309dc3b528531e2eb83",
    measurementId: "G-LPHES0N2E6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };