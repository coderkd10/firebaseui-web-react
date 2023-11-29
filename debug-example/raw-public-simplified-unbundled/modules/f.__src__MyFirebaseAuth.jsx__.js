(function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = MyFirebaseAuth;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MyFbAuthProxy(props) {
    if (!props.useStyled) {
        var FirebaseAuth = __webpack_require__(/*! react-firebaseui/FirebaseAuth */ "./node_modules/react-firebaseui/FirebaseAuth.js").default;
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'span',
                null,
                "{rendered uncompiled verion ...}"
            ),
            _react2.default.createElement(FirebaseAuth, null)
        );
    }
    var StyledFirebaseAuth = __webpack_require__(/*! react-firebaseui/StyledFirebaseAuth */ "./node_modules/react-firebaseui/StyledFirebaseAuth.js").default;
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'span',
            null,
            "{rendered webpack compiled verion ...}"
        ),
        _react2.default.createElement(StyledFirebaseAuth, null)
    );
}

function MyFirebaseAuth(props) {
    var _useState = (0, _react.useState)(false),
        checked = _useState[0],
        setChecked = _useState[1];

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'label',
            null,
            _react2.default.createElement('input', { type: 'checkbox', checked: checked, onChange: function onChange() {
                    setChecked(function (value) {
                        return !value;
                    });
                } }),
            'Use Styled (webpacked compiled with inline styles) Component ?'
        ),
        _react2.default.createElement(MyFbAuthProxy, { useStyled: checked })
    );
}

/***/ })