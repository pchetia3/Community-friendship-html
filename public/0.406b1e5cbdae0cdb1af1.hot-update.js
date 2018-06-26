webpackHotUpdate(0,{

/***/ 336:
/* no static exports found */
/* all exports used */
/*!*****************************************!*\
  !*** ./frontend/containers/Root.dev.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = Root;\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 4);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ 30);\n\nvar _AppContainer = __webpack_require__(/*! ./AppContainer.js */ 154);\n\nvar _AppContainer2 = _interopRequireDefault(_AppContainer);\n\nvar _DevTools = __webpack_require__(/*! ./DevTools */ 155);\n\nvar _DevTools2 = _interopRequireDefault(_DevTools);\n\nvar _Login = __webpack_require__(/*! ./Login.js */ 334);\n\nvar _Login2 = _interopRequireDefault(_Login);\n\nvar _Register = __webpack_require__(/*! ./Register.js */ 335);\n\nvar _Register2 = _interopRequireDefault(_Register);\n\nvar _EmployeeHandbook = __webpack_require__(/*! ./EmployeeHandbook */ 333);\n\nvar _EmployeeHandbook2 = _interopRequireDefault(_EmployeeHandbook);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 582);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction Root(_ref) {\n    var store = _ref.store;\n\n    return _react2.default.createElement(\n        _reactRedux.Provider,\n        { store: store },\n        _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(\n                _reactRouterDom.BrowserRouter,\n                null,\n                _react2.default.createElement(\n                    'div',\n                    null,\n                    _react2.default.createElement(\n                        _reactRouterDom.Switch,\n                        null,\n                        _react2.default.createElement(_reactRouterDom.Route, { path: '/home', component: _AppContainer2.default }),\n                        _react2.default.createElement(_reactRouterDom.Route, { path: '/login', component: _Login2.default }),\n                        _react2.default.createElement(_reactRouterDom.Route, { path: '/register', component: _Register2.default })\n                    )\n                )\n            ),\n            _react2.default.createElement(_DevTools2.default, null)\n        )\n    );\n}\n\nRoot.propTypes = {\n    store: _propTypes2.default.object.isRequired\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzM2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbnRhaW5lcnMvUm9vdC5kZXYuanM/ZjM5MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBBcHBDb250YWluZXIgZnJvbSAnLi9BcHBDb250YWluZXIuanMnO1xuaW1wb3J0IERldlRvb2xzIGZyb20gJy4vRGV2VG9vbHMnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4vTG9naW4uanMnO1xuaW1wb3J0IFJlZ2lzdGVyIGZyb20gJy4vUmVnaXN0ZXIuanMnO1xuaW1wb3J0IEVtcGxveWVlSGFuZGJvb2sgZnJvbSBcIi4vRW1wbG95ZWVIYW5kYm9va1wiO1xuXG5cbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZSwgU3dpdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm9vdCh7IHN0b3JlIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFJvdXRlcj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvaG9tZVwiIGNvbXBvbmVudD17QXBwQ29udGFpbmVyfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvbG9naW5cIiBjb21wb25lbnQ9e0xvZ2lufS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmVnaXN0ZXJcIiBjb21wb25lbnQ9e1JlZ2lzdGVyfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Sb3V0ZXI+XG4gICAgICAgICAgICAgICAgPERldlRvb2xzLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICk7XG59XG5cblJvb3QucHJvcFR5cGVzID0ge1xuICAgIHN0b3JlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvY29udGFpbmVycy9Sb290LmRldi5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFhQTtBQUNBO0FBZEE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFEQTtBQVNBO0FBVkE7QUFEQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBREEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///336\n");

/***/ })

})