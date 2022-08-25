import currentProjectNumber from "..";
import cancelButtons from "./cancelButtons";
import { confirmProject } from "./confirmProject";
import confirmTask from "./confirmTask";

const firstLoad = function () {
  // cache dom elements
  const inputForm = document.querySelector(".input-form");
  const addTaskButton = document.querySelector(".add-task");
  const addProject = document.querySelector(".add-project");
  const projectForm = document.querySelector(".project-form");

  addTaskButton.addEventListener("click", function () {
    addTaskButton.style.display = "none";
    inputForm.style.display = "grid";
  });

  addProject.addEventListener("click", function () {
    addProject.style.display = "none";
    projectForm.style.display = "grid";
  });

  localStorage.clear();
};

export default firstLoad;
