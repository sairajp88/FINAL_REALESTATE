// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHL7MGW5dTEJZ1zf-iMu5bz9aKVEc6iGU",
  authDomain: "final-rlst.firebaseapp.com",
  projectId: "final-rlst",
  storageBucket: "final-rlst.firebasestorage.app",
  messagingSenderId: "756580558830",
  appId: "1:756580558830:web:8a048ce77e0677c608d0ff",
  measurementId: "G-T4VL77YFJ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };