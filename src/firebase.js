import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAOsArH9CbzJ531zl16zxxHDNdRvluXv1Q",
    authDomain: "e-clone-824fd.firebaseapp.com",
    projectId: "e-clone-824fd",
    storageBucket: "e-clone-824fd.appspot.com",
    messagingSenderId: "307726306204",
    appId: "1:307726306204:web:433e9d4bfe6e46a5c99659",
    measurementId: "G-2XMLK07FXK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };