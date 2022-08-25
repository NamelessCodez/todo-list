const Task = function (title, date, projectNumber, projectList) {
  let taskName = title;
  let dueDate = date;
  let taskId = projectList[projectNumber].tasks.length;

  return {
    taskName,
    dueDate,
    projectNumber,
    taskId,
  };
};

function addTask(taskName, currentProjectNumber, projectList) {
  const task = Task(taskName, "", currentProjectNumber, projectList);
  if (task) {
    projectList[currentProjectNumber].tasks.push(task);
  }
  return task.taskId;
}

function deleteTask(taskId, projectList, currentProjectNumber) {
  const project = projectList[currentProjectNumber];
  project.tasks.forEach((task) => {
    const index = project.tasks.indexOf(task);
    if (task.taskId === taskId) {
      project.tasks.splice(index, 1);
    }
  });
}
function addDueDate(date, projectList, currentProjectNumber, taskId) {
  const project = projectList[currentProjectNumber];
  const task = project.tasks[taskId];
  task.dueDate = date;
}

export { Task, addTask, deleteTask, addDueDate };
