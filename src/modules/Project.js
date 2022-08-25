import { addProject } from "./confirmProject";

const Project = function (projectName, projectList) {
  const newProject = {
    name: projectName,
    tasks: [],
    projectId: projectList.length,
  };
  projectList.push(newProject);
  addProject(newProject, projectList);
};

const deleteProject = function (projectId, projectList) {
  projectList.forEach((project) => {
    const index = projectList.indexOf(project);
    if (project.projectId === projectId) {
      projectList.splice(index, 1);
    }
  });
};

export { Project, deleteProject };
