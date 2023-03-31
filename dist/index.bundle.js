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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  --primary-color: #a799b7;\n  --secondary-color: #9888a5;\n  --tertiary-color: #776472;\n  --accent-color: #445552;\n  --secondary-accent-color: #294d4a;\n}\n\n#main {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: var(--primary-color);\n  gap: 20px;\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--secondary-color);\n  color: white;\n  font-size: 1rem;\n  width: fit-content;\n  padding: 10px;\n  border-radius: 8px;\n}\n\n.weather-detail {\n  height: 150px;\n  width: 150px;\n  border-radius: 50%;\n  background-color: var(--accent-color);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.weather-detail p {\n  text-align: center;\n}\n\n.navigation-bar {\n  height: fit-content;\n  width: 100%;\n  background-color: var(--tertiary-color);\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  position: sticky;\n  bottom: 0;\n  padding: 10px;\n}\n\n.card div {\n  display: flex;\n  align-items: center;\n}\n\n.autocomplete {\n  position: relative;\n  display: inline-block;\n}\n\ninput[type=\"search\"] {\n  outline: none;\n  border-radius: 8px;\n  padding: 10px 20px;\n}\n\n.autocomplete-items {\n  display: none;\n}\n.autocomplete-items div {\n  padding: 10px;\n  cursor: pointer;\n  background-color: #fff;\n  border-bottom: 1px solid #d4d4d4;\n}\n.autocomplete-items div:hover {\n  background-color: #e9e9e9;\n}\n.autocomplete-items.active {\n  position: absolute;\n  display: block;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,wBAAwB;EACxB,0BAA0B;EAC1B,yBAAyB;EACzB,uBAAuB;EACvB,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,sCAAsC;EACtC,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,wCAAwC;EACxC,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,qCAAqC;EACrC,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,WAAW;EACX,uCAAuC;EACvC,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,gBAAgB;EAChB,SAAS;EACT,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,eAAe;EACf,sBAAsB;EACtB,gCAAgC;AAClC;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,kBAAkB;EAClB,cAAc;AAChB","sourcesContent":["* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  --primary-color: #a799b7;\n  --secondary-color: #9888a5;\n  --tertiary-color: #776472;\n  --accent-color: #445552;\n  --secondary-accent-color: #294d4a;\n}\n\n#main {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: var(--primary-color);\n  gap: 20px;\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--secondary-color);\n  color: white;\n  font-size: 1rem;\n  width: fit-content;\n  padding: 10px;\n  border-radius: 8px;\n}\n\n.weather-detail {\n  height: 150px;\n  width: 150px;\n  border-radius: 50%;\n  background-color: var(--accent-color);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.weather-detail p {\n  text-align: center;\n}\n\n.navigation-bar {\n  height: fit-content;\n  width: 100%;\n  background-color: var(--tertiary-color);\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  position: sticky;\n  bottom: 0;\n  padding: 10px;\n}\n\n.card div {\n  display: flex;\n  align-items: center;\n}\n\n.autocomplete {\n  position: relative;\n  display: inline-block;\n}\n\ninput[type=\"search\"] {\n  outline: none;\n  border-radius: 8px;\n  padding: 10px 20px;\n}\n\n.autocomplete-items {\n  display: none;\n}\n.autocomplete-items div {\n  padding: 10px;\n  cursor: pointer;\n  background-color: #fff;\n  border-bottom: 1px solid #d4d4d4;\n}\n.autocomplete-items div:hover {\n  background-color: #e9e9e9;\n}\n.autocomplete-items.active {\n  position: absolute;\n  display: block;\n}\n"],"sourceRoot":""}]);
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
      `http://api.weatherapi.com/v1/search.json?key=feed359d6d0647688d9132213232803&q=${search}`,
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
  console.log(city);
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

/***/ "./src/modules/event-listeners.js":
/*!****************************************!*\
  !*** ./src/modules/event-listeners.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setListenerForItems": () => (/* binding */ setListenerForItems),
/* harmony export */   "setSearchListeners": () => (/* binding */ setSearchListeners)
/* harmony export */ });
/* harmony import */ var _manage_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-search */ "./src/modules/manage-search.js");
/* harmony import */ var _create_city__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-city */ "./src/modules/create-city.js");



function setListenerForItems() {
  const items = document.querySelectorAll(".autocomplete-items div");

  const arrayOfItems = Array.from(items);
  for (let i = 0; i < arrayOfItems.length; i += 1) {
    arrayOfItems[i].onclick = async (e) => {
      await _create_city__WEBPACK_IMPORTED_MODULE_1__["default"].createCity(e.target.textContent);
    };
  }
}

function setSearchListeners() {
  const searchBar = document.getElementById("city-search");

  searchBar.addEventListener("input", () => {
    (0,_manage_search__WEBPACK_IMPORTED_MODULE_0__.closeAllLists)();
    (0,_manage_search__WEBPACK_IMPORTED_MODULE_0__.getAutoComplete)();
  });

  const form = document.querySelector("form");

  form.onsubmit = (e) => {
    e.preventDefault();
    (0,_manage_search__WEBPACK_IMPORTED_MODULE_0__.closeAllLists)();
  };

  document.addEventListener("click", () => {
    (0,_manage_search__WEBPACK_IMPORTED_MODULE_0__.closeAllLists)();
  });
}



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
/* harmony export */   "getAutoComplete": () => (/* binding */ getAutoComplete)
/* harmony export */ });
/* harmony import */ var _api_calls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.calls */ "./src/modules/api.calls.js");
/* harmony import */ var _view_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-autocomplete */ "./src/modules/view-autocomplete.js");



function structureAutoComplete(data) {
  const cityNames = [];
  for (let i = 0; i < data.length; i += 1) {
    const city = data[i].name;
    cityNames.push(city);
  }

  return cityNames;
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

async function getAutoComplete() {
  const response = await getSearchData();
  if (response) {
    const result = structureAutoComplete(response);
    (0,_view_autocomplete__WEBPACK_IMPORTED_MODULE_1__["default"])(result);
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




// create the data

// Current city, current temperature in °C first and °F, last updated time, condition, max & min for current day,
// weather details: UV Index, wind speed + other details.
function structureCurrent(response) {
  // or iterate all key values with having my keys in array i look for then return
  // the values in an array and do array destructuring to instantiate the values

  const city = response.location.name;
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
    const sunriseTime = toFetch.astro.sunrise;
    const sunsetTime = toFetch.astro.sunset;
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
    weatherDetails
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
  console.log(response);
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
/* harmony import */ var _event_listeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-listeners */ "./src/modules/event-listeners.js");


function viewAutoComplete(cities) {
  const itemsList = document.querySelector(".autocomplete-items");
  cities.forEach((city) => {
    const div = document.createElement("div");
    div.textContent = city;

    itemsList.appendChild(div);
  });
  itemsList.classList.add("active");
  (0,_event_listeners__WEBPACK_IMPORTED_MODULE_0__.setListenerForItems)();
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
/* harmony import */ var _event_listeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-listeners */ "./src/modules/event-listeners.js");


function createNavigationBar() {
  const element = document.createElement("nav");
  element.classList.add("navigation-bar");
  const form = document.createElement("form");
  form.autocomplete = "off";
  form.noValidate = true;
  form.innerHTML =
    "<div class='autocomplete'><input type='search' id='city-search' name='city-search' placeholder='Paris'></div><div class='autocomplete-items'></div>";
  element.appendChild(form);
  return element;
}

function createWeatherBasics(city) {
  const element = document.createElement("div");
  element.classList.add("card");
  const data = city.weatherBasicsData();
  element.innerHTML = `
  <img src="${data.conditionIcon}" alt="${data.conditionText}">
  <h2 class="city-name">${data.city}</h2>
  <p class="city-temperature">${data.temperature}°</p>
  <p class="condition-text">${data.conditionText}</p>
  <p class="city-time">${data.lastUpdate}</p>
  <p class="max-min-temp">Max.${data.maxTemperature}° Min.${data.minTemperature}°</p>
  `;

  return element;
}

function createHourForecast(city) {
  const data = city.hourForecastData();
  const element = document.createElement("div");
  element.classList.add("card");
  for (let i = 0; i < data.length; i += 1) {
    element.innerHTML += `<div><p>${data[i].hour}: ${data[i].temperature}°</p><img src="${data[i].conditionIcon}" alt="${data[i].conditionText}"></div>`;
  }
  return element;
}

function createDayForecast(city) {
  const data = city.dayForecastData();
  const element = document.createElement("div");
  element.classList.add("card");

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

  element.innerHTML = `
  <div class="weather-detail"><p>Air quality</p><p>${data.aqi}</p></div>
  <div class="weather-detail"><p>UV Index</p><p>${data.uvIdx}</p></div>
  <div class="weather-detail"><p>Sunrise & Sunset</p><p>${data.sunriseTime} ${data.sunsetTime}</p></div>
  <div class="weather-detail"><p>Feels like</p><p>${data.feelsLike}°</p></div>
  <div class="weather-detail"><p>Precipitations</p><p>${data.precipitations} mm</p></div>
  <div class="weather-detail"><p>Wind</p><p>${data.windSpeed} km/h</p></div>
  <div class="weather-detail"><p>Humidity</p><p>${data.humidityPercentage} %</p></div>
  <div class="weather-detail"><p>Vision</p><p>${data.vision} km</p></div>
  <div class="weather-detail"><p>Pressure</p><p>${data.hectopascals} hPa</p></div>`;

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
  (0,_event_listeners__WEBPACK_IMPORTED_MODULE_0__.setSearchListeners)();
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
/* harmony import */ var _modules_view_city_weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/view-city-weather */ "./src/modules/view-city-weather.js");
/* harmony import */ var _modules_create_city__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/create-city */ "./src/modules/create-city.js");




window.onload = async () => {
  const response = await (0,_modules_create_city__WEBPACK_IMPORTED_MODULE_2__["default"])("Paris");
  const city = response.newCity;
  (0,_modules_view_city_weather__WEBPACK_IMPORTED_MODULE_1__["default"])(city);
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUM4QjtBQUNKOztBQUUvQztBQUNBLHlCQUF5QixnRUFBVTtBQUNuQztBQUNBLEVBQUUsc0VBQVE7QUFDViIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvYXBpLmNhbGxzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvY2l0eS13ZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvY3JlYXRlLWNpdHkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9jdXJyZW50LXdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9ldmVudC1saXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9mb3JlY2FzdC13ZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvbWFuYWdlLXNlYXJjaC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3N0cnVjdHVyZS1jaXR5LWRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy92aWV3LWF1dG9jb21wbGV0ZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3ZpZXctY2l0eS13ZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL25hbm9pZC9pbmRleC5icm93c2VyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL25hbm9pZC91cmwtYWxwaGFiZXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLXByaW1hcnktY29sb3I6ICNhNzk5Yjc7XFxuICAtLXNlY29uZGFyeS1jb2xvcjogIzk4ODhhNTtcXG4gIC0tdGVydGlhcnktY29sb3I6ICM3NzY0NzI7XFxuICAtLWFjY2VudC1jb2xvcjogIzQ0NTU1MjtcXG4gIC0tc2Vjb25kYXJ5LWFjY2VudC1jb2xvcjogIzI5NGQ0YTtcXG59XFxuXFxuI21haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi53ZWF0aGVyLWRldGFpbCB7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ud2VhdGhlci1kZXRhaWwgcCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5uYXZpZ2F0aW9uLWJhciB7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIGJvdHRvbTogMDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5jYXJkIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmF1dG9jb21wbGV0ZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxufVxcblxcbi5hdXRvY29tcGxldGUtaXRlbXMge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmF1dG9jb21wbGV0ZS1pdGVtcyBkaXYge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q0ZDRkNDtcXG59XFxuLmF1dG9jb21wbGV0ZS1pdGVtcyBkaXY6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTtcXG59XFxuLmF1dG9jb21wbGV0ZS1pdGVtcy5hY3RpdmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixzQ0FBc0M7RUFDdEMsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHdDQUF3QztFQUN4QyxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUNBQXFDO0VBQ3JDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsdUNBQXVDO0VBQ3ZDLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbjpyb290IHtcXG4gIC0tcHJpbWFyeS1jb2xvcjogI2E3OTliNztcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjOTg4OGE1O1xcbiAgLS10ZXJ0aWFyeS1jb2xvcjogIzc3NjQ3MjtcXG4gIC0tYWNjZW50LWNvbG9yOiAjNDQ1NTUyO1xcbiAgLS1zZWNvbmRhcnktYWNjZW50LWNvbG9yOiAjMjk0ZDRhO1xcbn1cXG5cXG4jbWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLmNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLndlYXRoZXItZGV0YWlsIHtcXG4gIGhlaWdodDogMTUwcHg7XFxuICB3aWR0aDogMTUwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi53ZWF0aGVyLWRldGFpbCBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm5hdmlnYXRpb24tYmFyIHtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5LWNvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgYm90dG9tOiAwO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmNhcmQgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYXV0b2NvbXBsZXRlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG59XFxuXFxuLmF1dG9jb21wbGV0ZS1pdGVtcyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uYXV0b2NvbXBsZXRlLWl0ZW1zIGRpdiB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDRkNGQ0O1xcbn1cXG4uYXV0b2NvbXBsZXRlLWl0ZW1zIGRpdjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xcbn1cXG4uYXV0b2NvbXBsZXRlLWl0ZW1zLmFjdGl2ZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImFzeW5jIGZ1bmN0aW9uIHNlYXJjaENpdHkoc2VhcmNoKSB7XG4gIGxldCByZXN1bHQ7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL3NlYXJjaC5qc29uP2tleT1mZWVkMzU5ZDZkMDY0NzY4OGQ5MTMyMjEzMjMyODAzJnE9JHtzZWFyY2h9YCxcbiAgICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICAgICk7XG4gICAgY29uc3Qgc2VhcmNoRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXN1bHQgPSBzZWFyY2hEYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRDaXR5V2VhdGhlcihjaXR5KSB7XG4gIGxldCByZXN1bHQ7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1mZWVkMzU5ZDZkMDY0NzY4OGQ5MTMyMjEzMjMyODAzJnE9JHtjaXR5fSZkYXlzPTMmYXFpPXllcyZhbGVydHM9bm9gLFxuICAgICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICAgKTtcbiAgICBjb25zdCBjaXR5RGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXN1bHQgPSBjaXR5RGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IHsgZ2V0Q2l0eVdlYXRoZXIsIHNlYXJjaENpdHkgfTtcbiIsImNsYXNzIENpdHlXZWF0aGVyIHtcbiAgY29uc3RydWN0b3IodXVpZCwgY3VycmVudFdlYXRoZXIsIGZvcmVjYXN0V2VhdGhlcikge1xuICAgIHRoaXMudXVpZCA9IHV1aWQ7XG4gICAgdGhpcy5uYW1lID0gY3VycmVudFdlYXRoZXIuY2l0eTtcbiAgICB0aGlzLmN1cnJlbnRXZWF0aGVyID0gY3VycmVudFdlYXRoZXI7XG4gICAgdGhpcy5mb3JlY2FzdFdlYXRoZXIgPSBmb3JlY2FzdFdlYXRoZXI7XG4gIH1cblxuICB3ZWF0aGVyQmFzaWNzRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50V2VhdGhlcjtcbiAgfVxuXG4gIGhvdXJGb3JlY2FzdERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9yZWNhc3RXZWF0aGVyLmhvdXJzO1xuICB9XG5cbiAgZGF5Rm9yZWNhc3REYXRhKCkge1xuICAgIHJldHVybiB0aGlzLmZvcmVjYXN0V2VhdGhlci5kYXlzO1xuICB9XG5cbiAgZGV0YWlsc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFdlYXRoZXIud2VhdGhlckRldGFpbHM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2l0eVdlYXRoZXI7XG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5pbXBvcnQgeyBuYW5vaWQgfSBmcm9tIFwibmFub2lkXCI7XG5pbXBvcnQgY3JlYXRlQ3VycmVudEFuZEZvcmVjYXN0IGZyb20gXCIuL3N0cnVjdHVyZS1jaXR5LWRhdGFcIjtcbmltcG9ydCBDaXR5V2VhdGhlciBmcm9tIFwiLi9jaXR5LXdlYXRoZXJcIjtcblxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ2l0eShjaXR5KSB7XG4gIGNvbnNvbGUubG9nKGNpdHkpO1xuICBjb25zdCBhcnJheSA9IGF3YWl0IGNyZWF0ZUN1cnJlbnRBbmRGb3JlY2FzdChjaXR5KTtcbiAgY29uc3QgW2N1cnJlbnQsIGZvcmVjYXN0XSA9IGFycmF5O1xuICBjb25zdCBuZXdDaXR5ID0gbmV3IENpdHlXZWF0aGVyKG5hbm9pZCgpLCBjdXJyZW50LCBmb3JlY2FzdCk7XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdDaXR5LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDaXR5O1xuIiwiLy8gQ3VycmVudCBjaXR5LCBjdXJyZW50IHRlbXBlcmF0dXJlIGluIMKwQyBmaXJzdCBhbmQgwrBGLCBsYXN0IHVwZGF0ZWQgdGltZSwgY29uZGl0aW9uLCBtYXggJiBtaW4gZm9yIGN1cnJlbnQgZGF5LFxuLy8gd2VhdGhlciBkZXRhaWxzOiBVViBJbmRleCwgd2luZCBzcGVlZCArIG90aGVyIGRldGFpbHMuXG5cbmNsYXNzIEN1cnJlbnRXZWF0aGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgY2l0eSxcbiAgICB0ZW1wZXJhdHVyZSxcbiAgICBsYXN0VXBkYXRlLFxuICAgIGNvbmRpdGlvblRleHQsXG4gICAgY29uZGl0aW9uSWNvbixcbiAgICBtYXhUZW1wZXJhdHVyZSxcbiAgICBtaW5UZW1wZXJhdHVyZSxcbiAgICB3ZWF0aGVyRGV0YWlsc1xuICApIHtcbiAgICB0aGlzLmNpdHkgPSBjaXR5O1xuICAgIHRoaXMudGVtcGVyYXR1cmUgPSB0ZW1wZXJhdHVyZTtcbiAgICB0aGlzLmxhc3RVcGRhdGUgPSBsYXN0VXBkYXRlO1xuICAgIHRoaXMuY29uZGl0aW9uVGV4dCA9IGNvbmRpdGlvblRleHQ7XG4gICAgdGhpcy5jb25kaXRpb25JY29uID0gY29uZGl0aW9uSWNvbjtcbiAgICB0aGlzLm1heFRlbXBlcmF0dXJlID0gbWF4VGVtcGVyYXR1cmU7XG4gICAgdGhpcy5taW5UZW1wZXJhdHVyZSA9IG1pblRlbXBlcmF0dXJlO1xuICAgIHRoaXMud2VhdGhlckRldGFpbHMgPSB3ZWF0aGVyRGV0YWlscztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDdXJyZW50V2VhdGhlcjtcbiIsImltcG9ydCB7IGdldEF1dG9Db21wbGV0ZSwgY2xvc2VBbGxMaXN0cyB9IGZyb20gXCIuL21hbmFnZS1zZWFyY2hcIjtcbmltcG9ydCBjaXRpZXMgZnJvbSBcIi4vY3JlYXRlLWNpdHlcIjtcblxuZnVuY3Rpb24gc2V0TGlzdGVuZXJGb3JJdGVtcygpIHtcbiAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmF1dG9jb21wbGV0ZS1pdGVtcyBkaXZcIik7XG5cbiAgY29uc3QgYXJyYXlPZkl0ZW1zID0gQXJyYXkuZnJvbShpdGVtcyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlPZkl0ZW1zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgYXJyYXlPZkl0ZW1zW2ldLm9uY2xpY2sgPSBhc3luYyAoZSkgPT4ge1xuICAgICAgYXdhaXQgY2l0aWVzLmNyZWF0ZUNpdHkoZS50YXJnZXQudGV4dENvbnRlbnQpO1xuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0U2VhcmNoTGlzdGVuZXJzKCkge1xuICBjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNpdHktc2VhcmNoXCIpO1xuXG4gIHNlYXJjaEJhci5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgIGNsb3NlQWxsTGlzdHMoKTtcbiAgICBnZXRBdXRvQ29tcGxldGUoKTtcbiAgfSk7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuXG4gIGZvcm0ub25zdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjbG9zZUFsbExpc3RzKCk7XG4gIH07XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbG9zZUFsbExpc3RzKCk7XG4gIH0pO1xufVxuZXhwb3J0IHsgc2V0U2VhcmNoTGlzdGVuZXJzLCBzZXRMaXN0ZW5lckZvckl0ZW1zIH07XG4iLCIvLyBpbnNpZGUgZGF5cyAvIGhvdXJzIGFycmF5OiBDdXJyZW50IGhvdXIvZGF5IHRlbXBlcmF0dXJlICsgY29uZGl0aW9uIGljb24gLyBtYXggLSBtaW4gKyBjb25kaXRpb24gaWNvbi5cblxuY2xhc3MgRm9yZWNhc3RXZWF0aGVyIHtcbiAgY29uc3RydWN0b3IoZGF5cywgaG91cnMpIHtcbiAgICB0aGlzLmRheXMgPSBkYXlzO1xuICAgIHRoaXMuaG91cnMgPSBob3VycztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JlY2FzdFdlYXRoZXI7XG4iLCJpbXBvcnQgeyBzZWFyY2hDaXR5IH0gZnJvbSBcIi4vYXBpLmNhbGxzXCI7XG5pbXBvcnQgdmlld0F1dG9Db21wbGV0ZSBmcm9tIFwiLi92aWV3LWF1dG9jb21wbGV0ZVwiO1xuXG5mdW5jdGlvbiBzdHJ1Y3R1cmVBdXRvQ29tcGxldGUoZGF0YSkge1xuICBjb25zdCBjaXR5TmFtZXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgY2l0eSA9IGRhdGFbaV0ubmFtZTtcbiAgICBjaXR5TmFtZXMucHVzaChjaXR5KTtcbiAgfVxuXG4gIHJldHVybiBjaXR5TmFtZXM7XG59XG5cbmZ1bmN0aW9uIGNsb3NlQWxsTGlzdHMoKSB7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF1dG9jb21wbGV0ZS1pdGVtc1wiKSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGl0ZW1zTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXV0b2NvbXBsZXRlLWl0ZW1zXCIpO1xuICAgIGl0ZW1zTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGlmIChpdGVtc0xpc3QuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKVxuICAgICAgaXRlbXNMaXN0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVTZWFyY2goc2VhcmNoKSB7XG4gIGlmIChzZWFyY2gubGVuZ3RoID4gMikgcmV0dXJuIHRydWU7XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRTZWFyY2hEYXRhKCkge1xuICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNpdHktc2VhcmNoXCIpLnZhbHVlO1xuICBsZXQgcmVzcG9uc2U7XG4gIGlmICh2YWxpZGF0ZVNlYXJjaChzZWFyY2gpID09PSB0cnVlKSB7XG4gICAgcmVzcG9uc2UgPSBhd2FpdCBzZWFyY2hDaXR5KHNlYXJjaCk7XG4gIH1cbiAgcmV0dXJuIHJlc3BvbnNlO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRBdXRvQ29tcGxldGUoKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0U2VhcmNoRGF0YSgpO1xuICBpZiAocmVzcG9uc2UpIHtcbiAgICBjb25zdCByZXN1bHQgPSBzdHJ1Y3R1cmVBdXRvQ29tcGxldGUocmVzcG9uc2UpO1xuICAgIHZpZXdBdXRvQ29tcGxldGUocmVzdWx0KTtcbiAgfVxufVxuXG5leHBvcnQgeyBjbG9zZUFsbExpc3RzLCBnZXRBdXRvQ29tcGxldGUgfTtcbiIsImltcG9ydCB7IGdldENpdHlXZWF0aGVyIH0gZnJvbSBcIi4vYXBpLmNhbGxzXCI7XG5pbXBvcnQgQ3VycmVudFdlYXRoZXIgZnJvbSBcIi4vY3VycmVudC13ZWF0aGVyXCI7XG5pbXBvcnQgRm9yZWNhc3RXZWF0aGVyIGZyb20gXCIuL2ZvcmVjYXN0LXdlYXRoZXJcIjtcblxuLy8gY3JlYXRlIHRoZSBkYXRhXG5cbi8vIEN1cnJlbnQgY2l0eSwgY3VycmVudCB0ZW1wZXJhdHVyZSBpbiDCsEMgZmlyc3QgYW5kIMKwRiwgbGFzdCB1cGRhdGVkIHRpbWUsIGNvbmRpdGlvbiwgbWF4ICYgbWluIGZvciBjdXJyZW50IGRheSxcbi8vIHdlYXRoZXIgZGV0YWlsczogVVYgSW5kZXgsIHdpbmQgc3BlZWQgKyBvdGhlciBkZXRhaWxzLlxuZnVuY3Rpb24gc3RydWN0dXJlQ3VycmVudChyZXNwb25zZSkge1xuICAvLyBvciBpdGVyYXRlIGFsbCBrZXkgdmFsdWVzIHdpdGggaGF2aW5nIG15IGtleXMgaW4gYXJyYXkgaSBsb29rIGZvciB0aGVuIHJldHVyblxuICAvLyB0aGUgdmFsdWVzIGluIGFuIGFycmF5IGFuZCBkbyBhcnJheSBkZXN0cnVjdHVyaW5nIHRvIGluc3RhbnRpYXRlIHRoZSB2YWx1ZXNcblxuICBjb25zdCBjaXR5ID0gcmVzcG9uc2UubG9jYXRpb24ubmFtZTtcbiAgY29uc3QgdGVtcGVyYXR1cmUgPSByZXNwb25zZS5jdXJyZW50LnRlbXBfYztcbiAgY29uc3QgbGFzdFVwZGF0ZSA9IHJlc3BvbnNlLmN1cnJlbnQubGFzdF91cGRhdGVkLnNwbGl0KFwiIFwiKVsxXTtcbiAgY29uc3QgY29uZGl0aW9uVGV4dCA9IHJlc3BvbnNlLmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG4gIGNvbnN0IGNvbmRpdGlvbkljb24gPSByZXNwb25zZS5jdXJyZW50LmNvbmRpdGlvbi5pY29uO1xuICBjb25zdCBtYXhUZW1wZXJhdHVyZSA9IE1hdGgucm91bmQoXG4gICAgcmVzcG9uc2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1heHRlbXBfY1xuICApO1xuICBjb25zdCBtaW5UZW1wZXJhdHVyZSA9IE1hdGgucm91bmQoXG4gICAgcmVzcG9uc2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1pbnRlbXBfY1xuICApO1xuICBjb25zdCB3ZWF0aGVyRGV0YWlscyA9IChmdW5jdGlvbiBnZXRXZWF0aGVyRGV0YWlscygpIHtcbiAgICBjb25zdCB0b0ZldGNoID0gcmVzcG9uc2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF07XG4gICAgY29uc3QgYXFpID0gKGZ1bmN0aW9uIGdldEFRSSgpIHtcbiAgICAgIGNvbnN0IG51bWJlciA9IHRvRmV0Y2guZGF5LmFpcl9xdWFsaXR5W1widXMtZXBhLWluZGV4XCJdO1xuICAgICAgY29uc3QgYXFpVGFibGUgPSB7XG4gICAgICAgIDE6IFwiR29vZFwiLFxuICAgICAgICAyOiBcIkFjY2VwdGFibGVcIixcbiAgICAgICAgMzogXCJVbmhlYWx0aHkgZm9yIHNlbnNpdGl2ZSBncm91cHNcIixcbiAgICAgICAgNDogXCJVbmhlYWx0aHlcIixcbiAgICAgICAgNTogXCJWZXJ5IHVuaGVhbHRoeVwiLFxuICAgICAgICA2OiBcIkhhemFyZG91c1wiLFxuICAgICAgfTtcbiAgICAgIGxldCBxdWFsaXR5O1xuICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGFxaVRhYmxlKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoa2V5c1tpXSA9PT0gbnVtYmVyLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICBxdWFsaXR5ID0gYXFpVGFibGVba2V5c1tpXV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBxdWFsaXR5O1xuICAgIH0pKCk7XG4gICAgY29uc3QgdXZJZHggPSB0b0ZldGNoLmRheS51djtcbiAgICBjb25zdCBzdW5yaXNlVGltZSA9IHRvRmV0Y2guYXN0cm8uc3VucmlzZTtcbiAgICBjb25zdCBzdW5zZXRUaW1lID0gdG9GZXRjaC5hc3Ryby5zdW5zZXQ7XG4gICAgY29uc3QgZmVlbHNMaWtlID0gTWF0aC5yb3VuZChyZXNwb25zZS5jdXJyZW50LmZlZWxzbGlrZV9jKTtcbiAgICBjb25zdCBwcmVjaXBpdGF0aW9ucyA9IHJlc3BvbnNlLmN1cnJlbnQucHJlY2lwX21tO1xuICAgIGNvbnN0IHdpbmRTcGVlZCA9IHJlc3BvbnNlLmN1cnJlbnQud2luZF9rcGg7XG4gICAgY29uc3QgaHVtaWRpdHlQZXJjZW50YWdlID0gcmVzcG9uc2UuY3VycmVudC5odW1pZGl0eTtcbiAgICBjb25zdCB2aXNpb24gPSByZXNwb25zZS5jdXJyZW50LnZpc19rbTtcbiAgICBjb25zdCBoZWN0b3Bhc2NhbHMgPSByZXNwb25zZS5jdXJyZW50LnByZXNzdXJlX21iO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGFxaSxcbiAgICAgIHV2SWR4LFxuICAgICAgc3VucmlzZVRpbWUsXG4gICAgICBzdW5zZXRUaW1lLFxuICAgICAgZmVlbHNMaWtlLFxuICAgICAgcHJlY2lwaXRhdGlvbnMsXG4gICAgICB3aW5kU3BlZWQsXG4gICAgICBodW1pZGl0eVBlcmNlbnRhZ2UsXG4gICAgICB2aXNpb24sXG4gICAgICBoZWN0b3Bhc2NhbHMsXG4gICAgfTtcbiAgfSkoKTtcblxuICByZXR1cm4gbmV3IEN1cnJlbnRXZWF0aGVyKFxuICAgIGNpdHksXG4gICAgdGVtcGVyYXR1cmUsXG4gICAgbGFzdFVwZGF0ZSxcbiAgICBjb25kaXRpb25UZXh0LFxuICAgIGNvbmRpdGlvbkljb24sXG4gICAgbWF4VGVtcGVyYXR1cmUsXG4gICAgbWluVGVtcGVyYXR1cmUsXG4gICAgd2VhdGhlckRldGFpbHNcbiAgKTtcbn1cblxuLy8gb2JqZWN0czogaG91ciAvIGRheSBhcnJheSB3aXRoIGluc2lkZTogQ3VycmVudCBob3VyL2RheSB0ZW1wZXJhdHVyZSArIGNvbmRpdGlvbiBpY29uIC8gbWF4IC0gbWluICsgY29uZGl0aW9uIGljb24uXG5cbmZ1bmN0aW9uIHN0cnVjdHVyZUZvcmVjYXN0KHJlc3BvbnNlKSB7XG4gIGNvbnN0IGNyZWF0ZURheSA9IChpZHgpID0+IHtcbiAgICBjb25zdCBhcnJheSA9IHJlc3BvbnNlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5O1xuICAgIGNvbnN0IG1heFRlbXBlcmF0dXJlID0gTWF0aC5yb3VuZChhcnJheVtpZHhdLmRheS5tYXh0ZW1wX2MpO1xuICAgIGNvbnN0IG1pblRlbXBlcmF0dXJlID0gTWF0aC5yb3VuZChhcnJheVtpZHhdLmRheS5taW50ZW1wX2MpO1xuICAgIGNvbnN0IGNvbmRpdGlvbkljb24gPSBhcnJheVtpZHhdLmRheS5jb25kaXRpb24uaWNvbjtcbiAgICBjb25zdCBjb25kaXRpb25UZXh0ID0gYXJyYXlbaWR4XS5kYXkuY29uZGl0aW9uLnRleHQ7XG5cbiAgICByZXR1cm4geyBtYXhUZW1wZXJhdHVyZSwgbWluVGVtcGVyYXR1cmUsIGNvbmRpdGlvbkljb24sIGNvbmRpdGlvblRleHQgfTtcbiAgfTtcbiAgY29uc3QgY3JlYXRlSG91ciA9IChpZHgpID0+IHtcbiAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IE1hdGgucm91bmQoXG4gICAgICByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyW2lkeF0udGVtcF9jXG4gICAgKTtcbiAgICBjb25zdCBob3VyID0gcmVzcG9uc2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91cltpZHhdLnRpbWUuc3BsaXQoXCIgXCIpWzFdO1xuICAgIGNvbnN0IGNvbmRpdGlvbkljb24gPVxuICAgICAgcmVzcG9uc2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91cltpZHhdLmNvbmRpdGlvbi5pY29uO1xuICAgIGNvbnN0IGNvbmRpdGlvblRleHQgPVxuICAgICAgcmVzcG9uc2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91cltpZHhdLmNvbmRpdGlvbi50ZXh0O1xuICAgIHJldHVybiB7IHRlbXBlcmF0dXJlLCBob3VyLCBjb25kaXRpb25JY29uLCBjb25kaXRpb25UZXh0IH07XG4gIH07XG4gIGNvbnN0IGRheXMgPSAoZnVuY3Rpb24gY3JlYXRlRGF5c09iamVjdCgpIHtcbiAgICBjb25zdCBkYXlzQXJyYXkgPSBbY3JlYXRlRGF5KDApLCBjcmVhdGVEYXkoMSksIGNyZWF0ZURheSgyKV07XG5cbiAgICByZXR1cm4gZGF5c0FycmF5O1xuICB9KSgpO1xuXG4gIGNvbnN0IGhvdXJzID0gKGZ1bmN0aW9uIGNyZWF0ZUhvdXJzT2JqZWN0KCkge1xuICAgIGNvbnN0IGRhdGFUb0l0ZXJhdGUgPSByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyO1xuICAgIGNvbnN0IGhvdXJzQXJyYXkgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFUb0l0ZXJhdGUubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGhvdXJzQXJyYXkucHVzaChjcmVhdGVIb3VyKGkpKTtcbiAgICB9XG4gICAgcmV0dXJuIGhvdXJzQXJyYXk7XG4gIH0pKCk7XG5cbiAgcmV0dXJuIG5ldyBGb3JlY2FzdFdlYXRoZXIoZGF5cywgaG91cnMpO1xufVxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ3VycmVudEFuZEZvcmVjYXN0KGNpdHkpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRDaXR5V2VhdGhlcihjaXR5KTtcbiAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICBjb25zdCBjdXJyZW50ID0gc3RydWN0dXJlQ3VycmVudChyZXNwb25zZSk7XG4gIGNvbnN0IGZvcmVjYXN0ID0gc3RydWN0dXJlRm9yZWNhc3QocmVzcG9uc2UpO1xuICByZXR1cm4gW2N1cnJlbnQsIGZvcmVjYXN0XTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ3VycmVudEFuZEZvcmVjYXN0O1xuIiwiaW1wb3J0IHsgc2V0TGlzdGVuZXJGb3JJdGVtcyB9IGZyb20gXCIuL2V2ZW50LWxpc3RlbmVyc1wiO1xuXG5mdW5jdGlvbiB2aWV3QXV0b0NvbXBsZXRlKGNpdGllcykge1xuICBjb25zdCBpdGVtc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF1dG9jb21wbGV0ZS1pdGVtc1wiKTtcbiAgY2l0aWVzLmZvckVhY2goKGNpdHkpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi50ZXh0Q29udGVudCA9IGNpdHk7XG5cbiAgICBpdGVtc0xpc3QuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgfSk7XG4gIGl0ZW1zTGlzdC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICBzZXRMaXN0ZW5lckZvckl0ZW1zKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZpZXdBdXRvQ29tcGxldGU7XG4iLCJpbXBvcnQgeyBzZXRTZWFyY2hMaXN0ZW5lcnMgfSBmcm9tIFwiLi9ldmVudC1saXN0ZW5lcnNcIjtcblxuZnVuY3Rpb24gY3JlYXRlTmF2aWdhdGlvbkJhcigpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm5hdmlnYXRpb24tYmFyXCIpO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGZvcm0uYXV0b2NvbXBsZXRlID0gXCJvZmZcIjtcbiAgZm9ybS5ub1ZhbGlkYXRlID0gdHJ1ZTtcbiAgZm9ybS5pbm5lckhUTUwgPVxuICAgIFwiPGRpdiBjbGFzcz0nYXV0b2NvbXBsZXRlJz48aW5wdXQgdHlwZT0nc2VhcmNoJyBpZD0nY2l0eS1zZWFyY2gnIG5hbWU9J2NpdHktc2VhcmNoJyBwbGFjZWhvbGRlcj0nUGFyaXMnPjwvZGl2PjxkaXYgY2xhc3M9J2F1dG9jb21wbGV0ZS1pdGVtcyc+PC9kaXY+XCI7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVXZWF0aGVyQmFzaWNzKGNpdHkpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gIGNvbnN0IGRhdGEgPSBjaXR5LndlYXRoZXJCYXNpY3NEYXRhKCk7XG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gYFxuICA8aW1nIHNyYz1cIiR7ZGF0YS5jb25kaXRpb25JY29ufVwiIGFsdD1cIiR7ZGF0YS5jb25kaXRpb25UZXh0fVwiPlxuICA8aDIgY2xhc3M9XCJjaXR5LW5hbWVcIj4ke2RhdGEuY2l0eX08L2gyPlxuICA8cCBjbGFzcz1cImNpdHktdGVtcGVyYXR1cmVcIj4ke2RhdGEudGVtcGVyYXR1cmV9wrA8L3A+XG4gIDxwIGNsYXNzPVwiY29uZGl0aW9uLXRleHRcIj4ke2RhdGEuY29uZGl0aW9uVGV4dH08L3A+XG4gIDxwIGNsYXNzPVwiY2l0eS10aW1lXCI+JHtkYXRhLmxhc3RVcGRhdGV9PC9wPlxuICA8cCBjbGFzcz1cIm1heC1taW4tdGVtcFwiPk1heC4ke2RhdGEubWF4VGVtcGVyYXR1cmV9wrAgTWluLiR7ZGF0YS5taW5UZW1wZXJhdHVyZX3CsDwvcD5cbiAgYDtcblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSG91ckZvcmVjYXN0KGNpdHkpIHtcbiAgY29uc3QgZGF0YSA9IGNpdHkuaG91ckZvcmVjYXN0RGF0YSgpO1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgKz0gYDxkaXY+PHA+JHtkYXRhW2ldLmhvdXJ9OiAke2RhdGFbaV0udGVtcGVyYXR1cmV9wrA8L3A+PGltZyBzcmM9XCIke2RhdGFbaV0uY29uZGl0aW9uSWNvbn1cIiBhbHQ9XCIke2RhdGFbaV0uY29uZGl0aW9uVGV4dH1cIj48L2Rpdj5gO1xuICB9XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEYXlGb3JlY2FzdChjaXR5KSB7XG4gIGNvbnN0IGRhdGEgPSBjaXR5LmRheUZvcmVjYXN0RGF0YSgpO1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBsZXQgb3B0aW9uID0gXCJcIjtcbiAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgb3B0aW9uID0gXCJUb2RheTogXCI7XG4gICAgfVxuXG4gICAgZWxlbWVudC5pbm5lckhUTUwgKz0gYDxkaXY+PHA+JHtvcHRpb259JHtkYXRhW2ldLm1pblRlbXBlcmF0dXJlfcKwIC0gJHtkYXRhW2ldLm1heFRlbXBlcmF0dXJlfcKwPC9wPjxpbWcgc3JjPVwiJHtkYXRhW2ldLmNvbmRpdGlvbkljb259XCI+PC9kaXY+YDtcbiAgfVxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGV0YWlscyhjaXR5KSB7XG4gIGNvbnN0IGRhdGEgPSBjaXR5LmRldGFpbHNEYXRhKCk7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuXG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gYFxuICA8ZGl2IGNsYXNzPVwid2VhdGhlci1kZXRhaWxcIj48cD5BaXIgcXVhbGl0eTwvcD48cD4ke2RhdGEuYXFpfTwvcD48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cIndlYXRoZXItZGV0YWlsXCI+PHA+VVYgSW5kZXg8L3A+PHA+JHtkYXRhLnV2SWR4fTwvcD48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cIndlYXRoZXItZGV0YWlsXCI+PHA+U3VucmlzZSAmIFN1bnNldDwvcD48cD4ke2RhdGEuc3VucmlzZVRpbWV9ICR7ZGF0YS5zdW5zZXRUaW1lfTwvcD48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cIndlYXRoZXItZGV0YWlsXCI+PHA+RmVlbHMgbGlrZTwvcD48cD4ke2RhdGEuZmVlbHNMaWtlfcKwPC9wPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwid2VhdGhlci1kZXRhaWxcIj48cD5QcmVjaXBpdGF0aW9uczwvcD48cD4ke2RhdGEucHJlY2lwaXRhdGlvbnN9IG1tPC9wPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwid2VhdGhlci1kZXRhaWxcIj48cD5XaW5kPC9wPjxwPiR7ZGF0YS53aW5kU3BlZWR9IGttL2g8L3A+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ3ZWF0aGVyLWRldGFpbFwiPjxwPkh1bWlkaXR5PC9wPjxwPiR7ZGF0YS5odW1pZGl0eVBlcmNlbnRhZ2V9ICU8L3A+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ3ZWF0aGVyLWRldGFpbFwiPjxwPlZpc2lvbjwvcD48cD4ke2RhdGEudmlzaW9ufSBrbTwvcD48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cIndlYXRoZXItZGV0YWlsXCI+PHA+UHJlc3N1cmU8L3A+PHA+JHtkYXRhLmhlY3RvcGFzY2Fsc30gaFBhPC9wPjwvZGl2PmA7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHNob3dQYWdlKGNpdHkpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgY29uc3QgbmF2aWdhdGlvbkJhciA9IGNyZWF0ZU5hdmlnYXRpb25CYXIoKTtcbiAgY29uc3Qgd2VhdGhlckJhc2ljcyA9IGNyZWF0ZVdlYXRoZXJCYXNpY3MoY2l0eSk7XG4gIGNvbnN0IGRldGFpbHNCYXNpYyA9IGNyZWF0ZURldGFpbHMoY2l0eSk7XG4gIGNvbnN0IGhvdXJGb3JlY2FzdCA9IGNyZWF0ZUhvdXJGb3JlY2FzdChjaXR5KTtcbiAgY29uc3QgZGF5Rm9yZWNhc3QgPSBjcmVhdGVEYXlGb3JlY2FzdChjaXR5KTtcbiAgbWFpbi5hcHBlbmQoXG4gICAgbmF2aWdhdGlvbkJhcixcbiAgICB3ZWF0aGVyQmFzaWNzLFxuICAgIGhvdXJGb3JlY2FzdCxcbiAgICBkYXlGb3JlY2FzdCxcbiAgICBkZXRhaWxzQmFzaWNcbiAgKTtcbiAgc2V0U2VhcmNoTGlzdGVuZXJzKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNob3dQYWdlO1xuIiwiZXhwb3J0IHsgdXJsQWxwaGFiZXQgfSBmcm9tICcuL3VybC1hbHBoYWJldC9pbmRleC5qcydcbmV4cG9ydCBsZXQgcmFuZG9tID0gYnl0ZXMgPT4gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheShieXRlcykpXG5leHBvcnQgbGV0IGN1c3RvbVJhbmRvbSA9IChhbHBoYWJldCwgZGVmYXVsdFNpemUsIGdldFJhbmRvbSkgPT4ge1xuICBsZXQgbWFzayA9ICgyIDw8IChNYXRoLmxvZyhhbHBoYWJldC5sZW5ndGggLSAxKSAvIE1hdGguTE4yKSkgLSAxXG4gIGxldCBzdGVwID0gLX4oKDEuNiAqIG1hc2sgKiBkZWZhdWx0U2l6ZSkgLyBhbHBoYWJldC5sZW5ndGgpXG4gIHJldHVybiAoc2l6ZSA9IGRlZmF1bHRTaXplKSA9PiB7XG4gICAgbGV0IGlkID0gJydcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgbGV0IGJ5dGVzID0gZ2V0UmFuZG9tKHN0ZXApXG4gICAgICBsZXQgaiA9IHN0ZXBcbiAgICAgIHdoaWxlIChqLS0pIHtcbiAgICAgICAgaWQgKz0gYWxwaGFiZXRbYnl0ZXNbal0gJiBtYXNrXSB8fCAnJ1xuICAgICAgICBpZiAoaWQubGVuZ3RoID09PSBzaXplKSByZXR1cm4gaWRcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBsZXQgY3VzdG9tQWxwaGFiZXQgPSAoYWxwaGFiZXQsIHNpemUgPSAyMSkgPT5cbiAgY3VzdG9tUmFuZG9tKGFscGhhYmV0LCBzaXplLCByYW5kb20pXG5leHBvcnQgbGV0IG5hbm9pZCA9IChzaXplID0gMjEpID0+XG4gIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoc2l6ZSkpLnJlZHVjZSgoaWQsIGJ5dGUpID0+IHtcbiAgICBieXRlICY9IDYzXG4gICAgaWYgKGJ5dGUgPCAzNikge1xuICAgICAgaWQgKz0gYnl0ZS50b1N0cmluZygzNilcbiAgICB9IGVsc2UgaWYgKGJ5dGUgPCA2Mikge1xuICAgICAgaWQgKz0gKGJ5dGUgLSAyNikudG9TdHJpbmcoMzYpLnRvVXBwZXJDYXNlKClcbiAgICB9IGVsc2UgaWYgKGJ5dGUgPiA2Mikge1xuICAgICAgaWQgKz0gJy0nXG4gICAgfSBlbHNlIHtcbiAgICAgIGlkICs9ICdfJ1xuICAgIH1cbiAgICByZXR1cm4gaWRcbiAgfSwgJycpXG4iLCJleHBvcnQgY29uc3QgdXJsQWxwaGFiZXQgPVxuICAndXNlYW5kb20tMjZUMTk4MzQwUFg3NXB4SkFDS1ZFUllNSU5EQlVTSFdPTEZfR1FaYmZnaGprbHF2d3l6cmljdCdcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgc2hvd1BhZ2UgZnJvbSBcIi4vbW9kdWxlcy92aWV3LWNpdHktd2VhdGhlclwiO1xuaW1wb3J0IGNyZWF0ZUNpdHkgZnJvbSBcIi4vbW9kdWxlcy9jcmVhdGUtY2l0eVwiO1xuXG53aW5kb3cub25sb2FkID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNyZWF0ZUNpdHkoXCJQYXJpc1wiKTtcbiAgY29uc3QgY2l0eSA9IHJlc3BvbnNlLm5ld0NpdHk7XG4gIHNob3dQYWdlKGNpdHkpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==