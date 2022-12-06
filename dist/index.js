/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config/index.ts":
/*!*****************************!*\
  !*** ./src/config/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ \"dotenv\"));\nvar envFound = dotenv_1.default.config();\nif (envFound.error) {\n    console.log(\"⚠️  Couldn't find .env file  ⚠️\");\n    setTimeout(function () {\n        process.exit(1);\n    }, 2000);\n}\nvar PORT = parseInt(process.env.PORT, 10);\nvar MONGODB_URI = process.env.MONGODB_URI;\nvar ENVIRONMENT = process.env.nodeEnv;\nvar SECKEY = process.env.sec_key;\nvar EXPIRES = parseInt(process.env.jwtExpiryIn);\nvar TOKEN_SEC = process.env.jwtPrivateKey;\nvar CDN_URL = process.env.CDN_URL;\nvar APP_URL = process.env.APP_URL;\nexports[\"default\"] = {\n    port: PORT,\n    databaseURL: MONGODB_URI,\n    Seckey: SECKEY,\n    tokenSecret: TOKEN_SEC,\n    environment: ENVIRONMENT,\n    Expires: EXPIRES,\n    cdnUrl: CDN_URL,\n    appUrl: APP_URL,\n    api: {\n        prefix: \"/api\",\n    },\n};\n\n\n//# sourceURL=webpack://company-site-be/./src/config/index.ts?");

/***/ }),

/***/ "./src/contactus/index.ts":
/*!********************************!*\
  !*** ./src/contactus/index.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar services_1 = __importDefault(__webpack_require__(/*! ./services */ \"./src/contactus/services.ts\"));\nvar router = express_1.default.Router();\nrouter.post(\"/\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    return __generator(this, function (_a) {\n        services_1.default.createContact(req)\n            .then(function (response) {\n            return res.send({\n                status: response.status,\n                error: response.error,\n                result: response.result,\n                code: response.code,\n                message: response.message,\n            });\n        })\n            .catch(function (err) {\n            return res.send({\n                status: err.status,\n                error: err.error,\n                result: err.result,\n                code: err.code,\n                message: err.message,\n            });\n        });\n        return [2];\n    });\n}); });\nexports[\"default\"] = router;\n\n\n//# sourceURL=webpack://company-site-be/./src/contactus/index.ts?");

/***/ }),

/***/ "./src/contactus/model.ts":
/*!********************************!*\
  !*** ./src/contactus/model.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar mongoose = __importStar(__webpack_require__(/*! mongoose */ \"mongoose\"));\nvar Schema = mongoose.Schema;\nvar ContactsSchema = new Schema({\n    subject: {\n        type: String\n    },\n    service: {\n        type: String\n    },\n    mode: {\n        type: String\n    },\n    name: {\n        type: String\n    },\n    email: {\n        type: String,\n    },\n    project: {\n        type: String,\n    },\n    documents: {\n        key: {\n            type: String,\n        },\n        name: {\n            type: String,\n        },\n        mimetype: {\n            type: String,\n        },\n        location: {\n            type: String,\n        },\n        size: {\n            type: Number,\n        },\n    },\n    enabled: {\n        type: Number,\n        default: 1,\n    },\n    createdAt: {\n        type: Number,\n        default: Date.now,\n    },\n    updatedAt: {\n        type: Number,\n        default: Date.now,\n    }\n});\nexports[\"default\"] = mongoose.model(\"contacts\", ContactsSchema);\n\n\n//# sourceURL=webpack://company-site-be/./src/contactus/model.ts?");

/***/ }),

/***/ "./src/contactus/services.ts":
/*!***********************************!*\
  !*** ./src/contactus/services.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar model_1 = __importDefault(__webpack_require__(/*! ./model */ \"./src/contactus/model.ts\"));\nvar messages_json_1 = __importDefault(__webpack_require__(/*! ../services/messages.json */ \"./src/services/messages.json\"));\nvar mailService_1 = __webpack_require__(/*! ../mail/mailService */ \"./src/mail/mailService.ts\");\nvar moment_1 = __importDefault(__webpack_require__(/*! moment */ \"moment\"));\nexports[\"default\"] = {\n    createContact: function (req) {\n        return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {\n            var contacts, newContacts, err_1;\n            var _a, _b, _c, _d, _e, _f, _g, _h;\n            return __generator(this, function (_j) {\n                switch (_j.label) {\n                    case 0:\n                        _j.trys.push([0, 2, , 3]);\n                        contacts = new model_1.default({\n                            name: (_a = req.body) === null || _a === void 0 ? void 0 : _a.name,\n                            subject: (_b = req.body) === null || _b === void 0 ? void 0 : _b.subject,\n                            email: (_c = req.body) === null || _c === void 0 ? void 0 : _c.email.toLowerCase(),\n                            service: (_d = req.body) === null || _d === void 0 ? void 0 : _d.service,\n                            mode: (_e = req.body) === null || _e === void 0 ? void 0 : _e.mode,\n                            project: (_f = req.body) === null || _f === void 0 ? void 0 : _f.project,\n                            documents: ((_g = req.body) === null || _g === void 0 ? void 0 : _g.documents) === undefined ? {} : (_h = req.body) === null || _h === void 0 ? void 0 : _h.documents,\n                            createdAt: Date.now(),\n                            updatedAt: Date.now()\n                        });\n                        return [4, contacts.save()];\n                    case 1:\n                        newContacts = _j.sent();\n                        if (newContacts) {\n                            (0, mailService_1.contactUs)({\n                                subject: newContacts.subject,\n                                service: newContacts === null || newContacts === void 0 ? void 0 : newContacts.service,\n                                name: newContacts === null || newContacts === void 0 ? void 0 : newContacts.name,\n                                email: newContacts === null || newContacts === void 0 ? void 0 : newContacts.email,\n                                mode: newContacts === null || newContacts === void 0 ? void 0 : newContacts.mode,\n                                project: newContacts === null || newContacts === void 0 ? void 0 : newContacts.project,\n                                createdAt: (0, moment_1.default)(newContacts.createdAt).format(\"ll\")\n                            });\n                            console.log(newContacts, \"newContacts\");\n                            return [2, resolve({\n                                    status: 200,\n                                    error: false,\n                                    result: newContacts,\n                                    code: \"CONTACT_CREATED\",\n                                    message: messages_json_1.default[\"CONTACT_CREATED\"]\n                                })];\n                        }\n                        else {\n                            return [2, reject({\n                                    status: 400,\n                                    error: true,\n                                    code: \"CONTACT_CREATE_FAILED\",\n                                    message: messages_json_1.default[\"CONTACT_CREATE_FAILED\"]\n                                })];\n                        }\n                        return [3, 3];\n                    case 2:\n                        err_1 = _j.sent();\n                        console.log(err_1, \"<<--[ContactUs 001] Error in contacts create\");\n                        return [2, reject({\n                                status: 500,\n                                error: true,\n                                result: err_1,\n                                code: \"INTERNAL_SERVER_ERROR\",\n                                message: messages_json_1.default[\"INTERNAL_SERVER_ERROR\"]\n                            })];\n                    case 3: return [2];\n                }\n            });\n        }); });\n    }\n};\n\n\n//# sourceURL=webpack://company-site-be/./src/contactus/services.ts?");

/***/ }),

/***/ "./src/database/index.ts":
/*!*******************************!*\
  !*** ./src/database/index.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nvar config_1 = __importDefault(__webpack_require__(/*! ../config */ \"./src/config/index.ts\"));\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\nexports[\"default\"] = (function () {\n    mongoose\n        .connect(config_1.default.databaseURL, {\n        useUnifiedTopology: true,\n        useNewUrlParser: true,\n    })\n        .then(function () { return console.log(\"👉🏾👉🏾 Connected to mongoDb\"); })\n        .catch(function (err) {\n        console.log(\"Error on connecting to mongo\".concat(err));\n        setTimeout(function () {\n            process.exit(1);\n        }, 2000);\n    });\n});\n\n\n//# sourceURL=webpack://company-site-be/./src/database/index.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar config_1 = __importDefault(__webpack_require__(/*! ./config */ \"./src/config/index.ts\"));\nvar index_1 = __importDefault(__webpack_require__(/*! ./database/index */ \"./src/database/index.ts\"));\nvar cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\nvar routes_1 = __importDefault(__webpack_require__(/*! ./routes/routes */ \"./src/routes/routes.ts\"));\nvar app = (0, express_1.default)();\nvar whitelist = [\n    \"http://localhost:3000\",\n    \"http://localhost:3001\",\n    \"http://localhost:3002\",\n];\napp.use((0, cors_1.default)({ origin: whitelist, credentials: true }));\napp.use(express_1.default.json({ limit: '50mb' }));\napp.use(\"/api\", routes_1.default);\n(0, index_1.default)();\nvar server = app.listen(config_1.default.port, function () {\n    console.log(\"\\n      ################################################\\n      \\uD83D\\uDEE1\\uFE0F  Conpanysite server listening on port: http://localhost:\".concat(config_1.default.port, \" \\uD83D\\uDEE1\\uFE0F\\n      ################################################\\n    \"));\n});\nserver.setTimeout(500000);\n\n\n//# sourceURL=webpack://company-site-be/./src/index.ts?");

/***/ }),

/***/ "./src/mail/mail.ts":
/*!**************************!*\
  !*** ./src/mail/mail.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.sendEmail = void 0;\nvar AWS = __importStar(__webpack_require__(/*! aws-sdk */ \"aws-sdk\"));\nvar SESconfig = {\n    apiVersion: \"2010-12-01\",\n    accessKeyId: process.env.AWS_SES_ACCESS_KEY_ID,\n    secretAccessKey: process.env.AWS_SES_SECRET_ACCESS_KEY,\n    region: process.env.AWS_SES_REGION,\n};\nfunction sendEmail(_a) {\n    var receiverAddress = _a.receiverAddress, body = _a.body, subject = _a.subject, cc = _a.cc;\n    var params = {\n        Source: \"\".concat(process.env.emailAlias, \" <\").concat(process.env.senderEmail, \">\"),\n        Destination: {\n            ToAddresses: [receiverAddress],\n            CcAddresses: [cc],\n        },\n        ReplyToAddresses: [],\n        Message: {\n            Body: body,\n            Subject: subject,\n        }\n    };\n    new AWS.SES(SESconfig)\n        .sendEmail(params)\n        .promise()\n        .then(function (res) {\n        console.log(\"Response:-\", res);\n    })\n        .catch(function (err) {\n        console.log(\"Error:-\", err);\n    });\n}\nexports.sendEmail = sendEmail;\n\n\n//# sourceURL=webpack://company-site-be/./src/mail/mail.ts?");

/***/ }),

/***/ "./src/mail/mailService.ts":
/*!*********************************!*\
  !*** ./src/mail/mailService.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.contactUs = void 0;\nvar mail_1 = __webpack_require__(/*! ./mail */ \"./src/mail/mail.ts\");\nfunction contactUs(data) {\n    return new Promise(function (resolve, reject) {\n        var text = \"\\n        Dear \".concat(data.name, \",<br/><br/><br/> \\n\\n        Thank you for reaching out to us.<br/><br/> \\n\\n        Your enquiry is registered with Subject :- \").concat(data.subject, \" <br/>\\n\\n        Our business development colleague will get in touch with you soon.<br/>\\n\\n        We are glad that you have taken the first step to connect and build a relationship with Golfnet.<br/>\\n\\n        Looking forward to working with you and your organization.<br/><br/> \\n\\n        Best regards, \");\n        var Body = {\n            Html: {\n                Charset: \"UTF-8\",\n                Data: text\n            },\n            Text: {\n                Charset: \"UTF-8\",\n                Data: \"Thank you for your enquiry\"\n            },\n        };\n        (0, mail_1.sendEmail)({\n            receiverAddress: data.email,\n            body: Body,\n            subject: {\n                Charset: \"UTF-8\",\n                Data: \"Thank you for your enquiry\",\n            },\n            cc: process.env.ccmail,\n        });\n    });\n}\nexports.contactUs = contactUs;\n\n\n//# sourceURL=webpack://company-site-be/./src/mail/mailService.ts?");

/***/ }),

/***/ "./src/routes/routes.ts":
/*!******************************!*\
  !*** ./src/routes/routes.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar contactus_1 = __importDefault(__webpack_require__(/*! ../contactus */ \"./src/contactus/index.ts\"));\nvar uploads_1 = __importDefault(__webpack_require__(/*! ../uploads */ \"./src/uploads/index.ts\"));\nvar router = express_1.default.Router();\nrouter.use(\"/contactus\", contactus_1.default),\n    router.use(\"/uploads\", uploads_1.default);\nexports[\"default\"] = router;\n\n\n//# sourceURL=webpack://company-site-be/./src/routes/routes.ts?");

/***/ }),

/***/ "./src/uploads/index.ts":
/*!******************************!*\
  !*** ./src/uploads/index.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar uploadService_1 = __importDefault(__webpack_require__(/*! ./uploadService */ \"./src/uploads/uploadService.ts\"));\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar Axios = __webpack_require__(/*! axios */ \"axios\");\nvar router = express_1.default.Router();\nrouter.post(\"/\", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\n    return __generator(this, function (_a) {\n        uploadService_1.default\n            .upload(req, res)\n            .then(function (response) {\n            return res.status(response.status).send({\n                error: response.error,\n                result: response.result,\n                message: response.message,\n            });\n        })\n            .catch(function (err) {\n            return res.status(err.status || 500).send({\n                error: err.error,\n                result: err.result,\n                message: err.message,\n            });\n        });\n        return [2];\n    });\n}); });\nrouter.get(\"/\", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\n    return __generator(this, function (_a) {\n        uploadService_1.default\n            .get(req)\n            .then(function (response) { return __awaiter(void 0, void 0, void 0, function () {\n            var url, axiosObj;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        url = response.url;\n                        return [4, Axios({\n                                url: url,\n                                method: \"GET\",\n                                responseType: \"stream\",\n                            })];\n                    case 1:\n                        axiosObj = _a.sent();\n                        axiosObj.data.pipe(res);\n                        return [2];\n                }\n            });\n        }); })\n            .catch(function (err) {\n            return res.status(err.status || 500).send({\n                error: err.error,\n                result: err.result,\n                message: err.message,\n            });\n        });\n        return [2];\n    });\n}); });\nrouter.put(\"/\", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\n    return __generator(this, function (_a) {\n        uploadService_1.default\n            .update(req)\n            .then(function (response) {\n            return res.status(response.status).send({\n                error: response.error,\n                result: response.result,\n                message: response.message,\n            });\n        })\n            .catch(function (err) {\n            return res.status(err.status || 500).send({\n                error: err.error,\n                result: err.result,\n                message: err.message,\n            });\n        });\n        return [2];\n    });\n}); });\nrouter.get(\"/file/download\", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\n    return __generator(this, function (_a) {\n        uploadService_1.default\n            .mediaGet(req, res)\n            .then(function (response) { return __awaiter(void 0, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                return [2, res.status(response.status).send({\n                        error: response.error,\n                        result: response.result,\n                        message: response.message,\n                    })];\n            });\n        }); })\n            .catch(function (err) {\n            return res.status(err.status || 500).send({\n                error: err.error,\n                result: err.result,\n                message: err.message,\n            });\n        });\n        return [2];\n    });\n}); });\nexports[\"default\"] = router;\n\n\n//# sourceURL=webpack://company-site-be/./src/uploads/index.ts?");

/***/ }),

/***/ "./src/uploads/uploadService.ts":
/*!**************************************!*\
  !*** ./src/uploads/uploadService.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.convertImage = void 0;\nvar multer_1 = __importDefault(__webpack_require__(/*! multer */ \"multer\"));\nvar multer_s3_1 = __importDefault(__webpack_require__(/*! multer-s3 */ \"multer-s3\"));\nvar aws_sdk_1 = __importDefault(__webpack_require__(/*! aws-sdk */ \"aws-sdk\"));\nvar btoa_1 = __importDefault(__webpack_require__(/*! btoa */ \"btoa\"));\nvar util_1 = __webpack_require__(/*! util */ \"util\");\nvar fs_1 = __importDefault(__webpack_require__(/*! fs */ \"fs\"));\nvar config_1 = __importDefault(__webpack_require__(/*! ../config */ \"./src/config/index.ts\"));\nvar convert = __webpack_require__(/*! heic-convert */ \"heic-convert\");\nvar uuidv1 = (__webpack_require__(/*! uuid */ \"uuid\").v1);\naws_sdk_1.default.config.update({\n    accessKeyId: process.env.AWS_SES_ACCESS_KEY_ID,\n    secretAccessKey: process.env.AWS_SES_SECRET_ACCESS_KEY,\n    region: process.env.AWS_SES_REGION,\n});\nconsole.log(process.env.AWS_SES_ACCESS_KEY_ID, process.env.AWS_SES_REGION);\nvar S3 = new aws_sdk_1.default.S3();\nvar uploadmedia = function (file, userId, mediaId, key) {\n    return new Promise(function (resolve, reject) {\n        var _a, _b;\n        return __awaiter(this, void 0, void 0, function () {\n            var entity, newKey, params;\n            var _this = this;\n            return __generator(this, function (_c) {\n                entity = \"underscoretec/\".concat(process.env.nodeEnv, \"/\").concat(userId);\n                newKey = \"\".concat(entity, \"/\").concat(uuidv1());\n                params = {\n                    Bucket: (_b = (_a = process.env) === null || _a === void 0 ? void 0 : _a.BUCKET) !== null && _b !== void 0 ? _b : \"\",\n                    Key: newKey,\n                    Body: file,\n                };\n                S3.upload(params, function (err, data) { return __awaiter(_this, void 0, void 0, function () {\n                    return __generator(this, function (_a) {\n                        if (data) {\n                            resolve(data);\n                        }\n                        else {\n                            console.log(\"Error>>\", err);\n                            reject(\"Upload media error\");\n                        }\n                        return [2];\n                    });\n                }); });\n                return [2];\n            });\n        });\n    });\n};\nvar convertImage = function (file) {\n    return new Promise(function (resolve, reject) {\n        return __awaiter(this, void 0, void 0, function () {\n            var path_1, inputBuffer, outputBuffer, result, error_1;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        _a.trys.push([0, 7, , 8]);\n                        path_1 = \"\".concat(file.destination, \"/\").concat(file.filename);\n                        return [4, (0, util_1.promisify)(fs_1.default.readFile)(path_1)];\n                    case 1:\n                        inputBuffer = _a.sent();\n                        return [4, convert({\n                                buffer: inputBuffer,\n                                format: \"JPEG\",\n                                quality: 1,\n                            })];\n                    case 2:\n                        outputBuffer = _a.sent();\n                        if (!outputBuffer) return [3, 6];\n                        if (!fs_1.default.existsSync(path_1)) return [3, 4];\n                        return [4, fs_1.default.unlinkSync(path_1)];\n                    case 3:\n                        _a.sent();\n                        _a.label = 4;\n                    case 4: return [4, uploadmedia(outputBuffer, file.userId)];\n                    case 5:\n                        result = _a.sent();\n                        resolve(result);\n                        _a.label = 6;\n                    case 6: return [3, 8];\n                    case 7:\n                        error_1 = _a.sent();\n                        console.log(\"heic conversion erorr===>:-\", error_1);\n                        return [3, 8];\n                    case 8: return [2];\n                }\n            });\n        });\n    });\n};\nexports.convertImage = convertImage;\nexports[\"default\"] = {\n    upload: function (req, res) {\n        return new Promise(function (resolve, reject) {\n            var _this = this;\n            var _a, _b, _c, _d;\n            try {\n                var userId = ((_a = req.query) === null || _a === void 0 ? void 0 : _a.userId) ? req.query.userId : (_b = req.user) === null || _b === void 0 ? void 0 : _b._id;\n                var entity_1 = \"underscoretec/\".concat(config_1.default.environment, \"/\").concat(userId);\n                var storage = void 0;\n                var type_1 = req.query.fileType ? req.query.fileType : \"image\";\n                console.log(type_1, userId, entity_1, process.env.BUCKET);\n                if (type_1 === \"image\") {\n                    storage = (0, multer_s3_1.default)({\n                        s3: S3,\n                        bucket: (_d = (_c = process.env) === null || _c === void 0 ? void 0 : _c.BUCKET) !== null && _d !== void 0 ? _d : \"\",\n                        metadata: function (req, file, cb) {\n                            cb(null, {\n                                fileName: file.originalname,\n                                mimetype: file.mimetype,\n                            });\n                        },\n                        key: function (req, file, cb) {\n                            cb(null, entity_1 + \"/\" + uuidv1());\n                        },\n                    });\n                }\n                else {\n                    storage = multer_1.default.diskStorage({\n                        destination: function (req, file, callback) {\n                            if (type_1 === \"convert\") {\n                                var path_2 = \"./media\";\n                                if (!fs_1.default.existsSync(path_2)) {\n                                    fs_1.default.mkdirSync(path_2);\n                                }\n                                callback(null, path_2);\n                            }\n                        },\n                        filename: function (req, file, callback) {\n                            var fileEx = /(?:\\.([^.]+))?$/.exec(file.originalname);\n                            callback(null, \"\".concat(uuidv1()).concat(fileEx[0]));\n                        },\n                    });\n                }\n                var upload = (0, multer_1.default)({\n                    storage: storage,\n                }).any();\n                if (upload) {\n                    upload(req, res, function (error) { return __awaiter(_this, void 0, void 0, function () {\n                        var data, result, obj;\n                        var _a;\n                        return __generator(this, function (_b) {\n                            switch (_b.label) {\n                                case 0:\n                                    console.log(\"image upload error\", error);\n                                    if (!error) return [3, 1];\n                                    return [2, reject({\n                                            error: true,\n                                            status: 400,\n                                            message: error.message,\n                                        })];\n                                case 1:\n                                    if (!(type_1 === \"convert\")) return [3, 3];\n                                    data = req.files[0];\n                                    data.userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a._id;\n                                    return [4, (0, exports.convertImage)(data)];\n                                case 2:\n                                    result = _b.sent();\n                                    obj = {\n                                        fieldname: data.fieldname,\n                                        originalname: data.originalname,\n                                        encoding: \"7bit\",\n                                        mimetype: \"image/jpeg\",\n                                        size: data.size,\n                                        bucket: result.Bucket || result.bucket,\n                                        key: result.Key || result.key,\n                                        location: data.Location,\n                                    };\n                                    req.files[0] = obj;\n                                    return [2, resolve({\n                                            error: false,\n                                            status: 200,\n                                            result: req.files,\n                                            message: \"File uploaded\",\n                                        })];\n                                case 3: return [2, resolve({\n                                        error: false,\n                                        status: 200,\n                                        result: req.files,\n                                        message: \"File uploaded\",\n                                    })];\n                            }\n                        });\n                    }); });\n                }\n                else {\n                    return reject({\n                        error: true,\n                        status: 404,\n                        message: \"File not uploaded\",\n                    });\n                }\n            }\n            catch (e) {\n                console.log(\"uploade error\", e);\n                return reject({\n                    error: true,\n                    status: 500,\n                    message: \"Server error \" + e,\n                });\n            }\n        });\n    },\n    get: function (req) {\n        return new Promise(function (resolve, reject) {\n            var _a;\n            try {\n                var image = JSON.stringify({\n                    bucket: (_a = process.env) === null || _a === void 0 ? void 0 : _a.BUCKET,\n                    key: req.query.key,\n                    edits: {\n                        resize: {\n                            width: parseInt(req.query.width),\n                            height: parseInt(req.query.height),\n                            fit: req.query.fit,\n                        },\n                        normalise: true,\n                    },\n                });\n                var cdnImage = void 0;\n                if (req.query.key.includes(\"/v/\")) {\n                    if (req.query.key.includes(\"thumbnail\")) {\n                        cdnImage = (0, btoa_1.default)(image);\n                    }\n                    else {\n                        cdnImage = req.query.key;\n                    }\n                }\n                else {\n                    cdnImage = (0, btoa_1.default)(image);\n                }\n                var url = \"\".concat(process.env.CDN_URL, \"/\").concat(cdnImage);\n                return resolve({\n                    status: 200,\n                    error: false,\n                    url: url,\n                    message: \"Success\",\n                });\n            }\n            catch (e) {\n                console.log(e, \"error\");\n                return reject({\n                    error: true,\n                    status: 400,\n                    message: \"Server error \" + e,\n                });\n            }\n        });\n    },\n    delete: function (req, res) {\n        return new Promise(function (resolve, reject) {\n            var _a, _b, _c;\n            try {\n                var media = req.body.mediaId;\n                var params = {\n                    Bucket: (_b = (_a = process.env) === null || _a === void 0 ? void 0 : _a.BUCKET) !== null && _b !== void 0 ? _b : \"\",\n                    Key: (_c = media === null || media === void 0 ? void 0 : media.mediaFile) === null || _c === void 0 ? void 0 : _c.key,\n                };\n                S3.deleteObject(params, function (err, data) {\n                    if (err) {\n                        return reject({\n                            error: true,\n                            status: 400,\n                            message: err.message,\n                        });\n                    }\n                    else {\n                        return resolve({\n                            error: false,\n                            status: 200,\n                            result: data,\n                            message: \"File Deleted Successfully.\",\n                        });\n                    }\n                });\n            }\n            catch (error) {\n                return reject({\n                    error: true,\n                    status: 500,\n                    message: \"Server error \" + error,\n                });\n            }\n        });\n    },\n    update: function (req) {\n        return new Promise(function (resolve, reject) {\n            var _a, _b;\n            return __awaiter(this, void 0, void 0, function () {\n                var params;\n                return __generator(this, function (_c) {\n                    try {\n                        params = {\n                            Body: req.body.mediaFile,\n                            Bucket: (_b = (_a = process.env) === null || _a === void 0 ? void 0 : _a.BUCKET) !== null && _b !== void 0 ? _b : \"\",\n                            Key: req.query.key,\n                        };\n                        S3.putObject(params, function (err, data) {\n                            if (err) {\n                                return reject({\n                                    error: true,\n                                    status: 500,\n                                    message: err.message,\n                                });\n                            }\n                            else {\n                                return resolve({\n                                    error: false,\n                                    status: 200,\n                                    result: data,\n                                    message: \"File Updated Successfully.\",\n                                });\n                            }\n                        });\n                    }\n                    catch (error) {\n                        return [2, reject({\n                                error: true,\n                                status: 500,\n                                message: \"Server error \" + error,\n                            })];\n                    }\n                    return [2];\n                });\n            });\n        });\n    },\n    mediaGet: function (req, res) {\n        return new Promise(function (resolve, reject) {\n            var _a;\n            return __awaiter(this, void 0, void 0, function () {\n                var getParams, readStream;\n                return __generator(this, function (_b) {\n                    try {\n                        getParams = {\n                            Bucket: (_a = process.env) === null || _a === void 0 ? void 0 : _a.BUCKET,\n                            Key: req.query.key,\n                        };\n                        readStream = S3.getObject(getParams).createReadStream();\n                        res.writeHead(200);\n                        readStream.pipe(res);\n                        return [2];\n                    }\n                    catch (err) {\n                        console.log(err, \"error =>>>\");\n                        return [2, reject({\n                                error: true,\n                                status: 400,\n                                message: \"Server error \" + err,\n                            })];\n                    }\n                    return [2];\n                });\n            });\n        });\n    },\n};\n\n\n//# sourceURL=webpack://company-site-be/./src/uploads/uploadService.ts?");

/***/ }),

/***/ "./node_modules/webpack/hot/log-apply-result.js":
/*!******************************************************!*\
  !*** ./node_modules/webpack/hot/log-apply-result.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\nmodule.exports = function (updatedModules, renewedModules) {\n\tvar unacceptedModules = updatedModules.filter(function (moduleId) {\n\t\treturn renewedModules && renewedModules.indexOf(moduleId) < 0;\n\t});\n\tvar log = __webpack_require__(/*! ./log */ \"./node_modules/webpack/hot/log.js\");\n\n\tif (unacceptedModules.length > 0) {\n\t\tlog(\n\t\t\t\"warning\",\n\t\t\t\"[HMR] The following modules couldn't be hot updated: (They would need a full reload!)\"\n\t\t);\n\t\tunacceptedModules.forEach(function (moduleId) {\n\t\t\tlog(\"warning\", \"[HMR]  - \" + moduleId);\n\t\t});\n\t}\n\n\tif (!renewedModules || renewedModules.length === 0) {\n\t\tlog(\"info\", \"[HMR] Nothing hot updated.\");\n\t} else {\n\t\tlog(\"info\", \"[HMR] Updated modules:\");\n\t\trenewedModules.forEach(function (moduleId) {\n\t\t\tif (typeof moduleId === \"string\" && moduleId.indexOf(\"!\") !== -1) {\n\t\t\t\tvar parts = moduleId.split(\"!\");\n\t\t\t\tlog.groupCollapsed(\"info\", \"[HMR]  - \" + parts.pop());\n\t\t\t\tlog(\"info\", \"[HMR]  - \" + moduleId);\n\t\t\t\tlog.groupEnd(\"info\");\n\t\t\t} else {\n\t\t\t\tlog(\"info\", \"[HMR]  - \" + moduleId);\n\t\t\t}\n\t\t});\n\t\tvar numberIds = renewedModules.every(function (moduleId) {\n\t\t\treturn typeof moduleId === \"number\";\n\t\t});\n\t\tif (numberIds)\n\t\t\tlog(\n\t\t\t\t\"info\",\n\t\t\t\t'[HMR] Consider using the optimization.moduleIds: \"named\" for module names.'\n\t\t\t);\n\t}\n};\n\n\n//# sourceURL=webpack://company-site-be/./node_modules/webpack/hot/log-apply-result.js?");

/***/ }),

/***/ "./node_modules/webpack/hot/log.js":
/*!*****************************************!*\
  !*** ./node_modules/webpack/hot/log.js ***!
  \*****************************************/
/***/ ((module) => {

eval("var logLevel = \"info\";\n\nfunction dummy() {}\n\nfunction shouldLog(level) {\n\tvar shouldLog =\n\t\t(logLevel === \"info\" && level === \"info\") ||\n\t\t([\"info\", \"warning\"].indexOf(logLevel) >= 0 && level === \"warning\") ||\n\t\t([\"info\", \"warning\", \"error\"].indexOf(logLevel) >= 0 && level === \"error\");\n\treturn shouldLog;\n}\n\nfunction logGroup(logFn) {\n\treturn function (level, msg) {\n\t\tif (shouldLog(level)) {\n\t\t\tlogFn(msg);\n\t\t}\n\t};\n}\n\nmodule.exports = function (level, msg) {\n\tif (shouldLog(level)) {\n\t\tif (level === \"info\") {\n\t\t\tconsole.log(msg);\n\t\t} else if (level === \"warning\") {\n\t\t\tconsole.warn(msg);\n\t\t} else if (level === \"error\") {\n\t\t\tconsole.error(msg);\n\t\t}\n\t}\n};\n\n/* eslint-disable node/no-unsupported-features/node-builtins */\nvar group = console.group || dummy;\nvar groupCollapsed = console.groupCollapsed || dummy;\nvar groupEnd = console.groupEnd || dummy;\n/* eslint-enable node/no-unsupported-features/node-builtins */\n\nmodule.exports.group = logGroup(group);\n\nmodule.exports.groupCollapsed = logGroup(groupCollapsed);\n\nmodule.exports.groupEnd = logGroup(groupEnd);\n\nmodule.exports.setLogLevel = function (level) {\n\tlogLevel = level;\n};\n\nmodule.exports.formatError = function (err) {\n\tvar message = err.message;\n\tvar stack = err.stack;\n\tif (!stack) {\n\t\treturn message;\n\t} else if (stack.indexOf(message) < 0) {\n\t\treturn message + \"\\n\" + stack;\n\t} else {\n\t\treturn stack;\n\t}\n};\n\n\n//# sourceURL=webpack://company-site-be/./node_modules/webpack/hot/log.js?");

/***/ }),

/***/ "./node_modules/webpack/hot/poll.js?100":
/*!**********************************************!*\
  !*** ./node_modules/webpack/hot/poll.js?100 ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var __resourceQuery = \"?100\";\n/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n/*globals __resourceQuery */\nif (true) {\n\tvar hotPollInterval = +__resourceQuery.slice(1) || 0;\n\tvar log = __webpack_require__(/*! ./log */ \"./node_modules/webpack/hot/log.js\");\n\n\tvar checkForUpdate = function checkForUpdate(fromUpdate) {\n\t\tif (module.hot.status() === \"idle\") {\n\t\t\tmodule.hot\n\t\t\t\t.check(true)\n\t\t\t\t.then(function (updatedModules) {\n\t\t\t\t\tif (!updatedModules) {\n\t\t\t\t\t\tif (fromUpdate) log(\"info\", \"[HMR] Update applied.\");\n\t\t\t\t\t\treturn;\n\t\t\t\t\t}\n\t\t\t\t\t__webpack_require__(/*! ./log-apply-result */ \"./node_modules/webpack/hot/log-apply-result.js\")(updatedModules, updatedModules);\n\t\t\t\t\tcheckForUpdate(true);\n\t\t\t\t})\n\t\t\t\t.catch(function (err) {\n\t\t\t\t\tvar status = module.hot.status();\n\t\t\t\t\tif ([\"abort\", \"fail\"].indexOf(status) >= 0) {\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] Cannot apply update.\");\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] \" + log.formatError(err));\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] You need to restart the application!\");\n\t\t\t\t\t} else {\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] Update failed: \" + log.formatError(err));\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t}\n\t};\n\tsetInterval(checkForUpdate, hotPollInterval);\n} else {}\n\n\n//# sourceURL=webpack://company-site-be/./node_modules/webpack/hot/poll.js?");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("aws-sdk");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "btoa":
/*!***********************!*\
  !*** external "btoa" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("btoa");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "heic-convert":
/*!*******************************!*\
  !*** external "heic-convert" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("heic-convert");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("moment");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("multer");

/***/ }),

/***/ "multer-s3":
/*!****************************!*\
  !*** external "multer-s3" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("multer-s3");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("uuid");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "./src/services/messages.json":
/*!************************************!*\
  !*** ./src/services/messages.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"EMAIL_EXISTS_ERROR\":\"This email is already registered with us.\",\"CHECK_EMAIL\":\"This email is already registered Check your email for further procedure.\",\"INTERNAL_SERVER_ERROR\":\"Internal server error.\",\"USER_CREATE\":\"User created successfully!\",\"USERS_FOUND\":\"Users found successfully!\",\"INVALID_NAME\":\"Invalid Name\",\"INVALID_PASSWORD\":\"Minimum Password length should be 8\",\"NO_USER_EXISTS\":\"No user exist with this email\",\"INVALID_USER\":\"You are not a valid user.\",\"INCORRECT_PASSWORD\":\"Incorrect password\",\"LOGIN_SUCCESS\":\"Successfully Logged In.\",\"USER_NOT_EXISTS\":\"User does not exist.\",\"USERS_NOT_EXIST\":\"Users do not exist.\",\"PASSWORD_CHANGE_SUCCESS\":\"Password changed successfully.\",\"PASSWORD_CHANGE_ERROR\":\"Password does not changed.\",\"UPDATE_SUCCCESS\":\"Successfully Updated.\",\"USER_DELETE_SUCCESS\":\"User deleted successfully.\",\"USER_fOUND_SUCCESS\":\"User found successfully.\",\"USERS_fOUND_SUCCESS\":\"Users found successfully.\",\"FOUND\":\"Data found successfully.\",\"USER_ALREADY_VERIFIED\":\"User already verified.\",\"USER_DISABLED\":\"Your account is disabled, please contact to admin.\",\"PAGE_NOT_FOUND\":\"Page not found.\",\"INVALID_ADDRESS\":\"Invalid address.\",\"INVALID_CITY\":\"Invalid city.\",\"INVALID_STATE\":\"Invalid state.\",\"INVALID_ZIPCODE\":\"Invalid zipcode.\",\"INVALID_COUNTRY\":\"Invalid country.\",\"ADDRESS_NOTFOUND\":\"Address not found.\",\"INVALID_EMAIL\":\"The provided email is not valid\",\"TOKEN_EXPIRED\":\"Token expired\",\"INVALID_TOKEN\":\"Token invalid or missing\",\"VERIFICATION_SUCCESS\":\"Verified.\",\"CHECK_YOUR_EMAIL\":\"Check your email for further procedure.\",\"PASSWORD_RESET_SUCCESS\":\"Password reset successfully.\",\"ACCOUNT_NOT_VERIFY\":\"Account is not verified yet!\",\"LOGIN_FAILD\":\"Login failed: Incorrect email or password\",\"TOKEN_INVALID_OR_MISSING\":\"Token is Invalid or is missing\",\"AUTHENTICATION_ERROR\":\"Authentication error.\",\"UNAUTHORIZED\":\"You are not authorized\",\"ITEM_ALREADY_EXISTS\":\"Item already exists\",\"ITEM_CREATE_FAILED\":\"Item creation failed\",\"ITEM_CREATED\":\"Item created successfully\",\"ITEMS_NOT_FOUND\":\"Items not found\",\"ITEMS_FOUND\":\"Items found\",\"ITEM_UPDATE_FAILED\":\"Item update failed\",\"ITEM_NOT_FOUND\":\"Item not found\",\"ITEM_UPDATED\":\"Item updated successfully\",\"ITEM_DELETE_FAILED\":\"Item delete failed\",\"ITEM_DELETED\":\"Item deleted successfully\",\"TRANSACTION_CREATE_FAILED\":\"Transaction creation failed\",\"TRANSACTION_CREATED\":\"Transaction created successfully\",\"TRANSACTION_NOT_FOUND\":\"Transaction not found\",\"TRANSACTION_FOUND\":\"Transaction found\",\"TRANSACTION_UPDATE_FAILED\":\"Transaction update failed\",\"TRANSACTION_UPDATED\":\"Transaction updated successfully\",\"ITEMS_DELETED\":\"Items deleted successfully\",\"PROJECT_ALREADY_EXISTS\":\"Project already exists\",\"PROJECT_CREATE_FAILED\":\"Project creation failed\",\"PROJECT_CREATED\":\"Project created successfully\",\"PROJECT_NOT_FOUND\":\"Project not found\",\"PROJECT_FOUND\":\"Project found\",\"PROJECT_UPDATED\":\"Project updated successfully\",\"PROJECT_UPADTE_FAILED\":\"Project failed to update\",\"PROJECT_DLETED\":\"Project deleted successfully\",\"TASK_CREATED\":\"Task created successfully\",\"TASK_CREATE_FAILED\":\"Task creation failed\",\"TASK_NOT_FOUND\":\" Task not found\",\"TASK_UPDATED\":\"Task updated successfully\",\"TASK_UPADTE_FAILED\":\"Task updation failed\",\"TASK_FOUND\":\"Task found\",\"TASK_DLETED\":\"Task deleted successfully\",\"COMPELETE_TASK_DELETED\":\"Complete task can\\'t be deleted\",\"TEAM_ALREADY_EXISTS\":\"Team is already existed\",\"TEAM_CREATED\":\"Team is created successfully\",\"TEAM_CREATE_FAILED\":\"Team creation failed\",\"TEAM_FOUND\":\"Team found\",\"TEAM_NOT_FOUND\":\"Team not found\",\"TEAM_DELETED\":\"Team is deleted\",\"TEAM_UPDATE_FAILED\":\"TEAM is not updated\",\"TEAM_UPDATED\":\"Team is updated\",\"USER_ALREADY_EXISTS\":\"USER_ALREADY_EXISTS\",\"REPORT_FOUND\":\"REPORT_FOUND\",\"REPORT_NOT_FOUND\":\"REPORT not found\",\"PASSWORD_CHANGE_SUCCESS_ALL\":\"Password changed successfully, please login again\",\"QUOTE_CREATED\":\"Quote created successfully\",\"QUOTE_CREATE_FAILED\":\"Quote creation failed\",\"QUOTE_FOUND\":\"Quote found\",\"QUOTE_NOT_FOUND\":\"Quote not found\",\"QUOTE_UPDATED\":\"Quote updated successfully\",\"QUOTE_UPDATE_FAILED\":\"Quote update failed\",\"QUOTE_DELETED\":\"Quote deleted successfully\",\"QUOTE_DELETE_FAILED\":\"Quote delete failed\",\"SUCCESS\":\"Payment intent created\",\"ORDER_CREATED\":\"Order created successfully\",\"ORDERS_FOUND\":\"Orders found\",\"ORDER_NOT_FOUND\":\"Order not found\",\"ORDER_UPDATED\":\"Order updated successfully\",\"ORDER_UPDATE_FAILED\":\"Order update failed\",\"ORDER_CREATE_FAILED\":\"Order creation failed\",\"QUOTE_ITEM_DELETED\":\"Quote item deleted successfully\",\"STRIPE_CUSTOMER_CREATION_FAILED\":\"Stripe customer creation failed\",\"ORDER_ALREADY_EXISTS\":\"Order already exists\",\"TOO_MANY_ITEMS\":\"Too many items\",\"CONTACT_CREATED\":\"Submitted successfully\",\"CONTACT_CREATE_FAILED\":\"Contact creation failed\",\"DIAGRAM_CREATE_FAILED\":\"Diagram create failed\",\"DIAGRAM_CREATE_SUCCESS\":\"Diagram created successfully\",\"DIAGRAM_ALREADY_EXIST\":\"Diagram already exists\",\"DIAGRAMS_NOT_FOUND\":\"No Diagrams were found\",\"DIAGRAMS_FOUND\":\"Diagrams found\",\"DIAGRAM_UPDATE_SUCCESS\":\"Diagram updated successfully\",\"COUPON_ADDED\":\"Coupon added successfully\",\"COUPON_ADD_FAILED\":\"Coupon add failed\"}');\n\n//# sourceURL=webpack://company-site-be/./src/services/messages.json?");

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
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
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
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("136012986f81db13729f")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = __webpack_require__.hmrS_require = __webpack_require__.hmrS_require || {
/******/ 			"main": 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no chunk install function needed
/******/ 		
/******/ 		// no chunk loading
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			var update = require("./" + __webpack_require__.hu(chunkId));
/******/ 			var updatedModules = update.modules;
/******/ 			var runtime = update.runtime;
/******/ 			for(var moduleId in updatedModules) {
/******/ 				if(__webpack_require__.o(updatedModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = updatedModules[moduleId];
/******/ 					if(updatedModulesList) updatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 		}
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.requireHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.require = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.require = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.requireHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			return Promise.resolve().then(function() {
/******/ 				return require("./" + __webpack_require__.hmrF());
/******/ 			})['catch'](function(err) { if(err.code !== 'MODULE_NOT_FOUND') throw err; });
/******/ 		}
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./node_modules/webpack/hot/poll.js?100");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;