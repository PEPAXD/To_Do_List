// DATA BASE SECTION
import { doc, setDoc, getDocs, deleteDoc, collection } from './firebase.js';
import { db } from './firebase.js';

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
export async function remove(taskId) {
    try {
        await deleteDoc(doc(db, 'UserTest', taskId));
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