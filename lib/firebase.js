// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7PTj4e_f1qiTDxZLjN7DnEldYeNreKMQ",
  authDomain: "customer-ai-29bb5.firebaseapp.com",
  projectId: "customer-ai-29bb5",
  storageBucket: "customer-ai-29bb5.appspot.com",
  messagingSenderId: "301245408590",
  appId: "1:301245408590:web:f4e28f8dd524c567652a1f",
  measurementId: "G-GYDE38QM06"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  const auth = firebase.auth();
  export { auth };
  