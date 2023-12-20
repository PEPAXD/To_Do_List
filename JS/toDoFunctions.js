document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.querySelector('.addBtn');
    const tasksContainer = document.querySelector('.tasks');

    addButton.addEventListener('click', function () {
        const taskInput = document.querySelector('.inputContainer input');
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const taskId = `task-${tasksContainer.childElementCount + 1}`;

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

            tasksContainer.appendChild(newTask);
            taskInput.value = '';

            const editButton = newTask.querySelector('.edit');
            const deleteButton = newTask.querySelector('.delete');

            editButton.addEventListener('click', function (event) {
                const label = newTask.querySelector('label');
                const newText = prompt('Enter new text:');
                if (newText !== null && newText.trim() !== '') {
                    label.textContent = newText;
                }
            });

            deleteButton.addEventListener('click', function () {
                newTask.remove();
            });
        }
    });
});