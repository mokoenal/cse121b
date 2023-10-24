// Get references to the DOM elements
const taskInput = document.getElementById('task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('tasks');

// Event listener to add a new task
addTaskButton.addEventListener('click', function () {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    // Create a new task element
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    // Create a button to mark the task as complete
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', function () {
      taskItem.classList.add('completed');
      taskItem.style.textDecoration = 'line-through'; // Add line-through text decoration
    });

    // Create a button to delete the task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
      taskList.removeChild(taskItem);
    });

    // Append the buttons to the task item
    taskItem.appendChild(completeButton);
    taskItem.appendChild(deleteButton);

    // Add the task to the task list
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = '';
  }
});

// Fetch the JSON data from the file
fetch('https://raw.githubusercontent.com/mokoenal/todolist.json/main/project')
  .then((response) => response.json())
  .then((data) => {
    // Iterate through the data and create list items for each task
    data.forEach((task) => {
      const taskItem = document.createElement('li');
      taskItem.textContent = task.task;

      if (task.completed) {
        taskItem.classList.add('completed');
        taskItem.style.textDecoration = 'line-through'; // Add line-through text decoration
      }
     
      // Append the task item to your task list
      taskList.appendChild(taskItem);
    });
  })
  .catch((error) => {
    console.error('Error fetching JSON data:', error);
  });