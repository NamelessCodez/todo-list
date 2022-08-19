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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToProject\": () => (/* binding */ addToProject),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _confirmProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirmProject */ \"./src/modules/confirmProject.js\");\n\r\n\r\nconst Project = function (projectName, projectList) {\r\n  const newProject = { name: projectName, tasks: [] };\r\n  projectList.push(newProject);\r\n  (0,_confirmProject__WEBPACK_IMPORTED_MODULE_0__.addProject)(newProject, projectList);\r\n};\r\n\r\nconst addToProject = function (projectNumber, task, projectList) {\r\n  projectList[projectNumber].tasks.push(task);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/Project.js?");

/***/ }),

/***/ "./src/modules/cancelButtons.js":
/*!**************************************!*\
  !*** ./src/modules/cancelButtons.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cancelButtons = function () {\r\n  const inputForm = document.querySelector(\".input-form\");\r\n  const projectForm = document.querySelector(\".project-form\");\r\n\r\n  const cancelTaskButton = document.querySelector(\".cancel\");\r\n  const cancelProjectButton = document.querySelector(\".cancel-project\");\r\n\r\n  const addTaskButton = document.querySelector(\".add-task\");\r\n  const addProject = document.querySelector(\".add-project\");\r\n\r\n  cancelTaskButton.addEventListener(\"click\", function () {\r\n    addTaskButton.style.display = \"block\";\r\n    inputForm.style.display = \"none\";\r\n  });\r\n\r\n  cancelProjectButton.addEventListener(\"click\", function () {\r\n    addProject.style.display = \"block\";\r\n    projectForm.style.display = \"none\";\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cancelButtons);\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/cancelButtons.js?");

/***/ }),

/***/ "./src/modules/confirmProject.js":
/*!***************************************!*\
  !*** ./src/modules/confirmProject.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProject\": () => (/* binding */ addProject),\n/* harmony export */   \"confirmProject\": () => (/* binding */ confirmProject)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/modules/Project.js\");\n\r\n\r\nconst confirmProject = function (projectList) {\r\n  const addProjectButton = document.querySelector(\".add-project\");\r\n  const projectForm = document.querySelector(\".project-form\");\r\n  const confirmProjectButton = document.querySelector(\".confirm-project\");\r\n  const projectInput = document.querySelector(\".project-input\");\r\n\r\n  confirmProjectButton.addEventListener(\"click\", function () {\r\n    projectForm.style.display = \"none\";\r\n    addProjectButton.style.display = \"block\";\r\n    const projectName = projectInput.value;\r\n    (0,_Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(projectName, projectList);\r\n  });\r\n};\r\n\r\nfunction addProject(newProject, projectList) {\r\n  const parentDiv = document.querySelector(\".project-list\");\r\n  const projectName = newProject.name;\r\n  const projectNumber = projectList.indexOf(newProject);\r\n\r\n  let currentProjectNumber;\r\n  let currentProjectNumberTesting;\r\n\r\n  const project = document.createElement(\"button\");\r\n  project.textContent = projectName;\r\n  project.dataset.projectNumber = projectNumber;\r\n  project.classList.add(`project-${projectNumber}`);\r\n\r\n  project.addEventListener(\"click\", () => {\r\n    currentProjectNumber = parseInt(project.dataset.projectNumber);\r\n    localStorage.setItem(\"currentProjectNumber\", currentProjectNumber);\r\n\r\n    displayTasks(currentProjectNumber, projectList);\r\n\r\n    return currentProjectNumber;\r\n  });\r\n\r\n  parentDiv.appendChild(project);\r\n}\r\n\r\nfunction displayTasks(currentProjectNumber, projectList) {\r\n  const parentDiv = document.querySelector(\".task-list\");\r\n  const projectTasks = projectList[currentProjectNumber].tasks;\r\n\r\n  while (parentDiv.firstChild) {\r\n    parentDiv.removeChild(parentDiv.firstChild);\r\n  }\r\n\r\n  projectTasks.forEach((task) => {\r\n    const taskDiv = document.createElement(\"div\");\r\n    taskDiv.classList.add(`project-${task.projectNumber}`, \"task\");\r\n    taskDiv.dataset.project = `project-${task.projectNumber}`;\r\n    taskDiv.textContent = task.taskName;\r\n    parentDiv.appendChild(taskDiv);\r\n  });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/confirmProject.js?");

/***/ }),

/***/ "./src/modules/confirmTask.js":
/*!************************************!*\
  !*** ./src/modules/confirmTask.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n\r\n\r\nconst confirmTask = function (projectList) {\r\n  const confirmTaskButton = document.querySelector(\".add\");\r\n  const taskInput = document.querySelector(\".task-input\");\r\n  const projectDiv = document.querySelector(\".task-list\");\r\n  const inputForm = document.querySelector(\".input-form\");\r\n  const addTaskButton = document.querySelector(\".add-task\");\r\n\r\n  confirmTaskButton.addEventListener(\"click\", function () {\r\n    const currentProjectNumber =\r\n      localStorage.getItem(\"currentProjectNumber\") || 0;\r\n    const taskName = taskInput.value;\r\n    addTask(taskName, currentProjectNumber, projectList);\r\n\r\n    const task = document.createElement(\"div\");\r\n    task.classList.add(`project-${currentProjectNumber}`, \"task\");\r\n    task.dataset.project = `project-${currentProjectNumber}`;\r\n    task.textContent = taskName;\r\n    projectDiv.appendChild(task);\r\n\r\n    addTaskButton.style.display = \"block\";\r\n    inputForm.style.display = \"none\";\r\n  });\r\n};\r\n\r\nfunction addTask(taskName, currentProjectNumber, projectList) {\r\n  const task = (0,_task__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(taskName, \"\", currentProjectNumber);\r\n  if (task) {\r\n    projectList[currentProjectNumber].tasks.push(task);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (confirmTask);\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/confirmTask.js?");

/***/ }),

/***/ "./src/modules/domControl.js":
/*!***********************************!*\
  !*** ./src/modules/domControl.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./src/index.js\");\n/* harmony import */ var _cancelButtons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cancelButtons */ \"./src/modules/cancelButtons.js\");\n/* harmony import */ var _confirmProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirmProject */ \"./src/modules/confirmProject.js\");\n/* harmony import */ var _confirmTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirmTask */ \"./src/modules/confirmTask.js\");\n\r\n\r\n\r\n\r\n\r\nconst firstLoad = function () {\r\n  // cache dom elements\r\n  const inputForm = document.querySelector(\".input-form\");\r\n  const addTaskButton = document.querySelector(\".add-task\");\r\n  const addProject = document.querySelector(\".add-project\");\r\n  const projectForm = document.querySelector(\".project-form\");\r\n\r\n  addTaskButton.addEventListener(\"click\", function () {\r\n    addTaskButton.style.display = \"none\";\r\n    inputForm.style.display = \"grid\";\r\n  });\r\n\r\n  addProject.addEventListener(\"click\", function () {\r\n    addProject.style.display = \"none\";\r\n    projectForm.style.display = \"grid\";\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firstLoad);\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/domControl.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Task = function (title, date, projectNumber) {\r\n  let taskName = title;\r\n  let dueDate = date;\r\n\r\n  const updateTitle = function (newTitle) {\r\n    taskName = newTitle;\r\n  };\r\n\r\n  const changeDueDate = function (newDate) {\r\n    dueDate = newDate;\r\n  };\r\n\r\n  return { taskName, dueDate, projectNumber, updateTitle, changeDueDate };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/task.js?");

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