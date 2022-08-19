import { addProject } from "./confirmProject";

const Project = function (projectName, projectList) {
  const newProject = { name: projectName, tasks: [] };
  projectList.push(newProject);
  addProject(newProject, projectList);
};

const addToProject = function (projectNumber, task, projectList) {
  projectList[projectNumber].tasks.push(task);
};

export default Project;

export { addToProject };
