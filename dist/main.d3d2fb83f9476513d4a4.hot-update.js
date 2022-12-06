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

/***/ "./src/mail/mailService.ts":
/*!*********************************!*\
  !*** ./src/mail/mailService.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.contactUs = void 0;\nvar mail_1 = __webpack_require__(/*! ./mail */ \"./src/mail/mail.ts\");\nfunction contactUs(data) {\n    return new Promise(function (resolve, reject) {\n        var text = \"\\n        Dear \".concat(data.name, \",<br/><br/><br/> \\n\\n        Thank you for reaching out to us.<br/><br/> \\n\\n        Your enquiry is registered with Subject :- \").concat(data.subject, \" <br/>\\n\\n        Our business development colleague will get in touch with you soon.<br/>\\n\\n        We are glad that you have taken the first step to connect and build a relationship with Golfnet.<br/>\\n\\n        Looking forward to working with you and your organization.<br/><br/> \\n\\n        Best regards, \");\n        var Body = {\n            Html: {\n                Charset: \"UTF-8\",\n                Data: text\n            },\n            Text: {\n                Charset: \"UTF-8\",\n                Data: \"Thank you for your enquiry\"\n            },\n        };\n        (0, mail_1.sendEmail)({\n            receiverAddress: data.email,\n            body: Body,\n            subject: {\n                Charset: \"UTF-8\",\n                Data: \"Thank you for your enquiry\",\n            },\n            cc: process.env.ccmail,\n        });\n    });\n}\nexports.contactUs = contactUs;\n\n\n//# sourceURL=webpack://company-site-be/./src/mail/mailService.ts?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("da8e1dff83811424bc70")
/******/ })();
/******/ 
/******/ }
;