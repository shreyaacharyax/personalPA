// contexts/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
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

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
