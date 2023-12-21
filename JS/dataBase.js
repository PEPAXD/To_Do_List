// DATA BASE SECTION
import { doc, setDoc, getDoc, deleteDoc } from './firebase.js';
import { db } from './firebase.js';
import { auth, onAuthStateChanged } from './firebase.js';


//userLogin
onAuthStateChanged(auth, (user) => {
    if (user) {
        const userNameElement = document.querySelector('.loginUser h4');
        userNameElement.textContent = user.displayName || user.email;
    }
});

// Save tasks to database
export async function save(taskId, taskText) {

    try {
        await setDoc(doc(db, 'UserTest', taskId), {
            task: taskText
        });
    } catch (error) {
        console.error("Error saving task: ", error);
    }
}

// Delete tasks from database
export async function remove(taskId) {
    try {
        await deleteDoc(doc(db, 'UserTest', taskId));
    } catch (error) {
        console.error("Error removing task: ", error);
    }
}


// Get tasks from database
export async function load(userName, taskID) {
    const docRef = doc(db, userName, taskID);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log(taskID, docSnap.data());
    } else {
        console.log("error - no such document")
    }
}