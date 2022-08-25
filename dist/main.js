/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_domControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/domControl */ \"./src/modules/domControl.js\");\n/* harmony import */ var _modules_cancelButtons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/cancelButtons */ \"./src/modules/cancelButtons.js\");\n/* harmony import */ var _modules_confirmProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/confirmProject */ \"./src/modules/confirmProject.js\");\n/* harmony import */ var _modules_confirmTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/confirmTask */ \"./src/modules/confirmTask.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_domControl__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\nconst defaultProject = { name: \"default\", tasks: [] };\r\nconst projectList = [defaultProject];\r\n\r\n(0,_modules_cancelButtons__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_confirmProject__WEBPACK_IMPORTED_MODULE_2__.confirmProject)(projectList);\r\n(0,_modules_confirmTask__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(projectList);\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project),\n/* harmony export */   \"deleteProject\": () => (/* binding */ deleteProject)\n/* harmony export */ });\n/* harmony import */ var _confirmProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirmProject */ \"./src/modules/confirmProject.js\");\n\r\n\r\nconst Project = function (projectName, projectList) {\r\n  const newProject = {\r\n    name: projectName,\r\n    tasks: [],\r\n    projectId: projectList.length,\r\n  };\r\n  projectList.push(newProject);\r\n  (0,_confirmProject__WEBPACK_IMPORTED_MODULE_0__.addProject)(newProject, projectList);\r\n};\r\n\r\nconst deleteProject = function (projectId, projectList) {\r\n  projectList.forEach((project) => {\r\n    const index = projectList.indexOf(project);\r\n    if (project.projectId === projectId) {\r\n      projectList.splice(index, 1);\r\n    }\r\n  });\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/Project.js?");

/***/ }),

/***/ "./src/modules/cancelButtons.js":
/*!**************************************!*\
  !*** ./src/modules/cancelButtons.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cancelButtons = function () {\r\n  const inputForm = document.querySelector(\".input-form\");\r\n  const projectForm = document.querySelector(\".project-form\");\r\n\r\n  const cancelTaskButton = document.querySelector(\".cancel\");\r\n  const cancelProjectButton = document.querySelector(\".cancel-project\");\r\n\r\n  const addTaskButton = document.querySelector(\".add-task\");\r\n  const addProject = document.querySelector(\".add-project\");\r\n\r\n  cancelTaskButton.addEventListener(\"click\", function () {\r\n    addTaskButton.style.display = \"flex\";\r\n    inputForm.style.display = \"none\";\r\n  });\r\n\r\n  cancelProjectButton.addEventListener(\"click\", function () {\r\n    addProject.style.display = \"flex\";\r\n    projectForm.style.display = \"none\";\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cancelButtons);\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/cancelButtons.js?");

/***/ }),

/***/ "./src/modules/confirmProject.js":
/*!***************************************!*\
  !*** ./src/modules/confirmProject.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProject\": () => (/* binding */ addProject),\n/* harmony export */   \"confirmProject\": () => (/* binding */ confirmProject)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/modules/Project.js\");\n/* harmony import */ var _confirmTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirmTask */ \"./src/modules/confirmTask.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n\r\n\r\n\r\n\r\nlet toFire = true;\r\nconst confirmProject = function (projectList) {\r\n  const addProjectButton = document.querySelector(\".add-project\");\r\n  const projectForm = document.querySelector(\".project-form\");\r\n  const confirmProjectButton = document.querySelector(\".confirm-project\");\r\n  const projectInput = document.querySelector(\".project-input\");\r\n\r\n  confirmProjectButton.addEventListener(\"click\", function () {\r\n    projectForm.style.display = \"none\";\r\n    addProjectButton.style.display = \"flex\";\r\n    const projectName = projectInput.value;\r\n    (0,_Project__WEBPACK_IMPORTED_MODULE_0__.Project)(projectName, projectList);\r\n  });\r\n};\r\n\r\nfunction addProject(newProject, projectList) {\r\n  const parentDiv = document.querySelector(\".project-list\");\r\n  const projectName = newProject.name;\r\n  const projectNumber = projectList.indexOf(newProject);\r\n  const projectId = newProject.projectId;\r\n\r\n  let currentProjectNumber;\r\n\r\n  const project = document.createElement(\"button\");\r\n  project.textContent = projectName;\r\n  project.dataset.projectNumber = projectNumber;\r\n  project.dataset.projectId = projectId;\r\n  project.classList.add(`project-${projectNumber}`, \"project\");\r\n\r\n  project.addEventListener(\"click\", () => {\r\n    if (toFire) {\r\n      currentProjectNumber = parseInt(project.dataset.projectNumber);\r\n      localStorage.setItem(\"currentProjectNumber\", currentProjectNumber);\r\n\r\n      displayTasks(currentProjectNumber, projectList);\r\n\r\n      return currentProjectNumber;\r\n    }\r\n  });\r\n  const inbox = document.querySelector(\".nav-item\");\r\n  inbox.addEventListener(\"click\", () => {\r\n    currentProjectNumber = parseInt(inbox.dataset.projectNumber);\r\n    localStorage.setItem(\"currentProjectNumber\", currentProjectNumber);\r\n\r\n    displayTasks(currentProjectNumber, projectList);\r\n\r\n    return currentProjectNumber;\r\n  });\r\n\r\n  const deleteProjectButton = document.createElement(\"button\");\r\n  deleteProjectButton.classList.add(\"delete-project\");\r\n  deleteProjectButton.style.display = \"none\";\r\n\r\n  const deleteIcon = document.createElement(\"i\");\r\n  deleteIcon.classList.add(\"fa-solid\", \"fa-xmark\");\r\n\r\n  const icon = document.createElement(\"i\");\r\n  icon.classList.add(\"fa-solid\", \"fa-list-check\");\r\n\r\n  project.addEventListener(\"mouseover\", function () {\r\n    deleteProjectButton.style.display = \"block\";\r\n  });\r\n  project.addEventListener(\"mouseout\", function () {\r\n    deleteProjectButton.style.display = \"none\";\r\n  });\r\n\r\n  deleteProjectButton.appendChild(deleteIcon);\r\n\r\n  project.appendChild(deleteProjectButton);\r\n  project.prepend(icon);\r\n  parentDiv.appendChild(project);\r\n\r\n  deleteProjectButton.addEventListener(\r\n    \"click\",\r\n    removeProject.bind(deleteProjectButton, projectList)\r\n  );\r\n}\r\n\r\nfunction displayTasks(currentProjectNumber, projectList) {\r\n  const title = document.querySelector(\".content h1\");\r\n  const parentDiv = document.querySelector(\".task-list\");\r\n  const projectTasks = projectList[currentProjectNumber].tasks;\r\n  const projectName = projectList[currentProjectNumber].name;\r\n\r\n  while (parentDiv.firstChild) {\r\n    parentDiv.removeChild(parentDiv.firstChild);\r\n  }\r\n\r\n  title.textContent = projectName;\r\n  projectTasks.forEach((task) => {\r\n    const taskDiv = document.createElement(\"div\");\r\n\r\n    taskDiv.classList.add(\r\n      `project-${task.projectNumber}`,\r\n      `task-${task.taskId}`,\r\n      \"task\"\r\n    );\r\n    taskDiv.dataset.project = `project-${task.projectNumber}`;\r\n    taskDiv.dataset.taskId = task.taskId;\r\n\r\n    taskDiv.textContent = task.taskName;\r\n\r\n    const deleteButtonContainer = document.createElement(\"div\");\r\n    deleteButtonContainer.classList.add(\"delete-button-container\");\r\n\r\n    const deleteTaskButton = document.createElement(\"button\");\r\n    deleteTaskButton.classList.add(\"delete-task\");\r\n    deleteTaskButton.style.display = \"none\";\r\n\r\n    const icon = document.createElement(\"i\");\r\n    icon.classList.add(\"fa-solid\", \"fa-xmark\");\r\n\r\n    const checker = document.createElement(\"i\");\r\n    checker.classList.add(\"fa-regular\", \"fa-circle\");\r\n\r\n    const calender = document.createElement(\"input\");\r\n    calender.setAttribute(\"type\", \"date\");\r\n    calender.style.display = \"none\";\r\n\r\n    const dateDiv = document.createElement(\"div\");\r\n    if (task.dueDate) dateDiv.textContent = task.dueDate;\r\n    else dateDiv.textContent = \"No Date\";\r\n    dateDiv.classList.add(\"date-div\");\r\n\r\n    deleteTaskButton.addEventListener(\r\n      \"click\",\r\n      _confirmTask__WEBPACK_IMPORTED_MODULE_1__.removeTask.bind(deleteTaskButton, projectList, currentProjectNumber)\r\n    );\r\n    checker.addEventListener(\r\n      \"click\",\r\n      _confirmTask__WEBPACK_IMPORTED_MODULE_1__.removeTask.bind(checker, projectList, currentProjectNumber)\r\n    );\r\n\r\n    dateDiv.appendChild(calender);\r\n    deleteButtonContainer.appendChild(deleteTaskButton);\r\n    deleteTaskButton.appendChild(icon);\r\n\r\n    taskDiv.appendChild(dateDiv);\r\n    taskDiv.appendChild(deleteButtonContainer);\r\n    taskDiv.prepend(checker);\r\n    parentDiv.appendChild(taskDiv);\r\n\r\n    dateDiv.addEventListener(\"click\", function () {\r\n      if (calender.style.display === \"none\") {\r\n        const textNode = dateDiv.firstChild;\r\n        if (textNode.nodeType === Node.TEXT_NODE) textNode.remove();\r\n        calender.style.display = \"block\";\r\n      }\r\n    });\r\n\r\n    calender.addEventListener(\"change\", function () {\r\n      const date = calender.value;\r\n      const taskId = parseInt(dateDiv.parentElement.dataset.taskId);\r\n      (0,_task__WEBPACK_IMPORTED_MODULE_2__.addDueDate)(date, projectList, currentProjectNumber, taskId);\r\n      const dateNode = document.createTextNode(date);\r\n      dateDiv.prepend(dateNode);\r\n      calender.style.display = \"none\";\r\n    });\r\n    taskDiv.addEventListener(\"mouseover\", function () {\r\n      deleteTaskButton.style.display = \"block\";\r\n    });\r\n    taskDiv.addEventListener(\"mouseout\", function () {\r\n      deleteTaskButton.style.display = \"none\";\r\n    });\r\n  });\r\n}\r\nfunction removeProject(projectList) {\r\n  const projectId = this.parentElement.dataset.projectId;\r\n  const project = document.querySelector(`.project-${projectNumber}`);\r\n  (0,_Project__WEBPACK_IMPORTED_MODULE_0__.deleteProject)(projectId, projectList);\r\n  project.remove();\r\n  toFire = false;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/confirmProject.js?");

/***/ }),

/***/ "./src/modules/confirmTask.js":
/*!************************************!*\
  !*** ./src/modules/confirmTask.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"removeTask\": () => (/* binding */ removeTask)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n\r\nconst confirmTask = function (projectList) {\r\n  const confirmTaskButton = document.querySelector(\".add\");\r\n  const taskInput = document.querySelector(\".task-input\");\r\n  const projectDiv = document.querySelector(\".task-list\");\r\n  const inputForm = document.querySelector(\".input-form\");\r\n  const addTaskButton = document.querySelector(\".add-task\");\r\n\r\n  confirmTaskButton.addEventListener(\"click\", function () {\r\n    const currentProjectNumber =\r\n      parseInt(localStorage.getItem(\"currentProjectNumber\")) || 0;\r\n    const taskName = taskInput.value;\r\n    const taskId = (0,_task__WEBPACK_IMPORTED_MODULE_0__.addTask)(taskName, currentProjectNumber, projectList);\r\n\r\n    const task = document.createElement(\"div\");\r\n    task.classList.add(\r\n      `project-${currentProjectNumber}`,\r\n      `task-${taskId}`,\r\n      \"task\"\r\n    );\r\n    task.dataset.project = `project-${currentProjectNumber}`;\r\n    task.dataset.taskId = taskId;\r\n    task.textContent = taskName;\r\n\r\n    const deleteButtonContainer = document.createElement(\"div\");\r\n    deleteButtonContainer.classList.add(\"delete-button-container\");\r\n\r\n    const deleteTaskButton = document.createElement(\"button\");\r\n    deleteTaskButton.classList.add(\"delete-task\");\r\n    deleteTaskButton.style.display = \"none\";\r\n\r\n    const icon = document.createElement(\"i\");\r\n    icon.classList.add(\"fa-solid\", \"fa-xmark\");\r\n\r\n    const checker = document.createElement(\"i\");\r\n    checker.classList.add(\"fa-regular\", \"fa-circle\");\r\n\r\n    const calender = document.createElement(\"input\");\r\n    calender.setAttribute(\"type\", \"date\");\r\n    calender.style.display = \"none\";\r\n\r\n    const dateDiv = document.createElement(\"div\");\r\n    dateDiv.textContent = \"No Date\";\r\n    dateDiv.classList.add(\"date-div\");\r\n\r\n    deleteTaskButton.addEventListener(\r\n      \"click\",\r\n      removeTask.bind(deleteTaskButton, projectList, currentProjectNumber)\r\n    );\r\n    checker.addEventListener(\r\n      \"click\",\r\n      removeTask.bind(checker, projectList, currentProjectNumber)\r\n    );\r\n\r\n    dateDiv.appendChild(calender);\r\n    deleteButtonContainer.appendChild(deleteTaskButton);\r\n    deleteTaskButton.appendChild(icon);\r\n\r\n    task.appendChild(dateDiv);\r\n\r\n    task.appendChild(deleteButtonContainer);\r\n    task.prepend(checker);\r\n\r\n    projectDiv.appendChild(task);\r\n    dateDiv.addEventListener(\"click\", function () {\r\n      if (calender.style.display === \"none\") {\r\n        const textNode = dateDiv.firstChild;\r\n        if (textNode.nodeType === Node.TEXT_NODE) textNode.remove();\r\n        calender.style.display = \"block\";\r\n      }\r\n    });\r\n\r\n    calender.addEventListener(\"change\", function () {\r\n      const date = calender.value;\r\n      const taskId = dateDiv.parentElement.dataset.taskId;\r\n      (0,_task__WEBPACK_IMPORTED_MODULE_0__.addDueDate)(date, projectList, currentProjectNumber, taskId);\r\n      const dateNode = document.createTextNode(date);\r\n      dateDiv.prepend(dateNode);\r\n      calender.style.display = \"none\";\r\n    });\r\n    task.addEventListener(\"mouseover\", function () {\r\n      deleteTaskButton.style.display = \"block\";\r\n    });\r\n\r\n    task.addEventListener(\"mouseout\", function () {\r\n      deleteTaskButton.style.display = \"none\";\r\n    });\r\n\r\n    addTaskButton.style.display = \"block\";\r\n    inputForm.style.display = \"none\";\r\n  });\r\n};\r\n\r\nfunction removeTask(projectList, currentProjectNumber) {\r\n  let taskId;\r\n  if (this.classList.contains(\"delete-task\")) {\r\n    taskId = parseInt(this.parentElement.parentElement.dataset.taskId);\r\n  } else {\r\n    taskId = parseInt(this.parentElement.dataset.taskId);\r\n  }\r\n  const task = document.querySelector(`.task-${taskId}`);\r\n  (0,_task__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(taskId, projectList, currentProjectNumber);\r\n  task.remove();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (confirmTask);\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/confirmTask.js?");

/***/ }),

/***/ "./src/modules/domControl.js":
/*!***********************************!*\
  !*** ./src/modules/domControl.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./src/index.js\");\n/* harmony import */ var _cancelButtons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cancelButtons */ \"./src/modules/cancelButtons.js\");\n/* harmony import */ var _confirmProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirmProject */ \"./src/modules/confirmProject.js\");\n/* harmony import */ var _confirmTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirmTask */ \"./src/modules/confirmTask.js\");\n\r\n\r\n\r\n\r\n\r\nconst firstLoad = function () {\r\n  // cache dom elements\r\n  const inputForm = document.querySelector(\".input-form\");\r\n  const addTaskButton = document.querySelector(\".add-task\");\r\n  const addProject = document.querySelector(\".add-project\");\r\n  const projectForm = document.querySelector(\".project-form\");\r\n\r\n  addTaskButton.addEventListener(\"click\", function () {\r\n    addTaskButton.style.display = \"none\";\r\n    inputForm.style.display = \"grid\";\r\n  });\r\n\r\n  addProject.addEventListener(\"click\", function () {\r\n    addProject.style.display = \"none\";\r\n    projectForm.style.display = \"grid\";\r\n  });\r\n\r\n  localStorage.clear();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firstLoad);\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/domControl.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task),\n/* harmony export */   \"addDueDate\": () => (/* binding */ addDueDate),\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"deleteTask\": () => (/* binding */ deleteTask)\n/* harmony export */ });\nconst Task = function (title, date, projectNumber, projectList) {\r\n  let taskName = title;\r\n  let dueDate = date;\r\n  let taskId = projectList[projectNumber].tasks.length;\r\n\r\n  return {\r\n    taskName,\r\n    dueDate,\r\n    projectNumber,\r\n    taskId,\r\n  };\r\n};\r\n\r\nfunction addTask(taskName, currentProjectNumber, projectList) {\r\n  const task = Task(taskName, \"\", currentProjectNumber, projectList);\r\n  if (task) {\r\n    projectList[currentProjectNumber].tasks.push(task);\r\n  }\r\n  return task.taskId;\r\n}\r\n\r\nfunction deleteTask(taskId, projectList, currentProjectNumber) {\r\n  const project = projectList[currentProjectNumber];\r\n  project.tasks.forEach((task) => {\r\n    const index = project.tasks.indexOf(task);\r\n    if (task.taskId === taskId) {\r\n      project.tasks.splice(index, 1);\r\n    }\r\n  });\r\n}\r\nfunction addDueDate(date, projectList, currentProjectNumber, taskId) {\r\n  const project = projectList[currentProjectNumber];\r\n  const task = project.tasks[taskId];\r\n  task.dueDate = date;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/task.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;