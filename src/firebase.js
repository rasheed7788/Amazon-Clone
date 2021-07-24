// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyCJLHQS67GMl5HaH-d1qC-X0gSsBEFet0M",
  authDomain: "clone-be66d.firebaseapp.com",
  projectId: "clone-be66d",
  storageBucket: "clone-be66d.appspot.com",
  messagingSenderId: "377272544745",
  appId: "1:377272544745:web:613980ed4b13b3a69d2f78",
  measurementId: "G-JLNHCHM0WC"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db= firebaseApp.firestore();
const auth= firebase.auth();

export { db , auth };