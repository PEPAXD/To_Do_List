import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { auth } from '../JS/firebase.js';
import { showErrorToast } from '../JS/Toastify.js'

const signupForm = document.querySelector("#SignUpForm");
const checkDataButton = document.querySelector("#add-CheckData");

checkDataButton.addEventListener('click', async (e) => {
    console.log('click');
    e.preventDefault();

    const email = signupForm['email'].value;
    const password = signupForm['password'].value;

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredentials, 'userCredentialsOK');

    } catch (error) {
        switch (error.code) {
            case 'auth/invalid-email':
                showErrorToast('Formato de correo electrónico inválido. Por favor, introduce una dirección de correo electrónico válida.');
                break;
            case 'auth/weak-password':
                showErrorToast('Contraseña débil. Por favor, introduce una contraseña de al menos 6 caracteres.');
                break;
            default:
                showErrorToast('Ocurrió un error durante el registro. Por favor, inténtalo de nuevo.');
        }
    }
});