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

/***/ "./src/contactus/services.ts":
/*!***********************************!*\
  !*** ./src/contactus/services.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar model_1 = __importDefault(__webpack_require__(/*! ./model */ \"./src/contactus/model.ts\"));\nvar messages_json_1 = __importDefault(__webpack_require__(/*! ../services/messages.json */ \"./src/services/messages.json\"));\nexports[\"default\"] = {\n    createContact: function (req) {\n        return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {\n            var contacts, newContacts, err_1;\n            var _a, _b, _c, _d, _e, _f, _g;\n            return __generator(this, function (_h) {\n                switch (_h.label) {\n                    case 0:\n                        _h.trys.push([0, 2, , 3]);\n                        contacts = new model_1.default({\n                            name: (_a = req.body) === null || _a === void 0 ? void 0 : _a.name,\n                            email: (_b = req.body) === null || _b === void 0 ? void 0 : _b.email.toLowerCase(),\n                            service: (_c = req.body) === null || _c === void 0 ? void 0 : _c.service,\n                            mode: (_d = req.body) === null || _d === void 0 ? void 0 : _d.mode,\n                            project: (_e = req.body) === null || _e === void 0 ? void 0 : _e.project,\n                            upload: ((_f = req.body) === null || _f === void 0 ? void 0 : _f.upload) === undefined ? {} : (_g = req.body) === null || _g === void 0 ? void 0 : _g.upload,\n                            createdAt: Date.now(),\n                            updatedAt: Date.now()\n                        });\n                        return [4, contacts.save()];\n                    case 1:\n                        newContacts = _h.sent();\n                        if (newContacts) {\n                            console.log(newContacts, \"newContacts\");\n                            return [2, resolve({\n                                    status: 200,\n                                    error: false,\n                                    result: newContacts,\n                                    code: \"CONTACT_CREATED\",\n                                    message: messages_json_1.default[\"CONTACT_CREATED\"]\n                                })];\n                        }\n                        else {\n                            return [2, reject({\n                                    status: 400,\n                                    error: true,\n                                    code: \"CONTACT_CREATE_FAILED\",\n                                    message: messages_json_1.default[\"CONTACT_CREATE_FAILED\"]\n                                })];\n                        }\n                        return [3, 3];\n                    case 2:\n                        err_1 = _h.sent();\n                        console.log(err_1, \"<<--[ContactUs 001] Error in contacts create\");\n                        return [2, reject({\n                                status: 500,\n                                error: true,\n                                result: err_1,\n                                code: \"INTERNAL_SERVER_ERROR\",\n                                message: messages_json_1.default[\"INTERNAL_SERVER_ERROR\"]\n                            })];\n                    case 3: return [2];\n                }\n            });\n        }); });\n    }\n};\n\n\n//# sourceURL=webpack://company-site-be/./src/contactus/services.ts?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2d566e8e62ee7e94545c")
/******/ })();
/******/ 
/******/ }
;