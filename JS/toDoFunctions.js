document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.querySelector('.addBtn');
    const tasksContainer = document.querySelector('.tasks');

    addButton.addEventListener('click', function () {
        const taskInput = document.querySelector('.inputContainer input');
        const taskText = taskInput.value;
        if (taskText.trim() !== '') {
            const newTask = document.createElement('div');
            newTask.classList.add('task');

            newTask.innerHTML = `
                <div class="taskcheck">
                    <input type="checkbox" id="task-${tasksContainer.childElementCount + 1}">
                    <label for="task-${tasksContainer.childElementCount + 1}">${taskText}</label>
                </div>
                <div class="buttons">
                    <button class="edit" title="Edit"><i class="fa-solid fa-pen"></i></button>
                    <button class="delete" title="Delete"><i class="fa-solid fa-eraser"></i></button>
                </div>
            `;

            tasksContainer.appendChild(newTask);
            taskInput.value = '';

            // Event listener for the 'Edit' button of the new task
            const editButton = newTask.querySelector('.edit');
            editButton.addEventListener('click', function (event) {
                const task = event.target.closest('.task');
                const label = task.querySelector('label');

                const newText = prompt('Enter new text:');
                if (newText !== null && newText.trim() !== '') {
                    label.textContent = newText;
                }
            });

            // Event listener para el botón "Delete" de la nueva tarea
            const deleteButton = newTask.querySelector('.delete');
            deleteButton.addEventListener('click', function (event) {
                const task = event.target.closest('.task');
                task.remove(); // Eliminar la tarea al presionar el botón de eliminar
            });
        }
    });
});
