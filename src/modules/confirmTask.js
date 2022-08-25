import { addTask, deleteTask, addDueDate } from "./task";
const confirmTask = function (projectList) {
  const confirmTaskButton = document.querySelector(".add");
  const taskInput = document.querySelector(".task-input");
  const projectDiv = document.querySelector(".task-list");
  const inputForm = document.querySelector(".input-form");
  const addTaskButton = document.querySelector(".add-task");

  confirmTaskButton.addEventListener("click", function () {
    const currentProjectNumber =
      parseInt(localStorage.getItem("currentProjectNumber")) || 0;
    const taskName = taskInput.value;
    const taskId = addTask(taskName, currentProjectNumber, projectList);

    const task = document.createElement("div");
    task.classList.add(
      `project-${currentProjectNumber}`,
      `task-${taskId}`,
      "task"
    );
    task.dataset.project = `project-${currentProjectNumber}`;
    task.dataset.taskId = taskId;
    task.textContent = taskName;

    const deleteButtonContainer = document.createElement("div");
    deleteButtonContainer.classList.add("delete-button-container");

    const deleteTaskButton = document.createElement("button");
    deleteTaskButton.classList.add("delete-task");
    deleteTaskButton.style.display = "none";

    const icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-xmark");

    const checker = document.createElement("i");
    checker.classList.add("fa-regular", "fa-circle");

    const calender = document.createElement("input");
    calender.setAttribute("type", "date");
    calender.style.display = "none";

    const dateDiv = document.createElement("div");
    dateDiv.textContent = "No Date";
    dateDiv.classList.add("date-div");

    deleteTaskButton.addEventListener(
      "click",
      removeTask.bind(deleteTaskButton, projectList, currentProjectNumber)
    );
    checker.addEventListener(
      "click",
      removeTask.bind(checker, projectList, currentProjectNumber)
    );

    dateDiv.appendChild(calender);
    deleteButtonContainer.appendChild(deleteTaskButton);
    deleteTaskButton.appendChild(icon);

    task.appendChild(dateDiv);

    task.appendChild(deleteButtonContainer);
    task.prepend(checker);

    projectDiv.appendChild(task);
    dateDiv.addEventListener("click", function () {
      if (calender.style.display === "none") {
        const textNode = dateDiv.firstChild;
        if (textNode.nodeType === Node.TEXT_NODE) textNode.remove();
        calender.style.display = "block";
      }
    });

    calender.addEventListener("change", function () {
      const date = calender.value;
      const taskId = dateDiv.parentElement.dataset.taskId;
      addDueDate(date, projectList, currentProjectNumber, taskId);
      const dateNode = document.createTextNode(date);
      dateDiv.prepend(dateNode);
      calender.style.display = "none";
    });
    task.addEventListener("mouseover", function () {
      deleteTaskButton.style.display = "block";
    });

    task.addEventListener("mouseout", function () {
      deleteTaskButton.style.display = "none";
    });

    addTaskButton.style.display = "block";
    inputForm.style.display = "none";
  });
};

function removeTask(projectList, currentProjectNumber) {
  let taskId;
  if (this.classList.contains("delete-task")) {
    taskId = parseInt(this.parentElement.parentElement.dataset.taskId);
  } else {
    taskId = parseInt(this.parentElement.dataset.taskId);
  }
  const task = document.querySelector(`.task-${taskId}`);
  deleteTask(taskId, projectList, currentProjectNumber);
  task.remove();
}

export default confirmTask;
export { removeTask };
