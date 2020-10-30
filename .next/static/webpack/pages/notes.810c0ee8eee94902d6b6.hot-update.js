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



var Notes = function Notes() {
  var notes = new Array(15).fill(1).map(function (e, i) {
    return {
      id: i,
      title: "This is my note ".concat(i)
    };
  });
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    sx: {
      variant: "containers.page"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    },
    __self: _this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
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
      lineNumber: 15,
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
        lineNumber: 24,
        columnNumber: 11
      },
      __self: _this
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      key: note.id,
      href: "/notes/[id]",
      as: "/notes/".concat(note.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
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
        lineNumber: 26,
        columnNumber: 15
      },
      __self: _this
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      sx: {
        variant: "containers.card"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      },
      __self: _this
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 19
      },
      __self: _this
    }, note.title)))));
  })));
};

_c = Notes;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Notes);

var _c;

$RefreshReg$(_c, "Notes");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbm90ZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIk5vdGVzIiwibm90ZXMiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJlIiwiaSIsImlkIiwidGl0bGUiLCJ2YXJpYW50IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImZsZXhXcmFwIiwibm90ZSIsIndpZHRoIiwicCIsInRleHREZWNvcmF0aW9uIiwiY3Vyc29yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUNsQixNQUFNQyxLQUFLLEdBQUcsSUFBSUMsS0FBSixDQUFVLEVBQVYsRUFDWEMsSUFEVyxDQUNOLENBRE0sRUFFWEMsR0FGVyxDQUVQLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFdBQVc7QUFBRUMsUUFBRSxFQUFFRCxDQUFOO0FBQVNFLFdBQUssNEJBQXFCRixDQUFyQjtBQUFkLEtBQVg7QUFBQSxHQUZPLENBQWQ7QUFJQSxTQUNFO0FBQUssTUFBRSxFQUFFO0FBQUVHLGFBQU8sRUFBRTtBQUFYLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFHRTtBQUNFLE1BQUUsRUFBRTtBQUNGQyxhQUFPLEVBQUUsTUFEUDtBQUVGQyxvQkFBYyxFQUFFLGVBRmQ7QUFHRkMsZ0JBQVUsRUFBRSxRQUhWO0FBSUZDLGNBQVEsRUFBRTtBQUpSLEtBRE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFHWixLQUFLLENBQUNHLEdBQU4sQ0FBVSxVQUFDVSxJQUFEO0FBQUEsV0FDVDtBQUFLLFFBQUUsRUFBRTtBQUFFQyxhQUFLLEVBQUUsS0FBVDtBQUFnQkMsU0FBQyxFQUFFO0FBQW5CLE9BQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLHFEQUFDLGdEQUFEO0FBQU0sU0FBRyxFQUFFRixJQUFJLENBQUNQLEVBQWhCO0FBQW9CLFVBQUksRUFBQyxhQUF6QjtBQUF1QyxRQUFFLG1CQUFZTyxJQUFJLENBQUNQLEVBQWpCLENBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLFFBQUUsRUFBRTtBQUFFVSxzQkFBYyxFQUFFLE1BQWxCO0FBQTBCQyxjQUFNLEVBQUU7QUFBbEMsT0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxRQUFFLEVBQUU7QUFBRVQsZUFBTyxFQUFFO0FBQVgsT0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFTSyxJQUFJLENBQUNOLEtBQWQsQ0FERixDQURGLENBREYsQ0FERixDQURTO0FBQUEsR0FBVixDQVJILENBSEYsQ0FERjtBQTBCRCxDQS9CRDs7S0FBTVIsSzs7QUFnQ1NBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL25vdGVzLjgxMGMwZWU4ZWVlOTQ5MDJkNmI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xyXG4vKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4IH0gZnJvbSBcInRoZW1lLXVpXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmNvbnN0IE5vdGVzID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5vdGVzID0gbmV3IEFycmF5KDE1KVxyXG4gICAgLmZpbGwoMSlcclxuICAgIC5tYXAoKGUsIGkpID0+ICh7IGlkOiBpLCB0aXRsZTogYFRoaXMgaXMgbXkgbm90ZSAke2l9YCB9KSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN4PXt7IHZhcmlhbnQ6IFwiY29udGFpbmVycy5wYWdlXCIgfX0+XHJcbiAgICAgIDxoMT5NeSBOb3RlczwvaDE+XHJcblxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3g9e3tcclxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge25vdGVzLm1hcCgobm90ZSkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBzeD17eyB3aWR0aDogXCIzMyVcIiwgcDogMiB9fT5cclxuICAgICAgICAgICAgPExpbmsga2V5PXtub3RlLmlkfSBocmVmPVwiL25vdGVzL1tpZF1cIiBhcz17YC9ub3Rlcy8ke25vdGUuaWR9YH0+XHJcbiAgICAgICAgICAgICAgPGEgc3g9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiLCBjdXJzb3I6IFwicG9pbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzeD17eyB2YXJpYW50OiBcImNvbnRhaW5lcnMuY2FyZFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPntub3RlLnRpdGxlfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBOb3RlcztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvbm90ZS9gKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBub3RlczogZGF0YSB9LFxyXG4gIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==