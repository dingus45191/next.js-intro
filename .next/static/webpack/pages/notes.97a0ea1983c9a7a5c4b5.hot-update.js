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
  }, notes.map(function (note) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      sx: {
        width: "33%",
        p: 2
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      },
      __self: _this
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      key: note.id,
      href: "/notes/[id]",
      as: "/notes/".concat(note.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
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
        columnNumber: 15
      },
      __self: _this
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      sx: {
        variant: "containers.card"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      },
      __self: _this
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 19
      },
      __self: _this
    }, note.title)))));
  })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbm90ZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIm5vdGVzIiwidmFyaWFudCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJmbGV4V3JhcCIsIm1hcCIsIm5vdGUiLCJ3aWR0aCIsInAiLCJpZCIsInRleHREZWNvcmF0aW9uIiwiY3Vyc29yIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBO0FBQ0E7QUFDQTs7QUFFZSwrRUFBZTtBQUFBLE1BQVpBLEtBQVksUUFBWkEsS0FBWTtBQUM1QixTQUNFO0FBQUssTUFBRSxFQUFFO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFHRTtBQUNFLE1BQUUsRUFBRTtBQUNGQyxhQUFPLEVBQUUsTUFEUDtBQUVGQyxvQkFBYyxFQUFFLGVBRmQ7QUFHRkMsZ0JBQVUsRUFBRSxRQUhWO0FBSUZDLGNBQVEsRUFBRTtBQUpSLEtBRE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFHTCxLQUFLLENBQUNNLEdBQU4sQ0FBVSxVQUFDQyxJQUFEO0FBQUEsV0FDVDtBQUFLLFFBQUUsRUFBRTtBQUFFQyxhQUFLLEVBQUUsS0FBVDtBQUFnQkMsU0FBQyxFQUFFO0FBQW5CLE9BQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLHFEQUFDLGdEQUFEO0FBQU0sU0FBRyxFQUFFRixJQUFJLENBQUNHLEVBQWhCO0FBQW9CLFVBQUksRUFBQyxhQUF6QjtBQUF1QyxRQUFFLG1CQUFZSCxJQUFJLENBQUNHLEVBQWpCLENBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLFFBQUUsRUFBRTtBQUFFQyxzQkFBYyxFQUFFLE1BQWxCO0FBQTBCQyxjQUFNLEVBQUU7QUFBbEMsT0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxRQUFFLEVBQUU7QUFBRVgsZUFBTyxFQUFFO0FBQVgsT0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFTTSxJQUFJLENBQUNNLEtBQWQsQ0FERixDQURGLENBREYsQ0FERixDQURTO0FBQUEsR0FBVixDQVJILENBSEYsQ0FERjtBQTBCRCxDQTNCRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ub3Rlcy45N2EwZWExOTgzYzlhN2E1YzRiNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cclxuLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gXCJ0aGVtZS11aVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoeyBub3RlcyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3g9e3sgdmFyaWFudDogXCJjb250YWluZXJzLnBhZ2VcIiB9fT5cclxuICAgICAgPGgxPk15IE5vdGVzPC9oMT5cclxuXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzeD17e1xyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7bm90ZXMubWFwKChub3RlKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IHN4PXt7IHdpZHRoOiBcIjMzJVwiLCBwOiAyIH19PlxyXG4gICAgICAgICAgICA8TGluayBrZXk9e25vdGUuaWR9IGhyZWY9XCIvbm90ZXMvW2lkXVwiIGFzPXtgL25vdGVzLyR7bm90ZS5pZH1gfT5cclxuICAgICAgICAgICAgICA8YSBzeD17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIGN1cnNvcjogXCJwb2ludGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN4PXt7IHZhcmlhbnQ6IFwiY29udGFpbmVycy5jYXJkXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e25vdGUudGl0bGV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL25vdGUvYCk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgbm90ZXM6IGRhdGEgfSxcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=