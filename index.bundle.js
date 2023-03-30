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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  --primary-color: #a799b7;\n  --secondary-color: #9888a5;\n  --tertiary-color: #776472;\n  --accent-color: #445552;\n  --secondary-accent-color: #294d4a;\n}\n\n#main {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: var(--primary-color);\n  gap: 20px;\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--secondary-color);\n  color: white;\n  font-size: 1rem;\n  width: fit-content;\n  padding: 10px 20px;\n  border-radius: 8px;\n}\n\n.weather-detail {\n  height: 150px;\n  width: 150px;\n  border-radius: 50%;\n  background-color: var(--accent-color);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.weather-detail p {\n  text-align: center;\n}\n\n.navigation-bar {\n  height: fit-content;\n  width: 100%;\n  background-color: var(--tertiary-color);\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  position: sticky;\n  bottom: 0;\n  padding: 10px;\n}\n\n.search-cities-tab-button {\n  background-color: var(--accent-color);\n  border: none;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 2rem;\n  height: fit-content;\n  width: fit-content;\n  padding: 10px 20px;\n}\n\n.current-location-arrow {\n  font-size: 3rem;\n  color: var(--secondary-accent-color);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transform: rotateZ(315deg);\n}\n\n.city-navigation-bar {\n  display: flex;\n  align-items: center;\n}\n\n.card div {\n  display: flex;\n  align-items: center;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,wBAAwB;EACxB,0BAA0B;EAC1B,yBAAyB;EACzB,uBAAuB;EACvB,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,sCAAsC;EACtC,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,wCAAwC;EACxC,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,qCAAqC;EACrC,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,WAAW;EACX,uCAAuC;EACvC,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,gBAAgB;EAChB,SAAS;EACT,aAAa;AACf;;AAEA;EACE,qCAAqC;EACrC,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,oCAAoC;EACpC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB","sourcesContent":["* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  --primary-color: #a799b7;\n  --secondary-color: #9888a5;\n  --tertiary-color: #776472;\n  --accent-color: #445552;\n  --secondary-accent-color: #294d4a;\n}\n\n#main {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: var(--primary-color);\n  gap: 20px;\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--secondary-color);\n  color: white;\n  font-size: 1rem;\n  width: fit-content;\n  padding: 10px 20px;\n  border-radius: 8px;\n}\n\n.weather-detail {\n  height: 150px;\n  width: 150px;\n  border-radius: 50%;\n  background-color: var(--accent-color);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.weather-detail p {\n  text-align: center;\n}\n\n.navigation-bar {\n  height: fit-content;\n  width: 100%;\n  background-color: var(--tertiary-color);\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  position: sticky;\n  bottom: 0;\n  padding: 10px;\n}\n\n.search-cities-tab-button {\n  background-color: var(--accent-color);\n  border: none;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 2rem;\n  height: fit-content;\n  width: fit-content;\n  padding: 10px 20px;\n}\n\n.current-location-arrow {\n  font-size: 3rem;\n  color: var(--secondary-accent-color);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transform: rotateZ(315deg);\n}\n\n.city-navigation-bar {\n  display: flex;\n  align-items: center;\n}\n\n.card div {\n  display: flex;\n  align-items: center;\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "getWeatherWithIp": () => (/* binding */ getWeatherWithIp)
/* harmony export */ });
async function getUserCity() {
  let result;
  try {
    const response = await fetch(
      "https://api.weatherapi.com/v1/ip.json?key=feed359d6d0647688d9132213232803&q=auto:ip",
      { mode: "cors" }
    );
    const userData = await response.json();
    result = userData.city;
  } catch (error) {
    result = "London";
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

async function getWeatherWithIp() {
  let result;
  try {
    const city = await getUserCity();
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

/***/ "./src/modules/cities-weather.js":
/*!***************************************!*\
  !*** ./src/modules/cities-weather.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");
/* harmony import */ var _structure_city_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./structure-city-data */ "./src/modules/structure-city-data.js");
/* harmony import */ var _city_weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./city-weather */ "./src/modules/city-weather.js");
// eslint-disable-next-line import/no-extraneous-dependencies




class CitiesWeather {
  constructor() {
    this.cities = [];
  }

  async createCity() {
    const array = await (0,_structure_city_data__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const [current, forecast] = array;
    const city = new _city_weather__WEBPACK_IMPORTED_MODULE_1__["default"]((0,nanoid__WEBPACK_IMPORTED_MODULE_2__.nanoid)(), current, forecast);
    this.appendCity(city);
  }

  appendCity(city) {
    this.cities.push(city);
  }
}

const cities = new CitiesWeather();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cities);


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
async function createCurrentAndForecast() {
  const response = await (0,_api_calls__WEBPACK_IMPORTED_MODULE_0__.getWeatherWithIp)();
  const current = structureCurrent(response);
  const forecast = structureForecast(response);
  return [current, forecast];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCurrentAndForecast);


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
/* harmony import */ var _cities_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cities-weather */ "./src/modules/cities-weather.js");


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

function createNavigationBar() {
  const element = document.createElement("nav");
  element.classList.add("navigation-bar");
  const ul = document.createElement("ul");
  ul.classList.add("city-navigation-bar");
  // use listOfCities
  const plusButton = document.createElement("button");
  plusButton.classList.add("search-cities-tab-button");
  plusButton.textContent = "+";

  const currentLocationArrow = document.createElement("li");
  currentLocationArrow.classList.add("current-location-arrow");
  currentLocationArrow.innerHTML = "&#10146;";

  ul.appendChild(currentLocationArrow);
  element.append(ul, plusButton);

  return element;
}

function showPage() {
  const city = _cities_weather__WEBPACK_IMPORTED_MODULE_0__["default"].cities[0];
  const main = document.getElementById("main");
  const weatherBasics = createWeatherBasics(city);
  const detailsBasic = createDetails(city);
  const hourForecast = createHourForecast(city);
  const dayForecast = createDayForecast(city);
  const navigationBar = createNavigationBar();
  main.append(
    weatherBasics,
    hourForecast,
    dayForecast,
    detailsBasic,
    navigationBar
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
/* harmony import */ var _modules_cities_weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/cities-weather */ "./src/modules/cities-weather.js");
/* harmony import */ var _modules_view_city_weather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/view-city-weather */ "./src/modules/view-city-weather.js");




window.onload = async () => {
  await _modules_cities_weather__WEBPACK_IMPORTED_MODULE_1__["default"].createCity();
  (0,_modules_view_city_weather__WEBPACK_IMPORTED_MODULE_2__["default"])();
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BHNkI7QUFDOUM7QUFDQTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7QUNoQ0k7QUFDUDs7Ozs7OztVQ0RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUN5QjtBQUNLOztBQUVuRDtBQUNBLFFBQVEsMEVBQWlCO0FBQ3pCLEVBQUUsc0VBQVE7QUFDViIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvYXBpLmNhbGxzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvY2l0aWVzLXdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9jaXR5LXdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9jdXJyZW50LXdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9mb3JlY2FzdC13ZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvc3RydWN0dXJlLWNpdHktZGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3ZpZXctY2l0eS13ZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL25hbm9pZC9pbmRleC5icm93c2VyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL25hbm9pZC91cmwtYWxwaGFiZXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLXByaW1hcnktY29sb3I6ICNhNzk5Yjc7XFxuICAtLXNlY29uZGFyeS1jb2xvcjogIzk4ODhhNTtcXG4gIC0tdGVydGlhcnktY29sb3I6ICM3NzY0NzI7XFxuICAtLWFjY2VudC1jb2xvcjogIzQ0NTU1MjtcXG4gIC0tc2Vjb25kYXJ5LWFjY2VudC1jb2xvcjogIzI5NGQ0YTtcXG59XFxuXFxuI21haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLndlYXRoZXItZGV0YWlsIHtcXG4gIGhlaWdodDogMTUwcHg7XFxuICB3aWR0aDogMTUwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi53ZWF0aGVyLWRldGFpbCBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm5hdmlnYXRpb24tYmFyIHtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5LWNvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgYm90dG9tOiAwO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnNlYXJjaC1jaXRpZXMtdGFiLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxufVxcblxcbi5jdXJyZW50LWxvY2F0aW9uLWFycm93IHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYWNjZW50LWNvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZVooMzE1ZGVnKTtcXG59XFxuXFxuLmNpdHktbmF2aWdhdGlvbi1iYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jYXJkIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQix5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHNDQUFzQztFQUN0QyxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsd0NBQXdDO0VBQ3hDLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQ0FBcUM7RUFDckMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx1Q0FBdUM7RUFDdkMsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbjpyb290IHtcXG4gIC0tcHJpbWFyeS1jb2xvcjogI2E3OTliNztcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjOTg4OGE1O1xcbiAgLS10ZXJ0aWFyeS1jb2xvcjogIzc3NjQ3MjtcXG4gIC0tYWNjZW50LWNvbG9yOiAjNDQ1NTUyO1xcbiAgLS1zZWNvbmRhcnktYWNjZW50LWNvbG9yOiAjMjk0ZDRhO1xcbn1cXG5cXG4jbWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLmNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4ud2VhdGhlci1kZXRhaWwge1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLndlYXRoZXItZGV0YWlsIHAge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubmF2aWdhdGlvbi1iYXIge1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3IpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICBib3R0b206IDA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uc2VhcmNoLWNpdGllcy10YWItYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG59XFxuXFxuLmN1cnJlbnQtbG9jYXRpb24tYXJyb3cge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1hY2NlbnQtY29sb3IpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRyYW5zZm9ybTogcm90YXRlWigzMTVkZWcpO1xcbn1cXG5cXG4uY2l0eS1uYXZpZ2F0aW9uLWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNhcmQgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckNpdHkoKSB7XG4gIGxldCByZXN1bHQ7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIFwiaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvaXAuanNvbj9rZXk9ZmVlZDM1OWQ2ZDA2NDc2ODhkOTEzMjIxMzIzMjgwMyZxPWF1dG86aXBcIixcbiAgICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICAgICk7XG4gICAgY29uc3QgdXNlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmVzdWx0ID0gdXNlckRhdGEuY2l0eTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXN1bHQgPSBcIkxvbmRvblwiO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldENpdHlXZWF0aGVyKGNpdHkpIHtcbiAgbGV0IHJlc3VsdDtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWZlZWQzNTlkNmQwNjQ3Njg4ZDkxMzIyMTMyMzI4MDMmcT0ke2NpdHl9JmRheXM9MyZhcWk9eWVzJmFsZXJ0cz1ub2AsXG4gICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICApO1xuICAgIGNvbnN0IGNpdHlEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJlc3VsdCA9IGNpdHlEYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyV2l0aElwKCkge1xuICBsZXQgcmVzdWx0O1xuICB0cnkge1xuICAgIGNvbnN0IGNpdHkgPSBhd2FpdCBnZXRVc2VyQ2l0eSgpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9ZmVlZDM1OWQ2ZDA2NDc2ODhkOTEzMjIxMzIzMjgwMyZxPSR7Y2l0eX0mZGF5cz0zJmFxaT15ZXMmYWxlcnRzPW5vYCxcbiAgICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICAgICk7XG4gICAgY29uc3QgY2l0eURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmVzdWx0ID0gY2l0eURhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCB7IGdldFdlYXRoZXJXaXRoSXAsIGdldENpdHlXZWF0aGVyIH07XG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5pbXBvcnQgeyBuYW5vaWQgfSBmcm9tIFwibmFub2lkXCI7XG5pbXBvcnQgY3JlYXRlQ3VycmVudEFuZEZvcmVjYXN0IGZyb20gXCIuL3N0cnVjdHVyZS1jaXR5LWRhdGFcIjtcbmltcG9ydCBDaXR5V2VhdGhlciBmcm9tIFwiLi9jaXR5LXdlYXRoZXJcIjtcblxuY2xhc3MgQ2l0aWVzV2VhdGhlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2l0aWVzID0gW107XG4gIH1cblxuICBhc3luYyBjcmVhdGVDaXR5KCkge1xuICAgIGNvbnN0IGFycmF5ID0gYXdhaXQgY3JlYXRlQ3VycmVudEFuZEZvcmVjYXN0KCk7XG4gICAgY29uc3QgW2N1cnJlbnQsIGZvcmVjYXN0XSA9IGFycmF5O1xuICAgIGNvbnN0IGNpdHkgPSBuZXcgQ2l0eVdlYXRoZXIobmFub2lkKCksIGN1cnJlbnQsIGZvcmVjYXN0KTtcbiAgICB0aGlzLmFwcGVuZENpdHkoY2l0eSk7XG4gIH1cblxuICBhcHBlbmRDaXR5KGNpdHkpIHtcbiAgICB0aGlzLmNpdGllcy5wdXNoKGNpdHkpO1xuICB9XG59XG5cbmNvbnN0IGNpdGllcyA9IG5ldyBDaXRpZXNXZWF0aGVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNpdGllcztcbiIsImNsYXNzIENpdHlXZWF0aGVyIHtcbiAgY29uc3RydWN0b3IodXVpZCwgY3VycmVudFdlYXRoZXIsIGZvcmVjYXN0V2VhdGhlcikge1xuICAgIHRoaXMudXVpZCA9IHV1aWQ7XG4gICAgdGhpcy5uYW1lID0gY3VycmVudFdlYXRoZXIuY2l0eTtcbiAgICB0aGlzLmN1cnJlbnRXZWF0aGVyID0gY3VycmVudFdlYXRoZXI7XG4gICAgdGhpcy5mb3JlY2FzdFdlYXRoZXIgPSBmb3JlY2FzdFdlYXRoZXI7XG4gIH1cblxuICB3ZWF0aGVyQmFzaWNzRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50V2VhdGhlcjtcbiAgfVxuXG4gIGhvdXJGb3JlY2FzdERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9yZWNhc3RXZWF0aGVyLmhvdXJzO1xuICB9XG5cbiAgZGF5Rm9yZWNhc3REYXRhKCkge1xuICAgIHJldHVybiB0aGlzLmZvcmVjYXN0V2VhdGhlci5kYXlzO1xuICB9XG5cbiAgZGV0YWlsc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFdlYXRoZXIud2VhdGhlckRldGFpbHM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2l0eVdlYXRoZXI7XG4iLCIvLyBDdXJyZW50IGNpdHksIGN1cnJlbnQgdGVtcGVyYXR1cmUgaW4gwrBDIGZpcnN0IGFuZCDCsEYsIGxhc3QgdXBkYXRlZCB0aW1lLCBjb25kaXRpb24sIG1heCAmIG1pbiBmb3IgY3VycmVudCBkYXksXG4vLyB3ZWF0aGVyIGRldGFpbHM6IFVWIEluZGV4LCB3aW5kIHNwZWVkICsgb3RoZXIgZGV0YWlscy5cblxuY2xhc3MgQ3VycmVudFdlYXRoZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBjaXR5LFxuICAgIHRlbXBlcmF0dXJlLFxuICAgIGxhc3RVcGRhdGUsXG4gICAgY29uZGl0aW9uVGV4dCxcbiAgICBjb25kaXRpb25JY29uLFxuICAgIG1heFRlbXBlcmF0dXJlLFxuICAgIG1pblRlbXBlcmF0dXJlLFxuICAgIHdlYXRoZXJEZXRhaWxzXG4gICkge1xuICAgIHRoaXMuY2l0eSA9IGNpdHk7XG4gICAgdGhpcy50ZW1wZXJhdHVyZSA9IHRlbXBlcmF0dXJlO1xuICAgIHRoaXMubGFzdFVwZGF0ZSA9IGxhc3RVcGRhdGU7XG4gICAgdGhpcy5jb25kaXRpb25UZXh0ID0gY29uZGl0aW9uVGV4dDtcbiAgICB0aGlzLmNvbmRpdGlvbkljb24gPSBjb25kaXRpb25JY29uO1xuICAgIHRoaXMubWF4VGVtcGVyYXR1cmUgPSBtYXhUZW1wZXJhdHVyZTtcbiAgICB0aGlzLm1pblRlbXBlcmF0dXJlID0gbWluVGVtcGVyYXR1cmU7XG4gICAgdGhpcy53ZWF0aGVyRGV0YWlscyA9IHdlYXRoZXJEZXRhaWxzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1cnJlbnRXZWF0aGVyO1xuIiwiLy8gaW5zaWRlIGRheXMgLyBob3VycyBhcnJheTogQ3VycmVudCBob3VyL2RheSB0ZW1wZXJhdHVyZSArIGNvbmRpdGlvbiBpY29uIC8gbWF4IC0gbWluICsgY29uZGl0aW9uIGljb24uXG5cbmNsYXNzIEZvcmVjYXN0V2VhdGhlciB7XG4gIGNvbnN0cnVjdG9yKGRheXMsIGhvdXJzKSB7XG4gICAgdGhpcy5kYXlzID0gZGF5cztcbiAgICB0aGlzLmhvdXJzID0gaG91cnM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9yZWNhc3RXZWF0aGVyO1xuIiwiaW1wb3J0IHsgZ2V0V2VhdGhlcldpdGhJcCB9IGZyb20gXCIuL2FwaS5jYWxsc1wiO1xuaW1wb3J0IEN1cnJlbnRXZWF0aGVyIGZyb20gXCIuL2N1cnJlbnQtd2VhdGhlclwiO1xuaW1wb3J0IEZvcmVjYXN0V2VhdGhlciBmcm9tIFwiLi9mb3JlY2FzdC13ZWF0aGVyXCI7XG5cbi8vIGNyZWF0ZSB0aGUgZGF0YVxuXG4vLyBDdXJyZW50IGNpdHksIGN1cnJlbnQgdGVtcGVyYXR1cmUgaW4gwrBDIGZpcnN0IGFuZCDCsEYsIGxhc3QgdXBkYXRlZCB0aW1lLCBjb25kaXRpb24sIG1heCAmIG1pbiBmb3IgY3VycmVudCBkYXksXG4vLyB3ZWF0aGVyIGRldGFpbHM6IFVWIEluZGV4LCB3aW5kIHNwZWVkICsgb3RoZXIgZGV0YWlscy5cbmZ1bmN0aW9uIHN0cnVjdHVyZUN1cnJlbnQocmVzcG9uc2UpIHtcbiAgLy8gb3IgaXRlcmF0ZSBhbGwga2V5IHZhbHVlcyB3aXRoIGhhdmluZyBteSBrZXlzIGluIGFycmF5IGkgbG9vayBmb3IgdGhlbiByZXR1cm5cbiAgLy8gdGhlIHZhbHVlcyBpbiBhbiBhcnJheSBhbmQgZG8gYXJyYXkgZGVzdHJ1Y3R1cmluZyB0byBpbnN0YW50aWF0ZSB0aGUgdmFsdWVzXG5cbiAgY29uc3QgY2l0eSA9IHJlc3BvbnNlLmxvY2F0aW9uLm5hbWU7XG4gIGNvbnN0IHRlbXBlcmF0dXJlID0gcmVzcG9uc2UuY3VycmVudC50ZW1wX2M7XG4gIGNvbnN0IGxhc3RVcGRhdGUgPSByZXNwb25zZS5jdXJyZW50Lmxhc3RfdXBkYXRlZC5zcGxpdChcIiBcIilbMV07XG4gIGNvbnN0IGNvbmRpdGlvblRleHQgPSByZXNwb25zZS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xuICBjb25zdCBjb25kaXRpb25JY29uID0gcmVzcG9uc2UuY3VycmVudC5jb25kaXRpb24uaWNvbjtcbiAgY29uc3QgbWF4VGVtcGVyYXR1cmUgPSBNYXRoLnJvdW5kKFxuICAgIHJlc3BvbnNlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5tYXh0ZW1wX2NcbiAgKTtcbiAgY29uc3QgbWluVGVtcGVyYXR1cmUgPSBNYXRoLnJvdW5kKFxuICAgIHJlc3BvbnNlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5taW50ZW1wX2NcbiAgKTtcbiAgY29uc3Qgd2VhdGhlckRldGFpbHMgPSAoZnVuY3Rpb24gZ2V0V2VhdGhlckRldGFpbHMoKSB7XG4gICAgY29uc3QgdG9GZXRjaCA9IHJlc3BvbnNlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdO1xuICAgIGNvbnN0IGFxaSA9IChmdW5jdGlvbiBnZXRBUUkoKSB7XG4gICAgICBjb25zdCBudW1iZXIgPSB0b0ZldGNoLmRheS5haXJfcXVhbGl0eVtcInVzLWVwYS1pbmRleFwiXTtcbiAgICAgIGNvbnN0IGFxaVRhYmxlID0ge1xuICAgICAgICAxOiBcIkdvb2RcIixcbiAgICAgICAgMjogXCJBY2NlcHRhYmxlXCIsXG4gICAgICAgIDM6IFwiVW5oZWFsdGh5IGZvciBzZW5zaXRpdmUgZ3JvdXBzXCIsXG4gICAgICAgIDQ6IFwiVW5oZWFsdGh5XCIsXG4gICAgICAgIDU6IFwiVmVyeSB1bmhlYWx0aHlcIixcbiAgICAgICAgNjogXCJIYXphcmRvdXNcIixcbiAgICAgIH07XG4gICAgICBsZXQgcXVhbGl0eTtcbiAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhhcWlUYWJsZSk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGtleXNbaV0gPT09IG51bWJlci50b1N0cmluZygpKSB7XG4gICAgICAgICAgcXVhbGl0eSA9IGFxaVRhYmxlW2tleXNbaV1dO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcXVhbGl0eTtcbiAgICB9KSgpO1xuICAgIGNvbnN0IHV2SWR4ID0gdG9GZXRjaC5kYXkudXY7XG4gICAgY29uc3Qgc3VucmlzZVRpbWUgPSB0b0ZldGNoLmFzdHJvLnN1bnJpc2U7XG4gICAgY29uc3Qgc3Vuc2V0VGltZSA9IHRvRmV0Y2guYXN0cm8uc3Vuc2V0O1xuICAgIGNvbnN0IGZlZWxzTGlrZSA9IE1hdGgucm91bmQocmVzcG9uc2UuY3VycmVudC5mZWVsc2xpa2VfYyk7XG4gICAgY29uc3QgcHJlY2lwaXRhdGlvbnMgPSByZXNwb25zZS5jdXJyZW50LnByZWNpcF9tbTtcbiAgICBjb25zdCB3aW5kU3BlZWQgPSByZXNwb25zZS5jdXJyZW50LndpbmRfa3BoO1xuICAgIGNvbnN0IGh1bWlkaXR5UGVyY2VudGFnZSA9IHJlc3BvbnNlLmN1cnJlbnQuaHVtaWRpdHk7XG4gICAgY29uc3QgdmlzaW9uID0gcmVzcG9uc2UuY3VycmVudC52aXNfa207XG4gICAgY29uc3QgaGVjdG9wYXNjYWxzID0gcmVzcG9uc2UuY3VycmVudC5wcmVzc3VyZV9tYjtcblxuICAgIHJldHVybiB7XG4gICAgICBhcWksXG4gICAgICB1dklkeCxcbiAgICAgIHN1bnJpc2VUaW1lLFxuICAgICAgc3Vuc2V0VGltZSxcbiAgICAgIGZlZWxzTGlrZSxcbiAgICAgIHByZWNpcGl0YXRpb25zLFxuICAgICAgd2luZFNwZWVkLFxuICAgICAgaHVtaWRpdHlQZXJjZW50YWdlLFxuICAgICAgdmlzaW9uLFxuICAgICAgaGVjdG9wYXNjYWxzLFxuICAgIH07XG4gIH0pKCk7XG5cbiAgcmV0dXJuIG5ldyBDdXJyZW50V2VhdGhlcihcbiAgICBjaXR5LFxuICAgIHRlbXBlcmF0dXJlLFxuICAgIGxhc3RVcGRhdGUsXG4gICAgY29uZGl0aW9uVGV4dCxcbiAgICBjb25kaXRpb25JY29uLFxuICAgIG1heFRlbXBlcmF0dXJlLFxuICAgIG1pblRlbXBlcmF0dXJlLFxuICAgIHdlYXRoZXJEZXRhaWxzXG4gICk7XG59XG5cbi8vIG9iamVjdHM6IGhvdXIgLyBkYXkgYXJyYXkgd2l0aCBpbnNpZGU6IEN1cnJlbnQgaG91ci9kYXkgdGVtcGVyYXR1cmUgKyBjb25kaXRpb24gaWNvbiAvIG1heCAtIG1pbiArIGNvbmRpdGlvbiBpY29uLlxuXG5mdW5jdGlvbiBzdHJ1Y3R1cmVGb3JlY2FzdChyZXNwb25zZSkge1xuICBjb25zdCBjcmVhdGVEYXkgPSAoaWR4KSA9PiB7XG4gICAgY29uc3QgYXJyYXkgPSByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheTtcbiAgICBjb25zdCBtYXhUZW1wZXJhdHVyZSA9IE1hdGgucm91bmQoYXJyYXlbaWR4XS5kYXkubWF4dGVtcF9jKTtcbiAgICBjb25zdCBtaW5UZW1wZXJhdHVyZSA9IE1hdGgucm91bmQoYXJyYXlbaWR4XS5kYXkubWludGVtcF9jKTtcbiAgICBjb25zdCBjb25kaXRpb25JY29uID0gYXJyYXlbaWR4XS5kYXkuY29uZGl0aW9uLmljb247XG4gICAgY29uc3QgY29uZGl0aW9uVGV4dCA9IGFycmF5W2lkeF0uZGF5LmNvbmRpdGlvbi50ZXh0O1xuXG4gICAgcmV0dXJuIHsgbWF4VGVtcGVyYXR1cmUsIG1pblRlbXBlcmF0dXJlLCBjb25kaXRpb25JY29uLCBjb25kaXRpb25UZXh0IH07XG4gIH07XG4gIGNvbnN0IGNyZWF0ZUhvdXIgPSAoaWR4KSA9PiB7XG4gICAgY29uc3QgdGVtcGVyYXR1cmUgPSBNYXRoLnJvdW5kKFxuICAgICAgcmVzcG9uc2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91cltpZHhdLnRlbXBfY1xuICAgICk7XG4gICAgY29uc3QgaG91ciA9IHJlc3BvbnNlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXJbaWR4XS50aW1lLnNwbGl0KFwiIFwiKVsxXTtcbiAgICBjb25zdCBjb25kaXRpb25JY29uID1cbiAgICAgIHJlc3BvbnNlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXJbaWR4XS5jb25kaXRpb24uaWNvbjtcbiAgICBjb25zdCBjb25kaXRpb25UZXh0ID1cbiAgICAgIHJlc3BvbnNlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXJbaWR4XS5jb25kaXRpb24udGV4dDtcbiAgICByZXR1cm4geyB0ZW1wZXJhdHVyZSwgaG91ciwgY29uZGl0aW9uSWNvbiwgY29uZGl0aW9uVGV4dCB9O1xuICB9O1xuICBjb25zdCBkYXlzID0gKGZ1bmN0aW9uIGNyZWF0ZURheXNPYmplY3QoKSB7XG4gICAgY29uc3QgZGF5c0FycmF5ID0gW2NyZWF0ZURheSgwKSwgY3JlYXRlRGF5KDEpLCBjcmVhdGVEYXkoMildO1xuXG4gICAgcmV0dXJuIGRheXNBcnJheTtcbiAgfSkoKTtcblxuICBjb25zdCBob3VycyA9IChmdW5jdGlvbiBjcmVhdGVIb3Vyc09iamVjdCgpIHtcbiAgICBjb25zdCBkYXRhVG9JdGVyYXRlID0gcmVzcG9uc2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91cjtcbiAgICBjb25zdCBob3Vyc0FycmF5ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhVG9JdGVyYXRlLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBob3Vyc0FycmF5LnB1c2goY3JlYXRlSG91cihpKSk7XG4gICAgfVxuICAgIHJldHVybiBob3Vyc0FycmF5O1xuICB9KSgpO1xuXG4gIHJldHVybiBuZXcgRm9yZWNhc3RXZWF0aGVyKGRheXMsIGhvdXJzKTtcbn1cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUN1cnJlbnRBbmRGb3JlY2FzdCgpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRXZWF0aGVyV2l0aElwKCk7XG4gIGNvbnN0IGN1cnJlbnQgPSBzdHJ1Y3R1cmVDdXJyZW50KHJlc3BvbnNlKTtcbiAgY29uc3QgZm9yZWNhc3QgPSBzdHJ1Y3R1cmVGb3JlY2FzdChyZXNwb25zZSk7XG4gIHJldHVybiBbY3VycmVudCwgZm9yZWNhc3RdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDdXJyZW50QW5kRm9yZWNhc3Q7XG4iLCJpbXBvcnQgY2l0aWVzIGZyb20gXCIuL2NpdGllcy13ZWF0aGVyXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVdlYXRoZXJCYXNpY3MoY2l0eSkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgY29uc3QgZGF0YSA9IGNpdHkud2VhdGhlckJhc2ljc0RhdGEoKTtcbiAgZWxlbWVudC5pbm5lckhUTUwgPSBgXG4gIDxpbWcgc3JjPVwiJHtkYXRhLmNvbmRpdGlvbkljb259XCIgYWx0PVwiJHtkYXRhLmNvbmRpdGlvblRleHR9XCI+XG4gIDxoMiBjbGFzcz1cImNpdHktbmFtZVwiPiR7ZGF0YS5jaXR5fTwvaDI+XG4gIDxwIGNsYXNzPVwiY2l0eS10ZW1wZXJhdHVyZVwiPiR7ZGF0YS50ZW1wZXJhdHVyZX3CsDwvcD5cbiAgPHAgY2xhc3M9XCJjb25kaXRpb24tdGV4dFwiPiR7ZGF0YS5jb25kaXRpb25UZXh0fTwvcD5cbiAgPHAgY2xhc3M9XCJjaXR5LXRpbWVcIj4ke2RhdGEubGFzdFVwZGF0ZX08L3A+XG4gIDxwIGNsYXNzPVwibWF4LW1pbi10ZW1wXCI+TWF4LiR7ZGF0YS5tYXhUZW1wZXJhdHVyZX3CsCBNaW4uJHtkYXRhLm1pblRlbXBlcmF0dXJlfcKwPC9wPlxuICBgO1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIb3VyRm9yZWNhc3QoY2l0eSkge1xuICBjb25zdCBkYXRhID0gY2l0eS5ob3VyRm9yZWNhc3REYXRhKCk7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBlbGVtZW50LmlubmVySFRNTCArPSBgPGRpdj48cD4ke2RhdGFbaV0uaG91cn06ICR7ZGF0YVtpXS50ZW1wZXJhdHVyZX3CsDwvcD48aW1nIHNyYz1cIiR7ZGF0YVtpXS5jb25kaXRpb25JY29ufVwiIGFsdD1cIiR7ZGF0YVtpXS5jb25kaXRpb25UZXh0fVwiPjwvZGl2PmA7XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURheUZvcmVjYXN0KGNpdHkpIHtcbiAgY29uc3QgZGF0YSA9IGNpdHkuZGF5Rm9yZWNhc3REYXRhKCk7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGxldCBvcHRpb24gPSBcIlwiO1xuICAgIGlmIChpID09PSAwKSB7XG4gICAgICBvcHRpb24gPSBcIlRvZGF5OiBcIjtcbiAgICB9XG5cbiAgICBlbGVtZW50LmlubmVySFRNTCArPSBgPGRpdj48cD4ke29wdGlvbn0ke2RhdGFbaV0ubWluVGVtcGVyYXR1cmV9wrAgLSAke2RhdGFbaV0ubWF4VGVtcGVyYXR1cmV9wrA8L3A+PGltZyBzcmM9XCIke2RhdGFbaV0uY29uZGl0aW9uSWNvbn1cIj48L2Rpdj5gO1xuICB9XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEZXRhaWxzKGNpdHkpIHtcbiAgY29uc3QgZGF0YSA9IGNpdHkuZGV0YWlsc0RhdGEoKTtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG5cbiAgZWxlbWVudC5pbm5lckhUTUwgPSBgXG4gIDxkaXYgY2xhc3M9XCJ3ZWF0aGVyLWRldGFpbFwiPjxwPkFpciBxdWFsaXR5PC9wPjxwPiR7ZGF0YS5hcWl9PC9wPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwid2VhdGhlci1kZXRhaWxcIj48cD5VViBJbmRleDwvcD48cD4ke2RhdGEudXZJZHh9PC9wPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwid2VhdGhlci1kZXRhaWxcIj48cD5TdW5yaXNlICYgU3Vuc2V0PC9wPjxwPiR7ZGF0YS5zdW5yaXNlVGltZX0gJHtkYXRhLnN1bnNldFRpbWV9PC9wPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwid2VhdGhlci1kZXRhaWxcIj48cD5GZWVscyBsaWtlPC9wPjxwPiR7ZGF0YS5mZWVsc0xpa2V9wrA8L3A+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ3ZWF0aGVyLWRldGFpbFwiPjxwPlByZWNpcGl0YXRpb25zPC9wPjxwPiR7ZGF0YS5wcmVjaXBpdGF0aW9uc30gbW08L3A+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ3ZWF0aGVyLWRldGFpbFwiPjxwPldpbmQ8L3A+PHA+JHtkYXRhLndpbmRTcGVlZH0ga20vaDwvcD48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cIndlYXRoZXItZGV0YWlsXCI+PHA+SHVtaWRpdHk8L3A+PHA+JHtkYXRhLmh1bWlkaXR5UGVyY2VudGFnZX0gJTwvcD48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cIndlYXRoZXItZGV0YWlsXCI+PHA+VmlzaW9uPC9wPjxwPiR7ZGF0YS52aXNpb259IGttPC9wPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwid2VhdGhlci1kZXRhaWxcIj48cD5QcmVzc3VyZTwvcD48cD4ke2RhdGEuaGVjdG9wYXNjYWxzfSBoUGE8L3A+PC9kaXY+YDtcblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmF2aWdhdGlvbkJhcigpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm5hdmlnYXRpb24tYmFyXCIpO1xuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgdWwuY2xhc3NMaXN0LmFkZChcImNpdHktbmF2aWdhdGlvbi1iYXJcIik7XG4gIC8vIHVzZSBsaXN0T2ZDaXRpZXNcbiAgY29uc3QgcGx1c0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHBsdXNCdXR0b24uY2xhc3NMaXN0LmFkZChcInNlYXJjaC1jaXRpZXMtdGFiLWJ1dHRvblwiKTtcbiAgcGx1c0J1dHRvbi50ZXh0Q29udGVudCA9IFwiK1wiO1xuXG4gIGNvbnN0IGN1cnJlbnRMb2NhdGlvbkFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjdXJyZW50TG9jYXRpb25BcnJvdy5jbGFzc0xpc3QuYWRkKFwiY3VycmVudC1sb2NhdGlvbi1hcnJvd1wiKTtcbiAgY3VycmVudExvY2F0aW9uQXJyb3cuaW5uZXJIVE1MID0gXCImIzEwMTQ2O1wiO1xuXG4gIHVsLmFwcGVuZENoaWxkKGN1cnJlbnRMb2NhdGlvbkFycm93KTtcbiAgZWxlbWVudC5hcHBlbmQodWwsIHBsdXNCdXR0b24pO1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBzaG93UGFnZSgpIHtcbiAgY29uc3QgY2l0eSA9IGNpdGllcy5jaXRpZXNbMF07XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gIGNvbnN0IHdlYXRoZXJCYXNpY3MgPSBjcmVhdGVXZWF0aGVyQmFzaWNzKGNpdHkpO1xuICBjb25zdCBkZXRhaWxzQmFzaWMgPSBjcmVhdGVEZXRhaWxzKGNpdHkpO1xuICBjb25zdCBob3VyRm9yZWNhc3QgPSBjcmVhdGVIb3VyRm9yZWNhc3QoY2l0eSk7XG4gIGNvbnN0IGRheUZvcmVjYXN0ID0gY3JlYXRlRGF5Rm9yZWNhc3QoY2l0eSk7XG4gIGNvbnN0IG5hdmlnYXRpb25CYXIgPSBjcmVhdGVOYXZpZ2F0aW9uQmFyKCk7XG4gIG1haW4uYXBwZW5kKFxuICAgIHdlYXRoZXJCYXNpY3MsXG4gICAgaG91ckZvcmVjYXN0LFxuICAgIGRheUZvcmVjYXN0LFxuICAgIGRldGFpbHNCYXNpYyxcbiAgICBuYXZpZ2F0aW9uQmFyXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNob3dQYWdlO1xuIiwiZXhwb3J0IHsgdXJsQWxwaGFiZXQgfSBmcm9tICcuL3VybC1hbHBoYWJldC9pbmRleC5qcydcbmV4cG9ydCBsZXQgcmFuZG9tID0gYnl0ZXMgPT4gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheShieXRlcykpXG5leHBvcnQgbGV0IGN1c3RvbVJhbmRvbSA9IChhbHBoYWJldCwgZGVmYXVsdFNpemUsIGdldFJhbmRvbSkgPT4ge1xuICBsZXQgbWFzayA9ICgyIDw8IChNYXRoLmxvZyhhbHBoYWJldC5sZW5ndGggLSAxKSAvIE1hdGguTE4yKSkgLSAxXG4gIGxldCBzdGVwID0gLX4oKDEuNiAqIG1hc2sgKiBkZWZhdWx0U2l6ZSkgLyBhbHBoYWJldC5sZW5ndGgpXG4gIHJldHVybiAoc2l6ZSA9IGRlZmF1bHRTaXplKSA9PiB7XG4gICAgbGV0IGlkID0gJydcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgbGV0IGJ5dGVzID0gZ2V0UmFuZG9tKHN0ZXApXG4gICAgICBsZXQgaiA9IHN0ZXBcbiAgICAgIHdoaWxlIChqLS0pIHtcbiAgICAgICAgaWQgKz0gYWxwaGFiZXRbYnl0ZXNbal0gJiBtYXNrXSB8fCAnJ1xuICAgICAgICBpZiAoaWQubGVuZ3RoID09PSBzaXplKSByZXR1cm4gaWRcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBsZXQgY3VzdG9tQWxwaGFiZXQgPSAoYWxwaGFiZXQsIHNpemUgPSAyMSkgPT5cbiAgY3VzdG9tUmFuZG9tKGFscGhhYmV0LCBzaXplLCByYW5kb20pXG5leHBvcnQgbGV0IG5hbm9pZCA9IChzaXplID0gMjEpID0+XG4gIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoc2l6ZSkpLnJlZHVjZSgoaWQsIGJ5dGUpID0+IHtcbiAgICBieXRlICY9IDYzXG4gICAgaWYgKGJ5dGUgPCAzNikge1xuICAgICAgaWQgKz0gYnl0ZS50b1N0cmluZygzNilcbiAgICB9IGVsc2UgaWYgKGJ5dGUgPCA2Mikge1xuICAgICAgaWQgKz0gKGJ5dGUgLSAyNikudG9TdHJpbmcoMzYpLnRvVXBwZXJDYXNlKClcbiAgICB9IGVsc2UgaWYgKGJ5dGUgPiA2Mikge1xuICAgICAgaWQgKz0gJy0nXG4gICAgfSBlbHNlIHtcbiAgICAgIGlkICs9ICdfJ1xuICAgIH1cbiAgICByZXR1cm4gaWRcbiAgfSwgJycpXG4iLCJleHBvcnQgY29uc3QgdXJsQWxwaGFiZXQgPVxuICAndXNlYW5kb20tMjZUMTk4MzQwUFg3NXB4SkFDS1ZFUllNSU5EQlVTSFdPTEZfR1FaYmZnaGprbHF2d3l6cmljdCdcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgY2l0aWVzIGZyb20gXCIuL21vZHVsZXMvY2l0aWVzLXdlYXRoZXJcIjtcbmltcG9ydCBzaG93UGFnZSBmcm9tIFwiLi9tb2R1bGVzL3ZpZXctY2l0eS13ZWF0aGVyXCI7XG5cbndpbmRvdy5vbmxvYWQgPSBhc3luYyAoKSA9PiB7XG4gIGF3YWl0IGNpdGllcy5jcmVhdGVDaXR5KCk7XG4gIHNob3dQYWdlKCk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9