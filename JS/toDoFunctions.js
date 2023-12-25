document.addEventListener('DOMContentLoaded', function () {

    // Get user
    getUser().then(userName => {
        const username = userName;

        // create tasks from database
        createCollection(username);

        // load tasks from database
        loadCollection(username)
        .then(tasks => {
            tasks.slice(1).forEach(task => {
                const newTaskElement = createTaskElement(task.id, JSON.stringify(task.data.task));
                tasksContainer.appendChild(newTaskElement);
            });
        })
        .catch(error => {
            console.error(error);
        });

    }).catch(error => {
        console.error(error);
    });



    // Get elements
    const addButton = document.querySelector('.addBtn');
    const tasksContainer = document.querySelector('.tasks');
    const taskInput = document.querySelector('.inputContainer input');
    let tasksArray = [];

    // AddTask_Button
    addButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const taskId = `task-${tasksArray.length + 1}`;

            // Call createTaskElement
            const newTask = createTaskElement(taskId, taskText);
            tasksContainer.appendChild(newTask);
            taskInput.value = '';

            // Add task to array
            tasksArray.push({ id: taskId, text: taskText });

            // Save task to database
            getUser().then(userName => {
                updateTaskArray(taskId, taskText, userName); 
            }).catch(error => {
                console.error(error);
            });
        }
    });

    // Create task element
    function createTaskElement(taskId, taskText) {
        const newTask = document.createElement('div');

        newTask.classList.add('task');
        newTask.innerHTML = `
            <div class="taskcheck">
                <input type="checkbox" id="${taskId}">
                <label for="${taskId}">${taskText}</label>
            </div>
            <div class="buttons">
                <button class="edit" title="Edit"><i class="fa-solid fa-pen"></i></button>
                <button class="delete" title="Delete"><i class="fa-solid fa-eraser"></i></button>
            </div>
        `;

        const editButton = newTask.querySelector('.edit');
        const deleteButton = newTask.querySelector('.delete');

        // Call editTask function
        editButton.addEventListener('click', function () {
            editTask(newTask, taskId);
        });

        // Call deleteTask function
        deleteButton.addEventListener('click', function () {
            deleteTask(newTask, taskId);
        });

        return newTask;
    }

    

    //Edit task
    function editTask(taskElement, taskId) {
        const label = taskElement.querySelector('label');
        const newText = prompt('Enter new text:');
        if (newText !== null && newText.trim() !== '') {
            label.textContent = newText;
            updateTaskArray(taskId, newText); 
        }
    }

    //Update task
    function updateTaskArray(taskId, newText) {
        const taskToUpdate = tasksArray.find(task => task.id === taskId);
        if (taskToUpdate) {
            taskToUpdate.text = newText;
            
            // Save task to database
            getUser().then(userName => {
                saveDatabase(taskId, newText, userName);

            }).catch(error => {
                console.error(error);
            });
        }
    }

    //Delete task
    function deleteTask(taskElement, taskId) {
        taskElement.remove();
        deleteTaskFromArray(taskId);
    }

    //Delete task from array
    function deleteTaskFromArray(taskId) {
        tasksArray = tasksArray.filter(task => task.id !== taskId);

        // remove task to database

        getUser().then(userName => {
            removeDatabase(taskId, userName);
        }).catch(error => {
            console.error(error);
        });
    }
});

// DATABASE CALL
import {onAuthStateChanged, auth} from './firebase.js';
import {save, remove, createUserCollection, loadUserCollection} from './dataBase.js';

function getUser() {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const userNameElement = document.querySelector('.loginUser h4');
                userNameElement.textContent = user.displayName || user.email;
                resolve(user.displayName || user.email);
            } else {
                console.log('No user is signed in');
                reject('No user is signed in');
            }
        });
    });
}

async function saveDatabase(taskId, taskText, userName) {
    await save(taskId, taskText, userName);
}

async function removeDatabase(taskId, userName) {
    await remove(taskId, userName);
}

async function createCollection(userName) {
    await createUserCollection(userName);
}

async function loadCollection(userName) {
    return await loadUserCollection(userName);
}

