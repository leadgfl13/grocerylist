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
	flex-grow: 0;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC,WAAW;AACZ;AACA;CACC,eAAe;CACf,0BAA0B;CAC1B,kBAAkB;AACnB;;AAEA;CACC,yBAAyB;CACzB,kBAAkB;CAClB,mCAAmC;CACnC,cAAc;AACf;;AAEA;CACC,wBAAwB;AACzB;AACA;CACC,WAAW;CACX,aAAa;CACb,YAAY;CACZ,aAAa;CACb,sBAAsB;AACvB;;AAEA;;CAEC,eAAe;CACf,aAAa;CACb,mBAAmB;CACnB,yBAAyB;CACzB,cAAc;CACd,eAAe;CACf,6EAA6E;CAC7E,0BAA0B;CAC1B,kBAAkB;AACnB;AACA;CACC,cAAc;CACd,uBAAuB;CACvB,mBAAmB;CACnB,eAAe;AAChB;;AAEA;CACC,cAAc;CACd,gBAAgB;CAChB,eAAe;CACf,yBAAyB;CACzB,aAAa;CACb,mBAAmB;AACpB;AACA;CACC,eAAe;CACf,yBAAyB;AAC1B;;AAEA;CACC,gBAAgB;CAChB,6BAA6B;CAC7B,aAAa;CACb,sBAAsB;CACtB,8BAA8B;CAC9B,eAAe;CACf,cAAc;CACd,yBAAyB;CACzB,cAAc;AACf;;AAEA;CACC,gBAAgB;CAChB,cAAc;CACd,YAAY;CACZ,eAAe;CACf,yBAAyB;CACzB,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,mCAAmC;CACnC,sCAAsC;CACtC,aAAa;AACd;;AAEA;CACC,4BAA4B;CAC5B,YAAY;CACZ,cAAc;CACd,eAAe;CACf,yBAAyB;CACzB,aAAa;CACb,sBAAsB;CACtB,8BAA8B;AAC/B;;AAEA;CACC,WAAW;CACX,UAAU;CACV,uBAAuB;CACvB,mBAAmB;CACnB,YAAY;CACZ,yBAAyB;CACzB,0BAA0B;CAC1B,yBAAyB;AAC1B;;AAEA;CACC,aAAa;CACb,YAAY;CACZ,QAAQ;CACR,sBAAsB;AACvB;;AAEA;CACC,gBAAgB;CAChB,aAAa;CACb,sBAAsB;AACvB;;AAEA;CACC,gBAAgB;CAChB,eAAe;CACf,6EAA6E;CAC7E,aAAa;CACb,mBAAmB;CACnB,YAAY;CACZ,QAAQ;CACR,cAAc;AACf;;AAEA;;CAEC,UAAU;CACV,YAAY;CACZ,kBAAkB;CAClB,YAAY;CACZ,mBAAmB;CACnB,aAAa;AACd;;AAEA;CACC,iBAAiB;AAClB;AACA;CACC,WAAW;CACX,aAAa;CACb,2BAA2B;CAC3B,8CAA8C;AAC/C;;AAEA;CACC,mBAAmB;CACnB,6BAA6B;CAC7B,8BAA8B;AAC/B;;AAEA;CACC,gBAAgB;CAChB,kBAAkB;CAClB,eAAe;CACf,cAAc;AACf;;AAEA;CACC,kBAAkB;CAClB,kBAAkB;AACnB;AACA;CACC,kBAAkB;AACnB;AACA;CACC,kBAAkB;AACnB;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,YAAY;CACZ,gBAAgB;CAChB,aAAa;CACb,mBAAmB;CACnB,sBAAsB;CACtB,QAAQ;AACT;;AAEA;CACC,kBAAkB;CAClB,eAAe;CACf,UAAU;CACV,cAAc;CACd,yBAAyB;CACzB,kBAAkB;CAClB,yBAAyB;AAC1B;;AAEA;;;;;;CAMC,aAAa;CACb,mBAAmB;CACnB,uBAAuB;AACxB","sourcesContent":["body {\n\tmargin: 0px;\n}\nform {\n\tfont-size: 28px;\n\ttext-decoration: underline;\n\tpadding-left: 10px;\n}\n\nbutton {\n\tbackground-color: #22577a;\n\tborder-radius: 8px;\n\tbox-shadow: 2px 2px 2px 2px #032034;\n\tcolor: #80ed99;\n}\n\nbutton:hover {\n\tbackground-color: yellow;\n}\n#mainbody {\n\tmargin: 0px;\n\theight: 100vh;\n\twidth: 100vw;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n#titlelogo,\n#bottom {\n\tflex-basis: 20%;\n\tdisplay: flex;\n\talign-items: center;\n\tbackground-color: #22577a;\n\tcolor: #80ed99;\n\tfont-size: 36px;\n\tfont-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n\ttext-decoration: underline;\n\tpadding-left: 20px;\n}\n#bottom {\n\tcolor: #80ed99;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-size: 16px;\n}\n\n#mid {\n\tflex-shrink: 0;\n\toverflow-y: auto;\n\tflex-basis: 60%;\n\tbackground-color: #57cc99;\n\tdisplay: flex;\n\tflex-direction: row;\n}\n#bottom {\n\tflex-basis: 20%;\n\tbackground-color: #22577a;\n}\n\n#midleft {\n\tfont-weight: 700;\n\tborder-right: solid 2px black;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tflex-basis: 20%;\n\tflex-shrink: 0;\n\tbackground-color: #57cc99;\n\tcolor: #22577a;\n}\n\n#middle {\n\toverflow-y: auto;\n\tflex-shrink: 0;\n\tflex-grow: 0;\n\tflex-basis: 60%;\n\tbackground-color: #57cc99;\n\tdisplay: grid;\n\tjustify-content: center;\n\talign-items: center;\n\tgrid-template-rows: 1fr 1fr 1fr 1fr;\n\tgrid-template-columns: 1fr 1fr 1fr 1fr;\n\tgrid-gap: 8px;\n}\n\n#midright {\n\tborder-left: 2px solid black;\n\tflex-grow: 0;\n\tflex-shrink: 0;\n\tflex-basis: 20%;\n\tbackground-color: #57cc99;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n}\n\n.possiblemeal {\n\theight: 90%;\n\twidth: 90%;\n\tjustify-content: center;\n\talign-items: center;\n\tmargin: auto;\n\tbackground-color: #22577a;\n\tbox-shadow: 2px 2px 4x 4px;\n\tborder: 1px solid #06314d;\n}\n\n#meal_list {\n\tdisplay: flex;\n\tmargin: 20px;\n\tgap: 8px;\n\tflex-direction: column;\n}\n\n#formcontainer {\n\tmargin-top: 20px;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n#selectionbox {\n\tfont-weight: 400;\n\tfont-size: 20px;\n\tfont-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: 3px;\n\tgap: 8px;\n\tcolor: #22577a;\n}\n\n#groceries,\n#submit {\n\twidth: 80%;\n\theight: 30px;\n\tborder-radius: 8px;\n\tmargin: auto;\n\tmargin-bottom: 20px;\n\tpadding: auto;\n}\n\n#groceries {\n\tmargin-left: 30px;\n}\n#grocerymiddle {\n\twidth: 100%;\n\tdisplay: grid;\n\tgrid-template-rows: 20% 80%;\n\tgrid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\n}\n\n#grocerymiddle > div {\n\talign-items: center;\n\tborder-right: 2px solid black;\n\tborder-bottom: 2px solid black;\n}\n\n.title {\n\tfont-weight: 700;\n\ttext-align: center;\n\tfont-size: 28px;\n\tcolor: #22577a;\n}\n\n#title1 {\n\tgrid-area: 1/1/2/2;\n\ttext-align: center;\n}\n#title2 {\n\tgrid-area: 1/2/2/3;\n}\n#title3 {\n\tgrid-area: 1/3/2/4;\n}\n\n#title4 {\n\tgrid-area: 1/4/2/5;\n}\n\n.gridlyfe {\n\tflex-grow: 0;\n\toverflow-y: auto;\n\tdisplay: flex;\n\talign-items: center;\n\tflex-direction: column;\n\tgap: 8px;\n}\n\n.listitems {\n\ttext-align: center;\n\tfont-size: 14px;\n\twidth: 80%;\n\tcolor: #57cc99;\n\tbackground-color: #22577a;\n\tborder-radius: 8px;\n\tborder: 2px solid #82f38d;\n}\n\n#cell00,\n#cell01,\n#cell02,\n#cell03,\n#cell04,\n#cell05 {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n"],"sourceRoot":""}]);
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
const icecream = new Ingredients("Ice Cream", "frozen");
const popsicles = new Ingredients("Popsicles", "frozen");

let paperTowels = new Meal("paper towels", ["nonfood", "all"], [papertowels]);
let iceCream = new Meal("Ice Cream", ["frozen", "all"], [icecream]);
let Popsicles = new Meal("Popsicles", ["frozen", "all"], [popsicles]);

let Salmon = new Meal(
	"Salmon",
	["fish", "seafood", ",meat", "healthy", "all"],
	[salmon]
);

let potstickers = new Meal(
	"Potstickers",
	["hot", "crispy", "savory", "ethnic", "all"],
	[groundmeat, wontonwrappers, cabbage, carrots, garlic]
);
let chicken_soup = new Meal(
	"Chicken soup",
	["dinner", "soup", "hot", "chicken", "all"],
	[chickenstock, onion, cream, carrots, celery, chicken]
);

let venison_chili = new Meal(
	"Venison Chili",
	["venison", "chili", "hot", "all"],

	[venison, onion, garlic, chickenstock, chili_beans, diced_tomatoes]
);
let marrymechicken = new Meal(
	"Marry Me Chicken",
	["chicken", "creamy", "hot", "all"],
	[chicken, cream, garlic, chickenstock, chili_beans, diced_tomatoes]
);
let pasta_fagiole = new Meal(
	"Pasta_fagiole",
	["italian", "soup", "hot", "all"],

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
	iceCream,
	Popsicles,
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
let finalingredients = [];

let list_of_meals = document.getElementById("meal_list");
let checkboxes = document.querySelectorAll('input[type="checkbox"]');
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
		let taglist = [];
		const checkboxes = document.querySelectorAll(
			'input[type="checkbox"]:checked'
		);
		for (let i = 0; i < checkboxes.length; i++) {
			checkboxes[i].checked = false;
		}

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

function addListElement(finalingredients, location, cell) {
	for (let j = 0; j < finalingredients.length; j++) {
		if (finalingredients[j].location === location) {
			let produce = document.getElementById(cell); //gets the cell and assigns it a name
			let produceitem = document.createElement("button");
			produceitem.setAttribute("class", "listitems");
			produceitem.innerHTML = finalingredients[j].name;
			produceitem.addEventListener("click", () => {
				produceitem.remove();
			});

			produce.append(produceitem);
		}
	}
}

function makeGroceryList() {
	//convert the middle page to the list of groceries
	middle.innerHTML = "";
	for (let i = 0; i < finallist.length; i++) {
		for (let j = 0; j < finallist[i].ingredients.length; j++) {
			finalingredients.push(finallist[i].ingredients[j]);
		}
	}
	console.log(finalingredients);

	finalingredients.sort((a, b) => {
		if (a.name < b.name) {
			return -1;
		} else if (a.name > b.name) {
			return 1;
		} else {
			return 0;
		}
	});
	for (let i = 0; i < finalingredients.length; i++) {
		console.log(finalingredients[i].name);
	}
	console.log(finallist);
	middle.setAttribute("id", "grocerymiddle");
	makeGrid(2, 6);
	addmiddleTitle("dairytitle", "title1", "title", "Dairy", "cell00");
	addmiddleTitle("Produce", "title2", "title", "Produce", "cell01");
	addmiddleTitle("Frozen", "title3", "title", "Frozen", "cell02");
	addmiddleTitle("Canned", "title4", "title", "Meat", "cell03");
	addmiddleTitle("Other", "title4", "title", "Other", "cell04");
	addmiddleTitle("Non-Food", "title4", "title", "Non-Food", "cell05");
	addListElement(finalingredients, "produce", "cell11");
	addListElement(finalingredients, "dairy", "cell10");
	addListElement(finalingredients, "meat", "cell13");
	addListElement(finalingredients, "frozen", "cell12");
	addListElement(finalingredients, "other", "cell14");
	addListElement(finalingredients, "nonfood", "cell15");
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

//runs the function when a tag is clicked instead of the submit button
for (let i = 0; i < checkboxes.length; i++) {
	checkboxes[i].addEventListener("click", () => {
		crossCheck(getTags());
		possiblemeals.sort((a, b) => {
			if (a.name < b.name) {
				return -1;
			} else if (a.name > b.name) {
				return 1;
			} else {
				return 0;
			}
		}); //alphabetizes the array

		for (let i = 0; i < possiblemeals.length; i++) {
			makeElement("button", "possiblemeal", middle, possiblemeals[i].name);
		}
	});
}
groceries.addEventListener("click", () => {
	makeGroceryList();
});

submitbutton.addEventListener("click", () => {
	crossCheck(getTags());
	possiblemeals.sort((a, b) => {
		if (a.name < b.name) {
			return -1;
		} else if (a.name > b.name) {
			return 1;
		} else {
			return 0;
		}
	}); //alphabetizes the array

	for (let i = 0; i < possiblemeals.length; i++) {
		makeElement("button", "possiblemeal", middle, possiblemeals[i].name);
	}
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxh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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLFVBQVU7QUFDM0Isa0JBQWtCLFVBQVU7QUFDNUI7QUFDQTtBQUNBLHdCQUF3QixFQUFFLEVBQUUsRUFBRTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGdCQUFnQix1QkFBdUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRyxHQUFHOztBQUVOLGtCQUFrQiwwQkFBMEI7QUFDNUM7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEVBQUUsR0FBRzs7QUFFTCxpQkFBaUIsMEJBQTBCO0FBQzNDO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvbWVhbHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuXHRtYXJnaW46IDBweDtcbn1cbmZvcm0ge1xuXHRmb250LXNpemU6IDI4cHg7XG5cdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuXHRwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmJ1dHRvbiB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMyMjU3N2E7XG5cdGJvcmRlci1yYWRpdXM6IDhweDtcblx0Ym94LXNoYWRvdzogMnB4IDJweCAycHggMnB4ICMwMzIwMzQ7XG5cdGNvbG9yOiAjODBlZDk5O1xufVxuXG5idXR0b246aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG59XG4jbWFpbmJvZHkge1xuXHRtYXJnaW46IDBweDtcblx0aGVpZ2h0OiAxMDB2aDtcblx0d2lkdGg6IDEwMHZ3O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jdGl0bGVsb2dvLFxuI2JvdHRvbSB7XG5cdGZsZXgtYmFzaXM6IDIwJTtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0YmFja2dyb3VuZC1jb2xvcjogIzIyNTc3YTtcblx0Y29sb3I6ICM4MGVkOTk7XG5cdGZvbnQtc2l6ZTogMzZweDtcblx0Zm9udC1mYW1pbHk6IFwiR2lsbCBTYW5zXCIsIFwiR2lsbCBTYW5zIE1UXCIsIENhbGlicmksIFwiVHJlYnVjaGV0IE1TXCIsIHNhbnMtc2VyaWY7XG5cdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuXHRwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG4jYm90dG9tIHtcblx0Y29sb3I6ICM4MGVkOTk7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRmb250LXNpemU6IDE2cHg7XG59XG5cbiNtaWQge1xuXHRmbGV4LXNocmluazogMDtcblx0b3ZlcmZsb3cteTogYXV0bztcblx0ZmxleC1iYXNpczogNjAlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTdjYzk5O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuI2JvdHRvbSB7XG5cdGZsZXgtYmFzaXM6IDIwJTtcblx0YmFja2dyb3VuZC1jb2xvcjogIzIyNTc3YTtcbn1cblxuI21pZGxlZnQge1xuXHRmb250LXdlaWdodDogNzAwO1xuXHRib3JkZXItcmlnaHQ6IHNvbGlkIDJweCBibGFjaztcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRmbGV4LWJhc2lzOiAyMCU7XG5cdGZsZXgtc2hyaW5rOiAwO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTdjYzk5O1xuXHRjb2xvcjogIzIyNTc3YTtcbn1cblxuI21pZGRsZSB7XG5cdG92ZXJmbG93LXk6IGF1dG87XG5cdGZsZXgtc2hyaW5rOiAwO1xuXHRmbGV4LWdyb3c6IDA7XG5cdGZsZXgtYmFzaXM6IDYwJTtcblx0YmFja2dyb3VuZC1jb2xvcjogIzU3Y2M5OTtcblx0ZGlzcGxheTogZ3JpZDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcblx0Z3JpZC1nYXA6IDhweDtcbn1cblxuI21pZHJpZ2h0IHtcblx0Ym9yZGVyLWxlZnQ6IDJweCBzb2xpZCBibGFjaztcblx0ZmxleC1ncm93OiAwO1xuXHRmbGV4LXNocmluazogMDtcblx0ZmxleC1iYXNpczogMjAlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTdjYzk5O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5wb3NzaWJsZW1lYWwge1xuXHRoZWlnaHQ6IDkwJTtcblx0d2lkdGg6IDkwJTtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdG1hcmdpbjogYXV0bztcblx0YmFja2dyb3VuZC1jb2xvcjogIzIyNTc3YTtcblx0Ym94LXNoYWRvdzogMnB4IDJweCA0eCA0cHg7XG5cdGJvcmRlcjogMXB4IHNvbGlkICMwNjMxNGQ7XG59XG5cbiNtZWFsX2xpc3Qge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRtYXJnaW46IDIwcHg7XG5cdGdhcDogOHB4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jZm9ybWNvbnRhaW5lciB7XG5cdG1hcmdpbi10b3A6IDIwcHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbiNzZWxlY3Rpb25ib3gge1xuXHRmb250LXdlaWdodDogNDAwO1xuXHRmb250LXNpemU6IDIwcHg7XG5cdGZvbnQtZmFtaWx5OiBcIkdpbGwgU2Fuc1wiLCBcIkdpbGwgU2FucyBNVFwiLCBDYWxpYnJpLCBcIlRyZWJ1Y2hldCBNU1wiLCBzYW5zLXNlcmlmO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRwYWRkaW5nOiAzcHg7XG5cdGdhcDogOHB4O1xuXHRjb2xvcjogIzIyNTc3YTtcbn1cblxuI2dyb2NlcmllcyxcbiNzdWJtaXQge1xuXHR3aWR0aDogODAlO1xuXHRoZWlnaHQ6IDMwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDhweDtcblx0bWFyZ2luOiBhdXRvO1xuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuXHRwYWRkaW5nOiBhdXRvO1xufVxuXG4jZ3JvY2VyaWVzIHtcblx0bWFyZ2luLWxlZnQ6IDMwcHg7XG59XG4jZ3JvY2VyeW1pZGRsZSB7XG5cdHdpZHRoOiAxMDAlO1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLXJvd3M6IDIwJSA4MCU7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XG59XG5cbiNncm9jZXJ5bWlkZGxlID4gZGl2IHtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Ym9yZGVyLXJpZ2h0OiAycHggc29saWQgYmxhY2s7XG5cdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcbn1cblxuLnRpdGxlIHtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LXNpemU6IDI4cHg7XG5cdGNvbG9yOiAjMjI1NzdhO1xufVxuXG4jdGl0bGUxIHtcblx0Z3JpZC1hcmVhOiAxLzEvMi8yO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jdGl0bGUyIHtcblx0Z3JpZC1hcmVhOiAxLzIvMi8zO1xufVxuI3RpdGxlMyB7XG5cdGdyaWQtYXJlYTogMS8zLzIvNDtcbn1cblxuI3RpdGxlNCB7XG5cdGdyaWQtYXJlYTogMS80LzIvNTtcbn1cblxuLmdyaWRseWZlIHtcblx0ZmxleC1ncm93OiAwO1xuXHRvdmVyZmxvdy15OiBhdXRvO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDhweDtcbn1cblxuLmxpc3RpdGVtcyB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHR3aWR0aDogODAlO1xuXHRjb2xvcjogIzU3Y2M5OTtcblx0YmFja2dyb3VuZC1jb2xvcjogIzIyNTc3YTtcblx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRib3JkZXI6IDJweCBzb2xpZCAjODJmMzhkO1xufVxuXG4jY2VsbDAwLFxuI2NlbGwwMSxcbiNjZWxsMDIsXG4jY2VsbDAzLFxuI2NlbGwwNCxcbiNjZWxsMDUge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLFdBQVc7QUFDWjtBQUNBO0NBQ0MsZUFBZTtDQUNmLDBCQUEwQjtDQUMxQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsa0JBQWtCO0NBQ2xCLG1DQUFtQztDQUNuQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyx3QkFBd0I7QUFDekI7QUFDQTtDQUNDLFdBQVc7Q0FDWCxhQUFhO0NBQ2IsWUFBWTtDQUNaLGFBQWE7Q0FDYixzQkFBc0I7QUFDdkI7O0FBRUE7O0NBRUMsZUFBZTtDQUNmLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIseUJBQXlCO0NBQ3pCLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsNkVBQTZFO0NBQzdFLDBCQUEwQjtDQUMxQixrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLGNBQWM7Q0FDZCx1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZix5QkFBeUI7Q0FDekIsYUFBYTtDQUNiLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsZUFBZTtDQUNmLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQiw2QkFBNkI7Q0FDN0IsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qiw4QkFBOEI7Q0FDOUIsZUFBZTtDQUNmLGNBQWM7Q0FDZCx5QkFBeUI7Q0FDekIsY0FBYztBQUNmOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGNBQWM7Q0FDZCxZQUFZO0NBQ1osZUFBZTtDQUNmLHlCQUF5QjtDQUN6QixhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQixtQ0FBbUM7Q0FDbkMsc0NBQXNDO0NBQ3RDLGFBQWE7QUFDZDs7QUFFQTtDQUNDLDRCQUE0QjtDQUM1QixZQUFZO0NBQ1osY0FBYztDQUNkLGVBQWU7Q0FDZix5QkFBeUI7Q0FDekIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qiw4QkFBOEI7QUFDL0I7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsVUFBVTtDQUNWLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaLHlCQUF5QjtDQUN6QiwwQkFBMEI7Q0FDMUIseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLFlBQVk7Q0FDWixRQUFRO0NBQ1Isc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLDZFQUE2RTtDQUM3RSxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWixRQUFRO0NBQ1IsY0FBYztBQUNmOztBQUVBOztDQUVDLFVBQVU7Q0FDVixZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsYUFBYTtBQUNkOztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsYUFBYTtDQUNiLDJCQUEyQjtDQUMzQiw4Q0FBOEM7QUFDL0M7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsNkJBQTZCO0NBQzdCLDhCQUE4QjtBQUMvQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHNCQUFzQjtDQUN0QixRQUFRO0FBQ1Q7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLFVBQVU7Q0FDVixjQUFjO0NBQ2QseUJBQXlCO0NBQ3pCLGtCQUFrQjtDQUNsQix5QkFBeUI7QUFDMUI7O0FBRUE7Ozs7OztDQU1DLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsdUJBQXVCO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcblxcdG1hcmdpbjogMHB4O1xcbn1cXG5mb3JtIHtcXG5cXHRmb250LXNpemU6IDI4cHg7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuXFx0cGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG5cXG5idXR0b24ge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMyMjU3N2E7XFxuXFx0Ym9yZGVyLXJhZGl1czogOHB4O1xcblxcdGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCAjMDMyMDM0O1xcblxcdGNvbG9yOiAjODBlZDk5O1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG59XFxuI21haW5ib2R5IHtcXG5cXHRtYXJnaW46IDBweDtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiN0aXRsZWxvZ28sXFxuI2JvdHRvbSB7XFxuXFx0ZmxleC1iYXNpczogMjAlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjI1NzdhO1xcblxcdGNvbG9yOiAjODBlZDk5O1xcblxcdGZvbnQtc2l6ZTogMzZweDtcXG5cXHRmb250LWZhbWlseTogXFxcIkdpbGwgU2Fuc1xcXCIsIFxcXCJHaWxsIFNhbnMgTVRcXFwiLCBDYWxpYnJpLCBcXFwiVHJlYnVjaGV0IE1TXFxcIiwgc2Fucy1zZXJpZjtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG5cXHRwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcbiNib3R0b20ge1xcblxcdGNvbG9yOiAjODBlZDk5O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4jbWlkIHtcXG5cXHRmbGV4LXNocmluazogMDtcXG5cXHRvdmVyZmxvdy15OiBhdXRvO1xcblxcdGZsZXgtYmFzaXM6IDYwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTdjYzk5O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuI2JvdHRvbSB7XFxuXFx0ZmxleC1iYXNpczogMjAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMyMjU3N2E7XFxufVxcblxcbiNtaWRsZWZ0IHtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdGJvcmRlci1yaWdodDogc29saWQgMnB4IGJsYWNrO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0ZmxleC1iYXNpczogMjAlO1xcblxcdGZsZXgtc2hyaW5rOiAwO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM1N2NjOTk7XFxuXFx0Y29sb3I6ICMyMjU3N2E7XFxufVxcblxcbiNtaWRkbGUge1xcblxcdG92ZXJmbG93LXk6IGF1dG87XFxuXFx0ZmxleC1zaHJpbms6IDA7XFxuXFx0ZmxleC1ncm93OiAwO1xcblxcdGZsZXgtYmFzaXM6IDYwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTdjYzk5O1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmcjtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcXG5cXHRncmlkLWdhcDogOHB4O1xcbn1cXG5cXG4jbWlkcmlnaHQge1xcblxcdGJvcmRlci1sZWZ0OiAycHggc29saWQgYmxhY2s7XFxuXFx0ZmxleC1ncm93OiAwO1xcblxcdGZsZXgtc2hyaW5rOiAwO1xcblxcdGZsZXgtYmFzaXM6IDIwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTdjYzk5O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5wb3NzaWJsZW1lYWwge1xcblxcdGhlaWdodDogOTAlO1xcblxcdHdpZHRoOiA5MCU7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRtYXJnaW46IGF1dG87XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzIyNTc3YTtcXG5cXHRib3gtc2hhZG93OiAycHggMnB4IDR4IDRweDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjMDYzMTRkO1xcbn1cXG5cXG4jbWVhbF9saXN0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdG1hcmdpbjogMjBweDtcXG5cXHRnYXA6IDhweDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jZm9ybWNvbnRhaW5lciB7XFxuXFx0bWFyZ2luLXRvcDogMjBweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNzZWxlY3Rpb25ib3gge1xcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiR2lsbCBTYW5zXFxcIiwgXFxcIkdpbGwgU2FucyBNVFxcXCIsIENhbGlicmksIFxcXCJUcmVidWNoZXQgTVNcXFwiLCBzYW5zLXNlcmlmO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAzcHg7XFxuXFx0Z2FwOiA4cHg7XFxuXFx0Y29sb3I6ICMyMjU3N2E7XFxufVxcblxcbiNncm9jZXJpZXMsXFxuI3N1Ym1pdCB7XFxuXFx0d2lkdGg6IDgwJTtcXG5cXHRoZWlnaHQ6IDMwcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogOHB4O1xcblxcdG1hcmdpbjogYXV0bztcXG5cXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xcblxcdHBhZGRpbmc6IGF1dG87XFxufVxcblxcbiNncm9jZXJpZXMge1xcblxcdG1hcmdpbi1sZWZ0OiAzMHB4O1xcbn1cXG4jZ3JvY2VyeW1pZGRsZSB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IDIwJSA4MCU7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcXG59XFxuXFxuI2dyb2NlcnltaWRkbGUgPiBkaXYge1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Ym9yZGVyLXJpZ2h0OiAycHggc29saWQgYmxhY2s7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4udGl0bGUge1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogMjhweDtcXG5cXHRjb2xvcjogIzIyNTc3YTtcXG59XFxuXFxuI3RpdGxlMSB7XFxuXFx0Z3JpZC1hcmVhOiAxLzEvMi8yO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI3RpdGxlMiB7XFxuXFx0Z3JpZC1hcmVhOiAxLzIvMi8zO1xcbn1cXG4jdGl0bGUzIHtcXG5cXHRncmlkLWFyZWE6IDEvMy8yLzQ7XFxufVxcblxcbiN0aXRsZTQge1xcblxcdGdyaWQtYXJlYTogMS80LzIvNTtcXG59XFxuXFxuLmdyaWRseWZlIHtcXG5cXHRmbGV4LWdyb3c6IDA7XFxuXFx0b3ZlcmZsb3cteTogYXV0bztcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDhweDtcXG59XFxuXFxuLmxpc3RpdGVtcyB7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogMTRweDtcXG5cXHR3aWR0aDogODAlO1xcblxcdGNvbG9yOiAjNTdjYzk5O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMyMjU3N2E7XFxuXFx0Ym9yZGVyLXJhZGl1czogOHB4O1xcblxcdGJvcmRlcjogMnB4IHNvbGlkICM4MmYzOGQ7XFxufVxcblxcbiNjZWxsMDAsXFxuI2NlbGwwMSxcXG4jY2VsbDAyLFxcbiNjZWxsMDMsXFxuI2NlbGwwNCxcXG4jY2VsbDA1IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IHsgbWVhbGxpc3QgfTtcbmNsYXNzIE1lYWwge1xuXHRjb25zdHJ1Y3RvcihuYW1lLCB0YWdzLCBpbmdyZWRpZW50cykge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy50YWdzID0gdGFncztcblx0XHR0aGlzLmluZ3JlZGllbnRzID0gaW5ncmVkaWVudHM7XG5cdH1cbn1cbmNsYXNzIEluZ3JlZGllbnRzIHtcblx0Y29uc3RydWN0b3IobmFtZSwgbG9jYXRpb24pIHtcblx0XHQodGhpcy5uYW1lID0gbmFtZSksICh0aGlzLmxvY2F0aW9uID0gbG9jYXRpb24pO1xuXHR9XG59XG5cbmNvbnN0IGNyZWFtID0gbmV3IEluZ3JlZGllbnRzKFwiY3JlYW1cIiwgXCJkYWlyeVwiKTtcbmNvbnN0IGNoaWNrZW5zdG9jayA9IG5ldyBJbmdyZWRpZW50cyhcImNoaWNrZW4gc3RvY2tcIiwgXCJwcm9kdWNlXCIpO1xuY29uc3Qgb25pb24gPSBuZXcgSW5ncmVkaWVudHMoXCJvbmlvblwiLCBcInByb2R1Y2VcIik7XG5jb25zdCBjaGlja2VuID0gbmV3IEluZ3JlZGllbnRzKFwiY2hpY2tlblwiLCBcIm1lYXRcIik7XG5jb25zdCBiYWNvbiA9IG5ldyBJbmdyZWRpZW50cyhcImJhY29uXCIsIFwibWVhdFwiKTtcbmNvbnN0IGNoaWxpX2JlYW5zID0gbmV3IEluZ3JlZGllbnRzKFwiY2hpbGkgYmVhbnNcIiwgXCJwcm9kdWNlXCIpO1xuY29uc3QgZ2FybGljID0gbmV3IEluZ3JlZGllbnRzKFwiZ2FybGljXCIsIFwicHJvZHVjZVwiKTtcbmNvbnN0IGNlbGVyeSA9IG5ldyBJbmdyZWRpZW50cyhcImNlbGVyeVwiLCBcInByb2R1Y2VcIik7XG5jb25zdCBjYXJyb3RzID0gbmV3IEluZ3JlZGllbnRzKFwiY2Fycm90c1wiLCBcInByb2R1Y2VcIik7XG5jb25zdCBjYW5uZWxpbmlfYmVhbnMgPSBuZXcgSW5ncmVkaWVudHMoXCJjYW5uZWxpbmlfYmVhbnNcIiwgXCJwcm9kdWNlXCIpO1xuY29uc3QgdG9tYXRvX3Bhc3RlID0gbmV3IEluZ3JlZGllbnRzKFwidG9tYXRvIHBhc3RlXCIsIFwicHJvZHVjZVwiKTtcbmNvbnN0IGRpY2VkX3RvbWF0b2VzID0gbmV3IEluZ3JlZGllbnRzKFwiRGljZWQgVG9tYXRvc1wiLCBcInByb2R1Y2VcIik7XG5jb25zdCB2ZW5pc29uID0gbmV3IEluZ3JlZGllbnRzKFwiVmVuaXNvblwiLCBcIm1lYXRcIik7XG5jb25zdCBncm91bmRtZWF0ID0gbmV3IEluZ3JlZGllbnRzKFwiR3JvdW5kIG1lYXRcIiwgXCJtZWF0XCIpO1xuY29uc3Qgd29udG9ud3JhcHBlcnMgPSBuZXcgSW5ncmVkaWVudHMoXCJXb250b24gd3JhcHBlcnNcIiwgXCJwcm9kdWNlXCIpO1xuY29uc3QgY2FiYmFnZSA9IG5ldyBJbmdyZWRpZW50cyhcIkNhYmJhZ2VcIiwgXCJwcm9kdWNlXCIpO1xuY29uc3Qgc2FsbW9uID0gbmV3IEluZ3JlZGllbnRzKFwiU2FsbW9uXCIsIFwibWVhdFwiKTtcbmNvbnN0IHBhcGVydG93ZWxzID0gbmV3IEluZ3JlZGllbnRzKFwiUGFwZXIgVG93ZWxzXCIsIFwibm9uZm9vZFwiKTtcbmNvbnN0IGljZWNyZWFtID0gbmV3IEluZ3JlZGllbnRzKFwiSWNlIENyZWFtXCIsIFwiZnJvemVuXCIpO1xuY29uc3QgcG9wc2ljbGVzID0gbmV3IEluZ3JlZGllbnRzKFwiUG9wc2ljbGVzXCIsIFwiZnJvemVuXCIpO1xuXG5sZXQgcGFwZXJUb3dlbHMgPSBuZXcgTWVhbChcInBhcGVyIHRvd2Vsc1wiLCBbXCJub25mb29kXCIsIFwiYWxsXCJdLCBbcGFwZXJ0b3dlbHNdKTtcbmxldCBpY2VDcmVhbSA9IG5ldyBNZWFsKFwiSWNlIENyZWFtXCIsIFtcImZyb3plblwiLCBcImFsbFwiXSwgW2ljZWNyZWFtXSk7XG5sZXQgUG9wc2ljbGVzID0gbmV3IE1lYWwoXCJQb3BzaWNsZXNcIiwgW1wiZnJvemVuXCIsIFwiYWxsXCJdLCBbcG9wc2ljbGVzXSk7XG5cbmxldCBTYWxtb24gPSBuZXcgTWVhbChcblx0XCJTYWxtb25cIixcblx0W1wiZmlzaFwiLCBcInNlYWZvb2RcIiwgXCIsbWVhdFwiLCBcImhlYWx0aHlcIiwgXCJhbGxcIl0sXG5cdFtzYWxtb25dXG4pO1xuXG5sZXQgcG90c3RpY2tlcnMgPSBuZXcgTWVhbChcblx0XCJQb3RzdGlja2Vyc1wiLFxuXHRbXCJob3RcIiwgXCJjcmlzcHlcIiwgXCJzYXZvcnlcIiwgXCJldGhuaWNcIiwgXCJhbGxcIl0sXG5cdFtncm91bmRtZWF0LCB3b250b253cmFwcGVycywgY2FiYmFnZSwgY2Fycm90cywgZ2FybGljXVxuKTtcbmxldCBjaGlja2VuX3NvdXAgPSBuZXcgTWVhbChcblx0XCJDaGlja2VuIHNvdXBcIixcblx0W1wiZGlubmVyXCIsIFwic291cFwiLCBcImhvdFwiLCBcImNoaWNrZW5cIiwgXCJhbGxcIl0sXG5cdFtjaGlja2Vuc3RvY2ssIG9uaW9uLCBjcmVhbSwgY2Fycm90cywgY2VsZXJ5LCBjaGlja2VuXVxuKTtcblxubGV0IHZlbmlzb25fY2hpbGkgPSBuZXcgTWVhbChcblx0XCJWZW5pc29uIENoaWxpXCIsXG5cdFtcInZlbmlzb25cIiwgXCJjaGlsaVwiLCBcImhvdFwiLCBcImFsbFwiXSxcblxuXHRbdmVuaXNvbiwgb25pb24sIGdhcmxpYywgY2hpY2tlbnN0b2NrLCBjaGlsaV9iZWFucywgZGljZWRfdG9tYXRvZXNdXG4pO1xubGV0IG1hcnJ5bWVjaGlja2VuID0gbmV3IE1lYWwoXG5cdFwiTWFycnkgTWUgQ2hpY2tlblwiLFxuXHRbXCJjaGlja2VuXCIsIFwiY3JlYW15XCIsIFwiaG90XCIsIFwiYWxsXCJdLFxuXHRbY2hpY2tlbiwgY3JlYW0sIGdhcmxpYywgY2hpY2tlbnN0b2NrLCBjaGlsaV9iZWFucywgZGljZWRfdG9tYXRvZXNdXG4pO1xubGV0IHBhc3RhX2ZhZ2lvbGUgPSBuZXcgTWVhbChcblx0XCJQYXN0YV9mYWdpb2xlXCIsXG5cdFtcIml0YWxpYW5cIiwgXCJzb3VwXCIsIFwiaG90XCIsIFwiYWxsXCJdLFxuXG5cdFtiYWNvbiwgb25pb24sIGdhcmxpYywgY2hpY2tlbnN0b2NrLCBjYW5uZWxpbmlfYmVhbnMsIHRvbWF0b19wYXN0ZV1cbik7XG5jb25zdCBtZWFsbGlzdCA9IFtcblx0dmVuaXNvbl9jaGlsaSxcblx0bWFycnltZWNoaWNrZW4sXG5cdGNoaWNrZW5fc291cCxcblx0cGFzdGFfZmFnaW9sZSxcblx0cG90c3RpY2tlcnMsXG5cdFNhbG1vbixcblx0cGFwZXJUb3dlbHMsXG5cdGljZUNyZWFtLFxuXHRQb3BzaWNsZXMsXG5dO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IG1lYWxsaXN0IH0gZnJvbSBcIi4vbWVhbHNcIjtcblxubGV0IHBvc3NpYmxlbWVhbHMgPSBbXTtcbi8vYWN0cyBhcyB0aGUgYXJyYXkgdG8gaG9sZCBtZWFscyB0aGF0IGFyZSBzZWxlY3RlZCBhcyBwb3NzaWJsZSBvcHRpb25zLCBzdG9yZXMgdGhlbSBhcyB0aGUgZnVsbCBvYmplY3RzXG5sZXQgc2VsZWN0ZWRtZWFscyA9IFtdO1xubGV0IGZpbmFsbGlzdCA9IFtdO1xubGV0IGZpbmFsaW5ncmVkaWVudHMgPSBbXTtcblxubGV0IGxpc3Rfb2ZfbWVhbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lYWxfbGlzdFwiKTtcbmxldCBjaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyk7XG4vLyBnbG9iYWwgdmFyaWFibGVzXG5sZXQgbWlkZGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaWRkbGVcIik7XG5sZXQgY3JlYXRlbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlX2xpc3RcIik7XG5jb25zdCBsaXN0b2ZNZWFscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVhbF9saXN0XCIpO1xubGV0IHN1Ym1pdGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0XCIpO1xubGV0IGdyb2NlcmllcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3JvY2VyaWVzXCIpO1xuXG4vL09uY2Ugc3VibWl0IGJ1dHRvbiBpcyBjbGlja2VkLCBnb2VzIHRocm91Z2ggYW5kIGdldHMgYWxsIGNoZWNrZWQgdmFsdWVzXG4vL1R1cm5zIHRoZSB2YWx1ZXMgaW50byBhbiBhcnJheSBjYWxsZWQgdGFnbGlzdC4gIEV2ZXJ5dGltZSBpdCBpcyBjbGlja2VkIGl0IHdpcGVzIGl0IGNsZWFuIGFuZCByZW1ha2VzIHRoZSBsaXN0XG5mdW5jdGlvbiBnZXRUYWdzKCkge1xuXHRsZXQgdGFnbGlzdCA9IFtdO1xuXHRjb25zdCBjaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcblx0XHQnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQnXG5cdCk7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgY2hlY2tib3hlcy5sZW5ndGg7IGkrKykge1xuXHRcdHRhZ2xpc3QucHVzaChjaGVja2JveGVzW2ldLnZhbHVlKTtcblx0fVxuXHRpZiAodGFnbGlzdC5sZW5ndGggPT0gMCkge1xuXHRcdGFsZXJ0KFwiUGxlYXNlIG1ha2UgYSBzZWxlY3Rpb25cIik7XG5cdFx0cmV0dXJuO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiB0YWdsaXN0O1xuXHR9XG59XG5cbi8vY2hlY2tzIGlmIHRoZSBzZWNvbmQgYXJyYXkgaXMgYSBzdWJzZXQgb2YgdGhlIGZpcnN0IGFycmF5XG5mdW5jdGlvbiBpc1N1YnNldCh0YWdhcnJheSwgbWVhbGFycmF5KSB7XG5cdHJldHVybiB0YWdhcnJheS5ldmVyeSgoZWxlbWVudCkgPT4gbWVhbGFycmF5LmluY2x1ZGVzKGVsZW1lbnQpKTtcbn1cbi8vdGhpcyBjaGVja3MgdG8gc2VlIGlmIHRoZSB0YWcgZWxlbWVudHMgYXJlIGluIGVhY2ggZm9vZCBlbGVtZW50c1xuZnVuY3Rpb24gY3Jvc3NDaGVjayh0YWdsaXN0KSB7XG5cdG1pZGRsZS5pbm5lckhUTUwgPSBcIlwiO1xuXHRwb3NzaWJsZW1lYWxzID0gW107XG5cblx0Zm9yIChsZXQgbWVhbCBvZiBtZWFsbGlzdCkge1xuXHRcdC8vZm9yIGV2ZXJ5IG1lYWwgaW4gbWVhbCBsaXN0XG5cdFx0Ly9jYWxscyBpc1N1YnNldCB0byBzZWUgaWYgdGhlIHRhZ2FycmF5IG1hdGNoZXMgdGhlIHRhZyBhcnJheSBvZiB0aGF0IG1lYWwuXG5cdFx0Ly9JZiB0aGVyZXMgYSBtYXRjaCwgY3JlYXRlIGEgbmV3IGNvcHkgb2YgdGhlIG1lYWwsIGFuZCB0aGVuIHB1dCBpdCBpbnRvIGFuIGFycmF5IG9mIHBvc3NpYmxlIG1lYWxzXG5cdFx0aWYgKGlzU3Vic2V0KHRhZ2xpc3QsIG1lYWwudGFncykgPT0gdHJ1ZSkge1xuXHRcdFx0bGV0IHBvc3NpYmxlbWVhbCA9IG1lYWw7XG5cdFx0XHRwb3NzaWJsZW1lYWxzLnB1c2gocG9zc2libGVtZWFsKTtcblx0XHR9XG5cdH1cblx0aWYgKHBvc3NpYmxlbWVhbHMubGVuZ3RoID09PSAwKSB7XG5cdFx0bGV0IHRhZ2xpc3QgPSBbXTtcblx0XHRjb25zdCBjaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcblx0XHRcdCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCdcblx0XHQpO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY2hlY2tib3hlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y2hlY2tib3hlc1tpXS5jaGVja2VkID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0YWxlcnQoXCJObyBtYXRjaGVzIGZvdW5kLiAgVHJ5IGEgZGlmZmVyZW50IHNlbGVjdGlvblwiKTtcblx0fVxufVxuXG4vL21ha2VzIGJ1dHRvbnMgZm9yIHRoZSBtZWFscyBiYXNlZCBvbiB0aGUgdGFncyB0aGF0IG1hdGNoXG5mdW5jdGlvbiBtYWtlRWxlbWVudCh0eXBlLCBpZGVudGl0eSwgd2hlcmUsIHRleHQpIHtcblx0bGV0IHBvb3BzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcblx0cG9vcHMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgaWRlbnRpdHkpO1xuXHRwb29wcy5pbm5lckhUTUwgPSB0ZXh0O1xuXHR3aGVyZS5hcHBlbmQocG9vcHMpO1xuXHRwb29wcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gYWRkVG9Hcm9jZXJ5TGlzdChwb29wcykpO1xufVxuXG4vL3doZW4gdGhlIG1lYWwgYnV0dG9uIGlzIHByZXNzZWQsIG1ha2Ugc3VyZSB0aGF0IGl0IG1hdGNoZXMgYSBtZWFsLCBhbmQgdGhlbiBhZGQgdGhhdCBtZWFsIG9iamVjdCB0byBhIGZpbmFsIGFycmF5XG5mdW5jdGlvbiBhZGRUb0dyb2NlcnlMaXN0KHRoZW1lYWwpIHtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBtZWFsbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdGlmICh0aGVtZWFsLmlubmVySFRNTCA9PT0gbWVhbGxpc3RbaV0ubmFtZSkge1xuXHRcdFx0bGV0IGZpbmFsbWVhbCA9IG1lYWxsaXN0W2ldO1xuXHRcdFx0ZmluYWxsaXN0LnB1c2goZmluYWxtZWFsKTtcblx0XHRcdGNvbnNvbGUubG9nKGZpbmFsbGlzdCk7XG5cdFx0fVxuXHR9XG5cdGRpc3BsYXlNZWFscygpO1xufVxuLy9yZW1vdmVzIHNvbWUgaXRlbSBmcm9tIGFuIGFycmF5XG5mdW5jdGlvbiBSZW1vdmUodGhpbmd5KSB7XG5cdGNvbnNvbGUubG9nKFwidGhpcyBpcyBhbiBhcnJheT9cIik7XG5cdGNvbnNvbGUubG9nKGZpbmFsbGlzdCk7XG5cdGNvbnNvbGUubG9nKFwicG9zaXRpb24gaW4gYXJyYXlcIik7XG5cdGZpbmFsbGlzdC5zcGxpY2UodGhpbmd5LCAxKTtcblx0ZGlzcGxheU1lYWxzKGZpbmFsbGlzdCk7XG59XG4vL2Rpc3BsYXlzIHRoZSBtZWFscyBpbiBmaW5hbGxpc3QgYXMgYnV0dG9uc1xuZnVuY3Rpb24gZGlzcGxheU1lYWxzKCkge1xuXHRsaXN0X29mX21lYWxzLmlubmVySFRNTCA9IFwiXCI7XG5cdGNvbnNvbGUubG9nKFwiVGhpcyBpcyB0aGUgYmVnaW5pbm5pbmcgb2YgZGlzcGxheSBtZWFscyBcIiArIGZpbmFsbGlzdCk7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgZmluYWxsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IGZpbmFsYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0XHRmaW5hbGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxpc3RtZWFsXCIpO1xuXHRcdGZpbmFsYnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYnV0dG9uXCJbaV0pO1xuXHRcdGZpbmFsYnV0dG9uLmlubmVySFRNTCA9IGZpbmFsbGlzdFtpXS5uYW1lO1xuXHRcdGxpc3Rfb2ZfbWVhbHMuYXBwZW5kKGZpbmFsYnV0dG9uKTtcblx0XHRmaW5hbGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgZmluYWxsaXN0W2ldLmluZ3JlZGllbnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGZpbmFsYnV0dG9uLmlubmVySFRNTCArPSBmaW5hbGxpc3RbaV0uaW5ncmVkaWVudHNbal0ubmFtZSArIFwiIFwiO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGZpbmFsYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcblx0XHRcdGZpbmFsYnV0dG9uLmlubmVySFRNTCA9IGZpbmFsbGlzdFtpXS5uYW1lO1xuXHRcdH0pO1xuXHRcdGZpbmFsYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRmaW5hbGxpc3Quc3BsaWNlKFtpXSwgMSk7XG5cdFx0XHRkaXNwbGF5TWVhbHMoKTtcblx0XHR9KTtcblx0fVxufVxuXG4vL2FkZHMgdGhlIHRpdGxlcyB0byB0aGUgZ3JvY2VyeSBsaXN0XG5mdW5jdGlvbiBhZGRtaWRkbGVUaXRsZShkb2MsIGlkLCBjbHMsIGlubmVyLCBjZWxsKSB7XG5cdGxldCBib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjZWxsKTtcblx0ZG9jID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0ZG9jLnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcblx0ZG9jLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGNscyk7XG5cdGRvYy5pbm5lckhUTUwgPSBpbm5lcjtcblx0Ym94LmFwcGVuZChkb2MpO1xufVxuXG5mdW5jdGlvbiBhZGRMaXN0RWxlbWVudChmaW5hbGluZ3JlZGllbnRzLCBsb2NhdGlvbiwgY2VsbCkge1xuXHRmb3IgKGxldCBqID0gMDsgaiA8IGZpbmFsaW5ncmVkaWVudHMubGVuZ3RoOyBqKyspIHtcblx0XHRpZiAoZmluYWxpbmdyZWRpZW50c1tqXS5sb2NhdGlvbiA9PT0gbG9jYXRpb24pIHtcblx0XHRcdGxldCBwcm9kdWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2VsbCk7IC8vZ2V0cyB0aGUgY2VsbCBhbmQgYXNzaWducyBpdCBhIG5hbWVcblx0XHRcdGxldCBwcm9kdWNlaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdFx0XHRwcm9kdWNlaXRlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxpc3RpdGVtc1wiKTtcblx0XHRcdHByb2R1Y2VpdGVtLmlubmVySFRNTCA9IGZpbmFsaW5ncmVkaWVudHNbal0ubmFtZTtcblx0XHRcdHByb2R1Y2VpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRcdHByb2R1Y2VpdGVtLnJlbW92ZSgpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHByb2R1Y2UuYXBwZW5kKHByb2R1Y2VpdGVtKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbWFrZUdyb2NlcnlMaXN0KCkge1xuXHQvL2NvbnZlcnQgdGhlIG1pZGRsZSBwYWdlIHRvIHRoZSBsaXN0IG9mIGdyb2Nlcmllc1xuXHRtaWRkbGUuaW5uZXJIVE1MID0gXCJcIjtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBmaW5hbGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRmb3IgKGxldCBqID0gMDsgaiA8IGZpbmFsbGlzdFtpXS5pbmdyZWRpZW50cy5sZW5ndGg7IGorKykge1xuXHRcdFx0ZmluYWxpbmdyZWRpZW50cy5wdXNoKGZpbmFsbGlzdFtpXS5pbmdyZWRpZW50c1tqXSk7XG5cdFx0fVxuXHR9XG5cdGNvbnNvbGUubG9nKGZpbmFsaW5ncmVkaWVudHMpO1xuXG5cdGZpbmFsaW5ncmVkaWVudHMuc29ydCgoYSwgYikgPT4ge1xuXHRcdGlmIChhLm5hbWUgPCBiLm5hbWUpIHtcblx0XHRcdHJldHVybiAtMTtcblx0XHR9IGVsc2UgaWYgKGEubmFtZSA+IGIubmFtZSkge1xuXHRcdFx0cmV0dXJuIDE7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblx0fSk7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgZmluYWxpbmdyZWRpZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnNvbGUubG9nKGZpbmFsaW5ncmVkaWVudHNbaV0ubmFtZSk7XG5cdH1cblx0Y29uc29sZS5sb2coZmluYWxsaXN0KTtcblx0bWlkZGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZ3JvY2VyeW1pZGRsZVwiKTtcblx0bWFrZUdyaWQoMiwgNik7XG5cdGFkZG1pZGRsZVRpdGxlKFwiZGFpcnl0aXRsZVwiLCBcInRpdGxlMVwiLCBcInRpdGxlXCIsIFwiRGFpcnlcIiwgXCJjZWxsMDBcIik7XG5cdGFkZG1pZGRsZVRpdGxlKFwiUHJvZHVjZVwiLCBcInRpdGxlMlwiLCBcInRpdGxlXCIsIFwiUHJvZHVjZVwiLCBcImNlbGwwMVwiKTtcblx0YWRkbWlkZGxlVGl0bGUoXCJGcm96ZW5cIiwgXCJ0aXRsZTNcIiwgXCJ0aXRsZVwiLCBcIkZyb3plblwiLCBcImNlbGwwMlwiKTtcblx0YWRkbWlkZGxlVGl0bGUoXCJDYW5uZWRcIiwgXCJ0aXRsZTRcIiwgXCJ0aXRsZVwiLCBcIk1lYXRcIiwgXCJjZWxsMDNcIik7XG5cdGFkZG1pZGRsZVRpdGxlKFwiT3RoZXJcIiwgXCJ0aXRsZTRcIiwgXCJ0aXRsZVwiLCBcIk90aGVyXCIsIFwiY2VsbDA0XCIpO1xuXHRhZGRtaWRkbGVUaXRsZShcIk5vbi1Gb29kXCIsIFwidGl0bGU0XCIsIFwidGl0bGVcIiwgXCJOb24tRm9vZFwiLCBcImNlbGwwNVwiKTtcblx0YWRkTGlzdEVsZW1lbnQoZmluYWxpbmdyZWRpZW50cywgXCJwcm9kdWNlXCIsIFwiY2VsbDExXCIpO1xuXHRhZGRMaXN0RWxlbWVudChmaW5hbGluZ3JlZGllbnRzLCBcImRhaXJ5XCIsIFwiY2VsbDEwXCIpO1xuXHRhZGRMaXN0RWxlbWVudChmaW5hbGluZ3JlZGllbnRzLCBcIm1lYXRcIiwgXCJjZWxsMTNcIik7XG5cdGFkZExpc3RFbGVtZW50KGZpbmFsaW5ncmVkaWVudHMsIFwiZnJvemVuXCIsIFwiY2VsbDEyXCIpO1xuXHRhZGRMaXN0RWxlbWVudChmaW5hbGluZ3JlZGllbnRzLCBcIm90aGVyXCIsIFwiY2VsbDE0XCIpO1xuXHRhZGRMaXN0RWxlbWVudChmaW5hbGluZ3JlZGllbnRzLCBcIm5vbmZvb2RcIiwgXCJjZWxsMTVcIik7XG59XG5cbmZ1bmN0aW9uIG1ha2VHcmlkKHJvd3MsIGNvbHMpIHtcblx0bGV0IGdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyb2NlcnltaWRkbGVcIik7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XG5cdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBjb2xzOyBqKyspIHtcblx0XHRcdGNvbnN0IGdyaWRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdGdyaWRJdGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZ3JpZGx5ZmVcIik7XG5cdFx0XHRncmlkSXRlbS5pZCA9IGBjZWxsJHtpfSR7an1gO1xuXHRcdFx0Z3JpZC5hcHBlbmRDaGlsZChncmlkSXRlbSk7XG5cdFx0fVxuXHR9XG59XG5cbi8vfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+QUNUVUFMIEVYRUNVVElORyBDT0RFfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+flxuXG4vL3J1bnMgdGhlIGZ1bmN0aW9uIHdoZW4gYSB0YWcgaXMgY2xpY2tlZCBpbnN0ZWFkIG9mIHRoZSBzdWJtaXQgYnV0dG9uXG5mb3IgKGxldCBpID0gMDsgaSA8IGNoZWNrYm94ZXMubGVuZ3RoOyBpKyspIHtcblx0Y2hlY2tib3hlc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGNyb3NzQ2hlY2soZ2V0VGFncygpKTtcblx0XHRwb3NzaWJsZW1lYWxzLnNvcnQoKGEsIGIpID0+IHtcblx0XHRcdGlmIChhLm5hbWUgPCBiLm5hbWUpIHtcblx0XHRcdFx0cmV0dXJuIC0xO1xuXHRcdFx0fSBlbHNlIGlmIChhLm5hbWUgPiBiLm5hbWUpIHtcblx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdH1cblx0XHR9KTsgLy9hbHBoYWJldGl6ZXMgdGhlIGFycmF5XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHBvc3NpYmxlbWVhbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdG1ha2VFbGVtZW50KFwiYnV0dG9uXCIsIFwicG9zc2libGVtZWFsXCIsIG1pZGRsZSwgcG9zc2libGVtZWFsc1tpXS5uYW1lKTtcblx0XHR9XG5cdH0pO1xufVxuZ3JvY2VyaWVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdG1ha2VHcm9jZXJ5TGlzdCgpO1xufSk7XG5cbnN1Ym1pdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRjcm9zc0NoZWNrKGdldFRhZ3MoKSk7XG5cdHBvc3NpYmxlbWVhbHMuc29ydCgoYSwgYikgPT4ge1xuXHRcdGlmIChhLm5hbWUgPCBiLm5hbWUpIHtcblx0XHRcdHJldHVybiAtMTtcblx0XHR9IGVsc2UgaWYgKGEubmFtZSA+IGIubmFtZSkge1xuXHRcdFx0cmV0dXJuIDE7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblx0fSk7IC8vYWxwaGFiZXRpemVzIHRoZSBhcnJheVxuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcG9zc2libGVtZWFscy5sZW5ndGg7IGkrKykge1xuXHRcdG1ha2VFbGVtZW50KFwiYnV0dG9uXCIsIFwicG9zc2libGVtZWFsXCIsIG1pZGRsZSwgcG9zc2libGVtZWFsc1tpXS5uYW1lKTtcblx0fVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=