/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "firebaseui":
/*!*****************************!*\
  !*** external "firebaseui" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("firebaseui");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!******************************!*\
  !*** ./src/FirebaseAuth.jsx ***!
  \******************************/


exports.__esModule = true;
exports.AnotherComp = AnotherComp;
exports["default"] = void 0;
exports.getFirebaseui = getFirebaseui;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var FirebaseAuth = exports["default"] = function (_React$Component) {
  _inheritsLoose(FirebaseAuth, _React$Component);
  function FirebaseAuth() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = FirebaseAuth.prototype;
  _proto.render = function render() {
    return _react.default.createElement("div", null, _react.default.createElement("h1", null, "THIS IS SAMPLE FirebaseAuth component"));
  };
  return FirebaseAuth;
}(_react.default.Component);
function AnotherComp() {
  return _react.default.createElement("h1", null, "THIS IS A SIMPLE FUNCTIONAL COMPONENT");
}
function getFirebaseui() {
  var firebaseui = __webpack_require__(/*! firebaseui */ "firebaseui");
  return firebaseui;
}
})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=StyledFirebaseAuth.js.map