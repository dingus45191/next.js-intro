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



var Notes = function Notes(_ref) {
  var notes = _ref.notes;
  // const notes = new Array(15)
  //   .fill(1)
  //   .map((e, i) => ({ id: i, title: `This is my note ${i}` }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbm90ZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIk5vdGVzIiwibm90ZXMiLCJ2YXJpYW50IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImZsZXhXcmFwIiwibWFwIiwibm90ZSIsIndpZHRoIiwicCIsImlkIiwidGV4dERlY29yYXRpb24iLCJjdXJzb3IiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQWU7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDM0I7QUFDQTtBQUNBO0FBRUEsU0FDRTtBQUFLLE1BQUUsRUFBRTtBQUFFQyxhQUFPLEVBQUU7QUFBWCxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBR0U7QUFDRSxNQUFFLEVBQUU7QUFDRkMsYUFBTyxFQUFFLE1BRFA7QUFFRkMsb0JBQWMsRUFBRSxlQUZkO0FBR0ZDLGdCQUFVLEVBQUUsUUFIVjtBQUlGQyxjQUFRLEVBQUU7QUFKUixLQUROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRR0wsS0FBSyxDQUFDTSxHQUFOLENBQVUsVUFBQ0MsSUFBRDtBQUFBLFdBQ1Q7QUFBSyxRQUFFLEVBQUU7QUFBRUMsYUFBSyxFQUFFLEtBQVQ7QUFBZ0JDLFNBQUMsRUFBRTtBQUFuQixPQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxxREFBQyxnREFBRDtBQUFNLFNBQUcsRUFBRUYsSUFBSSxDQUFDRyxFQUFoQjtBQUFvQixVQUFJLEVBQUMsYUFBekI7QUFBdUMsUUFBRSxtQkFBWUgsSUFBSSxDQUFDRyxFQUFqQixDQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxRQUFFLEVBQUU7QUFBRUMsc0JBQWMsRUFBRSxNQUFsQjtBQUEwQkMsY0FBTSxFQUFFO0FBQWxDLE9BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssUUFBRSxFQUFFO0FBQUVYLGVBQU8sRUFBRTtBQUFYLE9BQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBU00sSUFBSSxDQUFDTSxLQUFkLENBREYsQ0FERixDQURGLENBREYsQ0FEUztBQUFBLEdBQVYsQ0FSSCxDQUhGLENBREY7QUEwQkQsQ0EvQkQ7O0tBQU1kLEs7O0FBZ0NTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ub3Rlcy4zM2RiZGY0MzIyOTQ5Y2EzZDVhOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cclxuLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gXCJ0aGVtZS11aVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBOb3RlcyA9ICh7IG5vdGVzIH0pID0+IHtcclxuICAvLyBjb25zdCBub3RlcyA9IG5ldyBBcnJheSgxNSlcclxuICAvLyAgIC5maWxsKDEpXHJcbiAgLy8gICAubWFwKChlLCBpKSA9PiAoeyBpZDogaSwgdGl0bGU6IGBUaGlzIGlzIG15IG5vdGUgJHtpfWAgfSkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzeD17eyB2YXJpYW50OiBcImNvbnRhaW5lcnMucGFnZVwiIH19PlxyXG4gICAgICA8aDE+TXkgTm90ZXM8L2gxPlxyXG5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN4PXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtub3Rlcy5tYXAoKG5vdGUpID0+IChcclxuICAgICAgICAgIDxkaXYgc3g9e3sgd2lkdGg6IFwiMzMlXCIsIHA6IDIgfX0+XHJcbiAgICAgICAgICAgIDxMaW5rIGtleT17bm90ZS5pZH0gaHJlZj1cIi9ub3Rlcy9baWRdXCIgYXM9e2Avbm90ZXMvJHtub3RlLmlkfWB9PlxyXG4gICAgICAgICAgICAgIDxhIHN4PXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3g9e3sgdmFyaWFudDogXCJjb250YWluZXJzLmNhcmRcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz57bm90ZS50aXRsZX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTm90ZXM7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL25vdGUvYCk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgbm90ZXM6IGRhdGEgfSxcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=