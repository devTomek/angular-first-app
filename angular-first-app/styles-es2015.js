(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* Global Styles */\r\n\r\n* {\r\n  font-family: 'Roboto', Arial, sans-serif;\r\n  color: #616161;\r\n  box-sizing: border-box;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\nrouter-outlet + *  {\r\n  padding: 0 16px;\r\n}\r\n\r\n/* Text */\r\n\r\nh1 {\r\n  font-size: 32px;\r\n}\r\n\r\nh2 {\r\n  font-size: 20px;\r\n}\r\n\r\nh1, h2 {\r\n  font-weight: lighter;\r\n}\r\n\r\np {\r\n  font-size: 14px;\r\n}\r\n\r\n/* Hyperlink */\r\n\r\na {\r\n  cursor: pointer;\r\n  color: #1976d2;\r\n  text-decoration: none;\r\n}\r\n\r\na:hover {\r\n  opacity: 0.8;\r\n}\r\n\r\n/* Input */\r\n\r\ninput {\r\n  font-size: 14px;\r\n  border-radius: 2px;\r\n  padding: 8px;\r\n  margin-bottom: 16px;\r\n  border: 1px solid #BDBDBD;\r\n}\r\n\r\nlabel {\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n  margin-bottom: 4px;\r\n  display: block;\r\n  text-transform: uppercase;\r\n}\r\n\r\n/* Button */\r\n\r\n.button, button {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  padding: 8px 16px;\r\n  border-radius: 2px;\r\n  font-size: 14px;\r\n  cursor: pointer;\r\n  background-color: #1976d2;\r\n  color: white;\r\n  border: none;\r\n}\r\n\r\n.button:hover, button:hover {\r\n  opacity: 0.8;\r\n  font-weight: normal;\r\n}\r\n\r\n.button:disabled, button:disabled {\r\n  opacity: 0.5;\r\n  cursor: auto;\r\n}\r\n\r\n/* Fancy Button */\r\n\r\n.fancy-button {\r\n  background-color: white;\r\n  color: #1976d2;\r\n}\r\n\r\n.fancy-button i.material-icons {\r\n  color: #1976d2;\r\n  padding-right: 4px;\r\n}\r\n\r\n/* Top Bar */\r\n\r\napp-top-bar {\r\n  width: 100%;\r\n  height: 68px;\r\n  background-color: #1976d2;\r\n  padding: 16px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\napp-top-bar h1 {\r\n  color: white;\r\n  margin: 0;\r\n}\r\n\r\n/* Checkout Cart, Shipping Prices */\r\n\r\n.cart-item, .shipping-item {\r\n  width: 100%;\r\n  min-width: 400px;\r\n  max-width: 450px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  padding: 16px 32px;\r\n  margin-bottom: 8px;\r\n  border-radius: 2px;\r\n  background-color: #EEEEEE;\r\n}\r\n\r\n/*\r\nCopyright Google LLC. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQjs7QUFFbEI7RUFDRSx3Q0FBd0M7RUFDeEMsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixtQ0FBbUM7RUFDbkMsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUEsU0FBUzs7QUFFVDtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQSxjQUFjOztBQUVkO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUEsVUFBVTs7QUFFVjtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztBQUVBLFdBQVc7O0FBQ1g7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBLGlCQUFpQjs7QUFFakI7RUFDRSx1QkFBdUI7RUFDdkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUEsWUFBWTs7QUFFWjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osU0FBUztBQUNYOztBQUVBLG1DQUFtQzs7QUFFbkM7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBR0E7Ozs7Q0FJQyIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEdsb2JhbCBTdHlsZXMgKi9cclxuXHJcbioge1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICM2MTYxNjE7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxucm91dGVyLW91dGxldCArICogIHtcclxuICBwYWRkaW5nOiAwIDE2cHg7XHJcbn1cclxuXHJcbi8qIFRleHQgKi9cclxuXHJcbmgxIHtcclxuICBmb250LXNpemU6IDMycHg7XHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbmgxLCBoMiB7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbn1cclxuXHJcbnAge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLyogSHlwZXJsaW5rICovXHJcblxyXG5hIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICMxOTc2ZDI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi8qIElucHV0ICovXHJcblxyXG5pbnB1dCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjQkRCREJEO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi1ib3R0b206IDRweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4vKiBCdXR0b24gKi9cclxuLmJ1dHRvbiwgYnV0dG9uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmJ1dHRvbjpob3ZlciwgYnV0dG9uOmhvdmVyIHtcclxuICBvcGFjaXR5OiAwLjg7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLmJ1dHRvbjpkaXNhYmxlZCwgYnV0dG9uOmRpc2FibGVkIHtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgY3Vyc29yOiBhdXRvO1xyXG59XHJcblxyXG4vKiBGYW5jeSBCdXR0b24gKi9cclxuXHJcbi5mYW5jeS1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiAjMTk3NmQyO1xyXG59XHJcblxyXG4uZmFuY3ktYnV0dG9uIGkubWF0ZXJpYWwtaWNvbnMge1xyXG4gIGNvbG9yOiAjMTk3NmQyO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcclxufVxyXG5cclxuLyogVG9wIEJhciAqL1xyXG5cclxuYXBwLXRvcC1iYXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNjhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5hcHAtdG9wLWJhciBoMSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLyogQ2hlY2tvdXQgQ2FydCwgU2hpcHBpbmcgUHJpY2VzICovXHJcblxyXG4uY2FydC1pdGVtLCAuc2hpcHBpbmctaXRlbSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiA0MDBweDtcclxuICBtYXgtd2lkdGg6IDQ1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMTZweCAzMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcclxufVxyXG5cclxuXHJcbi8qXHJcbkNvcHlyaWdodCBHb29nbGUgTExDLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG5Vc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0XHJcbmNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHA6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcclxuKi8iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tomek/Repo/angular-first-app/src/styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map