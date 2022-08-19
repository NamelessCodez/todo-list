import Project from "./Project";

const confirmProject = function (projectList) {
  const addProjectButton = document.querySelector(".add-project");
  const projectForm = document.querySelector(".project-form");
  const confirmProjectButton = document.querySelector(".confirm-project");
  const projectInput = document.querySelector(".project-input");

  confirmProjectButton.addEventListener("click", function () {
    projectForm.style.display = "none";
    addProjectButton.style.display = "block";
    const projectName = projectInput.value;
    Project(projectName, projectList);
  });
};

function addProject(newProject, projectList) {
  const parentDiv = document.querySelector(".project-list");
  const projectName = newProject.name;
  const projectNumber = projectList.indexOf(newProject);

  let currentProjectNumber;
  let currentProjectNumberTesting;

  const project = document.createElement("button");
  project.textContent = projectName;
  project.dataset.projectNumber = projectNumber;
  project.classList.add(`project-${projectNumber}`);

  project.addEventListener("click", () => {
    currentProjectNumber = parseInt(project.dataset.projectNumber);
    localStorage.setItem("currentProjectNumber", currentProjectNumber);

    displayTasks(currentProjectNumber, projectList);

    return currentProjectNumber;
  });

  parentDiv.appendChild(project);
}

function displayTasks(currentProjectNumber, projectList) {
  const parentDiv = document.querySelector(".task-list");
  const projectTasks = projectList[currentProjectNumber].tasks;

  while (parentDiv.firstChild) {
    parentDiv.removeChild(parentDiv.firstChild);
  }

  projectTasks.forEach((task) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add(`project-${task.projectNumber}`, "task");
    taskDiv.dataset.project = `project-${task.projectNumber}`;
    taskDiv.textContent = task.taskName;
    parentDiv.appendChild(taskDiv);
  });
}
export { addProject, confirmProject };
