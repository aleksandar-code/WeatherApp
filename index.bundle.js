/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  touch-action: pan-x pan-y;\n  font-family: \"Roboto\", sans-serif;\n}\n\n:root {\n  --primary-color: #a799b7;\n  --secondary-color: #9888a5;\n  --tertiary-color: #776472;\n  --accent-color: #445552;\n  --secondary-accent-color: #294d4a;\n}\n\n#main {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: var(--primary-color);\n  gap: 20px;\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: 1rem;\n  width: fit-content;\n  padding: 20px;\n}\n\n.card .weather-detail-double {\n  display: flex;\n}\n\n.weather-detail {\n  height: 120px;\n  width: 120px;\n  border-radius: 50%;\n  background-color: var(--tertiary-color);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  position: relative;\n}\n\n.weather-detail > p:first-child {\n  font-family: \"Shantell Sans\", cursive;\n  position: absolute;\n  top: 1.4rem;\n}\n\n.weather-detail p {\n  text-align: center;\n}\n\n.navigation-bar {\n  height: fit-content;\n  width: 100%;\n  background-color: var(--tertiary-color);\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  position: sticky;\n  bottom: 0;\n  padding: 10px;\n}\n\n.card div {\n  display: flex;\n  align-items: center;\n}\n\n.autocomplete {\n  position: relative;\n  display: inline-block;\n}\n\ninput[type=\"text\"] {\n  outline: none;\n  border-radius: 8px;\n  padding: 10px 20px;\n}\n\n.autocomplete-items {\n  display: none;\n}\n.autocomplete-items div {\n  padding: 10px;\n  cursor: pointer;\n  background-color: #fff;\n  border-bottom: 1px solid #d4d4d4;\n}\n.autocomplete-items div:hover {\n  background-color: #e9e9e9;\n}\n.autocomplete-items.active {\n  position: absolute;\n  display: block;\n}\n\n/* width */\n::-webkit-scrollbar {\n  width: 10px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px grey;\n  border-radius: 10px;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: var(--secondary-accent-color);\n  border-radius: 10px;\n}\n\n#hour-forecast {\n  display: block;\n  height: 300px;\n  overflow-y: scroll;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,yBAAyB;EACzB,iCAAiC;AACnC;;AAEA;EACE,wBAAwB;EACxB,0BAA0B;EAC1B,yBAAyB;EACzB,uBAAuB;EACvB,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,sCAAsC;EACtC,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,uCAAuC;EACvC,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,qCAAqC;EACrC,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,WAAW;EACX,uCAAuC;EACvC,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,gBAAgB;EAChB,SAAS;EACT,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,eAAe;EACf,sBAAsB;EACtB,gCAAgC;AAClC;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,kBAAkB;EAClB,cAAc;AAChB;;AAEA,UAAU;AACV;EACE,WAAW;AACb;;AAEA,UAAU;AACV;EACE,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA,WAAW;AACX;EACE,yCAAyC;EACzC,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,aAAa;EACb,kBAAkB;AACpB","sourcesContent":["* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  touch-action: pan-x pan-y;\n  font-family: \"Roboto\", sans-serif;\n}\n\n:root {\n  --primary-color: #a799b7;\n  --secondary-color: #9888a5;\n  --tertiary-color: #776472;\n  --accent-color: #445552;\n  --secondary-accent-color: #294d4a;\n}\n\n#main {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: var(--primary-color);\n  gap: 20px;\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: 1rem;\n  width: fit-content;\n  padding: 20px;\n}\n\n.card .weather-detail-double {\n  display: flex;\n}\n\n.weather-detail {\n  height: 120px;\n  width: 120px;\n  border-radius: 50%;\n  background-color: var(--tertiary-color);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  position: relative;\n}\n\n.weather-detail > p:first-child {\n  font-family: \"Shantell Sans\", cursive;\n  position: absolute;\n  top: 1.4rem;\n}\n\n.weather-detail p {\n  text-align: center;\n}\n\n.navigation-bar {\n  height: fit-content;\n  width: 100%;\n  background-color: var(--tertiary-color);\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  position: sticky;\n  bottom: 0;\n  padding: 10px;\n}\n\n.card div {\n  display: flex;\n  align-items: center;\n}\n\n.autocomplete {\n  position: relative;\n  display: inline-block;\n}\n\ninput[type=\"text\"] {\n  outline: none;\n  border-radius: 8px;\n  padding: 10px 20px;\n}\n\n.autocomplete-items {\n  display: none;\n}\n.autocomplete-items div {\n  padding: 10px;\n  cursor: pointer;\n  background-color: #fff;\n  border-bottom: 1px solid #d4d4d4;\n}\n.autocomplete-items div:hover {\n  background-color: #e9e9e9;\n}\n.autocomplete-items.active {\n  position: absolute;\n  display: block;\n}\n\n/* width */\n::-webkit-scrollbar {\n  width: 10px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px grey;\n  border-radius: 10px;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: var(--secondary-accent-color);\n  border-radius: 10px;\n}\n\n#hour-forecast {\n  display: block;\n  height: 300px;\n  overflow-y: scroll;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/api.calls.js":
/*!**********************************!*\
  !*** ./src/modules/api.calls.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCityWeather": () => (/* binding */ getCityWeather),
/* harmony export */   "searchCity": () => (/* binding */ searchCity)
/* harmony export */ });
async function searchCity(search) {
  let result;
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/search.json?key=feed359d6d0647688d9132213232803&q=${search}`,
      { mode: "cors" }
    );
    const searchData = await response.json();
    result = searchData;
  } catch (error) {
    console.log(error);
  }
  return result;
}

async function getCityWeather(city) {
  let result;
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=feed359d6d0647688d9132213232803&q=${city}&days=3&aqi=yes&alerts=no`,
      { mode: "cors" }
    );
    const cityData = await response.json();
    result = cityData;
  } catch (error) {
    console.log(error);
  }
  return result;
}




/***/ }),

/***/ "./src/modules/autocomplete.js":
/*!*************************************!*\
  !*** ./src/modules/autocomplete.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Autocomplete {
  constructor(cities) {
    this.cities = cities;
  }

  returnCity(index) {
    const city = this.cities[index];
    return {
      name: city.name,
      region: city.region,
      country: city.country,
      url: city.url,
    };
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Autocomplete);


/***/ }),

/***/ "./src/modules/city-weather.js":
/*!*************************************!*\
  !*** ./src/modules/city-weather.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class CityWeather {
  constructor(uuid, currentWeather, forecastWeather) {
    this.uuid = uuid;
    this.name = currentWeather.city;
    this.currentWeather = currentWeather;
    this.forecastWeather = forecastWeather;
  }

  weatherBasicsData() {
    return this.currentWeather;
  }

  hourForecastData() {
    return this.forecastWeather.hours;
  }

  dayForecastData() {
    return this.forecastWeather.days;
  }

  detailsData() {
    return this.currentWeather.weatherDetails;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CityWeather);


/***/ }),

/***/ "./src/modules/create-city.js":
/*!************************************!*\
  !*** ./src/modules/create-city.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");
/* harmony import */ var _structure_city_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./structure-city-data */ "./src/modules/structure-city-data.js");
/* harmony import */ var _city_weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./city-weather */ "./src/modules/city-weather.js");
// eslint-disable-next-line import/no-extraneous-dependencies




async function createCity(city) {
  const array = await (0,_structure_city_data__WEBPACK_IMPORTED_MODULE_0__["default"])(city);
  const [current, forecast] = array;
  const newCity = new _city_weather__WEBPACK_IMPORTED_MODULE_1__["default"]((0,nanoid__WEBPACK_IMPORTED_MODULE_2__.nanoid)(), current, forecast);

  return {
    newCity,
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCity);


/***/ }),

/***/ "./src/modules/current-weather.js":
/*!****************************************!*\
  !*** ./src/modules/current-weather.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Current city, current temperature in °C first and °F, last updated time, condition, max & min for current day,
// weather details: UV Index, wind speed + other details.

class CurrentWeather {
  constructor(
    city,
    temperature,
    lastUpdate,
    conditionText,
    conditionIcon,
    maxTemperature,
    minTemperature,
    weatherDetails
  ) {
    this.city = city;
    this.temperature = temperature;
    this.lastUpdate = lastUpdate;
    this.conditionText = conditionText;
    this.conditionIcon = conditionIcon;
    this.maxTemperature = maxTemperature;
    this.minTemperature = minTemperature;
    this.weatherDetails = weatherDetails;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CurrentWeather);


/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _view_city_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-city-weather */ "./src/modules/view-city-weather.js");
/* harmony import */ var _create_city__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-city */ "./src/modules/create-city.js");
/* harmony import */ var _manage_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-search */ "./src/modules/manage-search.js");
/* harmony import */ var _autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autocomplete */ "./src/modules/autocomplete.js");
/* harmony import */ var _view_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-autocomplete */ "./src/modules/view-autocomplete.js");






let setListenerForItems;

function setSearchListeners() {
  const searchBar = document.getElementById("city-search");

  searchBar.addEventListener("input", () => {
    (0,_manage_search__WEBPACK_IMPORTED_MODULE_2__.closeAllLists)();
    (0,_manage_search__WEBPACK_IMPORTED_MODULE_2__.getAutoComplete)(_view_autocomplete__WEBPACK_IMPORTED_MODULE_4__["default"]);
  });

  searchBar.addEventListener("search", (e) => {
    e.preventDefault();
  });
  const form = document.querySelector("form");

  form.onsubmit = (e) => {
    e.preventDefault();
    (0,_manage_search__WEBPACK_IMPORTED_MODULE_2__.closeAllLists)();
  };

  document.addEventListener("click", () => {
    (0,_manage_search__WEBPACK_IMPORTED_MODULE_2__.closeAllLists)();
  });
}

const display = async (data) => {
  const response = await (0,_create_city__WEBPACK_IMPORTED_MODULE_1__["default"])(data);
  const city = response.newCity;
  document.getElementById("main").innerHTML = "";
  (0,_view_city_weather__WEBPACK_IMPORTED_MODULE_0__["default"])(city);
  setSearchListeners();

  const itemsList = document.querySelector(".autocomplete-items");
  const options = {
    attributes: true,
  };

  const callback = (mutationList) => {
    mutationList.forEach((mutation) => {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class"
      ) {
        if (mutation.target.classList.contains("active")) {
          setListenerForItems();
        }
      }
    });
  };
  const observer = new MutationObserver(callback);
  observer.observe(itemsList, options);
};

setListenerForItems = () => {
  const items = document.querySelector(".autocomplete-items");

  items.onclick = async (e) => {
    try {
      const searchData = await (0,_manage_search__WEBPACK_IMPORTED_MODULE_2__.getSearchData)();
      const autocomplete = new _autocomplete__WEBPACK_IMPORTED_MODULE_3__["default"](searchData);
      (0,_view_autocomplete__WEBPACK_IMPORTED_MODULE_4__["default"])(autocomplete);
      const index = e.target.dataset.dataIndex;
      const city = autocomplete.returnCity(index);
      await display(city.url);
    } catch (error) {
      console.log(error);
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);


/***/ }),

/***/ "./src/modules/forecast-weather.js":
/*!*****************************************!*\
  !*** ./src/modules/forecast-weather.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// inside days / hours array: Current hour/day temperature + condition icon / max - min + condition icon.

class ForecastWeather {
  constructor(days, hours) {
    this.days = days;
    this.hours = hours;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForecastWeather);


/***/ }),

/***/ "./src/modules/manage-search.js":
/*!**************************************!*\
  !*** ./src/modules/manage-search.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeAllLists": () => (/* binding */ closeAllLists),
/* harmony export */   "getAutoComplete": () => (/* binding */ getAutoComplete),
/* harmony export */   "getSearchData": () => (/* binding */ getSearchData)
/* harmony export */ });
/* harmony import */ var _api_calls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.calls */ "./src/modules/api.calls.js");
/* harmony import */ var _autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./autocomplete */ "./src/modules/autocomplete.js");



function structureAutoComplete(data) {
  return new _autocomplete__WEBPACK_IMPORTED_MODULE_1__["default"](data);
}

function closeAllLists() {
  if (document.querySelector(".autocomplete-items") !== null) {
    const itemsList = document.querySelector(".autocomplete-items");
    itemsList.innerHTML = "";
    if (itemsList.classList.contains("active"))
      itemsList.classList.remove("active");
  }
}

function validateSearch(search) {
  if (search.length > 2) return true;

  return false;
}

async function getSearchData() {
  const search = document.getElementById("city-search").value;
  let response;
  if (validateSearch(search) === true) {
    response = await (0,_api_calls__WEBPACK_IMPORTED_MODULE_0__.searchCity)(search);
  }
  return response;
}

async function getAutoComplete(viewAutoComplete) {
  const response = await getSearchData();
  if (response) {
    const result = structureAutoComplete(response);
    viewAutoComplete(result);
  }
}




/***/ }),

/***/ "./src/modules/structure-city-data.js":
/*!********************************************!*\
  !*** ./src/modules/structure-city-data.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_calls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.calls */ "./src/modules/api.calls.js");
/* harmony import */ var _current_weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./current-weather */ "./src/modules/current-weather.js");
/* harmony import */ var _forecast_weather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forecast-weather */ "./src/modules/forecast-weather.js");




function convertAmericanToEu(data) {
  const result = new Date(`1970-01-01 ${data}`).toLocaleTimeString("en-US", {
    hour12: false,
    hour: "numeric",
    minute: "numeric",
  });

  return result;
}

// Current city, current temperature in °C first and °F, last updated time, condition, max & min for current day,
// weather details: UV Index, wind speed + other details.
function structureCurrent(response) {
  // or iterate all key values with having my keys in array i look for then return
  // the values in an array and do array destructuring to instantiate the values
  const city = response.location.name;
  const isDay = !!response.current.is_day;
  const temperature = response.current.temp_c;
  const lastUpdate = response.current.last_updated.split(" ")[1];
  const conditionText = response.current.condition.text;
  const conditionIcon = response.current.condition.icon;
  const maxTemperature = Math.round(
    response.forecast.forecastday[0].day.maxtemp_c
  );
  const minTemperature = Math.round(
    response.forecast.forecastday[0].day.mintemp_c
  );
  const weatherDetails = (function getWeatherDetails() {
    const toFetch = response.forecast.forecastday[0];
    const aqi = (function getAQI() {
      const number = toFetch.day.air_quality["us-epa-index"];
      const aqiTable = {
        1: "Good",
        2: "Acceptable",
        3: "Unhealthy for sensitive groups",
        4: "Unhealthy",
        5: "Very unhealthy",
        6: "Hazardous",
      };
      let quality;
      const keys = Object.keys(aqiTable);
      for (let i = 0; i < keys.length; i += 1) {
        if (keys[i] === number.toString()) {
          quality = aqiTable[keys[i]];
        }
      }
      return quality;
    })();
    const uvIdx = toFetch.day.uv;
    const sunriseTime = convertAmericanToEu(toFetch.astro.sunrise);
    const sunsetTime = convertAmericanToEu(toFetch.astro.sunset);
    const feelsLike = Math.round(response.current.feelslike_c);
    const precipitations = response.current.precip_mm;
    const windSpeed = response.current.wind_kph;
    const humidityPercentage = response.current.humidity;
    const vision = response.current.vis_km;
    const hectopascals = response.current.pressure_mb;

    return {
      aqi,
      uvIdx,
      sunriseTime,
      sunsetTime,
      feelsLike,
      precipitations,
      windSpeed,
      humidityPercentage,
      vision,
      hectopascals,
    };
  })();

  return new _current_weather__WEBPACK_IMPORTED_MODULE_1__["default"](
    city,
    temperature,
    lastUpdate,
    conditionText,
    conditionIcon,
    maxTemperature,
    minTemperature,
    weatherDetails,
    isDay
  );
}

// objects: hour / day array with inside: Current hour/day temperature + condition icon / max - min + condition icon.

function structureForecast(response) {
  const createDay = (idx) => {
    const array = response.forecast.forecastday;
    const maxTemperature = Math.round(array[idx].day.maxtemp_c);
    const minTemperature = Math.round(array[idx].day.mintemp_c);
    const conditionIcon = array[idx].day.condition.icon;
    const conditionText = array[idx].day.condition.text;

    return { maxTemperature, minTemperature, conditionIcon, conditionText };
  };
  const createHour = (idx) => {
    const temperature = Math.round(
      response.forecast.forecastday[0].hour[idx].temp_c
    );
    const hour = response.forecast.forecastday[0].hour[idx].time.split(" ")[1];
    const conditionIcon =
      response.forecast.forecastday[0].hour[idx].condition.icon;
    const conditionText =
      response.forecast.forecastday[0].hour[idx].condition.text;
    return { temperature, hour, conditionIcon, conditionText };
  };
  const days = (function createDaysObject() {
    const daysArray = [createDay(0), createDay(1), createDay(2)];

    return daysArray;
  })();

  const hours = (function createHoursObject() {
    const dataToIterate = response.forecast.forecastday[0].hour;
    const hoursArray = [];
    for (let i = 0; i < dataToIterate.length; i += 1) {
      hoursArray.push(createHour(i));
    }
    return hoursArray;
  })();

  return new _forecast_weather__WEBPACK_IMPORTED_MODULE_2__["default"](days, hours);
}
async function createCurrentAndForecast(city) {
  const response = await (0,_api_calls__WEBPACK_IMPORTED_MODULE_0__.getCityWeather)(city);
  const current = structureCurrent(response);
  const forecast = structureForecast(response);
  return [current, forecast];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCurrentAndForecast);


/***/ }),

/***/ "./src/modules/view-autocomplete.js":
/*!******************************************!*\
  !*** ./src/modules/view-autocomplete.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function viewAutoComplete(data) {
  const itemsList = document.querySelector(".autocomplete-items");

  const array = data.cities;
  array.forEach((city, index) => {
    const div = document.createElement("div");
    div.textContent = `${city.name}, ${city.region}, ${city.country}`;
    div.dataset.dataIndex = index;
    itemsList.appendChild(div);
  });
  itemsList.classList.add("active");
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (viewAutoComplete);


/***/ }),

/***/ "./src/modules/view-city-weather.js":
/*!******************************************!*\
  !*** ./src/modules/view-city-weather.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createNavigationBar() {
  const element = document.createElement("nav");
  element.classList.add("navigation-bar");
  const form = document.createElement("form");
  form.autocomplete = "off";
  form.noValidate = true;
  form.innerHTML =
    "<div class='autocomplete'><input type='text' id='city-search' name='city-search' placeholder='Paris'></div><div class='autocomplete-items'></div>";
  element.appendChild(form);
  return element;
}

function createWeatherBasics(city) {
  const element = document.createElement("div");
  element.classList.add("card");
  element.setAttribute("id", "weather-basics");
  const data = city.weatherBasicsData();
  element.innerHTML = `
  <img src="${data.conditionIcon}" alt="${data.conditionText}">
  <h2 class="city-name">${data.city}</h2>
  <p class="city-temperature">${data.temperature}°</p>
  <p class="condition-text">${data.conditionText}</p>
  <p class="city-time">${data.lastUpdate}</p>
  <p class="max-min-temp">Min.${data.minTemperature}° Max.${data.maxTemperature}°</p>
  `;

  return element;
}

function createHourForecast(city) {
  const data = city.hourForecastData();
  const element = document.createElement("div");
  element.classList.add("card");
  element.setAttribute("id", "hour-forecast");
  for (let i = 0; i < data.length; i += 1) {
    element.innerHTML += `<div><p>${data[i].hour}: ${data[i].temperature}°</p><img src="${data[i].conditionIcon}" alt="${data[i].conditionText}"></div>`;
  }
  return element;
}

function createDayForecast(city) {
  const data = city.dayForecastData();
  const element = document.createElement("div");
  element.classList.add("card");
  element.setAttribute("id", "day-forecast");
  for (let i = 0; i < data.length; i += 1) {
    let option = "";
    if (i === 0) {
      option = "Today: ";
    }

    element.innerHTML += `<div><p>${option}${data[i].minTemperature}° - ${data[i].maxTemperature}°</p><img src="${data[i].conditionIcon}"></div>`;
  }
  return element;
}

function createDetails(city) {
  const data = city.detailsData();
  const element = document.createElement("div");
  element.classList.add("card");
  element.setAttribute("id", "weather-details");
  element.innerHTML = `
  
  <div class="weather-detail-double">
    <div class="weather-detail"><p>Air quality</p><p>${data.aqi}</p></div>
    <div class="weather-detail"><p>UV Index</p><p>${data.uvIdx}</p></div>
  </div>

  <div class="weather-detail-double">
    <div class="weather-detail"><p>Sunrise</p><p>${data.sunriseTime}</p></div>
    <div class="weather-detail"><p>Sunset</p><p> ${data.sunsetTime}</p></div>
  </div>

  <div class="weather-detail-double">
    <div class="weather-detail"><p>Feels like</p><p>${data.feelsLike}°</p></div>
    <div class="weather-detail"><p>Precipitations</p><p>${data.precipitations} mm</p></div>
  </div>

  <div class="weather-detail-double">
    <div class="weather-detail"><p>Wind</p><p>${data.windSpeed} km/h</p></div>
    <div class="weather-detail"><p>Humidity</p><p>${data.humidityPercentage} %</p></div>
  </div>

  <div class="weather-detail-double">
    <div class="weather-detail"><p>Vision</p><p>${data.vision} km</p></div>
    <div class="weather-detail"><p>Pressure</p><p>${data.hectopascals} hPa</p></div>
  </div>`;

  return element;
}

function showPage(city) {
  const main = document.getElementById("main");
  const navigationBar = createNavigationBar();
  const weatherBasics = createWeatherBasics(city);
  const detailsBasic = createDetails(city);
  const hourForecast = createHourForecast(city);
  const dayForecast = createDayForecast(city);
  main.append(
    navigationBar,
    weatherBasics,
    hourForecast,
    dayForecast,
    detailsBasic
  );
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showPage);


/***/ }),

/***/ "./node_modules/nanoid/index.browser.js":
/*!**********************************************!*\
  !*** ./node_modules/nanoid/index.browser.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customAlphabet": () => (/* binding */ customAlphabet),
/* harmony export */   "customRandom": () => (/* binding */ customRandom),
/* harmony export */   "nanoid": () => (/* binding */ nanoid),
/* harmony export */   "random": () => (/* binding */ random),
/* harmony export */   "urlAlphabet": () => (/* reexport safe */ _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__.urlAlphabet)
/* harmony export */ });
/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ "./node_modules/nanoid/url-alphabet/index.js");

let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))
let customRandom = (alphabet, defaultSize, getRandom) => {
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  let step = -~((1.6 * mask * defaultSize) / alphabet.length)
  return (size = defaultSize) => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      let j = step
      while (j--) {
        id += alphabet[bytes[j] & mask] || ''
        if (id.length === size) return id
      }
    }
  }
}
let customAlphabet = (alphabet, size = 21) =>
  customRandom(alphabet, size, random)
let nanoid = (size = 21) =>
  crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
    byte &= 63
    if (byte < 36) {
      id += byte.toString(36)
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase()
    } else if (byte > 62) {
      id += '-'
    } else {
      id += '_'
    }
    return id
  }, '')


/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "urlAlphabet": () => (/* binding */ urlAlphabet)
/* harmony export */ });
const urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display */ "./src/modules/display.js");



window.onload = async () => {
  await (0,_modules_display__WEBPACK_IMPORTED_MODULE_1__["default"])("Paris");
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ21COztBQUV4QztBQUNBLFFBQVEsNERBQU87QUFDZiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvYXBpLmNhbGxzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvYXV0b2NvbXBsZXRlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvY2l0eS13ZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvY3JlYXRlLWNpdHkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9jdXJyZW50LXdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9kaXNwbGF5LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvZm9yZWNhc3Qtd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL21hbmFnZS1zZWFyY2guanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9zdHJ1Y3R1cmUtY2l0eS1kYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvdmlldy1hdXRvY29tcGxldGUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy92aWV3LWNpdHktd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9uYW5vaWQvaW5kZXguYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9uYW5vaWQvdXJsLWFscGhhYmV0L2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICB0b3VjaC1hY3Rpb246IHBhbi14IHBhbi15O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLXByaW1hcnktY29sb3I6ICNhNzk5Yjc7XFxuICAtLXNlY29uZGFyeS1jb2xvcjogIzk4ODhhNTtcXG4gIC0tdGVydGlhcnktY29sb3I6ICM3NzY0NzI7XFxuICAtLWFjY2VudC1jb2xvcjogIzQ0NTU1MjtcXG4gIC0tc2Vjb25kYXJ5LWFjY2VudC1jb2xvcjogIzI5NGQ0YTtcXG59XFxuXFxuI21haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLmNhcmQgLndlYXRoZXItZGV0YWlsLWRvdWJsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ud2VhdGhlci1kZXRhaWwge1xcbiAgaGVpZ2h0OiAxMjBweDtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5LWNvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ud2VhdGhlci1kZXRhaWwgPiBwOmZpcnN0LWNoaWxkIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2hhbnRlbGwgU2Fuc1xcXCIsIGN1cnNpdmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEuNHJlbTtcXG59XFxuXFxuLndlYXRoZXItZGV0YWlsIHAge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubmF2aWdhdGlvbi1iYXIge1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3IpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICBib3R0b206IDA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uY2FyZCBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hdXRvY29tcGxldGUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG59XFxuXFxuLmF1dG9jb21wbGV0ZS1pdGVtcyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uYXV0b2NvbXBsZXRlLWl0ZW1zIGRpdiB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDRkNGQ0O1xcbn1cXG4uYXV0b2NvbXBsZXRlLWl0ZW1zIGRpdjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xcbn1cXG4uYXV0b2NvbXBsZXRlLWl0ZW1zLmFjdGl2ZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogd2lkdGggKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAxMHB4O1xcbn1cXG5cXG4vKiBUcmFjayAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCBncmV5O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLyogSGFuZGxlICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktYWNjZW50LWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiNob3VyLWZvcmVjYXN0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixzQ0FBc0M7RUFDdEMsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHVDQUF1QztFQUN2QyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHVDQUF1QztFQUN2QyxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGdDQUFnQztBQUNsQztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQSxVQUFVO0FBQ1Y7RUFDRSxXQUFXO0FBQ2I7O0FBRUEsVUFBVTtBQUNWO0VBQ0UsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQSxXQUFXO0FBQ1g7RUFDRSx5Q0FBeUM7RUFDekMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICB0b3VjaC1hY3Rpb246IHBhbi14IHBhbi15O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLXByaW1hcnktY29sb3I6ICNhNzk5Yjc7XFxuICAtLXNlY29uZGFyeS1jb2xvcjogIzk4ODhhNTtcXG4gIC0tdGVydGlhcnktY29sb3I6ICM3NzY0NzI7XFxuICAtLWFjY2VudC1jb2xvcjogIzQ0NTU1MjtcXG4gIC0tc2Vjb25kYXJ5LWFjY2VudC1jb2xvcjogIzI5NGQ0YTtcXG59XFxuXFxuI21haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLmNhcmQgLndlYXRoZXItZGV0YWlsLWRvdWJsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ud2VhdGhlci1kZXRhaWwge1xcbiAgaGVpZ2h0OiAxMjBweDtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5LWNvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ud2VhdGhlci1kZXRhaWwgPiBwOmZpcnN0LWNoaWxkIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2hhbnRlbGwgU2Fuc1xcXCIsIGN1cnNpdmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEuNHJlbTtcXG59XFxuXFxuLndlYXRoZXItZGV0YWlsIHAge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubmF2aWdhdGlvbi1iYXIge1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3IpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICBib3R0b206IDA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uY2FyZCBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hdXRvY29tcGxldGUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG59XFxuXFxuLmF1dG9jb21wbGV0ZS1pdGVtcyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uYXV0b2NvbXBsZXRlLWl0ZW1zIGRpdiB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDRkNGQ0O1xcbn1cXG4uYXV0b2NvbXBsZXRlLWl0ZW1zIGRpdjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xcbn1cXG4uYXV0b2NvbXBsZXRlLWl0ZW1zLmFjdGl2ZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogd2lkdGggKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAxMHB4O1xcbn1cXG5cXG4vKiBUcmFjayAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCBncmV5O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLyogSGFuZGxlICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktYWNjZW50LWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiNob3VyLWZvcmVjYXN0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImFzeW5jIGZ1bmN0aW9uIHNlYXJjaENpdHkoc2VhcmNoKSB7XG4gIGxldCByZXN1bHQ7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9zZWFyY2guanNvbj9rZXk9ZmVlZDM1OWQ2ZDA2NDc2ODhkOTEzMjIxMzIzMjgwMyZxPSR7c2VhcmNofWAsXG4gICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICApO1xuICAgIGNvbnN0IHNlYXJjaERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmVzdWx0ID0gc2VhcmNoRGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q2l0eVdlYXRoZXIoY2l0eSkge1xuICBsZXQgcmVzdWx0O1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9ZmVlZDM1OWQ2ZDA2NDc2ODhkOTEzMjIxMzIzMjgwMyZxPSR7Y2l0eX0mZGF5cz0zJmFxaT15ZXMmYWxlcnRzPW5vYCxcbiAgICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICAgICk7XG4gICAgY29uc3QgY2l0eURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmVzdWx0ID0gY2l0eURhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCB7IGdldENpdHlXZWF0aGVyLCBzZWFyY2hDaXR5IH07XG4iLCJjbGFzcyBBdXRvY29tcGxldGUge1xuICBjb25zdHJ1Y3RvcihjaXRpZXMpIHtcbiAgICB0aGlzLmNpdGllcyA9IGNpdGllcztcbiAgfVxuXG4gIHJldHVybkNpdHkoaW5kZXgpIHtcbiAgICBjb25zdCBjaXR5ID0gdGhpcy5jaXRpZXNbaW5kZXhdO1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBjaXR5Lm5hbWUsXG4gICAgICByZWdpb246IGNpdHkucmVnaW9uLFxuICAgICAgY291bnRyeTogY2l0eS5jb3VudHJ5LFxuICAgICAgdXJsOiBjaXR5LnVybCxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1dG9jb21wbGV0ZTtcbiIsImNsYXNzIENpdHlXZWF0aGVyIHtcbiAgY29uc3RydWN0b3IodXVpZCwgY3VycmVudFdlYXRoZXIsIGZvcmVjYXN0V2VhdGhlcikge1xuICAgIHRoaXMudXVpZCA9IHV1aWQ7XG4gICAgdGhpcy5uYW1lID0gY3VycmVudFdlYXRoZXIuY2l0eTtcbiAgICB0aGlzLmN1cnJlbnRXZWF0aGVyID0gY3VycmVudFdlYXRoZXI7XG4gICAgdGhpcy5mb3JlY2FzdFdlYXRoZXIgPSBmb3JlY2FzdFdlYXRoZXI7XG4gIH1cblxuICB3ZWF0aGVyQmFzaWNzRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50V2VhdGhlcjtcbiAgfVxuXG4gIGhvdXJGb3JlY2FzdERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9yZWNhc3RXZWF0aGVyLmhvdXJzO1xuICB9XG5cbiAgZGF5Rm9yZWNhc3REYXRhKCkge1xuICAgIHJldHVybiB0aGlzLmZvcmVjYXN0V2VhdGhlci5kYXlzO1xuICB9XG5cbiAgZGV0YWlsc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFdlYXRoZXIud2VhdGhlckRldGFpbHM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2l0eVdlYXRoZXI7XG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5pbXBvcnQgeyBuYW5vaWQgfSBmcm9tIFwibmFub2lkXCI7XG5pbXBvcnQgY3JlYXRlQ3VycmVudEFuZEZvcmVjYXN0IGZyb20gXCIuL3N0cnVjdHVyZS1jaXR5LWRhdGFcIjtcbmltcG9ydCBDaXR5V2VhdGhlciBmcm9tIFwiLi9jaXR5LXdlYXRoZXJcIjtcblxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ2l0eShjaXR5KSB7XG4gIGNvbnN0IGFycmF5ID0gYXdhaXQgY3JlYXRlQ3VycmVudEFuZEZvcmVjYXN0KGNpdHkpO1xuICBjb25zdCBbY3VycmVudCwgZm9yZWNhc3RdID0gYXJyYXk7XG4gIGNvbnN0IG5ld0NpdHkgPSBuZXcgQ2l0eVdlYXRoZXIobmFub2lkKCksIGN1cnJlbnQsIGZvcmVjYXN0KTtcblxuICByZXR1cm4ge1xuICAgIG5ld0NpdHksXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNpdHk7XG4iLCIvLyBDdXJyZW50IGNpdHksIGN1cnJlbnQgdGVtcGVyYXR1cmUgaW4gwrBDIGZpcnN0IGFuZCDCsEYsIGxhc3QgdXBkYXRlZCB0aW1lLCBjb25kaXRpb24sIG1heCAmIG1pbiBmb3IgY3VycmVudCBkYXksXG4vLyB3ZWF0aGVyIGRldGFpbHM6IFVWIEluZGV4LCB3aW5kIHNwZWVkICsgb3RoZXIgZGV0YWlscy5cblxuY2xhc3MgQ3VycmVudFdlYXRoZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBjaXR5LFxuICAgIHRlbXBlcmF0dXJlLFxuICAgIGxhc3RVcGRhdGUsXG4gICAgY29uZGl0aW9uVGV4dCxcbiAgICBjb25kaXRpb25JY29uLFxuICAgIG1heFRlbXBlcmF0dXJlLFxuICAgIG1pblRlbXBlcmF0dXJlLFxuICAgIHdlYXRoZXJEZXRhaWxzXG4gICkge1xuICAgIHRoaXMuY2l0eSA9IGNpdHk7XG4gICAgdGhpcy50ZW1wZXJhdHVyZSA9IHRlbXBlcmF0dXJlO1xuICAgIHRoaXMubGFzdFVwZGF0ZSA9IGxhc3RVcGRhdGU7XG4gICAgdGhpcy5jb25kaXRpb25UZXh0ID0gY29uZGl0aW9uVGV4dDtcbiAgICB0aGlzLmNvbmRpdGlvbkljb24gPSBjb25kaXRpb25JY29uO1xuICAgIHRoaXMubWF4VGVtcGVyYXR1cmUgPSBtYXhUZW1wZXJhdHVyZTtcbiAgICB0aGlzLm1pblRlbXBlcmF0dXJlID0gbWluVGVtcGVyYXR1cmU7XG4gICAgdGhpcy53ZWF0aGVyRGV0YWlscyA9IHdlYXRoZXJEZXRhaWxzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1cnJlbnRXZWF0aGVyO1xuIiwiaW1wb3J0IHNob3dQYWdlIGZyb20gXCIuL3ZpZXctY2l0eS13ZWF0aGVyXCI7XG5pbXBvcnQgY3JlYXRlQ2l0eSBmcm9tIFwiLi9jcmVhdGUtY2l0eVwiO1xuaW1wb3J0IHsgZ2V0QXV0b0NvbXBsZXRlLCBjbG9zZUFsbExpc3RzLCBnZXRTZWFyY2hEYXRhIH0gZnJvbSBcIi4vbWFuYWdlLXNlYXJjaFwiO1xuaW1wb3J0IEF1dG9jb21wbGV0ZSBmcm9tIFwiLi9hdXRvY29tcGxldGVcIjtcbmltcG9ydCB2aWV3QXV0b0NvbXBsZXRlIGZyb20gXCIuL3ZpZXctYXV0b2NvbXBsZXRlXCI7XG5cbmxldCBzZXRMaXN0ZW5lckZvckl0ZW1zO1xuXG5mdW5jdGlvbiBzZXRTZWFyY2hMaXN0ZW5lcnMoKSB7XG4gIGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2l0eS1zZWFyY2hcIik7XG5cbiAgc2VhcmNoQmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgY2xvc2VBbGxMaXN0cygpO1xuICAgIGdldEF1dG9Db21wbGV0ZSh2aWV3QXV0b0NvbXBsZXRlKTtcbiAgfSk7XG5cbiAgc2VhcmNoQmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJzZWFyY2hcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG5cbiAgZm9ybS5vbnN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNsb3NlQWxsTGlzdHMoKTtcbiAgfTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNsb3NlQWxsTGlzdHMoKTtcbiAgfSk7XG59XG5cbmNvbnN0IGRpc3BsYXkgPSBhc3luYyAoZGF0YSkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNyZWF0ZUNpdHkoZGF0YSk7XG4gIGNvbnN0IGNpdHkgPSByZXNwb25zZS5uZXdDaXR5O1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuaW5uZXJIVE1MID0gXCJcIjtcbiAgc2hvd1BhZ2UoY2l0eSk7XG4gIHNldFNlYXJjaExpc3RlbmVycygpO1xuXG4gIGNvbnN0IGl0ZW1zTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXV0b2NvbXBsZXRlLWl0ZW1zXCIpO1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gIH07XG5cbiAgY29uc3QgY2FsbGJhY2sgPSAobXV0YXRpb25MaXN0KSA9PiB7XG4gICAgbXV0YXRpb25MaXN0LmZvckVhY2goKG11dGF0aW9uKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIG11dGF0aW9uLnR5cGUgPT09IFwiYXR0cmlidXRlc1wiICYmXG4gICAgICAgIG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09IFwiY2xhc3NcIlxuICAgICAgKSB7XG4gICAgICAgIGlmIChtdXRhdGlvbi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgICAgc2V0TGlzdGVuZXJGb3JJdGVtcygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spO1xuICBvYnNlcnZlci5vYnNlcnZlKGl0ZW1zTGlzdCwgb3B0aW9ucyk7XG59O1xuXG5zZXRMaXN0ZW5lckZvckl0ZW1zID0gKCkgPT4ge1xuICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXV0b2NvbXBsZXRlLWl0ZW1zXCIpO1xuXG4gIGl0ZW1zLm9uY2xpY2sgPSBhc3luYyAoZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzZWFyY2hEYXRhID0gYXdhaXQgZ2V0U2VhcmNoRGF0YSgpO1xuICAgICAgY29uc3QgYXV0b2NvbXBsZXRlID0gbmV3IEF1dG9jb21wbGV0ZShzZWFyY2hEYXRhKTtcbiAgICAgIHZpZXdBdXRvQ29tcGxldGUoYXV0b2NvbXBsZXRlKTtcbiAgICAgIGNvbnN0IGluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5kYXRhSW5kZXg7XG4gICAgICBjb25zdCBjaXR5ID0gYXV0b2NvbXBsZXRlLnJldHVybkNpdHkoaW5kZXgpO1xuICAgICAgYXdhaXQgZGlzcGxheShjaXR5LnVybCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5O1xuIiwiLy8gaW5zaWRlIGRheXMgLyBob3VycyBhcnJheTogQ3VycmVudCBob3VyL2RheSB0ZW1wZXJhdHVyZSArIGNvbmRpdGlvbiBpY29uIC8gbWF4IC0gbWluICsgY29uZGl0aW9uIGljb24uXG5cbmNsYXNzIEZvcmVjYXN0V2VhdGhlciB7XG4gIGNvbnN0cnVjdG9yKGRheXMsIGhvdXJzKSB7XG4gICAgdGhpcy5kYXlzID0gZGF5cztcbiAgICB0aGlzLmhvdXJzID0gaG91cnM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9yZWNhc3RXZWF0aGVyO1xuIiwiaW1wb3J0IHsgc2VhcmNoQ2l0eSB9IGZyb20gXCIuL2FwaS5jYWxsc1wiO1xuaW1wb3J0IEF1dG9jb21wbGV0ZSBmcm9tIFwiLi9hdXRvY29tcGxldGVcIjtcblxuZnVuY3Rpb24gc3RydWN0dXJlQXV0b0NvbXBsZXRlKGRhdGEpIHtcbiAgcmV0dXJuIG5ldyBBdXRvY29tcGxldGUoZGF0YSk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlQWxsTGlzdHMoKSB7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF1dG9jb21wbGV0ZS1pdGVtc1wiKSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGl0ZW1zTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXV0b2NvbXBsZXRlLWl0ZW1zXCIpO1xuICAgIGl0ZW1zTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGlmIChpdGVtc0xpc3QuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKVxuICAgICAgaXRlbXNMaXN0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVTZWFyY2goc2VhcmNoKSB7XG4gIGlmIChzZWFyY2gubGVuZ3RoID4gMikgcmV0dXJuIHRydWU7XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRTZWFyY2hEYXRhKCkge1xuICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNpdHktc2VhcmNoXCIpLnZhbHVlO1xuICBsZXQgcmVzcG9uc2U7XG4gIGlmICh2YWxpZGF0ZVNlYXJjaChzZWFyY2gpID09PSB0cnVlKSB7XG4gICAgcmVzcG9uc2UgPSBhd2FpdCBzZWFyY2hDaXR5KHNlYXJjaCk7XG4gIH1cbiAgcmV0dXJuIHJlc3BvbnNlO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRBdXRvQ29tcGxldGUodmlld0F1dG9Db21wbGV0ZSkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldFNlYXJjaERhdGEoKTtcbiAgaWYgKHJlc3BvbnNlKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gc3RydWN0dXJlQXV0b0NvbXBsZXRlKHJlc3BvbnNlKTtcbiAgICB2aWV3QXV0b0NvbXBsZXRlKHJlc3VsdCk7XG4gIH1cbn1cblxuZXhwb3J0IHsgY2xvc2VBbGxMaXN0cywgZ2V0QXV0b0NvbXBsZXRlLCBnZXRTZWFyY2hEYXRhIH07XG4iLCJpbXBvcnQgeyBnZXRDaXR5V2VhdGhlciB9IGZyb20gXCIuL2FwaS5jYWxsc1wiO1xuaW1wb3J0IEN1cnJlbnRXZWF0aGVyIGZyb20gXCIuL2N1cnJlbnQtd2VhdGhlclwiO1xuaW1wb3J0IEZvcmVjYXN0V2VhdGhlciBmcm9tIFwiLi9mb3JlY2FzdC13ZWF0aGVyXCI7XG5cbmZ1bmN0aW9uIGNvbnZlcnRBbWVyaWNhblRvRXUoZGF0YSkge1xuICBjb25zdCByZXN1bHQgPSBuZXcgRGF0ZShgMTk3MC0wMS0wMSAke2RhdGF9YCkudG9Mb2NhbGVUaW1lU3RyaW5nKFwiZW4tVVNcIiwge1xuICAgIGhvdXIxMjogZmFsc2UsXG4gICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgbWludXRlOiBcIm51bWVyaWNcIixcbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gQ3VycmVudCBjaXR5LCBjdXJyZW50IHRlbXBlcmF0dXJlIGluIMKwQyBmaXJzdCBhbmQgwrBGLCBsYXN0IHVwZGF0ZWQgdGltZSwgY29uZGl0aW9uLCBtYXggJiBtaW4gZm9yIGN1cnJlbnQgZGF5LFxuLy8gd2VhdGhlciBkZXRhaWxzOiBVViBJbmRleCwgd2luZCBzcGVlZCArIG90aGVyIGRldGFpbHMuXG5mdW5jdGlvbiBzdHJ1Y3R1cmVDdXJyZW50KHJlc3BvbnNlKSB7XG4gIC8vIG9yIGl0ZXJhdGUgYWxsIGtleSB2YWx1ZXMgd2l0aCBoYXZpbmcgbXkga2V5cyBpbiBhcnJheSBpIGxvb2sgZm9yIHRoZW4gcmV0dXJuXG4gIC8vIHRoZSB2YWx1ZXMgaW4gYW4gYXJyYXkgYW5kIGRvIGFycmF5IGRlc3RydWN0dXJpbmcgdG8gaW5zdGFudGlhdGUgdGhlIHZhbHVlc1xuICBjb25zdCBjaXR5ID0gcmVzcG9uc2UubG9jYXRpb24ubmFtZTtcbiAgY29uc3QgaXNEYXkgPSAhIXJlc3BvbnNlLmN1cnJlbnQuaXNfZGF5O1xuICBjb25zdCB0ZW1wZXJhdHVyZSA9IHJlc3BvbnNlLmN1cnJlbnQudGVtcF9jO1xuICBjb25zdCBsYXN0VXBkYXRlID0gcmVzcG9uc2UuY3VycmVudC5sYXN0X3VwZGF0ZWQuc3BsaXQoXCIgXCIpWzFdO1xuICBjb25zdCBjb25kaXRpb25UZXh0ID0gcmVzcG9uc2UuY3VycmVudC5jb25kaXRpb24udGV4dDtcbiAgY29uc3QgY29uZGl0aW9uSWNvbiA9IHJlc3BvbnNlLmN1cnJlbnQuY29uZGl0aW9uLmljb247XG4gIGNvbnN0IG1heFRlbXBlcmF0dXJlID0gTWF0aC5yb3VuZChcbiAgICByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWF4dGVtcF9jXG4gICk7XG4gIGNvbnN0IG1pblRlbXBlcmF0dXJlID0gTWF0aC5yb3VuZChcbiAgICByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWludGVtcF9jXG4gICk7XG4gIGNvbnN0IHdlYXRoZXJEZXRhaWxzID0gKGZ1bmN0aW9uIGdldFdlYXRoZXJEZXRhaWxzKCkge1xuICAgIGNvbnN0IHRvRmV0Y2ggPSByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXTtcbiAgICBjb25zdCBhcWkgPSAoZnVuY3Rpb24gZ2V0QVFJKCkge1xuICAgICAgY29uc3QgbnVtYmVyID0gdG9GZXRjaC5kYXkuYWlyX3F1YWxpdHlbXCJ1cy1lcGEtaW5kZXhcIl07XG4gICAgICBjb25zdCBhcWlUYWJsZSA9IHtcbiAgICAgICAgMTogXCJHb29kXCIsXG4gICAgICAgIDI6IFwiQWNjZXB0YWJsZVwiLFxuICAgICAgICAzOiBcIlVuaGVhbHRoeSBmb3Igc2Vuc2l0aXZlIGdyb3Vwc1wiLFxuICAgICAgICA0OiBcIlVuaGVhbHRoeVwiLFxuICAgICAgICA1OiBcIlZlcnkgdW5oZWFsdGh5XCIsXG4gICAgICAgIDY6IFwiSGF6YXJkb3VzXCIsXG4gICAgICB9O1xuICAgICAgbGV0IHF1YWxpdHk7XG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoYXFpVGFibGUpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChrZXlzW2ldID09PSBudW1iZXIudG9TdHJpbmcoKSkge1xuICAgICAgICAgIHF1YWxpdHkgPSBhcWlUYWJsZVtrZXlzW2ldXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHF1YWxpdHk7XG4gICAgfSkoKTtcbiAgICBjb25zdCB1dklkeCA9IHRvRmV0Y2guZGF5LnV2O1xuICAgIGNvbnN0IHN1bnJpc2VUaW1lID0gY29udmVydEFtZXJpY2FuVG9FdSh0b0ZldGNoLmFzdHJvLnN1bnJpc2UpO1xuICAgIGNvbnN0IHN1bnNldFRpbWUgPSBjb252ZXJ0QW1lcmljYW5Ub0V1KHRvRmV0Y2guYXN0cm8uc3Vuc2V0KTtcbiAgICBjb25zdCBmZWVsc0xpa2UgPSBNYXRoLnJvdW5kKHJlc3BvbnNlLmN1cnJlbnQuZmVlbHNsaWtlX2MpO1xuICAgIGNvbnN0IHByZWNpcGl0YXRpb25zID0gcmVzcG9uc2UuY3VycmVudC5wcmVjaXBfbW07XG4gICAgY29uc3Qgd2luZFNwZWVkID0gcmVzcG9uc2UuY3VycmVudC53aW5kX2twaDtcbiAgICBjb25zdCBodW1pZGl0eVBlcmNlbnRhZ2UgPSByZXNwb25zZS5jdXJyZW50Lmh1bWlkaXR5O1xuICAgIGNvbnN0IHZpc2lvbiA9IHJlc3BvbnNlLmN1cnJlbnQudmlzX2ttO1xuICAgIGNvbnN0IGhlY3RvcGFzY2FscyA9IHJlc3BvbnNlLmN1cnJlbnQucHJlc3N1cmVfbWI7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYXFpLFxuICAgICAgdXZJZHgsXG4gICAgICBzdW5yaXNlVGltZSxcbiAgICAgIHN1bnNldFRpbWUsXG4gICAgICBmZWVsc0xpa2UsXG4gICAgICBwcmVjaXBpdGF0aW9ucyxcbiAgICAgIHdpbmRTcGVlZCxcbiAgICAgIGh1bWlkaXR5UGVyY2VudGFnZSxcbiAgICAgIHZpc2lvbixcbiAgICAgIGhlY3RvcGFzY2FscyxcbiAgICB9O1xuICB9KSgpO1xuXG4gIHJldHVybiBuZXcgQ3VycmVudFdlYXRoZXIoXG4gICAgY2l0eSxcbiAgICB0ZW1wZXJhdHVyZSxcbiAgICBsYXN0VXBkYXRlLFxuICAgIGNvbmRpdGlvblRleHQsXG4gICAgY29uZGl0aW9uSWNvbixcbiAgICBtYXhUZW1wZXJhdHVyZSxcbiAgICBtaW5UZW1wZXJhdHVyZSxcbiAgICB3ZWF0aGVyRGV0YWlscyxcbiAgICBpc0RheVxuICApO1xufVxuXG4vLyBvYmplY3RzOiBob3VyIC8gZGF5IGFycmF5IHdpdGggaW5zaWRlOiBDdXJyZW50IGhvdXIvZGF5IHRlbXBlcmF0dXJlICsgY29uZGl0aW9uIGljb24gLyBtYXggLSBtaW4gKyBjb25kaXRpb24gaWNvbi5cblxuZnVuY3Rpb24gc3RydWN0dXJlRm9yZWNhc3QocmVzcG9uc2UpIHtcbiAgY29uc3QgY3JlYXRlRGF5ID0gKGlkeCkgPT4ge1xuICAgIGNvbnN0IGFycmF5ID0gcmVzcG9uc2UuZm9yZWNhc3QuZm9yZWNhc3RkYXk7XG4gICAgY29uc3QgbWF4VGVtcGVyYXR1cmUgPSBNYXRoLnJvdW5kKGFycmF5W2lkeF0uZGF5Lm1heHRlbXBfYyk7XG4gICAgY29uc3QgbWluVGVtcGVyYXR1cmUgPSBNYXRoLnJvdW5kKGFycmF5W2lkeF0uZGF5Lm1pbnRlbXBfYyk7XG4gICAgY29uc3QgY29uZGl0aW9uSWNvbiA9IGFycmF5W2lkeF0uZGF5LmNvbmRpdGlvbi5pY29uO1xuICAgIGNvbnN0IGNvbmRpdGlvblRleHQgPSBhcnJheVtpZHhdLmRheS5jb25kaXRpb24udGV4dDtcblxuICAgIHJldHVybiB7IG1heFRlbXBlcmF0dXJlLCBtaW5UZW1wZXJhdHVyZSwgY29uZGl0aW9uSWNvbiwgY29uZGl0aW9uVGV4dCB9O1xuICB9O1xuICBjb25zdCBjcmVhdGVIb3VyID0gKGlkeCkgPT4ge1xuICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gTWF0aC5yb3VuZChcbiAgICAgIHJlc3BvbnNlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXJbaWR4XS50ZW1wX2NcbiAgICApO1xuICAgIGNvbnN0IGhvdXIgPSByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyW2lkeF0udGltZS5zcGxpdChcIiBcIilbMV07XG4gICAgY29uc3QgY29uZGl0aW9uSWNvbiA9XG4gICAgICByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyW2lkeF0uY29uZGl0aW9uLmljb247XG4gICAgY29uc3QgY29uZGl0aW9uVGV4dCA9XG4gICAgICByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyW2lkeF0uY29uZGl0aW9uLnRleHQ7XG4gICAgcmV0dXJuIHsgdGVtcGVyYXR1cmUsIGhvdXIsIGNvbmRpdGlvbkljb24sIGNvbmRpdGlvblRleHQgfTtcbiAgfTtcbiAgY29uc3QgZGF5cyA9IChmdW5jdGlvbiBjcmVhdGVEYXlzT2JqZWN0KCkge1xuICAgIGNvbnN0IGRheXNBcnJheSA9IFtjcmVhdGVEYXkoMCksIGNyZWF0ZURheSgxKSwgY3JlYXRlRGF5KDIpXTtcblxuICAgIHJldHVybiBkYXlzQXJyYXk7XG4gIH0pKCk7XG5cbiAgY29uc3QgaG91cnMgPSAoZnVuY3Rpb24gY3JlYXRlSG91cnNPYmplY3QoKSB7XG4gICAgY29uc3QgZGF0YVRvSXRlcmF0ZSA9IHJlc3BvbnNlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXI7XG4gICAgY29uc3QgaG91cnNBcnJheSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YVRvSXRlcmF0ZS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaG91cnNBcnJheS5wdXNoKGNyZWF0ZUhvdXIoaSkpO1xuICAgIH1cbiAgICByZXR1cm4gaG91cnNBcnJheTtcbiAgfSkoKTtcblxuICByZXR1cm4gbmV3IEZvcmVjYXN0V2VhdGhlcihkYXlzLCBob3Vycyk7XG59XG5hc3luYyBmdW5jdGlvbiBjcmVhdGVDdXJyZW50QW5kRm9yZWNhc3QoY2l0eSkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldENpdHlXZWF0aGVyKGNpdHkpO1xuICBjb25zdCBjdXJyZW50ID0gc3RydWN0dXJlQ3VycmVudChyZXNwb25zZSk7XG4gIGNvbnN0IGZvcmVjYXN0ID0gc3RydWN0dXJlRm9yZWNhc3QocmVzcG9uc2UpO1xuICByZXR1cm4gW2N1cnJlbnQsIGZvcmVjYXN0XTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ3VycmVudEFuZEZvcmVjYXN0O1xuIiwiZnVuY3Rpb24gdmlld0F1dG9Db21wbGV0ZShkYXRhKSB7XG4gIGNvbnN0IGl0ZW1zTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXV0b2NvbXBsZXRlLWl0ZW1zXCIpO1xuXG4gIGNvbnN0IGFycmF5ID0gZGF0YS5jaXRpZXM7XG4gIGFycmF5LmZvckVhY2goKGNpdHksIGluZGV4KSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYudGV4dENvbnRlbnQgPSBgJHtjaXR5Lm5hbWV9LCAke2NpdHkucmVnaW9ufSwgJHtjaXR5LmNvdW50cnl9YDtcbiAgICBkaXYuZGF0YXNldC5kYXRhSW5kZXggPSBpbmRleDtcbiAgICBpdGVtc0xpc3QuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgfSk7XG4gIGl0ZW1zTGlzdC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2aWV3QXV0b0NvbXBsZXRlO1xuIiwiZnVuY3Rpb24gY3JlYXRlTmF2aWdhdGlvbkJhcigpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm5hdmlnYXRpb24tYmFyXCIpO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGZvcm0uYXV0b2NvbXBsZXRlID0gXCJvZmZcIjtcbiAgZm9ybS5ub1ZhbGlkYXRlID0gdHJ1ZTtcbiAgZm9ybS5pbm5lckhUTUwgPVxuICAgIFwiPGRpdiBjbGFzcz0nYXV0b2NvbXBsZXRlJz48aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J2NpdHktc2VhcmNoJyBuYW1lPSdjaXR5LXNlYXJjaCcgcGxhY2Vob2xkZXI9J1BhcmlzJz48L2Rpdj48ZGl2IGNsYXNzPSdhdXRvY29tcGxldGUtaXRlbXMnPjwvZGl2PlwiO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKGZvcm0pO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlV2VhdGhlckJhc2ljcyhjaXR5KSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwid2VhdGhlci1iYXNpY3NcIik7XG4gIGNvbnN0IGRhdGEgPSBjaXR5LndlYXRoZXJCYXNpY3NEYXRhKCk7XG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gYFxuICA8aW1nIHNyYz1cIiR7ZGF0YS5jb25kaXRpb25JY29ufVwiIGFsdD1cIiR7ZGF0YS5jb25kaXRpb25UZXh0fVwiPlxuICA8aDIgY2xhc3M9XCJjaXR5LW5hbWVcIj4ke2RhdGEuY2l0eX08L2gyPlxuICA8cCBjbGFzcz1cImNpdHktdGVtcGVyYXR1cmVcIj4ke2RhdGEudGVtcGVyYXR1cmV9wrA8L3A+XG4gIDxwIGNsYXNzPVwiY29uZGl0aW9uLXRleHRcIj4ke2RhdGEuY29uZGl0aW9uVGV4dH08L3A+XG4gIDxwIGNsYXNzPVwiY2l0eS10aW1lXCI+JHtkYXRhLmxhc3RVcGRhdGV9PC9wPlxuICA8cCBjbGFzcz1cIm1heC1taW4tdGVtcFwiPk1pbi4ke2RhdGEubWluVGVtcGVyYXR1cmV9wrAgTWF4LiR7ZGF0YS5tYXhUZW1wZXJhdHVyZX3CsDwvcD5cbiAgYDtcblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSG91ckZvcmVjYXN0KGNpdHkpIHtcbiAgY29uc3QgZGF0YSA9IGNpdHkuaG91ckZvcmVjYXN0RGF0YSgpO1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvdXItZm9yZWNhc3RcIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGVsZW1lbnQuaW5uZXJIVE1MICs9IGA8ZGl2PjxwPiR7ZGF0YVtpXS5ob3VyfTogJHtkYXRhW2ldLnRlbXBlcmF0dXJlfcKwPC9wPjxpbWcgc3JjPVwiJHtkYXRhW2ldLmNvbmRpdGlvbkljb259XCIgYWx0PVwiJHtkYXRhW2ldLmNvbmRpdGlvblRleHR9XCI+PC9kaXY+YDtcbiAgfVxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGF5Rm9yZWNhc3QoY2l0eSkge1xuICBjb25zdCBkYXRhID0gY2l0eS5kYXlGb3JlY2FzdERhdGEoKTtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkYXktZm9yZWNhc3RcIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGxldCBvcHRpb24gPSBcIlwiO1xuICAgIGlmIChpID09PSAwKSB7XG4gICAgICBvcHRpb24gPSBcIlRvZGF5OiBcIjtcbiAgICB9XG5cbiAgICBlbGVtZW50LmlubmVySFRNTCArPSBgPGRpdj48cD4ke29wdGlvbn0ke2RhdGFbaV0ubWluVGVtcGVyYXR1cmV9wrAgLSAke2RhdGFbaV0ubWF4VGVtcGVyYXR1cmV9wrA8L3A+PGltZyBzcmM9XCIke2RhdGFbaV0uY29uZGl0aW9uSWNvbn1cIj48L2Rpdj5gO1xuICB9XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEZXRhaWxzKGNpdHkpIHtcbiAgY29uc3QgZGF0YSA9IGNpdHkuZGV0YWlsc0RhdGEoKTtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ3ZWF0aGVyLWRldGFpbHNcIik7XG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gYFxuICBcbiAgPGRpdiBjbGFzcz1cIndlYXRoZXItZGV0YWlsLWRvdWJsZVwiPlxuICAgIDxkaXYgY2xhc3M9XCJ3ZWF0aGVyLWRldGFpbFwiPjxwPkFpciBxdWFsaXR5PC9wPjxwPiR7ZGF0YS5hcWl9PC9wPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ3ZWF0aGVyLWRldGFpbFwiPjxwPlVWIEluZGV4PC9wPjxwPiR7ZGF0YS51dklkeH08L3A+PC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJ3ZWF0aGVyLWRldGFpbC1kb3VibGVcIj5cbiAgICA8ZGl2IGNsYXNzPVwid2VhdGhlci1kZXRhaWxcIj48cD5TdW5yaXNlPC9wPjxwPiR7ZGF0YS5zdW5yaXNlVGltZX08L3A+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIndlYXRoZXItZGV0YWlsXCI+PHA+U3Vuc2V0PC9wPjxwPiAke2RhdGEuc3Vuc2V0VGltZX08L3A+PC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJ3ZWF0aGVyLWRldGFpbC1kb3VibGVcIj5cbiAgICA8ZGl2IGNsYXNzPVwid2VhdGhlci1kZXRhaWxcIj48cD5GZWVscyBsaWtlPC9wPjxwPiR7ZGF0YS5mZWVsc0xpa2V9wrA8L3A+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIndlYXRoZXItZGV0YWlsXCI+PHA+UHJlY2lwaXRhdGlvbnM8L3A+PHA+JHtkYXRhLnByZWNpcGl0YXRpb25zfSBtbTwvcD48L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cIndlYXRoZXItZGV0YWlsLWRvdWJsZVwiPlxuICAgIDxkaXYgY2xhc3M9XCJ3ZWF0aGVyLWRldGFpbFwiPjxwPldpbmQ8L3A+PHA+JHtkYXRhLndpbmRTcGVlZH0ga20vaDwvcD48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwid2VhdGhlci1kZXRhaWxcIj48cD5IdW1pZGl0eTwvcD48cD4ke2RhdGEuaHVtaWRpdHlQZXJjZW50YWdlfSAlPC9wPjwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwid2VhdGhlci1kZXRhaWwtZG91YmxlXCI+XG4gICAgPGRpdiBjbGFzcz1cIndlYXRoZXItZGV0YWlsXCI+PHA+VmlzaW9uPC9wPjxwPiR7ZGF0YS52aXNpb259IGttPC9wPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ3ZWF0aGVyLWRldGFpbFwiPjxwPlByZXNzdXJlPC9wPjxwPiR7ZGF0YS5oZWN0b3Bhc2NhbHN9IGhQYTwvcD48L2Rpdj5cbiAgPC9kaXY+YDtcblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gc2hvd1BhZ2UoY2l0eSkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICBjb25zdCBuYXZpZ2F0aW9uQmFyID0gY3JlYXRlTmF2aWdhdGlvbkJhcigpO1xuICBjb25zdCB3ZWF0aGVyQmFzaWNzID0gY3JlYXRlV2VhdGhlckJhc2ljcyhjaXR5KTtcbiAgY29uc3QgZGV0YWlsc0Jhc2ljID0gY3JlYXRlRGV0YWlscyhjaXR5KTtcbiAgY29uc3QgaG91ckZvcmVjYXN0ID0gY3JlYXRlSG91ckZvcmVjYXN0KGNpdHkpO1xuICBjb25zdCBkYXlGb3JlY2FzdCA9IGNyZWF0ZURheUZvcmVjYXN0KGNpdHkpO1xuICBtYWluLmFwcGVuZChcbiAgICBuYXZpZ2F0aW9uQmFyLFxuICAgIHdlYXRoZXJCYXNpY3MsXG4gICAgaG91ckZvcmVjYXN0LFxuICAgIGRheUZvcmVjYXN0LFxuICAgIGRldGFpbHNCYXNpY1xuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzaG93UGFnZTtcbiIsImV4cG9ydCB7IHVybEFscGhhYmV0IH0gZnJvbSAnLi91cmwtYWxwaGFiZXQvaW5kZXguanMnXG5leHBvcnQgbGV0IHJhbmRvbSA9IGJ5dGVzID0+IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoYnl0ZXMpKVxuZXhwb3J0IGxldCBjdXN0b21SYW5kb20gPSAoYWxwaGFiZXQsIGRlZmF1bHRTaXplLCBnZXRSYW5kb20pID0+IHtcbiAgbGV0IG1hc2sgPSAoMiA8PCAoTWF0aC5sb2coYWxwaGFiZXQubGVuZ3RoIC0gMSkgLyBNYXRoLkxOMikpIC0gMVxuICBsZXQgc3RlcCA9IC1+KCgxLjYgKiBtYXNrICogZGVmYXVsdFNpemUpIC8gYWxwaGFiZXQubGVuZ3RoKVxuICByZXR1cm4gKHNpemUgPSBkZWZhdWx0U2l6ZSkgPT4ge1xuICAgIGxldCBpZCA9ICcnXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGxldCBieXRlcyA9IGdldFJhbmRvbShzdGVwKVxuICAgICAgbGV0IGogPSBzdGVwXG4gICAgICB3aGlsZSAoai0tKSB7XG4gICAgICAgIGlkICs9IGFscGhhYmV0W2J5dGVzW2pdICYgbWFza10gfHwgJydcbiAgICAgICAgaWYgKGlkLmxlbmd0aCA9PT0gc2l6ZSkgcmV0dXJuIGlkXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5leHBvcnQgbGV0IGN1c3RvbUFscGhhYmV0ID0gKGFscGhhYmV0LCBzaXplID0gMjEpID0+XG4gIGN1c3RvbVJhbmRvbShhbHBoYWJldCwgc2l6ZSwgcmFuZG9tKVxuZXhwb3J0IGxldCBuYW5vaWQgPSAoc2l6ZSA9IDIxKSA9PlxuICBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KHNpemUpKS5yZWR1Y2UoKGlkLCBieXRlKSA9PiB7XG4gICAgYnl0ZSAmPSA2M1xuICAgIGlmIChieXRlIDwgMzYpIHtcbiAgICAgIGlkICs9IGJ5dGUudG9TdHJpbmcoMzYpXG4gICAgfSBlbHNlIGlmIChieXRlIDwgNjIpIHtcbiAgICAgIGlkICs9IChieXRlIC0gMjYpLnRvU3RyaW5nKDM2KS50b1VwcGVyQ2FzZSgpXG4gICAgfSBlbHNlIGlmIChieXRlID4gNjIpIHtcbiAgICAgIGlkICs9ICctJ1xuICAgIH0gZWxzZSB7XG4gICAgICBpZCArPSAnXydcbiAgICB9XG4gICAgcmV0dXJuIGlkXG4gIH0sICcnKVxuIiwiZXhwb3J0IGNvbnN0IHVybEFscGhhYmV0ID1cbiAgJ3VzZWFuZG9tLTI2VDE5ODM0MFBYNzVweEpBQ0tWRVJZTUlOREJVU0hXT0xGX0dRWmJmZ2hqa2xxdnd5enJpY3QnXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGRpc3BsYXkgZnJvbSBcIi4vbW9kdWxlcy9kaXNwbGF5XCI7XG5cbndpbmRvdy5vbmxvYWQgPSBhc3luYyAoKSA9PiB7XG4gIGF3YWl0IGRpc3BsYXkoXCJQYXJpc1wiKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=