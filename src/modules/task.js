const Task = function (title, date, projectNumber) {
  let taskName = title;
  let dueDate = date;

  const updateTitle = function (newTitle) {
    taskName = newTitle;
  };

  const changeDueDate = function (newDate) {
    dueDate = newDate;
  };

  return { taskName, dueDate, projectNumber, updateTitle, changeDueDate };
};

export default Task;
