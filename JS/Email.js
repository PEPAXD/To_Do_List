import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { auth } from '../JS/firebase.js';

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
        console.log(error, 'error');
    }
});