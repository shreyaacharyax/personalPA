import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

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
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
