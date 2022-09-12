import { useEffect, useState } from "react";

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";


const firebaseConfig = {

  apiKey: "AIzaSyDmPedDTohj6Al3-eDcApc54xsBdjEa2QI",

  authDomain: "rms-system-a21e2.firebaseapp.com",

  projectId: "rms-system-a21e2",

  storageBucket: "rms-system-a21e2.appspot.com",

  messagingSenderId: "126044180629",

  appId: "1:126044180629:web:9de3ada699307f761acb9c"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

// Custom Hook
export function useAuth() {
  const [ currentUser, setCurrentUser ] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  })

  return currentUser;
}
