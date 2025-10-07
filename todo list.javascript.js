document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addBtn = document.getElementById('add-btn');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');
            
            // Create a span for the task text
            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;
            listItem.appendChild(taskSpan);

            // Create buttons container
            const buttonContainer = document.createElement('div');
            buttonContainer.className = 'task-buttons';

            // Create a delete button
            const deleteBtn = document.createElement('span');
            deleteBtn.className = 'delete-btn';
            deleteBtn.textContent = '✖';
            buttonContainer.appendChild(deleteBtn);

            listItem.appendChild(buttonContainer);
            taskList.appendChild(listItem);
            
            taskInput.value = ''; // Clear the input field

            // Add event listeners for the new task item
            setupEventListeners(listItem, taskSpan, deleteBtn);
        }
    }

    // Function to set up event listeners for task items
    function setupEventListeners(listItem, taskSpan, deleteBtn) {
        // Toggle 'completed' class on click
        listItem.addEventListener('click', (e) => {
            if (e.target !== deleteBtn) {
                listItem.classList.toggle('completed');
            }
        });

        // Delete the task when the delete button is clicked
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });
    }

    // Add task when the "Add" button is clicked
    addBtn.addEventListener('click', addTask);

    // Add task when the "Enter" key is pressed in the input field
    taskInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});