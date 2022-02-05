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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Question)\n/* harmony export */ });\n/* harmony import */ var _assets_images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @assets/images */ \"./assets/images.js\");\n\r\n\r\nclass Question{\r\n  constructor(type, category){\r\n    this.type = type;\r\n    this.category = category;\r\n    this.arrForQuestions = category.arrForQuestions\r\n  }\r\n}\n\n//# sourceURL=webpack:///./modules/Question.js?");

/***/ }),

/***/ "./views/question.js":
/*!***************************!*\
  !*** ./views/question.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"question\": () => (/* binding */ question),\n/* harmony export */   \"arr\": () => (/* binding */ arr),\n/* harmony export */   \"renderQuestion\": () => (/* binding */ renderQuestion)\n/* harmony export */ });\n/* harmony import */ var _views_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @views/home */ \"./views/home.js\");\n/* harmony import */ var _views_categories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @views/categories */ \"./views/categories.js\");\n/* harmony import */ var _js_Router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @js/Router */ \"./js/Router.js\");\n/* harmony import */ var _modules_Question__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/Question */ \"./modules/Question.js\");\n/* harmony import */ var _assets_images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @assets/images */ \"./assets/images.js\");\n \r\n\r\n\r\n\r\n\r\n \r\nlet question\r\nlet arr\r\n\r\nfunction renderQuestion(){\r\n  console.log('Hello from question.js');\r\n  \r\n  question = new _modules_Question__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_views_home__WEBPACK_IMPORTED_MODULE_0__.type, _views_categories__WEBPACK_IMPORTED_MODULE_1__.category)\r\n  arr = question.arrForQuestions\r\n\r\n  const toHTML = item => `\r\n  <h3>${(_views_home__WEBPACK_IMPORTED_MODULE_0__.type === 'artists')\r\n  ?`Кто автор данной картины \"${item.name}\"?`\r\n  :`Какую картину написал ${item.author}?`}</h3>\r\n\r\n  ${mixAnswers(rightAnswer(item), wrongAnswer(_assets_images__WEBPACK_IMPORTED_MODULE_4__[\"default\"]), wrongAnswer(_assets_images__WEBPACK_IMPORTED_MODULE_4__[\"default\"]), wrongAnswer(_assets_images__WEBPACK_IMPORTED_MODULE_4__[\"default\"]))}\r\n  `\r\n\r\n  function rightAnswer(el) {\r\n    return `<button class=\"page-btn right\" data-btn=\"answer\">${(_views_home__WEBPACK_IMPORTED_MODULE_0__.type === 'artists')\r\n    ?`${el.author}`:`${el.name}`}</button>`;\r\n  }\r\n  function wrongAnswer(imgs) {\r\n    return `<button class=\"page-btn wrong\" data-btn=\"answer\">${(_views_home__WEBPACK_IMPORTED_MODULE_0__.type === 'artists')\r\n    ?`${imgs.map(el=>el.author)[generateRandomNumber(0,240)]}`:`${imgs.map(el=>el.name)[generateRandomNumber(0,240)]}`}</button>`;\r\n  }\r\n  function generateRandomNumber(min, max) { \r\n    return Math.floor(Math.random() * (max - min + 1) + min)\r\n  }\r\n  function mixAnswers(rightAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3) {\r\n    let index = generateRandomNumber(1, 4)\r\n    switch(index) {\r\n      case 1: return `${rightAnswer} ${wrongAnswer1} ${wrongAnswer2} ${wrongAnswer3}`\r\n      break\r\n      case 2: return `${wrongAnswer1} ${rightAnswer} ${wrongAnswer2} ${wrongAnswer3}`\r\n      break\r\n      case 3: return `${wrongAnswer1} ${wrongAnswer2} ${rightAnswer} ${wrongAnswer3}`\r\n      break\r\n      case 4: return `${wrongAnswer1} ${wrongAnswer2} ${wrongAnswer3} ${rightAnswer}`\r\n    }\r\n  }\r\n\r\n  const html =  arr.map(toHTML).join('')\r\n \r\n  let wrapper = document.createElement(\"div\")\r\n  wrapper.classList.add('question')\r\n  wrapper.classList.add('page')\r\n  wrapper.innerHTML = html\r\n\r\n  const app = document.getElementById('app')\r\n  app.innerHTML = ''\r\n  app.append(wrapper)\r\n\r\n  document.addEventListener('click', event => {\r\n    const btnType = event.target.dataset.btn\r\n    if (btnType === 'answer') {\r\n      if (event.target.classList.contains('right')) {\r\n        console.log(event.target.innerHTML + ' right');\r\n        alert('right!')\r\n        // let response = true\r\n        // let result = new Result(response, )\r\n        // Router.modules.result().then(module => module.renderResult());\r\n      } else if (event.target.classList.contains('wrong')) {\r\n        console.log(event.target.innerHTML + ' wrong');\r\n        alert('wrong!')\r\n        // let response = false\r\n        // let result = new Result(response, )\r\n        // Router.modules.result().then(module => module.renderResult());\r\n      }\r\n    }\r\n  })\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./views/question.js?");

/***/ })

}]);