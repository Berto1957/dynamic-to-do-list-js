// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and clean input

        // If input is empty, alert the user
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create a new <li> element for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a "Remove" button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // When remove button is clicked, remove the task from the list
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append remove button to the task <li>
        li.appendChild(removeBtn);

        // Append the task <li> to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }

    // When "Add Task" button is clicked, call addTask()
    addButton.addEventListener('click', addTask);

    // When "Enter" key is pressed in the input field, call addTask()
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
