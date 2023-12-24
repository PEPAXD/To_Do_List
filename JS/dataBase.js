// DATA BASE SECTION
import { doc, setDoc, getDocs, deleteDoc, collection, addDoc} from './firebase.js';
import { db } from './firebase.js';

//create collection user
export async function createUserCollection(userName) {

    //Create DataDocument
    try {
        const docRef = doc(db, userName, "task-1");
        await setDoc(docRef, {
            task: "task-User"
        });

    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

// load collection user
export async function loadUserCollection(userName) {

    const querySnapshot = await getDocs(collection(db, userName));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });
}

// Save tasks to database
export async function save(taskId, taskText, userName) {

    try {
        await setDoc(doc(db, userName, taskId), {
            task: taskText
        });
    } catch (error) {
        console.error("Error saving task: ", error);
    }
}

// Delete tasks from database
export async function remove(taskId, userName) {
    try {
        await deleteDoc(doc(db, userName, taskId));
    } catch (error) {
        console.error("Error removing task: ", error);
    }
}

// Get tasks from database
export async function load(userName) {
    const tasksCollectionRef = collection(db, userName);
    const tasksSnapshot = await getDocs(tasksCollectionRef);

    const tasks = [];

    tasksSnapshot.forEach((doc) => {
        tasks.push({ id: doc.id, data: doc.data() });
    });

    return tasks;
}