"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["views_home_js"],{

/***/ "./modules/Type.js":
/*!*************************!*\
  !*** ./modules/Type.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Type)\n/* harmony export */ });\nclass Type{\r\n  constructor(title, image){\r\n    this.title = title;\r\n    this.image = image;\r\n  }\r\n}\n\n//# sourceURL=webpack:///./modules/Type.js?");

/***/ }),

/***/ "./views/home.js":
/*!***********************!*\
  !*** ./views/home.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"type\": () => (/* binding */ type),\n/* harmony export */   \"renderHome\": () => (/* binding */ renderHome)\n/* harmony export */ });\n/* harmony import */ var _modules_Type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @modules/Type */ \"./modules/Type.js\");\n/* harmony import */ var _js_Router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/Router */ \"./js/Router.js\");\n\r\n\r\n\r\nconst artists =  new _modules_Type__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('artists')\r\nconst pictures = new _modules_Type__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('pictures')\r\n\r\nconst types = [ \r\n  artists, \r\n  pictures\r\n]\r\n\r\nlet type = undefined; \r\n\r\nfunction renderHome(){\r\n  const wrapper = document.createElement(\"div\")\r\n  wrapper.classList.add('home')\r\n  wrapper.classList.add('page')\r\n  wrapper.innerHTML = `\r\n  <h2>Hello from home.js</h2>\r\n  <button class=\"page-btn\" data-btn=\"type\">${artists.title}</button>\r\n  <button class=\"page-btn\" data-btn=\"type\">${pictures.title}</button>\r\n  `\r\n  \r\n  const app = document.getElementById('app')\r\n  app.innerHTML = ''\r\n  app.append(wrapper)\r\n  console.log('Hello from home.js');\r\n\r\n  document.addEventListener('click', event => {\r\n    const btnType = event.target.dataset.btn\r\n    if (btnType === 'type') {\r\n      type = event.target.innerText\r\n      console.log(\"Chosen type is\", type);\r\n      _js_Router__WEBPACK_IMPORTED_MODULE_1__[\"default\"].modules.categories().then(module => module.renderCategories());\r\n    }\r\n  })\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./views/home.js?");

/***/ })

}]);