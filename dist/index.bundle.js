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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  --primary-color: #a799b7;\n  --secondary-color: #9888a5;\n  --tertiary-color: #776472;\n  --accent-color: #445552;\n  --secondary-accent-color: #294d4a;\n}\n\n#main {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: var(--primary-color);\n  gap: 20px;\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--secondary-color);\n  color: white;\n  font-size: 1rem;\n  width: fit-content;\n  padding: 10px;\n  border-radius: 8px;\n}\n\n.weather-detail {\n  height: 150px;\n  width: 150px;\n  border-radius: 50%;\n  background-color: var(--accent-color);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.weather-detail p {\n  text-align: center;\n}\n\n.navigation-bar {\n  height: fit-content;\n  width: 100%;\n  background-color: var(--tertiary-color);\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  position: sticky;\n  bottom: 0;\n  padding: 10px;\n}\n\n.card div {\n  display: flex;\n  align-items: center;\n}\n\n.autocomplete {\n  position: relative;\n  display: inline-block;\n}\n\ninput[type=\"search\"] {\n  outline: none;\n  border-radius: 8px;\n  padding: 10px 20px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,wBAAwB;EACxB,0BAA0B;EAC1B,yBAAyB;EACzB,uBAAuB;EACvB,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,sCAAsC;EACtC,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,wCAAwC;EACxC,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,qCAAqC;EACrC,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,WAAW;EACX,uCAAuC;EACvC,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,gBAAgB;EAChB,SAAS;EACT,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,kBAAkB;AACpB","sourcesContent":["* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  --primary-color: #a799b7;\n  --secondary-color: #9888a5;\n  --tertiary-color: #776472;\n  --accent-color: #445552;\n  --secondary-accent-color: #294d4a;\n}\n\n#main {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: var(--primary-color);\n  gap: 20px;\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--secondary-color);\n  color: white;\n  font-size: 1rem;\n  width: fit-content;\n  padding: 10px;\n  border-radius: 8px;\n}\n\n.weather-detail {\n  height: 150px;\n  width: 150px;\n  border-radius: 50%;\n  background-color: var(--accent-color);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.weather-detail p {\n  text-align: center;\n}\n\n.navigation-bar {\n  height: fit-content;\n  width: 100%;\n  background-color: var(--tertiary-color);\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  position: sticky;\n  bottom: 0;\n  padding: 10px;\n}\n\n.card div {\n  display: flex;\n  align-items: center;\n}\n\n.autocomplete {\n  position: relative;\n  display: inline-block;\n}\n\ninput[type=\"search\"] {\n  outline: none;\n  border-radius: 8px;\n  padding: 10px 20px;\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "getWeatherWithIp": () => (/* binding */ getWeatherWithIp),
/* harmony export */   "searchCity": () => (/* binding */ searchCity)
/* harmony export */ });
async function getUserCity() {
  let result;
  try {
    const response = await fetch(
      "https://api.weatherapi.com/v1/ip.json?key=feed359d6d0647688d9132213232803&q=auto:ip",
      { mode: "cors" }
    );
    const userData = await response.json();
    result = userData.ip;
  } catch (error) {
    result = "London";
  }
  return result;
}

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

async function getWeatherWithIp() {
  let result;
  try {
    const ip = await getUserCity();
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=feed359d6d0647688d9132213232803&q=${ip}&days=3&aqi=yes&alerts=no`,
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

/***/ "./src/modules/event-listeners.js":
/*!****************************************!*\
  !*** ./src/modules/event-listeners.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _manage_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-search */ "./src/modules/manage-search.js");


function setSearchListeners() {
  const searchBar = document.getElementById("city-search");

  searchBar.addEventListener("search", () => {
    (0,_manage_search__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });

  const form = document.querySelector("form");

  form.onsubmit = (e) => {
    e.preventDefault();
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setSearchListeners);


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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_calls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.calls */ "./src/modules/api.calls.js");


function structureAutoComplete(data) {
  const cityNames = [];
  for (let i = 0; i < data.length; i += 1) {
    const city = data[i].name;
    cityNames.push(city);
  }

  return cityNames;
}

async function getAutoComplete() {
  const searchBar = document.getElementById("city-search");
  const response = await (0,_api_calls__WEBPACK_IMPORTED_MODULE_0__.searchCity)(searchBar.value);
  const result = structureAutoComplete(response);
  console.log(result);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAutoComplete);


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
/* harmony import */ var _event_listeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-listeners */ "./src/modules/event-listeners.js");



function createNavigationBar() {
  const element = document.createElement("nav");
  element.classList.add("navigation-bar");
  const form = document.createElement("form");
  form.autocomplete = "off";
  form.noValidate = true;
  form.innerHTML =
    "<div class='autocomplete'><input type='search' id='city-search' name='city-search' placeholder='Paris'></div>";
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

function showPage() {
  const city = _cities_weather__WEBPACK_IMPORTED_MODULE_0__["default"].cities[0];
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
  (0,_event_listeners__WEBPACK_IMPORTED_MODULE_1__["default"])();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSw2Q0FBNkMsMkJBQTJCLGNBQWMsZUFBZSxHQUFHLFdBQVcsNkJBQTZCLCtCQUErQiw4QkFBOEIsNEJBQTRCLHNDQUFzQyxHQUFHLFdBQVcsa0JBQWtCLDJCQUEyQix3QkFBd0IsMkNBQTJDLGNBQWMsR0FBRyxXQUFXLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHdCQUF3Qiw2Q0FBNkMsaUJBQWlCLG9CQUFvQix1QkFBdUIsa0JBQWtCLHVCQUF1QixHQUFHLHFCQUFxQixrQkFBa0IsaUJBQWlCLHVCQUF1QiwwQ0FBMEMsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsMkJBQTJCLEdBQUcsdUJBQXVCLHVCQUF1QixHQUFHLHFCQUFxQix3QkFBd0IsZ0JBQWdCLDRDQUE0QyxrQkFBa0Isa0NBQWtDLHdCQUF3QixxQkFBcUIsY0FBYyxrQkFBa0IsR0FBRyxlQUFlLGtCQUFrQix3QkFBd0IsR0FBRyxtQkFBbUIsdUJBQXVCLDBCQUEwQixHQUFHLDRCQUE0QixrQkFBa0IsdUJBQXVCLHVCQUF1QixHQUFHLFNBQVMsZ0ZBQWdGLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLDZCQUE2QiwyQkFBMkIsY0FBYyxlQUFlLEdBQUcsV0FBVyw2QkFBNkIsK0JBQStCLDhCQUE4Qiw0QkFBNEIsc0NBQXNDLEdBQUcsV0FBVyxrQkFBa0IsMkJBQTJCLHdCQUF3QiwyQ0FBMkMsY0FBYyxHQUFHLFdBQVcsa0JBQWtCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLDZDQUE2QyxpQkFBaUIsb0JBQW9CLHVCQUF1QixrQkFBa0IsdUJBQXVCLEdBQUcscUJBQXFCLGtCQUFrQixpQkFBaUIsdUJBQXVCLDBDQUEwQyxrQkFBa0Isd0JBQXdCLDRCQUE0QiwyQkFBMkIsR0FBRyx1QkFBdUIsdUJBQXVCLEdBQUcscUJBQXFCLHdCQUF3QixnQkFBZ0IsNENBQTRDLGtCQUFrQixrQ0FBa0Msd0JBQXdCLHFCQUFxQixjQUFjLGtCQUFrQixHQUFHLGVBQWUsa0JBQWtCLHdCQUF3QixHQUFHLG1CQUFtQix1QkFBdUIsMEJBQTBCLEdBQUcsNEJBQTRCLGtCQUFrQix1QkFBdUIsdUJBQXVCLEdBQUcscUJBQXFCO0FBQ3IvRztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0ZBQXdGLE9BQU87QUFDL0YsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkZBQTJGLEdBQUc7QUFDOUYsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFd0M7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDeEM7QUFDZ0M7QUFDNkI7QUFDcEI7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLGdFQUF3QjtBQUNoRDtBQUNBLHFCQUFxQixxREFBVyxDQUFDLDhDQUFNO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN4QnRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDekIzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxjQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QmdCOztBQUU5QztBQUNBOztBQUVBO0FBQ0EsSUFBSSwwREFBZTtBQUNuQixHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsa0JBQWtCLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2ZsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsZUFBZSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDVFU7O0FBRXpDO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsc0RBQVU7QUFDbkM7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGVBQWUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJnQjtBQUNBO0FBQ0U7O0FBRWpEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUgsYUFBYSx3REFBYztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMEJBQTBCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUgsYUFBYSx5REFBZTtBQUM1QjtBQUNBO0FBQ0EseUJBQXlCLDREQUFnQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSx3QkFBd0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvSEY7QUFDYTs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxtQkFBbUIsU0FBUyxtQkFBbUI7QUFDN0QsMEJBQTBCLFVBQVU7QUFDcEMsZ0NBQWdDLGlCQUFpQjtBQUNqRCw4QkFBOEIsbUJBQW1CO0FBQ2pELHlCQUF5QixnQkFBZ0I7QUFDekMsZ0NBQWdDLG9CQUFvQixRQUFRLG9CQUFvQjtBQUNoRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQyxvQ0FBb0MsYUFBYSxJQUFJLG9CQUFvQixpQkFBaUIsc0JBQXNCLFNBQVMsc0JBQXNCO0FBQy9JO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9DQUFvQyxPQUFPLEVBQUUsdUJBQXVCLE1BQU0sdUJBQXVCLGlCQUFpQixzQkFBc0I7QUFDeEk7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFELFNBQVM7QUFDOUQsa0RBQWtELFdBQVc7QUFDN0QsMERBQTBELGtCQUFrQixFQUFFLGdCQUFnQjtBQUM5RixvREFBb0QsZUFBZTtBQUNuRSx3REFBd0QscUJBQXFCO0FBQzdFLDhDQUE4QyxnQkFBZ0I7QUFDOUQsa0RBQWtELHlCQUF5QjtBQUMzRSxnREFBZ0QsYUFBYTtBQUM3RCxrREFBa0QsbUJBQW1COztBQUVyRTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxpRUFBZ0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDREQUFrQjtBQUNwQjs7QUFFQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUY2QjtBQUM5QztBQUNBO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLEdBQUc7Ozs7Ozs7Ozs7Ozs7OztBQ2hDSTtBQUNQOzs7Ozs7O1VDREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ3lCO0FBQ0s7O0FBRW5EO0FBQ0EsUUFBUSwwRUFBaUI7QUFDekIsRUFBRSxzRUFBUTtBQUNWIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9hcGkuY2FsbHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9jaXRpZXMtd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2NpdHktd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2N1cnJlbnQtd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2V2ZW50LWxpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2ZvcmVjYXN0LXdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9tYW5hZ2Utc2VhcmNoLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvc3RydWN0dXJlLWNpdHktZGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3ZpZXctY2l0eS13ZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL25hbm9pZC9pbmRleC5icm93c2VyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL25hbm9pZC91cmwtYWxwaGFiZXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLXByaW1hcnktY29sb3I6ICNhNzk5Yjc7XFxuICAtLXNlY29uZGFyeS1jb2xvcjogIzk4ODhhNTtcXG4gIC0tdGVydGlhcnktY29sb3I6ICM3NzY0NzI7XFxuICAtLWFjY2VudC1jb2xvcjogIzQ0NTU1MjtcXG4gIC0tc2Vjb25kYXJ5LWFjY2VudC1jb2xvcjogIzI5NGQ0YTtcXG59XFxuXFxuI21haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi53ZWF0aGVyLWRldGFpbCB7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ud2VhdGhlci1kZXRhaWwgcCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5uYXZpZ2F0aW9uLWJhciB7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIGJvdHRvbTogMDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5jYXJkIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmF1dG9jb21wbGV0ZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixzQ0FBc0M7RUFDdEMsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHdDQUF3QztFQUN4QyxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUNBQXFDO0VBQ3JDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsdUNBQXVDO0VBQ3ZDLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLXByaW1hcnktY29sb3I6ICNhNzk5Yjc7XFxuICAtLXNlY29uZGFyeS1jb2xvcjogIzk4ODhhNTtcXG4gIC0tdGVydGlhcnktY29sb3I6ICM3NzY0NzI7XFxuICAtLWFjY2VudC1jb2xvcjogIzQ0NTU1MjtcXG4gIC0tc2Vjb25kYXJ5LWFjY2VudC1jb2xvcjogIzI5NGQ0YTtcXG59XFxuXFxuI21haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi53ZWF0aGVyLWRldGFpbCB7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ud2VhdGhlci1kZXRhaWwgcCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5uYXZpZ2F0aW9uLWJhciB7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIGJvdHRvbTogMDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5jYXJkIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmF1dG9jb21wbGV0ZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJhc3luYyBmdW5jdGlvbiBnZXRVc2VyQ2l0eSgpIHtcbiAgbGV0IHJlc3VsdDtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgXCJodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9pcC5qc29uP2tleT1mZWVkMzU5ZDZkMDY0NzY4OGQ5MTMyMjEzMjMyODAzJnE9YXV0bzppcFwiLFxuICAgICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICAgKTtcbiAgICBjb25zdCB1c2VyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXN1bHQgPSB1c2VyRGF0YS5pcDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXN1bHQgPSBcIkxvbmRvblwiO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNlYXJjaENpdHkoc2VhcmNoKSB7XG4gIGxldCByZXN1bHQ7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL3NlYXJjaC5qc29uP2tleT1mZWVkMzU5ZDZkMDY0NzY4OGQ5MTMyMjEzMjMyODAzJnE9JHtzZWFyY2h9YCxcbiAgICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICAgICk7XG4gICAgY29uc3Qgc2VhcmNoRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXN1bHQgPSBzZWFyY2hEYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyV2l0aElwKCkge1xuICBsZXQgcmVzdWx0O1xuICB0cnkge1xuICAgIGNvbnN0IGlwID0gYXdhaXQgZ2V0VXNlckNpdHkoKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWZlZWQzNTlkNmQwNjQ3Njg4ZDkxMzIyMTMyMzI4MDMmcT0ke2lwfSZkYXlzPTMmYXFpPXllcyZhbGVydHM9bm9gLFxuICAgICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICAgKTtcbiAgICBjb25zdCBjaXR5RGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXN1bHQgPSBjaXR5RGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IHsgZ2V0V2VhdGhlcldpdGhJcCwgc2VhcmNoQ2l0eSB9O1xuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0IHsgbmFub2lkIH0gZnJvbSBcIm5hbm9pZFwiO1xuaW1wb3J0IGNyZWF0ZUN1cnJlbnRBbmRGb3JlY2FzdCBmcm9tIFwiLi9zdHJ1Y3R1cmUtY2l0eS1kYXRhXCI7XG5pbXBvcnQgQ2l0eVdlYXRoZXIgZnJvbSBcIi4vY2l0eS13ZWF0aGVyXCI7XG5cbmNsYXNzIENpdGllc1dlYXRoZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNpdGllcyA9IFtdO1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlQ2l0eSgpIHtcbiAgICBjb25zdCBhcnJheSA9IGF3YWl0IGNyZWF0ZUN1cnJlbnRBbmRGb3JlY2FzdCgpO1xuICAgIGNvbnN0IFtjdXJyZW50LCBmb3JlY2FzdF0gPSBhcnJheTtcbiAgICBjb25zdCBjaXR5ID0gbmV3IENpdHlXZWF0aGVyKG5hbm9pZCgpLCBjdXJyZW50LCBmb3JlY2FzdCk7XG4gICAgdGhpcy5hcHBlbmRDaXR5KGNpdHkpO1xuICB9XG5cbiAgYXBwZW5kQ2l0eShjaXR5KSB7XG4gICAgdGhpcy5jaXRpZXMucHVzaChjaXR5KTtcbiAgfVxufVxuXG5jb25zdCBjaXRpZXMgPSBuZXcgQ2l0aWVzV2VhdGhlcigpO1xuXG5leHBvcnQgZGVmYXVsdCBjaXRpZXM7XG4iLCJjbGFzcyBDaXR5V2VhdGhlciB7XG4gIGNvbnN0cnVjdG9yKHV1aWQsIGN1cnJlbnRXZWF0aGVyLCBmb3JlY2FzdFdlYXRoZXIpIHtcbiAgICB0aGlzLnV1aWQgPSB1dWlkO1xuICAgIHRoaXMubmFtZSA9IGN1cnJlbnRXZWF0aGVyLmNpdHk7XG4gICAgdGhpcy5jdXJyZW50V2VhdGhlciA9IGN1cnJlbnRXZWF0aGVyO1xuICAgIHRoaXMuZm9yZWNhc3RXZWF0aGVyID0gZm9yZWNhc3RXZWF0aGVyO1xuICB9XG5cbiAgd2VhdGhlckJhc2ljc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFdlYXRoZXI7XG4gIH1cblxuICBob3VyRm9yZWNhc3REYXRhKCkge1xuICAgIHJldHVybiB0aGlzLmZvcmVjYXN0V2VhdGhlci5ob3VycztcbiAgfVxuXG4gIGRheUZvcmVjYXN0RGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JlY2FzdFdlYXRoZXIuZGF5cztcbiAgfVxuXG4gIGRldGFpbHNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRXZWF0aGVyLndlYXRoZXJEZXRhaWxzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENpdHlXZWF0aGVyO1xuIiwiLy8gQ3VycmVudCBjaXR5LCBjdXJyZW50IHRlbXBlcmF0dXJlIGluIMKwQyBmaXJzdCBhbmQgwrBGLCBsYXN0IHVwZGF0ZWQgdGltZSwgY29uZGl0aW9uLCBtYXggJiBtaW4gZm9yIGN1cnJlbnQgZGF5LFxuLy8gd2VhdGhlciBkZXRhaWxzOiBVViBJbmRleCwgd2luZCBzcGVlZCArIG90aGVyIGRldGFpbHMuXG5cbmNsYXNzIEN1cnJlbnRXZWF0aGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgY2l0eSxcbiAgICB0ZW1wZXJhdHVyZSxcbiAgICBsYXN0VXBkYXRlLFxuICAgIGNvbmRpdGlvblRleHQsXG4gICAgY29uZGl0aW9uSWNvbixcbiAgICBtYXhUZW1wZXJhdHVyZSxcbiAgICBtaW5UZW1wZXJhdHVyZSxcbiAgICB3ZWF0aGVyRGV0YWlsc1xuICApIHtcbiAgICB0aGlzLmNpdHkgPSBjaXR5O1xuICAgIHRoaXMudGVtcGVyYXR1cmUgPSB0ZW1wZXJhdHVyZTtcbiAgICB0aGlzLmxhc3RVcGRhdGUgPSBsYXN0VXBkYXRlO1xuICAgIHRoaXMuY29uZGl0aW9uVGV4dCA9IGNvbmRpdGlvblRleHQ7XG4gICAgdGhpcy5jb25kaXRpb25JY29uID0gY29uZGl0aW9uSWNvbjtcbiAgICB0aGlzLm1heFRlbXBlcmF0dXJlID0gbWF4VGVtcGVyYXR1cmU7XG4gICAgdGhpcy5taW5UZW1wZXJhdHVyZSA9IG1pblRlbXBlcmF0dXJlO1xuICAgIHRoaXMud2VhdGhlckRldGFpbHMgPSB3ZWF0aGVyRGV0YWlscztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDdXJyZW50V2VhdGhlcjtcbiIsImltcG9ydCBnZXRBdXRvQ29tcGxldGUgZnJvbSBcIi4vbWFuYWdlLXNlYXJjaFwiO1xuXG5mdW5jdGlvbiBzZXRTZWFyY2hMaXN0ZW5lcnMoKSB7XG4gIGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2l0eS1zZWFyY2hcIik7XG5cbiAgc2VhcmNoQmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJzZWFyY2hcIiwgKCkgPT4ge1xuICAgIGdldEF1dG9Db21wbGV0ZSgpO1xuICB9KTtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG5cbiAgZm9ybS5vbnN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgc2V0U2VhcmNoTGlzdGVuZXJzO1xuIiwiLy8gaW5zaWRlIGRheXMgLyBob3VycyBhcnJheTogQ3VycmVudCBob3VyL2RheSB0ZW1wZXJhdHVyZSArIGNvbmRpdGlvbiBpY29uIC8gbWF4IC0gbWluICsgY29uZGl0aW9uIGljb24uXG5cbmNsYXNzIEZvcmVjYXN0V2VhdGhlciB7XG4gIGNvbnN0cnVjdG9yKGRheXMsIGhvdXJzKSB7XG4gICAgdGhpcy5kYXlzID0gZGF5cztcbiAgICB0aGlzLmhvdXJzID0gaG91cnM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9yZWNhc3RXZWF0aGVyO1xuIiwiaW1wb3J0IHsgc2VhcmNoQ2l0eSB9IGZyb20gXCIuL2FwaS5jYWxsc1wiO1xuXG5mdW5jdGlvbiBzdHJ1Y3R1cmVBdXRvQ29tcGxldGUoZGF0YSkge1xuICBjb25zdCBjaXR5TmFtZXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgY2l0eSA9IGRhdGFbaV0ubmFtZTtcbiAgICBjaXR5TmFtZXMucHVzaChjaXR5KTtcbiAgfVxuXG4gIHJldHVybiBjaXR5TmFtZXM7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEF1dG9Db21wbGV0ZSgpIHtcbiAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaXR5LXNlYXJjaFwiKTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBzZWFyY2hDaXR5KHNlYXJjaEJhci52YWx1ZSk7XG4gIGNvbnN0IHJlc3VsdCA9IHN0cnVjdHVyZUF1dG9Db21wbGV0ZShyZXNwb25zZSk7XG4gIGNvbnNvbGUubG9nKHJlc3VsdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldEF1dG9Db21wbGV0ZTtcbiIsImltcG9ydCB7IGdldFdlYXRoZXJXaXRoSXAgfSBmcm9tIFwiLi9hcGkuY2FsbHNcIjtcbmltcG9ydCBDdXJyZW50V2VhdGhlciBmcm9tIFwiLi9jdXJyZW50LXdlYXRoZXJcIjtcbmltcG9ydCBGb3JlY2FzdFdlYXRoZXIgZnJvbSBcIi4vZm9yZWNhc3Qtd2VhdGhlclwiO1xuXG4vLyBjcmVhdGUgdGhlIGRhdGFcblxuLy8gQ3VycmVudCBjaXR5LCBjdXJyZW50IHRlbXBlcmF0dXJlIGluIMKwQyBmaXJzdCBhbmQgwrBGLCBsYXN0IHVwZGF0ZWQgdGltZSwgY29uZGl0aW9uLCBtYXggJiBtaW4gZm9yIGN1cnJlbnQgZGF5LFxuLy8gd2VhdGhlciBkZXRhaWxzOiBVViBJbmRleCwgd2luZCBzcGVlZCArIG90aGVyIGRldGFpbHMuXG5mdW5jdGlvbiBzdHJ1Y3R1cmVDdXJyZW50KHJlc3BvbnNlKSB7XG4gIC8vIG9yIGl0ZXJhdGUgYWxsIGtleSB2YWx1ZXMgd2l0aCBoYXZpbmcgbXkga2V5cyBpbiBhcnJheSBpIGxvb2sgZm9yIHRoZW4gcmV0dXJuXG4gIC8vIHRoZSB2YWx1ZXMgaW4gYW4gYXJyYXkgYW5kIGRvIGFycmF5IGRlc3RydWN0dXJpbmcgdG8gaW5zdGFudGlhdGUgdGhlIHZhbHVlc1xuXG4gIGNvbnN0IGNpdHkgPSByZXNwb25zZS5sb2NhdGlvbi5uYW1lO1xuICBjb25zdCB0ZW1wZXJhdHVyZSA9IHJlc3BvbnNlLmN1cnJlbnQudGVtcF9jO1xuICBjb25zdCBsYXN0VXBkYXRlID0gcmVzcG9uc2UuY3VycmVudC5sYXN0X3VwZGF0ZWQuc3BsaXQoXCIgXCIpWzFdO1xuICBjb25zdCBjb25kaXRpb25UZXh0ID0gcmVzcG9uc2UuY3VycmVudC5jb25kaXRpb24udGV4dDtcbiAgY29uc3QgY29uZGl0aW9uSWNvbiA9IHJlc3BvbnNlLmN1cnJlbnQuY29uZGl0aW9uLmljb247XG4gIGNvbnN0IG1heFRlbXBlcmF0dXJlID0gTWF0aC5yb3VuZChcbiAgICByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWF4dGVtcF9jXG4gICk7XG4gIGNvbnN0IG1pblRlbXBlcmF0dXJlID0gTWF0aC5yb3VuZChcbiAgICByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWludGVtcF9jXG4gICk7XG4gIGNvbnN0IHdlYXRoZXJEZXRhaWxzID0gKGZ1bmN0aW9uIGdldFdlYXRoZXJEZXRhaWxzKCkge1xuICAgIGNvbnN0IHRvRmV0Y2ggPSByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXTtcbiAgICBjb25zdCBhcWkgPSAoZnVuY3Rpb24gZ2V0QVFJKCkge1xuICAgICAgY29uc3QgbnVtYmVyID0gdG9GZXRjaC5kYXkuYWlyX3F1YWxpdHlbXCJ1cy1lcGEtaW5kZXhcIl07XG4gICAgICBjb25zdCBhcWlUYWJsZSA9IHtcbiAgICAgICAgMTogXCJHb29kXCIsXG4gICAgICAgIDI6IFwiQWNjZXB0YWJsZVwiLFxuICAgICAgICAzOiBcIlVuaGVhbHRoeSBmb3Igc2Vuc2l0aXZlIGdyb3Vwc1wiLFxuICAgICAgICA0OiBcIlVuaGVhbHRoeVwiLFxuICAgICAgICA1OiBcIlZlcnkgdW5oZWFsdGh5XCIsXG4gICAgICAgIDY6IFwiSGF6YXJkb3VzXCIsXG4gICAgICB9O1xuICAgICAgbGV0IHF1YWxpdHk7XG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoYXFpVGFibGUpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChrZXlzW2ldID09PSBudW1iZXIudG9TdHJpbmcoKSkge1xuICAgICAgICAgIHF1YWxpdHkgPSBhcWlUYWJsZVtrZXlzW2ldXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHF1YWxpdHk7XG4gICAgfSkoKTtcbiAgICBjb25zdCB1dklkeCA9IHRvRmV0Y2guZGF5LnV2O1xuICAgIGNvbnN0IHN1bnJpc2VUaW1lID0gdG9GZXRjaC5hc3Ryby5zdW5yaXNlO1xuICAgIGNvbnN0IHN1bnNldFRpbWUgPSB0b0ZldGNoLmFzdHJvLnN1bnNldDtcbiAgICBjb25zdCBmZWVsc0xpa2UgPSBNYXRoLnJvdW5kKHJlc3BvbnNlLmN1cnJlbnQuZmVlbHNsaWtlX2MpO1xuICAgIGNvbnN0IHByZWNpcGl0YXRpb25zID0gcmVzcG9uc2UuY3VycmVudC5wcmVjaXBfbW07XG4gICAgY29uc3Qgd2luZFNwZWVkID0gcmVzcG9uc2UuY3VycmVudC53aW5kX2twaDtcbiAgICBjb25zdCBodW1pZGl0eVBlcmNlbnRhZ2UgPSByZXNwb25zZS5jdXJyZW50Lmh1bWlkaXR5O1xuICAgIGNvbnN0IHZpc2lvbiA9IHJlc3BvbnNlLmN1cnJlbnQudmlzX2ttO1xuICAgIGNvbnN0IGhlY3RvcGFzY2FscyA9IHJlc3BvbnNlLmN1cnJlbnQucHJlc3N1cmVfbWI7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYXFpLFxuICAgICAgdXZJZHgsXG4gICAgICBzdW5yaXNlVGltZSxcbiAgICAgIHN1bnNldFRpbWUsXG4gICAgICBmZWVsc0xpa2UsXG4gICAgICBwcmVjaXBpdGF0aW9ucyxcbiAgICAgIHdpbmRTcGVlZCxcbiAgICAgIGh1bWlkaXR5UGVyY2VudGFnZSxcbiAgICAgIHZpc2lvbixcbiAgICAgIGhlY3RvcGFzY2FscyxcbiAgICB9O1xuICB9KSgpO1xuXG4gIHJldHVybiBuZXcgQ3VycmVudFdlYXRoZXIoXG4gICAgY2l0eSxcbiAgICB0ZW1wZXJhdHVyZSxcbiAgICBsYXN0VXBkYXRlLFxuICAgIGNvbmRpdGlvblRleHQsXG4gICAgY29uZGl0aW9uSWNvbixcbiAgICBtYXhUZW1wZXJhdHVyZSxcbiAgICBtaW5UZW1wZXJhdHVyZSxcbiAgICB3ZWF0aGVyRGV0YWlsc1xuICApO1xufVxuXG4vLyBvYmplY3RzOiBob3VyIC8gZGF5IGFycmF5IHdpdGggaW5zaWRlOiBDdXJyZW50IGhvdXIvZGF5IHRlbXBlcmF0dXJlICsgY29uZGl0aW9uIGljb24gLyBtYXggLSBtaW4gKyBjb25kaXRpb24gaWNvbi5cblxuZnVuY3Rpb24gc3RydWN0dXJlRm9yZWNhc3QocmVzcG9uc2UpIHtcbiAgY29uc3QgY3JlYXRlRGF5ID0gKGlkeCkgPT4ge1xuICAgIGNvbnN0IGFycmF5ID0gcmVzcG9uc2UuZm9yZWNhc3QuZm9yZWNhc3RkYXk7XG4gICAgY29uc3QgbWF4VGVtcGVyYXR1cmUgPSBNYXRoLnJvdW5kKGFycmF5W2lkeF0uZGF5Lm1heHRlbXBfYyk7XG4gICAgY29uc3QgbWluVGVtcGVyYXR1cmUgPSBNYXRoLnJvdW5kKGFycmF5W2lkeF0uZGF5Lm1pbnRlbXBfYyk7XG4gICAgY29uc3QgY29uZGl0aW9uSWNvbiA9IGFycmF5W2lkeF0uZGF5LmNvbmRpdGlvbi5pY29uO1xuICAgIGNvbnN0IGNvbmRpdGlvblRleHQgPSBhcnJheVtpZHhdLmRheS5jb25kaXRpb24udGV4dDtcblxuICAgIHJldHVybiB7IG1heFRlbXBlcmF0dXJlLCBtaW5UZW1wZXJhdHVyZSwgY29uZGl0aW9uSWNvbiwgY29uZGl0aW9uVGV4dCB9O1xuICB9O1xuICBjb25zdCBjcmVhdGVIb3VyID0gKGlkeCkgPT4ge1xuICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gTWF0aC5yb3VuZChcbiAgICAgIHJlc3BvbnNlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXJbaWR4XS50ZW1wX2NcbiAgICApO1xuICAgIGNvbnN0IGhvdXIgPSByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyW2lkeF0udGltZS5zcGxpdChcIiBcIilbMV07XG4gICAgY29uc3QgY29uZGl0aW9uSWNvbiA9XG4gICAgICByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyW2lkeF0uY29uZGl0aW9uLmljb247XG4gICAgY29uc3QgY29uZGl0aW9uVGV4dCA9XG4gICAgICByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyW2lkeF0uY29uZGl0aW9uLnRleHQ7XG4gICAgcmV0dXJuIHsgdGVtcGVyYXR1cmUsIGhvdXIsIGNvbmRpdGlvbkljb24sIGNvbmRpdGlvblRleHQgfTtcbiAgfTtcbiAgY29uc3QgZGF5cyA9IChmdW5jdGlvbiBjcmVhdGVEYXlzT2JqZWN0KCkge1xuICAgIGNvbnN0IGRheXNBcnJheSA9IFtjcmVhdGVEYXkoMCksIGNyZWF0ZURheSgxKSwgY3JlYXRlRGF5KDIpXTtcblxuICAgIHJldHVybiBkYXlzQXJyYXk7XG4gIH0pKCk7XG5cbiAgY29uc3QgaG91cnMgPSAoZnVuY3Rpb24gY3JlYXRlSG91cnNPYmplY3QoKSB7XG4gICAgY29uc3QgZGF0YVRvSXRlcmF0ZSA9IHJlc3BvbnNlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXI7XG4gICAgY29uc3QgaG91cnNBcnJheSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YVRvSXRlcmF0ZS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaG91cnNBcnJheS5wdXNoKGNyZWF0ZUhvdXIoaSkpO1xuICAgIH1cbiAgICByZXR1cm4gaG91cnNBcnJheTtcbiAgfSkoKTtcblxuICByZXR1cm4gbmV3IEZvcmVjYXN0V2VhdGhlcihkYXlzLCBob3Vycyk7XG59XG5hc3luYyBmdW5jdGlvbiBjcmVhdGVDdXJyZW50QW5kRm9yZWNhc3QoKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0V2VhdGhlcldpdGhJcCgpO1xuICBjb25zdCBjdXJyZW50ID0gc3RydWN0dXJlQ3VycmVudChyZXNwb25zZSk7XG4gIGNvbnN0IGZvcmVjYXN0ID0gc3RydWN0dXJlRm9yZWNhc3QocmVzcG9uc2UpO1xuICByZXR1cm4gW2N1cnJlbnQsIGZvcmVjYXN0XTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ3VycmVudEFuZEZvcmVjYXN0O1xuIiwiaW1wb3J0IGNpdGllcyBmcm9tIFwiLi9jaXRpZXMtd2VhdGhlclwiO1xuaW1wb3J0IHNldFNlYXJjaExpc3RlbmVycyBmcm9tIFwiLi9ldmVudC1saXN0ZW5lcnNcIjtcblxuZnVuY3Rpb24gY3JlYXRlTmF2aWdhdGlvbkJhcigpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm5hdmlnYXRpb24tYmFyXCIpO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGZvcm0uYXV0b2NvbXBsZXRlID0gXCJvZmZcIjtcbiAgZm9ybS5ub1ZhbGlkYXRlID0gdHJ1ZTtcbiAgZm9ybS5pbm5lckhUTUwgPVxuICAgIFwiPGRpdiBjbGFzcz0nYXV0b2NvbXBsZXRlJz48aW5wdXQgdHlwZT0nc2VhcmNoJyBpZD0nY2l0eS1zZWFyY2gnIG5hbWU9J2NpdHktc2VhcmNoJyBwbGFjZWhvbGRlcj0nUGFyaXMnPjwvZGl2PlwiO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKGZvcm0pO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlV2VhdGhlckJhc2ljcyhjaXR5KSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICBjb25zdCBkYXRhID0gY2l0eS53ZWF0aGVyQmFzaWNzRGF0YSgpO1xuICBlbGVtZW50LmlubmVySFRNTCA9IGBcbiAgPGltZyBzcmM9XCIke2RhdGEuY29uZGl0aW9uSWNvbn1cIiBhbHQ9XCIke2RhdGEuY29uZGl0aW9uVGV4dH1cIj5cbiAgPGgyIGNsYXNzPVwiY2l0eS1uYW1lXCI+JHtkYXRhLmNpdHl9PC9oMj5cbiAgPHAgY2xhc3M9XCJjaXR5LXRlbXBlcmF0dXJlXCI+JHtkYXRhLnRlbXBlcmF0dXJlfcKwPC9wPlxuICA8cCBjbGFzcz1cImNvbmRpdGlvbi10ZXh0XCI+JHtkYXRhLmNvbmRpdGlvblRleHR9PC9wPlxuICA8cCBjbGFzcz1cImNpdHktdGltZVwiPiR7ZGF0YS5sYXN0VXBkYXRlfTwvcD5cbiAgPHAgY2xhc3M9XCJtYXgtbWluLXRlbXBcIj5NYXguJHtkYXRhLm1heFRlbXBlcmF0dXJlfcKwIE1pbi4ke2RhdGEubWluVGVtcGVyYXR1cmV9wrA8L3A+XG4gIGA7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvdXJGb3JlY2FzdChjaXR5KSB7XG4gIGNvbnN0IGRhdGEgPSBjaXR5LmhvdXJGb3JlY2FzdERhdGEoKTtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGVsZW1lbnQuaW5uZXJIVE1MICs9IGA8ZGl2PjxwPiR7ZGF0YVtpXS5ob3VyfTogJHtkYXRhW2ldLnRlbXBlcmF0dXJlfcKwPC9wPjxpbWcgc3JjPVwiJHtkYXRhW2ldLmNvbmRpdGlvbkljb259XCIgYWx0PVwiJHtkYXRhW2ldLmNvbmRpdGlvblRleHR9XCI+PC9kaXY+YDtcbiAgfVxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGF5Rm9yZWNhc3QoY2l0eSkge1xuICBjb25zdCBkYXRhID0gY2l0eS5kYXlGb3JlY2FzdERhdGEoKTtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgbGV0IG9wdGlvbiA9IFwiXCI7XG4gICAgaWYgKGkgPT09IDApIHtcbiAgICAgIG9wdGlvbiA9IFwiVG9kYXk6IFwiO1xuICAgIH1cblxuICAgIGVsZW1lbnQuaW5uZXJIVE1MICs9IGA8ZGl2PjxwPiR7b3B0aW9ufSR7ZGF0YVtpXS5taW5UZW1wZXJhdHVyZX3CsCAtICR7ZGF0YVtpXS5tYXhUZW1wZXJhdHVyZX3CsDwvcD48aW1nIHNyYz1cIiR7ZGF0YVtpXS5jb25kaXRpb25JY29ufVwiPjwvZGl2PmA7XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURldGFpbHMoY2l0eSkge1xuICBjb25zdCBkYXRhID0gY2l0eS5kZXRhaWxzRGF0YSgpO1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcblxuICBlbGVtZW50LmlubmVySFRNTCA9IGBcbiAgPGRpdiBjbGFzcz1cIndlYXRoZXItZGV0YWlsXCI+PHA+QWlyIHF1YWxpdHk8L3A+PHA+JHtkYXRhLmFxaX08L3A+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ3ZWF0aGVyLWRldGFpbFwiPjxwPlVWIEluZGV4PC9wPjxwPiR7ZGF0YS51dklkeH08L3A+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ3ZWF0aGVyLWRldGFpbFwiPjxwPlN1bnJpc2UgJiBTdW5zZXQ8L3A+PHA+JHtkYXRhLnN1bnJpc2VUaW1lfSAke2RhdGEuc3Vuc2V0VGltZX08L3A+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ3ZWF0aGVyLWRldGFpbFwiPjxwPkZlZWxzIGxpa2U8L3A+PHA+JHtkYXRhLmZlZWxzTGlrZX3CsDwvcD48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cIndlYXRoZXItZGV0YWlsXCI+PHA+UHJlY2lwaXRhdGlvbnM8L3A+PHA+JHtkYXRhLnByZWNpcGl0YXRpb25zfSBtbTwvcD48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cIndlYXRoZXItZGV0YWlsXCI+PHA+V2luZDwvcD48cD4ke2RhdGEud2luZFNwZWVkfSBrbS9oPC9wPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwid2VhdGhlci1kZXRhaWxcIj48cD5IdW1pZGl0eTwvcD48cD4ke2RhdGEuaHVtaWRpdHlQZXJjZW50YWdlfSAlPC9wPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwid2VhdGhlci1kZXRhaWxcIj48cD5WaXNpb248L3A+PHA+JHtkYXRhLnZpc2lvbn0ga208L3A+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ3ZWF0aGVyLWRldGFpbFwiPjxwPlByZXNzdXJlPC9wPjxwPiR7ZGF0YS5oZWN0b3Bhc2NhbHN9IGhQYTwvcD48L2Rpdj5gO1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBzaG93UGFnZSgpIHtcbiAgY29uc3QgY2l0eSA9IGNpdGllcy5jaXRpZXNbMF07XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gIGNvbnN0IG5hdmlnYXRpb25CYXIgPSBjcmVhdGVOYXZpZ2F0aW9uQmFyKCk7XG4gIGNvbnN0IHdlYXRoZXJCYXNpY3MgPSBjcmVhdGVXZWF0aGVyQmFzaWNzKGNpdHkpO1xuICBjb25zdCBkZXRhaWxzQmFzaWMgPSBjcmVhdGVEZXRhaWxzKGNpdHkpO1xuICBjb25zdCBob3VyRm9yZWNhc3QgPSBjcmVhdGVIb3VyRm9yZWNhc3QoY2l0eSk7XG4gIGNvbnN0IGRheUZvcmVjYXN0ID0gY3JlYXRlRGF5Rm9yZWNhc3QoY2l0eSk7XG4gIG1haW4uYXBwZW5kKFxuICAgIG5hdmlnYXRpb25CYXIsXG4gICAgd2VhdGhlckJhc2ljcyxcbiAgICBob3VyRm9yZWNhc3QsXG4gICAgZGF5Rm9yZWNhc3QsXG4gICAgZGV0YWlsc0Jhc2ljXG4gICk7XG4gIHNldFNlYXJjaExpc3RlbmVycygpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzaG93UGFnZTtcbiIsImV4cG9ydCB7IHVybEFscGhhYmV0IH0gZnJvbSAnLi91cmwtYWxwaGFiZXQvaW5kZXguanMnXG5leHBvcnQgbGV0IHJhbmRvbSA9IGJ5dGVzID0+IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoYnl0ZXMpKVxuZXhwb3J0IGxldCBjdXN0b21SYW5kb20gPSAoYWxwaGFiZXQsIGRlZmF1bHRTaXplLCBnZXRSYW5kb20pID0+IHtcbiAgbGV0IG1hc2sgPSAoMiA8PCAoTWF0aC5sb2coYWxwaGFiZXQubGVuZ3RoIC0gMSkgLyBNYXRoLkxOMikpIC0gMVxuICBsZXQgc3RlcCA9IC1+KCgxLjYgKiBtYXNrICogZGVmYXVsdFNpemUpIC8gYWxwaGFiZXQubGVuZ3RoKVxuICByZXR1cm4gKHNpemUgPSBkZWZhdWx0U2l6ZSkgPT4ge1xuICAgIGxldCBpZCA9ICcnXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGxldCBieXRlcyA9IGdldFJhbmRvbShzdGVwKVxuICAgICAgbGV0IGogPSBzdGVwXG4gICAgICB3aGlsZSAoai0tKSB7XG4gICAgICAgIGlkICs9IGFscGhhYmV0W2J5dGVzW2pdICYgbWFza10gfHwgJydcbiAgICAgICAgaWYgKGlkLmxlbmd0aCA9PT0gc2l6ZSkgcmV0dXJuIGlkXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5leHBvcnQgbGV0IGN1c3RvbUFscGhhYmV0ID0gKGFscGhhYmV0LCBzaXplID0gMjEpID0+XG4gIGN1c3RvbVJhbmRvbShhbHBoYWJldCwgc2l6ZSwgcmFuZG9tKVxuZXhwb3J0IGxldCBuYW5vaWQgPSAoc2l6ZSA9IDIxKSA9PlxuICBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KHNpemUpKS5yZWR1Y2UoKGlkLCBieXRlKSA9PiB7XG4gICAgYnl0ZSAmPSA2M1xuICAgIGlmIChieXRlIDwgMzYpIHtcbiAgICAgIGlkICs9IGJ5dGUudG9TdHJpbmcoMzYpXG4gICAgfSBlbHNlIGlmIChieXRlIDwgNjIpIHtcbiAgICAgIGlkICs9IChieXRlIC0gMjYpLnRvU3RyaW5nKDM2KS50b1VwcGVyQ2FzZSgpXG4gICAgfSBlbHNlIGlmIChieXRlID4gNjIpIHtcbiAgICAgIGlkICs9ICctJ1xuICAgIH0gZWxzZSB7XG4gICAgICBpZCArPSAnXydcbiAgICB9XG4gICAgcmV0dXJuIGlkXG4gIH0sICcnKVxuIiwiZXhwb3J0IGNvbnN0IHVybEFscGhhYmV0ID1cbiAgJ3VzZWFuZG9tLTI2VDE5ODM0MFBYNzVweEpBQ0tWRVJZTUlOREJVU0hXT0xGX0dRWmJmZ2hqa2xxdnd5enJpY3QnXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGNpdGllcyBmcm9tIFwiLi9tb2R1bGVzL2NpdGllcy13ZWF0aGVyXCI7XG5pbXBvcnQgc2hvd1BhZ2UgZnJvbSBcIi4vbW9kdWxlcy92aWV3LWNpdHktd2VhdGhlclwiO1xuXG53aW5kb3cub25sb2FkID0gYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBjaXRpZXMuY3JlYXRlQ2l0eSgpO1xuICBzaG93UGFnZSgpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==