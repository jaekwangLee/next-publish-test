/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst memoize = (fn)=>{\n    let cache = {};\n    return (...args)=>{\n        let n = args[0];\n        if (n in cache) {\n            return cache[n];\n        } else {\n            let result = fn(n);\n            cache[n] = result;\n            return result;\n        }\n    };\n};\n// ignore in-browser next/js recoil warnings until its fixed.\nconst mutedConsole = memoize((console)=>({\n        ...console,\n        warn: (...args)=>args[0].includes(\"Duplicate atom key\") ? null : console.warn(...args)\n    }));\nglobal.console = mutedConsole(global.console);\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recoil__WEBPACK_IMPORTED_MODULE_2__.RecoilRoot, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/jklee/pitchit/publishtest/src/pages/_app.tsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jklee/pitchit/publishtest/src/pages/_app.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQStCO0FBRUs7QUFFcEMsTUFBTUMsVUFBVUMsQ0FBQUEsS0FBTTtJQUNwQixJQUFJQyxRQUFRLENBQUM7SUFDYixPQUFPLENBQUMsR0FBR0MsT0FBUztRQUNsQixJQUFJQyxJQUFJRCxJQUFJLENBQUMsRUFBRTtRQUNmLElBQUlDLEtBQUtGLE9BQU87WUFDZCxPQUFPQSxLQUFLLENBQUNFLEVBQUU7UUFDakIsT0FBTztZQUNMLElBQUlDLFNBQVNKLEdBQUdHO1lBQ2hCRixLQUFLLENBQUNFLEVBQUUsR0FBR0M7WUFDWCxPQUFPQTtRQUNULENBQUM7SUFDSDtBQUNGO0FBRUEsNkRBQTZEO0FBQzdELE1BQU1DLGVBQWVOLFFBQVFPLENBQUFBLFVBQVk7UUFDdkMsR0FBR0EsT0FBTztRQUNWQyxNQUFNLENBQUMsR0FBR0wsT0FBVUEsSUFBSSxDQUFDLEVBQUUsQ0FBQ00sUUFBUSxDQUFDLHdCQUF3QixJQUFJLEdBQUdGLFFBQVFDLElBQUksSUFBSUwsS0FBSztJQUMzRjtBQUVBTyxPQUFPSCxPQUFPLEdBQUdELGFBQWFJLE9BQU9ILE9BQU87QUFFN0IsU0FBU0ksSUFBSSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBWSxFQUFFO0lBQzlELHFCQUNFLDhEQUFDZCw4Q0FBVUE7a0JBQ1QsNEVBQUNhO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3B1Ymxpc2h0ZXN0Ly4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCB7IFJlY29pbFJvb3QgfSBmcm9tICdyZWNvaWwnO1xuXG5jb25zdCBtZW1vaXplID0gZm4gPT4ge1xuICBsZXQgY2FjaGUgPSB7fTtcbiAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgbGV0IG4gPSBhcmdzWzBdO1xuICAgIGlmIChuIGluIGNhY2hlKSB7XG4gICAgICByZXR1cm4gY2FjaGVbbl07XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCByZXN1bHQgPSBmbihuKTtcbiAgICAgIGNhY2hlW25dID0gcmVzdWx0O1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH07XG59O1xuXG4vLyBpZ25vcmUgaW4tYnJvd3NlciBuZXh0L2pzIHJlY29pbCB3YXJuaW5ncyB1bnRpbCBpdHMgZml4ZWQuXG5jb25zdCBtdXRlZENvbnNvbGUgPSBtZW1vaXplKGNvbnNvbGUgPT4gKHtcbiAgLi4uY29uc29sZSxcbiAgd2FybjogKC4uLmFyZ3MpID0+IChhcmdzWzBdLmluY2x1ZGVzKCdEdXBsaWNhdGUgYXRvbSBrZXknKSA/IG51bGwgOiBjb25zb2xlLndhcm4oLi4uYXJncykpXG59KSk7XG5cbmdsb2JhbC5jb25zb2xlID0gbXV0ZWRDb25zb2xlKGdsb2JhbC5jb25zb2xlKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8UmVjb2lsUm9vdD5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1JlY29pbFJvb3Q+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVjb2lsUm9vdCIsIm1lbW9pemUiLCJmbiIsImNhY2hlIiwiYXJncyIsIm4iLCJyZXN1bHQiLCJtdXRlZENvbnNvbGUiLCJjb25zb2xlIiwid2FybiIsImluY2x1ZGVzIiwiZ2xvYmFsIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "recoil":
/*!*************************!*\
  !*** external "recoil" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("recoil");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();