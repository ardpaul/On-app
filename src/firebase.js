import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config
const firebaseConfig = {
  apiKey: "AIzaSyCcdfsXmGKD5H5QIq2dNrAO7K23EOJf-7I",
  authDomain: "on-app-50f18.firebaseapp.com",
  databaseURL: "https://on-app-50f18-default-rtdb.firebaseio.com",
  projectId: "on-app-50f18",
  storageBucket: "on-app-50f18.appspot.com",
  messagingSenderId: "365950928465",
  appId: "1:365950928465:web:cda29ffc298563b2feda70",
  measurementId: "G-86K0SSCTK5"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
