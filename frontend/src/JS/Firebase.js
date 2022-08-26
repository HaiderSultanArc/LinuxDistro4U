import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDl6HHuLsTM17H6l5yPpOv3YMo9DtgS32s",
    authDomain: "linux-distro-4u.firebaseapp.com",
    projectId: "linux-distro-4u",
    storageBucket: "linux-distro-4u.appspot.com",
    messagingSenderId: "559985543696",
    appId: "1:559985543696:web:2229833959be5fd32a9895",
    measurementId: "G-L2WYNSCZGP"
});

const db = firebaseApp.firestore();
const storage = firebaseApp.storage();

export {db, storage};

