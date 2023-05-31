const input = document.getElementById("input");
const btn = document.getElementById("btn");
const taskList = document.getElementById("task-list");
// icons
const icon = document.createElement("span");
icon.classList.add("fas", "fa-times");

// Retrieve task list from local storage
const storedTasks = JSON.parse(localStorage.getItem("tasks"));
const tasks = storedTasks || [];

// Populate task list with stored tasks
tasks.forEach(taskText => {
  const listItem = document.createElement("li");
  listItem.id = "stored-tasks"
  listItem.innerText = taskText;
  taskList.appendChild(listItem);
});

// Event listener for button click
btn.addEventListener("click", function(e) {
//   e.preventDefault();

  // Get input value
  const taskText = input.value;

  // Create new list item
  const listItem = document.createElement("li");
  listItem.innerText = taskText;
//   listItem.appendChild(icon)

  // Append new list item to task list
  taskList.appendChild(listItem);

  // Add task to tasks array
  tasks.push(taskText);

  // Store updated tasks in local storage
  localStorage.setItem("tasks", JSON.stringify(tasks));

  // Clear input field
  input.value = "";
});

const removeBtn = document.getElementById("remove-btn")

removeBtn.addEventListener("click" , function(){
    const elements = document.querySelectorAll("#stored-tasks");
    elements.forEach(element => {
    element.remove();
    localStorage.clear()
});
})



