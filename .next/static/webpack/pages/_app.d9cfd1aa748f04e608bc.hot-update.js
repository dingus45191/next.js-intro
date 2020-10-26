webpackHotUpdate_N_E("pages/_app",{

/***/ "../index.js":
false,

/***/ "./node_modules/@theme-ui/preset-base/dist/index.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/@theme-ui/preset-base/dist/index.esm.js ***!
  \**************************************************************/
/*! exports provided: default, base */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base", function() { return base; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var heading = {
  color: 'text',
  fontFamily: 'heading',
  lineHeight: 'heading',
  fontWeight: 'heading'
};
var base = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    secondary: '#30c',
    muted: '#f6f6f6'
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
    },
    h1: _objectSpread2({}, heading, {
      fontSize: 5
    }),
    h2: _objectSpread2({}, heading, {
      fontSize: 4
    }),
    h3: _objectSpread2({}, heading, {
      fontSize: 3
    }),
    h4: _objectSpread2({}, heading, {
      fontSize: 2
    }),
    h5: _objectSpread2({}, heading, {
      fontSize: 1
    }),
    h6: _objectSpread2({}, heading, {
      fontSize: 0
    }),
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body'
    },
    a: {
      color: 'primary'
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit'
      }
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit'
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    img: {
      maxWidth: '100%'
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (base);

//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@theme-ui/preset-bootstrap/dist/index.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@theme-ui/preset-bootstrap/dist/index.esm.js ***!
  \*******************************************************************/
/*! exports provided: default, baseColors, colors, space, breakpoints, fonts, fontWeights, fontSizes, lineHeights, sizes, radii, shadows, styles, bootstrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseColors", function() { return baseColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "space", function() { return space; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakpoints", function() { return breakpoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fonts", function() { return fonts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontWeights", function() { return fontWeights; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSizes", function() { return fontSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineHeights", function() { return lineHeights; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizes", function() { return sizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radii", function() { return radii; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shadows", function() { return shadows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return bootstrap; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var baseColors = {
  white: '#fff',
  black: '#000',
  gray: ['#fff', // 0 index
  '#f8f9fa', '#e9ecef', '#dee2e6', '#ced4da', '#adb5bd', '#6c757d', '#495057', '#343a40', '#212529'],
  blue: '#007bff',
  indigo: '#6610f2',
  purple: '#6f42c1',
  pink: '#e83e8c',
  red: '#dc3545',
  orange: '#fd7e14',
  yellow: '#ffc107',
  green: '#28a745',
  teal: '#20c997',
  cyan: '#17a2b8' // gray: gray[6],

};
var colors = _objectSpread2({}, baseColors, {
  grayDark: baseColors.gray[8],
  text: baseColors.gray[9],
  background: baseColors.white,
  primary: baseColors.blue,
  secondary: baseColors.gray[6],
  muted: baseColors.gray[3],
  success: baseColors.green,
  info: baseColors.cyan,
  warning: baseColors.yellow,
  danger: baseColors.red,
  light: baseColors.gray[1],
  dark: baseColors.gray[8],
  textMuted: baseColors.gray[6]
});
var space = [0, 0.25, 0.5, 1, 1.5, 3].map(function (n) {
  return n + 'rem';
});
var breakpoints = ['576px', '768px', '992px', '1200px'];
var fonts = {
  body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  heading: 'inherit',
  monospace: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
};
fonts.sans = fonts.body;
var fontWeights = {
  body: 400,
  heading: 500,
  bold: 700,
  light: 300
};
fontWeights.normal = fontWeights.body;
fontWeights.display = fontWeights.light;
var fontSizes = ['0.75rem', // '80%',
'0.875rem', '1rem', '1.25rem', '1.5rem', '1.75rem', '2rem', '2.5rem', '3.5rem', '4.5rem', '5.5rem', '6rem'];
fontSizes.lead = fontSizes[3];
var lineHeights = {
  body: 1.5,
  heading: 1.2
};
var sizes = {
  // container widths
  sm: 540,
  md: 720,
  lg: 960,
  xl: 1140
};
var radii = {
  "default": '0.25rem',
  sm: '0.2rem',
  lg: '0.3rem',
  pill: '50rem'
};
var shadows = {
  "default": '0 .5rem 1rem rgba(0, 0, 0, .15)',
  sm: '0 .125rem .25rem rgba(0, 0, 0, .075)',
  lg: '0 1rem 3rem rgba(0, 0, 0, .175)'
};
var heading = {
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'heading',
  mt: 0,
  mb: 2
};
var display = {
  fontWeight: 'display',
  lineHeight: 'heading'
}; // variants

var typeStyles = {
  heading: heading,
  display: display
};
var styles = {
  root: {
    fontFamily: 'body',
    lineHeight: 'body',
    fontWeight: 'body'
  },
  a: {
    color: 'primary',
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline'
    }
  },
  p: {
    mb: 3,
    lineHeight: 'body'
  },
  h1: _objectSpread2({}, heading, {
    fontSize: 7
  }),
  h2: _objectSpread2({}, heading, {
    fontSize: 6
  }),
  h3: _objectSpread2({}, heading, {
    fontSize: 5
  }),
  h4: _objectSpread2({}, heading, {
    fontSize: 4
  }),
  h5: _objectSpread2({}, heading, {
    fontSize: 3
  }),
  h6: _objectSpread2({}, heading, {
    fontSize: 2
  }),
  blockquote: {
    fontSize: 3,
    mb: 3
  },
  table: {
    // todo
    width: '100%',
    marginBottom: 3,
    color: 'gray.9',
    borderCollapse: 'collapse'
  },
  th: {
    verticalAlign: 'bottom',
    borderTopWidth: 2,
    borderTopStyle: 'solid',
    borderTopColor: 'gray.3',
    borderBottomWidth: 2,
    borderBottomStyle: 'solid',
    borderBottomColor: 'gray.3',
    padding: '.75rem',
    textAlign: 'inherit'
  },
  td: {
    borderBottomWidth: 2,
    borderBottomStyle: 'solid',
    borderBottomColor: 'gray.3',
    verticalAlign: 'top',
    padding: '.75rem'
  },
  inlineCode: {
    color: 'pink'
  },
  img: {
    maxWidth: '100%',
    height: 'auto'
  }
};
var bootstrap = {
  breakpoints: breakpoints,
  colors: colors,
  space: space,
  fonts: fonts,
  fontSizes: fontSizes,
  fontWeights: fontWeights,
  lineHeights: lineHeights,
  sizes: sizes,
  shadows: shadows,
  radii: radii,
  typeStyles: typeStyles,
  styles: styles
};

/* harmony default export */ __webpack_exports__["default"] = (bootstrap);

//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@theme-ui/preset-bulma/dist/index.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@theme-ui/preset-bulma/dist/index.esm.js ***!
  \***************************************************************/
/*! exports provided: default, baseColors, colors, fonts, fontSizes, fontWeights, lineHeights, space, styles, bulma */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseColors", function() { return baseColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fonts", function() { return fonts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSizes", function() { return fontSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontWeights", function() { return fontWeights; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineHeights", function() { return lineHeights; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "space", function() { return space; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bulma", function() { return bulma; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

// Based on https://github.com/jgthms/bulma/blob/master/sass/utilities/initial-variables.sass
// https://github.com/jgthms/bulma/blob/master/sass/base/minireset.sass
// https://github.com/jgthms/bulma/blob/master/sass/base/generic.sass
var baseColors = {
  black: 'hsl(0, 0%, 4%)',
  blackBis: 'hsl(0, 0%, 7%)',
  blackTer: 'hsl(0, 0%, 14%)',
  // (sic)
  greyDarker: 'hsl(0, 0%, 21%)',
  greyDark: 'hsl(0, 0%, 29%)',
  grey: 'hsl(0, 0%, 48%)',
  greyLight: 'hsl(0, 0%, 71%)',
  greyLighter: 'hsl(0, 0%, 86%)',
  whiteTer: 'hsl(0, 0%, 96%)',
  whiteBis: 'hsl(0, 0%, 98%)',
  white: 'hsl(0, 0%, 100%)',
  orange: 'hsl(14,  100%, 53%)',
  yellow: 'hsl(48,  100%, 67%)',
  green: 'hsl(141, 71%,  48%)',
  turquoise: 'hsl(171, 100%, 41%)',
  cyan: 'hsl(204, 86%,  53%)',
  blue: 'hsl(217, 71%,  53%)',
  purple: 'hsl(271, 100%, 71%)',
  red: 'hsl(348, 100%, 61%)'
};
var colors = _objectSpread2({}, baseColors, {
  text: baseColors.greyDark,
  background: baseColors.white,
  primary: baseColors.blue,
  muted: baseColors.whiteTer,
  // bulma-specific
  info: baseColors.cyan,
  success: baseColors.green,
  warning: baseColors.yellow,
  danger: baseColors.red,
  light: baseColors.whiteTer,
  dark: baseColors.greyDarker,
  modes: {
    invert: {}
  }
});
var fonts = {
  body: 'BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
  heading: 'inherit',
  monospace: 'monospace'
};
var fontSizes = ['0.75rem', '0.875rem', // tweener
'1rem', '1.25rem', '1.5rem', '1.75rem', '2rem', '2.5rem', '3rem'];
var fontWeights = {
  body: 400,
  heading: 700,
  bold: 700,
  light: 300,
  medium: 500,
  semibold: 500
};
var lineHeights = {
  body: 1.5,
  heading: 1.125
}; // guesstimate

var space = [0, 0.5, 1, 1.5, 2, 2.5, 3].map(function (n) {
  return n + 'rem';
});
var heading = {
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'heading',
  m: 0,
  mb: 1
}; // needs works

var styles = {
  root: {
    fontFamily: 'body',
    lineHeight: 'body',
    fontWeight: 'body'
  },
  a: {
    color: 'primary',
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline'
    }
  },
  h1: _objectSpread2({}, heading, {
    fontSize: 6,
    mt: 2
  }),
  h2: _objectSpread2({}, heading, {
    fontSize: 5,
    mt: 2
  }),
  h3: _objectSpread2({}, heading, {
    fontSize: 4,
    mt: 3
  }),
  h4: _objectSpread2({}, heading, {
    fontSize: 3
  }),
  h5: _objectSpread2({}, heading, {
    fontSize: 2
  }),
  h6: _objectSpread2({}, heading, {
    fontSize: 1,
    mb: 2
  }),
  code: {},
  pre: {},
  hr: {
    bg: 'muted',
    border: 0,
    height: '1px',
    m: 3
  }
};
var bulma = {
  colors: colors,
  fonts: fonts,
  fontSizes: fontSizes,
  fontWeights: fontWeights,
  space: space,
  styles: styles
};

/* harmony default export */ __webpack_exports__["default"] = (bulma);

//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@theme-ui/preset-dark/dist/index.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/@theme-ui/preset-dark/dist/index.esm.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var _prism;

var heading = {
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'heading'
};
var index = {
  colors: {
    text: '#fff',
    background: '#060606',
    primary: '#3cf',
    secondary: '#e0f',
    muted: '#191919',
    highlight: '#29112c',
    gray: '#999',
    purple: '#c0f'
  },
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 700,
    display: 900
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25
  },
  textStyles: {
    heading: heading,
    display: {
      variant: 'textStyles.heading',
      fontSize: [5, 6],
      fontWeight: 'display',
      letterSpacing: '-0.03em',
      mt: 3
    }
  },
  styles: {
    Container: {
      p: 3,
      maxWidth: 1024
    },
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
    },
    h1: {
      variant: 'textStyles.display'
    },
    h2: {
      variant: 'textStyles.heading',
      fontSize: 5
    },
    h3: {
      variant: 'textStyles.heading',
      fontSize: 4
    },
    h4: {
      variant: 'textStyles.heading',
      fontSize: 3
    },
    h5: {
      variant: 'textStyles.heading',
      fontSize: 2
    },
    h6: {
      variant: 'textStyles.heading',
      fontSize: 1
    },
    a: {
      color: 'primary',
      '&:hover': {
        color: 'secondary'
      }
    },
    pre: {
      variant: 'prism',
      fontFamily: 'monospace',
      fontSize: 1,
      p: 3,
      color: 'text',
      bg: 'muted',
      overflow: 'auto',
      code: {
        color: 'inherit'
      }
    },
    code: {
      fontFamily: 'monospace',
      color: 'secondary',
      fontSize: 1
    },
    inlineCode: {
      fontFamily: 'monospace',
      color: 'secondary',
      bg: 'muted'
    },
    table: _defineProperty({
      width: '100%',
      my: 4,
      borderCollapse: 'separate',
      borderSpacing: 0
    }, ['th', 'td'], {
      textAlign: 'left',
      py: '4px',
      pr: '4px',
      pl: 0,
      borderColor: 'muted',
      borderBottomStyle: 'solid'
    }),
    th: {
      verticalAlign: 'bottom',
      borderBottomWidth: '2px'
    },
    td: {
      verticalAlign: 'top',
      borderBottomWidth: '1px'
    },
    hr: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: 'muted'
    },
    img: {
      maxWidth: '100%'
    }
  },
  prism: (_prism = {}, _defineProperty(_prism, ['.comment', '.prolog', '.doctype', '.cdata', '.punctuation', '.operator', '.entity', '.url'], {
    color: 'gray'
  }), _defineProperty(_prism, '.comment', {
    fontStyle: 'italic'
  }), _defineProperty(_prism, ['.property', '.tag', '.boolean', '.number', '.constant', '.symbol', '.deleted', '.function', '.class-name', '.regex', '.important', '.variable'], {
    color: 'purple'
  }), _defineProperty(_prism, ['.atrule', '.attr-value', '.keyword'], {
    color: 'primary'
  }), _defineProperty(_prism, ['.selector', '.attr-name', '.string', '.char', '.builtin', '.inserted'], {
    color: 'secondary'
  }), _prism)
};

/* harmony default export */ __webpack_exports__["default"] = (index);
//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@theme-ui/preset-deep/dist/index.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/@theme-ui/preset-deep/dist/index.esm.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var _prism;

var heading = {
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'heading'
};
var index = {
  colors: {
    text: 'hsl(210, 50%, 96%)',
    background: 'hsl(230, 25%, 18%)',
    primary: 'hsl(260, 100%, 80%)',
    secondary: 'hsl(290, 100%, 80%)',
    highlight: 'hsl(260, 20%, 40%)',
    purple: 'hsl(290, 100%, 80%)',
    muted: 'hsla(230, 20%, 0%, 20%)',
    gray: 'hsl(210, 50%, 60%)'
  },
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 700,
    display: 900
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25
  },
  textStyles: {
    heading: heading,
    display: {
      variant: 'textStyles.heading',
      fontSize: [5, 6],
      fontWeight: 'display',
      letterSpacing: '-0.03em',
      mt: 3
    }
  },
  styles: {
    Container: {
      p: 3,
      maxWidth: 1024
    },
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
    },
    h1: {
      variant: 'textStyles.display'
    },
    h2: {
      variant: 'textStyles.heading',
      fontSize: 5
    },
    h3: {
      variant: 'textStyles.heading',
      fontSize: 4
    },
    h4: {
      variant: 'textStyles.heading',
      fontSize: 3
    },
    h5: {
      variant: 'textStyles.heading',
      fontSize: 2
    },
    h6: {
      variant: 'textStyles.heading',
      fontSize: 1
    },
    a: {
      color: 'primary',
      '&:hover': {
        color: 'secondary'
      }
    },
    pre: {
      variant: 'prism',
      fontFamily: 'monospace',
      fontSize: 1,
      p: 3,
      color: 'text',
      bg: 'muted',
      overflow: 'auto',
      code: {
        color: 'inherit'
      }
    },
    code: {
      fontFamily: 'monospace',
      color: 'secondary',
      fontSize: 1
    },
    inlineCode: {
      fontFamily: 'monospace',
      color: 'secondary',
      bg: 'muted'
    },
    table: _defineProperty({
      width: '100%',
      my: 4,
      borderCollapse: 'separate',
      borderSpacing: 0
    }, ['th', 'td'], {
      textAlign: 'left',
      py: '4px',
      pr: '4px',
      pl: 0,
      borderColor: 'muted',
      borderBottomStyle: 'solid'
    }),
    th: {
      verticalAlign: 'bottom',
      borderBottomWidth: '2px'
    },
    td: {
      verticalAlign: 'top',
      borderBottomWidth: '1px'
    },
    hr: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: 'muted'
    },
    img: {
      maxWidth: '100%'
    }
  },
  prism: (_prism = {}, _defineProperty(_prism, ['.comment', '.prolog', '.doctype', '.cdata', '.punctuation', '.operator', '.entity', '.url'], {
    color: 'gray'
  }), _defineProperty(_prism, '.comment', {
    fontStyle: 'italic'
  }), _defineProperty(_prism, ['.property', '.tag', '.boolean', '.number', '.constant', '.symbol', '.deleted', '.function', '.class-name', '.regex', '.important', '.variable'], {
    color: 'purple'
  }), _defineProperty(_prism, ['.atrule', '.attr-value', '.keyword'], {
    color: 'primary'
  }), _defineProperty(_prism, ['.selector', '.attr-name', '.string', '.char', '.builtin', '.inserted'], {
    color: 'secondary'
  }), _prism)
};

/* harmony default export */ __webpack_exports__["default"] = (index);
//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@theme-ui/preset-funk/dist/index.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/@theme-ui/preset-funk/dist/index.esm.js ***!
  \**************************************************************/
/*! exports provided: default, funk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "funk", function() { return funk; });
/* harmony import */ var _theme_ui_preset_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @theme-ui/preset-base */ "./node_modules/@theme-ui/preset-base/dist/index.esm.js");


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var funk = _objectSpread2({}, _theme_ui_preset_base__WEBPACK_IMPORTED_MODULE_0__["default"], {
  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'Poppins, sans-serif',
    monospace: 'Menlo, monospace'
  },
  lineHeights: {
    body: 1.625,
    heading: 1.25
  },
  fontWeights: {
    body: 400,
    heading: 900,
    bold: 700
  },
  colors: _objectSpread2({}, _theme_ui_preset_base__WEBPACK_IMPORTED_MODULE_0__["default"].colors, {
    primary: '#609',
    secondary: '#306'
  }),
  styles: _objectSpread2({}, _theme_ui_preset_base__WEBPACK_IMPORTED_MODULE_0__["default"].styles)
});

/* harmony default export */ __webpack_exports__["default"] = (funk);

//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@theme-ui/preset-future/dist/index.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/@theme-ui/preset-future/dist/index.esm.js ***!
  \****************************************************************/
/*! exports provided: default, future */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "future", function() { return future; });
/* harmony import */ var _theme_ui_preset_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @theme-ui/preset-base */ "./node_modules/@theme-ui/preset-base/dist/index.esm.js");


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var future = _objectSpread2({}, _theme_ui_preset_base__WEBPACK_IMPORTED_MODULE_0__["default"], {
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#11e',
    secondary: '#c0c',
    highlight: '#e0e',
    muted: '#f6f6ff',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#0fc',
        secondary: '#0cf',
        highlight: '#f0c',
        muted: '#011'
      }
    }
  },
  fonts: {
    body: '"Avenir Next", system-ui, sans-serif',
    heading: 'inherit',
    moonospace: 'Menlo, monospace'
  },
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 700
  },
  lineHeights: {
    body: 1.75,
    heading: 1.25
  }
});

/* harmony default export */ __webpack_exports__["default"] = (future);

//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@theme-ui/preset-polaris/dist/index.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@theme-ui/preset-polaris/dist/index.esm.js ***!
  \*****************************************************************/
/*! exports provided: default, polaris */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polaris", function() { return polaris; });
/* harmony import */ var _theme_ui_preset_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @theme-ui/preset-base */ "./node_modules/@theme-ui/preset-polaris/node_modules/@theme-ui/preset-base/dist/index.esm.js");


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var text = 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif';
var polaris = _objectSpread2({}, _theme_ui_preset_base__WEBPACK_IMPORTED_MODULE_0__["default"], {
  colors: {
    text: '#454f5b',
    background: '#fff',
    primary: '#5c6ac4',
    secondary: '#006fbb',
    highlight: '#47c1bf',
    muted: '#e6e6e6',
    gray: '#dfe3e8',
    accent: '#f49342',
    darken: '#00044c',
    modes: {
      dark: {
        text: '#3e4155',
        background: '#000639',
        primary: '#9c6ade',
        secondary: '#b4e1fa',
        highlight: '#b7ecec',
        muted: '#e6e6e6'
      }
    }
  },
  fonts: {
    body: text,
    heading: text,
    moonospace: 'Menlo, monospace'
  },
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 700
  },
  lineHeights: {
    body: 1.75,
    heading: 1.25
  }
});

/* harmony default export */ __webpack_exports__["default"] = (polaris);

//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@theme-ui/preset-polaris/node_modules/@theme-ui/preset-base/dist/index.esm.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@theme-ui/preset-polaris/node_modules/@theme-ui/preset-base/dist/index.esm.js ***!
  \****************************************************************************************************/
/*! exports provided: default, base */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base", function() { return base; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var heading = {
  color: 'text',
  fontFamily: 'heading',
  lineHeight: 'heading',
  fontWeight: 'heading'
};
var base = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    secondary: '#30c',
    muted: '#f6f6f6'
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
    },
    h1: _objectSpread2({}, heading, {
      fontSize: 5
    }),
    h2: _objectSpread2({}, heading, {
      fontSize: 4
    }),
    h3: _objectSpread2({}, heading, {
      fontSize: 3
    }),
    h4: _objectSpread2({}, heading, {
      fontSize: 2
    }),
    h5: _objectSpread2({}, heading, {
      fontSize: 1
    }),
    h6: _objectSpread2({}, heading, {
      fontSize: 0
    }),
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body'
    },
    a: {
      color: 'primary'
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit'
      }
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit'
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    img: {
      maxWidth: '100%'
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (base);

//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@theme-ui/preset-roboto/dist/index.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/@theme-ui/preset-roboto/dist/index.esm.js ***!
  \****************************************************************/
/*! exports provided: default, roboto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roboto", function() { return roboto; });
/* harmony import */ var _theme_ui_preset_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @theme-ui/preset-base */ "./node_modules/@theme-ui/preset-base/dist/index.esm.js");


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var roboto = _objectSpread2({}, _theme_ui_preset_base__WEBPACK_IMPORTED_MODULE_0__["default"], {
  colors: {
    text: '#202124',
    background: '#fff',
    primary: '#1a73e8',
    secondary: '#9c27b0',
    muted: '#f1f3f4'
  },
  fonts: {
    body: 'Roboto, system-ui, sans-serif',
    heading: 'Roboto, system-ui, sans-serif',
    monospace: '"Roboto Mono", monospace'
  },
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 600
  }
});

/* harmony default export */ __webpack_exports__["default"] = (roboto);

//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@theme-ui/preset-swiss/dist/index.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@theme-ui/preset-swiss/dist/index.esm.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var _prism;

var heading = {
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'heading'
};
var index = {
  colors: {
    text: 'hsl(10, 20%, 20%)',
    background: 'hsl(10, 10%, 98%)',
    primary: 'hsl(10, 80%, 50%)',
    secondary: 'hsl(10, 60%, 50%)',
    highlight: 'hsl(10, 40%, 90%)',
    purple: 'hsl(250, 60%, 30%)',
    muted: 'hsl(10, 20%, 94%)',
    gray: 'hsl(10, 20%, 50%)'
  },
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 700,
    display: 900
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25
  },
  textStyles: {
    heading: heading,
    display: {
      variant: 'textStyles.heading',
      fontSize: [5, 6],
      fontWeight: 'display',
      letterSpacing: '-0.03em',
      mt: 3
    }
  },
  styles: {
    Container: {
      p: 3,
      maxWidth: 1024
    },
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
    },
    h1: {
      variant: 'textStyles.display'
    },
    h2: {
      variant: 'textStyles.heading',
      fontSize: 5
    },
    h3: {
      variant: 'textStyles.heading',
      fontSize: 4
    },
    h4: {
      variant: 'textStyles.heading',
      fontSize: 3
    },
    h5: {
      variant: 'textStyles.heading',
      fontSize: 2
    },
    h6: {
      variant: 'textStyles.heading',
      fontSize: 1
    },
    a: {
      color: 'primary',
      '&:hover': {
        color: 'secondary'
      }
    },
    pre: {
      variant: 'prism',
      fontFamily: 'monospace',
      fontSize: 1,
      p: 3,
      color: 'text',
      bg: 'muted',
      overflow: 'auto',
      code: {
        color: 'inherit'
      }
    },
    code: {
      fontFamily: 'monospace',
      color: 'secondary',
      fontSize: 1
    },
    inlineCode: {
      fontFamily: 'monospace',
      color: 'secondary',
      bg: 'muted'
    },
    table: _defineProperty({
      width: '100%',
      my: 4,
      borderCollapse: 'separate',
      borderSpacing: 0
    }, ['th', 'td'], {
      textAlign: 'left',
      py: '4px',
      pr: '4px',
      pl: 0,
      borderColor: 'muted',
      borderBottomStyle: 'solid'
    }),
    th: {
      verticalAlign: 'bottom',
      borderBottomWidth: '2px'
    },
    td: {
      verticalAlign: 'top',
      borderBottomWidth: '1px'
    },
    hr: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: 'muted'
    },
    img: {
      maxWidth: '100%'
    }
  },
  prism: (_prism = {}, _defineProperty(_prism, ['.comment', '.prolog', '.doctype', '.cdata', '.punctuation', '.operator', '.entity', '.url'], {
    color: 'gray'
  }), _defineProperty(_prism, '.comment', {
    fontStyle: 'italic'
  }), _defineProperty(_prism, ['.property', '.tag', '.boolean', '.number', '.constant', '.symbol', '.deleted', '.function', '.class-name', '.regex', '.important', '.variable'], {
    color: 'purple'
  }), _defineProperty(_prism, ['.atrule', '.attr-value', '.keyword'], {
    color: 'primary'
  }), _defineProperty(_prism, ['.selector', '.attr-name', '.string', '.char', '.builtin', '.inserted'], {
    color: 'secondary'
  }), _prism)
};

/* harmony default export */ __webpack_exports__["default"] = (index);
//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@theme-ui/preset-system/dist/index.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/@theme-ui/preset-system/dist/index.esm.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var heading = {
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'heading'
};
var index = {
  useCustomProperties: true,
  initialColorMode: 'system',
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#33e',
    secondary: '#119',
    muted: '#f6f6f6',
    highlight: '#efeffe',
    // '#ffffcc',
    gray: '#777',
    accent: '#609',
    modes: {
      dark: {
        text: '#fff',
        background: '#060606',
        primary: '#3cf',
        secondary: '#e0f',
        muted: '#191919',
        highlight: '#29112c',
        gray: '#999',
        accent: '#c0f'
      },
      deep: {
        text: 'hsl(210, 50%, 96%)',
        background: 'hsl(230, 25%, 18%)',
        primary: 'hsl(260, 100%, 80%)',
        secondary: 'hsl(290, 100%, 80%)',
        highlight: 'hsl(260, 20%, 40%)',
        accent: 'hsl(290, 100%, 80%)',
        muted: 'hsla(230, 20%, 0%, 20%)',
        gray: 'hsl(210, 50%, 60%)'
      },
      swiss: {
        text: 'hsl(10, 20%, 20%)',
        background: 'hsl(10, 10%, 98%)',
        primary: 'hsl(10, 80%, 50%)',
        secondary: 'hsl(10, 60%, 50%)',
        highlight: 'hsl(10, 40%, 90%)',
        accent: 'hsl(250, 60%, 30%)',
        muted: 'hsl(10, 20%, 94%)',
        gray: 'hsl(10, 20%, 50%)'
      }
    }
  },
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 700,
    display: 900
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25
  },
  textStyles: {
    heading: heading,
    display: {
      variant: 'textStyles.heading',
      fontSize: [5, 6],
      fontWeight: 'display',
      letterSpacing: '-0.03em',
      mt: 3
    }
  },
  styles: {
    Container: {
      p: 3,
      maxWidth: 1024
    },
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
    },
    h1: {
      variant: 'textStyles.display'
    },
    h2: {
      variant: 'textStyles.heading',
      fontSize: 5
    },
    h3: {
      variant: 'textStyles.heading',
      fontSize: 4
    },
    h4: {
      variant: 'textStyles.heading',
      fontSize: 3
    },
    h5: {
      variant: 'textStyles.heading',
      fontSize: 2
    },
    h6: {
      variant: 'textStyles.heading',
      fontSize: 1
    },
    a: {
      color: 'primary',
      '&:hover': {
        color: 'secondary'
      }
    },
    pre: {
      fontFamily: 'monospace',
      fontSize: 1,
      p: 3,
      color: 'text',
      bg: 'muted',
      overflow: 'auto',
      code: {
        color: 'inherit'
      }
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 1
    },
    inlineCode: {
      fontFamily: 'monospace',
      color: 'secondary',
      bg: 'muted'
    },
    table: _defineProperty({
      width: '100%',
      my: 4,
      borderCollapse: 'separate',
      borderSpacing: 0
    }, ['th', 'td'], {
      textAlign: 'left',
      py: '4px',
      pr: '4px',
      pl: 0,
      borderColor: 'muted',
      borderBottomStyle: 'solid'
    }),
    th: {
      verticalAlign: 'bottom',
      borderBottomWidth: '2px'
    },
    td: {
      verticalAlign: 'top',
      borderBottomWidth: '1px'
    },
    hr: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: 'muted'
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (index);
//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@theme-ui/preset-tailwind/dist/index.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/@theme-ui/preset-tailwind/dist/index.esm.js ***!
  \******************************************************************/
/*! exports provided: default, borderWidths, breakpoints, baseColors, buttons, colors, baseFonts, fonts, fontSizes, baseFontWeights, fontWeights, inputs, letterSpacings, baseLineHeights, lineHeights, radii, sizes, shadows, space, zIndices, styles, tailwind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderWidths", function() { return borderWidths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakpoints", function() { return breakpoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseColors", function() { return baseColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttons", function() { return buttons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseFonts", function() { return baseFonts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fonts", function() { return fonts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSizes", function() { return fontSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseFontWeights", function() { return baseFontWeights; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontWeights", function() { return fontWeights; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputs", function() { return inputs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "letterSpacings", function() { return letterSpacings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseLineHeights", function() { return baseLineHeights; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineHeights", function() { return lineHeights; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radii", function() { return radii; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizes", function() { return sizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shadows", function() { return shadows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "space", function() { return space; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zIndices", function() { return zIndices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tailwind", function() { return tailwind; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

// Based on https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
// and https://tailwindcss.com/components
var borderWidths = {
  px: '1px',
  '0': '0',
  '2': '2px',
  '4': '4px',
  '8': '8px'
};
var breakpoints = ['640px', '768px', '1024px', '1280px'];
var baseColors = {
  transparent: 'transparent',
  black: '#000',
  white: '#fff',
  gray: [null, '#f7fafc', '#edf2f7', '#e2e8f0', '#cbd5e0', '#a0aec0', '#718096', '#4a5568', '#2d3748', '#1a202c'],
  red: [null, '#fff5f5', '#fed7d7', '#feb2b2', '#fc8181', '#f56565', '#e53e3e', '#c53030', '#9b2c2c', '#742a2a'],
  orange: [null, '#fffaf0', '#feebc8', '#fbd38d', '#f6ad55', '#ed8936', '#dd6b20', '#c05621', '#9c4221', '#7b341e'],
  yellow: [null, '#fffff0', '#fefcbf', '#faf089', '#f6e05e', '#ecc94b', '#d69e2e', '#b7791f', '#975a16', '#744210'],
  green: [null, '#f0fff4', '#c6f6d5', '#9ae6b4', '#68d391', '#48bb78', '#38a169', '#2f855a', '#276749', '#22543d'],
  teal: [null, '#e6fffa', '#b2f5ea', '#81e6d9', '#4fd1c5', '#38b2ac', '#319795', '#2c7a7b', '#285e61', '#234e52'],
  blue: [null, '#ebf8ff', '#bee3f8', '#90cdf4', '#63b3ed', '#4299e1', '#3182ce', '#2b6cb0', '#2c5282', '#2a4365'],
  indigo: [null, '#ebf4ff', '#c3dafe', '#a3bffa', '#7f9cf5', '#667eea', '#5a67d8', '#4c51bf', '#434190', '#3c366b'],
  purple: [null, '#faf5ff', '#e9d8fd', '#d6bcfa', '#b794f4', '#9f7aea', '#805ad5', '#6b46c1', '#553c9a', '#44337a'],
  pink: [null, '#fff5f7', '#fed7e2', '#fbb6ce', '#f687b3', '#ed64a6', '#d53f8c', '#b83280', '#97266d', '#702459']
};
var commonButtonStyles = {
  py: 2,
  px: 3,
  cursor: "pointer",
  fontSize: "100%",
  lineHeight: "inherit"
};
var buttons = {
  simple: _objectSpread2({}, commonButtonStyles, {
    backgroundColor: "primary",
    border: "none",
    color: "white",
    fontWeight: "bold",
    borderRadius: "default",
    '&:hover': {
      backgroundColor: "primaryHover"
    }
  }),
  pill: _objectSpread2({}, commonButtonStyles, {
    backgroundColor: "primary",
    border: "none",
    color: "white",
    fontWeight: "bold",
    borderRadius: "full",
    '&:hover': {
      backgroundColor: "primaryHover"
    }
  }),
  outline: _objectSpread2({}, commonButtonStyles, {
    backgroundColor: "transparent",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "primary",
    color: "primary",
    fontWeight: "semibold",
    borderRadius: "default",
    '&:hover': {
      backgroundColor: "primary",
      color: "white",
      borderColor: "transparent"
    }
  }),
  bordered: _objectSpread2({}, commonButtonStyles, {
    backgroundColor: "primary",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "primaryHover",
    color: "white",
    fontWeight: "bold",
    borderRadius: "default",
    '&:hover': {
      backgroundColor: "primaryHover"
    }
  }),
  disabled: _objectSpread2({}, commonButtonStyles, {
    backgroundColor: "primary",
    border: "none",
    opacity: 0.5,
    cursor: "not-allowed",
    color: "white",
    fontWeight: "bold",
    borderRadius: "default"
  }),
  '3D': _objectSpread2({}, commonButtonStyles, {
    backgroundColor: "primary",
    border: "none",
    borderBottomWidth: "4px",
    borderBottomStyle: "solid",
    borderBottomColor: "primaryHover",
    color: "white",
    fontWeight: "bold",
    borderRadius: "default",
    transition: "transform 0.3s ease-in-out",
    '&:hover': {
      transform: "translateY(-1px)"
    }
  }),
  elevated: _objectSpread2({}, commonButtonStyles, {
    backgroundColor: "white",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "gray.4",
    color: "text",
    fontWeight: "bold",
    borderRadius: "default",
    boxShadow: "default",
    '&:hover': {
      backgroundColor: "gray.1"
    }
  })
};
var colors = _objectSpread2({}, baseColors, {
  grayDark: baseColors.gray[8],
  text: baseColors.gray[8],
  background: baseColors.white,
  primary: baseColors.blue[7],
  primaryHover: baseColors.blue[8],
  secondary: baseColors.gray[6],
  muted: baseColors.gray[3],
  success: baseColors.green[3],
  info: baseColors.blue[4],
  warning: baseColors.yellow[3],
  danger: baseColors.red[3],
  light: baseColors.gray[1],
  dark: baseColors.gray[8],
  textMuted: baseColors.gray[6]
});
var baseFonts = {
  sans: '-apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
  serif: 'Georgia, Cambria, "Times New Roman", Times, serif',
  mono: 'Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'
};
var fonts = _objectSpread2({}, baseFonts, {
  body: baseFonts.sans,
  heading: 'inherit',
  monospace: baseFonts.mono
});
var fontSizes = ['0.875rem', '1rem', '1.25rem', '1.5rem', '1.875rem', '2.25rem', '3rem', '4rem', '4.5rem'];
var baseFontWeights = {
  hairline: '100',
  thin: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900'
};
var fontWeights = _objectSpread2({}, baseFontWeights, {
  body: baseFontWeights.normal,
  heading: baseFontWeights.bold
});
var commonInputStyles = {
  py: 2,
  px: 3,
  fontSize: "100%",
  borderRadius: "default",
  appearance: "none",
  lineHeight: "tight"
};
var inputs = {
  shadow: _objectSpread2({}, commonInputStyles, {
    border: "none",
    color: "gray.7",
    boxShadow: "default",
    '&:focus': {
      outline: "none",
      boxShadow: "outline"
    }
  }),
  inline: _objectSpread2({}, commonInputStyles, {
    backgroundColor: "gray.2",
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: "gray.2",
    color: "gray.7",
    '&:focus': {
      outline: "none",
      borderColor: "primary",
      backgroundColor: "white"
    }
  }),
  underline: _objectSpread2({}, commonInputStyles, {
    backgroundColor: "transparent",
    border: "none",
    borderBottomWidth: "2px",
    borderBottomStyle: "solid",
    borderBottomColor: "primary",
    borderRadius: "0px",
    color: "gray.7",
    '&:focus': {
      outline: "none",
      borderColor: "primary",
      backgroundColor: "white"
    }
  })
};
var letterSpacings = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em'
};
var baseLineHeights = {
  none: '1',
  tight: '1.25',
  snug: '1.375',
  normal: '1.5',
  relaxed: '1.625',
  loose: '2'
};
var lineHeights = _objectSpread2({}, baseLineHeights, {
  body: baseLineHeights.relaxed,
  heading: baseLineHeights.tight
});
var radii = {
  none: '0',
  sm: '0.125rem',
  "default": '0.25rem',
  lg: '0.5rem',
  full: '9999px'
};
var sizes = {
  px: '1px',
  '0': '0',
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '8': '2rem',
  '10': '2.5rem',
  '12': '3rem',
  '16': '4rem',
  '20': '5rem',
  '24': '6rem',
  '32': '8rem',
  '40': '10rem',
  '48': '12rem',
  '56': '14rem',
  '64': '16rem',
  xs: '20rem',
  sm: '24rem',
  md: '28rem',
  lg: '32rem',
  xl: '36rem',
  '2xl': '42rem',
  '3xl': '48rem',
  '4xl': '56rem',
  '5xl': '64rem',
  '6xl': '72rem',
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  '1/6': '16.666667%',
  '2/6': '33.333333%',
  '3/6': '50%',
  '4/6': '66.666667%',
  '5/6': '83.333333%',
  '1/12': '8.333333%',
  '2/12': '16.666667%',
  '3/12': '25%',
  '4/12': '33.333333%',
  '5/12': '41.666667%',
  '6/12': '50%',
  '7/12': '58.333333%',
  '8/12': '66.666667%',
  '9/12': '75%',
  '10/12': '83.333333%',
  '11/12': '91.666667%',
  full: '100%',
  screenHeight: '100vh',
  screenWidth: '100vw'
};
var shadows = {
  "default": '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
  none: 'none'
};
var space = [0, '0.25rem', '0.5rem', '1rem', '2rem', '4rem', '8rem', '16rem', '32rem'];
var zIndices = {
  auto: 'auto',
  '0': '0',
  '10': '10',
  '20': '20',
  '30': '30',
  '40': '40',
  '50': '50'
};
var heading = {
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'heading',
  m: 0,
  mb: 1
};
var styles = {
  root: {
    fontFamily: 'body',
    lineHeight: 'body',
    fontWeight: 'body'
  },
  a: {
    color: 'primary',
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline'
    }
  },
  h1: _objectSpread2({}, heading, {
    fontSize: 6,
    mt: 2
  }),
  h2: _objectSpread2({}, heading, {
    fontSize: 5,
    mt: 2
  }),
  h3: _objectSpread2({}, heading, {
    fontSize: 4,
    mt: 3
  }),
  h4: _objectSpread2({}, heading, {
    fontSize: 3
  }),
  h5: _objectSpread2({}, heading, {
    fontSize: 2
  }),
  h6: _objectSpread2({}, heading, {
    fontSize: 1,
    mb: 2
  }),
  code: {},
  pre: {},
  hr: {
    bg: 'muted',
    border: 0,
    height: '1px',
    m: 3
  }
};
var tailwind = {
  borderWidths: borderWidths,
  breakpoints: breakpoints,
  colors: colors,
  fonts: fonts,
  fontSizes: fontSizes,
  fontWeights: fontWeights,
  letterSpacings: letterSpacings,
  lineHeights: lineHeights,
  sizes: sizes,
  shadows: shadows,
  space: space,
  radii: radii,
  zIndices: zIndices,
  styles: styles,
  buttons: buttons,
  inputs: inputs
};

/* harmony default export */ __webpack_exports__["default"] = (tailwind);

//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@theme-ui/preset-tosh/dist/index.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/@theme-ui/preset-tosh/dist/index.esm.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var heading = {
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'heading'
};
var index = {
  useCustomProperties: true,
  initialColorMode: 'light',
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#000',
    secondary: '#3f3f3f',
    muted: '#e0e0e0',
    highlight: '#9f9f9f',
    gray: '#6c6c6c',
    accent: '#3f3f3f',
    modes: {
      dark: {
        text: '#fff',
        background: '#060606',
        primary: '#d2d2d2',
        secondary: '#b2b2b2',
        muted: '#191919',
        highlight: '#3c3c3c',
        gray: '#999',
        accent: '#e0e0e0'
      }
    }
  },
  fonts: {
    body: 'Silom, monospace',
    heading: 'Silom, monospace',
    monospace: 'Silom, monospace'
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 700,
    display: 900
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25
  },
  textStyles: {
    heading: heading,
    display: {
      variant: 'textStyles.heading',
      fontSize: [5, 6],
      fontWeight: 'display',
      letterSpacing: '-0.03em',
      mt: 3
    }
  },
  styles: {
    Container: {
      p: 3,
      maxWidth: 1024
    },
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
    },
    h1: {
      variant: 'textStyles.display'
    },
    h2: {
      variant: 'textStyles.heading',
      fontSize: 5
    },
    h3: {
      variant: 'textStyles.heading',
      fontSize: 4
    },
    h4: {
      variant: 'textStyles.heading',
      fontSize: 3
    },
    h5: {
      variant: 'textStyles.heading',
      fontSize: 2
    },
    h6: {
      variant: 'textStyles.heading',
      fontSize: 1
    },
    p: {
      fontSize: 2
    },
    a: {
      color: 'primary',
      '&:hover': {
        color: 'secondary'
      }
    },
    pre: {
      fontFamily: 'monospace',
      fontSize: 1,
      p: 3,
      color: 'text',
      bg: 'muted',
      borderColor: 'text',
      borderStyle: 'solid',
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 8,
      borderBottomWidth: 8,
      overflow: 'auto',
      code: {
        color: 'inherit'
      }
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 1
    },
    inlineCode: {
      fontFamily: 'monospace',
      color: 'secondary',
      bg: 'muted',
      px: 2
    },
    ul: {
      listStyleType: 'square'
    },
    table: _defineProperty({
      width: '100%',
      my: 4,
      borderCollapse: 'separate',
      borderSpacing: 0
    }, ['th', 'td'], {
      textAlign: 'left',
      py: '4px',
      pr: '4px',
      pl: 0,
      borderColor: 'text',
      borderBottomStyle: 'solid'
    }),
    th: {
      backgroundColor: 'muted',
      verticalAlign: 'bottom',
      borderBottomWidth: 8
    },
    td: {
      verticalAlign: 'top',
      borderBottomWidth: 4
    },
    hr: {
      border: 0,
      borderBottom: '8px solid',
      borderColor: 'text'
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (index);
//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@theme-ui/presets/dist/index.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/@theme-ui/presets/dist/index.esm.js ***!
  \**********************************************************/
/*! exports provided: base, dark, deep, funk, future, roboto, swiss, system, tosh, bootstrap, bulma, polaris, tailwind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme_ui_preset_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @theme-ui/preset-base */ "./node_modules/@theme-ui/preset-base/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "base", function() { return _theme_ui_preset_base__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _theme_ui_preset_dark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @theme-ui/preset-dark */ "./node_modules/@theme-ui/preset-dark/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dark", function() { return _theme_ui_preset_dark__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _theme_ui_preset_deep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @theme-ui/preset-deep */ "./node_modules/@theme-ui/preset-deep/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deep", function() { return _theme_ui_preset_deep__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _theme_ui_preset_funk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @theme-ui/preset-funk */ "./node_modules/@theme-ui/preset-funk/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "funk", function() { return _theme_ui_preset_funk__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _theme_ui_preset_future__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @theme-ui/preset-future */ "./node_modules/@theme-ui/preset-future/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "future", function() { return _theme_ui_preset_future__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _theme_ui_preset_roboto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @theme-ui/preset-roboto */ "./node_modules/@theme-ui/preset-roboto/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "roboto", function() { return _theme_ui_preset_roboto__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _theme_ui_preset_swiss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @theme-ui/preset-swiss */ "./node_modules/@theme-ui/preset-swiss/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "swiss", function() { return _theme_ui_preset_swiss__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _theme_ui_preset_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @theme-ui/preset-system */ "./node_modules/@theme-ui/preset-system/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "system", function() { return _theme_ui_preset_system__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _theme_ui_preset_tosh__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @theme-ui/preset-tosh */ "./node_modules/@theme-ui/preset-tosh/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tosh", function() { return _theme_ui_preset_tosh__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _theme_ui_preset_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @theme-ui/preset-bootstrap */ "./node_modules/@theme-ui/preset-bootstrap/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return _theme_ui_preset_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _theme_ui_preset_bulma__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @theme-ui/preset-bulma */ "./node_modules/@theme-ui/preset-bulma/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bulma", function() { return _theme_ui_preset_bulma__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _theme_ui_preset_polaris__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @theme-ui/preset-polaris */ "./node_modules/@theme-ui/preset-polaris/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "polaris", function() { return _theme_ui_preset_polaris__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _theme_ui_preset_tailwind__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @theme-ui/preset-tailwind */ "./node_modules/@theme-ui/preset-tailwind/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tailwind", function() { return _theme_ui_preset_tailwind__WEBPACK_IMPORTED_MODULE_12__["default"]; });














//# sourceMappingURL=index.esm.js.map


/***/ }),

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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme */ "./theme.js");


var _jsxFileName = "C:\\Users\\hp\\next.js-intro\\pages\\_app.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function App(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
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
  styles: _objectSpread({}, _theme_ui_presets__WEBPACK_IMPORTED_MODULE_1__["roboto"].styles)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0B0aGVtZS11aS9wcmVzZXQtYmFzZS9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0B0aGVtZS11aS9wcmVzZXQtYm9vdHN0cmFwL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHRoZW1lLXVpL3ByZXNldC1idWxtYS9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0B0aGVtZS11aS9wcmVzZXQtZGFyay9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0B0aGVtZS11aS9wcmVzZXQtZGVlcC9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0B0aGVtZS11aS9wcmVzZXQtZnVuay9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0B0aGVtZS11aS9wcmVzZXQtZnV0dXJlL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHRoZW1lLXVpL3ByZXNldC1wb2xhcmlzL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHRoZW1lLXVpL3ByZXNldC1wb2xhcmlzL25vZGVfbW9kdWxlcy9AdGhlbWUtdWkvcHJlc2V0LWJhc2UvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AdGhlbWUtdWkvcHJlc2V0LXJvYm90by9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0B0aGVtZS11aS9wcmVzZXQtc3dpc3MvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AdGhlbWUtdWkvcHJlc2V0LXN5c3RlbS9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0B0aGVtZS11aS9wcmVzZXQtdGFpbHdpbmQvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AdGhlbWUtdWkvcHJlc2V0LXRvc2gvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AdGhlbWUtdWkvcHJlc2V0cy9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL3RoZW1lLmpzIl0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInRoZW1lIiwicm9ib3RvIiwiY29udGFpbmVycyIsImNhcmQiLCJib3hTaGFkb3ciLCJib3JkZXIiLCJib3JkZXJDb2xvciIsImJvcmRlclJhZGl1cyIsInAiLCJwYWdlIiwid2lkdGgiLCJtYXhXaWR0aCIsIm0iLCJteCIsInN0eWxlcyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wseUJBQXlCO0FBQ3pCO0FBQ0EsS0FBSztBQUNMLHlCQUF5QjtBQUN6QjtBQUNBLEtBQUs7QUFDTCx5QkFBeUI7QUFDekI7QUFDQSxLQUFLO0FBQ0wseUJBQXlCO0FBQ3pCO0FBQ0EsS0FBSztBQUNMLHlCQUF5QjtBQUN6QjtBQUNBLEtBQUs7QUFDTCx5QkFBeUI7QUFDekI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLG1FQUFJLEVBQUM7QUFDSjtBQUNoQjs7Ozs7Ozs7Ozs7OztBQ2hKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCx1QkFBdUI7QUFDdkI7QUFDQSxHQUFHO0FBQ0gsdUJBQXVCO0FBQ3ZCO0FBQ0EsR0FBRztBQUNILHVCQUF1QjtBQUN2QjtBQUNBLEdBQUc7QUFDSCx1QkFBdUI7QUFDdkI7QUFDQSxHQUFHO0FBQ0gsdUJBQXVCO0FBQ3ZCO0FBQ0EsR0FBRztBQUNILHVCQUF1QjtBQUN2QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLHdFQUFTLEVBQUM7QUFDK0c7QUFDeEk7Ozs7Ozs7Ozs7Ozs7QUNyT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsdUJBQXVCO0FBQ3ZCO0FBQ0EsR0FBRztBQUNILHVCQUF1QjtBQUN2QjtBQUNBLEdBQUc7QUFDSCx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLEdBQUc7QUFDSCxVQUFVO0FBQ1YsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxvRUFBSyxFQUFDO0FBQzJFO0FBQ2hHOzs7Ozs7Ozs7Ozs7O0FDaExBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gscUJBQXFCO0FBQ3JCO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVlLG9FQUFLLEVBQUM7QUFDckI7Ozs7Ozs7Ozs7Ozs7QUNuS0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxxQkFBcUI7QUFDckI7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRWUsb0VBQUssRUFBQztBQUNyQjs7Ozs7Ozs7Ozs7OztBQ25LQTtBQUFBO0FBQUE7QUFBeUM7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsNEJBQTRCLEVBQUUsNkRBQUk7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILDJCQUEyQixFQUFFLDZEQUFJO0FBQ2pDO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsMkJBQTJCLEVBQUUsNkRBQUk7QUFDakMsQ0FBQzs7QUFFYyxtRUFBSSxFQUFDO0FBQ0o7QUFDaEI7Ozs7Ozs7Ozs7Ozs7QUMzRUE7QUFBQTtBQUFBO0FBQXlDOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhCQUE4QixFQUFFLDZEQUFJO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVjLHFFQUFNLEVBQUM7QUFDSjtBQUNsQjs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBeUM7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0IsRUFBRSw2REFBSTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFYyxzRUFBTyxFQUFDO0FBQ0o7QUFDbkI7Ozs7Ozs7Ozs7Ozs7QUM1RkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHlCQUF5QjtBQUN6QjtBQUNBLEtBQUs7QUFDTCx5QkFBeUI7QUFDekI7QUFDQSxLQUFLO0FBQ0wseUJBQXlCO0FBQ3pCO0FBQ0EsS0FBSztBQUNMLHlCQUF5QjtBQUN6QjtBQUNBLEtBQUs7QUFDTCx5QkFBeUI7QUFDekI7QUFDQSxLQUFLO0FBQ0wseUJBQXlCO0FBQ3pCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxtRUFBSSxFQUFDO0FBQ0o7QUFDaEI7Ozs7Ozs7Ozs7Ozs7QUNoSkE7QUFBQTtBQUFBO0FBQXlDOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhCQUE4QixFQUFFLDZEQUFJO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFYyxxRUFBTSxFQUFDO0FBQ0o7QUFDbEI7Ozs7Ozs7Ozs7Ozs7QUN6RUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxxQkFBcUI7QUFDckI7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRWUsb0VBQUssRUFBQztBQUNyQjs7Ozs7Ozs7Ozs7OztBQ25LQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLG9FQUFLLEVBQUM7QUFDckI7Ozs7Ozs7Ozs7Ozs7QUNwTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EsR0FBRztBQUNILHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EsR0FBRztBQUNILHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EsR0FBRztBQUNILHVCQUF1QjtBQUN2QjtBQUNBLEdBQUc7QUFDSCx1QkFBdUI7QUFDdkI7QUFDQSxHQUFHO0FBQ0gsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsVUFBVTtBQUNWLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSx1RUFBUSxFQUFDO0FBQ3FOO0FBQzdPOzs7Ozs7Ozs7Ozs7O0FDL2FBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLG9FQUFLLEVBQUM7QUFDckI7Ozs7Ozs7Ozs7Ozs7QUM3S0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0Q7QUFDQTtBQUNBO0FBQ0E7QUFDSTtBQUNBO0FBQ0Y7QUFDRTtBQUNKO0FBQ1U7QUFDUjtBQUNJO0FBQ0U7QUFDaEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLEdBQVQsT0FBcUM7QUFBQSxNQUF2QkMsU0FBdUIsUUFBdkJBLFNBQXVCO0FBQUEsTUFBWkMsU0FBWSxRQUFaQSxTQUFZO0FBQ2xELHNCQUNFLHFFQUFDLHNEQUFEO0FBQUEsMkJBQ00scUVBQUMsU0FBRCxvQkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRE47QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7S0FOdUJGLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMeEI7O0FBRUEsSUFBTUcsS0FBSyxtQ0FDTkMsd0RBRE07QUFFVEMsWUFBVSxFQUFFO0FBQ1ZDLFFBQUksRUFBRTtBQUNKQyxlQUFTLEVBQUUsd0RBRFA7QUFFSkMsWUFBTSxFQUFFLFdBRko7QUFHSkMsaUJBQVcsRUFBRSxPQUhUO0FBSUpDLGtCQUFZLEVBQUUsS0FKVjtBQUtKQyxPQUFDLEVBQUU7QUFMQyxLQURJO0FBUVZDLFFBQUksRUFBRTtBQUNKQyxXQUFLLEVBQUUsTUFESDtBQUVKQyxjQUFRLEVBQUUsT0FGTjtBQUdKQyxPQUFDLEVBQUUsQ0FIQztBQUlKQyxRQUFFLEVBQUU7QUFKQTtBQVJJLEdBRkg7QUFpQlRDLFFBQU0sb0JBQ0RiLHdEQUFNLENBQUNhLE1BRE47QUFqQkcsRUFBWDs7QUFzQkFDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZaEIsS0FBWjtBQUVlQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmQ5Y2ZkMWFhNzQ4ZjA0ZTYwOGJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xuICAgIGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICAgIH0pO1xuICAgIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTtcbiAgfVxuXG4gIHJldHVybiBrZXlzO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkMih0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcblxuICAgIGlmIChpICUgMikge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxudmFyIGhlYWRpbmcgPSB7XG4gIGNvbG9yOiAndGV4dCcsXG4gIGZvbnRGYW1pbHk6ICdoZWFkaW5nJyxcbiAgbGluZUhlaWdodDogJ2hlYWRpbmcnLFxuICBmb250V2VpZ2h0OiAnaGVhZGluZydcbn07XG52YXIgYmFzZSA9IHtcbiAgc3BhY2U6IFswLCA0LCA4LCAxNiwgMzIsIDY0LCAxMjgsIDI1NiwgNTEyXSxcbiAgZm9udHM6IHtcbiAgICBib2R5OiAnc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWYnLFxuICAgIGhlYWRpbmc6ICdpbmhlcml0JyxcbiAgICBtb25vc3BhY2U6ICdNZW5sbywgbW9ub3NwYWNlJ1xuICB9LFxuICBmb250U2l6ZXM6IFsxMiwgMTQsIDE2LCAyMCwgMjQsIDMyLCA0OCwgNjQsIDk2XSxcbiAgZm9udFdlaWdodHM6IHtcbiAgICBib2R5OiA0MDAsXG4gICAgaGVhZGluZzogNzAwLFxuICAgIGJvbGQ6IDcwMFxuICB9LFxuICBsaW5lSGVpZ2h0czoge1xuICAgIGJvZHk6IDEuNSxcbiAgICBoZWFkaW5nOiAxLjEyNVxuICB9LFxuICBjb2xvcnM6IHtcbiAgICB0ZXh0OiAnIzAwMCcsXG4gICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgIHByaW1hcnk6ICcjMDdjJyxcbiAgICBzZWNvbmRhcnk6ICcjMzBjJyxcbiAgICBtdXRlZDogJyNmNmY2ZjYnXG4gIH0sXG4gIHN0eWxlczoge1xuICAgIHJvb3Q6IHtcbiAgICAgIGZvbnRGYW1pbHk6ICdib2R5JyxcbiAgICAgIGxpbmVIZWlnaHQ6ICdib2R5JyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2R5J1xuICAgIH0sXG4gICAgaDE6IF9vYmplY3RTcHJlYWQyKHt9LCBoZWFkaW5nLCB7XG4gICAgICBmb250U2l6ZTogNVxuICAgIH0pLFxuICAgIGgyOiBfb2JqZWN0U3ByZWFkMih7fSwgaGVhZGluZywge1xuICAgICAgZm9udFNpemU6IDRcbiAgICB9KSxcbiAgICBoMzogX29iamVjdFNwcmVhZDIoe30sIGhlYWRpbmcsIHtcbiAgICAgIGZvbnRTaXplOiAzXG4gICAgfSksXG4gICAgaDQ6IF9vYmplY3RTcHJlYWQyKHt9LCBoZWFkaW5nLCB7XG4gICAgICBmb250U2l6ZTogMlxuICAgIH0pLFxuICAgIGg1OiBfb2JqZWN0U3ByZWFkMih7fSwgaGVhZGluZywge1xuICAgICAgZm9udFNpemU6IDFcbiAgICB9KSxcbiAgICBoNjogX29iamVjdFNwcmVhZDIoe30sIGhlYWRpbmcsIHtcbiAgICAgIGZvbnRTaXplOiAwXG4gICAgfSksXG4gICAgcDoge1xuICAgICAgY29sb3I6ICd0ZXh0JyxcbiAgICAgIGZvbnRGYW1pbHk6ICdib2R5JyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2R5JyxcbiAgICAgIGxpbmVIZWlnaHQ6ICdib2R5J1xuICAgIH0sXG4gICAgYToge1xuICAgICAgY29sb3I6ICdwcmltYXJ5J1xuICAgIH0sXG4gICAgcHJlOiB7XG4gICAgICBmb250RmFtaWx5OiAnbW9ub3NwYWNlJyxcbiAgICAgIG92ZXJmbG93WDogJ2F1dG8nLFxuICAgICAgY29kZToge1xuICAgICAgICBjb2xvcjogJ2luaGVyaXQnXG4gICAgICB9XG4gICAgfSxcbiAgICBjb2RlOiB7XG4gICAgICBmb250RmFtaWx5OiAnbW9ub3NwYWNlJyxcbiAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCdcbiAgICB9LFxuICAgIHRhYmxlOiB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgYm9yZGVyQ29sbGFwc2U6ICdzZXBhcmF0ZScsXG4gICAgICBib3JkZXJTcGFjaW5nOiAwXG4gICAgfSxcbiAgICB0aDoge1xuICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgICBib3JkZXJCb3R0b21TdHlsZTogJ3NvbGlkJ1xuICAgIH0sXG4gICAgdGQ6IHtcbiAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgICAgYm9yZGVyQm90dG9tU3R5bGU6ICdzb2xpZCdcbiAgICB9LFxuICAgIGltZzoge1xuICAgICAgbWF4V2lkdGg6ICcxMDAlJ1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYmFzZTtcbmV4cG9ydCB7IGJhc2UgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbS5qcy5tYXBcbiIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG4gICAgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgfSk7XG4gICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICB9XG5cbiAgcmV0dXJuIGtleXM7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgaWYgKGkgJSAyKSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG52YXIgYmFzZUNvbG9ycyA9IHtcbiAgd2hpdGU6ICcjZmZmJyxcbiAgYmxhY2s6ICcjMDAwJyxcbiAgZ3JheTogWycjZmZmJywgLy8gMCBpbmRleFxuICAnI2Y4ZjlmYScsICcjZTllY2VmJywgJyNkZWUyZTYnLCAnI2NlZDRkYScsICcjYWRiNWJkJywgJyM2Yzc1N2QnLCAnIzQ5NTA1NycsICcjMzQzYTQwJywgJyMyMTI1MjknXSxcbiAgYmx1ZTogJyMwMDdiZmYnLFxuICBpbmRpZ286ICcjNjYxMGYyJyxcbiAgcHVycGxlOiAnIzZmNDJjMScsXG4gIHBpbms6ICcjZTgzZThjJyxcbiAgcmVkOiAnI2RjMzU0NScsXG4gIG9yYW5nZTogJyNmZDdlMTQnLFxuICB5ZWxsb3c6ICcjZmZjMTA3JyxcbiAgZ3JlZW46ICcjMjhhNzQ1JyxcbiAgdGVhbDogJyMyMGM5OTcnLFxuICBjeWFuOiAnIzE3YTJiOCcgLy8gZ3JheTogZ3JheVs2XSxcblxufTtcbnZhciBjb2xvcnMgPSBfb2JqZWN0U3ByZWFkMih7fSwgYmFzZUNvbG9ycywge1xuICBncmF5RGFyazogYmFzZUNvbG9ycy5ncmF5WzhdLFxuICB0ZXh0OiBiYXNlQ29sb3JzLmdyYXlbOV0sXG4gIGJhY2tncm91bmQ6IGJhc2VDb2xvcnMud2hpdGUsXG4gIHByaW1hcnk6IGJhc2VDb2xvcnMuYmx1ZSxcbiAgc2Vjb25kYXJ5OiBiYXNlQ29sb3JzLmdyYXlbNl0sXG4gIG11dGVkOiBiYXNlQ29sb3JzLmdyYXlbM10sXG4gIHN1Y2Nlc3M6IGJhc2VDb2xvcnMuZ3JlZW4sXG4gIGluZm86IGJhc2VDb2xvcnMuY3lhbixcbiAgd2FybmluZzogYmFzZUNvbG9ycy55ZWxsb3csXG4gIGRhbmdlcjogYmFzZUNvbG9ycy5yZWQsXG4gIGxpZ2h0OiBiYXNlQ29sb3JzLmdyYXlbMV0sXG4gIGRhcms6IGJhc2VDb2xvcnMuZ3JheVs4XSxcbiAgdGV4dE11dGVkOiBiYXNlQ29sb3JzLmdyYXlbNl1cbn0pO1xudmFyIHNwYWNlID0gWzAsIDAuMjUsIDAuNSwgMSwgMS41LCAzXS5tYXAoZnVuY3Rpb24gKG4pIHtcbiAgcmV0dXJuIG4gKyAncmVtJztcbn0pO1xudmFyIGJyZWFrcG9pbnRzID0gWyc1NzZweCcsICc3NjhweCcsICc5OTJweCcsICcxMjAwcHgnXTtcbnZhciBmb250cyA9IHtcbiAgYm9keTogJy1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIicsXG4gIGhlYWRpbmc6ICdpbmhlcml0JyxcbiAgbW9ub3NwYWNlOiAnU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZSdcbn07XG5mb250cy5zYW5zID0gZm9udHMuYm9keTtcbnZhciBmb250V2VpZ2h0cyA9IHtcbiAgYm9keTogNDAwLFxuICBoZWFkaW5nOiA1MDAsXG4gIGJvbGQ6IDcwMCxcbiAgbGlnaHQ6IDMwMFxufTtcbmZvbnRXZWlnaHRzLm5vcm1hbCA9IGZvbnRXZWlnaHRzLmJvZHk7XG5mb250V2VpZ2h0cy5kaXNwbGF5ID0gZm9udFdlaWdodHMubGlnaHQ7XG52YXIgZm9udFNpemVzID0gWycwLjc1cmVtJywgLy8gJzgwJScsXG4nMC44NzVyZW0nLCAnMXJlbScsICcxLjI1cmVtJywgJzEuNXJlbScsICcxLjc1cmVtJywgJzJyZW0nLCAnMi41cmVtJywgJzMuNXJlbScsICc0LjVyZW0nLCAnNS41cmVtJywgJzZyZW0nXTtcbmZvbnRTaXplcy5sZWFkID0gZm9udFNpemVzWzNdO1xudmFyIGxpbmVIZWlnaHRzID0ge1xuICBib2R5OiAxLjUsXG4gIGhlYWRpbmc6IDEuMlxufTtcbnZhciBzaXplcyA9IHtcbiAgLy8gY29udGFpbmVyIHdpZHRoc1xuICBzbTogNTQwLFxuICBtZDogNzIwLFxuICBsZzogOTYwLFxuICB4bDogMTE0MFxufTtcbnZhciByYWRpaSA9IHtcbiAgXCJkZWZhdWx0XCI6ICcwLjI1cmVtJyxcbiAgc206ICcwLjJyZW0nLFxuICBsZzogJzAuM3JlbScsXG4gIHBpbGw6ICc1MHJlbSdcbn07XG52YXIgc2hhZG93cyA9IHtcbiAgXCJkZWZhdWx0XCI6ICcwIC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAuMTUpJyxcbiAgc206ICcwIC4xMjVyZW0gLjI1cmVtIHJnYmEoMCwgMCwgMCwgLjA3NSknLFxuICBsZzogJzAgMXJlbSAzcmVtIHJnYmEoMCwgMCwgMCwgLjE3NSknXG59O1xudmFyIGhlYWRpbmcgPSB7XG4gIGZvbnRGYW1pbHk6ICdoZWFkaW5nJyxcbiAgZm9udFdlaWdodDogJ2hlYWRpbmcnLFxuICBsaW5lSGVpZ2h0OiAnaGVhZGluZycsXG4gIG10OiAwLFxuICBtYjogMlxufTtcbnZhciBkaXNwbGF5ID0ge1xuICBmb250V2VpZ2h0OiAnZGlzcGxheScsXG4gIGxpbmVIZWlnaHQ6ICdoZWFkaW5nJ1xufTsgLy8gdmFyaWFudHNcblxudmFyIHR5cGVTdHlsZXMgPSB7XG4gIGhlYWRpbmc6IGhlYWRpbmcsXG4gIGRpc3BsYXk6IGRpc3BsYXlcbn07XG52YXIgc3R5bGVzID0ge1xuICByb290OiB7XG4gICAgZm9udEZhbWlseTogJ2JvZHknLFxuICAgIGxpbmVIZWlnaHQ6ICdib2R5JyxcbiAgICBmb250V2VpZ2h0OiAnYm9keSdcbiAgfSxcbiAgYToge1xuICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnXG4gICAgfVxuICB9LFxuICBwOiB7XG4gICAgbWI6IDMsXG4gICAgbGluZUhlaWdodDogJ2JvZHknXG4gIH0sXG4gIGgxOiBfb2JqZWN0U3ByZWFkMih7fSwgaGVhZGluZywge1xuICAgIGZvbnRTaXplOiA3XG4gIH0pLFxuICBoMjogX29iamVjdFNwcmVhZDIoe30sIGhlYWRpbmcsIHtcbiAgICBmb250U2l6ZTogNlxuICB9KSxcbiAgaDM6IF9vYmplY3RTcHJlYWQyKHt9LCBoZWFkaW5nLCB7XG4gICAgZm9udFNpemU6IDVcbiAgfSksXG4gIGg0OiBfb2JqZWN0U3ByZWFkMih7fSwgaGVhZGluZywge1xuICAgIGZvbnRTaXplOiA0XG4gIH0pLFxuICBoNTogX29iamVjdFNwcmVhZDIoe30sIGhlYWRpbmcsIHtcbiAgICBmb250U2l6ZTogM1xuICB9KSxcbiAgaDY6IF9vYmplY3RTcHJlYWQyKHt9LCBoZWFkaW5nLCB7XG4gICAgZm9udFNpemU6IDJcbiAgfSksXG4gIGJsb2NrcXVvdGU6IHtcbiAgICBmb250U2l6ZTogMyxcbiAgICBtYjogM1xuICB9LFxuICB0YWJsZToge1xuICAgIC8vIHRvZG9cbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIG1hcmdpbkJvdHRvbTogMyxcbiAgICBjb2xvcjogJ2dyYXkuOScsXG4gICAgYm9yZGVyQ29sbGFwc2U6ICdjb2xsYXBzZSdcbiAgfSxcbiAgdGg6IHtcbiAgICB2ZXJ0aWNhbEFsaWduOiAnYm90dG9tJyxcbiAgICBib3JkZXJUb3BXaWR0aDogMixcbiAgICBib3JkZXJUb3BTdHlsZTogJ3NvbGlkJyxcbiAgICBib3JkZXJUb3BDb2xvcjogJ2dyYXkuMycsXG4gICAgYm9yZGVyQm90dG9tV2lkdGg6IDIsXG4gICAgYm9yZGVyQm90dG9tU3R5bGU6ICdzb2xpZCcsXG4gICAgYm9yZGVyQm90dG9tQ29sb3I6ICdncmF5LjMnLFxuICAgIHBhZGRpbmc6ICcuNzVyZW0nLFxuICAgIHRleHRBbGlnbjogJ2luaGVyaXQnXG4gIH0sXG4gIHRkOiB7XG4gICAgYm9yZGVyQm90dG9tV2lkdGg6IDIsXG4gICAgYm9yZGVyQm90dG9tU3R5bGU6ICdzb2xpZCcsXG4gICAgYm9yZGVyQm90dG9tQ29sb3I6ICdncmF5LjMnLFxuICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgIHBhZGRpbmc6ICcuNzVyZW0nXG4gIH0sXG4gIGlubGluZUNvZGU6IHtcbiAgICBjb2xvcjogJ3BpbmsnXG4gIH0sXG4gIGltZzoge1xuICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnYXV0bydcbiAgfVxufTtcbnZhciBib290c3RyYXAgPSB7XG4gIGJyZWFrcG9pbnRzOiBicmVha3BvaW50cyxcbiAgY29sb3JzOiBjb2xvcnMsXG4gIHNwYWNlOiBzcGFjZSxcbiAgZm9udHM6IGZvbnRzLFxuICBmb250U2l6ZXM6IGZvbnRTaXplcyxcbiAgZm9udFdlaWdodHM6IGZvbnRXZWlnaHRzLFxuICBsaW5lSGVpZ2h0czogbGluZUhlaWdodHMsXG4gIHNpemVzOiBzaXplcyxcbiAgc2hhZG93czogc2hhZG93cyxcbiAgcmFkaWk6IHJhZGlpLFxuICB0eXBlU3R5bGVzOiB0eXBlU3R5bGVzLFxuICBzdHlsZXM6IHN0eWxlc1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYm9vdHN0cmFwO1xuZXhwb3J0IHsgYmFzZUNvbG9ycywgY29sb3JzLCBzcGFjZSwgYnJlYWtwb2ludHMsIGZvbnRzLCBmb250V2VpZ2h0cywgZm9udFNpemVzLCBsaW5lSGVpZ2h0cywgc2l6ZXMsIHJhZGlpLCBzaGFkb3dzLCBzdHlsZXMsIGJvb3RzdHJhcCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtLmpzLm1hcFxuIiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcbiAgICBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICB9KTtcbiAgICBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XG4gIH1cblxuICByZXR1cm4ga2V5cztcbn1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG5cbiAgICBpZiAoaSAlIDIpIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbi8vIEJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9qZ3RobXMvYnVsbWEvYmxvYi9tYXN0ZXIvc2Fzcy91dGlsaXRpZXMvaW5pdGlhbC12YXJpYWJsZXMuc2Fzc1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL2pndGhtcy9idWxtYS9ibG9iL21hc3Rlci9zYXNzL2Jhc2UvbWluaXJlc2V0LnNhc3Ncbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qZ3RobXMvYnVsbWEvYmxvYi9tYXN0ZXIvc2Fzcy9iYXNlL2dlbmVyaWMuc2Fzc1xudmFyIGJhc2VDb2xvcnMgPSB7XG4gIGJsYWNrOiAnaHNsKDAsIDAlLCA0JSknLFxuICBibGFja0JpczogJ2hzbCgwLCAwJSwgNyUpJyxcbiAgYmxhY2tUZXI6ICdoc2woMCwgMCUsIDE0JSknLFxuICAvLyAoc2ljKVxuICBncmV5RGFya2VyOiAnaHNsKDAsIDAlLCAyMSUpJyxcbiAgZ3JleURhcms6ICdoc2woMCwgMCUsIDI5JSknLFxuICBncmV5OiAnaHNsKDAsIDAlLCA0OCUpJyxcbiAgZ3JleUxpZ2h0OiAnaHNsKDAsIDAlLCA3MSUpJyxcbiAgZ3JleUxpZ2h0ZXI6ICdoc2woMCwgMCUsIDg2JSknLFxuICB3aGl0ZVRlcjogJ2hzbCgwLCAwJSwgOTYlKScsXG4gIHdoaXRlQmlzOiAnaHNsKDAsIDAlLCA5OCUpJyxcbiAgd2hpdGU6ICdoc2woMCwgMCUsIDEwMCUpJyxcbiAgb3JhbmdlOiAnaHNsKDE0LCAgMTAwJSwgNTMlKScsXG4gIHllbGxvdzogJ2hzbCg0OCwgIDEwMCUsIDY3JSknLFxuICBncmVlbjogJ2hzbCgxNDEsIDcxJSwgIDQ4JSknLFxuICB0dXJxdW9pc2U6ICdoc2woMTcxLCAxMDAlLCA0MSUpJyxcbiAgY3lhbjogJ2hzbCgyMDQsIDg2JSwgIDUzJSknLFxuICBibHVlOiAnaHNsKDIxNywgNzElLCAgNTMlKScsXG4gIHB1cnBsZTogJ2hzbCgyNzEsIDEwMCUsIDcxJSknLFxuICByZWQ6ICdoc2woMzQ4LCAxMDAlLCA2MSUpJ1xufTtcbnZhciBjb2xvcnMgPSBfb2JqZWN0U3ByZWFkMih7fSwgYmFzZUNvbG9ycywge1xuICB0ZXh0OiBiYXNlQ29sb3JzLmdyZXlEYXJrLFxuICBiYWNrZ3JvdW5kOiBiYXNlQ29sb3JzLndoaXRlLFxuICBwcmltYXJ5OiBiYXNlQ29sb3JzLmJsdWUsXG4gIG11dGVkOiBiYXNlQ29sb3JzLndoaXRlVGVyLFxuICAvLyBidWxtYS1zcGVjaWZpY1xuICBpbmZvOiBiYXNlQ29sb3JzLmN5YW4sXG4gIHN1Y2Nlc3M6IGJhc2VDb2xvcnMuZ3JlZW4sXG4gIHdhcm5pbmc6IGJhc2VDb2xvcnMueWVsbG93LFxuICBkYW5nZXI6IGJhc2VDb2xvcnMucmVkLFxuICBsaWdodDogYmFzZUNvbG9ycy53aGl0ZVRlcixcbiAgZGFyazogYmFzZUNvbG9ycy5ncmV5RGFya2VyLFxuICBtb2Rlczoge1xuICAgIGludmVydDoge31cbiAgfVxufSk7XG52YXIgZm9udHMgPSB7XG4gIGJvZHk6ICdCbGlua01hY1N5c3RlbUZvbnQsIC1hcHBsZS1zeXN0ZW0sIFwiU2Vnb2UgVUlcIiwgXCJSb2JvdG9cIiwgXCJPeHlnZW5cIiwgXCJVYnVudHVcIiwgXCJDYW50YXJlbGxcIiwgXCJGaXJhIFNhbnNcIiwgXCJEcm9pZCBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBzYW5zLXNlcmlmJyxcbiAgaGVhZGluZzogJ2luaGVyaXQnLFxuICBtb25vc3BhY2U6ICdtb25vc3BhY2UnXG59O1xudmFyIGZvbnRTaXplcyA9IFsnMC43NXJlbScsICcwLjg3NXJlbScsIC8vIHR3ZWVuZXJcbicxcmVtJywgJzEuMjVyZW0nLCAnMS41cmVtJywgJzEuNzVyZW0nLCAnMnJlbScsICcyLjVyZW0nLCAnM3JlbSddO1xudmFyIGZvbnRXZWlnaHRzID0ge1xuICBib2R5OiA0MDAsXG4gIGhlYWRpbmc6IDcwMCxcbiAgYm9sZDogNzAwLFxuICBsaWdodDogMzAwLFxuICBtZWRpdW06IDUwMCxcbiAgc2VtaWJvbGQ6IDUwMFxufTtcbnZhciBsaW5lSGVpZ2h0cyA9IHtcbiAgYm9keTogMS41LFxuICBoZWFkaW5nOiAxLjEyNVxufTsgLy8gZ3Vlc3N0aW1hdGVcblxudmFyIHNwYWNlID0gWzAsIDAuNSwgMSwgMS41LCAyLCAyLjUsIDNdLm1hcChmdW5jdGlvbiAobikge1xuICByZXR1cm4gbiArICdyZW0nO1xufSk7XG52YXIgaGVhZGluZyA9IHtcbiAgZm9udEZhbWlseTogJ2hlYWRpbmcnLFxuICBmb250V2VpZ2h0OiAnaGVhZGluZycsXG4gIGxpbmVIZWlnaHQ6ICdoZWFkaW5nJyxcbiAgbTogMCxcbiAgbWI6IDFcbn07IC8vIG5lZWRzIHdvcmtzXG5cbnZhciBzdHlsZXMgPSB7XG4gIHJvb3Q6IHtcbiAgICBmb250RmFtaWx5OiAnYm9keScsXG4gICAgbGluZUhlaWdodDogJ2JvZHknLFxuICAgIGZvbnRXZWlnaHQ6ICdib2R5J1xuICB9LFxuICBhOiB7XG4gICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICc6aG92ZXInOiB7XG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZSdcbiAgICB9XG4gIH0sXG4gIGgxOiBfb2JqZWN0U3ByZWFkMih7fSwgaGVhZGluZywge1xuICAgIGZvbnRTaXplOiA2LFxuICAgIG10OiAyXG4gIH0pLFxuICBoMjogX29iamVjdFNwcmVhZDIoe30sIGhlYWRpbmcsIHtcbiAgICBmb250U2l6ZTogNSxcbiAgICBtdDogMlxuICB9KSxcbiAgaDM6IF9vYmplY3RTcHJlYWQyKHt9LCBoZWFkaW5nLCB7XG4gICAgZm9udFNpemU6IDQsXG4gICAgbXQ6IDNcbiAgfSksXG4gIGg0OiBfb2JqZWN0U3ByZWFkMih7fSwgaGVhZGluZywge1xuICAgIGZvbnRTaXplOiAzXG4gIH0pLFxuICBoNTogX29iamVjdFNwcmVhZDIoe30sIGhlYWRpbmcsIHtcbiAgICBmb250U2l6ZTogMlxuICB9KSxcbiAgaDY6IF9vYmplY3RTcHJlYWQyKHt9LCBoZWFkaW5nLCB7XG4gICAgZm9udFNpemU6IDEsXG4gICAgbWI6IDJcbiAgfSksXG4gIGNvZGU6IHt9LFxuICBwcmU6IHt9LFxuICBocjoge1xuICAgIGJnOiAnbXV0ZWQnLFxuICAgIGJvcmRlcjogMCxcbiAgICBoZWlnaHQ6ICcxcHgnLFxuICAgIG06IDNcbiAgfVxufTtcbnZhciBidWxtYSA9IHtcbiAgY29sb3JzOiBjb2xvcnMsXG4gIGZvbnRzOiBmb250cyxcbiAgZm9udFNpemVzOiBmb250U2l6ZXMsXG4gIGZvbnRXZWlnaHRzOiBmb250V2VpZ2h0cyxcbiAgc3BhY2U6IHNwYWNlLFxuICBzdHlsZXM6IHN0eWxlc1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYnVsbWE7XG5leHBvcnQgeyBiYXNlQ29sb3JzLCBjb2xvcnMsIGZvbnRzLCBmb250U2l6ZXMsIGZvbnRXZWlnaHRzLCBsaW5lSGVpZ2h0cywgc3BhY2UsIHN0eWxlcywgYnVsbWEgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbS5qcy5tYXBcbiIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG52YXIgX3ByaXNtO1xuXG52YXIgaGVhZGluZyA9IHtcbiAgZm9udEZhbWlseTogJ2hlYWRpbmcnLFxuICBmb250V2VpZ2h0OiAnaGVhZGluZycsXG4gIGxpbmVIZWlnaHQ6ICdoZWFkaW5nJ1xufTtcbnZhciBpbmRleCA9IHtcbiAgY29sb3JzOiB7XG4gICAgdGV4dDogJyNmZmYnLFxuICAgIGJhY2tncm91bmQ6ICcjMDYwNjA2JyxcbiAgICBwcmltYXJ5OiAnIzNjZicsXG4gICAgc2Vjb25kYXJ5OiAnI2UwZicsXG4gICAgbXV0ZWQ6ICcjMTkxOTE5JyxcbiAgICBoaWdobGlnaHQ6ICcjMjkxMTJjJyxcbiAgICBncmF5OiAnIzk5OScsXG4gICAgcHVycGxlOiAnI2MwZidcbiAgfSxcbiAgZm9udHM6IHtcbiAgICBib2R5OiAnc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWYnLFxuICAgIGhlYWRpbmc6ICdpbmhlcml0JyxcbiAgICBtb25vc3BhY2U6ICdNZW5sbywgbW9ub3NwYWNlJ1xuICB9LFxuICBmb250U2l6ZXM6IFsxMiwgMTQsIDE2LCAyMCwgMjQsIDMyLCA0OCwgNjQsIDcyXSxcbiAgZm9udFdlaWdodHM6IHtcbiAgICBib2R5OiA0MDAsXG4gICAgaGVhZGluZzogNzAwLFxuICAgIGRpc3BsYXk6IDkwMFxuICB9LFxuICBsaW5lSGVpZ2h0czoge1xuICAgIGJvZHk6IDEuNSxcbiAgICBoZWFkaW5nOiAxLjI1XG4gIH0sXG4gIHRleHRTdHlsZXM6IHtcbiAgICBoZWFkaW5nOiBoZWFkaW5nLFxuICAgIGRpc3BsYXk6IHtcbiAgICAgIHZhcmlhbnQ6ICd0ZXh0U3R5bGVzLmhlYWRpbmcnLFxuICAgICAgZm9udFNpemU6IFs1LCA2XSxcbiAgICAgIGZvbnRXZWlnaHQ6ICdkaXNwbGF5JyxcbiAgICAgIGxldHRlclNwYWNpbmc6ICctMC4wM2VtJyxcbiAgICAgIG10OiAzXG4gICAgfVxuICB9LFxuICBzdHlsZXM6IHtcbiAgICBDb250YWluZXI6IHtcbiAgICAgIHA6IDMsXG4gICAgICBtYXhXaWR0aDogMTAyNFxuICAgIH0sXG4gICAgcm9vdDoge1xuICAgICAgZm9udEZhbWlseTogJ2JvZHknLFxuICAgICAgbGluZUhlaWdodDogJ2JvZHknLFxuICAgICAgZm9udFdlaWdodDogJ2JvZHknXG4gICAgfSxcbiAgICBoMToge1xuICAgICAgdmFyaWFudDogJ3RleHRTdHlsZXMuZGlzcGxheSdcbiAgICB9LFxuICAgIGgyOiB7XG4gICAgICB2YXJpYW50OiAndGV4dFN0eWxlcy5oZWFkaW5nJyxcbiAgICAgIGZvbnRTaXplOiA1XG4gICAgfSxcbiAgICBoMzoge1xuICAgICAgdmFyaWFudDogJ3RleHRTdHlsZXMuaGVhZGluZycsXG4gICAgICBmb250U2l6ZTogNFxuICAgIH0sXG4gICAgaDQ6IHtcbiAgICAgIHZhcmlhbnQ6ICd0ZXh0U3R5bGVzLmhlYWRpbmcnLFxuICAgICAgZm9udFNpemU6IDNcbiAgICB9LFxuICAgIGg1OiB7XG4gICAgICB2YXJpYW50OiAndGV4dFN0eWxlcy5oZWFkaW5nJyxcbiAgICAgIGZvbnRTaXplOiAyXG4gICAgfSxcbiAgICBoNjoge1xuICAgICAgdmFyaWFudDogJ3RleHRTdHlsZXMuaGVhZGluZycsXG4gICAgICBmb250U2l6ZTogMVxuICAgIH0sXG4gICAgYToge1xuICAgICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBjb2xvcjogJ3NlY29uZGFyeSdcbiAgICAgIH1cbiAgICB9LFxuICAgIHByZToge1xuICAgICAgdmFyaWFudDogJ3ByaXNtJyxcbiAgICAgIGZvbnRGYW1pbHk6ICdtb25vc3BhY2UnLFxuICAgICAgZm9udFNpemU6IDEsXG4gICAgICBwOiAzLFxuICAgICAgY29sb3I6ICd0ZXh0JyxcbiAgICAgIGJnOiAnbXV0ZWQnLFxuICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICAgIGNvZGU6IHtcbiAgICAgICAgY29sb3I6ICdpbmhlcml0J1xuICAgICAgfVxuICAgIH0sXG4gICAgY29kZToge1xuICAgICAgZm9udEZhbWlseTogJ21vbm9zcGFjZScsXG4gICAgICBjb2xvcjogJ3NlY29uZGFyeScsXG4gICAgICBmb250U2l6ZTogMVxuICAgIH0sXG4gICAgaW5saW5lQ29kZToge1xuICAgICAgZm9udEZhbWlseTogJ21vbm9zcGFjZScsXG4gICAgICBjb2xvcjogJ3NlY29uZGFyeScsXG4gICAgICBiZzogJ211dGVkJ1xuICAgIH0sXG4gICAgdGFibGU6IF9kZWZpbmVQcm9wZXJ0eSh7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgbXk6IDQsXG4gICAgICBib3JkZXJDb2xsYXBzZTogJ3NlcGFyYXRlJyxcbiAgICAgIGJvcmRlclNwYWNpbmc6IDBcbiAgICB9LCBbJ3RoJywgJ3RkJ10sIHtcbiAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgICAgcHk6ICc0cHgnLFxuICAgICAgcHI6ICc0cHgnLFxuICAgICAgcGw6IDAsXG4gICAgICBib3JkZXJDb2xvcjogJ211dGVkJyxcbiAgICAgIGJvcmRlckJvdHRvbVN0eWxlOiAnc29saWQnXG4gICAgfSksXG4gICAgdGg6IHtcbiAgICAgIHZlcnRpY2FsQWxpZ246ICdib3R0b20nLFxuICAgICAgYm9yZGVyQm90dG9tV2lkdGg6ICcycHgnXG4gICAgfSxcbiAgICB0ZDoge1xuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICBib3JkZXJCb3R0b21XaWR0aDogJzFweCdcbiAgICB9LFxuICAgIGhyOiB7XG4gICAgICBib3JkZXI6IDAsXG4gICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQnLFxuICAgICAgYm9yZGVyQ29sb3I6ICdtdXRlZCdcbiAgICB9LFxuICAgIGltZzoge1xuICAgICAgbWF4V2lkdGg6ICcxMDAlJ1xuICAgIH1cbiAgfSxcbiAgcHJpc206IChfcHJpc20gPSB7fSwgX2RlZmluZVByb3BlcnR5KF9wcmlzbSwgWycuY29tbWVudCcsICcucHJvbG9nJywgJy5kb2N0eXBlJywgJy5jZGF0YScsICcucHVuY3R1YXRpb24nLCAnLm9wZXJhdG9yJywgJy5lbnRpdHknLCAnLnVybCddLCB7XG4gICAgY29sb3I6ICdncmF5J1xuICB9KSwgX2RlZmluZVByb3BlcnR5KF9wcmlzbSwgJy5jb21tZW50Jywge1xuICAgIGZvbnRTdHlsZTogJ2l0YWxpYydcbiAgfSksIF9kZWZpbmVQcm9wZXJ0eShfcHJpc20sIFsnLnByb3BlcnR5JywgJy50YWcnLCAnLmJvb2xlYW4nLCAnLm51bWJlcicsICcuY29uc3RhbnQnLCAnLnN5bWJvbCcsICcuZGVsZXRlZCcsICcuZnVuY3Rpb24nLCAnLmNsYXNzLW5hbWUnLCAnLnJlZ2V4JywgJy5pbXBvcnRhbnQnLCAnLnZhcmlhYmxlJ10sIHtcbiAgICBjb2xvcjogJ3B1cnBsZSdcbiAgfSksIF9kZWZpbmVQcm9wZXJ0eShfcHJpc20sIFsnLmF0cnVsZScsICcuYXR0ci12YWx1ZScsICcua2V5d29yZCddLCB7XG4gICAgY29sb3I6ICdwcmltYXJ5J1xuICB9KSwgX2RlZmluZVByb3BlcnR5KF9wcmlzbSwgWycuc2VsZWN0b3InLCAnLmF0dHItbmFtZScsICcuc3RyaW5nJywgJy5jaGFyJywgJy5idWlsdGluJywgJy5pbnNlcnRlZCddLCB7XG4gICAgY29sb3I6ICdzZWNvbmRhcnknXG4gIH0pLCBfcHJpc20pXG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbS5qcy5tYXBcbiIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG52YXIgX3ByaXNtO1xuXG52YXIgaGVhZGluZyA9IHtcbiAgZm9udEZhbWlseTogJ2hlYWRpbmcnLFxuICBmb250V2VpZ2h0OiAnaGVhZGluZycsXG4gIGxpbmVIZWlnaHQ6ICdoZWFkaW5nJ1xufTtcbnZhciBpbmRleCA9IHtcbiAgY29sb3JzOiB7XG4gICAgdGV4dDogJ2hzbCgyMTAsIDUwJSwgOTYlKScsXG4gICAgYmFja2dyb3VuZDogJ2hzbCgyMzAsIDI1JSwgMTglKScsXG4gICAgcHJpbWFyeTogJ2hzbCgyNjAsIDEwMCUsIDgwJSknLFxuICAgIHNlY29uZGFyeTogJ2hzbCgyOTAsIDEwMCUsIDgwJSknLFxuICAgIGhpZ2hsaWdodDogJ2hzbCgyNjAsIDIwJSwgNDAlKScsXG4gICAgcHVycGxlOiAnaHNsKDI5MCwgMTAwJSwgODAlKScsXG4gICAgbXV0ZWQ6ICdoc2xhKDIzMCwgMjAlLCAwJSwgMjAlKScsXG4gICAgZ3JheTogJ2hzbCgyMTAsIDUwJSwgNjAlKSdcbiAgfSxcbiAgZm9udHM6IHtcbiAgICBib2R5OiAnc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWYnLFxuICAgIGhlYWRpbmc6ICdpbmhlcml0JyxcbiAgICBtb25vc3BhY2U6ICdNZW5sbywgbW9ub3NwYWNlJ1xuICB9LFxuICBmb250U2l6ZXM6IFsxMiwgMTQsIDE2LCAyMCwgMjQsIDMyLCA0OCwgNjQsIDcyXSxcbiAgZm9udFdlaWdodHM6IHtcbiAgICBib2R5OiA0MDAsXG4gICAgaGVhZGluZzogNzAwLFxuICAgIGRpc3BsYXk6IDkwMFxuICB9LFxuICBsaW5lSGVpZ2h0czoge1xuICAgIGJvZHk6IDEuNSxcbiAgICBoZWFkaW5nOiAxLjI1XG4gIH0sXG4gIHRleHRTdHlsZXM6IHtcbiAgICBoZWFkaW5nOiBoZWFkaW5nLFxuICAgIGRpc3BsYXk6IHtcbiAgICAgIHZhcmlhbnQ6ICd0ZXh0U3R5bGVzLmhlYWRpbmcnLFxuICAgICAgZm9udFNpemU6IFs1LCA2XSxcbiAgICAgIGZvbnRXZWlnaHQ6ICdkaXNwbGF5JyxcbiAgICAgIGxldHRlclNwYWNpbmc6ICctMC4wM2VtJyxcbiAgICAgIG10OiAzXG4gICAgfVxuICB9LFxuICBzdHlsZXM6IHtcbiAgICBDb250YWluZXI6IHtcbiAgICAgIHA6IDMsXG4gICAgICBtYXhXaWR0aDogMTAyNFxuICAgIH0sXG4gICAgcm9vdDoge1xuICAgICAgZm9udEZhbWlseTogJ2JvZHknLFxuICAgICAgbGluZUhlaWdodDogJ2JvZHknLFxuICAgICAgZm9udFdlaWdodDogJ2JvZHknXG4gICAgfSxcbiAgICBoMToge1xuICAgICAgdmFyaWFudDogJ3RleHRTdHlsZXMuZGlzcGxheSdcbiAgICB9LFxuICAgIGgyOiB7XG4gICAgICB2YXJpYW50OiAndGV4dFN0eWxlcy5oZWFkaW5nJyxcbiAgICAgIGZvbnRTaXplOiA1XG4gICAgfSxcbiAgICBoMzoge1xuICAgICAgdmFyaWFudDogJ3RleHRTdHlsZXMuaGVhZGluZycsXG4gICAgICBmb250U2l6ZTogNFxuICAgIH0sXG4gICAgaDQ6IHtcbiAgICAgIHZhcmlhbnQ6ICd0ZXh0U3R5bGVzLmhlYWRpbmcnLFxuICAgICAgZm9udFNpemU6IDNcbiAgICB9LFxuICAgIGg1OiB7XG4gICAgICB2YXJpYW50OiAndGV4dFN0eWxlcy5oZWFkaW5nJyxcbiAgICAgIGZvbnRTaXplOiAyXG4gICAgfSxcbiAgICBoNjoge1xuICAgICAgdmFyaWFudDogJ3RleHRTdHlsZXMuaGVhZGluZycsXG4gICAgICBmb250U2l6ZTogMVxuICAgIH0sXG4gICAgYToge1xuICAgICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBjb2xvcjogJ3NlY29uZGFyeSdcbiAgICAgIH1cbiAgICB9LFxuICAgIHByZToge1xuICAgICAgdmFyaWFudDogJ3ByaXNtJyxcbiAgICAgIGZvbnRGYW1pbHk6ICdtb25vc3BhY2UnLFxuICAgICAgZm9udFNpemU6IDEsXG4gICAgICBwOiAzLFxuICAgICAgY29sb3I6ICd0ZXh0JyxcbiAgICAgIGJnOiAnbXV0ZWQnLFxuICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICAgIGNvZGU6IHtcbiAgICAgICAgY29sb3I6ICdpbmhlcml0J1xuICAgICAgfVxuICAgIH0sXG4gICAgY29kZToge1xuICAgICAgZm9udEZhbWlseTogJ21vbm9zcGFjZScsXG4gICAgICBjb2xvcjogJ3NlY29uZGFyeScsXG4gICAgICBmb250U2l6ZTogMVxuICAgIH0sXG4gICAgaW5saW5lQ29kZToge1xuICAgICAgZm9udEZhbWlseTogJ21vbm9zcGFjZScsXG4gICAgICBjb2xvcjogJ3NlY29uZGFyeScsXG4gICAgICBiZzogJ211dGVkJ1xuICAgIH0sXG4gICAgdGFibGU6IF9kZWZpbmVQcm9wZXJ0eSh7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgbXk6IDQsXG4gICAgICBib3JkZXJDb2xsYXBzZTogJ3NlcGFyYXRlJyxcbiAgICAgIGJvcmRlclNwYWNpbmc6IDBcbiAgICB9LCBbJ3RoJywgJ3RkJ10sIHtcbiAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgICAgcHk6ICc0cHgnLFxuICAgICAgcHI6ICc0cHgnLFxuICAgICAgcGw6IDAsXG4gICAgICBib3JkZXJDb2xvcjogJ211dGVkJyxcbiAgICAgIGJvcmRlckJvdHRvbVN0eWxlOiAnc29saWQnXG4gICAgfSksXG4gICAgdGg6IHtcbiAgICAgIHZlcnRpY2FsQWxpZ246ICdib3R0b20nLFxuICAgICAgYm9yZGVyQm90dG9tV2lkdGg6ICcycHgnXG4gICAgfSxcbiAgICB0ZDoge1xuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICBib3JkZXJCb3R0b21XaWR0aDogJzFweCdcbiAgICB9LFxuICAgIGhyOiB7XG4gICAgICBib3JkZXI6IDAsXG4gICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQnLFxuICAgICAgYm9yZGVyQ29sb3I6ICdtdXRlZCdcbiAgICB9LFxuICAgIGltZzoge1xuICAgICAgbWF4V2lkdGg6ICcxMDAlJ1xuICAgIH1cbiAgfSxcbiAgcHJpc206IChfcHJpc20gPSB7fSwgX2RlZmluZVByb3BlcnR5KF9wcmlzbSwgWycuY29tbWVudCcsICcucHJvbG9nJywgJy5kb2N0eXBlJywgJy5jZGF0YScsICcucHVuY3R1YXRpb24nLCAnLm9wZXJhdG9yJywgJy5lbnRpdHknLCAnLnVybCddLCB7XG4gICAgY29sb3I6ICdncmF5J1xuICB9KSwgX2RlZmluZVByb3BlcnR5KF9wcmlzbSwgJy5jb21tZW50Jywge1xuICAgIGZvbnRTdHlsZTogJ2l0YWxpYydcbiAgfSksIF9kZWZpbmVQcm9wZXJ0eShfcHJpc20sIFsnLnByb3BlcnR5JywgJy50YWcnLCAnLmJvb2xlYW4nLCAnLm51bWJlcicsICcuY29uc3RhbnQnLCAnLnN5bWJvbCcsICcuZGVsZXRlZCcsICcuZnVuY3Rpb24nLCAnLmNsYXNzLW5hbWUnLCAnLnJlZ2V4JywgJy5pbXBvcnRhbnQnLCAnLnZhcmlhYmxlJ10sIHtcbiAgICBjb2xvcjogJ3B1cnBsZSdcbiAgfSksIF9kZWZpbmVQcm9wZXJ0eShfcHJpc20sIFsnLmF0cnVsZScsICcuYXR0ci12YWx1ZScsICcua2V5d29yZCddLCB7XG4gICAgY29sb3I6ICdwcmltYXJ5J1xuICB9KSwgX2RlZmluZVByb3BlcnR5KF9wcmlzbSwgWycuc2VsZWN0b3InLCAnLmF0dHItbmFtZScsICcuc3RyaW5nJywgJy5jaGFyJywgJy5idWlsdGluJywgJy5pbnNlcnRlZCddLCB7XG4gICAgY29sb3I6ICdzZWNvbmRhcnknXG4gIH0pLCBfcHJpc20pXG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbS5qcy5tYXBcbiIsImltcG9ydCBiYXNlIGZyb20gJ0B0aGVtZS11aS9wcmVzZXQtYmFzZSc7XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG4gICAgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgfSk7XG4gICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICB9XG5cbiAgcmV0dXJuIGtleXM7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgaWYgKGkgJSAyKSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG52YXIgZnVuayA9IF9vYmplY3RTcHJlYWQyKHt9LCBiYXNlLCB7XG4gIGZvbnRzOiB7XG4gICAgYm9keTogJ1BvcHBpbnMsIHNhbnMtc2VyaWYnLFxuICAgIGhlYWRpbmc6ICdQb3BwaW5zLCBzYW5zLXNlcmlmJyxcbiAgICBtb25vc3BhY2U6ICdNZW5sbywgbW9ub3NwYWNlJ1xuICB9LFxuICBsaW5lSGVpZ2h0czoge1xuICAgIGJvZHk6IDEuNjI1LFxuICAgIGhlYWRpbmc6IDEuMjVcbiAgfSxcbiAgZm9udFdlaWdodHM6IHtcbiAgICBib2R5OiA0MDAsXG4gICAgaGVhZGluZzogOTAwLFxuICAgIGJvbGQ6IDcwMFxuICB9LFxuICBjb2xvcnM6IF9vYmplY3RTcHJlYWQyKHt9LCBiYXNlLmNvbG9ycywge1xuICAgIHByaW1hcnk6ICcjNjA5JyxcbiAgICBzZWNvbmRhcnk6ICcjMzA2J1xuICB9KSxcbiAgc3R5bGVzOiBfb2JqZWN0U3ByZWFkMih7fSwgYmFzZS5zdHlsZXMpXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuaztcbmV4cG9ydCB7IGZ1bmsgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbS5qcy5tYXBcbiIsImltcG9ydCBiYXNlIGZyb20gJ0B0aGVtZS11aS9wcmVzZXQtYmFzZSc7XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG4gICAgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgfSk7XG4gICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICB9XG5cbiAgcmV0dXJuIGtleXM7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgaWYgKGkgJSAyKSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG52YXIgZnV0dXJlID0gX29iamVjdFNwcmVhZDIoe30sIGJhc2UsIHtcbiAgY29sb3JzOiB7XG4gICAgdGV4dDogJyMwMDAnLFxuICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgICBwcmltYXJ5OiAnIzExZScsXG4gICAgc2Vjb25kYXJ5OiAnI2MwYycsXG4gICAgaGlnaGxpZ2h0OiAnI2UwZScsXG4gICAgbXV0ZWQ6ICcjZjZmNmZmJyxcbiAgICBtb2Rlczoge1xuICAgICAgZGFyazoge1xuICAgICAgICB0ZXh0OiAnI2ZmZicsXG4gICAgICAgIGJhY2tncm91bmQ6ICcjMDAwJyxcbiAgICAgICAgcHJpbWFyeTogJyMwZmMnLFxuICAgICAgICBzZWNvbmRhcnk6ICcjMGNmJyxcbiAgICAgICAgaGlnaGxpZ2h0OiAnI2YwYycsXG4gICAgICAgIG11dGVkOiAnIzAxMSdcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGZvbnRzOiB7XG4gICAgYm9keTogJ1wiQXZlbmlyIE5leHRcIiwgc3lzdGVtLXVpLCBzYW5zLXNlcmlmJyxcbiAgICBoZWFkaW5nOiAnaW5oZXJpdCcsXG4gICAgbW9vbm9zcGFjZTogJ01lbmxvLCBtb25vc3BhY2UnXG4gIH0sXG4gIGZvbnRXZWlnaHRzOiB7XG4gICAgYm9keTogNDAwLFxuICAgIGhlYWRpbmc6IDYwMCxcbiAgICBib2xkOiA3MDBcbiAgfSxcbiAgbGluZUhlaWdodHM6IHtcbiAgICBib2R5OiAxLjc1LFxuICAgIGhlYWRpbmc6IDEuMjVcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1dHVyZTtcbmV4cG9ydCB7IGZ1dHVyZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtLmpzLm1hcFxuIiwiaW1wb3J0IGJhc2UgZnJvbSAnQHRoZW1lLXVpL3ByZXNldC1iYXNlJztcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcbiAgICBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICB9KTtcbiAgICBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XG4gIH1cblxuICByZXR1cm4ga2V5cztcbn1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG5cbiAgICBpZiAoaSAlIDIpIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbnZhciB0ZXh0ID0gJ3N5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmJztcbnZhciBwb2xhcmlzID0gX29iamVjdFNwcmVhZDIoe30sIGJhc2UsIHtcbiAgY29sb3JzOiB7XG4gICAgdGV4dDogJyM0NTRmNWInLFxuICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgICBwcmltYXJ5OiAnIzVjNmFjNCcsXG4gICAgc2Vjb25kYXJ5OiAnIzAwNmZiYicsXG4gICAgaGlnaGxpZ2h0OiAnIzQ3YzFiZicsXG4gICAgbXV0ZWQ6ICcjZTZlNmU2JyxcbiAgICBncmF5OiAnI2RmZTNlOCcsXG4gICAgYWNjZW50OiAnI2Y0OTM0MicsXG4gICAgZGFya2VuOiAnIzAwMDQ0YycsXG4gICAgbW9kZXM6IHtcbiAgICAgIGRhcms6IHtcbiAgICAgICAgdGV4dDogJyMzZTQxNTUnLFxuICAgICAgICBiYWNrZ3JvdW5kOiAnIzAwMDYzOScsXG4gICAgICAgIHByaW1hcnk6ICcjOWM2YWRlJyxcbiAgICAgICAgc2Vjb25kYXJ5OiAnI2I0ZTFmYScsXG4gICAgICAgIGhpZ2hsaWdodDogJyNiN2VjZWMnLFxuICAgICAgICBtdXRlZDogJyNlNmU2ZTYnXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBmb250czoge1xuICAgIGJvZHk6IHRleHQsXG4gICAgaGVhZGluZzogdGV4dCxcbiAgICBtb29ub3NwYWNlOiAnTWVubG8sIG1vbm9zcGFjZSdcbiAgfSxcbiAgZm9udFdlaWdodHM6IHtcbiAgICBib2R5OiA0MDAsXG4gICAgaGVhZGluZzogNjAwLFxuICAgIGJvbGQ6IDcwMFxuICB9LFxuICBsaW5lSGVpZ2h0czoge1xuICAgIGJvZHk6IDEuNzUsXG4gICAgaGVhZGluZzogMS4yNVxuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcG9sYXJpcztcbmV4cG9ydCB7IHBvbGFyaXMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbS5qcy5tYXBcbiIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG4gICAgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgfSk7XG4gICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICB9XG5cbiAgcmV0dXJuIGtleXM7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgaWYgKGkgJSAyKSB7XG4gICAgICBvd25LZXlzKHNvdXJjZSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3duS2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbnZhciBoZWFkaW5nID0ge1xuICBjb2xvcjogJ3RleHQnLFxuICBmb250RmFtaWx5OiAnaGVhZGluZycsXG4gIGxpbmVIZWlnaHQ6ICdoZWFkaW5nJyxcbiAgZm9udFdlaWdodDogJ2hlYWRpbmcnXG59O1xudmFyIGJhc2UgPSB7XG4gIHNwYWNlOiBbMCwgNCwgOCwgMTYsIDMyLCA2NCwgMTI4LCAyNTYsIDUxMl0sXG4gIGZvbnRzOiB7XG4gICAgYm9keTogJ3N5c3RlbS11aSwgc2Fucy1zZXJpZicsXG4gICAgaGVhZGluZzogJ2luaGVyaXQnLFxuICAgIG1vbm9zcGFjZTogJ01lbmxvLCBtb25vc3BhY2UnXG4gIH0sXG4gIGZvbnRTaXplczogWzEyLCAxNCwgMTYsIDIwLCAyNCwgMzIsIDQ4LCA2NCwgOTZdLFxuICBmb250V2VpZ2h0czoge1xuICAgIGJvZHk6IDQwMCxcbiAgICBoZWFkaW5nOiA3MDAsXG4gICAgYm9sZDogNzAwXG4gIH0sXG4gIGxpbmVIZWlnaHRzOiB7XG4gICAgYm9keTogMS41LFxuICAgIGhlYWRpbmc6IDEuMTI1XG4gIH0sXG4gIGNvbG9yczoge1xuICAgIHRleHQ6ICcjMDAwJyxcbiAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgcHJpbWFyeTogJyMwN2MnLFxuICAgIHNlY29uZGFyeTogJyMzMGMnLFxuICAgIG11dGVkOiAnI2Y2ZjZmNidcbiAgfSxcbiAgc3R5bGVzOiB7XG4gICAgcm9vdDoge1xuICAgICAgZm9udEZhbWlseTogJ2JvZHknLFxuICAgICAgbGluZUhlaWdodDogJ2JvZHknLFxuICAgICAgZm9udFdlaWdodDogJ2JvZHknXG4gICAgfSxcbiAgICBoMTogX29iamVjdFNwcmVhZDIoe30sIGhlYWRpbmcsIHtcbiAgICAgIGZvbnRTaXplOiA1XG4gICAgfSksXG4gICAgaDI6IF9vYmplY3RTcHJlYWQyKHt9LCBoZWFkaW5nLCB7XG4gICAgICBmb250U2l6ZTogNFxuICAgIH0pLFxuICAgIGgzOiBfb2JqZWN0U3ByZWFkMih7fSwgaGVhZGluZywge1xuICAgICAgZm9udFNpemU6IDNcbiAgICB9KSxcbiAgICBoNDogX29iamVjdFNwcmVhZDIoe30sIGhlYWRpbmcsIHtcbiAgICAgIGZvbnRTaXplOiAyXG4gICAgfSksXG4gICAgaDU6IF9vYmplY3RTcHJlYWQyKHt9LCBoZWFkaW5nLCB7XG4gICAgICBmb250U2l6ZTogMVxuICAgIH0pLFxuICAgIGg2OiBfb2JqZWN0U3ByZWFkMih7fSwgaGVhZGluZywge1xuICAgICAgZm9udFNpemU6IDBcbiAgICB9KSxcbiAgICBwOiB7XG4gICAgICBjb2xvcjogJ3RleHQnLFxuICAgICAgZm9udEZhbWlseTogJ2JvZHknLFxuICAgICAgZm9udFdlaWdodDogJ2JvZHknLFxuICAgICAgbGluZUhlaWdodDogJ2JvZHknXG4gICAgfSxcbiAgICBhOiB7XG4gICAgICBjb2xvcjogJ3ByaW1hcnknXG4gICAgfSxcbiAgICBwcmU6IHtcbiAgICAgIGZvbnRGYW1pbHk6ICdtb25vc3BhY2UnLFxuICAgICAgb3ZlcmZsb3dYOiAnYXV0bycsXG4gICAgICBjb2RlOiB7XG4gICAgICAgIGNvbG9yOiAnaW5oZXJpdCdcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvZGU6IHtcbiAgICAgIGZvbnRGYW1pbHk6ICdtb25vc3BhY2UnLFxuICAgICAgZm9udFNpemU6ICdpbmhlcml0J1xuICAgIH0sXG4gICAgdGFibGU6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBib3JkZXJDb2xsYXBzZTogJ3NlcGFyYXRlJyxcbiAgICAgIGJvcmRlclNwYWNpbmc6IDBcbiAgICB9LFxuICAgIHRoOiB7XG4gICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICAgIGJvcmRlckJvdHRvbVN0eWxlOiAnc29saWQnXG4gICAgfSxcbiAgICB0ZDoge1xuICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgICBib3JkZXJCb3R0b21TdHlsZTogJ3NvbGlkJ1xuICAgIH0sXG4gICAgaW1nOiB7XG4gICAgICBtYXhXaWR0aDogJzEwMCUnXG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBiYXNlO1xuZXhwb3J0IHsgYmFzZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtLmpzLm1hcFxuIiwiaW1wb3J0IGJhc2UgZnJvbSAnQHRoZW1lLXVpL3ByZXNldC1iYXNlJztcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcbiAgICBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICB9KTtcbiAgICBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XG4gIH1cblxuICByZXR1cm4ga2V5cztcbn1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG5cbiAgICBpZiAoaSAlIDIpIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbnZhciByb2JvdG8gPSBfb2JqZWN0U3ByZWFkMih7fSwgYmFzZSwge1xuICBjb2xvcnM6IHtcbiAgICB0ZXh0OiAnIzIwMjEyNCcsXG4gICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgIHByaW1hcnk6ICcjMWE3M2U4JyxcbiAgICBzZWNvbmRhcnk6ICcjOWMyN2IwJyxcbiAgICBtdXRlZDogJyNmMWYzZjQnXG4gIH0sXG4gIGZvbnRzOiB7XG4gICAgYm9keTogJ1JvYm90bywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmJyxcbiAgICBoZWFkaW5nOiAnUm9ib3RvLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYnLFxuICAgIG1vbm9zcGFjZTogJ1wiUm9ib3RvIE1vbm9cIiwgbW9ub3NwYWNlJ1xuICB9LFxuICBmb250V2VpZ2h0czoge1xuICAgIGJvZHk6IDQwMCxcbiAgICBoZWFkaW5nOiA2MDAsXG4gICAgYm9sZDogNjAwXG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByb2JvdG87XG5leHBvcnQgeyByb2JvdG8gfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbS5qcy5tYXBcbiIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG52YXIgX3ByaXNtO1xuXG52YXIgaGVhZGluZyA9IHtcbiAgZm9udEZhbWlseTogJ2hlYWRpbmcnLFxuICBmb250V2VpZ2h0OiAnaGVhZGluZycsXG4gIGxpbmVIZWlnaHQ6ICdoZWFkaW5nJ1xufTtcbnZhciBpbmRleCA9IHtcbiAgY29sb3JzOiB7XG4gICAgdGV4dDogJ2hzbCgxMCwgMjAlLCAyMCUpJyxcbiAgICBiYWNrZ3JvdW5kOiAnaHNsKDEwLCAxMCUsIDk4JSknLFxuICAgIHByaW1hcnk6ICdoc2woMTAsIDgwJSwgNTAlKScsXG4gICAgc2Vjb25kYXJ5OiAnaHNsKDEwLCA2MCUsIDUwJSknLFxuICAgIGhpZ2hsaWdodDogJ2hzbCgxMCwgNDAlLCA5MCUpJyxcbiAgICBwdXJwbGU6ICdoc2woMjUwLCA2MCUsIDMwJSknLFxuICAgIG11dGVkOiAnaHNsKDEwLCAyMCUsIDk0JSknLFxuICAgIGdyYXk6ICdoc2woMTAsIDIwJSwgNTAlKSdcbiAgfSxcbiAgZm9udHM6IHtcbiAgICBib2R5OiAnc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWYnLFxuICAgIGhlYWRpbmc6ICdpbmhlcml0JyxcbiAgICBtb25vc3BhY2U6ICdNZW5sbywgbW9ub3NwYWNlJ1xuICB9LFxuICBmb250U2l6ZXM6IFsxMiwgMTQsIDE2LCAyMCwgMjQsIDMyLCA0OCwgNjQsIDcyXSxcbiAgZm9udFdlaWdodHM6IHtcbiAgICBib2R5OiA0MDAsXG4gICAgaGVhZGluZzogNzAwLFxuICAgIGRpc3BsYXk6IDkwMFxuICB9LFxuICBsaW5lSGVpZ2h0czoge1xuICAgIGJvZHk6IDEuNSxcbiAgICBoZWFkaW5nOiAxLjI1XG4gIH0sXG4gIHRleHRTdHlsZXM6IHtcbiAgICBoZWFkaW5nOiBoZWFkaW5nLFxuICAgIGRpc3BsYXk6IHtcbiAgICAgIHZhcmlhbnQ6ICd0ZXh0U3R5bGVzLmhlYWRpbmcnLFxuICAgICAgZm9udFNpemU6IFs1LCA2XSxcbiAgICAgIGZvbnRXZWlnaHQ6ICdkaXNwbGF5JyxcbiAgICAgIGxldHRlclNwYWNpbmc6ICctMC4wM2VtJyxcbiAgICAgIG10OiAzXG4gICAgfVxuICB9LFxuICBzdHlsZXM6IHtcbiAgICBDb250YWluZXI6IHtcbiAgICAgIHA6IDMsXG4gICAgICBtYXhXaWR0aDogMTAyNFxuICAgIH0sXG4gICAgcm9vdDoge1xuICAgICAgZm9udEZhbWlseTogJ2JvZHknLFxuICAgICAgbGluZUhlaWdodDogJ2JvZHknLFxuICAgICAgZm9udFdlaWdodDogJ2JvZHknXG4gICAgfSxcbiAgICBoMToge1xuICAgICAgdmFyaWFudDogJ3RleHRTdHlsZXMuZGlzcGxheSdcbiAgICB9LFxuICAgIGgyOiB7XG4gICAgICB2YXJpYW50OiAndGV4dFN0eWxlcy5oZWFkaW5nJyxcbiAgICAgIGZvbnRTaXplOiA1XG4gICAgfSxcbiAgICBoMzoge1xuICAgICAgdmFyaWFudDogJ3RleHRTdHlsZXMuaGVhZGluZycsXG4gICAgICBmb250U2l6ZTogNFxuICAgIH0sXG4gICAgaDQ6IHtcbiAgICAgIHZhcmlhbnQ6ICd0ZXh0U3R5bGVzLmhlYWRpbmcnLFxuICAgICAgZm9udFNpemU6IDNcbiAgICB9LFxuICAgIGg1OiB7XG4gICAgICB2YXJpYW50OiAndGV4dFN0eWxlcy5oZWFkaW5nJyxcbiAgICAgIGZvbnRTaXplOiAyXG4gICAgfSxcbiAgICBoNjoge1xuICAgICAgdmFyaWFudDogJ3RleHRTdHlsZXMuaGVhZGluZycsXG4gICAgICBmb250U2l6ZTogMVxuICAgIH0sXG4gICAgYToge1xuICAgICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBjb2xvcjogJ3NlY29uZGFyeSdcbiAgICAgIH1cbiAgICB9LFxuICAgIHByZToge1xuICAgICAgdmFyaWFudDogJ3ByaXNtJyxcbiAgICAgIGZvbnRGYW1pbHk6ICdtb25vc3BhY2UnLFxuICAgICAgZm9udFNpemU6IDEsXG4gICAgICBwOiAzLFxuICAgICAgY29sb3I6ICd0ZXh0JyxcbiAgICAgIGJnOiAnbXV0ZWQnLFxuICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICAgIGNvZGU6IHtcbiAgICAgICAgY29sb3I6ICdpbmhlcml0J1xuICAgICAgfVxuICAgIH0sXG4gICAgY29kZToge1xuICAgICAgZm9udEZhbWlseTogJ21vbm9zcGFjZScsXG4gICAgICBjb2xvcjogJ3NlY29uZGFyeScsXG4gICAgICBmb250U2l6ZTogMVxuICAgIH0sXG4gICAgaW5saW5lQ29kZToge1xuICAgICAgZm9udEZhbWlseTogJ21vbm9zcGFjZScsXG4gICAgICBjb2xvcjogJ3NlY29uZGFyeScsXG4gICAgICBiZzogJ211dGVkJ1xuICAgIH0sXG4gICAgdGFibGU6IF9kZWZpbmVQcm9wZXJ0eSh7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgbXk6IDQsXG4gICAgICBib3JkZXJDb2xsYXBzZTogJ3NlcGFyYXRlJyxcbiAgICAgIGJvcmRlclNwYWNpbmc6IDBcbiAgICB9LCBbJ3RoJywgJ3RkJ10sIHtcbiAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgICAgcHk6ICc0cHgnLFxuICAgICAgcHI6ICc0cHgnLFxuICAgICAgcGw6IDAsXG4gICAgICBib3JkZXJDb2xvcjogJ211dGVkJyxcbiAgICAgIGJvcmRlckJvdHRvbVN0eWxlOiAnc29saWQnXG4gICAgfSksXG4gICAgdGg6IHtcbiAgICAgIHZlcnRpY2FsQWxpZ246ICdib3R0b20nLFxuICAgICAgYm9yZGVyQm90dG9tV2lkdGg6ICcycHgnXG4gICAgfSxcbiAgICB0ZDoge1xuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICBib3JkZXJCb3R0b21XaWR0aDogJzFweCdcbiAgICB9LFxuICAgIGhyOiB7XG4gICAgICBib3JkZXI6IDAsXG4gICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQnLFxuICAgICAgYm9yZGVyQ29sb3I6ICdtdXRlZCdcbiAgICB9LFxuICAgIGltZzoge1xuICAgICAgbWF4V2lkdGg6ICcxMDAlJ1xuICAgIH1cbiAgfSxcbiAgcHJpc206IChfcHJpc20gPSB7fSwgX2RlZmluZVByb3BlcnR5KF9wcmlzbSwgWycuY29tbWVudCcsICcucHJvbG9nJywgJy5kb2N0eXBlJywgJy5jZGF0YScsICcucHVuY3R1YXRpb24nLCAnLm9wZXJhdG9yJywgJy5lbnRpdHknLCAnLnVybCddLCB7XG4gICAgY29sb3I6ICdncmF5J1xuICB9KSwgX2RlZmluZVByb3BlcnR5KF9wcmlzbSwgJy5jb21tZW50Jywge1xuICAgIGZvbnRTdHlsZTogJ2l0YWxpYydcbiAgfSksIF9kZWZpbmVQcm9wZXJ0eShfcHJpc20sIFsnLnByb3BlcnR5JywgJy50YWcnLCAnLmJvb2xlYW4nLCAnLm51bWJlcicsICcuY29uc3RhbnQnLCAnLnN5bWJvbCcsICcuZGVsZXRlZCcsICcuZnVuY3Rpb24nLCAnLmNsYXNzLW5hbWUnLCAnLnJlZ2V4JywgJy5pbXBvcnRhbnQnLCAnLnZhcmlhYmxlJ10sIHtcbiAgICBjb2xvcjogJ3B1cnBsZSdcbiAgfSksIF9kZWZpbmVQcm9wZXJ0eShfcHJpc20sIFsnLmF0cnVsZScsICcuYXR0ci12YWx1ZScsICcua2V5d29yZCddLCB7XG4gICAgY29sb3I6ICdwcmltYXJ5J1xuICB9KSwgX2RlZmluZVByb3BlcnR5KF9wcmlzbSwgWycuc2VsZWN0b3InLCAnLmF0dHItbmFtZScsICcuc3RyaW5nJywgJy5jaGFyJywgJy5idWlsdGluJywgJy5pbnNlcnRlZCddLCB7XG4gICAgY29sb3I6ICdzZWNvbmRhcnknXG4gIH0pLCBfcHJpc20pXG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbS5qcy5tYXBcbiIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG52YXIgaGVhZGluZyA9IHtcbiAgZm9udEZhbWlseTogJ2hlYWRpbmcnLFxuICBmb250V2VpZ2h0OiAnaGVhZGluZycsXG4gIGxpbmVIZWlnaHQ6ICdoZWFkaW5nJ1xufTtcbnZhciBpbmRleCA9IHtcbiAgdXNlQ3VzdG9tUHJvcGVydGllczogdHJ1ZSxcbiAgaW5pdGlhbENvbG9yTW9kZTogJ3N5c3RlbScsXG4gIGNvbG9yczoge1xuICAgIHRleHQ6ICcjMDAwJyxcbiAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgcHJpbWFyeTogJyMzM2UnLFxuICAgIHNlY29uZGFyeTogJyMxMTknLFxuICAgIG11dGVkOiAnI2Y2ZjZmNicsXG4gICAgaGlnaGxpZ2h0OiAnI2VmZWZmZScsXG4gICAgLy8gJyNmZmZmY2MnLFxuICAgIGdyYXk6ICcjNzc3JyxcbiAgICBhY2NlbnQ6ICcjNjA5JyxcbiAgICBtb2Rlczoge1xuICAgICAgZGFyazoge1xuICAgICAgICB0ZXh0OiAnI2ZmZicsXG4gICAgICAgIGJhY2tncm91bmQ6ICcjMDYwNjA2JyxcbiAgICAgICAgcHJpbWFyeTogJyMzY2YnLFxuICAgICAgICBzZWNvbmRhcnk6ICcjZTBmJyxcbiAgICAgICAgbXV0ZWQ6ICcjMTkxOTE5JyxcbiAgICAgICAgaGlnaGxpZ2h0OiAnIzI5MTEyYycsXG4gICAgICAgIGdyYXk6ICcjOTk5JyxcbiAgICAgICAgYWNjZW50OiAnI2MwZidcbiAgICAgIH0sXG4gICAgICBkZWVwOiB7XG4gICAgICAgIHRleHQ6ICdoc2woMjEwLCA1MCUsIDk2JSknLFxuICAgICAgICBiYWNrZ3JvdW5kOiAnaHNsKDIzMCwgMjUlLCAxOCUpJyxcbiAgICAgICAgcHJpbWFyeTogJ2hzbCgyNjAsIDEwMCUsIDgwJSknLFxuICAgICAgICBzZWNvbmRhcnk6ICdoc2woMjkwLCAxMDAlLCA4MCUpJyxcbiAgICAgICAgaGlnaGxpZ2h0OiAnaHNsKDI2MCwgMjAlLCA0MCUpJyxcbiAgICAgICAgYWNjZW50OiAnaHNsKDI5MCwgMTAwJSwgODAlKScsXG4gICAgICAgIG11dGVkOiAnaHNsYSgyMzAsIDIwJSwgMCUsIDIwJSknLFxuICAgICAgICBncmF5OiAnaHNsKDIxMCwgNTAlLCA2MCUpJ1xuICAgICAgfSxcbiAgICAgIHN3aXNzOiB7XG4gICAgICAgIHRleHQ6ICdoc2woMTAsIDIwJSwgMjAlKScsXG4gICAgICAgIGJhY2tncm91bmQ6ICdoc2woMTAsIDEwJSwgOTglKScsXG4gICAgICAgIHByaW1hcnk6ICdoc2woMTAsIDgwJSwgNTAlKScsXG4gICAgICAgIHNlY29uZGFyeTogJ2hzbCgxMCwgNjAlLCA1MCUpJyxcbiAgICAgICAgaGlnaGxpZ2h0OiAnaHNsKDEwLCA0MCUsIDkwJSknLFxuICAgICAgICBhY2NlbnQ6ICdoc2woMjUwLCA2MCUsIDMwJSknLFxuICAgICAgICBtdXRlZDogJ2hzbCgxMCwgMjAlLCA5NCUpJyxcbiAgICAgICAgZ3JheTogJ2hzbCgxMCwgMjAlLCA1MCUpJ1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZm9udHM6IHtcbiAgICBib2R5OiAnc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWYnLFxuICAgIGhlYWRpbmc6ICdpbmhlcml0JyxcbiAgICBtb25vc3BhY2U6ICdNZW5sbywgbW9ub3NwYWNlJ1xuICB9LFxuICBmb250U2l6ZXM6IFsxMiwgMTQsIDE2LCAyMCwgMjQsIDMyLCA0OCwgNjQsIDcyXSxcbiAgZm9udFdlaWdodHM6IHtcbiAgICBib2R5OiA0MDAsXG4gICAgaGVhZGluZzogNzAwLFxuICAgIGRpc3BsYXk6IDkwMFxuICB9LFxuICBsaW5lSGVpZ2h0czoge1xuICAgIGJvZHk6IDEuNSxcbiAgICBoZWFkaW5nOiAxLjI1XG4gIH0sXG4gIHRleHRTdHlsZXM6IHtcbiAgICBoZWFkaW5nOiBoZWFkaW5nLFxuICAgIGRpc3BsYXk6IHtcbiAgICAgIHZhcmlhbnQ6ICd0ZXh0U3R5bGVzLmhlYWRpbmcnLFxuICAgICAgZm9udFNpemU6IFs1LCA2XSxcbiAgICAgIGZvbnRXZWlnaHQ6ICdkaXNwbGF5JyxcbiAgICAgIGxldHRlclNwYWNpbmc6ICctMC4wM2VtJyxcbiAgICAgIG10OiAzXG4gICAgfVxuICB9LFxuICBzdHlsZXM6IHtcbiAgICBDb250YWluZXI6IHtcbiAgICAgIHA6IDMsXG4gICAgICBtYXhXaWR0aDogMTAyNFxuICAgIH0sXG4gICAgcm9vdDoge1xuICAgICAgZm9udEZhbWlseTogJ2JvZHknLFxuICAgICAgbGluZUhlaWdodDogJ2JvZHknLFxuICAgICAgZm9udFdlaWdodDogJ2JvZHknXG4gICAgfSxcbiAgICBoMToge1xuICAgICAgdmFyaWFudDogJ3RleHRTdHlsZXMuZGlzcGxheSdcbiAgICB9LFxuICAgIGgyOiB7XG4gICAgICB2YXJpYW50OiAndGV4dFN0eWxlcy5oZWFkaW5nJyxcbiAgICAgIGZvbnRTaXplOiA1XG4gICAgfSxcbiAgICBoMzoge1xuICAgICAgdmFyaWFudDogJ3RleHRTdHlsZXMuaGVhZGluZycsXG4gICAgICBmb250U2l6ZTogNFxuICAgIH0sXG4gICAgaDQ6IHtcbiAgICAgIHZhcmlhbnQ6ICd0ZXh0U3R5bGVzLmhlYWRpbmcnLFxuICAgICAgZm9udFNpemU6IDNcbiAgICB9LFxuICAgIGg1OiB7XG4gICAgICB2YXJpYW50OiAndGV4dFN0eWxlcy5oZWFkaW5nJyxcbiAgICAgIGZvbnRTaXplOiAyXG4gICAgfSxcbiAgICBoNjoge1xuICAgICAgdmFyaWFudDogJ3RleHRTdHlsZXMuaGVhZGluZycsXG4gICAgICBmb250U2l6ZTogMVxuICAgIH0sXG4gICAgYToge1xuICAgICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBjb2xvcjogJ3NlY29uZGFyeSdcbiAgICAgIH1cbiAgICB9LFxuICAgIHByZToge1xuICAgICAgZm9udEZhbWlseTogJ21vbm9zcGFjZScsXG4gICAgICBmb250U2l6ZTogMSxcbiAgICAgIHA6IDMsXG4gICAgICBjb2xvcjogJ3RleHQnLFxuICAgICAgYmc6ICdtdXRlZCcsXG4gICAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgICAgY29kZToge1xuICAgICAgICBjb2xvcjogJ2luaGVyaXQnXG4gICAgICB9XG4gICAgfSxcbiAgICBjb2RlOiB7XG4gICAgICBmb250RmFtaWx5OiAnbW9ub3NwYWNlJyxcbiAgICAgIGZvbnRTaXplOiAxXG4gICAgfSxcbiAgICBpbmxpbmVDb2RlOiB7XG4gICAgICBmb250RmFtaWx5OiAnbW9ub3NwYWNlJyxcbiAgICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcbiAgICAgIGJnOiAnbXV0ZWQnXG4gICAgfSxcbiAgICB0YWJsZTogX2RlZmluZVByb3BlcnR5KHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBteTogNCxcbiAgICAgIGJvcmRlckNvbGxhcHNlOiAnc2VwYXJhdGUnLFxuICAgICAgYm9yZGVyU3BhY2luZzogMFxuICAgIH0sIFsndGgnLCAndGQnXSwge1xuICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgICBweTogJzRweCcsXG4gICAgICBwcjogJzRweCcsXG4gICAgICBwbDogMCxcbiAgICAgIGJvcmRlckNvbG9yOiAnbXV0ZWQnLFxuICAgICAgYm9yZGVyQm90dG9tU3R5bGU6ICdzb2xpZCdcbiAgICB9KSxcbiAgICB0aDoge1xuICAgICAgdmVydGljYWxBbGlnbjogJ2JvdHRvbScsXG4gICAgICBib3JkZXJCb3R0b21XaWR0aDogJzJweCdcbiAgICB9LFxuICAgIHRkOiB7XG4gICAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJyxcbiAgICAgIGJvcmRlckJvdHRvbVdpZHRoOiAnMXB4J1xuICAgIH0sXG4gICAgaHI6IHtcbiAgICAgIGJvcmRlcjogMCxcbiAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCcsXG4gICAgICBib3JkZXJDb2xvcjogJ211dGVkJ1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20uanMubWFwXG4iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xuICAgIGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICAgIH0pO1xuICAgIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTtcbiAgfVxuXG4gIHJldHVybiBrZXlzO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkMih0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcblxuICAgIGlmIChpICUgMikge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuLy8gQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kY3NzL3RhaWx3aW5kY3NzL2Jsb2IvbWFzdGVyL3N0dWJzL2RlZmF1bHRDb25maWcuc3R1Yi5qc1xuLy8gYW5kIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2NvbXBvbmVudHNcbnZhciBib3JkZXJXaWR0aHMgPSB7XG4gIHB4OiAnMXB4JyxcbiAgJzAnOiAnMCcsXG4gICcyJzogJzJweCcsXG4gICc0JzogJzRweCcsXG4gICc4JzogJzhweCdcbn07XG52YXIgYnJlYWtwb2ludHMgPSBbJzY0MHB4JywgJzc2OHB4JywgJzEwMjRweCcsICcxMjgwcHgnXTtcbnZhciBiYXNlQ29sb3JzID0ge1xuICB0cmFuc3BhcmVudDogJ3RyYW5zcGFyZW50JyxcbiAgYmxhY2s6ICcjMDAwJyxcbiAgd2hpdGU6ICcjZmZmJyxcbiAgZ3JheTogW251bGwsICcjZjdmYWZjJywgJyNlZGYyZjcnLCAnI2UyZThmMCcsICcjY2JkNWUwJywgJyNhMGFlYzAnLCAnIzcxODA5NicsICcjNGE1NTY4JywgJyMyZDM3NDgnLCAnIzFhMjAyYyddLFxuICByZWQ6IFtudWxsLCAnI2ZmZjVmNScsICcjZmVkN2Q3JywgJyNmZWIyYjInLCAnI2ZjODE4MScsICcjZjU2NTY1JywgJyNlNTNlM2UnLCAnI2M1MzAzMCcsICcjOWIyYzJjJywgJyM3NDJhMmEnXSxcbiAgb3JhbmdlOiBbbnVsbCwgJyNmZmZhZjAnLCAnI2ZlZWJjOCcsICcjZmJkMzhkJywgJyNmNmFkNTUnLCAnI2VkODkzNicsICcjZGQ2YjIwJywgJyNjMDU2MjEnLCAnIzljNDIyMScsICcjN2IzNDFlJ10sXG4gIHllbGxvdzogW251bGwsICcjZmZmZmYwJywgJyNmZWZjYmYnLCAnI2ZhZjA4OScsICcjZjZlMDVlJywgJyNlY2M5NGInLCAnI2Q2OWUyZScsICcjYjc3OTFmJywgJyM5NzVhMTYnLCAnIzc0NDIxMCddLFxuICBncmVlbjogW251bGwsICcjZjBmZmY0JywgJyNjNmY2ZDUnLCAnIzlhZTZiNCcsICcjNjhkMzkxJywgJyM0OGJiNzgnLCAnIzM4YTE2OScsICcjMmY4NTVhJywgJyMyNzY3NDknLCAnIzIyNTQzZCddLFxuICB0ZWFsOiBbbnVsbCwgJyNlNmZmZmEnLCAnI2IyZjVlYScsICcjODFlNmQ5JywgJyM0ZmQxYzUnLCAnIzM4YjJhYycsICcjMzE5Nzk1JywgJyMyYzdhN2InLCAnIzI4NWU2MScsICcjMjM0ZTUyJ10sXG4gIGJsdWU6IFtudWxsLCAnI2ViZjhmZicsICcjYmVlM2Y4JywgJyM5MGNkZjQnLCAnIzYzYjNlZCcsICcjNDI5OWUxJywgJyMzMTgyY2UnLCAnIzJiNmNiMCcsICcjMmM1MjgyJywgJyMyYTQzNjUnXSxcbiAgaW5kaWdvOiBbbnVsbCwgJyNlYmY0ZmYnLCAnI2MzZGFmZScsICcjYTNiZmZhJywgJyM3ZjljZjUnLCAnIzY2N2VlYScsICcjNWE2N2Q4JywgJyM0YzUxYmYnLCAnIzQzNDE5MCcsICcjM2MzNjZiJ10sXG4gIHB1cnBsZTogW251bGwsICcjZmFmNWZmJywgJyNlOWQ4ZmQnLCAnI2Q2YmNmYScsICcjYjc5NGY0JywgJyM5ZjdhZWEnLCAnIzgwNWFkNScsICcjNmI0NmMxJywgJyM1NTNjOWEnLCAnIzQ0MzM3YSddLFxuICBwaW5rOiBbbnVsbCwgJyNmZmY1ZjcnLCAnI2ZlZDdlMicsICcjZmJiNmNlJywgJyNmNjg3YjMnLCAnI2VkNjRhNicsICcjZDUzZjhjJywgJyNiODMyODAnLCAnIzk3MjY2ZCcsICcjNzAyNDU5J11cbn07XG52YXIgY29tbW9uQnV0dG9uU3R5bGVzID0ge1xuICBweTogMixcbiAgcHg6IDMsXG4gIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gIGZvbnRTaXplOiBcIjEwMCVcIixcbiAgbGluZUhlaWdodDogXCJpbmhlcml0XCJcbn07XG52YXIgYnV0dG9ucyA9IHtcbiAgc2ltcGxlOiBfb2JqZWN0U3ByZWFkMih7fSwgY29tbW9uQnV0dG9uU3R5bGVzLCB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcInByaW1hcnlcIixcbiAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcImRlZmF1bHRcIixcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJwcmltYXJ5SG92ZXJcIlxuICAgIH1cbiAgfSksXG4gIHBpbGw6IF9vYmplY3RTcHJlYWQyKHt9LCBjb21tb25CdXR0b25TdHlsZXMsIHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicHJpbWFyeVwiLFxuICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgY29sb3I6IFwid2hpdGVcIixcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiZnVsbFwiLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInByaW1hcnlIb3ZlclwiXG4gICAgfVxuICB9KSxcbiAgb3V0bGluZTogX29iamVjdFNwcmVhZDIoe30sIGNvbW1vbkJ1dHRvblN0eWxlcywge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgIGJvcmRlcldpZHRoOiBcIjFweFwiLFxuICAgIGJvcmRlclN0eWxlOiBcInNvbGlkXCIsXG4gICAgYm9yZGVyQ29sb3I6IFwicHJpbWFyeVwiLFxuICAgIGNvbG9yOiBcInByaW1hcnlcIixcbiAgICBmb250V2VpZ2h0OiBcInNlbWlib2xkXCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcImRlZmF1bHRcIixcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJwcmltYXJ5XCIsXG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgYm9yZGVyQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICAgIH1cbiAgfSksXG4gIGJvcmRlcmVkOiBfb2JqZWN0U3ByZWFkMih7fSwgY29tbW9uQnV0dG9uU3R5bGVzLCB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcInByaW1hcnlcIixcbiAgICBib3JkZXJXaWR0aDogXCIxcHhcIixcbiAgICBib3JkZXJTdHlsZTogXCJzb2xpZFwiLFxuICAgIGJvcmRlckNvbG9yOiBcInByaW1hcnlIb3ZlclwiLFxuICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcImRlZmF1bHRcIixcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJwcmltYXJ5SG92ZXJcIlxuICAgIH1cbiAgfSksXG4gIGRpc2FibGVkOiBfb2JqZWN0U3ByZWFkMih7fSwgY29tbW9uQnV0dG9uU3R5bGVzLCB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcInByaW1hcnlcIixcbiAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgIG9wYWNpdHk6IDAuNSxcbiAgICBjdXJzb3I6IFwibm90LWFsbG93ZWRcIixcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgIGJvcmRlclJhZGl1czogXCJkZWZhdWx0XCJcbiAgfSksXG4gICczRCc6IF9vYmplY3RTcHJlYWQyKHt9LCBjb21tb25CdXR0b25TdHlsZXMsIHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicHJpbWFyeVwiLFxuICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgYm9yZGVyQm90dG9tV2lkdGg6IFwiNHB4XCIsXG4gICAgYm9yZGVyQm90dG9tU3R5bGU6IFwic29saWRcIixcbiAgICBib3JkZXJCb3R0b21Db2xvcjogXCJwcmltYXJ5SG92ZXJcIixcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgIGJvcmRlclJhZGl1czogXCJkZWZhdWx0XCIsXG4gICAgdHJhbnNpdGlvbjogXCJ0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dFwiLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoLTFweClcIlxuICAgIH1cbiAgfSksXG4gIGVsZXZhdGVkOiBfb2JqZWN0U3ByZWFkMih7fSwgY29tbW9uQnV0dG9uU3R5bGVzLCB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXG4gICAgYm9yZGVyV2lkdGg6IFwiMXB4XCIsXG4gICAgYm9yZGVyU3R5bGU6IFwic29saWRcIixcbiAgICBib3JkZXJDb2xvcjogXCJncmF5LjRcIixcbiAgICBjb2xvcjogXCJ0ZXh0XCIsXG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcImRlZmF1bHRcIixcbiAgICBib3hTaGFkb3c6IFwiZGVmYXVsdFwiLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBcImdyYXkuMVwiXG4gICAgfVxuICB9KVxufTtcbnZhciBjb2xvcnMgPSBfb2JqZWN0U3ByZWFkMih7fSwgYmFzZUNvbG9ycywge1xuICBncmF5RGFyazogYmFzZUNvbG9ycy5ncmF5WzhdLFxuICB0ZXh0OiBiYXNlQ29sb3JzLmdyYXlbOF0sXG4gIGJhY2tncm91bmQ6IGJhc2VDb2xvcnMud2hpdGUsXG4gIHByaW1hcnk6IGJhc2VDb2xvcnMuYmx1ZVs3XSxcbiAgcHJpbWFyeUhvdmVyOiBiYXNlQ29sb3JzLmJsdWVbOF0sXG4gIHNlY29uZGFyeTogYmFzZUNvbG9ycy5ncmF5WzZdLFxuICBtdXRlZDogYmFzZUNvbG9ycy5ncmF5WzNdLFxuICBzdWNjZXNzOiBiYXNlQ29sb3JzLmdyZWVuWzNdLFxuICBpbmZvOiBiYXNlQ29sb3JzLmJsdWVbNF0sXG4gIHdhcm5pbmc6IGJhc2VDb2xvcnMueWVsbG93WzNdLFxuICBkYW5nZXI6IGJhc2VDb2xvcnMucmVkWzNdLFxuICBsaWdodDogYmFzZUNvbG9ycy5ncmF5WzFdLFxuICBkYXJrOiBiYXNlQ29sb3JzLmdyYXlbOF0sXG4gIHRleHRNdXRlZDogYmFzZUNvbG9ycy5ncmF5WzZdXG59KTtcbnZhciBiYXNlRm9udHMgPSB7XG4gIHNhbnM6ICctYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXCJTZWdvZSBVSVwiLFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsQXJpYWwsXCJOb3RvIFNhbnNcIixzYW5zLXNlcmlmLFwiQXBwbGUgQ29sb3IgRW1vamlcIixcIlNlZ29lIFVJIEVtb2ppXCIsXCJTZWdvZSBVSSBTeW1ib2xcIixcIk5vdG8gQ29sb3IgRW1vamlcIicsXG4gIHNlcmlmOiAnR2VvcmdpYSwgQ2FtYnJpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmJyxcbiAgbW9ubzogJ01lbmxvLE1vbmFjbyxDb25zb2xhcyxcIkxpYmVyYXRpb24gTW9ub1wiLFwiQ291cmllciBOZXdcIixtb25vc3BhY2UnXG59O1xudmFyIGZvbnRzID0gX29iamVjdFNwcmVhZDIoe30sIGJhc2VGb250cywge1xuICBib2R5OiBiYXNlRm9udHMuc2FucyxcbiAgaGVhZGluZzogJ2luaGVyaXQnLFxuICBtb25vc3BhY2U6IGJhc2VGb250cy5tb25vXG59KTtcbnZhciBmb250U2l6ZXMgPSBbJzAuODc1cmVtJywgJzFyZW0nLCAnMS4yNXJlbScsICcxLjVyZW0nLCAnMS44NzVyZW0nLCAnMi4yNXJlbScsICczcmVtJywgJzRyZW0nLCAnNC41cmVtJ107XG52YXIgYmFzZUZvbnRXZWlnaHRzID0ge1xuICBoYWlybGluZTogJzEwMCcsXG4gIHRoaW46ICcyMDAnLFxuICBsaWdodDogJzMwMCcsXG4gIG5vcm1hbDogJzQwMCcsXG4gIG1lZGl1bTogJzUwMCcsXG4gIHNlbWlib2xkOiAnNjAwJyxcbiAgYm9sZDogJzcwMCcsXG4gIGV4dHJhYm9sZDogJzgwMCcsXG4gIGJsYWNrOiAnOTAwJ1xufTtcbnZhciBmb250V2VpZ2h0cyA9IF9vYmplY3RTcHJlYWQyKHt9LCBiYXNlRm9udFdlaWdodHMsIHtcbiAgYm9keTogYmFzZUZvbnRXZWlnaHRzLm5vcm1hbCxcbiAgaGVhZGluZzogYmFzZUZvbnRXZWlnaHRzLmJvbGRcbn0pO1xudmFyIGNvbW1vbklucHV0U3R5bGVzID0ge1xuICBweTogMixcbiAgcHg6IDMsXG4gIGZvbnRTaXplOiBcIjEwMCVcIixcbiAgYm9yZGVyUmFkaXVzOiBcImRlZmF1bHRcIixcbiAgYXBwZWFyYW5jZTogXCJub25lXCIsXG4gIGxpbmVIZWlnaHQ6IFwidGlnaHRcIlxufTtcbnZhciBpbnB1dHMgPSB7XG4gIHNoYWRvdzogX29iamVjdFNwcmVhZDIoe30sIGNvbW1vbklucHV0U3R5bGVzLCB7XG4gICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICBjb2xvcjogXCJncmF5LjdcIixcbiAgICBib3hTaGFkb3c6IFwiZGVmYXVsdFwiLFxuICAgICcmOmZvY3VzJzoge1xuICAgICAgb3V0bGluZTogXCJub25lXCIsXG4gICAgICBib3hTaGFkb3c6IFwib3V0bGluZVwiXG4gICAgfVxuICB9KSxcbiAgaW5saW5lOiBfb2JqZWN0U3ByZWFkMih7fSwgY29tbW9uSW5wdXRTdHlsZXMsIHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JheS4yXCIsXG4gICAgYm9yZGVyV2lkdGg6IFwiMnB4XCIsXG4gICAgYm9yZGVyU3R5bGU6IFwic29saWRcIixcbiAgICBib3JkZXJDb2xvcjogXCJncmF5LjJcIixcbiAgICBjb2xvcjogXCJncmF5LjdcIixcbiAgICAnJjpmb2N1cyc6IHtcbiAgICAgIG91dGxpbmU6IFwibm9uZVwiLFxuICAgICAgYm9yZGVyQ29sb3I6IFwicHJpbWFyeVwiLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCJcbiAgICB9XG4gIH0pLFxuICB1bmRlcmxpbmU6IF9vYmplY3RTcHJlYWQyKHt9LCBjb21tb25JbnB1dFN0eWxlcywge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgYm9yZGVyQm90dG9tV2lkdGg6IFwiMnB4XCIsXG4gICAgYm9yZGVyQm90dG9tU3R5bGU6IFwic29saWRcIixcbiAgICBib3JkZXJCb3R0b21Db2xvcjogXCJwcmltYXJ5XCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjBweFwiLFxuICAgIGNvbG9yOiBcImdyYXkuN1wiLFxuICAgICcmOmZvY3VzJzoge1xuICAgICAgb3V0bGluZTogXCJub25lXCIsXG4gICAgICBib3JkZXJDb2xvcjogXCJwcmltYXJ5XCIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIlxuICAgIH1cbiAgfSlcbn07XG52YXIgbGV0dGVyU3BhY2luZ3MgPSB7XG4gIHRpZ2h0ZXI6ICctMC4wNWVtJyxcbiAgdGlnaHQ6ICctMC4wMjVlbScsXG4gIG5vcm1hbDogJzAnLFxuICB3aWRlOiAnMC4wMjVlbScsXG4gIHdpZGVyOiAnMC4wNWVtJyxcbiAgd2lkZXN0OiAnMC4xZW0nXG59O1xudmFyIGJhc2VMaW5lSGVpZ2h0cyA9IHtcbiAgbm9uZTogJzEnLFxuICB0aWdodDogJzEuMjUnLFxuICBzbnVnOiAnMS4zNzUnLFxuICBub3JtYWw6ICcxLjUnLFxuICByZWxheGVkOiAnMS42MjUnLFxuICBsb29zZTogJzInXG59O1xudmFyIGxpbmVIZWlnaHRzID0gX29iamVjdFNwcmVhZDIoe30sIGJhc2VMaW5lSGVpZ2h0cywge1xuICBib2R5OiBiYXNlTGluZUhlaWdodHMucmVsYXhlZCxcbiAgaGVhZGluZzogYmFzZUxpbmVIZWlnaHRzLnRpZ2h0XG59KTtcbnZhciByYWRpaSA9IHtcbiAgbm9uZTogJzAnLFxuICBzbTogJzAuMTI1cmVtJyxcbiAgXCJkZWZhdWx0XCI6ICcwLjI1cmVtJyxcbiAgbGc6ICcwLjVyZW0nLFxuICBmdWxsOiAnOTk5OXB4J1xufTtcbnZhciBzaXplcyA9IHtcbiAgcHg6ICcxcHgnLFxuICAnMCc6ICcwJyxcbiAgJzEnOiAnMC4yNXJlbScsXG4gICcyJzogJzAuNXJlbScsXG4gICczJzogJzAuNzVyZW0nLFxuICAnNCc6ICcxcmVtJyxcbiAgJzUnOiAnMS4yNXJlbScsXG4gICc2JzogJzEuNXJlbScsXG4gICc4JzogJzJyZW0nLFxuICAnMTAnOiAnMi41cmVtJyxcbiAgJzEyJzogJzNyZW0nLFxuICAnMTYnOiAnNHJlbScsXG4gICcyMCc6ICc1cmVtJyxcbiAgJzI0JzogJzZyZW0nLFxuICAnMzInOiAnOHJlbScsXG4gICc0MCc6ICcxMHJlbScsXG4gICc0OCc6ICcxMnJlbScsXG4gICc1Nic6ICcxNHJlbScsXG4gICc2NCc6ICcxNnJlbScsXG4gIHhzOiAnMjByZW0nLFxuICBzbTogJzI0cmVtJyxcbiAgbWQ6ICcyOHJlbScsXG4gIGxnOiAnMzJyZW0nLFxuICB4bDogJzM2cmVtJyxcbiAgJzJ4bCc6ICc0MnJlbScsXG4gICczeGwnOiAnNDhyZW0nLFxuICAnNHhsJzogJzU2cmVtJyxcbiAgJzV4bCc6ICc2NHJlbScsXG4gICc2eGwnOiAnNzJyZW0nLFxuICAnMS8yJzogJzUwJScsXG4gICcxLzMnOiAnMzMuMzMzMzMzJScsXG4gICcyLzMnOiAnNjYuNjY2NjY3JScsXG4gICcxLzQnOiAnMjUlJyxcbiAgJzIvNCc6ICc1MCUnLFxuICAnMy80JzogJzc1JScsXG4gICcxLzUnOiAnMjAlJyxcbiAgJzIvNSc6ICc0MCUnLFxuICAnMy81JzogJzYwJScsXG4gICc0LzUnOiAnODAlJyxcbiAgJzEvNic6ICcxNi42NjY2NjclJyxcbiAgJzIvNic6ICczMy4zMzMzMzMlJyxcbiAgJzMvNic6ICc1MCUnLFxuICAnNC82JzogJzY2LjY2NjY2NyUnLFxuICAnNS82JzogJzgzLjMzMzMzMyUnLFxuICAnMS8xMic6ICc4LjMzMzMzMyUnLFxuICAnMi8xMic6ICcxNi42NjY2NjclJyxcbiAgJzMvMTInOiAnMjUlJyxcbiAgJzQvMTInOiAnMzMuMzMzMzMzJScsXG4gICc1LzEyJzogJzQxLjY2NjY2NyUnLFxuICAnNi8xMic6ICc1MCUnLFxuICAnNy8xMic6ICc1OC4zMzMzMzMlJyxcbiAgJzgvMTInOiAnNjYuNjY2NjY3JScsXG4gICc5LzEyJzogJzc1JScsXG4gICcxMC8xMic6ICc4My4zMzMzMzMlJyxcbiAgJzExLzEyJzogJzkxLjY2NjY2NyUnLFxuICBmdWxsOiAnMTAwJScsXG4gIHNjcmVlbkhlaWdodDogJzEwMHZoJyxcbiAgc2NyZWVuV2lkdGg6ICcxMDB2dydcbn07XG52YXIgc2hhZG93cyA9IHtcbiAgXCJkZWZhdWx0XCI6ICcwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4wNiknLFxuICBtZDogJzAgNHB4IDZweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjA2KScsXG4gIGxnOiAnMCAxMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgNHB4IDZweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSknLFxuICB4bDogJzAgMjBweCAyNXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDEwcHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4wNCknLFxuICAnMnhsJzogJzAgMjVweCA1MHB4IC0xMnB4IHJnYmEoMCwgMCwgMCwgMC4yNSknLFxuICBpbm5lcjogJ2luc2V0IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4wNiknLFxuICBvdXRsaW5lOiAnMCAwIDAgM3B4IHJnYmEoNjYsIDE1MywgMjI1LCAwLjUpJyxcbiAgbm9uZTogJ25vbmUnXG59O1xudmFyIHNwYWNlID0gWzAsICcwLjI1cmVtJywgJzAuNXJlbScsICcxcmVtJywgJzJyZW0nLCAnNHJlbScsICc4cmVtJywgJzE2cmVtJywgJzMycmVtJ107XG52YXIgekluZGljZXMgPSB7XG4gIGF1dG86ICdhdXRvJyxcbiAgJzAnOiAnMCcsXG4gICcxMCc6ICcxMCcsXG4gICcyMCc6ICcyMCcsXG4gICczMCc6ICczMCcsXG4gICc0MCc6ICc0MCcsXG4gICc1MCc6ICc1MCdcbn07XG52YXIgaGVhZGluZyA9IHtcbiAgZm9udEZhbWlseTogJ2hlYWRpbmcnLFxuICBmb250V2VpZ2h0OiAnaGVhZGluZycsXG4gIGxpbmVIZWlnaHQ6ICdoZWFkaW5nJyxcbiAgbTogMCxcbiAgbWI6IDFcbn07XG52YXIgc3R5bGVzID0ge1xuICByb290OiB7XG4gICAgZm9udEZhbWlseTogJ2JvZHknLFxuICAgIGxpbmVIZWlnaHQ6ICdib2R5JyxcbiAgICBmb250V2VpZ2h0OiAnYm9keSdcbiAgfSxcbiAgYToge1xuICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnXG4gICAgfVxuICB9LFxuICBoMTogX29iamVjdFNwcmVhZDIoe30sIGhlYWRpbmcsIHtcbiAgICBmb250U2l6ZTogNixcbiAgICBtdDogMlxuICB9KSxcbiAgaDI6IF9vYmplY3RTcHJlYWQyKHt9LCBoZWFkaW5nLCB7XG4gICAgZm9udFNpemU6IDUsXG4gICAgbXQ6IDJcbiAgfSksXG4gIGgzOiBfb2JqZWN0U3ByZWFkMih7fSwgaGVhZGluZywge1xuICAgIGZvbnRTaXplOiA0LFxuICAgIG10OiAzXG4gIH0pLFxuICBoNDogX29iamVjdFNwcmVhZDIoe30sIGhlYWRpbmcsIHtcbiAgICBmb250U2l6ZTogM1xuICB9KSxcbiAgaDU6IF9vYmplY3RTcHJlYWQyKHt9LCBoZWFkaW5nLCB7XG4gICAgZm9udFNpemU6IDJcbiAgfSksXG4gIGg2OiBfb2JqZWN0U3ByZWFkMih7fSwgaGVhZGluZywge1xuICAgIGZvbnRTaXplOiAxLFxuICAgIG1iOiAyXG4gIH0pLFxuICBjb2RlOiB7fSxcbiAgcHJlOiB7fSxcbiAgaHI6IHtcbiAgICBiZzogJ211dGVkJyxcbiAgICBib3JkZXI6IDAsXG4gICAgaGVpZ2h0OiAnMXB4JyxcbiAgICBtOiAzXG4gIH1cbn07XG52YXIgdGFpbHdpbmQgPSB7XG4gIGJvcmRlcldpZHRoczogYm9yZGVyV2lkdGhzLFxuICBicmVha3BvaW50czogYnJlYWtwb2ludHMsXG4gIGNvbG9yczogY29sb3JzLFxuICBmb250czogZm9udHMsXG4gIGZvbnRTaXplczogZm9udFNpemVzLFxuICBmb250V2VpZ2h0czogZm9udFdlaWdodHMsXG4gIGxldHRlclNwYWNpbmdzOiBsZXR0ZXJTcGFjaW5ncyxcbiAgbGluZUhlaWdodHM6IGxpbmVIZWlnaHRzLFxuICBzaXplczogc2l6ZXMsXG4gIHNoYWRvd3M6IHNoYWRvd3MsXG4gIHNwYWNlOiBzcGFjZSxcbiAgcmFkaWk6IHJhZGlpLFxuICB6SW5kaWNlczogekluZGljZXMsXG4gIHN0eWxlczogc3R5bGVzLFxuICBidXR0b25zOiBidXR0b25zLFxuICBpbnB1dHM6IGlucHV0c1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdGFpbHdpbmQ7XG5leHBvcnQgeyBib3JkZXJXaWR0aHMsIGJyZWFrcG9pbnRzLCBiYXNlQ29sb3JzLCBidXR0b25zLCBjb2xvcnMsIGJhc2VGb250cywgZm9udHMsIGZvbnRTaXplcywgYmFzZUZvbnRXZWlnaHRzLCBmb250V2VpZ2h0cywgaW5wdXRzLCBsZXR0ZXJTcGFjaW5ncywgYmFzZUxpbmVIZWlnaHRzLCBsaW5lSGVpZ2h0cywgcmFkaWksIHNpemVzLCBzaGFkb3dzLCBzcGFjZSwgekluZGljZXMsIHN0eWxlcywgdGFpbHdpbmQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbS5qcy5tYXBcbiIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG52YXIgaGVhZGluZyA9IHtcbiAgZm9udEZhbWlseTogJ2hlYWRpbmcnLFxuICBmb250V2VpZ2h0OiAnaGVhZGluZycsXG4gIGxpbmVIZWlnaHQ6ICdoZWFkaW5nJ1xufTtcbnZhciBpbmRleCA9IHtcbiAgdXNlQ3VzdG9tUHJvcGVydGllczogdHJ1ZSxcbiAgaW5pdGlhbENvbG9yTW9kZTogJ2xpZ2h0JyxcbiAgY29sb3JzOiB7XG4gICAgdGV4dDogJyMwMDAnLFxuICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgICBwcmltYXJ5OiAnIzAwMCcsXG4gICAgc2Vjb25kYXJ5OiAnIzNmM2YzZicsXG4gICAgbXV0ZWQ6ICcjZTBlMGUwJyxcbiAgICBoaWdobGlnaHQ6ICcjOWY5ZjlmJyxcbiAgICBncmF5OiAnIzZjNmM2YycsXG4gICAgYWNjZW50OiAnIzNmM2YzZicsXG4gICAgbW9kZXM6IHtcbiAgICAgIGRhcms6IHtcbiAgICAgICAgdGV4dDogJyNmZmYnLFxuICAgICAgICBiYWNrZ3JvdW5kOiAnIzA2MDYwNicsXG4gICAgICAgIHByaW1hcnk6ICcjZDJkMmQyJyxcbiAgICAgICAgc2Vjb25kYXJ5OiAnI2IyYjJiMicsXG4gICAgICAgIG11dGVkOiAnIzE5MTkxOScsXG4gICAgICAgIGhpZ2hsaWdodDogJyMzYzNjM2MnLFxuICAgICAgICBncmF5OiAnIzk5OScsXG4gICAgICAgIGFjY2VudDogJyNlMGUwZTAnXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBmb250czoge1xuICAgIGJvZHk6ICdTaWxvbSwgbW9ub3NwYWNlJyxcbiAgICBoZWFkaW5nOiAnU2lsb20sIG1vbm9zcGFjZScsXG4gICAgbW9ub3NwYWNlOiAnU2lsb20sIG1vbm9zcGFjZSdcbiAgfSxcbiAgZm9udFNpemVzOiBbMTIsIDE0LCAxNiwgMjAsIDI0LCAzMiwgNDgsIDY0LCA3Ml0sXG4gIGZvbnRXZWlnaHRzOiB7XG4gICAgYm9keTogNDAwLFxuICAgIGhlYWRpbmc6IDcwMCxcbiAgICBkaXNwbGF5OiA5MDBcbiAgfSxcbiAgbGluZUhlaWdodHM6IHtcbiAgICBib2R5OiAxLjUsXG4gICAgaGVhZGluZzogMS4yNVxuICB9LFxuICB0ZXh0U3R5bGVzOiB7XG4gICAgaGVhZGluZzogaGVhZGluZyxcbiAgICBkaXNwbGF5OiB7XG4gICAgICB2YXJpYW50OiAndGV4dFN0eWxlcy5oZWFkaW5nJyxcbiAgICAgIGZvbnRTaXplOiBbNSwgNl0sXG4gICAgICBmb250V2VpZ2h0OiAnZGlzcGxheScsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuMDNlbScsXG4gICAgICBtdDogM1xuICAgIH1cbiAgfSxcbiAgc3R5bGVzOiB7XG4gICAgQ29udGFpbmVyOiB7XG4gICAgICBwOiAzLFxuICAgICAgbWF4V2lkdGg6IDEwMjRcbiAgICB9LFxuICAgIHJvb3Q6IHtcbiAgICAgIGZvbnRGYW1pbHk6ICdib2R5JyxcbiAgICAgIGxpbmVIZWlnaHQ6ICdib2R5JyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2R5J1xuICAgIH0sXG4gICAgaDE6IHtcbiAgICAgIHZhcmlhbnQ6ICd0ZXh0U3R5bGVzLmRpc3BsYXknXG4gICAgfSxcbiAgICBoMjoge1xuICAgICAgdmFyaWFudDogJ3RleHRTdHlsZXMuaGVhZGluZycsXG4gICAgICBmb250U2l6ZTogNVxuICAgIH0sXG4gICAgaDM6IHtcbiAgICAgIHZhcmlhbnQ6ICd0ZXh0U3R5bGVzLmhlYWRpbmcnLFxuICAgICAgZm9udFNpemU6IDRcbiAgICB9LFxuICAgIGg0OiB7XG4gICAgICB2YXJpYW50OiAndGV4dFN0eWxlcy5oZWFkaW5nJyxcbiAgICAgIGZvbnRTaXplOiAzXG4gICAgfSxcbiAgICBoNToge1xuICAgICAgdmFyaWFudDogJ3RleHRTdHlsZXMuaGVhZGluZycsXG4gICAgICBmb250U2l6ZTogMlxuICAgIH0sXG4gICAgaDY6IHtcbiAgICAgIHZhcmlhbnQ6ICd0ZXh0U3R5bGVzLmhlYWRpbmcnLFxuICAgICAgZm9udFNpemU6IDFcbiAgICB9LFxuICAgIHA6IHtcbiAgICAgIGZvbnRTaXplOiAyXG4gICAgfSxcbiAgICBhOiB7XG4gICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGNvbG9yOiAnc2Vjb25kYXJ5J1xuICAgICAgfVxuICAgIH0sXG4gICAgcHJlOiB7XG4gICAgICBmb250RmFtaWx5OiAnbW9ub3NwYWNlJyxcbiAgICAgIGZvbnRTaXplOiAxLFxuICAgICAgcDogMyxcbiAgICAgIGNvbG9yOiAndGV4dCcsXG4gICAgICBiZzogJ211dGVkJyxcbiAgICAgIGJvcmRlckNvbG9yOiAndGV4dCcsXG4gICAgICBib3JkZXJTdHlsZTogJ3NvbGlkJyxcbiAgICAgIGJvcmRlclRvcFdpZHRoOiAwLFxuICAgICAgYm9yZGVyTGVmdFdpZHRoOiAwLFxuICAgICAgYm9yZGVyUmlnaHRXaWR0aDogOCxcbiAgICAgIGJvcmRlckJvdHRvbVdpZHRoOiA4LFxuICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICAgIGNvZGU6IHtcbiAgICAgICAgY29sb3I6ICdpbmhlcml0J1xuICAgICAgfVxuICAgIH0sXG4gICAgY29kZToge1xuICAgICAgZm9udEZhbWlseTogJ21vbm9zcGFjZScsXG4gICAgICBmb250U2l6ZTogMVxuICAgIH0sXG4gICAgaW5saW5lQ29kZToge1xuICAgICAgZm9udEZhbWlseTogJ21vbm9zcGFjZScsXG4gICAgICBjb2xvcjogJ3NlY29uZGFyeScsXG4gICAgICBiZzogJ211dGVkJyxcbiAgICAgIHB4OiAyXG4gICAgfSxcbiAgICB1bDoge1xuICAgICAgbGlzdFN0eWxlVHlwZTogJ3NxdWFyZSdcbiAgICB9LFxuICAgIHRhYmxlOiBfZGVmaW5lUHJvcGVydHkoe1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIG15OiA0LFxuICAgICAgYm9yZGVyQ29sbGFwc2U6ICdzZXBhcmF0ZScsXG4gICAgICBib3JkZXJTcGFjaW5nOiAwXG4gICAgfSwgWyd0aCcsICd0ZCddLCB7XG4gICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICAgIHB5OiAnNHB4JyxcbiAgICAgIHByOiAnNHB4JyxcbiAgICAgIHBsOiAwLFxuICAgICAgYm9yZGVyQ29sb3I6ICd0ZXh0JyxcbiAgICAgIGJvcmRlckJvdHRvbVN0eWxlOiAnc29saWQnXG4gICAgfSksXG4gICAgdGg6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ211dGVkJyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICdib3R0b20nLFxuICAgICAgYm9yZGVyQm90dG9tV2lkdGg6IDhcbiAgICB9LFxuICAgIHRkOiB7XG4gICAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJyxcbiAgICAgIGJvcmRlckJvdHRvbVdpZHRoOiA0XG4gICAgfSxcbiAgICBocjoge1xuICAgICAgYm9yZGVyOiAwLFxuICAgICAgYm9yZGVyQm90dG9tOiAnOHB4IHNvbGlkJyxcbiAgICAgIGJvcmRlckNvbG9yOiAndGV4dCdcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtLmpzLm1hcFxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBiYXNlIH0gZnJvbSAnQHRoZW1lLXVpL3ByZXNldC1iYXNlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZGFyayB9IGZyb20gJ0B0aGVtZS11aS9wcmVzZXQtZGFyayc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGRlZXAgfSBmcm9tICdAdGhlbWUtdWkvcHJlc2V0LWRlZXAnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmdW5rIH0gZnJvbSAnQHRoZW1lLXVpL3ByZXNldC1mdW5rJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZnV0dXJlIH0gZnJvbSAnQHRoZW1lLXVpL3ByZXNldC1mdXR1cmUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyByb2JvdG8gfSBmcm9tICdAdGhlbWUtdWkvcHJlc2V0LXJvYm90byc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHN3aXNzIH0gZnJvbSAnQHRoZW1lLXVpL3ByZXNldC1zd2lzcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHN5c3RlbSB9IGZyb20gJ0B0aGVtZS11aS9wcmVzZXQtc3lzdGVtJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdG9zaCB9IGZyb20gJ0B0aGVtZS11aS9wcmVzZXQtdG9zaCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGJvb3RzdHJhcCB9IGZyb20gJ0B0aGVtZS11aS9wcmVzZXQtYm9vdHN0cmFwJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYnVsbWEgfSBmcm9tICdAdGhlbWUtdWkvcHJlc2V0LWJ1bG1hJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcG9sYXJpcyB9IGZyb20gJ0B0aGVtZS11aS9wcmVzZXQtcG9sYXJpcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHRhaWx3aW5kIH0gZnJvbSAnQHRoZW1lLXVpL3ByZXNldC10YWlsd2luZCc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20uanMubWFwXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vdGhlbWUnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHtDb21wb25lbnQsIHBhZ2VQcm9wc30pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFRoZW1lUHJvdmlkZXI+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9Lz5cclxuICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHJvYm90byB9IGZyb20gJ0B0aGVtZS11aS9wcmVzZXRzJ1xyXG5cclxuY29uc3QgdGhlbWUgPSB7XHJcbiAgLi4ucm9ib3RvLFxyXG4gIGNvbnRhaW5lcnM6IHtcclxuICAgIGNhcmQ6IHtcclxuICAgICAgYm94U2hhZG93OiAnMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMjQpJyxcclxuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkJyxcclxuICAgICAgYm9yZGVyQ29sb3I6ICdtdXRlZCcsXHJcbiAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXHJcbiAgICAgIHA6IDIsXHJcbiAgICB9LFxyXG4gICAgcGFnZToge1xyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBtYXhXaWR0aDogJzk2MHB4JyxcclxuICAgICAgbTogMCxcclxuICAgICAgbXg6ICdhdXRvJyxcclxuICAgIH1cclxuICB9LFxyXG4gIHN0eWxlczoge1xyXG4gICAgLi4ucm9ib3RvLnN0eWxlc1xyXG4gIH1cclxufVxyXG5cclxuY29uc29sZS5sb2codGhlbWUpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGhlbWUiXSwic291cmNlUm9vdCI6IiJ9