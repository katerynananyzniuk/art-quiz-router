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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Question)\n/* harmony export */ });\n/* harmony import */ var _assets_images_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images.js */ \"./assets/images.js\");\n\r\n\r\nclass Question{\r\n  constructor(type, category){\r\n    this.type = type;\r\n    this.category = category;\r\n    \r\n  }\r\n}\n\n//# sourceURL=webpack:///./modules/Question.js?");

/***/ }),

/***/ "./views/categories.js":
/*!*****************************!*\
  !*** ./views/categories.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"category\": () => (/* binding */ category),\n/* harmony export */   \"renderCategories\": () => (/* binding */ renderCategories)\n/* harmony export */ });\n/* harmony import */ var _views_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/home.js */ \"./views/home.js\");\n/* harmony import */ var _modules_Category_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/Category.js */ \"./modules/Category.js\");\n\r\n\r\n\r\nfunction renderCategories(){\r\n  let c = document.createElement(\"div\")\r\n  c.innerHTML = `\r\n  <h2>Hello from categories.js</h2>\r\n\r\n  <button class=\"page-btn\">${portrait.number} ${portrait.name}</button>\r\n  <button class=\"page-btn\">${landscape.number} ${landscape.name}</button>\r\n  <button class=\"page-btn\">${stillLife.number} ${stillLife.name}</button>\r\n  <button class=\"page-btn\">${graphic.number} ${graphic.name}</button>\r\n  <button class=\"page-btn\">${antique.number} ${antique.name}</button>\r\n  <button class=\"page-btn\">${avangard.number} ${avantGarde.name}</button>\r\n  <button class=\"page-btn\">${renaissane.number} ${renaissane.name}</button>\r\n  <button class=\"page-btn\">${surrealism.number} ${surrealism.name}</button>\r\n  <button class=\"page-btn\">${kitch.number} ${kitch.name}</button>\r\n  <button class=\"page-btn\">${minimalism.number} ${minimalism.name}</button>\r\n  <button class=\"page-btn\">${avangard.number} ${avangard.name}</button>\r\n  <button class=\"page-btn\">${industrial.number} ${industrial.name}</button>\r\n  `\r\n  c.classList.add('categories')\r\n  c.classList.add('page')\r\n  let app = document.querySelector('#app')\r\n  app.innerHTML = ''\r\n  app.append(c)\r\n  console.log('Hello from categories.js');\r\n}\r\n\r\nlet portrait = new _modules_Category_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_views_home_js__WEBPACK_IMPORTED_MODULE_0__.type.type, 'portrait', 1)\r\nlet landscape = new _modules_Category_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_views_home_js__WEBPACK_IMPORTED_MODULE_0__.type.type, 'landscape', 2)\r\nlet stillLife = new _modules_Category_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_views_home_js__WEBPACK_IMPORTED_MODULE_0__.type.type, 'still-life', 3)\r\nlet graphic = new _modules_Category_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_views_home_js__WEBPACK_IMPORTED_MODULE_0__.type.type, 'graphic', 4)\r\nlet antique = new _modules_Category_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_views_home_js__WEBPACK_IMPORTED_MODULE_0__.type.type, 'antique', 5)\r\nlet avantGarde = new _modules_Category_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_views_home_js__WEBPACK_IMPORTED_MODULE_0__.type.type, 'avant-garde', 6)\r\nlet renaissane = new _modules_Category_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_views_home_js__WEBPACK_IMPORTED_MODULE_0__.type.type, 'renaissane', 7)\r\nlet surrealism = new _modules_Category_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_views_home_js__WEBPACK_IMPORTED_MODULE_0__.type.type, 'surrealism', 8)\r\nlet kitch = new _modules_Category_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_views_home_js__WEBPACK_IMPORTED_MODULE_0__.type.type, 'kitch', 9)\r\nlet minimalism = new _modules_Category_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_views_home_js__WEBPACK_IMPORTED_MODULE_0__.type.type, 'minimalism', 10)\r\nlet avangard = new _modules_Category_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_views_home_js__WEBPACK_IMPORTED_MODULE_0__.type.type, 'avangard', 11)\r\nlet industrial = new _modules_Category_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_views_home_js__WEBPACK_IMPORTED_MODULE_0__.type.type, 'industrial', 12)\r\n\r\nlet category = portrait\r\nconsole.log(category.questions[0]);\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./views/categories.js?");

/***/ }),

/***/ "./views/question.js":
/*!***************************!*\
  !*** ./views/question.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"question\": () => (/* binding */ question),\n/* harmony export */   \"renderQuestion\": () => (/* binding */ renderQuestion)\n/* harmony export */ });\n/* harmony import */ var _views_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/home.js */ \"./views/home.js\");\n/* harmony import */ var _views_categories_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/categories.js */ \"./views/categories.js\");\n/* harmony import */ var _modules_Question_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/Question.js */ \"./modules/Question.js\");\n\r\n\r\n\r\n\r\n\r\nfunction renderQuestion(){\r\n  let q = document.createElement(\"div\")\r\n  q.innerHTML = `\r\n  <h2>Hello from question.js</h2>\r\n  <hr>\r\n  <h3>${(_views_home_js__WEBPACK_IMPORTED_MODULE_0__.type.type === 'artists')?`Кто автор данной картины \"${_views_categories_js__WEBPACK_IMPORTED_MODULE_1__.category.questions[0]}\"?`:`Какую картину написал \"${_views_categories_js__WEBPACK_IMPORTED_MODULE_1__.category.questions[0]}\"?`}</h3>\r\n  `\r\n  q.classList.add('question')\r\n  q.classList.add('page')\r\n  let app = document.querySelector('#app')\r\n  app.innerHTML = ''\r\n  app.append(q)\r\n  console.log('Hello from question.js');\r\n}\r\n\r\nlet question = 'question'\r\n\n\n//# sourceURL=webpack:///./views/question.js?");

/***/ })

}]);