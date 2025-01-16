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
___CSS_LOADER_EXPORT___.push([module.id, `body {
	margin: 0px;
}
form {
	font-size: 28px;
	text-decoration: underline;
	padding-left: 10px;
}

button {
	background-color: #22577a;
	border-radius: 8px;
	box-shadow: 2px 2px 2px 2px #032034;
	color: #80ed99;
}

button:hover {
	background-color: yellow;
}
#mainbody {
	margin: 0px;
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
}

#titlelogo,
#bottom {
	flex-basis: 20%;
	display: flex;
	align-items: center;
	background-color: #22577a;
	color: #80ed99;
	font-size: 36px;
	font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
	text-decoration: underline;
	padding-left: 20px;
}
#bottom {
	color: #80ed99;
	justify-content: center;
	align-items: center;
	font-size: 16px;
}

#mid {
	flex-shrink: 0;
	overflow-y: auto;
	flex-basis: 60%;
	background-color: #57cc99;
	display: flex;
	flex-direction: row;
}
#bottom {
	flex-basis: 20%;
	background-color: #22577a;
}

#midleft {
	font-weight: 700;
	border-right: solid 2px black;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex-basis: 20%;
	flex-shrink: 0;
	background-color: #57cc99;
	color: #22577a;
}

#middle {
	overflow-y: auto;
	flex-shrink: 0;
	flex-basis: 60%;
	background-color: #57cc99;
	display: grid;
	justify-content: center;
	align-items: center;
	grid-template-rows: 1fr 1fr 1fr 1fr;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 8px;
}

#midright {
	border-left: 2px solid black;
	flex-grow: 0;
	flex-shrink: 0;
	flex-basis: 20%;
	background-color: #57cc99;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.possiblemeal {
	height: 90%;
	width: 90%;
	justify-content: center;
	align-items: center;
	margin: auto;
	background-color: #22577a;
	box-shadow: 2px 2px 4x 4px;
	border: 1px solid #06314d;
}

#meal_list {
	display: flex;
	margin: 20px;
	gap: 8px;
	flex-direction: column;
}

#formcontainer {
	margin-top: 20px;
	display: flex;
	flex-direction: column;
}

#selectionbox {
	font-weight: 400;
	font-size: 20px;
	font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
	display: flex;
	align-items: center;
	padding: 3px;
	gap: 8px;
	color: #22577a;
}

#groceries,
#submit {
	width: 80%;
	height: 30px;
	border-radius: 8px;
	margin: auto;
	margin-bottom: 20px;
	padding: auto;
}

#groceries {
	margin-left: 30px;
}
#grocerymiddle {
	width: 100%;
	display: grid;
	grid-template-rows: 20% 80%;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
}

#grocerymiddle > div {
	align-items: center;
	border-right: 2px solid black;
	border-bottom: 2px solid black;
}

.title {
	font-weight: 700;
	text-align: center;
	font-size: 28px;
	color: #22577a;
}

#title1 {
	grid-area: 1/1/2/2;
	text-align: center;
}
#title2 {
	grid-area: 1/2/2/3;
}
#title3 {
	grid-area: 1/3/2/4;
}

#title4 {
	grid-area: 1/4/2/5;
}

.gridlyfe {
	flex-grow: 0;
	overflow-y: auto;
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 8px;
}

.listitems {
	text-align: center;
	font-size: 14px;
	width: 80%;
	color: #57cc99;
	background-color: #22577a;
	border-radius: 8px;
	border: 2px solid #82f38d;
}

#cell00,
#cell01,
#cell02,
#cell03,
#cell04,
#cell05 {
	display: flex;
	align-items: center;
	justify-content: center;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC,WAAW;AACZ;AACA;CACC,eAAe;CACf,0BAA0B;CAC1B,kBAAkB;AACnB;;AAEA;CACC,yBAAyB;CACzB,kBAAkB;CAClB,mCAAmC;CACnC,cAAc;AACf;;AAEA;CACC,wBAAwB;AACzB;AACA;CACC,WAAW;CACX,aAAa;CACb,YAAY;CACZ,aAAa;CACb,sBAAsB;AACvB;;AAEA;;CAEC,eAAe;CACf,aAAa;CACb,mBAAmB;CACnB,yBAAyB;CACzB,cAAc;CACd,eAAe;CACf,6EAA6E;CAC7E,0BAA0B;CAC1B,kBAAkB;AACnB;AACA;CACC,cAAc;CACd,uBAAuB;CACvB,mBAAmB;CACnB,eAAe;AAChB;;AAEA;CACC,cAAc;CACd,gBAAgB;CAChB,eAAe;CACf,yBAAyB;CACzB,aAAa;CACb,mBAAmB;AACpB;AACA;CACC,eAAe;CACf,yBAAyB;AAC1B;;AAEA;CACC,gBAAgB;CAChB,6BAA6B;CAC7B,aAAa;CACb,sBAAsB;CACtB,8BAA8B;CAC9B,eAAe;CACf,cAAc;CACd,yBAAyB;CACzB,cAAc;AACf;;AAEA;CACC,gBAAgB;CAChB,cAAc;CACd,eAAe;CACf,yBAAyB;CACzB,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,mCAAmC;CACnC,sCAAsC;CACtC,aAAa;AACd;;AAEA;CACC,4BAA4B;CAC5B,YAAY;CACZ,cAAc;CACd,eAAe;CACf,yBAAyB;CACzB,aAAa;CACb,sBAAsB;CACtB,8BAA8B;AAC/B;;AAEA;CACC,WAAW;CACX,UAAU;CACV,uBAAuB;CACvB,mBAAmB;CACnB,YAAY;CACZ,yBAAyB;CACzB,0BAA0B;CAC1B,yBAAyB;AAC1B;;AAEA;CACC,aAAa;CACb,YAAY;CACZ,QAAQ;CACR,sBAAsB;AACvB;;AAEA;CACC,gBAAgB;CAChB,aAAa;CACb,sBAAsB;AACvB;;AAEA;CACC,gBAAgB;CAChB,eAAe;CACf,6EAA6E;CAC7E,aAAa;CACb,mBAAmB;CACnB,YAAY;CACZ,QAAQ;CACR,cAAc;AACf;;AAEA;;CAEC,UAAU;CACV,YAAY;CACZ,kBAAkB;CAClB,YAAY;CACZ,mBAAmB;CACnB,aAAa;AACd;;AAEA;CACC,iBAAiB;AAClB;AACA;CACC,WAAW;CACX,aAAa;CACb,2BAA2B;CAC3B,8CAA8C;AAC/C;;AAEA;CACC,mBAAmB;CACnB,6BAA6B;CAC7B,8BAA8B;AAC/B;;AAEA;CACC,gBAAgB;CAChB,kBAAkB;CAClB,eAAe;CACf,cAAc;AACf;;AAEA;CACC,kBAAkB;CAClB,kBAAkB;AACnB;AACA;CACC,kBAAkB;AACnB;AACA;CACC,kBAAkB;AACnB;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,YAAY;CACZ,gBAAgB;CAChB,aAAa;CACb,mBAAmB;CACnB,sBAAsB;CACtB,QAAQ;AACT;;AAEA;CACC,kBAAkB;CAClB,eAAe;CACf,UAAU;CACV,cAAc;CACd,yBAAyB;CACzB,kBAAkB;CAClB,yBAAyB;AAC1B;;AAEA;;;;;;CAMC,aAAa;CACb,mBAAmB;CACnB,uBAAuB;AACxB","sourcesContent":["body {\n\tmargin: 0px;\n}\nform {\n\tfont-size: 28px;\n\ttext-decoration: underline;\n\tpadding-left: 10px;\n}\n\nbutton {\n\tbackground-color: #22577a;\n\tborder-radius: 8px;\n\tbox-shadow: 2px 2px 2px 2px #032034;\n\tcolor: #80ed99;\n}\n\nbutton:hover {\n\tbackground-color: yellow;\n}\n#mainbody {\n\tmargin: 0px;\n\theight: 100vh;\n\twidth: 100vw;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n#titlelogo,\n#bottom {\n\tflex-basis: 20%;\n\tdisplay: flex;\n\talign-items: center;\n\tbackground-color: #22577a;\n\tcolor: #80ed99;\n\tfont-size: 36px;\n\tfont-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n\ttext-decoration: underline;\n\tpadding-left: 20px;\n}\n#bottom {\n\tcolor: #80ed99;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-size: 16px;\n}\n\n#mid {\n\tflex-shrink: 0;\n\toverflow-y: auto;\n\tflex-basis: 60%;\n\tbackground-color: #57cc99;\n\tdisplay: flex;\n\tflex-direction: row;\n}\n#bottom {\n\tflex-basis: 20%;\n\tbackground-color: #22577a;\n}\n\n#midleft {\n\tfont-weight: 700;\n\tborder-right: solid 2px black;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tflex-basis: 20%;\n\tflex-shrink: 0;\n\tbackground-color: #57cc99;\n\tcolor: #22577a;\n}\n\n#middle {\n\toverflow-y: auto;\n\tflex-shrink: 0;\n\tflex-basis: 60%;\n\tbackground-color: #57cc99;\n\tdisplay: grid;\n\tjustify-content: center;\n\talign-items: center;\n\tgrid-template-rows: 1fr 1fr 1fr 1fr;\n\tgrid-template-columns: 1fr 1fr 1fr 1fr;\n\tgrid-gap: 8px;\n}\n\n#midright {\n\tborder-left: 2px solid black;\n\tflex-grow: 0;\n\tflex-shrink: 0;\n\tflex-basis: 20%;\n\tbackground-color: #57cc99;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n}\n\n.possiblemeal {\n\theight: 90%;\n\twidth: 90%;\n\tjustify-content: center;\n\talign-items: center;\n\tmargin: auto;\n\tbackground-color: #22577a;\n\tbox-shadow: 2px 2px 4x 4px;\n\tborder: 1px solid #06314d;\n}\n\n#meal_list {\n\tdisplay: flex;\n\tmargin: 20px;\n\tgap: 8px;\n\tflex-direction: column;\n}\n\n#formcontainer {\n\tmargin-top: 20px;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n#selectionbox {\n\tfont-weight: 400;\n\tfont-size: 20px;\n\tfont-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: 3px;\n\tgap: 8px;\n\tcolor: #22577a;\n}\n\n#groceries,\n#submit {\n\twidth: 80%;\n\theight: 30px;\n\tborder-radius: 8px;\n\tmargin: auto;\n\tmargin-bottom: 20px;\n\tpadding: auto;\n}\n\n#groceries {\n\tmargin-left: 30px;\n}\n#grocerymiddle {\n\twidth: 100%;\n\tdisplay: grid;\n\tgrid-template-rows: 20% 80%;\n\tgrid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\n}\n\n#grocerymiddle > div {\n\talign-items: center;\n\tborder-right: 2px solid black;\n\tborder-bottom: 2px solid black;\n}\n\n.title {\n\tfont-weight: 700;\n\ttext-align: center;\n\tfont-size: 28px;\n\tcolor: #22577a;\n}\n\n#title1 {\n\tgrid-area: 1/1/2/2;\n\ttext-align: center;\n}\n#title2 {\n\tgrid-area: 1/2/2/3;\n}\n#title3 {\n\tgrid-area: 1/3/2/4;\n}\n\n#title4 {\n\tgrid-area: 1/4/2/5;\n}\n\n.gridlyfe {\n\tflex-grow: 0;\n\toverflow-y: auto;\n\tdisplay: flex;\n\talign-items: center;\n\tflex-direction: column;\n\tgap: 8px;\n}\n\n.listitems {\n\ttext-align: center;\n\tfont-size: 14px;\n\twidth: 80%;\n\tcolor: #57cc99;\n\tbackground-color: #22577a;\n\tborder-radius: 8px;\n\tborder: 2px solid #82f38d;\n}\n\n#cell00,\n#cell01,\n#cell02,\n#cell03,\n#cell04,\n#cell05 {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/meals.js":
/*!**********************!*\
  !*** ./src/meals.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   meallist: () => (/* binding */ meallist)
/* harmony export */ });

class Meal {
	constructor(name, tags, ingredients) {
		this.name = name;
		this.tags = tags;
		this.ingredients = ingredients;
	}
}
class Ingredients {
	constructor(name, location) {
		(this.name = name), (this.location = location);
	}
}

const cream = new Ingredients("cream", "dairy");
const chickenstock = new Ingredients("chicken stock", "produce");
const onion = new Ingredients("onion", "produce");
const chicken = new Ingredients("chicken", "meat");
const bacon = new Ingredients("bacon", "meat");
const chili_beans = new Ingredients("chili beans", "produce");
const garlic = new Ingredients("garlic", "produce");
const celery = new Ingredients("celery", "produce");
const carrots = new Ingredients("carrots", "produce");
const cannelini_beans = new Ingredients("cannelini_beans", "produce");
const tomato_paste = new Ingredients("tomato paste", "produce");
const diced_tomatoes = new Ingredients("Diced Tomatos", "produce");
const venison = new Ingredients("Venison", "meat");
const groundmeat = new Ingredients("Ground meat", "meat");
const wontonwrappers = new Ingredients("Wonton wrappers", "produce");
const cabbage = new Ingredients("Cabbage", "produce");
const salmon = new Ingredients("Salmon", "meat");
const papertowels = new Ingredients("Paper Towels", "nonfood");

let paperTowels = new Meal("paper towels", ["nonfood"], [papertowels]);
let Salmon = new Meal(
	"Salmon",
	["fish", "seafood", ",meat", "healthy"],
	[salmon]
);

let potstickers = new Meal(
	"Potstickers",
	["hot", "crispy", "savory", "ethnic"],
	[groundmeat, wontonwrappers, cabbage, carrots, garlic]
);
let chicken_soup = new Meal(
	"Chicken soup",
	["dinner", "soup", "hot", "chicken"],
	[chickenstock, onion, cream, carrots, celery, chicken]
);

let venison_chili = new Meal(
	"Venison Chili",
	["venison", "chili", "hot"],

	[venison, onion, garlic, chickenstock, chili_beans, diced_tomatoes]
);
let marrymechicken = new Meal(
	"Marry Me Chicken",
	["chicken", "creamy", "hot"],
	[chicken, cream, garlic, chickenstock, chili_beans, diced_tomatoes]
);
let pasta_fagiole = new Meal(
	"Pasta_fagiole",
	["italian", "soup", "hot"],

	[bacon, onion, garlic, chickenstock, cannelini_beans, tomato_paste]
);
const meallist = [
	venison_chili,
	marrymechicken,
	chicken_soup,
	pasta_fagiole,
	potstickers,
	Salmon,
	paperTowels,
];


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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _meals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meals */ "./src/meals.js");



let possiblemeals = [];
//acts as the array to hold meals that are selected as possible options, stores them as the full objects
let selectedmeals = [];
let finallist = [];
let list_of_meals = document.getElementById("meal_list");

// global variables
let middle = document.getElementById("middle");
let createlist = document.getElementById("create_list");
const listofMeals = document.getElementById("meal_list");
let submitbutton = document.getElementById("submit");
let groceries = document.getElementById("groceries");

//Once submit button is clicked, goes through and gets all checked values
//Turns the values into an array called taglist.  Everytime it is clicked it wipes it clean and remakes the list
function getTags() {
	let taglist = [];
	const checkboxes = document.querySelectorAll(
		'input[type="checkbox"]:checked'
	);
	for (let i = 0; i < checkboxes.length; i++) {
		taglist.push(checkboxes[i].value);
	}
	if (taglist.length == 0) {
		alert("Please make a selection");
		return;
	} else {
		return taglist;
	}
}

//checks if the second array is a subset of the first array
function isSubset(tagarray, mealarray) {
	return tagarray.every((element) => mealarray.includes(element));
}
//this checks to see if the tag elements are in each food elements
function crossCheck(taglist) {
	middle.innerHTML = "";
	possiblemeals = [];

	for (let meal of _meals__WEBPACK_IMPORTED_MODULE_1__.meallist) {
		//for every meal in meal list
		//calls isSubset to see if the tagarray matches the tag array of that meal.
		//If theres a match, create a new copy of the meal, and then put it into an array of possible meals
		if (isSubset(taglist, meal.tags) == true) {
			let possiblemeal = meal;
			possiblemeals.push(possiblemeal);
		}
	}
	if (possiblemeals.length === 0) {
		alert("No matches found.  Try a different selection");
	}
}

//makes buttons for the meals based on the tags that match
function makeElement(type, identity, where, text) {
	let poops = document.createElement(type);
	poops.setAttribute("class", identity);
	poops.innerHTML = text;
	where.append(poops);
	poops.addEventListener("click", () => addToGroceryList(poops));
}

//when the meal button is pressed, make sure that it matches a meal, and then add that meal object to a final array
function addToGroceryList(themeal) {
	for (let i = 0; i < _meals__WEBPACK_IMPORTED_MODULE_1__.meallist.length; i++) {
		if (themeal.innerHTML === _meals__WEBPACK_IMPORTED_MODULE_1__.meallist[i].name) {
			let finalmeal = _meals__WEBPACK_IMPORTED_MODULE_1__.meallist[i];
			finallist.push(finalmeal);
			console.log(finallist);
		}
	}
	displayMeals();
}
//removes some item from an array
function Remove(thingy) {
	console.log("this is an array?");
	console.log(finallist);
	console.log("position in array");
	finallist.splice(thingy, 1);
	displayMeals(finallist);
}
//displays the meals in finallist as buttons
function displayMeals() {
	list_of_meals.innerHTML = "";
	console.log("This is the begininning of display meals " + finallist);
	for (let i = 0; i < finallist.length; i++) {
		let finalbutton = document.createElement("button");
		finalbutton.setAttribute("class", "listmeal");
		finalbutton.setAttribute("id", "button"[i]);
		finalbutton.innerHTML = finallist[i].name;
		list_of_meals.append(finalbutton);
		finalbutton.addEventListener("mouseover", () => {
			for (let j = 0; j < finallist[i].ingredients.length; j++) {
				finalbutton.innerHTML += finallist[i].ingredients[j].name + " ";
			}
		});
		finalbutton.addEventListener("mouseleave", () => {
			finalbutton.innerHTML = finallist[i].name;
		});
		finalbutton.addEventListener("click", () => {
			finallist.splice([i], 1);
			displayMeals();
		});
	}
}

//adds the titles to the grocery list
function addmiddleTitle(doc, id, cls, inner, cell) {
	let box = document.getElementById(cell);
	doc = document.createElement("div");
	doc.setAttribute("id", id);
	doc.setAttribute("class", cls);
	doc.innerHTML = inner;
	box.append(doc);
}

function addListElement(finallist, ingredients, location, cell) {
	for (let i = 0; i < finallist.length; i++) {
		for (let j = 0; j < finallist[i].ingredients.length; j++) {
			if (finallist[i].ingredients[j].location === location) {
				let produce = document.getElementById(cell); //gets the cell and assigns it a name
				let produceitem = document.createElement("button");
				produceitem.setAttribute("class", "listitems");
				produceitem.innerHTML = finallist[i].ingredients[j].name;
				produceitem.addEventListener("click", () => {
					produceitem.remove();
				});

				produce.append(produceitem);
			}
		}
	}
}

function makeGroceryList() {
	//convert the middle page to the list of groceries
	middle.innerHTML = "";
	middle.setAttribute("id", "grocerymiddle");
	makeGrid(2, 6);
	addmiddleTitle("dairytitle", "title1", "title", "Dairy", "cell00");
	addmiddleTitle("Produce", "title2", "title", "Produce", "cell01");
	addmiddleTitle("Frozen", "title3", "title", "Frozen", "cell02");
	addmiddleTitle("Canned", "title4", "title", "Meat", "cell03");
	addmiddleTitle("Other", "title4", "title", "Other", "cell04");
	addmiddleTitle("Non-Food", "title4", "title", "Non-Food", "cell05");
	addListElement(finallist, finallist.ingredients, "produce", "cell11");
	addListElement(finallist, finallist.ingredients, "dairy", "cell10");
	addListElement(finallist, finallist.ingredients, "meat", "cell13");
	addListElement(finallist, finallist.ingredients, "frozen", "cell12");
	addListElement(finallist, finallist.ingredients, "other", "cell14");
	addListElement(finallist, finallist.ingredients, "nonfood", "cell15");
}

function makeGrid(rows, cols) {
	let grid = document.getElementById("grocerymiddle");
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			const gridItem = document.createElement("div");
			gridItem.setAttribute("class", "gridlyfe");
			gridItem.id = `cell${i}${j}`;
			grid.appendChild(gridItem);
		}
	}
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ACTUAL EXECUTING CODE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
submitbutton.addEventListener("click", () => {
	crossCheck(getTags());

	for (let i = 0; i < possiblemeals.length; i++) {
		makeElement("button", "possiblemeal", middle, possiblemeals[i].name);
	}
});

groceries.addEventListener("click", () => {
	makeGroceryList();
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxV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RDtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL21lYWxzLmpzIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcblx0bWFyZ2luOiAwcHg7XG59XG5mb3JtIHtcblx0Zm9udC1zaXplOiAyOHB4O1xuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcblx0cGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5idXR0b24ge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjI1NzdhO1xuXHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCAjMDMyMDM0O1xuXHRjb2xvcjogIzgwZWQ5OTtcbn1cblxuYnV0dG9uOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xufVxuI21haW5ib2R5IHtcblx0bWFyZ2luOiAwcHg7XG5cdGhlaWdodDogMTAwdmg7XG5cdHdpZHRoOiAxMDB2dztcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuI3RpdGxlbG9nbyxcbiNib3R0b20ge1xuXHRmbGV4LWJhc2lzOiAyMCU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGJhY2tncm91bmQtY29sb3I6ICMyMjU3N2E7XG5cdGNvbG9yOiAjODBlZDk5O1xuXHRmb250LXNpemU6IDM2cHg7XG5cdGZvbnQtZmFtaWx5OiBcIkdpbGwgU2Fuc1wiLCBcIkdpbGwgU2FucyBNVFwiLCBDYWxpYnJpLCBcIlRyZWJ1Y2hldCBNU1wiLCBzYW5zLXNlcmlmO1xuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcblx0cGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuI2JvdHRvbSB7XG5cdGNvbG9yOiAjODBlZDk5O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Zm9udC1zaXplOiAxNnB4O1xufVxuXG4jbWlkIHtcblx0ZmxleC1zaHJpbms6IDA7XG5cdG92ZXJmbG93LXk6IGF1dG87XG5cdGZsZXgtYmFzaXM6IDYwJTtcblx0YmFja2dyb3VuZC1jb2xvcjogIzU3Y2M5OTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbiNib3R0b20ge1xuXHRmbGV4LWJhc2lzOiAyMCU7XG5cdGJhY2tncm91bmQtY29sb3I6ICMyMjU3N2E7XG59XG5cbiNtaWRsZWZ0IHtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0Ym9yZGVyLXJpZ2h0OiBzb2xpZCAycHggYmxhY2s7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0ZmxleC1iYXNpczogMjAlO1xuXHRmbGV4LXNocmluazogMDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzU3Y2M5OTtcblx0Y29sb3I6ICMyMjU3N2E7XG59XG5cbiNtaWRkbGUge1xuXHRvdmVyZmxvdy15OiBhdXRvO1xuXHRmbGV4LXNocmluazogMDtcblx0ZmxleC1iYXNpczogNjAlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTdjYzk5O1xuXHRkaXNwbGF5OiBncmlkO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnI7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xuXHRncmlkLWdhcDogOHB4O1xufVxuXG4jbWlkcmlnaHQge1xuXHRib3JkZXItbGVmdDogMnB4IHNvbGlkIGJsYWNrO1xuXHRmbGV4LWdyb3c6IDA7XG5cdGZsZXgtc2hyaW5rOiAwO1xuXHRmbGV4LWJhc2lzOiAyMCU7XG5cdGJhY2tncm91bmQtY29sb3I6ICM1N2NjOTk7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnBvc3NpYmxlbWVhbCB7XG5cdGhlaWdodDogOTAlO1xuXHR3aWR0aDogOTAlO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0bWFyZ2luOiBhdXRvO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjI1NzdhO1xuXHRib3gtc2hhZG93OiAycHggMnB4IDR4IDRweDtcblx0Ym9yZGVyOiAxcHggc29saWQgIzA2MzE0ZDtcbn1cblxuI21lYWxfbGlzdCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdG1hcmdpbjogMjBweDtcblx0Z2FwOiA4cHg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbiNmb3JtY29udGFpbmVyIHtcblx0bWFyZ2luLXRvcDogMjBweDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuI3NlbGVjdGlvbmJveCB7XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdGZvbnQtc2l6ZTogMjBweDtcblx0Zm9udC1mYW1pbHk6IFwiR2lsbCBTYW5zXCIsIFwiR2lsbCBTYW5zIE1UXCIsIENhbGlicmksIFwiVHJlYnVjaGV0IE1TXCIsIHNhbnMtc2VyaWY7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHBhZGRpbmc6IDNweDtcblx0Z2FwOiA4cHg7XG5cdGNvbG9yOiAjMjI1NzdhO1xufVxuXG4jZ3JvY2VyaWVzLFxuI3N1Ym1pdCB7XG5cdHdpZHRoOiA4MCU7XG5cdGhlaWdodDogMzBweDtcblx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRtYXJnaW46IGF1dG87XG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XG5cdHBhZGRpbmc6IGF1dG87XG59XG5cbiNncm9jZXJpZXMge1xuXHRtYXJnaW4tbGVmdDogMzBweDtcbn1cbiNncm9jZXJ5bWlkZGxlIHtcblx0d2lkdGg6IDEwMCU7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtcm93czogMjAlIDgwJTtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcbn1cblxuI2dyb2NlcnltaWRkbGUgPiBkaXYge1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBibGFjaztcblx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xufVxuXG4udGl0bGUge1xuXHRmb250LXdlaWdodDogNzAwO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGZvbnQtc2l6ZTogMjhweDtcblx0Y29sb3I6ICMyMjU3N2E7XG59XG5cbiN0aXRsZTEge1xuXHRncmlkLWFyZWE6IDEvMS8yLzI7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiN0aXRsZTIge1xuXHRncmlkLWFyZWE6IDEvMi8yLzM7XG59XG4jdGl0bGUzIHtcblx0Z3JpZC1hcmVhOiAxLzMvMi80O1xufVxuXG4jdGl0bGU0IHtcblx0Z3JpZC1hcmVhOiAxLzQvMi81O1xufVxuXG4uZ3JpZGx5ZmUge1xuXHRmbGV4LWdyb3c6IDA7XG5cdG92ZXJmbG93LXk6IGF1dG87XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogOHB4O1xufVxuXG4ubGlzdGl0ZW1zIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdHdpZHRoOiA4MCU7XG5cdGNvbG9yOiAjNTdjYzk5O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjI1NzdhO1xuXHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdGJvcmRlcjogMnB4IHNvbGlkICM4MmYzOGQ7XG59XG5cbiNjZWxsMDAsXG4jY2VsbDAxLFxuI2NlbGwwMixcbiNjZWxsMDMsXG4jY2VsbDA0LFxuI2NlbGwwNSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsV0FBVztBQUNaO0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsMEJBQTBCO0NBQzFCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixrQkFBa0I7Q0FDbEIsbUNBQW1DO0NBQ25DLGNBQWM7QUFDZjs7QUFFQTtDQUNDLHdCQUF3QjtBQUN6QjtBQUNBO0NBQ0MsV0FBVztDQUNYLGFBQWE7Q0FDYixZQUFZO0NBQ1osYUFBYTtDQUNiLHNCQUFzQjtBQUN2Qjs7QUFFQTs7Q0FFQyxlQUFlO0NBQ2YsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQix5QkFBeUI7Q0FDekIsY0FBYztDQUNkLGVBQWU7Q0FDZiw2RUFBNkU7Q0FDN0UsMEJBQTBCO0NBQzFCLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsY0FBYztDQUNkLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLHlCQUF5QjtDQUN6QixhQUFhO0NBQ2IsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxlQUFlO0NBQ2YseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLDZCQUE2QjtDQUM3QixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLDhCQUE4QjtDQUM5QixlQUFlO0NBQ2YsY0FBYztDQUNkLHlCQUF5QjtDQUN6QixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsY0FBYztDQUNkLGVBQWU7Q0FDZix5QkFBeUI7Q0FDekIsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsbUNBQW1DO0NBQ25DLHNDQUFzQztDQUN0QyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyw0QkFBNEI7Q0FDNUIsWUFBWTtDQUNaLGNBQWM7Q0FDZCxlQUFlO0NBQ2YseUJBQXlCO0NBQ3pCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsOEJBQThCO0FBQy9COztBQUVBO0NBQ0MsV0FBVztDQUNYLFVBQVU7Q0FDVix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWix5QkFBeUI7Q0FDekIsMEJBQTBCO0NBQzFCLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixZQUFZO0NBQ1osUUFBUTtDQUNSLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2Isc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZiw2RUFBNkU7Q0FDN0UsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixZQUFZO0NBQ1osUUFBUTtDQUNSLGNBQWM7QUFDZjs7QUFFQTs7Q0FFQyxVQUFVO0NBQ1YsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MsV0FBVztDQUNYLGFBQWE7Q0FDYiwyQkFBMkI7Q0FDM0IsOENBQThDO0FBQy9DOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLDZCQUE2QjtDQUM3Qiw4QkFBOEI7QUFDL0I7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyxrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixzQkFBc0I7Q0FDdEIsUUFBUTtBQUNUOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixVQUFVO0NBQ1YsY0FBYztDQUNkLHlCQUF5QjtDQUN6QixrQkFBa0I7Q0FDbEIseUJBQXlCO0FBQzFCOztBQUVBOzs7Ozs7Q0FNQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHVCQUF1QjtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG5cXHRtYXJnaW46IDBweDtcXG59XFxuZm9ybSB7XFxuXFx0Zm9udC1zaXplOiAyOHB4O1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcblxcdHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxuYnV0dG9uIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjI1NzdhO1xcblxcdGJvcmRlci1yYWRpdXM6IDhweDtcXG5cXHRib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggIzAzMjAzNDtcXG5cXHRjb2xvcjogIzgwZWQ5OTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcbiNtYWluYm9keSB7XFxuXFx0bWFyZ2luOiAwcHg7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHR3aWR0aDogMTAwdnc7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jdGl0bGVsb2dvLFxcbiNib3R0b20ge1xcblxcdGZsZXgtYmFzaXM6IDIwJTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzIyNTc3YTtcXG5cXHRjb2xvcjogIzgwZWQ5OTtcXG5cXHRmb250LXNpemU6IDM2cHg7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJHaWxsIFNhbnNcXFwiLCBcXFwiR2lsbCBTYW5zIE1UXFxcIiwgQ2FsaWJyaSwgXFxcIlRyZWJ1Y2hldCBNU1xcXCIsIHNhbnMtc2VyaWY7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuXFx0cGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG4jYm90dG9tIHtcXG5cXHRjb2xvcjogIzgwZWQ5OTtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuI21pZCB7XFxuXFx0ZmxleC1zaHJpbms6IDA7XFxuXFx0b3ZlcmZsb3cteTogYXV0bztcXG5cXHRmbGV4LWJhc2lzOiA2MCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzU3Y2M5OTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcbiNib3R0b20ge1xcblxcdGZsZXgtYmFzaXM6IDIwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjI1NzdhO1xcbn1cXG5cXG4jbWlkbGVmdCB7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRib3JkZXItcmlnaHQ6IHNvbGlkIDJweCBibGFjaztcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGZsZXgtYmFzaXM6IDIwJTtcXG5cXHRmbGV4LXNocmluazogMDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTdjYzk5O1xcblxcdGNvbG9yOiAjMjI1NzdhO1xcbn1cXG5cXG4jbWlkZGxlIHtcXG5cXHRvdmVyZmxvdy15OiBhdXRvO1xcblxcdGZsZXgtc2hyaW5rOiAwO1xcblxcdGZsZXgtYmFzaXM6IDYwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTdjYzk5O1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmcjtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcXG5cXHRncmlkLWdhcDogOHB4O1xcbn1cXG5cXG4jbWlkcmlnaHQge1xcblxcdGJvcmRlci1sZWZ0OiAycHggc29saWQgYmxhY2s7XFxuXFx0ZmxleC1ncm93OiAwO1xcblxcdGZsZXgtc2hyaW5rOiAwO1xcblxcdGZsZXgtYmFzaXM6IDIwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTdjYzk5O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5wb3NzaWJsZW1lYWwge1xcblxcdGhlaWdodDogOTAlO1xcblxcdHdpZHRoOiA5MCU7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRtYXJnaW46IGF1dG87XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzIyNTc3YTtcXG5cXHRib3gtc2hhZG93OiAycHggMnB4IDR4IDRweDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjMDYzMTRkO1xcbn1cXG5cXG4jbWVhbF9saXN0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdG1hcmdpbjogMjBweDtcXG5cXHRnYXA6IDhweDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jZm9ybWNvbnRhaW5lciB7XFxuXFx0bWFyZ2luLXRvcDogMjBweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNzZWxlY3Rpb25ib3gge1xcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiR2lsbCBTYW5zXFxcIiwgXFxcIkdpbGwgU2FucyBNVFxcXCIsIENhbGlicmksIFxcXCJUcmVidWNoZXQgTVNcXFwiLCBzYW5zLXNlcmlmO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAzcHg7XFxuXFx0Z2FwOiA4cHg7XFxuXFx0Y29sb3I6ICMyMjU3N2E7XFxufVxcblxcbiNncm9jZXJpZXMsXFxuI3N1Ym1pdCB7XFxuXFx0d2lkdGg6IDgwJTtcXG5cXHRoZWlnaHQ6IDMwcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogOHB4O1xcblxcdG1hcmdpbjogYXV0bztcXG5cXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xcblxcdHBhZGRpbmc6IGF1dG87XFxufVxcblxcbiNncm9jZXJpZXMge1xcblxcdG1hcmdpbi1sZWZ0OiAzMHB4O1xcbn1cXG4jZ3JvY2VyeW1pZGRsZSB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IDIwJSA4MCU7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcXG59XFxuXFxuI2dyb2NlcnltaWRkbGUgPiBkaXYge1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Ym9yZGVyLXJpZ2h0OiAycHggc29saWQgYmxhY2s7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4udGl0bGUge1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogMjhweDtcXG5cXHRjb2xvcjogIzIyNTc3YTtcXG59XFxuXFxuI3RpdGxlMSB7XFxuXFx0Z3JpZC1hcmVhOiAxLzEvMi8yO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI3RpdGxlMiB7XFxuXFx0Z3JpZC1hcmVhOiAxLzIvMi8zO1xcbn1cXG4jdGl0bGUzIHtcXG5cXHRncmlkLWFyZWE6IDEvMy8yLzQ7XFxufVxcblxcbiN0aXRsZTQge1xcblxcdGdyaWQtYXJlYTogMS80LzIvNTtcXG59XFxuXFxuLmdyaWRseWZlIHtcXG5cXHRmbGV4LWdyb3c6IDA7XFxuXFx0b3ZlcmZsb3cteTogYXV0bztcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDhweDtcXG59XFxuXFxuLmxpc3RpdGVtcyB7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogMTRweDtcXG5cXHR3aWR0aDogODAlO1xcblxcdGNvbG9yOiAjNTdjYzk5O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMyMjU3N2E7XFxuXFx0Ym9yZGVyLXJhZGl1czogOHB4O1xcblxcdGJvcmRlcjogMnB4IHNvbGlkICM4MmYzOGQ7XFxufVxcblxcbiNjZWxsMDAsXFxuI2NlbGwwMSxcXG4jY2VsbDAyLFxcbiNjZWxsMDMsXFxuI2NlbGwwNCxcXG4jY2VsbDA1IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IHsgbWVhbGxpc3QgfTtcbmNsYXNzIE1lYWwge1xuXHRjb25zdHJ1Y3RvcihuYW1lLCB0YWdzLCBpbmdyZWRpZW50cykge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy50YWdzID0gdGFncztcblx0XHR0aGlzLmluZ3JlZGllbnRzID0gaW5ncmVkaWVudHM7XG5cdH1cbn1cbmNsYXNzIEluZ3JlZGllbnRzIHtcblx0Y29uc3RydWN0b3IobmFtZSwgbG9jYXRpb24pIHtcblx0XHQodGhpcy5uYW1lID0gbmFtZSksICh0aGlzLmxvY2F0aW9uID0gbG9jYXRpb24pO1xuXHR9XG59XG5cbmNvbnN0IGNyZWFtID0gbmV3IEluZ3JlZGllbnRzKFwiY3JlYW1cIiwgXCJkYWlyeVwiKTtcbmNvbnN0IGNoaWNrZW5zdG9jayA9IG5ldyBJbmdyZWRpZW50cyhcImNoaWNrZW4gc3RvY2tcIiwgXCJwcm9kdWNlXCIpO1xuY29uc3Qgb25pb24gPSBuZXcgSW5ncmVkaWVudHMoXCJvbmlvblwiLCBcInByb2R1Y2VcIik7XG5jb25zdCBjaGlja2VuID0gbmV3IEluZ3JlZGllbnRzKFwiY2hpY2tlblwiLCBcIm1lYXRcIik7XG5jb25zdCBiYWNvbiA9IG5ldyBJbmdyZWRpZW50cyhcImJhY29uXCIsIFwibWVhdFwiKTtcbmNvbnN0IGNoaWxpX2JlYW5zID0gbmV3IEluZ3JlZGllbnRzKFwiY2hpbGkgYmVhbnNcIiwgXCJwcm9kdWNlXCIpO1xuY29uc3QgZ2FybGljID0gbmV3IEluZ3JlZGllbnRzKFwiZ2FybGljXCIsIFwicHJvZHVjZVwiKTtcbmNvbnN0IGNlbGVyeSA9IG5ldyBJbmdyZWRpZW50cyhcImNlbGVyeVwiLCBcInByb2R1Y2VcIik7XG5jb25zdCBjYXJyb3RzID0gbmV3IEluZ3JlZGllbnRzKFwiY2Fycm90c1wiLCBcInByb2R1Y2VcIik7XG5jb25zdCBjYW5uZWxpbmlfYmVhbnMgPSBuZXcgSW5ncmVkaWVudHMoXCJjYW5uZWxpbmlfYmVhbnNcIiwgXCJwcm9kdWNlXCIpO1xuY29uc3QgdG9tYXRvX3Bhc3RlID0gbmV3IEluZ3JlZGllbnRzKFwidG9tYXRvIHBhc3RlXCIsIFwicHJvZHVjZVwiKTtcbmNvbnN0IGRpY2VkX3RvbWF0b2VzID0gbmV3IEluZ3JlZGllbnRzKFwiRGljZWQgVG9tYXRvc1wiLCBcInByb2R1Y2VcIik7XG5jb25zdCB2ZW5pc29uID0gbmV3IEluZ3JlZGllbnRzKFwiVmVuaXNvblwiLCBcIm1lYXRcIik7XG5jb25zdCBncm91bmRtZWF0ID0gbmV3IEluZ3JlZGllbnRzKFwiR3JvdW5kIG1lYXRcIiwgXCJtZWF0XCIpO1xuY29uc3Qgd29udG9ud3JhcHBlcnMgPSBuZXcgSW5ncmVkaWVudHMoXCJXb250b24gd3JhcHBlcnNcIiwgXCJwcm9kdWNlXCIpO1xuY29uc3QgY2FiYmFnZSA9IG5ldyBJbmdyZWRpZW50cyhcIkNhYmJhZ2VcIiwgXCJwcm9kdWNlXCIpO1xuY29uc3Qgc2FsbW9uID0gbmV3IEluZ3JlZGllbnRzKFwiU2FsbW9uXCIsIFwibWVhdFwiKTtcbmNvbnN0IHBhcGVydG93ZWxzID0gbmV3IEluZ3JlZGllbnRzKFwiUGFwZXIgVG93ZWxzXCIsIFwibm9uZm9vZFwiKTtcblxubGV0IHBhcGVyVG93ZWxzID0gbmV3IE1lYWwoXCJwYXBlciB0b3dlbHNcIiwgW1wibm9uZm9vZFwiXSwgW3BhcGVydG93ZWxzXSk7XG5sZXQgU2FsbW9uID0gbmV3IE1lYWwoXG5cdFwiU2FsbW9uXCIsXG5cdFtcImZpc2hcIiwgXCJzZWFmb29kXCIsIFwiLG1lYXRcIiwgXCJoZWFsdGh5XCJdLFxuXHRbc2FsbW9uXVxuKTtcblxubGV0IHBvdHN0aWNrZXJzID0gbmV3IE1lYWwoXG5cdFwiUG90c3RpY2tlcnNcIixcblx0W1wiaG90XCIsIFwiY3Jpc3B5XCIsIFwic2F2b3J5XCIsIFwiZXRobmljXCJdLFxuXHRbZ3JvdW5kbWVhdCwgd29udG9ud3JhcHBlcnMsIGNhYmJhZ2UsIGNhcnJvdHMsIGdhcmxpY11cbik7XG5sZXQgY2hpY2tlbl9zb3VwID0gbmV3IE1lYWwoXG5cdFwiQ2hpY2tlbiBzb3VwXCIsXG5cdFtcImRpbm5lclwiLCBcInNvdXBcIiwgXCJob3RcIiwgXCJjaGlja2VuXCJdLFxuXHRbY2hpY2tlbnN0b2NrLCBvbmlvbiwgY3JlYW0sIGNhcnJvdHMsIGNlbGVyeSwgY2hpY2tlbl1cbik7XG5cbmxldCB2ZW5pc29uX2NoaWxpID0gbmV3IE1lYWwoXG5cdFwiVmVuaXNvbiBDaGlsaVwiLFxuXHRbXCJ2ZW5pc29uXCIsIFwiY2hpbGlcIiwgXCJob3RcIl0sXG5cblx0W3Zlbmlzb24sIG9uaW9uLCBnYXJsaWMsIGNoaWNrZW5zdG9jaywgY2hpbGlfYmVhbnMsIGRpY2VkX3RvbWF0b2VzXVxuKTtcbmxldCBtYXJyeW1lY2hpY2tlbiA9IG5ldyBNZWFsKFxuXHRcIk1hcnJ5IE1lIENoaWNrZW5cIixcblx0W1wiY2hpY2tlblwiLCBcImNyZWFteVwiLCBcImhvdFwiXSxcblx0W2NoaWNrZW4sIGNyZWFtLCBnYXJsaWMsIGNoaWNrZW5zdG9jaywgY2hpbGlfYmVhbnMsIGRpY2VkX3RvbWF0b2VzXVxuKTtcbmxldCBwYXN0YV9mYWdpb2xlID0gbmV3IE1lYWwoXG5cdFwiUGFzdGFfZmFnaW9sZVwiLFxuXHRbXCJpdGFsaWFuXCIsIFwic291cFwiLCBcImhvdFwiXSxcblxuXHRbYmFjb24sIG9uaW9uLCBnYXJsaWMsIGNoaWNrZW5zdG9jaywgY2FubmVsaW5pX2JlYW5zLCB0b21hdG9fcGFzdGVdXG4pO1xuY29uc3QgbWVhbGxpc3QgPSBbXG5cdHZlbmlzb25fY2hpbGksXG5cdG1hcnJ5bWVjaGlja2VuLFxuXHRjaGlja2VuX3NvdXAsXG5cdHBhc3RhX2ZhZ2lvbGUsXG5cdHBvdHN0aWNrZXJzLFxuXHRTYWxtb24sXG5cdHBhcGVyVG93ZWxzLFxuXTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBtZWFsbGlzdCB9IGZyb20gXCIuL21lYWxzXCI7XG5cbmxldCBwb3NzaWJsZW1lYWxzID0gW107XG4vL2FjdHMgYXMgdGhlIGFycmF5IHRvIGhvbGQgbWVhbHMgdGhhdCBhcmUgc2VsZWN0ZWQgYXMgcG9zc2libGUgb3B0aW9ucywgc3RvcmVzIHRoZW0gYXMgdGhlIGZ1bGwgb2JqZWN0c1xubGV0IHNlbGVjdGVkbWVhbHMgPSBbXTtcbmxldCBmaW5hbGxpc3QgPSBbXTtcbmxldCBsaXN0X29mX21lYWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZWFsX2xpc3RcIik7XG5cbi8vIGdsb2JhbCB2YXJpYWJsZXNcbmxldCBtaWRkbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pZGRsZVwiKTtcbmxldCBjcmVhdGVsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGVfbGlzdFwiKTtcbmNvbnN0IGxpc3RvZk1lYWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZWFsX2xpc3RcIik7XG5sZXQgc3VibWl0YnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRcIik7XG5sZXQgZ3JvY2VyaWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncm9jZXJpZXNcIik7XG5cbi8vT25jZSBzdWJtaXQgYnV0dG9uIGlzIGNsaWNrZWQsIGdvZXMgdGhyb3VnaCBhbmQgZ2V0cyBhbGwgY2hlY2tlZCB2YWx1ZXNcbi8vVHVybnMgdGhlIHZhbHVlcyBpbnRvIGFuIGFycmF5IGNhbGxlZCB0YWdsaXN0LiAgRXZlcnl0aW1lIGl0IGlzIGNsaWNrZWQgaXQgd2lwZXMgaXQgY2xlYW4gYW5kIHJlbWFrZXMgdGhlIGxpc3RcbmZ1bmN0aW9uIGdldFRhZ3MoKSB7XG5cdGxldCB0YWdsaXN0ID0gW107XG5cdGNvbnN0IGNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCdcblx0KTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjaGVja2JveGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dGFnbGlzdC5wdXNoKGNoZWNrYm94ZXNbaV0udmFsdWUpO1xuXHR9XG5cdGlmICh0YWdsaXN0Lmxlbmd0aCA9PSAwKSB7XG5cdFx0YWxlcnQoXCJQbGVhc2UgbWFrZSBhIHNlbGVjdGlvblwiKTtcblx0XHRyZXR1cm47XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIHRhZ2xpc3Q7XG5cdH1cbn1cblxuLy9jaGVja3MgaWYgdGhlIHNlY29uZCBhcnJheSBpcyBhIHN1YnNldCBvZiB0aGUgZmlyc3QgYXJyYXlcbmZ1bmN0aW9uIGlzU3Vic2V0KHRhZ2FycmF5LCBtZWFsYXJyYXkpIHtcblx0cmV0dXJuIHRhZ2FycmF5LmV2ZXJ5KChlbGVtZW50KSA9PiBtZWFsYXJyYXkuaW5jbHVkZXMoZWxlbWVudCkpO1xufVxuLy90aGlzIGNoZWNrcyB0byBzZWUgaWYgdGhlIHRhZyBlbGVtZW50cyBhcmUgaW4gZWFjaCBmb29kIGVsZW1lbnRzXG5mdW5jdGlvbiBjcm9zc0NoZWNrKHRhZ2xpc3QpIHtcblx0bWlkZGxlLmlubmVySFRNTCA9IFwiXCI7XG5cdHBvc3NpYmxlbWVhbHMgPSBbXTtcblxuXHRmb3IgKGxldCBtZWFsIG9mIG1lYWxsaXN0KSB7XG5cdFx0Ly9mb3IgZXZlcnkgbWVhbCBpbiBtZWFsIGxpc3Rcblx0XHQvL2NhbGxzIGlzU3Vic2V0IHRvIHNlZSBpZiB0aGUgdGFnYXJyYXkgbWF0Y2hlcyB0aGUgdGFnIGFycmF5IG9mIHRoYXQgbWVhbC5cblx0XHQvL0lmIHRoZXJlcyBhIG1hdGNoLCBjcmVhdGUgYSBuZXcgY29weSBvZiB0aGUgbWVhbCwgYW5kIHRoZW4gcHV0IGl0IGludG8gYW4gYXJyYXkgb2YgcG9zc2libGUgbWVhbHNcblx0XHRpZiAoaXNTdWJzZXQodGFnbGlzdCwgbWVhbC50YWdzKSA9PSB0cnVlKSB7XG5cdFx0XHRsZXQgcG9zc2libGVtZWFsID0gbWVhbDtcblx0XHRcdHBvc3NpYmxlbWVhbHMucHVzaChwb3NzaWJsZW1lYWwpO1xuXHRcdH1cblx0fVxuXHRpZiAocG9zc2libGVtZWFscy5sZW5ndGggPT09IDApIHtcblx0XHRhbGVydChcIk5vIG1hdGNoZXMgZm91bmQuICBUcnkgYSBkaWZmZXJlbnQgc2VsZWN0aW9uXCIpO1xuXHR9XG59XG5cbi8vbWFrZXMgYnV0dG9ucyBmb3IgdGhlIG1lYWxzIGJhc2VkIG9uIHRoZSB0YWdzIHRoYXQgbWF0Y2hcbmZ1bmN0aW9uIG1ha2VFbGVtZW50KHR5cGUsIGlkZW50aXR5LCB3aGVyZSwgdGV4dCkge1xuXHRsZXQgcG9vcHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuXHRwb29wcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBpZGVudGl0eSk7XG5cdHBvb3BzLmlubmVySFRNTCA9IHRleHQ7XG5cdHdoZXJlLmFwcGVuZChwb29wcyk7XG5cdHBvb3BzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBhZGRUb0dyb2NlcnlMaXN0KHBvb3BzKSk7XG59XG5cbi8vd2hlbiB0aGUgbWVhbCBidXR0b24gaXMgcHJlc3NlZCwgbWFrZSBzdXJlIHRoYXQgaXQgbWF0Y2hlcyBhIG1lYWwsIGFuZCB0aGVuIGFkZCB0aGF0IG1lYWwgb2JqZWN0IHRvIGEgZmluYWwgYXJyYXlcbmZ1bmN0aW9uIGFkZFRvR3JvY2VyeUxpc3QodGhlbWVhbCkge1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IG1lYWxsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYgKHRoZW1lYWwuaW5uZXJIVE1MID09PSBtZWFsbGlzdFtpXS5uYW1lKSB7XG5cdFx0XHRsZXQgZmluYWxtZWFsID0gbWVhbGxpc3RbaV07XG5cdFx0XHRmaW5hbGxpc3QucHVzaChmaW5hbG1lYWwpO1xuXHRcdFx0Y29uc29sZS5sb2coZmluYWxsaXN0KTtcblx0XHR9XG5cdH1cblx0ZGlzcGxheU1lYWxzKCk7XG59XG4vL3JlbW92ZXMgc29tZSBpdGVtIGZyb20gYW4gYXJyYXlcbmZ1bmN0aW9uIFJlbW92ZSh0aGluZ3kpIHtcblx0Y29uc29sZS5sb2coXCJ0aGlzIGlzIGFuIGFycmF5P1wiKTtcblx0Y29uc29sZS5sb2coZmluYWxsaXN0KTtcblx0Y29uc29sZS5sb2coXCJwb3NpdGlvbiBpbiBhcnJheVwiKTtcblx0ZmluYWxsaXN0LnNwbGljZSh0aGluZ3ksIDEpO1xuXHRkaXNwbGF5TWVhbHMoZmluYWxsaXN0KTtcbn1cbi8vZGlzcGxheXMgdGhlIG1lYWxzIGluIGZpbmFsbGlzdCBhcyBidXR0b25zXG5mdW5jdGlvbiBkaXNwbGF5TWVhbHMoKSB7XG5cdGxpc3Rfb2ZfbWVhbHMuaW5uZXJIVE1MID0gXCJcIjtcblx0Y29uc29sZS5sb2coXCJUaGlzIGlzIHRoZSBiZWdpbmlubmluZyBvZiBkaXNwbGF5IG1lYWxzIFwiICsgZmluYWxsaXN0KTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBmaW5hbGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgZmluYWxidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRcdGZpbmFsYnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGlzdG1lYWxcIik7XG5cdFx0ZmluYWxidXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJidXR0b25cIltpXSk7XG5cdFx0ZmluYWxidXR0b24uaW5uZXJIVE1MID0gZmluYWxsaXN0W2ldLm5hbWU7XG5cdFx0bGlzdF9vZl9tZWFscy5hcHBlbmQoZmluYWxidXR0b24pO1xuXHRcdGZpbmFsYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuXHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBmaW5hbGxpc3RbaV0uaW5ncmVkaWVudHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZmluYWxidXR0b24uaW5uZXJIVE1MICs9IGZpbmFsbGlzdFtpXS5pbmdyZWRpZW50c1tqXS5uYW1lICsgXCIgXCI7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0ZmluYWxidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuXHRcdFx0ZmluYWxidXR0b24uaW5uZXJIVE1MID0gZmluYWxsaXN0W2ldLm5hbWU7XG5cdFx0fSk7XG5cdFx0ZmluYWxidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdGZpbmFsbGlzdC5zcGxpY2UoW2ldLCAxKTtcblx0XHRcdGRpc3BsYXlNZWFscygpO1xuXHRcdH0pO1xuXHR9XG59XG5cbi8vYWRkcyB0aGUgdGl0bGVzIHRvIHRoZSBncm9jZXJ5IGxpc3RcbmZ1bmN0aW9uIGFkZG1pZGRsZVRpdGxlKGRvYywgaWQsIGNscywgaW5uZXIsIGNlbGwpIHtcblx0bGV0IGJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNlbGwpO1xuXHRkb2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRkb2Muc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuXHRkb2Muc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgY2xzKTtcblx0ZG9jLmlubmVySFRNTCA9IGlubmVyO1xuXHRib3guYXBwZW5kKGRvYyk7XG59XG5cbmZ1bmN0aW9uIGFkZExpc3RFbGVtZW50KGZpbmFsbGlzdCwgaW5ncmVkaWVudHMsIGxvY2F0aW9uLCBjZWxsKSB7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgZmluYWxsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBmaW5hbGxpc3RbaV0uaW5ncmVkaWVudHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmIChmaW5hbGxpc3RbaV0uaW5ncmVkaWVudHNbal0ubG9jYXRpb24gPT09IGxvY2F0aW9uKSB7XG5cdFx0XHRcdGxldCBwcm9kdWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2VsbCk7IC8vZ2V0cyB0aGUgY2VsbCBhbmQgYXNzaWducyBpdCBhIG5hbWVcblx0XHRcdFx0bGV0IHByb2R1Y2VpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0XHRcdFx0cHJvZHVjZWl0ZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsaXN0aXRlbXNcIik7XG5cdFx0XHRcdHByb2R1Y2VpdGVtLmlubmVySFRNTCA9IGZpbmFsbGlzdFtpXS5pbmdyZWRpZW50c1tqXS5uYW1lO1xuXHRcdFx0XHRwcm9kdWNlaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0XHRcdHByb2R1Y2VpdGVtLnJlbW92ZSgpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRwcm9kdWNlLmFwcGVuZChwcm9kdWNlaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIG1ha2VHcm9jZXJ5TGlzdCgpIHtcblx0Ly9jb252ZXJ0IHRoZSBtaWRkbGUgcGFnZSB0byB0aGUgbGlzdCBvZiBncm9jZXJpZXNcblx0bWlkZGxlLmlubmVySFRNTCA9IFwiXCI7XG5cdG1pZGRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImdyb2NlcnltaWRkbGVcIik7XG5cdG1ha2VHcmlkKDIsIDYpO1xuXHRhZGRtaWRkbGVUaXRsZShcImRhaXJ5dGl0bGVcIiwgXCJ0aXRsZTFcIiwgXCJ0aXRsZVwiLCBcIkRhaXJ5XCIsIFwiY2VsbDAwXCIpO1xuXHRhZGRtaWRkbGVUaXRsZShcIlByb2R1Y2VcIiwgXCJ0aXRsZTJcIiwgXCJ0aXRsZVwiLCBcIlByb2R1Y2VcIiwgXCJjZWxsMDFcIik7XG5cdGFkZG1pZGRsZVRpdGxlKFwiRnJvemVuXCIsIFwidGl0bGUzXCIsIFwidGl0bGVcIiwgXCJGcm96ZW5cIiwgXCJjZWxsMDJcIik7XG5cdGFkZG1pZGRsZVRpdGxlKFwiQ2FubmVkXCIsIFwidGl0bGU0XCIsIFwidGl0bGVcIiwgXCJNZWF0XCIsIFwiY2VsbDAzXCIpO1xuXHRhZGRtaWRkbGVUaXRsZShcIk90aGVyXCIsIFwidGl0bGU0XCIsIFwidGl0bGVcIiwgXCJPdGhlclwiLCBcImNlbGwwNFwiKTtcblx0YWRkbWlkZGxlVGl0bGUoXCJOb24tRm9vZFwiLCBcInRpdGxlNFwiLCBcInRpdGxlXCIsIFwiTm9uLUZvb2RcIiwgXCJjZWxsMDVcIik7XG5cdGFkZExpc3RFbGVtZW50KGZpbmFsbGlzdCwgZmluYWxsaXN0LmluZ3JlZGllbnRzLCBcInByb2R1Y2VcIiwgXCJjZWxsMTFcIik7XG5cdGFkZExpc3RFbGVtZW50KGZpbmFsbGlzdCwgZmluYWxsaXN0LmluZ3JlZGllbnRzLCBcImRhaXJ5XCIsIFwiY2VsbDEwXCIpO1xuXHRhZGRMaXN0RWxlbWVudChmaW5hbGxpc3QsIGZpbmFsbGlzdC5pbmdyZWRpZW50cywgXCJtZWF0XCIsIFwiY2VsbDEzXCIpO1xuXHRhZGRMaXN0RWxlbWVudChmaW5hbGxpc3QsIGZpbmFsbGlzdC5pbmdyZWRpZW50cywgXCJmcm96ZW5cIiwgXCJjZWxsMTJcIik7XG5cdGFkZExpc3RFbGVtZW50KGZpbmFsbGlzdCwgZmluYWxsaXN0LmluZ3JlZGllbnRzLCBcIm90aGVyXCIsIFwiY2VsbDE0XCIpO1xuXHRhZGRMaXN0RWxlbWVudChmaW5hbGxpc3QsIGZpbmFsbGlzdC5pbmdyZWRpZW50cywgXCJub25mb29kXCIsIFwiY2VsbDE1XCIpO1xufVxuXG5mdW5jdGlvbiBtYWtlR3JpZChyb3dzLCBjb2xzKSB7XG5cdGxldCBncmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncm9jZXJ5bWlkZGxlXCIpO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuXHRcdGZvciAobGV0IGogPSAwOyBqIDwgY29sczsgaisrKSB7XG5cdFx0XHRjb25zdCBncmlkSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRncmlkSXRlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImdyaWRseWZlXCIpO1xuXHRcdFx0Z3JpZEl0ZW0uaWQgPSBgY2VsbCR7aX0ke2p9YDtcblx0XHRcdGdyaWQuYXBwZW5kQ2hpbGQoZ3JpZEl0ZW0pO1xuXHRcdH1cblx0fVxufVxuXG4vL35+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fkFDVFVBTCBFWEVDVVRJTkcgQ09ERX5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5cbnN1Ym1pdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRjcm9zc0NoZWNrKGdldFRhZ3MoKSk7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwb3NzaWJsZW1lYWxzLmxlbmd0aDsgaSsrKSB7XG5cdFx0bWFrZUVsZW1lbnQoXCJidXR0b25cIiwgXCJwb3NzaWJsZW1lYWxcIiwgbWlkZGxlLCBwb3NzaWJsZW1lYWxzW2ldLm5hbWUpO1xuXHR9XG59KTtcblxuZ3JvY2VyaWVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdG1ha2VHcm9jZXJ5TGlzdCgpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=