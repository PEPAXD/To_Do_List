// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { ref, set } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getFirestore  } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { doc, setDoc, getDocs, deleteDoc, collection } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHAeqtoTaDN5IcXcKXJGxiqwZLbmL-eZ8",
    authDomain: "to-do-list-18ce3.firebaseapp.com",
    databaseURL: "https://to-do-list-18ce3-default-rtdb.firebaseio.com",
    projectId: "to-do-list-18ce3",
    storageBucket: "to-do-list-18ce3.appspot.com",
    messagingSenderId: "232724618426",
    appId: "1:232724618426:web:4004923507e904041cf683"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export { onAuthStateChanged };

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);
export { ref, set };

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export { doc, setDoc, getDocs, deleteDoc, collection };