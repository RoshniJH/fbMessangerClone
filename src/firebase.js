import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    
        apiKey: "AIzaSyCGTv0Xudj8eGpkvJglUBfvrd5kgaSWZQA",
        authDomain: "facebook-messenger-clone-7fcf6.firebaseapp.com",
        projectId: "facebook-messenger-clone-7fcf6",
        storageBucket: "facebook-messenger-clone-7fcf6.appspot.com",
        messagingSenderId: "736317974540",
        appId: "1:736317974540:web:8b30775db290b6944ce629"
    
});

const db = firebaseApp.firestore();

export default db ; 