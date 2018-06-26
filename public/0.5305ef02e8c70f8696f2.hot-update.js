webpackHotUpdate(0,{

/***/ 331:
/* no static exports found */
/* all exports used */
/*!*************************************************!*\
  !*** ./frontend/containers/EmployeeHandbook.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 4);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _react = __webpack_require__(/*! react */ 2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ 30);\n\nvar _Title = __webpack_require__(/*! ../components/Title */ 59);\n\nvar _Title2 = _interopRequireDefault(_Title);\n\nvar _PDFViewer = __webpack_require__(/*! ../components/PDFViewer */ 631);\n\nvar _PDFViewer2 = _interopRequireDefault(_PDFViewer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar EmployeeHandbook = function EmployeeHandbook(_ref) {\n    var name = _ref.name;\n\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_Title2.default, { name: name })\n    );\n};\n\nEmployeeHandbook.propTypes = {\n    name: _propTypes2.default.string\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        name: state.name\n    };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps() /* dispatch */{\n    return {};\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(EmployeeHandbook);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzMxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbnRhaW5lcnMvRW1wbG95ZWVIYW5kYm9vay5qcz80Mzc1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBUaXRsZSBmcm9tICcuLi9jb21wb25lbnRzL1RpdGxlJztcbmltcG9ydCBQREZWaWV3ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9QREZWaWV3ZXInO1xuXG5cbmNvbnN0IEVtcGxveWVlSGFuZGJvb2sgPSAoeyBuYW1lIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFRpdGxlIG5hbWU9e25hbWV9IC8+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cblxuRW1wbG95ZWVIYW5kYm9vay5wcm9wVHlwZXMgPSB7XG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IHN0YXRlLm5hbWVcbiAgICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKC8qIGRpc3BhdGNoICovKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzXG4pKEVtcGxveWVlSGFuZGJvb2spO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL2NvbnRhaW5lcnMvRW1wbG95ZWVIYW5kYm9vay5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///331\n");

/***/ }),

/***/ 630:
/* no static exports found */
/* all exports used */
/*!***********************************!*\
  !*** ./frontend/actions/index.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.changeHandbookPage = undefined;\n\nvar _types = __webpack_require__(/*! ./types */ 329);\n\nvar types = _interopRequireWildcard(_types);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nvar changeHandbookPage = exports.changeHandbookPage = function changeHandbookPage(page) {\n    return {\n        type: types.CHANGE_HANDBOOK_PAGE,\n        page: page\n    };\n}; // Action Creators//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjMwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2FjdGlvbnMvaW5kZXguanM/NGI1OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBY3Rpb24gQ3JlYXRvcnNcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgY2hhbmdlSGFuZGJvb2tQYWdlID0gcGFnZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuQ0hBTkdFX0hBTkRCT09LX1BBR0UsXG4gICAgICAgIHBhZ2U6IHBhZ2UsXG4gICAgfTtcbn1cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvYWN0aW9ucy9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBO0FBQ0E7QUFEQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///630\n");

/***/ }),

/***/ 631:
/* no static exports found */
/* all exports used */
/*!******************************************!*\
  !*** ./frontend/components/PDFViewer.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 4);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _index = __webpack_require__(/*! ../actions/index */ 630);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar PDFViewer = function (_Component) {\n    _inherits(PDFViewer, _Component);\n\n    function PDFViewer(props) {\n        _classCallCheck(this, PDFViewer);\n\n        return _possibleConstructorReturn(this, (PDFViewer.__proto__ || Object.getPrototypeOf(PDFViewer)).call(this, props));\n        // this.state = {\n        //     page: '0'\n        // }\n        // this.goToPage = this.goToPage(this);\n    }\n\n    _createClass(PDFViewer, [{\n        key: 'goToPage',\n        value: function goToPage(page) {\n            // alert('You need to implement this.');\n            // const { changePage } = this.props;\n            // changePage(page);\n\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            //const { page } = this.state;\n            return _react2.default.createElement(\n                'div',\n                null,\n                'hello'\n            );\n        }\n    }]);\n\n    return PDFViewer;\n}(Component);\n\nPDFViewer.propTypes = {\n    page: _propTypes2.default.string\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {};\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n    return {\n        // changePage: page => {\n        //     /**\n        //      * TODO (5)\n        //      *\n        //      * Uncomment this line and call your imported action creator here\n        //      */\n        //     dispatch(changeHandbookPage(page));\n        // }\n    };\n};\n\nexports.default = connect(mapStateToProps, mapDispatchToProps)(PDFViewer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjMxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvUERGVmlld2VyLmpzPzA1ODQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjaGFuZ2VIYW5kYm9va1BhZ2UgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuY2xhc3MgUERGVmlld2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIC8vIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIC8vICAgICBwYWdlOiAnMCdcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyB0aGlzLmdvVG9QYWdlID0gdGhpcy5nb1RvUGFnZSh0aGlzKTtcbiAgICB9XG5cbiAgICBnb1RvUGFnZShwYWdlKSB7XG4gICAgICAgIC8vIGFsZXJ0KCdZb3UgbmVlZCB0byBpbXBsZW1lbnQgdGhpcy4nKTtcbiAgICAgICAgLy8gY29uc3QgeyBjaGFuZ2VQYWdlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICAvLyBjaGFuZ2VQYWdlKHBhZ2UpO1xuXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvL2NvbnN0IHsgcGFnZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgaGVsbG9cbiAgICAgICAgICAgICAgICB7Lyo8ZGl2PiovfVxuICAgICAgICAgICAgICAgICAgIHsvKntwYWdlfSovfVxuICAgICAgICAgICAgICAgIHsvKjwvZGl2PiovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgKTt9XG5cbn1cblxuXG5QREZWaWV3ZXIucHJvcFR5cGVzID0ge1xuICAgIHBhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHt9O1xufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gY2hhbmdlUGFnZTogcGFnZSA9PiB7XG4gICAgICAgIC8vICAgICAvKipcbiAgICAgICAgLy8gICAgICAqIFRPRE8gKDUpXG4gICAgICAgIC8vICAgICAgKlxuICAgICAgICAvLyAgICAgICogVW5jb21tZW50IHRoaXMgbGluZSBhbmQgY2FsbCB5b3VyIGltcG9ydGVkIGFjdGlvbiBjcmVhdG9yIGhlcmVcbiAgICAgICAgLy8gICAgICAqL1xuICAgICAgICAvLyAgICAgZGlzcGF0Y2goY2hhbmdlSGFuZGJvb2tQYWdlKHBhZ2UpKTtcbiAgICAgICAgLy8gfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUERGVmlld2VyKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvY29tcG9uZW50cy9QREZWaWV3ZXIuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBTUE7Ozs7QUF6QkE7QUFDQTtBQTZCQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///631\n");

/***/ })

})