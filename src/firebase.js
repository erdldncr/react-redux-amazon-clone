import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCcPSKlYtpdzBoAC8soeSmIARMzVKzrf5I",
  authDomain: "challenge-4b2b2.firebaseapp.com",
  databaseURL: "https://challenge-4b2b2.firebaseio.com",
  projectId: "challenge-4b2b2",
  storageBucket: "challenge-4b2b2.appspot.com",
  messagingSenderId: "962418448875",
  appId: "1:962418448875:web:f6cce5eeaf819481f661ae",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };


// const firebaseConfig = {
//   apiKey: "AIzaSyBiv6W4nv3N0kZkQ_ZzxFANivQJkgG5mg8",
//   authDomain: "clone-8b148.firebaseapp.com",
//   projectId: "clone-8b148",
//   storageBucket: "clone-8b148.appspot.com",
//   messagingSenderId: "404730944906",
//   appId: "1:404730944906:web:dddc2c50ab48bdb0cb7c73"
// };