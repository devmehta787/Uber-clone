import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_cBs8Es5d4kA1s6TDOS03NpaW6k3fzYc",
  authDomain: "uber-clone-f5193.firebaseapp.com",
  projectId: "uber-clone-f5193",
  storageBucket: "uber-clone-f5193.appspot.com",
  messagingSenderId: "690976791787",
  appId: "1:690976791787:web:d5d67136423a4fd576b2ae",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
