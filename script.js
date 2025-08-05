// Wait until the DOM is fully loaded before executing script
document.addEventListener('DOMContentLoaded', () => {
    // Select important DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task to the list
    function addTask() {
        // Get and trim the task input value
        const taskText = taskInput.value.trim();

        // If input is empty, alert the user
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Add click event to remove task when clicked
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append remove button to the task item
        li.appendChild(removeBtn);

        // Append the task item to the list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }

    // Add click event listener to the Add Task button
    addButton.addEventListener('click', addTask);

    // Add keypress event listener to handle "Enter" key press
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Optionally invoke addTask (if desired on load, though not needed)
    // addTask();  // Only if you want to pre-load something
});
