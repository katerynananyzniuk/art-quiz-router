"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["views_settings_js"],{

/***/ "./views/settings.js":
/*!***************************!*\
  !*** ./views/settings.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderSettings\": () => (/* binding */ renderSettings)\n/* harmony export */ });\nfunction renderSettings(){\r\n  let s = document.createElement(\"div\")\r\n  s.innerHTML = `\r\n  <h2>Hello from settings.js</h2>\r\n  `\r\n  s.classList.add('page')\r\n  s.classList.add('settings')\r\n  let app = document.querySelector('#app')\r\n  app.innerHTML = ''\r\n  app.append(s)\r\n  console.log('Hello from settings.js');\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./views/settings.js?");

/***/ })

}]);