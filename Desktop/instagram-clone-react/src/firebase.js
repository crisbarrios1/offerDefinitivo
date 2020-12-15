import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({  
    apiKey: "AIzaSyBLbVNqHG0sE2ZQmL_Ccy7qPhW42OOT4yU",
    authDomain: "instagram-clone-react-8bcca.firebaseapp.com",
    projectId: "instagram-clone-react-8bcca",
    storageBucket: "instagram-clone-react-8bcca.appspot.com",
    messagingSenderId: "678211373310",
    appId: "1:678211373310:web:e64a30bb831e6bffd4bdaf",
    measurementId: "G-QMJ8M4BEJJ"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };