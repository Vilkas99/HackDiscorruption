import firebase from "firebase/app";
import "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyAYNY38n2ClUDV3XxTvHvAhqdVsN75pP5w",
  authDomain: "ventana-c227e.firebaseapp.com",
  projectId: "ventana-c227e",
  storageBucket: "ventana-c227e.appspot.com",
  messagingSenderId: "792005719212",
  appId: "1:792005719212:web:6bfe629e0e5be09ebd1b09",
  measurementId: "G-VMCW8D459Z",
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
