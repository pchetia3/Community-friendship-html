webpackHotUpdate(0,{

/***/ 332:
/* no static exports found */
/* all exports used */
/*!******************************************!*\
  !*** ./frontend/components/PDFViewer.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 4);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _index = __webpack_require__(/*! ../actions/index */ 330);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar PDFViewer = function (_Component) {\n    _inherits(PDFViewer, _Component);\n\n    function PDFViewer(props) {\n        _classCallCheck(this, PDFViewer);\n\n        var _this = _possibleConstructorReturn(this, (PDFViewer.__proto__ || Object.getPrototypeOf(PDFViewer)).call(this, props));\n\n        _this.state = {\n            page: '0'\n        };\n        _this.goToPage = _this.goToPage(_this);\n        return _this;\n    }\n\n    _createClass(PDFViewer, [{\n        key: 'goToPage',\n        value: function goToPage(page) {\n            alert('You need to implement this.');\n            var changePage = this.props.changePage;\n\n            changePage(page);\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            //const { page } = this.state;\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    'div',\n                    null,\n                    page\n                )\n            );\n        }\n    }]);\n\n    return PDFViewer;\n}(Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {};\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n    return {\n        // changePage: page => {\n        //     /**\n        //      * TODO (5)\n        //      *\n        //      * Uncomment this line and call your imported action creator here\n        //      */\n        //     dispatch(changeHandbookPage(page));\n        // }\n    };\n};\n\nexports.default = connect(mapStateToProps, mapDispatchToProps)(PDFViewer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzMyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvUERGVmlld2VyLmpzPzA1ODQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjaGFuZ2VIYW5kYm9va1BhZ2UgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuY2xhc3MgUERGVmlld2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBwYWdlOiAnMCdcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdvVG9QYWdlID0gdGhpcy5nb1RvUGFnZSh0aGlzKTtcbiAgICB9XG5cbiAgICBnb1RvUGFnZShwYWdlKSB7XG4gICAgICAgIGFsZXJ0KCdZb3UgbmVlZCB0byBpbXBsZW1lbnQgdGhpcy4nKTtcbiAgICAgICAgY29uc3QgeyBjaGFuZ2VQYWdlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjaGFuZ2VQYWdlKHBhZ2UpO1xuXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvL2NvbnN0IHsgcGFnZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICB7cGFnZX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICk7fVxuXG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcbiAgICByZXR1cm4ge307XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBjaGFuZ2VQYWdlOiBwYWdlID0+IHtcbiAgICAgICAgLy8gICAgIC8qKlxuICAgICAgICAvLyAgICAgICogVE9ETyAoNSlcbiAgICAgICAgLy8gICAgICAqXG4gICAgICAgIC8vICAgICAgKiBVbmNvbW1lbnQgdGhpcyBsaW5lIGFuZCBjYWxsIHlvdXIgaW1wb3J0ZWQgYWN0aW9uIGNyZWF0b3IgaGVyZVxuICAgICAgICAvLyAgICAgICovXG4gICAgICAgIC8vICAgICBkaXNwYXRjaChjaGFuZ2VIYW5kYm9va1BhZ2UocGFnZSkpO1xuICAgICAgICAvLyB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShQREZWaWV3ZXIpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9jb21wb25lbnRzL1BERlZpZXdlci5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEE7QUFNQTtBQUNBOzs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBRUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFLQTs7OztBQXhCQTtBQUNBO0FBMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///332\n");

/***/ })

})