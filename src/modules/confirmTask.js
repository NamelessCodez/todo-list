import Task from "./task";

const confirmTask = function (projectList) {
  const confirmTaskButton = document.querySelector(".add");
  const taskInput = document.querySelector(".task-input");
  const projectDiv = document.querySelector(".task-list");
  const inputForm = document.querySelector(".input-form");
  const addTaskButton = document.querySelector(".add-task");

  confirmTaskButton.addEventListener("click", function () {
    const currentProjectNumber =
      localStorage.getItem("currentProjectNumber") || 0;
    const taskName = taskInput.value;
    addTask(taskName, currentProjectNumber, projectList);

    const task = document.createElement("div");
    task.classList.add(`project-${currentProjectNumber}`, "task");
    task.dataset.project = `project-${currentProjectNumber}`;
    task.textContent = taskName;
    projectDiv.appendChild(task);

    addTaskButton.style.display = "block";
    inputForm.style.display = "none";
  });
};

function addTask(taskName, currentProjectNumber, projectList) {
  const task = Task(taskName, "", currentProjectNumber);
  if (task) {
    projectList[currentProjectNumber].tasks.push(task);
  }
}

export default confirmTask;
