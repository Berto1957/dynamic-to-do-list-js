// Wait until DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Ensure all essential elements exist
    if (!addButton || !taskInput || !taskList) {
        console.error("Essential elements not found in the DOM.");
        return;
    }

    /**
     * Load tasks from Local Storage and populate the list
     */
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // false = don't re-save
    }

    /**
     * Save tasks array to Local Storage
     */
    function saveTasksToLocalStorage(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    /**
     * Get current tasks from Local Storage
     */
    function getStoredTasks() {
        return JSON.parse(localStorage.getItem('tasks') || '[]');
    }

    /**
     * Add a new task to the list
     * @param {string} taskText - The task text
     * @param {boolean} save - Whether to save to local storage (true by default)
     */
    function addTask(taskText = null, save = true) {
        // If taskText is not provided (user clicked button or pressed Enter)
        if (taskText === null) {
            taskText = taskInput.value.trim();
            if (taskText === "") {
                alert("Please enter a task!");
                return;
            }
        }

        // Create list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.classList.add('remove-btn');

        // Remove task on click
        removeBtn.onclick = function () {
            taskList.removeChild(li);

            // Update local storage
            const currentTasks = getStoredTasks().filter(task => task !== taskText);
            saveTasksToLocalStorage(currentTasks);
        };

        // Append button and task to list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Save to local storage if needed
        if (save) {
            const currentTasks = getStoredTasks();
            currentTasks.push(taskText);
            saveTasksToLocalStorage(currentTasks);
        }

        // Clear input
        taskInput.value = "";
    }

    // Add task on button click
    addButton.addEventListener('click', () => addTask());

    // Add task on Enter key press
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Initial load
    loadTasks();
});
