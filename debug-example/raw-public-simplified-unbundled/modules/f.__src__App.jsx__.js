(function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _app = __webpack_require__(/*! firebase/compat/app */ "./node_modules/firebase/compat/app/dist/esm/index.esm.js");

var _app2 = _interopRequireDefault(_app);

__webpack_require__(/*! firebase/compat/auth */ "./node_modules/firebase/compat/auth/dist/esm/index.esm.js");

var _MyFirebaseAuth = __webpack_require__(/*! ./MyFirebaseAuth */ "./src/MyFirebaseAuth.jsx");

var _MyFirebaseAuth2 = _interopRequireDefault(_MyFirebaseAuth);

var _app3 = __webpack_require__(/*! ./app.css */ "./src/app.css");

var _app4 = _interopRequireDefault(_app3);

__webpack_require__(/*! ./firebaseui-styling.global.css */ "./src/firebaseui-styling.global.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

// React core.


// Firebase.


// works without the styled import
// import StyledFirebaseAuth from 'react-firebaseui/FirebaseAuth';

// fails with this styled import


// Styles
// This uses CSS modules.


// Import globally.

// Get the Firebase config from the auto generated file.
var firebaseConfig = __webpack_require__(/*! ./firebase-config.json */ "./src/firebase-config.json").result.sdkConfig;

// Instantiate a Firebase app.
var firebaseApp = _app2.default.initializeApp(firebaseConfig);

/**
 * The Splash Page containing the login UI.
 */

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.uiConfig = {
      signInFlow: 'popup',
      signInOptions: [_app2.default.auth.GoogleAuthProvider.PROVIDER_ID, _app2.default.auth.EmailAuthProvider.PROVIDER_ID],
      callbacks: {
        signInSuccessWithAuthResult: function signInSuccessWithAuthResult() {
          return false;
        }
      }
    }, _this.state = {
      isSignedIn: undefined
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  /**
   * @inheritDoc
   */
  App.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.unregisterAuthObserver = firebaseApp.auth().onAuthStateChanged(function (user) {
      _this2.setState({ isSignedIn: !!user });
    });
  };

  /**
   * @inheritDoc
   */


  App.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unregisterAuthObserver();
  };

  /**
   * @inheritDoc
   */


  App.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      { className: _app4.default.container },
      _react2.default.createElement(
        'div',
        { className: _app4.default.logo },
        _react2.default.createElement(
          'i',
          { className: _app4.default.logoIcon + ' material-icons' },
          'photo'
        ),
        ' My App'
      ),
      _react2.default.createElement(
        'div',
        { className: _app4.default.caption },
        'This is a cool demo app 2'
      ),
      this.state.isSignedIn !== undefined && !this.state.isSignedIn && _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_MyFirebaseAuth2.default, { className: _app4.default.firebaseUi, uiConfig: this.uiConfig,
          firebaseAuth: firebaseApp.auth() })
      ),
      this.state.isSignedIn && _react2.default.createElement(
        'div',
        { className: _app4.default.signedIn },
        'Hello ',
        firebaseApp.auth().currentUser.displayName,
        '. You are now signed In!',
        _react2.default.createElement(
          'a',
          { className: _app4.default.button, onClick: function onClick() {
              return firebaseApp.auth().signOut();
            } },
          'Sign-out'
        )
      )
    );
  };

  return App;
}(_react2.default.Component);

// Load the app in the browser.


_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));

/***/ })