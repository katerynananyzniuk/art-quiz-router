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

/***/ "./js/Router.js":
/*!**********************!*\
  !*** ./js/Router.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Router)\n/* harmony export */ });\nconst _modules = {\r\n    home: () => __webpack_require__.e(/*! import() */ \"views_home_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../views/home.js */ \"./views/home.js\")),\r\n    categories: () => __webpack_require__.e(/*! import() */ \"views_categories_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../views/categories.js */ \"./views/categories.js\")),\r\n    question: () => Promise.all(/*! import() */[__webpack_require__.e(\"views_categories_js\"), __webpack_require__.e(\"views_question_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../views/question.js */ \"./views/question.js\")),\r\n    settings: () => __webpack_require__.e(/*! import() */ \"views_settings_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../views/settings.js */ \"./views/settings.js\")),\r\n  };\r\nclass Router{\r\n    static get modules() {\r\n        return _modules\r\n    }\r\n    // constructor(routes, rootElem) {\r\n    //     this.routes = routes\r\n    //     this.rootElem = document.getElementById('app')\r\n    // }\r\n    // init() {\r\n    //     var r = this.routes;\r\n    //     (function(scope, r) { \r\n    //         window.addEventListener('hashchange', function (e) {\r\n    //             scope.hasChanged(scope, r);\r\n    //         });\r\n    //     })(this, r);\r\n    //     this.hasChanged(this, r);\r\n    // }\r\n    // hasChanged(scope, r) {\r\n    //     if (window.location.hash.length > 0) {\r\n    //         for (var i = 0, length = r.length; i < length; i++) {\r\n    //             var route = r[i];\r\n    //             if(route.isActiveRoute(window.location.hash.substr(1))) {\r\n    //                 scope.goToRoute(route.htmlName);\r\n    //             }\r\n    //         }\r\n    //     } else {\r\n    //         for (var i = 0, length = r.length; i < length; i++) {\r\n    //             var route = r[i];\r\n    //             if(route.default) {\r\n    //                 scope.goToRoute(route.htmlName);\r\n    //             }\r\n    //         }\r\n    //     }\r\n    // }\r\n    // goToRoute(htmlName) {\r\n    //     (function(scope) { \r\n    //         var url = 'views/' + htmlName,\r\n    //         xhttp = new XMLHttpRequest();\r\n    //         xhttp.onreadystatechange = function () {\r\n    //             if (this.readyState === 4 && this.status === 200) {\r\n    //                 let html = htmlName.replace('.js', '')\r\n    //                 scope.rootElem.innerHTML = '';\r\n    //                 switch(html) {\r\n    //                     case 'home': \r\n    //                         if(document.querySelector('.page')){ document.querySelector('.page').remove();}\r\n    //                         if(!document.querySelector('.home')){ home()}\r\n    //                         break\r\n    //                     case 'settings': \r\n    //                         if(document.querySelector('.page')){ document.querySelector('.page').remove();}\r\n    //                         if(!document.querySelector('.settings')){ settings()}\r\n    //                         break\r\n    //                     case 'categories': \r\n    //                         if(document.querySelector('.page')){ document.querySelector('.page').remove();}\r\n    //                         if(!document.querySelector('.categories')){ categories()}\r\n    //                         break\r\n    //                     case 'question': \r\n    //                         if(document.querySelector('.page')){ document.querySelector('.page').remove();}\r\n    //                         if(!document.querySelector('.question')){ question()}\r\n    //                         break\r\n    //                 }\r\n    //             }\r\n    //         };\r\n    //         xhttp.open('GET', url, true);\r\n    //         xhttp.send();\r\n    //     })(this);\r\n    // }\r\n}\n\n//# sourceURL=webpack:///./js/Router.js?");

/***/ }),

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"type\": () => (/* binding */ type),\n/* harmony export */   \"renderHome\": () => (/* binding */ renderHome)\n/* harmony export */ });\n/* harmony import */ var _modules_Type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @modules/Type */ \"./modules/Type.js\");\n/* harmony import */ var _js_Router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/Router */ \"./js/Router.js\");\n\r\n\r\n\r\nconst artists =  new _modules_Type__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('artists')\r\nconst pictures = new _modules_Type__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('pictures')\r\n\r\nconst types = [ \r\n  artists, \r\n  pictures\r\n]\r\n\r\nlet type = undefined; \r\n\r\nfunction renderHome(){\r\n  console.log('Hello from home.js');\r\n  const wrapper = document.createElement(\"div\")\r\n  wrapper.classList.add('home')\r\n  wrapper.classList.add('page')\r\n  wrapper.innerHTML = `\r\n  <h2>Hello from home.js</h2>\r\n  <button class=\"page-btn\" data-btn=\"type\">${artists.title}</button>\r\n  <button class=\"page-btn\" data-btn=\"type\">${pictures.title}</button>\r\n  `\r\n  \r\n  const app = document.getElementById('app')\r\n  app.innerHTML = ''\r\n  app.append(wrapper)\r\n\r\n  document.addEventListener('click', event => {\r\n    const btnType = event.target.dataset.btn\r\n    if (btnType === 'type') {\r\n      type = event.target.innerText.toLowerCase()\r\n      console.log(\"Chosen type is\", type);\r\n      _js_Router__WEBPACK_IMPORTED_MODULE_1__[\"default\"].modules.categories().then(module => module.renderCategories());\r\n    }\r\n  })\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./views/home.js?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 			"bundle-home": 0
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./views/home.js");
/******/ 	
/******/ })()
;