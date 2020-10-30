webpackHotUpdate_N_E("pages/notes",{

/***/ "./pages/notes/index.jsx":
/*!*******************************!*\
  !*** ./pages/notes/index.jsx ***!
  \*******************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\hp\\next.js-intro\\pages\\notes\\index.jsx",
    _this = undefined;

/** @jsxRuntime classic */

/** @jsx jsx */


var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var notes = _ref.notes;
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    sx: {
      variant: "containers.page"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    },
    __self: _this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    },
    __self: _this
  }, "My Notes"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    sx: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    },
    __self: _this
  }, "notes.map((note) => (", Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    sx: {
      width: "33%",
      p: 2
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    },
    __self: _this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    key: note.id,
    href: "/notes/[id]",
    as: "/notes/".concat(note.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    },
    __self: _this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
    sx: {
      textDecoration: "none",
      cursor: "pointer"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    },
    __self: _this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    sx: {
      variant: "containers.card"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 15
    },
    __self: _this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    },
    __self: _this
  }, note.title))))), "))}"));
});

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbm90ZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIm5vdGVzIiwidmFyaWFudCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJmbGV4V3JhcCIsIndpZHRoIiwicCIsIm5vdGUiLCJpZCIsInRleHREZWNvcmF0aW9uIiwiY3Vyc29yIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBO0FBQ0E7QUFDQTs7QUFFZSwrRUFBZTtBQUFBLE1BQVpBLEtBQVksUUFBWkEsS0FBWTtBQUM1QixTQUNFO0FBQUssTUFBRSxFQUFFO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFHRTtBQUNFLE1BQUUsRUFBRTtBQUNGQyxhQUFPLEVBQUUsTUFEUDtBQUVGQyxvQkFBYyxFQUFFLGVBRmQ7QUFHRkMsZ0JBQVUsRUFBRSxRQUhWO0FBSUZDLGNBQVEsRUFBRTtBQUpSLEtBRE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFTRTtBQUFLLE1BQUUsRUFBRTtBQUFFQyxXQUFLLEVBQUUsS0FBVDtBQUFnQkMsT0FBQyxFQUFFO0FBQW5CLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLGdEQUFEO0FBQU0sT0FBRyxFQUFFQyxJQUFJLENBQUNDLEVBQWhCO0FBQW9CLFFBQUksRUFBQyxhQUF6QjtBQUF1QyxNQUFFLG1CQUFZRCxJQUFJLENBQUNDLEVBQWpCLENBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLE1BQUUsRUFBRTtBQUFFQyxvQkFBYyxFQUFFLE1BQWxCO0FBQTBCQyxZQUFNLEVBQUU7QUFBbEMsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxNQUFFLEVBQUU7QUFBRVYsYUFBTyxFQUFFO0FBQVgsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFTTyxJQUFJLENBQUNJLEtBQWQsQ0FERixDQURGLENBREYsQ0FERixDQVRGLFFBSEYsQ0FERjtBQTBCRCxDQTNCRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ub3Rlcy4yOTA4YzlmNmMyOTY0YTk4MmU5MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cclxuLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gXCJ0aGVtZS11aVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoeyBub3RlcyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3g9e3sgdmFyaWFudDogXCJjb250YWluZXJzLnBhZ2VcIiB9fT5cclxuICAgICAgPGgxPk15IE5vdGVzPC9oMT5cclxuXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzeD17e1xyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICBub3Rlcy5tYXAoKG5vdGUpID0+IChcclxuICAgICAgICA8ZGl2IHN4PXt7IHdpZHRoOiBcIjMzJVwiLCBwOiAyIH19PlxyXG4gICAgICAgICAgPExpbmsga2V5PXtub3RlLmlkfSBocmVmPVwiL25vdGVzL1tpZF1cIiBhcz17YC9ub3Rlcy8ke25vdGUuaWR9YH0+XHJcbiAgICAgICAgICAgIDxhIHN4PXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICA8ZGl2IHN4PXt7IHZhcmlhbnQ6IFwiY29udGFpbmVycy5jYXJkXCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPntub3RlLnRpdGxlfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvbm90ZS9gKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBub3RlczogZGF0YSB9LFxyXG4gIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==