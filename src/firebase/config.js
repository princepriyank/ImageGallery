import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyD5cshQt5Vh9LgvDuvGhIINcsW6HaSD0Bw",
    authDomain: "bellagio-97a5f.firebaseapp.com",
    databaseURL: "https://bellagio-97a5f.firebaseio.com",
    projectId: "bellagio-97a5f",
    storageBucket: "bellagio-97a5f.appspot.com",
    messagingSenderId: "729462674947",
    appId: "1:729462674947:web:22cda0b9893d0f91e4a036",
    measurementId: "G-ZEZ2WPCW17"
};
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };