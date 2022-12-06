"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "main";
exports.ids = null;
exports.modules = {

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst config_1 = __importDefault(__webpack_require__(/*! ./config */ \"./src/config/index.ts\"));\nconst index_1 = __importDefault(__webpack_require__(/*! ./database/index */ \"./src/database/index.ts\"));\nconst cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\nconst app = (0, express_1.default)();\nconst whitelist = [\n    \"http://localhost:3000\",\n    \"http://localhost:3001\",\n    \"http://localhost:3002\",\n];\napp.use((0, cors_1.default)({ origin: whitelist, credentials: true }));\napp.use(express_1.default.json());\n// Connection to mongoDB\n(0, index_1.default)();\nconst server = app.listen(config_1.default.port, () => {\n    console.log(`\n      ################################################\n      🛡️  Conpanysite server listening on port: http://localhost:${config_1.default.port} 🛡️\n      ################################################\n    `);\n});\nserver.setTimeout(500000);\n\n\n//# sourceURL=webpack://company-site-be/./src/index.ts?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1e4bc78d326f343d8c99")
/******/ })();
/******/ 
/******/ }
;