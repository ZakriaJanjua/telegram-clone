import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBpphVcsmEVAmdpPgOhE1Qcr4sWrBzqFkc",
    authDomain: "telegram-clone-c2bd4.firebaseapp.com",
    projectId: "telegram-clone-c2bd4",
    storageBucket: "telegram-clone-c2bd4.appspot.com",
    messagingSenderId: "370864262852",
    appId: "1:370864262852:web:0b0789508e571ff57d4391",
    measurementId: "G-T6TMX5LMKL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth, provider}
  export default db
  