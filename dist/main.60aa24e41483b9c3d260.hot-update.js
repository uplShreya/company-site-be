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

/***/ "./src/contactus/model.ts":
/*!********************************!*\
  !*** ./src/contactus/model.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar mongoose = __importStar(__webpack_require__(/*! mongoose */ \"mongoose\"));\nvar Schema = mongoose.Schema;\nvar ContactsSchema = new Schema({\n    subject: {\n        type: String\n    },\n    service: {\n        type: String\n    },\n    mode: {\n        type: String\n    },\n    name: {\n        type: String\n    },\n    email: {\n        type: String,\n    },\n    project: {\n        type: String,\n    },\n    documents: {\n        key: {\n            type: String,\n        },\n        name: {\n            type: String,\n        },\n        mimetype: {\n            type: String,\n        },\n        location: {\n            type: String,\n        },\n        size: {\n            type: Number,\n        },\n    },\n    enabled: {\n        type: Number,\n        default: 1,\n    },\n    createdAt: {\n        type: Number,\n        default: Date.now,\n    },\n    updatedAt: {\n        type: Number,\n        default: Date.now,\n    }\n});\nexports[\"default\"] = mongoose.model(\"contacts\", ContactsSchema);\n\n\n//# sourceURL=webpack://company-site-be/./src/contactus/model.ts?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3a9d1748ae3beec184a5")
/******/ })();
/******/ 
/******/ }
;