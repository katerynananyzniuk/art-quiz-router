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

/***/ "../node_modules/css-loader/dist/cjs.js!./styles/styles.css":
/*!******************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./styles/styles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"../node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".page-btn{\\r\\n  padding: 5px;\\r\\n  margin: 10px;\\r\\n  background-color: rgba(128, 128, 128, 0.418);\\r\\n  color: #000;\\r\\n  text-decoration: none;\\r\\n  border: none;\\r\\n  border-radius: 5px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n.page-btn:hover{\\r\\n  background-color: rgba(128, 128, 128, 0.212);\\r\\n}\\r\\n.page-btn:active{\\r\\n  background-color: rgba(128, 128, 128, 0.02);\\r\\n}\\r\\n.page-btn:focus{\\r\\n  box-shadow: 0 0 0 2px rgb(133, 133, 133);\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./styles/styles.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

eval("\r\n\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\nmodule.exports = function (cssWithMappingToString) {\r\n  var list = []; // return the list of modules as css string\r\n\r\n  list.toString = function toString() {\r\n    return this.map(function (item) {\r\n      var content = \"\";\r\n      var needLayer = typeof item[5] !== \"undefined\";\r\n\r\n      if (item[4]) {\r\n        content += \"@supports (\".concat(item[4], \") {\");\r\n      }\r\n\r\n      if (item[2]) {\r\n        content += \"@media \".concat(item[2], \" {\");\r\n      }\r\n\r\n      if (needLayer) {\r\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\r\n      }\r\n\r\n      content += cssWithMappingToString(item);\r\n\r\n      if (needLayer) {\r\n        content += \"}\";\r\n      }\r\n\r\n      if (item[2]) {\r\n        content += \"}\";\r\n      }\r\n\r\n      if (item[4]) {\r\n        content += \"}\";\r\n      }\r\n\r\n      return content;\r\n    }).join(\"\");\r\n  }; // import a list of modules into the list\r\n\r\n\r\n  list.i = function i(modules, media, dedupe, supports, layer) {\r\n    if (typeof modules === \"string\") {\r\n      modules = [[null, modules, undefined]];\r\n    }\r\n\r\n    var alreadyImportedModules = {};\r\n\r\n    if (dedupe) {\r\n      for (var k = 0; k < this.length; k++) {\r\n        var id = this[k][0];\r\n\r\n        if (id != null) {\r\n          alreadyImportedModules[id] = true;\r\n        }\r\n      }\r\n    }\r\n\r\n    for (var _k = 0; _k < modules.length; _k++) {\r\n      var item = [].concat(modules[_k]);\r\n\r\n      if (dedupe && alreadyImportedModules[item[0]]) {\r\n        continue;\r\n      }\r\n\r\n      if (typeof layer !== \"undefined\") {\r\n        if (typeof item[5] === \"undefined\") {\r\n          item[5] = layer;\r\n        } else {\r\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\r\n          item[5] = layer;\r\n        }\r\n      }\r\n\r\n      if (media) {\r\n        if (!item[2]) {\r\n          item[2] = media;\r\n        } else {\r\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\r\n          item[2] = media;\r\n        }\r\n      }\r\n\r\n      if (supports) {\r\n        if (!item[4]) {\r\n          item[4] = \"\".concat(supports);\r\n        } else {\r\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\r\n          item[4] = supports;\r\n        }\r\n      }\r\n\r\n      list.push(item);\r\n    }\r\n  };\r\n\r\n  return list;\r\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!***************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\r\n\r\nmodule.exports = function (i) {\r\n  return i[1];\r\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./styles/styles.css":
/*!***************************!*\
  !*** ./styles/styles.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"../node_modules/css-loader/dist/cjs.js!./styles/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./styles/styles.css?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

eval("\r\n\r\nvar stylesInDOM = [];\r\n\r\nfunction getIndexByIdentifier(identifier) {\r\n  var result = -1;\r\n\r\n  for (var i = 0; i < stylesInDOM.length; i++) {\r\n    if (stylesInDOM[i].identifier === identifier) {\r\n      result = i;\r\n      break;\r\n    }\r\n  }\r\n\r\n  return result;\r\n}\r\n\r\nfunction modulesToDom(list, options) {\r\n  var idCountMap = {};\r\n  var identifiers = [];\r\n\r\n  for (var i = 0; i < list.length; i++) {\r\n    var item = list[i];\r\n    var id = options.base ? item[0] + options.base : item[0];\r\n    var count = idCountMap[id] || 0;\r\n    var identifier = \"\".concat(id, \" \").concat(count);\r\n    idCountMap[id] = count + 1;\r\n    var indexByIdentifier = getIndexByIdentifier(identifier);\r\n    var obj = {\r\n      css: item[1],\r\n      media: item[2],\r\n      sourceMap: item[3],\r\n      supports: item[4],\r\n      layer: item[5]\r\n    };\r\n\r\n    if (indexByIdentifier !== -1) {\r\n      stylesInDOM[indexByIdentifier].references++;\r\n      stylesInDOM[indexByIdentifier].updater(obj);\r\n    } else {\r\n      var updater = addElementStyle(obj, options);\r\n      options.byIndex = i;\r\n      stylesInDOM.splice(i, 0, {\r\n        identifier: identifier,\r\n        updater: updater,\r\n        references: 1\r\n      });\r\n    }\r\n\r\n    identifiers.push(identifier);\r\n  }\r\n\r\n  return identifiers;\r\n}\r\n\r\nfunction addElementStyle(obj, options) {\r\n  var api = options.domAPI(options);\r\n  api.update(obj);\r\n\r\n  var updater = function updater(newObj) {\r\n    if (newObj) {\r\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\r\n        return;\r\n      }\r\n\r\n      api.update(obj = newObj);\r\n    } else {\r\n      api.remove();\r\n    }\r\n  };\r\n\r\n  return updater;\r\n}\r\n\r\nmodule.exports = function (list, options) {\r\n  options = options || {};\r\n  list = list || [];\r\n  var lastIdentifiers = modulesToDom(list, options);\r\n  return function update(newList) {\r\n    newList = newList || [];\r\n\r\n    for (var i = 0; i < lastIdentifiers.length; i++) {\r\n      var identifier = lastIdentifiers[i];\r\n      var index = getIndexByIdentifier(identifier);\r\n      stylesInDOM[index].references--;\r\n    }\r\n\r\n    var newLastIdentifiers = modulesToDom(newList, options);\r\n\r\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\r\n      var _identifier = lastIdentifiers[_i];\r\n\r\n      var _index = getIndexByIdentifier(_identifier);\r\n\r\n      if (stylesInDOM[_index].references === 0) {\r\n        stylesInDOM[_index].updater();\r\n\r\n        stylesInDOM.splice(_index, 1);\r\n      }\r\n    }\r\n\r\n    lastIdentifiers = newLastIdentifiers;\r\n  };\r\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\r\n\r\nvar memo = {};\r\n/* istanbul ignore next  */\r\n\r\nfunction getTarget(target) {\r\n  if (typeof memo[target] === \"undefined\") {\r\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\r\n\r\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\r\n      try {\r\n        // This will throw an exception if access to iframe is blocked\r\n        // due to cross-origin restrictions\r\n        styleTarget = styleTarget.contentDocument.head;\r\n      } catch (e) {\r\n        // istanbul ignore next\r\n        styleTarget = null;\r\n      }\r\n    }\r\n\r\n    memo[target] = styleTarget;\r\n  }\r\n\r\n  return memo[target];\r\n}\r\n/* istanbul ignore next  */\r\n\r\n\r\nfunction insertBySelector(insert, style) {\r\n  var target = getTarget(insert);\r\n\r\n  if (!target) {\r\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\r\n  }\r\n\r\n  target.appendChild(style);\r\n}\r\n\r\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction insertStyleElement(options) {\r\n  var element = document.createElement(\"style\");\r\n  options.setAttributes(element, options.attributes);\r\n  options.insert(element, options.options);\r\n  return element;\r\n}\r\n\r\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction setAttributesWithoutAttributes(styleElement) {\r\n  var nonce =  true ? __webpack_require__.nc : 0;\r\n\r\n  if (nonce) {\r\n    styleElement.setAttribute(\"nonce\", nonce);\r\n  }\r\n}\r\n\r\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction apply(styleElement, options, obj) {\r\n  var css = \"\";\r\n\r\n  if (obj.supports) {\r\n    css += \"@supports (\".concat(obj.supports, \") {\");\r\n  }\r\n\r\n  if (obj.media) {\r\n    css += \"@media \".concat(obj.media, \" {\");\r\n  }\r\n\r\n  var needLayer = typeof obj.layer !== \"undefined\";\r\n\r\n  if (needLayer) {\r\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\r\n  }\r\n\r\n  css += obj.css;\r\n\r\n  if (needLayer) {\r\n    css += \"}\";\r\n  }\r\n\r\n  if (obj.media) {\r\n    css += \"}\";\r\n  }\r\n\r\n  if (obj.supports) {\r\n    css += \"}\";\r\n  }\r\n\r\n  var sourceMap = obj.sourceMap;\r\n\r\n  if (sourceMap && typeof btoa !== \"undefined\") {\r\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\r\n  } // For old IE\r\n\r\n  /* istanbul ignore if  */\r\n\r\n\r\n  options.styleTagTransform(css, styleElement, options.options);\r\n}\r\n\r\nfunction removeStyleElement(styleElement) {\r\n  // istanbul ignore if\r\n  if (styleElement.parentNode === null) {\r\n    return false;\r\n  }\r\n\r\n  styleElement.parentNode.removeChild(styleElement);\r\n}\r\n/* istanbul ignore next  */\r\n\r\n\r\nfunction domAPI(options) {\r\n  var styleElement = options.insertStyleElement(options);\r\n  return {\r\n    update: function update(obj) {\r\n      apply(styleElement, options, obj);\r\n    },\r\n    remove: function remove() {\r\n      removeStyleElement(styleElement);\r\n    }\r\n  };\r\n}\r\n\r\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction styleTagTransform(css, styleElement) {\r\n  if (styleElement.styleSheet) {\r\n    styleElement.styleSheet.cssText = css;\r\n  } else {\r\n    while (styleElement.firstChild) {\r\n      styleElement.removeChild(styleElement.firstChild);\r\n    }\r\n\r\n    styleElement.appendChild(document.createTextNode(css));\r\n  }\r\n}\r\n\r\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./assets/images.js":
/*!**************************!*\
  !*** ./assets/images.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst images = [\r\n  {\r\n      author: 'Павел Федотов',\r\n      name: 'Сватовство майора',\r\n      year: '1852',\r\n      imageNum: '0',\r\n  },\r\n  {\r\n      author: 'Эдгар Дега',\r\n      name: 'Голубые танцовщицы',\r\n      year: '1897',\r\n      imageNum: '1',\r\n  },\r\n  {\r\n      author: 'Веронезе',\r\n      name: 'Пир в доме Левия',\r\n      year: '1563',\r\n      imageNum: '2',\r\n  },\r\n  {\r\n      author: 'Илья Репин',\r\n      name: 'Иван Грозный и сын его Иван',\r\n      year: '1885',\r\n      imageNum: '3',\r\n  },\r\n  {\r\n      author: 'Константин Маковский',\r\n      name: 'Портрет графини Софьи',\r\n      year: '1890',\r\n      imageNum: '4',\r\n  },\r\n  {\r\n      author: 'Василий Перов',\r\n      name: 'Приезд гувернантки в купеческий дом',\r\n      year: '1866',\r\n      imageNum: '5',\r\n  },\r\n  {\r\n      author: 'Микеланджело',\r\n      name: 'Сотворение Адама',\r\n      year: '1511',\r\n      imageNum: '6',\r\n  },\r\n  {\r\n      author: 'Пьер Огюст Ренуар',\r\n      name: 'Прогулка в Булонском лесу',\r\n      year: '1873',\r\n      imageNum: '7',\r\n  },\r\n  {\r\n      author: 'Ян Вермеер',\r\n      name: 'Хозяйка и служанка',\r\n      year: '1667',\r\n      imageNum: '8',\r\n  },\r\n  {\r\n      author: 'Василий Поленов',\r\n      name: 'Московский дворик',\r\n      year: '1877',\r\n      imageNum: '9',\r\n  },\r\n  {\r\n      author: 'Фёдор Васильев',\r\n      name: 'Мокрый луг',\r\n      year: '1872',\r\n      imageNum: '10',\r\n  },\r\n  {\r\n      author: 'Илья Репин',\r\n      name: 'Проводы новобранца',\r\n      year: '1879',\r\n      imageNum: '11',\r\n  },\r\n  {\r\n      author: 'Веронезе',\r\n      name: 'Марс и Венера',\r\n      year: '1560',\r\n      imageNum: '12',\r\n  },\r\n  {\r\n      author: 'Виктор Васнецов',\r\n      name: 'Аленушка',\r\n      year: '1881',\r\n      imageNum: '13',\r\n  },\r\n  {\r\n      author: 'Клод Лоррен',\r\n      name: 'Отплытие святой Урсулы',\r\n      year: '1614',\r\n      imageNum: '14',\r\n  },\r\n  {\r\n      author: 'Илья Репин',\r\n      name: 'Вечорници',\r\n      year: '1881',\r\n      imageNum: '15',\r\n  },\r\n  {\r\n      author: 'Жан Фрагонар',\r\n      name: 'Качели',\r\n      year: '1767',\r\n      imageNum: '16',\r\n  },\r\n  {\r\n      author: 'Архип Куинджи',\r\n      name: 'Берёзовая роща',\r\n      year: '1879',\r\n      imageNum: '17',\r\n  },\r\n  {\r\n      author: 'Пабло Пикассо',\r\n      name: 'Герника',\r\n      year: '1937',\r\n      imageNum: '18',\r\n  },\r\n  {\r\n      author: 'Поль Гоген',\r\n      name: 'Откуда мы пришли? Кто мы? Куда мы идём?',\r\n      year: '1898',\r\n      imageNum: '19',\r\n  },\r\n  {\r\n      author: 'Бартоломео Мурильо',\r\n      name: 'Мадонна с четками',\r\n      year: '1655',\r\n      imageNum: '20',\r\n  },\r\n  {\r\n      author: 'Питер Брейгель',\r\n      name: 'Фламандские пословицы',\r\n      year: '1559',\r\n      imageNum: '21',\r\n  },\r\n  {\r\n      author: 'Ян ван Эйк',\r\n      name: 'Портрет четы Арнольфини',\r\n      year: '1434',\r\n      imageNum: '22',\r\n  },\r\n  {\r\n      author: 'Питер Брейгель',\r\n      name: 'Избиение младенцев',\r\n      year: '1567',\r\n      imageNum: '23',\r\n  },\r\n  {\r\n      author: 'Константин Маковский',\r\n      name: 'Дети, бегущие от грозы',\r\n      year: '1872',\r\n      imageNum: '24',\r\n  },\r\n  {\r\n      author: 'Рембрандт',\r\n      name: 'Даная',\r\n      year: '1647',\r\n      imageNum: '25',\r\n  },\r\n  {\r\n      author: 'Рафаэль',\r\n      name: 'Мадонна в кресле',\r\n      year: '1514',\r\n      imageNum: '26',\r\n  },\r\n  {\r\n      author: 'Василий Суриков',\r\n      name: 'Взятие снежного городка',\r\n      year: '1891',\r\n      imageNum: '27',\r\n  },\r\n  {\r\n      author: 'Иван Шишкин',\r\n      name: 'Ручей в берёзовом лесу',\r\n      year: '1883',\r\n      imageNum: '28',\r\n  },\r\n  {\r\n      author: 'Василий Суриков',\r\n      name: 'Покорение Сибири Ермаком Тимофеевичем',\r\n      year: '1895',\r\n      imageNum: '29',\r\n  },\r\n  {\r\n      author: 'Владимир Боровиковский',\r\n      name: 'Портрет Лопухиной',\r\n      year: '1797',\r\n      imageNum: '30',\r\n  },\r\n  {\r\n      author: 'Рене Магритт',\r\n      name: 'Сын человеческий',\r\n      year: '1964',\r\n      imageNum: '31',\r\n  },\r\n  {\r\n      author: 'Веласкес',\r\n      name: 'Венера с зеркалом',\r\n      year: '1651',\r\n      imageNum: '32',\r\n  },\r\n  {\r\n      author: 'Иван Богданов',\r\n      name: 'За расчётом',\r\n      year: '1890',\r\n      imageNum: '33',\r\n  },\r\n  {\r\n      author: 'Рембрандт',\r\n      name: 'Христос и грешница',\r\n      year: '1644',\r\n      imageNum: '34',\r\n  },\r\n  {\r\n      author: 'Джон Уильям Уотерхаус',\r\n      name: 'Волшебница Шалот',\r\n      year: '1888',\r\n      imageNum: '35',\r\n  },\r\n  {\r\n      author: 'Пьер Огюст Ренуар',\r\n      name: 'Большие купальщицы',\r\n      year: '1887',\r\n      imageNum: '36',\r\n  },\r\n  {\r\n      author: 'Бартоломео Мурильо',\r\n      name: 'Мальчик с собакой',\r\n      year: '1650',\r\n      imageNum: '37',\r\n  },\r\n  {\r\n      author: 'Василий Перов',\r\n      name: 'Тройка',\r\n      year: '1866',\r\n      imageNum: '38',\r\n  },\r\n  {\r\n      author: 'Николай Богданов-Бельский',\r\n      name: 'Устный счёт',\r\n      year: '1895',\r\n      imageNum: '39',\r\n  },\r\n  {\r\n      author: 'Виктор Васнецов',\r\n      name: 'Три царевны подземного царства',\r\n      year: '1884',\r\n      imageNum: '40',\r\n  },\r\n  {\r\n      author: 'Анри Матисс',\r\n      name: 'Танец',\r\n      year: '1910',\r\n      imageNum: '41',\r\n  },\r\n  {\r\n      author: 'Эдвард Мунк',\r\n      name: 'Мадонна',\r\n      year: '1894',\r\n      imageNum: '42',\r\n  },\r\n  {\r\n      author: 'Марк Шагал',\r\n      name: 'Прогулка',\r\n      year: '1918',\r\n      imageNum: '43',\r\n  },\r\n  {\r\n      author: 'Василий Перов',\r\n      name: 'Сельский крестный ход на Пасхе',\r\n      year: '1861',\r\n      imageNum: '44',\r\n  },\r\n  {\r\n      author: 'Иероним Босх',\r\n      name: 'Страшный суд',\r\n      year: '1504',\r\n      imageNum: '45',\r\n  },\r\n  {\r\n      author: 'Карл Лемох',\r\n      name: 'Варька',\r\n      year: '1893',\r\n      imageNum: '46',\r\n  },\r\n  {\r\n      author: 'Жан Фрагонар',\r\n      name: 'Поцелуй украдкой',\r\n      year: '1788',\r\n      imageNum: '47',\r\n  },\r\n  {\r\n      author: 'Франсуа Буше',\r\n      name: 'Венера, утешающая Амура',\r\n      year: '1751',\r\n      imageNum: '48',\r\n  },\r\n  {\r\n      author: 'Иван Шишкин',\r\n      name: 'Корабельная роща',\r\n      year: '1898',\r\n      imageNum: '49',\r\n  },\r\n  {\r\n      author: 'Густав Климт',\r\n      name: 'Золотая Адель',\r\n      year: '1907',\r\n      imageNum: '50',\r\n  },\r\n  {\r\n      author: 'Виктор Васнецов',\r\n      name: 'Богатыри',\r\n      year: '1898',\r\n      imageNum: '51',\r\n  },\r\n  {\r\n      author: 'Вильгельм фон Каульбах',\r\n      name: 'Разрушение Иерусалима',\r\n      year: '1846',\r\n      imageNum: '52',\r\n  },\r\n  {\r\n      author: 'Веронезе',\r\n      name: 'Брак в Кане Галилейской',\r\n      year: '1562',\r\n      imageNum: '53',\r\n  },\r\n  {\r\n      author: 'Андрей Рублев',\r\n      name: 'Троица',\r\n      year: '1411',\r\n      imageNum: '54',\r\n  },\r\n  {\r\n      author: 'Василий Суриков',\r\n      name: 'Утро стрелецкой казни',\r\n      year: '1881',\r\n      imageNum: '55',\r\n  },\r\n  {\r\n      author: 'Тициан',\r\n      name: 'Вакханалия',\r\n      year: '1526',\r\n      imageNum: '56',\r\n  },\r\n  {\r\n      author: 'Веласкес',\r\n      name: 'Вилла Медичи в Риме. Полдень',\r\n      year: '1630',\r\n      imageNum: '57',\r\n  },\r\n  {\r\n      author: 'Эдуард Мане',\r\n      name: 'Ланч на траве',\r\n      year: '1863',\r\n      imageNum: '58',\r\n  },\r\n  {\r\n      author: 'Сальвадор Дали',\r\n      name: 'Постоянство памяти',\r\n      year: '1931',\r\n      imageNum: '59',\r\n  },\r\n  {\r\n      author: 'Пьер Огюст Ренуар',\r\n      name: 'Две девушки',\r\n      year: '1892',\r\n      imageNum: '60',\r\n  },\r\n  {\r\n      author: 'Александр Маковский',\r\n      name: 'Надоела',\r\n      year: '1897',\r\n      imageNum: '61',\r\n  },\r\n  {\r\n      author: 'Веласкес',\r\n      name: 'Менины',\r\n      year: '1656',\r\n      imageNum: '62',\r\n  },\r\n  {\r\n      author: 'Антонис ван Дейк',\r\n      name: 'Самсон и Далила',\r\n      year: '1628',\r\n      imageNum: '63',\r\n  },\r\n  {\r\n      author: 'Пабло Пикассо',\r\n      name: 'Девочка на шаре',\r\n      year: '1905',\r\n      imageNum: '64',\r\n  },\r\n  {\r\n      author: 'Джованни Беллини',\r\n      name: 'Пир богов',\r\n      year: '1514',\r\n      imageNum: '65',\r\n  },\r\n  {\r\n      author: 'Леонардо да Винчи',\r\n      name: 'Дама с горностаем',\r\n      year: '1490',\r\n      imageNum: '66',\r\n  },\r\n  {\r\n      author: 'Веласкес',\r\n      name: 'Бахус',\r\n      year: '1628',\r\n      imageNum: '67',\r\n  },\r\n  {\r\n      author: 'Бартоломео Мурильо',\r\n      name: 'Непорочное зачатие',\r\n      year: '1678',\r\n      imageNum: '68',\r\n  },\r\n  {\r\n      author: 'Теодор Жерико',\r\n      name: 'Плот \"Медузы\"',\r\n      year: '1819',\r\n      imageNum: '69',\r\n  },\r\n  {\r\n      author: 'Иван Шишкин',\r\n      name: 'Утро в сосновом лесу',\r\n      year: '1889',\r\n      imageNum: '70',\r\n  },\r\n  {\r\n      author: 'Жан Этьен Лиотар',\r\n      name: 'Шоколадница',\r\n      year: '1745',\r\n      imageNum: '71',\r\n  },\r\n  {\r\n      author: 'Рембрандт',\r\n      name: 'Автопортрет с Саскией',\r\n      year: '1635',\r\n      imageNum: '72',\r\n  },\r\n  {\r\n      author: 'Илья Репин',\r\n      name: 'Крестный ход',\r\n      year: '1883',\r\n      imageNum: '73',\r\n  },\r\n  {\r\n      author: 'Алексей Венецианов',\r\n      name: 'Спящий пастушок',\r\n      year: '1826',\r\n      imageNum: '74',\r\n  },\r\n  {\r\n      author: 'Иван Богданов',\r\n      name: 'Новичок',\r\n      year: '1893',\r\n      imageNum: '75',\r\n  },\r\n  {\r\n      author: 'Анри де Тулуз-Лотрек',\r\n      name: 'Угол Мулен де ла Галет',\r\n      year: '1892',\r\n      imageNum: '76',\r\n  },\r\n  {\r\n      author: 'Тициан',\r\n      name: 'Кающаяся Марина Магдалина',\r\n      year: '1565',\r\n      imageNum: '77',\r\n  },\r\n  {\r\n      author: 'Веласкес',\r\n      name: 'Инфанта Маргарита',\r\n      year: '1654',\r\n      imageNum: '78',\r\n  },\r\n  {\r\n      author: 'Тициан',\r\n      name: 'Динарий Кесаря',\r\n      year: '1516',\r\n      imageNum: '79',\r\n  },\r\n  {\r\n      author: 'Карл Брюллов',\r\n      name: 'Всадница',\r\n      year: '1832',\r\n      imageNum: '80',\r\n  },\r\n  {\r\n      author: 'Василий Верещагин',\r\n      name: 'Апофеоз войны',\r\n      year: '1817',\r\n      imageNum: '81',\r\n  },\r\n  {\r\n      author: 'Леонардо да Винчи',\r\n      name: 'Благовещение',\r\n      year: '1475',\r\n      imageNum: '82',\r\n  },\r\n  {\r\n      author: 'Алексей Саврасов',\r\n      name: 'Грачи прилетели',\r\n      year: '1871',\r\n      imageNum: '83',\r\n  },\r\n  {\r\n      author: 'Тициан',\r\n      name: 'Любовь земная и Любовь небесная',\r\n      year: '1516',\r\n      imageNum: '84',\r\n  },\r\n  {\r\n      author: 'Жан Батист Грёз',\r\n      name: 'Деревенская помолвка',\r\n      year: '1761',\r\n      imageNum: '85',\r\n  },\r\n  {\r\n      author: 'Пабло Пикассо',\r\n      name: 'Авиньонские девицы',\r\n      year: '1907',\r\n      imageNum: '86',\r\n  },\r\n  {\r\n      author: 'Илья Репин',\r\n      name: 'Бурлаки на Волге',\r\n      year: '1873',\r\n      imageNum: '87',\r\n  },\r\n  {\r\n      author: 'Михаил Нестеров',\r\n      name: 'Видение отроку Варфоломею',\r\n      year: '1890',\r\n      imageNum: '88',\r\n  },\r\n  {\r\n      author: 'Рафаэль',\r\n      name: 'Мадонна Бельведерская',\r\n      year: '1506',\r\n      imageNum: '89',\r\n  },\r\n  {\r\n      author: 'Василий Тропинин',\r\n      name: 'Девушка с горшком роз',\r\n      year: '1850',\r\n      imageNum: '90',\r\n  },\r\n  {\r\n      author: 'Караваджо',\r\n      name: 'Лютнист',\r\n      year: '1596',\r\n      imageNum: '91',\r\n  },\r\n  {\r\n      author: 'Василий Перов',\r\n      name: 'Охотники на привале',\r\n      year: '1871',\r\n      imageNum: '92',\r\n  },\r\n  {\r\n      author: 'Леонардо да Винчи',\r\n      name: 'Тайная вечеря',\r\n      year: '1498',\r\n      imageNum: '93',\r\n  },\r\n  {\r\n      author: 'Жан Батист Грёз',\r\n      name: 'Избалованное дитя',\r\n      year: '1765',\r\n      imageNum: '94',\r\n  },\r\n  {\r\n      author: 'Адольф Вильям Бугро',\r\n      name: 'Волна',\r\n      year: '1896',\r\n      imageNum: '95',\r\n  },\r\n  {\r\n      author: 'Кузьма Петров-Водкин',\r\n      name: 'Купание красного коня',\r\n      year: '1912',\r\n      imageNum: '96',\r\n  },\r\n  {\r\n      author: 'Густав Климт',\r\n      name: 'Поцелуй',\r\n      year: '1908',\r\n      imageNum: '97',\r\n  },\r\n  {\r\n      author: 'Иван Шишкин',\r\n      name: 'Рожь',\r\n      year: '1878',\r\n      imageNum: '98',\r\n  },\r\n  {\r\n      author: 'Жан-Леон Жером',\r\n      name: 'Бой гладиаторов',\r\n      year: '1872',\r\n      imageNum: '99',\r\n  },\r\n  {\r\n      author: 'Василий Суриков',\r\n      name: 'Боярыня Морозова',\r\n      year: '1887',\r\n      imageNum: '100',\r\n  },\r\n  {\r\n      author: 'Исаак Левитан',\r\n      name: 'Над вечным покоем',\r\n      year: '1894',\r\n      imageNum: '101',\r\n  },\r\n  {\r\n      author: 'Гейнсборо',\r\n      name: 'Дама в голубом',\r\n      year: '1780',\r\n      imageNum: '102',\r\n  },\r\n  {\r\n      author: 'Алексей Венецианов',\r\n      name: 'На пашне. Весна',\r\n      year: '1820',\r\n      imageNum: '103',\r\n  },\r\n  {\r\n      author: 'Тициан',\r\n      name: 'Саломея',\r\n      year: '1515',\r\n      imageNum: '104',\r\n  },\r\n  {\r\n      author: 'Василий Кандинский',\r\n      name: 'Композиция VIII',\r\n      year: '1923',\r\n      imageNum: '105',\r\n  },\r\n  {\r\n      author: 'Василий Поленов',\r\n      name: 'В парке',\r\n      year: '1874',\r\n      imageNum: '106',\r\n  },\r\n  {\r\n      author: 'Луи Лагрене',\r\n      name: 'Марс и Венера',\r\n      year: '1770',\r\n      imageNum: '107',\r\n  },\r\n  {\r\n      author: 'Сальвадор Дали',\r\n      name: 'Сон, вызванный полётом пчелы вокруг граната, за секунду до пробуждения',\r\n      year: '1944',\r\n      imageNum: '108',\r\n  },\r\n  {\r\n      author: 'Ян Вермеер',\r\n      name: 'Девушка с жемчужной серёжкой',\r\n      year: '1665',\r\n      imageNum: '109',\r\n  },\r\n  {\r\n      author: 'Анри Руссо',\r\n      name: 'Спящая цыганка',\r\n      year: '1897',\r\n      imageNum: '110',\r\n  },\r\n  {\r\n      author: 'Василий Поленов',\r\n      name: 'Переправа через реку',\r\n      year: '1872',\r\n      imageNum: '111',\r\n  },\r\n  {\r\n      author: 'Эдвард Мунк',\r\n      name: 'Крик',\r\n      year: '1893',\r\n      imageNum: '112',\r\n  },\r\n  {\r\n      author: 'Карл Брюллов',\r\n      name: 'Последний день Помпеи',\r\n      year: '1833',\r\n      imageNum: '113',\r\n  },\r\n  {\r\n      author: 'Илья Репин',\r\n      name: 'Летний пейзаж',\r\n      year: '1879',\r\n      imageNum: '114',\r\n  },\r\n  {\r\n      author: 'Ян Вермеер',\r\n      name: 'Молочница',\r\n      year: '1660',\r\n      imageNum: '115',\r\n  },\r\n  {\r\n      author: 'Иван Айвазовский',\r\n      name: 'Девятый вал',\r\n      year: '1850',\r\n      imageNum: '116',\r\n  },\r\n  {\r\n      author: 'Винсент Ван Гог',\r\n      name: 'Подсолнухи',\r\n      year: '1888',\r\n      imageNum: '117',\r\n  },\r\n  {\r\n      author: 'Валентин Серов',\r\n      name: 'Девочка с персиками',\r\n      year: '1887',\r\n      imageNum: '118',\r\n  },\r\n  {\r\n      author: 'Караваджо',\r\n      name: 'Обращение Савла',\r\n      year: '1601',\r\n      imageNum: '119',\r\n  },\r\n  {\r\n      author: 'Альбрехт Дюрер',\r\n      name: 'Праздник венков из роз',\r\n      year: '1506',\r\n      imageNum: '120',\r\n  },\r\n  {\r\n      author: 'Эль Греко',\r\n      name: 'Изгнание торгующих из храма',\r\n      year: '1600',\r\n      imageNum: '121',\r\n  },\r\n  {\r\n      author: 'Илья Репин',\r\n      name: 'Приготовление к экзамену',\r\n      year: '1864',\r\n      imageNum: '122',\r\n  },\r\n  {\r\n      author: 'Исаак Левитан',\r\n      name: 'Март',\r\n      year: '1895',\r\n      imageNum: '123',\r\n  },\r\n  {\r\n      author: 'Адольф Вильям Бугро',\r\n      name: 'Девушка и Амур',\r\n      year: '1880',\r\n      imageNum: '124',\r\n  },\r\n  {\r\n      author: 'Леонардо да Винчи',\r\n      name: 'Мадонна Литта',\r\n      year: '1491',\r\n      imageNum: '125',\r\n  },\r\n  {\r\n      author: 'Казимир Малевич',\r\n      name: 'Черный квадрат',\r\n      year: '1915',\r\n      imageNum: '126',\r\n  },\r\n  {\r\n      author: 'Эль Греко',\r\n      name: 'Апостолы Петр и Павел',\r\n      year: '1592',\r\n      imageNum: '127',\r\n  },\r\n  {\r\n      author: 'Виктор Васнецов',\r\n      name: 'Витязь на распутье',\r\n      year: '1878',\r\n      imageNum: '128',\r\n  },\r\n  {\r\n      author: 'Константин Маковский',\r\n      name: 'Боярский свадебный пир',\r\n      year: '1883',\r\n      imageNum: '129',\r\n  },\r\n  {\r\n      author: 'Эжен Делакруа',\r\n      name: 'Свобода, ведущая народ',\r\n      year: '1830',\r\n      imageNum: '130',\r\n  },\r\n  {\r\n      author: 'Василий Поленов',\r\n      name: 'Бабушкин сад',\r\n      year: '1878',\r\n      imageNum: '131',\r\n  },\r\n  {\r\n      author: 'Анри Матисс',\r\n      name: 'Семейный портрет',\r\n      year: '1911',\r\n      imageNum: '132',\r\n  },\r\n  {\r\n      author: 'Константин Маковский',\r\n      name: 'Гадание',\r\n      year: '1890',\r\n      imageNum: '133',\r\n  },\r\n  {\r\n      author: 'Пьер Огюст Ренуар',\r\n      name: 'Мост в Шату',\r\n      year: '1875',\r\n      imageNum: '134',\r\n  },\r\n  {\r\n      author: 'Сандро Боттичелли',\r\n      name: 'Весна',\r\n      year: '1482',\r\n      imageNum: '135',\r\n  },\r\n  {\r\n      author: 'Пьер Огюст Ренуар',\r\n      name: 'Зонтики',\r\n      year: '1886',\r\n      imageNum: '136',\r\n  },\r\n  {\r\n      author: 'Гюстав Курбе',\r\n      name: 'Мастерская художника',\r\n      year: '1855',\r\n      imageNum: '137',\r\n  },\r\n  {\r\n      author: 'Василий Поленов',\r\n      name: 'Деревня Окулова гора',\r\n      year: '1860',\r\n      imageNum: '138',\r\n  },\r\n  {\r\n      author: 'Константин Маковский',\r\n      name: 'Перемещение ковра Мухаммеда из Мекки в Каир',\r\n      year: '1875',\r\n      imageNum: '139',\r\n  },\r\n  {\r\n      author: 'Пьер Огюст Ренуар',\r\n      name: 'Бал в Мулен де ла Галетт',\r\n      year: '1876',\r\n      imageNum: '140',\r\n  },\r\n  {\r\n      author: 'Иван Крамской',\r\n      name: 'Неизвестная',\r\n      year: '1883',\r\n      imageNum: '141',\r\n  },\r\n  {\r\n      author: 'Веласкес',\r\n      name: 'Кузница вулкана',\r\n      year: '1630',\r\n      imageNum: '142',\r\n  },\r\n  {\r\n      author: 'Илья Репин',\r\n      name: 'Запорожцы',\r\n      year: '1891',\r\n      imageNum: '143',\r\n  },\r\n  {\r\n      author: 'Рафаэль',\r\n      name: 'Дама с единорогом',\r\n      year: '1506',\r\n      imageNum: '144',\r\n  },\r\n  {\r\n      author: 'Александр Иванов',\r\n      name: 'Явление Христа народу',\r\n      year: '1857',\r\n      imageNum: '145',\r\n  },\r\n  {\r\n      author: 'Эдуард Мане',\r\n      name: 'Женщина с кувшином',\r\n      year: '1858',\r\n      imageNum: '146',\r\n  },\r\n  {\r\n      author: 'Тициан',\r\n      name: 'Конный портрет Карла V',\r\n      year: '1548',\r\n      imageNum: '147',\r\n  },\r\n  {\r\n      author: 'Пьер Огюст Ренуар',\r\n      name: 'Завтрак гребцов',\r\n      year: '1881',\r\n      imageNum: '148',\r\n  },\r\n  {\r\n      author: 'Карл Брюллов',\r\n      name: 'Итальянский полдень',\r\n      year: '1827',\r\n      imageNum: '149',\r\n  },\r\n  {\r\n      author: 'Виктор Васнецов',\r\n      name: 'Царь Иван Васильевич Грозный',\r\n      year: '1896',\r\n      imageNum: '150',\r\n  },\r\n  {\r\n      author: 'Питер Брейгель',\r\n      name: 'Охотники на снегу',\r\n      year: '1565',\r\n      imageNum: '151',\r\n  },\r\n  {\r\n      author: 'Виктор Васнецов',\r\n      name: 'Ковер-самолёт',\r\n      year: '1880',\r\n      imageNum: '152',\r\n  },\r\n  {\r\n      author: 'Марк Шагал',\r\n      name: 'Я и деревня',\r\n      year: '1911',\r\n      imageNum: '153',\r\n  },\r\n  {\r\n      author: 'Леонардо да Винчи',\r\n      name: 'Мона Лиза',\r\n      year: '1505',\r\n      imageNum: '154',\r\n  },\r\n  {\r\n      author: 'Франческо Баккьякка',\r\n      name: 'Мадонна с младенцем',\r\n      year: '1520',\r\n      imageNum: '155',\r\n  },\r\n  {\r\n      author: 'Жак-Луи Давид',\r\n      name: 'Клятва Горациев',\r\n      year: '1784',\r\n      imageNum: '156',\r\n  },\r\n  {\r\n      author: 'Альбрехт Дюрер',\r\n      name: 'Адам и Ева',\r\n      year: '1507',\r\n      imageNum: '157',\r\n  },\r\n  {\r\n      author: 'Бартоломео Мурильо',\r\n      name: 'Явление и дар Богородицы',\r\n      year: '1655',\r\n      imageNum: '158',\r\n  },\r\n  {\r\n      author: 'Василий Перов',\r\n      name: 'Птицелов',\r\n      year: '1870',\r\n      imageNum: '159',\r\n  },\r\n  {\r\n      author: 'Караваджо',\r\n      name: 'Отдых на пути в Египет',\r\n      year: '1596',\r\n      imageNum: '160',\r\n  },\r\n  {\r\n      author: 'Франциско Гоя',\r\n      name: 'Расстрел повстанцев',\r\n      year: '1808',\r\n      imageNum: '161',\r\n  },\r\n  {\r\n      author: 'Рафаэль',\r\n      name: 'Триумф Галатеи',\r\n      year: '1512',\r\n      imageNum: '162',\r\n  },\r\n  {\r\n      author: 'Михаил Врубель',\r\n      name: 'Демон сидящий',\r\n      year: '1890',\r\n      imageNum: '163',\r\n  },\r\n  {\r\n      author: 'Винсент Ван Гог',\r\n      name: 'Ирисы',\r\n      year: '1889',\r\n      imageNum: '164',\r\n  },\r\n  {\r\n      author: 'Поль Деларош',\r\n      name: 'Казнь Джейн Грей',\r\n      year: '1833',\r\n      imageNum: '165',\r\n  },\r\n  {\r\n      author: 'Джон Констебл',\r\n      name: 'Вид на собор в Солсбери из епископского сада',\r\n      year: '1823',\r\n      imageNum: '166',\r\n  },\r\n  {\r\n      author: 'Винсент Ван Гог',\r\n      name: 'Звёздная ночь',\r\n      year: '1889',\r\n      imageNum: '167',\r\n  },\r\n  {\r\n      author: 'Франсуа Буше',\r\n      name: 'Четыре сезона - Весна',\r\n      year: '1755',\r\n      imageNum: '168',\r\n  },\r\n  {\r\n      author: 'Рафаэль',\r\n      name: 'Мадонна с розой',\r\n      year: '1518',\r\n      imageNum: '169',\r\n  },\r\n  {\r\n      author: 'Василий Тропинин',\r\n      name: 'Кружевница',\r\n      year: '1823',\r\n      imageNum: '170',\r\n  },\r\n  {\r\n      author: 'Рембрандт',\r\n      name: 'Пир Вальтасара',\r\n      year: '1635',\r\n      imageNum: '171',\r\n  },\r\n  {\r\n      author: 'Василий Суриков',\r\n      name: 'Переход Суворова через Альпы',\r\n      year: '1899',\r\n      imageNum: '172',\r\n  },\r\n  {\r\n      author: 'Исаак Левитан',\r\n      name: 'Золотая осень',\r\n      year: '1895',\r\n      imageNum: '173',\r\n  },\r\n  {\r\n      author: 'Архип Куинджи',\r\n      name: 'На острове Валааме',\r\n      year: '1873',\r\n      imageNum: '174',\r\n  },\r\n  {\r\n      author: 'Веласкес',\r\n      name: 'Сдача Бреды',\r\n      year: '1635',\r\n      imageNum: '175',\r\n  },\r\n  {\r\n      author: 'Илья Репин',\r\n      name: 'Не ждали',\r\n      year: '1888',\r\n      imageNum: '176',\r\n  },\r\n  {\r\n      author: 'Франсуа Буше',\r\n      name: 'Купание Дианы',\r\n      year: '1742',\r\n      imageNum: '177',\r\n  },\r\n  {\r\n      author: 'Марианна Верёвкина',\r\n      name: 'Муравейник',\r\n      year: '1916',\r\n      imageNum: '178',\r\n  },\r\n  {\r\n      author: 'Пьер Огюст Ренуар',\r\n      name: 'Портрет Жанны Самари',\r\n      year: '1877',\r\n      imageNum: '179',\r\n  },\r\n  {\r\n      author: 'Илья Репин',\r\n      name: 'Садко',\r\n      year: '1876',\r\n      imageNum: '180',\r\n  },\r\n  {\r\n      author: 'Архип Куинджи',\r\n      name: 'Лунная ночь на Днепре',\r\n      year: '1880',\r\n      imageNum: '181',\r\n  },\r\n  {\r\n      author: 'Веласкес',\r\n      name: 'Поклонение волхвов',\r\n      year: '1619',\r\n      imageNum: '182',\r\n  },\r\n  {\r\n      author: 'Николай Богданов-Бельский',\r\n      name: 'У дверей школы',\r\n      year: '1897',\r\n      imageNum: '183',\r\n  },\r\n  {\r\n      author: 'Иероним Босх',\r\n      name: 'Сад земных наслаждений',\r\n      year: '1510',\r\n      imageNum: '184',\r\n  },\r\n  {\r\n      author: 'Корреджо',\r\n      name: 'Даная',\r\n      year: '1530',\r\n      imageNum: '185',\r\n  },\r\n  {\r\n      author: 'Питер Пауль Рубенс',\r\n      name: 'Похищение дочерей Левкиппа',\r\n      year: '1618',\r\n      imageNum: '186',\r\n  },\r\n  {\r\n      author: 'Жан Энгр',\r\n      name: 'Большая одалиска',\r\n      year: '1814',\r\n      imageNum: '187',\r\n  },\r\n  {\r\n      author: 'Рафаэль',\r\n      name: 'Сикстинская Мадонна',\r\n      year: '1520',\r\n      imageNum: '188',\r\n  },\r\n  {\r\n      author: 'Рембрандт',\r\n      name: 'Похищение Европы',\r\n      year: '1632',\r\n      imageNum: '189',\r\n  },\r\n  {\r\n      author: 'Питер Пауль Рубенс',\r\n      name: 'Похищение Орфии Бореем',\r\n      year: '1615',\r\n      imageNum: '190',\r\n  },\r\n  {\r\n      author: 'Архип Куинджи',\r\n      name: 'Украинская ночь',\r\n      year: '1876',\r\n      imageNum: '191',\r\n  },\r\n  {\r\n      author: 'Эдгар Дега',\r\n      name: 'Танцовщицы у станка',\r\n      year: '1877',\r\n      imageNum: '192',\r\n  },\r\n  {\r\n      author: 'Алексей Венецианов',\r\n      name: 'На жатве. Лето',\r\n      year: '1827',\r\n      imageNum: '193',\r\n  },\r\n  {\r\n      author: 'Пьер Огюст Ренуар',\r\n      name: 'Две сестры',\r\n      year: '1881',\r\n      imageNum: '194',\r\n  },\r\n  {\r\n      author: 'Рембрандт',\r\n      name: 'Ночной дозор',\r\n      year: '1642',\r\n      imageNum: '195',\r\n  },\r\n  {\r\n      author: 'Эдуард Мане',\r\n      name: 'Бар в «Фоли-Бержер»',\r\n      year: '1882',\r\n      imageNum: '196',\r\n  },\r\n  {\r\n      author: 'Никола Пуссен',\r\n      name: 'Пейзаж с Полифемом',\r\n      year: '1649',\r\n      imageNum: '197',\r\n  },\r\n  {\r\n      author: 'Питер Брейгель',\r\n      name: 'Притча о слепых',\r\n      year: '1568',\r\n      imageNum: '198',\r\n  },\r\n  {\r\n      author: 'Виктор Васнецов',\r\n      name: 'Иван-царевич на Сером Волке',\r\n      year: '1888',\r\n      imageNum: '199',\r\n  },\r\n  {\r\n      author: 'Сандро Боттичелли',\r\n      name: 'Рождение Венеры',\r\n      year: '1486',\r\n      imageNum: '200',\r\n  },\r\n  {\r\n      author: 'Леонардо да Винчи',\r\n      name: 'Мадонна в скалах',\r\n      year: '1486',\r\n      imageNum: '201',\r\n  },\r\n  {\r\n      author: 'Аксели Галлен-Каллела',\r\n      name: 'Любовники',\r\n      year: '1916',\r\n      imageNum: '202',\r\n  },\r\n  {\r\n      author: 'Винсент Ван Гог',\r\n      name: 'Автопортрет с перевязанным ухом',\r\n      year: '1889',\r\n      imageNum: '203',\r\n  },\r\n  {\r\n      author: 'Клод Моне',\r\n      name: 'Впечатление. Восходящее солнце',\r\n      year: '1882',\r\n      imageNum: '204',\r\n  },\r\n  {\r\n      author: 'Рембрандт',\r\n      name: 'Возвращение блудного сына',\r\n      year: '1662',\r\n      imageNum: '205',\r\n  },\r\n  {\r\n      author: 'Караваджо',\r\n      name: 'Больной вакх',\r\n      year: '1593',\r\n      imageNum: '206',\r\n  },\r\n  {\r\n      author: 'Иван Айвазовский',\r\n      name: 'Лунная дорожка',\r\n      year: '1886',\r\n      imageNum: '207',\r\n  },\r\n  {\r\n      author: 'Винсент Ван Гог',\r\n      name: 'Пшеничное поле с кипарисами',\r\n      year: '1889',\r\n      imageNum: '208',\r\n  },\r\n  {\r\n      author: 'Аксели Галлен-Каллела',\r\n      name: 'Мальчик и ворона',\r\n      year: '1884',\r\n      imageNum: '209',\r\n  },\r\n  {\r\n      author: 'Ян Вермеер',\r\n      name: 'Астроном',\r\n      year: '1668',\r\n      imageNum: '210',\r\n  },\r\n  {\r\n      author: 'Питер Пауль Рубенс',\r\n      name: 'Союз Земли и Воды',\r\n      year: '1618',\r\n      imageNum: '211',\r\n  },\r\n  {\r\n      author: 'Клод Моне',\r\n      name: 'Стог сена в Живерни',\r\n      year: '1886',\r\n      imageNum: '212',\r\n  },\r\n  {\r\n      author: 'Жан Фрагонар',\r\n      name: 'Задвижка',\r\n      year: '1777',\r\n      imageNum: '213',\r\n  },\r\n  {\r\n      author: 'Марианна Верёвкина',\r\n      name: 'Осень, школа',\r\n      year: '1907',\r\n      imageNum: '214',\r\n  },\r\n  {\r\n      author: 'Винсент Ван Гог',\r\n      name: 'Ночное кафе в Арле',\r\n      year: '1888',\r\n      imageNum: '215',\r\n  },\r\n  {\r\n      author: 'Клод Моне',\r\n      name: 'Пруд с кувшинками',\r\n      year: '1899',\r\n      imageNum: '216',\r\n  },\r\n  {\r\n      author: 'Иван Айвазовский',\r\n      name: 'Буря',\r\n      year: '1868',\r\n      imageNum: '217',\r\n  },\r\n  {\r\n      author: 'Ян Вермеер',\r\n      name: 'Кружевница',\r\n      year: '1671',\r\n      imageNum: '218',\r\n  },\r\n  {\r\n      author: 'Карл Брюллов',\r\n      name: 'Автопортрет',\r\n      year: '1848',\r\n      imageNum: '219',\r\n  },\r\n  {\r\n      author: 'Питер Брейгель',\r\n      name: 'Вавилонская башня',\r\n      year: '1563',\r\n      imageNum: '220',\r\n  },\r\n  {\r\n      author: 'Поль Гоген',\r\n      name: 'Кафе в Арле',\r\n      year: '1888',\r\n      imageNum: '221',\r\n  },\r\n  {\r\n      author: 'Иван Шишкин',\r\n      name: 'Сосновый бор',\r\n      year: '1895',\r\n      imageNum: '222',\r\n  },\r\n  {\r\n      author: 'Клод Моне',\r\n      name: 'Завтрак на траве',\r\n      year: '1865',\r\n      imageNum: '223',\r\n  },\r\n  {\r\n      author: 'Рафаэль',\r\n      name: 'Святой Георгий и дракон',\r\n      year: '1506',\r\n      imageNum: '224',\r\n  },\r\n  {\r\n      author: 'Пабло Пикассо',\r\n      name: 'Любительница абсента',\r\n      year: '1901',\r\n      imageNum: '225',\r\n  },\r\n  {\r\n      author: 'Эдгар Дега',\r\n      name: 'Перед репетицией',\r\n      year: '1880',\r\n      imageNum: '226',\r\n  },\r\n  {\r\n      author: 'Николай Рерих',\r\n      name: 'Помни!',\r\n      year: '1924',\r\n      imageNum: '227',\r\n  },\r\n  {\r\n      author: 'Илья Репин',\r\n      name: 'Стрекоза',\r\n      year: '1884',\r\n      imageNum: '228',\r\n  },\r\n  {\r\n      author: 'Клод Моне',\r\n      name: 'Мост Ватерлоо, туман',\r\n      year: '1903',\r\n      imageNum: '229',\r\n  },\r\n  {\r\n      author: 'Исаак Левитан',\r\n      name: 'Весна – большая вода',\r\n      year: '1897',\r\n      imageNum: '230',\r\n  },\r\n  {\r\n      author: 'Аксели Галлен-Каллела',\r\n      name: 'Первый урок',\r\n      year: '1889',\r\n      imageNum: '231',\r\n  },\r\n  {\r\n      author: 'Иван Айвазовский',\r\n      name: 'Буря на море',\r\n      year: '1873',\r\n      imageNum: '232',\r\n  },\r\n  {\r\n      author: 'Эдгар Дега',\r\n      name: 'Балетный класс',\r\n      year: '1874',\r\n      imageNum: '233',\r\n  },\r\n  {\r\n      author: 'Николай Рерих',\r\n      name: 'Горная обитель',\r\n      year: '1933',\r\n      imageNum: '234',\r\n  },\r\n  {\r\n      author: 'Леонардо да Винчи',\r\n      name: 'Святая Анна с Мадонной',\r\n      year: '1510',\r\n      imageNum: '235',\r\n  },\r\n  {\r\n      author: 'Эль Греко',\r\n      name: 'Мальчик, зажигающий свечу',\r\n      year: '1572',\r\n      imageNum: '236',\r\n  },\r\n  {\r\n      author: 'Пабло Пикассо',\r\n      name: 'Дружба',\r\n      year: '1908',\r\n      imageNum: '237',\r\n  },\r\n  {\r\n      author: 'Аксели Галлен-Каллела',\r\n      name: 'Девушка на ветру',\r\n      year: '1893',\r\n      imageNum: '238',\r\n  },\r\n  {\r\n      author: 'Иван Айвазовский',\r\n      name: 'Волна',\r\n      year: '1889',\r\n      imageNum: '239',\r\n  },\r\n  {\r\n      author: 'Эжен Делакруа',\r\n      name: 'Автопортрет',\r\n      year: '1837',\r\n      imageNum: '240',\r\n  },\r\n];\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (images);\n\n//# sourceURL=webpack:///./assets/images.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_Router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/Router */ \"./js/Router.js\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styles/styles.css */ \"./styles/styles.css\");\n/* harmony import */ var _modules_Category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/Category */ \"./modules/Category.js\");\n\r\n\r\n\r\n\r\n\r\n// function init() {\r\n//   let router = new Router([\r\n//     new Route('home', 'home.js', true),            \r\n//     new Route('settings', 'settings.js'),\r\n//     new Route('categories', 'categories.js'),\r\n//         new Route('question', 'question.js'),\r\n//       ]);\r\n//       return router\r\n// }\r\n// init();\r\n\r\nconsole.log('Hello from the Home entry point!');\r\n\r\nlet portrait = new _modules_Category__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('artists', 'portrait', 1)\r\nportrait.questions\r\n\r\n\r\nconst home = document.getElementById('home')\r\nhome.addEventListener('click', homeHandler)\r\n\r\nfunction homeHandler() {\r\n  _js_Router__WEBPACK_IMPORTED_MODULE_0__[\"default\"].modules.home().then(module => module.renderHome());\r\n}\r\n\r\n\r\n\r\n// const categories = document.getElementById('categories')\r\n// categories.addEventListener('click', categoriesHandler)\r\n// function categoriesHandler() {\r\n//   Router.modules.categories().then(module => module.renderCategories());\r\n// }\r\n\r\n// const question = document.getElementById('question')\r\n// question.addEventListener('click', questionHandler)\r\n// function questionHandler() {\r\n//   Router.modules.question().then(module => module.renderQuestion());\r\n// }\r\n\r\n// const settings = document.getElementById('settings')\r\n// settings.addEventListener('click', settingsHandler)\r\n// function settingsHandler() {\r\n//   Router.modules.settings().then(module => module.renderSettings());\r\n// }\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./js/Router.js":
/*!**********************!*\
  !*** ./js/Router.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Router)\n/* harmony export */ });\nconst _modules = {\r\n    home: () => __webpack_require__.e(/*! import() */ \"views_home_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../views/home.js */ \"./views/home.js\")),\r\n    categories: () => __webpack_require__.e(/*! import() */ \"views_categories_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../views/categories.js */ \"./views/categories.js\")),\r\n    question: () => Promise.all(/*! import() */[__webpack_require__.e(\"views_categories_js\"), __webpack_require__.e(\"views_question_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../views/question.js */ \"./views/question.js\")),\r\n    settings: () => __webpack_require__.e(/*! import() */ \"views_settings_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../views/settings.js */ \"./views/settings.js\")),\r\n  };\r\nclass Router{\r\n    static get modules() {\r\n        return _modules\r\n    }\r\n    // constructor(routes, rootElem) {\r\n    //     this.routes = routes\r\n    //     this.rootElem = document.getElementById('app')\r\n    // }\r\n    // init() {\r\n    //     var r = this.routes;\r\n    //     (function(scope, r) { \r\n    //         window.addEventListener('hashchange', function (e) {\r\n    //             scope.hasChanged(scope, r);\r\n    //         });\r\n    //     })(this, r);\r\n    //     this.hasChanged(this, r);\r\n    // }\r\n    // hasChanged(scope, r) {\r\n    //     if (window.location.hash.length > 0) {\r\n    //         for (var i = 0, length = r.length; i < length; i++) {\r\n    //             var route = r[i];\r\n    //             if(route.isActiveRoute(window.location.hash.substr(1))) {\r\n    //                 scope.goToRoute(route.htmlName);\r\n    //             }\r\n    //         }\r\n    //     } else {\r\n    //         for (var i = 0, length = r.length; i < length; i++) {\r\n    //             var route = r[i];\r\n    //             if(route.default) {\r\n    //                 scope.goToRoute(route.htmlName);\r\n    //             }\r\n    //         }\r\n    //     }\r\n    // }\r\n    // goToRoute(htmlName) {\r\n    //     (function(scope) { \r\n    //         var url = 'views/' + htmlName,\r\n    //         xhttp = new XMLHttpRequest();\r\n    //         xhttp.onreadystatechange = function () {\r\n    //             if (this.readyState === 4 && this.status === 200) {\r\n    //                 let html = htmlName.replace('.js', '')\r\n    //                 scope.rootElem.innerHTML = '';\r\n    //                 switch(html) {\r\n    //                     case 'home': \r\n    //                         if(document.querySelector('.page')){ document.querySelector('.page').remove();}\r\n    //                         if(!document.querySelector('.home')){ home()}\r\n    //                         break\r\n    //                     case 'settings': \r\n    //                         if(document.querySelector('.page')){ document.querySelector('.page').remove();}\r\n    //                         if(!document.querySelector('.settings')){ settings()}\r\n    //                         break\r\n    //                     case 'categories': \r\n    //                         if(document.querySelector('.page')){ document.querySelector('.page').remove();}\r\n    //                         if(!document.querySelector('.categories')){ categories()}\r\n    //                         break\r\n    //                     case 'question': \r\n    //                         if(document.querySelector('.page')){ document.querySelector('.page').remove();}\r\n    //                         if(!document.querySelector('.question')){ question()}\r\n    //                         break\r\n    //                 }\r\n    //             }\r\n    //         };\r\n    //         xhttp.open('GET', url, true);\r\n    //         xhttp.send();\r\n    //     })(this);\r\n    // }\r\n}\n\n//# sourceURL=webpack:///./js/Router.js?");

/***/ }),

/***/ "./modules/Category.js":
/*!*****************************!*\
  !*** ./modules/Category.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Category)\n/* harmony export */ });\n/* harmony import */ var _assets_images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @assets/images */ \"./assets/images.js\");\n\r\n\r\nclass Category{\r\n  constructor(type, title, number, score){\r\n    this.type = type;\r\n    this.title = title;\r\n    this.number = number;\r\n    this.findQuestions = function() {\r\n      if ( this.type === 'artists') {\r\n        switch( +this.number ) {\r\n          case 1: return _assets_images__WEBPACK_IMPORTED_MODULE_0__[\"default\"].map(el => el).slice(0, 10)\r\n          case 2: return _assets_images__WEBPACK_IMPORTED_MODULE_0__[\"default\"].map(el => el).slice(10, 20)\r\n          case 3: return _assets_images__WEBPACK_IMPORTED_MODULE_0__[\"default\"].map(el => el).slice(20, 30)\r\n          case 4: return _assets_images__WEBPACK_IMPORTED_MODULE_0__[\"default\"].map(el => el).slice(30, 40)\r\n          case 5: return _assets_images__WEBPACK_IMPORTED_MODULE_0__[\"default\"].map(el => el).slice(40, 50)\r\n          case 6: return _assets_images__WEBPACK_IMPORTED_MODULE_0__[\"default\"].map(el => el).slice(50, 60)\r\n          case 7: return _assets_images__WEBPACK_IMPORTED_MODULE_0__[\"default\"].map(el => el).slice(60, 70)\r\n          case 8: return _assets_images__WEBPACK_IMPORTED_MODULE_0__[\"default\"].map(el => el).slice(70, 80)\r\n          case 9: return _assets_images__WEBPACK_IMPORTED_MODULE_0__[\"default\"].map(el => el).slice(80, 90)\r\n          case 10: return _assets_images__WEBPACK_IMPORTED_MODULE_0__[\"default\"].map(el => el).slice(90, 100)\r\n          case 11: return _assets_images__WEBPACK_IMPORTED_MODULE_0__[\"default\"].map(el => el).slice(100, 110)\r\n          case 12: return _assets_images__WEBPACK_IMPORTED_MODULE_0__[\"default\"].map(el => el).slice(110, 120)\r\n        }\r\n      }\r\n      if ( this.type === 'pictures') {\r\n        switch( +this.number ) {\r\n          case 1: return _assets_images__WEBPACK_IMPORTED_MODULE_0__[\"default\"].map(el => el).slice(120, 130)\r\n          case 2: return _assets_images__WEBPACK_IMPORTED_MODULE_0__[\"default\"].map(el => el).slice(130, 140)\r\n          case 3: return _assets_images__WEBPACK_IMPORTED_MODULE_0__[\"default\"].map(el => el).slice(140, 150)\r\n          case 4: return _assets_images__WEBPACK_IMPORTED_MODULE_0__[\"default\"].map(el => el).slice(150, 160)\r\n          case 5: return _assets_images__WEBPACK_IMPORTED_MODULE_0__[\"default\"].map(el => el).slice(160, 170)\r\n          case 6: return _assets_images__WEBPACK_IMPORTED_MODULE_0__[\"default\"].map(el => el).slice(170, 180)\r\n          case 7: return _assets_images__WEBPACK_IMPORTED_MODULE_0__[\"default\"].map(el => el).slice(180, 190)\r\n          case 8: return _assets_images__WEBPACK_IMPORTED_MODULE_0__[\"default\"].map(el => el).slice(190, 200)\r\n          case 9: return _assets_images__WEBPACK_IMPORTED_MODULE_0__[\"default\"].map(el => el).slice(200, 210)\r\n          case 10:return _assets_images__WEBPACK_IMPORTED_MODULE_0__[\"default\"].map(el => el).slice(210, 220)\r\n          case 11:return _assets_images__WEBPACK_IMPORTED_MODULE_0__[\"default\"].map(el => el).slice(220, 230)\r\n          case 12:return _assets_images__WEBPACK_IMPORTED_MODULE_0__[\"default\"].map(el => el).slice(230, 240)\r\n        }\r\n      }\r\n    };\r\n    this.arrForQuestions = this.findQuestions()\r\n    this.score = score;\r\n  }\r\n}\n\n//# sourceURL=webpack:///./modules/Category.js?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		// data-webpack is not used as build has no uniqueName
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;