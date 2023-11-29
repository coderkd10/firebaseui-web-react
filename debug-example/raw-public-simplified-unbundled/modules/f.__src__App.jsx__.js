(function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _MyFirebaseAuth = __webpack_require__(/*! ./MyFirebaseAuth */ "./src/MyFirebaseAuth.jsx");

var _MyFirebaseAuth2 = _interopRequireDefault(_MyFirebaseAuth);

var _app = __webpack_require__(/*! ./app.css */ "./src/app.css");

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Styles


// This uses CSS modules.

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  App.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      { className: _app2.default.container },
      _react2.default.createElement(
        'div',
        { className: _app2.default.logo },
        _react2.default.createElement(
          'i',
          { className: _app2.default.logoIcon + ' material-icons' },
          'photo'
        ),
        ' My App'
      ),
      _react2.default.createElement(
        'div',
        { className: _app2.default.caption },
        'This is a cool demo app 2'
      ),
       true && _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_MyFirebaseAuth2.default, null)
      )
    );
  };

  return App;
}(_react2.default.Component);

// Load the app in the browser.


_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));

/***/ })