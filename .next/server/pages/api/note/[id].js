module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/note/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/note/[id].js":
/*!********************************!*\
  !*** ./pages/api/note/[id].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ "next-connect");
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/data/data */ "./src/data/data.js");
/* harmony import */ var _src_data_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_data_data__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const getNote = id => _src_data_data__WEBPACK_IMPORTED_MODULE_1___default.a.find(n => n.id === parseInt(id));

const handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()().get((req, res) => {
  const note = getNote(req.query.id);

  if (!note) {
    res.status(404);
    res.end();
    return;
  }

  res.json({
    data: note
  });
}).patch((req, res) => {
  const note = getNote(req.query.id);

  if (!note) {
    res.status(404);
    res.end();
    return;
  }

  const i = _src_data_data__WEBPACK_IMPORTED_MODULE_1___default.a.findIndex(n => n.id === parseInt(req.query.id));

  const updated = _objectSpread(_objectSpread({}, note), req.body);

  _src_data_data__WEBPACK_IMPORTED_MODULE_1___default.a[i] = updated;
  res.json({
    data: updated
  });
}).delete((req, res) => {
  const note = getNote(req.query.id);

  if (!note) {
    res.status(404);
    res.end();
    return;
  }

  const i = _src_data_data__WEBPACK_IMPORTED_MODULE_1___default.a.findIndex(n => n.id === parseInt(req.query.id));
  _src_data_data__WEBPACK_IMPORTED_MODULE_1___default.a.splice(i, 1);
  res.json({
    data: req.query.id
  });
});
/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ "./src/data/data.js":
/*!**************************!*\
  !*** ./src/data/data.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

const notes = [];
module.exports = notes;

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-connect");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL25vdGUvLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2RhdGEuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1jb25uZWN0XCIiXSwibmFtZXMiOlsiZ2V0Tm90ZSIsImlkIiwibm90ZXMiLCJmaW5kIiwibiIsInBhcnNlSW50IiwiaGFuZGxlciIsIm5jIiwiZ2V0IiwicmVxIiwicmVzIiwibm90ZSIsInF1ZXJ5Iiwic3RhdHVzIiwiZW5kIiwianNvbiIsImRhdGEiLCJwYXRjaCIsImkiLCJmaW5kSW5kZXgiLCJ1cGRhdGVkIiwiYm9keSIsImRlbGV0ZSIsInNwbGljZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBOztBQUVBLE1BQU1BLE9BQU8sR0FBSUMsRUFBRCxJQUFRQyxxREFBSyxDQUFDQyxJQUFOLENBQVlDLENBQUQsSUFBT0EsQ0FBQyxDQUFDSCxFQUFGLEtBQVNJLFFBQVEsQ0FBQ0osRUFBRCxDQUFuQyxDQUF4Qjs7QUFFQSxNQUFNSyxPQUFPLEdBQUdDLG1EQUFFLEdBQ2ZDLEdBRGEsQ0FDVCxDQUFDQyxHQUFELEVBQU1DLEdBQU4sS0FBYztBQUNqQixRQUFNQyxJQUFJLEdBQUdYLE9BQU8sQ0FBQ1MsR0FBRyxDQUFDRyxLQUFKLENBQVVYLEVBQVgsQ0FBcEI7O0FBRUEsTUFBSSxDQUFDVSxJQUFMLEVBQVc7QUFDVEQsT0FBRyxDQUFDRyxNQUFKLENBQVcsR0FBWDtBQUNBSCxPQUFHLENBQUNJLEdBQUo7QUFDQTtBQUNEOztBQUVESixLQUFHLENBQUNLLElBQUosQ0FBUztBQUFFQyxRQUFJLEVBQUVMO0FBQVIsR0FBVDtBQUNELENBWGEsRUFZYk0sS0FaYSxDQVlQLENBQUNSLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQ25CLFFBQU1DLElBQUksR0FBR1gsT0FBTyxDQUFDUyxHQUFHLENBQUNHLEtBQUosQ0FBVVgsRUFBWCxDQUFwQjs7QUFFQSxNQUFJLENBQUNVLElBQUwsRUFBVztBQUNURCxPQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYO0FBQ0FILE9BQUcsQ0FBQ0ksR0FBSjtBQUNBO0FBQ0Q7O0FBRUQsUUFBTUksQ0FBQyxHQUFHaEIscURBQUssQ0FBQ2lCLFNBQU4sQ0FBaUJmLENBQUQsSUFBT0EsQ0FBQyxDQUFDSCxFQUFGLEtBQVNJLFFBQVEsQ0FBQ0ksR0FBRyxDQUFDRyxLQUFKLENBQVVYLEVBQVgsQ0FBeEMsQ0FBVjs7QUFDQSxRQUFNbUIsT0FBTyxtQ0FBUVQsSUFBUixHQUFpQkYsR0FBRyxDQUFDWSxJQUFyQixDQUFiOztBQUVBbkIsdURBQUssQ0FBQ2dCLENBQUQsQ0FBTCxHQUFXRSxPQUFYO0FBQ0FWLEtBQUcsQ0FBQ0ssSUFBSixDQUFTO0FBQUVDLFFBQUksRUFBRUk7QUFBUixHQUFUO0FBQ0QsQ0ExQmEsRUEyQmJFLE1BM0JhLENBMkJOLENBQUNiLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQ3BCLFFBQU1DLElBQUksR0FBR1gsT0FBTyxDQUFDUyxHQUFHLENBQUNHLEtBQUosQ0FBVVgsRUFBWCxDQUFwQjs7QUFFQSxNQUFJLENBQUNVLElBQUwsRUFBVztBQUNURCxPQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYO0FBQ0FILE9BQUcsQ0FBQ0ksR0FBSjtBQUNBO0FBQ0Q7O0FBQ0QsUUFBTUksQ0FBQyxHQUFHaEIscURBQUssQ0FBQ2lCLFNBQU4sQ0FBaUJmLENBQUQsSUFBT0EsQ0FBQyxDQUFDSCxFQUFGLEtBQVNJLFFBQVEsQ0FBQ0ksR0FBRyxDQUFDRyxLQUFKLENBQVVYLEVBQVgsQ0FBeEMsQ0FBVjtBQUVBQyx1REFBSyxDQUFDcUIsTUFBTixDQUFhTCxDQUFiLEVBQWdCLENBQWhCO0FBRUFSLEtBQUcsQ0FBQ0ssSUFBSixDQUFTO0FBQUVDLFFBQUksRUFBRVAsR0FBRyxDQUFDRyxLQUFKLENBQVVYO0FBQWxCLEdBQVQ7QUFDRCxDQXhDYSxDQUFoQjtBQTBDZUssc0VBQWYsRTs7Ozs7Ozs7Ozs7QUMvQ0EsTUFBTUosS0FBSyxHQUFHLEVBQWQ7QUFFQXNCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnZCLEtBQWpCLEM7Ozs7Ozs7Ozs7O0FDRkEseUMiLCJmaWxlIjoicGFnZXMvYXBpL25vdGUvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL25vdGUvW2lkXS5qc1wiKTtcbiIsImltcG9ydCBuYyBmcm9tIFwibmV4dC1jb25uZWN0XCI7XHJcbmltcG9ydCBub3RlcyBmcm9tIFwiLi4vLi4vLi4vc3JjL2RhdGEvZGF0YVwiO1xyXG5cclxuY29uc3QgZ2V0Tm90ZSA9IChpZCkgPT4gbm90ZXMuZmluZCgobikgPT4gbi5pZCA9PT0gcGFyc2VJbnQoaWQpKTtcclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBuYygpXHJcbiAgLmdldCgocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IG5vdGUgPSBnZXROb3RlKHJlcS5xdWVyeS5pZCk7XHJcblxyXG4gICAgaWYgKCFub3RlKSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoNDA0KTtcclxuICAgICAgcmVzLmVuZCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcmVzLmpzb24oeyBkYXRhOiBub3RlIH0pO1xyXG4gIH0pXHJcbiAgLnBhdGNoKChyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3Qgbm90ZSA9IGdldE5vdGUocmVxLnF1ZXJ5LmlkKTtcclxuXHJcbiAgICBpZiAoIW5vdGUpIHtcclxuICAgICAgcmVzLnN0YXR1cyg0MDQpO1xyXG4gICAgICByZXMuZW5kKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpID0gbm90ZXMuZmluZEluZGV4KChuKSA9PiBuLmlkID09PSBwYXJzZUludChyZXEucXVlcnkuaWQpKTtcclxuICAgIGNvbnN0IHVwZGF0ZWQgPSB7IC4uLm5vdGUsIC4uLnJlcS5ib2R5IH07XHJcblxyXG4gICAgbm90ZXNbaV0gPSB1cGRhdGVkO1xyXG4gICAgcmVzLmpzb24oeyBkYXRhOiB1cGRhdGVkIH0pO1xyXG4gIH0pXHJcbiAgLmRlbGV0ZSgocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IG5vdGUgPSBnZXROb3RlKHJlcS5xdWVyeS5pZCk7XHJcblxyXG4gICAgaWYgKCFub3RlKSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoNDA0KTtcclxuICAgICAgcmVzLmVuZCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBpID0gbm90ZXMuZmluZEluZGV4KChuKSA9PiBuLmlkID09PSBwYXJzZUludChyZXEucXVlcnkuaWQpKTtcclxuXHJcbiAgICBub3Rlcy5zcGxpY2UoaSwgMSk7XHJcblxyXG4gICAgcmVzLmpzb24oeyBkYXRhOiByZXEucXVlcnkuaWQgfSk7XHJcbiAgfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG4iLCJjb25zdCBub3RlcyA9IFtdO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBub3RlcztcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1jb25uZWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=