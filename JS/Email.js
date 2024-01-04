import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { auth } from './firebase.js';
import { showErrorToast } from '../JS/Toastify.js';

const signInButton = document.querySelector("#add-CheckData");

signInButton.addEventListener('click', async (e) => {
    e.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    try {
        //new user
        await createUserWithEmailAndPassword(auth, email, password);
        window.location.href = '/To_Do_List/HTML/toDoList.html';

    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            try {
                //login user
                await signInWithEmailAndPassword(auth, email, password);
                window.location.href = '/To_Do_List/HTML/toDoList.html';
                
            } catch (error) {
                showErrorToast('Ocurrió un error durante el proceso. Por favor, inténtalo de nuevo.');
            }
        } else {
            showErrorToast('Ocurrió un error durante el proceso. Por favor, inténtalo de nuevo.');
        }
    }
});