
import { initializeApp } from "firebase/app";

// We are importing the authentication services from firebase
// getAuth determines we are using Authentication in our app
// GoogleAuthProvider used for sending Google specific authentication

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// My web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBEivldkZLmiVHO4C9aYdxKOYSZcRJtq7U",
    authDomain: "expense-tracker-435d1.firebaseapp.com",
    projectId: "expense-tracker-435d1",
    storageBucket: "expense-tracker-435d1.appspot.com",
    messagingSenderId: "919828979004",
    appId: "1:919828979004:web:1e63eaaba58eabc02b5239",
    measurementId: "G-EQCT376PY8"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// This statement initializes the authentication service using the Firebase app instance provided. 
// It returns an authentication object that can be used to perform authentication-related operations.
export const auth = getAuth(app);


// GoogleAuthProvider() is a constructor provided by Firebase Authentication that creates a new instance of the Google authentication provider.
// provider is a constant variable that holds this new instance of the Google authentication provider
export const provider = new GoogleAuthProvider();


export const db = getFirestore(app); // we have stored the reference to our firebase data store in a variable

// firebase login
// firebase init
// firebase deploy
