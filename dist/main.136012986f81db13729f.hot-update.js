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

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar config_1 = __importDefault(__webpack_require__(/*! ./config */ \"./src/config/index.ts\"));\nvar index_1 = __importDefault(__webpack_require__(/*! ./database/index */ \"./src/database/index.ts\"));\nvar cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\nvar routes_1 = __importDefault(__webpack_require__(/*! ./routes/routes */ \"./src/routes/routes.ts\"));\nvar app = (0, express_1.default)();\nvar whitelist = [\n    \"http://localhost:3000\",\n    \"http://localhost:3001\",\n    \"http://localhost:3002\",\n];\napp.use((0, cors_1.default)({ origin: whitelist, credentials: true }));\napp.use(express_1.default.json({ limit: '50mb' }));\napp.use(\"/api\", routes_1.default);\n(0, index_1.default)();\nvar server = app.listen(config_1.default.port, function () {\n    console.log(\"\\n      ################################################\\n      \\uD83D\\uDEE1\\uFE0F  Companysite server listening on port: http://localhost:\".concat(config_1.default.port, \" \\uD83D\\uDEE1\\uFE0F\\n      ################################################\\n    \"));\n});\nserver.setTimeout(500000);\n\n\n//# sourceURL=webpack://company-site-be/./src/index.ts?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ccabc7519a2bef08d2d1")
/******/ })();
/******/ 
/******/ }
;