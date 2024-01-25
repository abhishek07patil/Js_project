document.getElementById('addBtn').addEventListener('click', addTask);

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
  
    if (taskInput.value.trim() === "") {
      alert("Please enter a task");
      return;
    }
  
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${taskInput.value}</span>
      <button onclick="toggleTaskCompletion(this)">Done</button>
      <button onclick="removeTask(this)">Remove</button>
    `;
  
    taskList.appendChild(li);
    taskInput.value = "";
  }
  
  // Function to toggle task completion
  function toggleTaskCompletion(button) {
    const taskSpan = button.parentElement.querySelector("span");
    taskSpan.classList.toggle("completed");
  }
  
  // Function to remove a task
  function removeTask(button) {
    const taskLi = button.parentElement;
    taskLi.remove();
  }




//   // Adding an event listener to the 'Add' button. When the button is clicked, the addTask function will be executed.
// document.getElementById('addBtn').addEventListener('click', addTask);

// // Defining the addTask function to add a new task to the list.
// function addTask() {
//     // Getting the input element and the task list UL element from the DOM.
//     const taskInput = document.getElementById("taskInput");
//     const taskList = document.getElementById("taskList");
  
//     // Checking if the input value is empty (after trimming white spaces). If it is, an alert is shown and the function exits.
//     if (taskInput.value.trim() === "") {
//       alert("Please enter a task");
//       return;
//     }
  
//     // Creating a new list item (li) element.
//     const li = document.createElement("li");

//     // Setting the inner HTML of the li element. It includes the task text and two buttons for 'Done' and 'Remove'.
//     li.innerHTML = `
//       <span>${taskInput.value}</span>
//       <button onclick="toggleTaskCompletion(this)">Done</button>
//       <button onclick="removeTask(this)">Remove</button>
//     `;

//     // Appending the newly created li element to the task list UL element.
//     taskList.appendChild(li);

//     // Clearing the input field after adding the task to the list.
//     taskInput.value = "";
// }

// // Defining the toggleTaskCompletion function to mark a task as completed.
// function toggleTaskCompletion(button) {
//     // Getting the parent element of the button (which is the li element) and then finding the span element within it.
//     const taskSpan = button.parentElement.querySelector("span");

//     // Toggling the 'completed' class on the span element. This will change the appearance of the task indicating it's completed.
//     taskSpan.classList.toggle("completed");
// }

// // Defining the removeTask function to remove a task from the list.
// function removeTask(button) {
//     // Getting the parent element of the button (which is the li element) that needs to be removed.
//     const taskLi = button.parentElement;

//     // Removing the li element from the DOM, effectively removing the task from the list.
//     taskLi.remove();
// }

  