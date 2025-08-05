// Ensure the script runs only after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Select the "Add Task" button
    const addButton = document.getElementById('add-task-btn');
    // Select the task input field
    const taskInput = document.getElementById('task-input');
    // Select the task list container (ul)
    const taskList = document.getElementById('task-list');

    // Check if critical elements exist and are not null
    if (!addButton || !taskInput || !taskList) {
        console.error("Essential elements not found in the DOM.");
        return;
    }

    /**
     * Function to add a new task to the list
     */
    function addTask() {
        // Retrieve and trim user input
        const taskText = taskInput.value.trim();

        // Validate that input is not empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create a new <li> element for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a "Remove" button for the task
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.classList.add("remove-btn");

        // Add click event to remove the task
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append remove button to the <li>
        li.appendChild(removeBtn);

        // Append the <li> to the task list <ul>
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // Event listener for button click
    addButton.addEventListener('click', addTask);

    // Event listener for Enter key press inside input
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
