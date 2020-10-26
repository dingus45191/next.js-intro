webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme */ "./theme.js");
/* harmony import */ var _src_components_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/nav */ "./src/components/nav.jsx");

var _jsxFileName = "C:\\Users\\hp\\next.js-intro\\pages\\_app.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/** @jsxRuntime classic */

/** @jsx jsx */




function App(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: _theme__WEBPACK_IMPORTED_MODULE_2__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_src_components_nav__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    },
    __self: this
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Component, _objectSpread(_objectSpread({}, pageProps), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    },
    __self: this
  }))));
}
_c = App;

var _c;

$RefreshReg$(_c, "App");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./theme.js":
/*!******************!*\
  !*** ./theme.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _theme_ui_presets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @theme-ui/presets */ "./node_modules/@theme-ui/presets/dist/index.esm.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var theme = _objectSpread(_objectSpread({}, _theme_ui_presets__WEBPACK_IMPORTED_MODULE_1__["roboto"]), {}, {
  colors: _objectSpread(_objectSpread({}, _theme_ui_presets__WEBPACK_IMPORTED_MODULE_1__["roboto"].colors), {}, {
    background: 'yellow'
  }),
  containers: {
    card: {
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      border: '1px solid',
      borderColor: 'muted',
      borderRadius: '4px',
      p: 2
    },
    page: {
      width: '100%',
      maxWidth: '960px',
      m: 0,
      mx: 'auto'
    }
  },
  styles: _objectSpread({}, _theme_ui_presets__WEBPACK_IMPORTED_MODULE_1__["roboto"].styles),
  "plugins": [["@babel/plugin-transform-react-jsx", {
    "throwIfNamespace": false,
    // defaults to true
    "runtime": "automatic",
    // defaults to classic
    "importSource": "theme-ui" // defaults to react

  }]]
});

console.log(theme);
/* harmony default export */ __webpack_exports__["default"] = (theme);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL3RoZW1lLmpzIl0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInRoZW1lIiwicm9ib3RvIiwiY29sb3JzIiwiYmFja2dyb3VuZCIsImNvbnRhaW5lcnMiLCJjYXJkIiwiYm94U2hhZG93IiwiYm9yZGVyIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJwIiwicGFnZSIsIndpZHRoIiwibWF4V2lkdGgiLCJtIiwibXgiLCJzdHlsZXMiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxHQUFULE9BQXVDO0FBQUEsTUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTtBQUNwRCxTQUNFLHFEQUFDLHNEQUFEO0FBQWUsU0FBSyxFQUFFQyw4Q0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxxREFBQyxTQUFELGtDQUFlRCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FGRixDQURGLENBREY7QUFRRDtLQVR1QkYsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B4Qjs7QUFFQSxJQUFNRyxLQUFLLG1DQUNKQyx3REFESTtBQUVQQyxRQUFNLGtDQUNDRCx3REFBTSxDQUFDQyxNQURSO0FBRUZDLGNBQVUsRUFBRTtBQUZWLElBRkM7QUFNVEMsWUFBVSxFQUFFO0FBQ1ZDLFFBQUksRUFBRTtBQUNKQyxlQUFTLEVBQUUsd0RBRFA7QUFFSkMsWUFBTSxFQUFFLFdBRko7QUFHSkMsaUJBQVcsRUFBRSxPQUhUO0FBSUpDLGtCQUFZLEVBQUUsS0FKVjtBQUtKQyxPQUFDLEVBQUU7QUFMQyxLQURJO0FBUVZDLFFBQUksRUFBRTtBQUNKQyxXQUFLLEVBQUUsTUFESDtBQUVKQyxjQUFRLEVBQUUsT0FGTjtBQUdKQyxPQUFDLEVBQUUsQ0FIQztBQUlKQyxRQUFFLEVBQUU7QUFKQTtBQVJJLEdBTkg7QUFxQlRDLFFBQU0sb0JBQ0RmLHdEQUFNLENBQUNlLE1BRE4sQ0FyQkc7QUF3QlAsYUFBVyxDQUNYLENBQ0UsbUNBREYsRUFFRTtBQUNFLHdCQUFvQixLQUR0QjtBQUM2QjtBQUMzQixlQUFXLFdBRmI7QUFFMEI7QUFDeEIsb0JBQWdCLFVBSGxCLENBRzZCOztBQUg3QixHQUZGLENBRFc7QUF4QkosRUFBWDs7QUFvQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZbEIsS0FBWjtBQUVlQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjkzNDZlOWFhYzRkNzZiNTJhZWZmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xyXG4vKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknXHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICd0aGVtZS11aSdcclxuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3RoZW1lJ1xyXG5pbXBvcnQgTmF2IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL25hdidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8TmF2IC8+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L2Rpdj4gICAgICBcclxuICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICApXHJcbn0iLCJpbXBvcnQgeyByb2JvdG8gfSBmcm9tICdAdGhlbWUtdWkvcHJlc2V0cydcclxuXHJcbmNvbnN0IHRoZW1lID0ge1xyXG4gICAgLi4ucm9ib3RvLFxyXG4gICAgY29sb3JzOiB7XHJcbiAgICAgICAgLi4ucm9ib3RvLmNvbG9ycyxcclxuICAgICAgICBiYWNrZ3JvdW5kOiAneWVsbG93J1xyXG4gICAgfSxcclxuICBjb250YWluZXJzOiB7XHJcbiAgICBjYXJkOiB7XHJcbiAgICAgIGJveFNoYWRvdzogJzAgMXB4IDNweCByZ2JhKDAsMCwwLDAuMTIpLCAwIDFweCAycHggcmdiYSgwLDAsMCwwLjI0KScsXHJcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCcsXHJcbiAgICAgIGJvcmRlckNvbG9yOiAnbXV0ZWQnLFxyXG4gICAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxyXG4gICAgICBwOiAyLFxyXG4gICAgfSxcclxuICAgIHBhZ2U6IHtcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgbWF4V2lkdGg6ICc5NjBweCcsXHJcbiAgICAgIG06IDAsXHJcbiAgICAgIG14OiAnYXV0bycsXHJcbiAgICB9XHJcbiAgfSxcclxuICBzdHlsZXM6IHtcclxuICAgIC4uLnJvYm90by5zdHlsZXNcclxuICAgIH0sXHJcbiAgICBcInBsdWdpbnNcIjogW1xyXG4gICAgW1xyXG4gICAgICBcIkBiYWJlbC9wbHVnaW4tdHJhbnNmb3JtLXJlYWN0LWpzeFwiLFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJ0aHJvd0lmTmFtZXNwYWNlXCI6IGZhbHNlLCAvLyBkZWZhdWx0cyB0byB0cnVlXHJcbiAgICAgICAgXCJydW50aW1lXCI6IFwiYXV0b21hdGljXCIsIC8vIGRlZmF1bHRzIHRvIGNsYXNzaWNcclxuICAgICAgICBcImltcG9ydFNvdXJjZVwiOiBcInRoZW1lLXVpXCIgLy8gZGVmYXVsdHMgdG8gcmVhY3RcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIF1cclxufVxyXG5cclxuY29uc29sZS5sb2codGhlbWUpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGhlbWUiXSwic291cmNlUm9vdCI6IiJ9