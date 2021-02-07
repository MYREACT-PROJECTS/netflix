import firebase from 'firebase'



// For Firebase JS SDK v7.20.0 and later, measurementId is optional



const firebasCeConfig = {
    apiKey: "AIzaSyBFoqrUpeiCoUrdUhXCugR5F-Jb9nFtxxQ",
    authDomain: "netflix-clone-a3bac.firebaseapp.com",
    projectId: "netflix-clone-a3bac",
    storageBucket: "netflix-clone-a3bac.appspot.com",
    messagingSenderId: "609878840673",
    appId: "1:609878840673:web:97fdd656fe2024e9f56120",
    measurementId: "G-7X025KKXCE"
  };

  const firebaseApp = firebase.initializeApp(firebasCeConfig);
  const db =firebaseApp.firestore();
  const auth=firebase.auth()

  export{db,auth}