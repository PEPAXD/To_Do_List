import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { auth } from './firebase.js';
import { showErrorToast } from '../JS/Toastify.js'

const googleButton = document.querySelector('#googleLogin');

googleButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    googleButton.disabled = true;

    try {
        const result = await signInWithPopup(auth, provider);
        window.location.href = "../HTML/toDoList.html";

    } catch (error) {
        showErrorToast('Ocurrió un error durante el registro');

    } finally {
        googleButton.disabled = false;
    }
});