"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["views_question_js"],{

/***/ "./modules/Question.js":
/*!*****************************!*\
  !*** ./modules/Question.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Question)\n/* harmony export */ });\n/* harmony import */ var _assets_images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @assets/images */ \"./assets/images.js\");\n\r\n\r\nclass Question{\r\n  constructor(type, category){\r\n    this.type = type;\r\n    this.category = category;\r\n    this.arrForQuestions = category.arrForQuestions\r\n    this.findAnswers = function() {\r\n      if (this.type === 'artists') {\r\n        return this.arrForQuestions.map(el => el.author)\r\n      }\r\n      else if (this.type === 'pictures') {\r\n        return this.arrForQuestions.map(el => el.name)\r\n      }\r\n    }\r\n    this.findQuestions = function() {\r\n      if (this.type === 'artists') {\r\n        return this.arrForQuestions.map(el => el.name)\r\n      }\r\n      else if (this.type === 'pictures') {\r\n        return this.arrForQuestions.map(el => el.author)\r\n      }\r\n    }\r\n    this.questions = this.findQuestions()\r\n    this.answers = this.findAnswers()\r\n  }\r\n}\n\n//# sourceURL=webpack:///./modules/Question.js?");

/***/ }),

/***/ "./views/question.js":
/*!***************************!*\
  !*** ./views/question.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"question\": () => (/* binding */ question),\n/* harmony export */   \"renderQuestion\": () => (/* binding */ renderQuestion)\n/* harmony export */ });\n/* harmony import */ var _views_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @views/home */ \"./views/home.js\");\n/* harmony import */ var _views_categories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @views/categories */ \"./views/categories.js\");\n/* harmony import */ var _modules_Category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/Category */ \"./modules/Category.js\");\n/* harmony import */ var _modules_Question__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/Question */ \"./modules/Question.js\");\n \r\n\r\n\r\n\r\n\r\n// const toHTML = question => `\r\n//   <h2>Hello from question.js</h2>\r\n//   <hr>\r\n//   <h3>${(type === 'artists')?`Кто автор данной картины \"${category.arrForQuestions[0].name}\"?`:`Какую картину написал \"${category.arrForQuestions[0].author}\"?`}</h3>\r\n//   <button class=\"page-btn\" data-btn=\"question\">1</button>\r\n// `\r\nlet question;\r\n\r\nfunction renderQuestion(){\r\n  \r\n  question = new _modules_Question__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_views_home__WEBPACK_IMPORTED_MODULE_0__.type, _views_categories__WEBPACK_IMPORTED_MODULE_1__.category)\r\n  console.log(question);\r\n\r\n  let wrapper = document.createElement(\"div\")\r\n  wrapper.classList.add('question')\r\n  wrapper.classList.add('page')\r\n  wrapper.innerHTML = `\r\n  <h2>Hello from question.js</h2>\r\n  <hr>\r\n  <h3>${(_views_home__WEBPACK_IMPORTED_MODULE_0__.type === 'artists')?`Кто автор данной картины \"${_views_categories__WEBPACK_IMPORTED_MODULE_1__.category.arrForQuestions[0].name}\"?`:`Какую картину написал \"${_views_categories__WEBPACK_IMPORTED_MODULE_1__.category.arrForQuestions[0].author}\"?`}</h3>\r\n  <button class=\"page-btn\" data-btn=\"question\">1</button>\r\n   `\r\n\r\n  const app = document.getElementById('app')\r\n  app.innerHTML = ''\r\n  app.append(wrapper)\r\n  console.log('Hello from question.js');\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./views/question.js?");

/***/ })

}]);