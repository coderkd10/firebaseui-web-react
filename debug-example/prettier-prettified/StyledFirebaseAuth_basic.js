(() => {
  "use strict";
  var __webpack_modules__ = {
    react: (module) => {
      module.exports = require("react");
    },
  };

  var __webpack_module_cache__ = {};

  function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }

    var module = (__webpack_module_cache__[moduleId] = {
      exports: {},
    });

    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    return module.exports;
  }
  var __webpack_exports__ = {};

  (() => {
    var exports = __webpack_exports__;

    exports.__esModule = true;
    exports["default"] = void 0;
    var _react = _interopRequireDefault(__webpack_require__("react"));
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
          };
      return _setPrototypeOf(o, p);
    }
    var FirebaseAuth = (exports["default"] = (function (_React$Component) {
      _inheritsLoose(FirebaseAuth, _React$Component);
      function FirebaseAuth() {
        return _React$Component.apply(this, arguments) || this;
      }
      var _proto = FirebaseAuth.prototype;
      _proto.render = function render() {
        return _react.default.createElement(
          "div",
          null,
          _react.default.createElement(
            "h2",
            null,
            "THIS IS A SAMPLE JSX COMPONENT",
          ),
        );
      };
      return FirebaseAuth;
    })(_react.default.Component));
  })();

  module.exports = __webpack_exports__;
})();
