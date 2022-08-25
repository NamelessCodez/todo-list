import { Project, deleteProject } from "./Project";
import { removeTask } from "./confirmTask";
import { addDueDate } from "./task";

let toFire = true;
const confirmProject = function (projectList) {
  const addProjectButton = document.querySelector(".add-project");
  const projectForm = document.querySelector(".project-form");
  const confirmProjectButton = document.querySelector(".confirm-project");
  const projectInput = document.querySelector(".project-input");

  confirmProjectButton.addEventListener("click", function () {
    projectForm.style.display = "none";
    addProjectButton.style.display = "flex";
    const projectName = projectInput.value;
    Project(projectName, projectList);
  });
};

function addProject(newProject, projectList) {
  const parentDiv = document.querySelector(".project-list");
  const projectName = newProject.name;
  const projectNumber = projectList.indexOf(newProject);
  const projectId = newProject.projectId;

  let currentProjectNumber;

  const project = document.createElement("button");
  project.textContent = projectName;
  project.dataset.projectNumber = projectNumber;
  project.dataset.projectId = projectId;
  project.classList.add(`project-${projectNumber}`, "project");

  project.addEventListener("click", () => {
    if (toFire) {
      currentProjectNumber = parseInt(project.dataset.projectNumber);
      localStorage.setItem("currentProjectNumber", currentProjectNumber);

      displayTasks(currentProjectNumber, projectList);

      return currentProjectNumber;
    }
  });
  const inbox = document.querySelector(".nav-item");
  inbox.addEventListener("click", () => {
    currentProjectNumber = parseInt(inbox.dataset.projectNumber);
    localStorage.setItem("currentProjectNumber", currentProjectNumber);

    displayTasks(currentProjectNumber, projectList);

    return currentProjectNumber;
  });

  const deleteProjectButton = document.createElement("button");
  deleteProjectButton.classList.add("delete-project");
  deleteProjectButton.style.display = "none";

  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fa-solid", "fa-xmark");

  const icon = document.createElement("i");
  icon.classList.add("fa-solid", "fa-list-check");

  project.addEventListener("mouseover", function () {
    deleteProjectButton.style.display = "block";
  });
  project.addEventListener("mouseout", function () {
    deleteProjectButton.style.display = "none";
  });

  deleteProjectButton.appendChild(deleteIcon);

  project.appendChild(deleteProjectButton);
  project.prepend(icon);
  parentDiv.appendChild(project);

  deleteProjectButton.addEventListener(
    "click",
    removeProject.bind(deleteProjectButton, projectList)
  );
}

function displayTasks(currentProjectNumber, projectList) {
  const title = document.querySelector(".content h1");
  const parentDiv = document.querySelector(".task-list");
  const projectTasks = projectList[currentProjectNumber].tasks;
  const projectName = projectList[currentProjectNumber].name;

  while (parentDiv.firstChild) {
    parentDiv.removeChild(parentDiv.firstChild);
  }

  title.textContent = projectName;
  projectTasks.forEach((task) => {
    const taskDiv = document.createElement("div");

    taskDiv.classList.add(
      `project-${task.projectNumber}`,
      `task-${task.taskId}`,
      "task"
    );
    taskDiv.dataset.project = `project-${task.projectNumber}`;
    taskDiv.dataset.taskId = task.taskId;

    taskDiv.textContent = task.taskName;

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
    if (task.dueDate) dateDiv.textContent = task.dueDate;
    else dateDiv.textContent = "No Date";
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

    taskDiv.appendChild(dateDiv);
    taskDiv.appendChild(deleteButtonContainer);
    taskDiv.prepend(checker);
    parentDiv.appendChild(taskDiv);

    dateDiv.addEventListener("click", function () {
      if (calender.style.display === "none") {
        const textNode = dateDiv.firstChild;
        if (textNode.nodeType === Node.TEXT_NODE) textNode.remove();
        calender.style.display = "block";
      }
    });

    calender.addEventListener("change", function () {
      const date = calender.value;
      const taskId = parseInt(dateDiv.parentElement.dataset.taskId);
      addDueDate(date, projectList, currentProjectNumber, taskId);
      const dateNode = document.createTextNode(date);
      dateDiv.prepend(dateNode);
      calender.style.display = "none";
    });
    taskDiv.addEventListener("mouseover", function () {
      deleteTaskButton.style.display = "block";
    });
    taskDiv.addEventListener("mouseout", function () {
      deleteTaskButton.style.display = "none";
    });
  });
}
function removeProject(projectList) {
  const projectId = this.parentElement.dataset.projectId;
  const project = document.querySelector(`.project-${projectNumber}`);
  deleteProject(projectId, projectList);
  project.remove();
  toFire = false;
}
export { addProject, confirmProject };
