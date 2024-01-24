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
  