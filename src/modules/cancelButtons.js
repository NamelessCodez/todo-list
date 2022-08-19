const cancelButtons = function () {
  const inputForm = document.querySelector(".input-form");
  const projectForm = document.querySelector(".project-form");

  const cancelTaskButton = document.querySelector(".cancel");
  const cancelProjectButton = document.querySelector(".cancel-project");

  const addTaskButton = document.querySelector(".add-task");
  const addProject = document.querySelector(".add-project");

  cancelTaskButton.addEventListener("click", function () {
    addTaskButton.style.display = "block";
    inputForm.style.display = "none";
  });

  cancelProjectButton.addEventListener("click", function () {
    addProject.style.display = "block";
    projectForm.style.display = "none";
  });
};

export default cancelButtons;
