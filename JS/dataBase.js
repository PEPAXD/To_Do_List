// DATA BASE SECTION
import { database} from './firebase.js';
import { doc, setDoc, getDoc } from './firebase.js';
import { ref, set } from './firebase.js';
import { db } from './firebase.js';


// Save task to database
async function save(taskId, taskText) {

    console.log(taskId, taskText);
    try {
        await setDoc(doc(db, 'UserTest', taskId), {
            task: taskText
        });
    } catch (error) {
        console.error("Error saving task: ", error);
    }
}


// Get tasks from database
async function getUserData(userName, taskID) {
    const docRef = doc(db, userName, taskID);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log(taskID, docSnap.data());
    } else {
        console.log("error - no such document")
    }
}