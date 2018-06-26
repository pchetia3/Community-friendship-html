webpackHotUpdate(0,{

/***/ 332:
/* no static exports found */
/* all exports used */
/*!******************************************!*\
  !*** ./frontend/components/PDFViewer.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ 24);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 4);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _index = __webpack_require__(/*! ../actions/index */ 330);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar PDFViewer = function (_Component) {\n    _inherits(PDFViewer, _Component);\n\n    function PDFViewer(props) {\n        _classCallCheck(this, PDFViewer);\n\n        var _this = _possibleConstructorReturn(this, (PDFViewer.__proto__ || Object.getPrototypeOf(PDFViewer)).call(this, props));\n\n        _this.state = {\n            page: '0'\n        };\n        _this.goToPage = _this.goToPage.bind(_this);\n        return _this;\n    }\n\n    _createClass(PDFViewer, [{\n        key: 'goToPage',\n        value: function goToPage(page) {\n            var changePage = this.props.changePage;\n\n            this.setState({ page: page });\n            //changePage(page);\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            var page = this.state.page;\n\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    'h1',\n                    null,\n                    'pdf page'\n                ),\n                _react2.default.createElement(\n                    'button',\n                    { onClick: function onClick() {\n                            return _this2.goToPage(2);\n                        } },\n                    ' go to page 2'\n                )\n            );\n        }\n    }]);\n\n    return PDFViewer;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {};\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n    return {\n        changePage: function changePage(page) {\n            /**\n             * TODO (5)\n             *\n             * Uncomment this line and call your imported action creator here\n             */\n            dispatch((0, _index.changeHandbookPage)(page));\n        }\n    };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PDFViewer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzMyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvUERGVmlld2VyLmpzPzA1ODQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY2hhbmdlSGFuZGJvb2tQYWdlIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbmNsYXNzIFBERlZpZXdlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcGFnZTogJzAnXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nb1RvUGFnZSA9IHRoaXMuZ29Ub1BhZ2UuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBnb1RvUGFnZShwYWdlKSB7XG4gICAgICAgIGNvbnN0IHsgY2hhbmdlUGFnZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cGFnZTogcGFnZX0pO1xuICAgICAgICAvL2NoYW5nZVBhZ2UocGFnZSk7XG5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgcGFnZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxPnBkZiBwYWdlPC9oMT5cbiAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5nb1RvUGFnZSgyKX0+IGdvIHRvIHBhZ2UgMjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIHsvKjxvYmplY3QgZGF0YT1cIm1hcC5wZGYjcGFnZT17cGFnZX1cIiB0eXBlPVwiYXBwbGljYXRpb24vcGRmXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiODAwcHhcIj4qL31cbiAgICAgICAgICAgICAgICAgICAgey8qPGlmcmFtZSBzcmM9XCJtYXAucGRmI3BhZ2U9e3BhZ2V9XCIgc3R5bGU9XCJib3JkZXI6IG5vbmU7XCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qVGhpcyBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgUERGcy4gUGxlYXNlIGRvd25sb2FkIHRoZSBQREYgdG8gdmlldyBpdDogPGEgaHJlZj1cIm1hcC5wZGZcIj5Eb3dubG9hZCBQREY8L2E+Ki99XG4gICAgICAgICAgICAgICAgICAgIHsvKjwvaWZyYW1lPiovfVxuICAgICAgICAgICAgICAgIHsvKjwvb2JqZWN0PiovfVxuICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICk7fVxuXG59XG5cblxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHt9O1xufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2hhbmdlUGFnZTogcGFnZSA9PiB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRPRE8gKDUpXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogVW5jb21tZW50IHRoaXMgbGluZSBhbmQgY2FsbCB5b3VyIGltcG9ydGVkIGFjdGlvbiBjcmVhdG9yIGhlcmVcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZGlzcGF0Y2goY2hhbmdlSGFuZGJvb2tQYWdlKHBhZ2UpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUERGVmlld2VyKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvY29tcG9uZW50cy9QREZWaWV3ZXIuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQTtBQU1BO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBV0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///332\n");

/***/ })

})