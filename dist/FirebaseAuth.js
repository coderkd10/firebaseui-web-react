"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var ELEMENT_ID = 'firebaseui_container';
var firebaseUiDeletion = Promise.resolve();
var FirebaseAuth = exports.default = function (_React$Component) {
  _inheritsLoose(FirebaseAuth, _React$Component);
  function FirebaseAuth(props) {
    var _this;
    _this = _React$Component.call(this, props) || this;
    _this.props = void 0;
    _this.uiConfig = props.uiConfig;
    _this.firebaseAuth = props.firebaseAuth;
    _this.className = props.className;
    _this.uiCallback = props.uiCallback;
    _this.unregisterAuthObserver = function () {};
    return _this;
  }
  var _proto = FirebaseAuth.prototype;
  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;
    require('firebaseui/dist/firebaseui.css');
    var firebaseui = require('firebaseui');
    return firebaseUiDeletion.then(function () {
      _this2.firebaseUiWidget = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(_this2.firebaseAuth);
      if (_this2.uiConfig.signInFlow === 'popup') {
        _this2.firebaseUiWidget.reset();
      }
      _this2.userSignedIn = false;
      _this2.unregisterAuthObserver = _this2.firebaseAuth.onAuthStateChanged(function (user) {
        if (!user && _this2.userSignedIn) {
          _this2.firebaseUiWidget.reset();
        }
        _this2.userSignedIn = !!user;
      });
      if (_this2.uiCallback) {
        _this2.uiCallback(_this2.firebaseUiWidget);
      }
      _this2.firebaseUiWidget.start('#' + ELEMENT_ID, _this2.uiConfig);
    });
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    var _this3 = this;
    firebaseUiDeletion = firebaseUiDeletion.then(function () {
      _this3.unregisterAuthObserver();
      return _this3.firebaseUiWidget.delete();
    });
    return firebaseUiDeletion;
  };
  _proto.render = function render() {
    return _react.default.createElement("div", {
      className: this.className,
      id: ELEMENT_ID
    });
  };
  return FirebaseAuth;
}(_react.default.Component);
//# sourceMappingURL=FirebaseAuth.js.map