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

groceries.addEventListener("click", () => {
	makeGroceryList();
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxh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QkFBd0IsRUFBRSxFQUFFLEVBQUU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxnQkFBZ0IsdUJBQXVCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUcsR0FBRzs7QUFFTixrQkFBa0IsMEJBQTBCO0FBQzVDO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxFQUFFLEdBQUc7O0FBRUwsaUJBQWlCLDBCQUEwQjtBQUMzQztBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL21lYWxzLmpzIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcblx0bWFyZ2luOiAwcHg7XG59XG5mb3JtIHtcblx0Zm9udC1zaXplOiAyOHB4O1xuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcblx0cGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5idXR0b24ge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjI1NzdhO1xuXHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCAjMDMyMDM0O1xuXHRjb2xvcjogIzgwZWQ5OTtcbn1cblxuYnV0dG9uOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xufVxuI21haW5ib2R5IHtcblx0bWFyZ2luOiAwcHg7XG5cdGhlaWdodDogMTAwdmg7XG5cdHdpZHRoOiAxMDB2dztcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuI3RpdGxlbG9nbyxcbiNib3R0b20ge1xuXHRmbGV4LWJhc2lzOiAyMCU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGJhY2tncm91bmQtY29sb3I6ICMyMjU3N2E7XG5cdGNvbG9yOiAjODBlZDk5O1xuXHRmb250LXNpemU6IDM2cHg7XG5cdGZvbnQtZmFtaWx5OiBcIkdpbGwgU2Fuc1wiLCBcIkdpbGwgU2FucyBNVFwiLCBDYWxpYnJpLCBcIlRyZWJ1Y2hldCBNU1wiLCBzYW5zLXNlcmlmO1xuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcblx0cGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuI2JvdHRvbSB7XG5cdGNvbG9yOiAjODBlZDk5O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Zm9udC1zaXplOiAxNnB4O1xufVxuXG4jbWlkIHtcblx0ZmxleC1zaHJpbms6IDA7XG5cdG92ZXJmbG93LXk6IGF1dG87XG5cdGZsZXgtYmFzaXM6IDYwJTtcblx0YmFja2dyb3VuZC1jb2xvcjogIzU3Y2M5OTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbiNib3R0b20ge1xuXHRmbGV4LWJhc2lzOiAyMCU7XG5cdGJhY2tncm91bmQtY29sb3I6ICMyMjU3N2E7XG59XG5cbiNtaWRsZWZ0IHtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0Ym9yZGVyLXJpZ2h0OiBzb2xpZCAycHggYmxhY2s7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0ZmxleC1iYXNpczogMjAlO1xuXHRmbGV4LXNocmluazogMDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzU3Y2M5OTtcblx0Y29sb3I6ICMyMjU3N2E7XG59XG5cbiNtaWRkbGUge1xuXHRvdmVyZmxvdy15OiBhdXRvO1xuXHRmbGV4LXNocmluazogMDtcblx0ZmxleC1ncm93OiAwO1xuXHRmbGV4LWJhc2lzOiA2MCU7XG5cdGJhY2tncm91bmQtY29sb3I6ICM1N2NjOTk7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmcjtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XG5cdGdyaWQtZ2FwOiA4cHg7XG59XG5cbiNtaWRyaWdodCB7XG5cdGJvcmRlci1sZWZ0OiAycHggc29saWQgYmxhY2s7XG5cdGZsZXgtZ3JvdzogMDtcblx0ZmxleC1zaHJpbms6IDA7XG5cdGZsZXgtYmFzaXM6IDIwJTtcblx0YmFja2dyb3VuZC1jb2xvcjogIzU3Y2M5OTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucG9zc2libGVtZWFsIHtcblx0aGVpZ2h0OiA5MCU7XG5cdHdpZHRoOiA5MCU7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRtYXJnaW46IGF1dG87XG5cdGJhY2tncm91bmQtY29sb3I6ICMyMjU3N2E7XG5cdGJveC1zaGFkb3c6IDJweCAycHggNHggNHB4O1xuXHRib3JkZXI6IDFweCBzb2xpZCAjMDYzMTRkO1xufVxuXG4jbWVhbF9saXN0IHtcblx0ZGlzcGxheTogZmxleDtcblx0bWFyZ2luOiAyMHB4O1xuXHRnYXA6IDhweDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuI2Zvcm1jb250YWluZXIge1xuXHRtYXJnaW4tdG9wOiAyMHB4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jc2VsZWN0aW9uYm94IHtcblx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0Zm9udC1zaXplOiAyMHB4O1xuXHRmb250LWZhbWlseTogXCJHaWxsIFNhbnNcIiwgXCJHaWxsIFNhbnMgTVRcIiwgQ2FsaWJyaSwgXCJUcmVidWNoZXQgTVNcIiwgc2Fucy1zZXJpZjtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0cGFkZGluZzogM3B4O1xuXHRnYXA6IDhweDtcblx0Y29sb3I6ICMyMjU3N2E7XG59XG5cbiNncm9jZXJpZXMsXG4jc3VibWl0IHtcblx0d2lkdGg6IDgwJTtcblx0aGVpZ2h0OiAzMHB4O1xuXHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdG1hcmdpbjogYXV0bztcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcblx0cGFkZGluZzogYXV0bztcbn1cblxuI2dyb2NlcmllcyB7XG5cdG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuI2dyb2NlcnltaWRkbGUge1xuXHR3aWR0aDogMTAwJTtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAyMCUgODAlO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1xufVxuXG4jZ3JvY2VyeW1pZGRsZSA+IGRpdiB7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGJsYWNrO1xuXHRib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XG59XG5cbi50aXRsZSB7XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Zm9udC1zaXplOiAyOHB4O1xuXHRjb2xvcjogIzIyNTc3YTtcbn1cblxuI3RpdGxlMSB7XG5cdGdyaWQtYXJlYTogMS8xLzIvMjtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuI3RpdGxlMiB7XG5cdGdyaWQtYXJlYTogMS8yLzIvMztcbn1cbiN0aXRsZTMge1xuXHRncmlkLWFyZWE6IDEvMy8yLzQ7XG59XG5cbiN0aXRsZTQge1xuXHRncmlkLWFyZWE6IDEvNC8yLzU7XG59XG5cbi5ncmlkbHlmZSB7XG5cdGZsZXgtZ3JvdzogMDtcblx0b3ZlcmZsb3cteTogYXV0bztcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiA4cHg7XG59XG5cbi5saXN0aXRlbXMge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0d2lkdGg6IDgwJTtcblx0Y29sb3I6ICM1N2NjOTk7XG5cdGJhY2tncm91bmQtY29sb3I6ICMyMjU3N2E7XG5cdGJvcmRlci1yYWRpdXM6IDhweDtcblx0Ym9yZGVyOiAycHggc29saWQgIzgyZjM4ZDtcbn1cblxuI2NlbGwwMCxcbiNjZWxsMDEsXG4jY2VsbDAyLFxuI2NlbGwwMyxcbiNjZWxsMDQsXG4jY2VsbDA1IHtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxXQUFXO0FBQ1o7QUFDQTtDQUNDLGVBQWU7Q0FDZiwwQkFBMEI7Q0FDMUIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLGtCQUFrQjtDQUNsQixtQ0FBbUM7Q0FDbkMsY0FBYztBQUNmOztBQUVBO0NBQ0Msd0JBQXdCO0FBQ3pCO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsYUFBYTtDQUNiLFlBQVk7Q0FDWixhQUFhO0NBQ2Isc0JBQXNCO0FBQ3ZCOztBQUVBOztDQUVDLGVBQWU7Q0FDZixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHlCQUF5QjtDQUN6QixjQUFjO0NBQ2QsZUFBZTtDQUNmLDZFQUE2RTtDQUM3RSwwQkFBMEI7Q0FDMUIsa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsY0FBYztDQUNkLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2YseUJBQXlCO0NBQ3pCLGFBQWE7Q0FDYixtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLGVBQWU7Q0FDZix5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsNkJBQTZCO0NBQzdCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsOEJBQThCO0NBQzlCLGVBQWU7Q0FDZixjQUFjO0NBQ2QseUJBQXlCO0NBQ3pCLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixjQUFjO0NBQ2QsWUFBWTtDQUNaLGVBQWU7Q0FDZix5QkFBeUI7Q0FDekIsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsbUNBQW1DO0NBQ25DLHNDQUFzQztDQUN0QyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyw0QkFBNEI7Q0FDNUIsWUFBWTtDQUNaLGNBQWM7Q0FDZCxlQUFlO0NBQ2YseUJBQXlCO0NBQ3pCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsOEJBQThCO0FBQy9COztBQUVBO0NBQ0MsV0FBVztDQUNYLFVBQVU7Q0FDVix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWix5QkFBeUI7Q0FDekIsMEJBQTBCO0NBQzFCLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixZQUFZO0NBQ1osUUFBUTtDQUNSLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2Isc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZiw2RUFBNkU7Q0FDN0UsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixZQUFZO0NBQ1osUUFBUTtDQUNSLGNBQWM7QUFDZjs7QUFFQTs7Q0FFQyxVQUFVO0NBQ1YsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MsV0FBVztDQUNYLGFBQWE7Q0FDYiwyQkFBMkI7Q0FDM0IsOENBQThDO0FBQy9DOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLDZCQUE2QjtDQUM3Qiw4QkFBOEI7QUFDL0I7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyxrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixzQkFBc0I7Q0FDdEIsUUFBUTtBQUNUOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixVQUFVO0NBQ1YsY0FBYztDQUNkLHlCQUF5QjtDQUN6QixrQkFBa0I7Q0FDbEIseUJBQXlCO0FBQzFCOztBQUVBOzs7Ozs7Q0FNQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHVCQUF1QjtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG5cXHRtYXJnaW46IDBweDtcXG59XFxuZm9ybSB7XFxuXFx0Zm9udC1zaXplOiAyOHB4O1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcblxcdHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxuYnV0dG9uIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjI1NzdhO1xcblxcdGJvcmRlci1yYWRpdXM6IDhweDtcXG5cXHRib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggIzAzMjAzNDtcXG5cXHRjb2xvcjogIzgwZWQ5OTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcbiNtYWluYm9keSB7XFxuXFx0bWFyZ2luOiAwcHg7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHR3aWR0aDogMTAwdnc7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jdGl0bGVsb2dvLFxcbiNib3R0b20ge1xcblxcdGZsZXgtYmFzaXM6IDIwJTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzIyNTc3YTtcXG5cXHRjb2xvcjogIzgwZWQ5OTtcXG5cXHRmb250LXNpemU6IDM2cHg7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJHaWxsIFNhbnNcXFwiLCBcXFwiR2lsbCBTYW5zIE1UXFxcIiwgQ2FsaWJyaSwgXFxcIlRyZWJ1Y2hldCBNU1xcXCIsIHNhbnMtc2VyaWY7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuXFx0cGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG4jYm90dG9tIHtcXG5cXHRjb2xvcjogIzgwZWQ5OTtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuI21pZCB7XFxuXFx0ZmxleC1zaHJpbms6IDA7XFxuXFx0b3ZlcmZsb3cteTogYXV0bztcXG5cXHRmbGV4LWJhc2lzOiA2MCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzU3Y2M5OTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcbiNib3R0b20ge1xcblxcdGZsZXgtYmFzaXM6IDIwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjI1NzdhO1xcbn1cXG5cXG4jbWlkbGVmdCB7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRib3JkZXItcmlnaHQ6IHNvbGlkIDJweCBibGFjaztcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGZsZXgtYmFzaXM6IDIwJTtcXG5cXHRmbGV4LXNocmluazogMDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTdjYzk5O1xcblxcdGNvbG9yOiAjMjI1NzdhO1xcbn1cXG5cXG4jbWlkZGxlIHtcXG5cXHRvdmVyZmxvdy15OiBhdXRvO1xcblxcdGZsZXgtc2hyaW5rOiAwO1xcblxcdGZsZXgtZ3JvdzogMDtcXG5cXHRmbGV4LWJhc2lzOiA2MCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzU3Y2M5OTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuXFx0Z3JpZC1nYXA6IDhweDtcXG59XFxuXFxuI21pZHJpZ2h0IHtcXG5cXHRib3JkZXItbGVmdDogMnB4IHNvbGlkIGJsYWNrO1xcblxcdGZsZXgtZ3JvdzogMDtcXG5cXHRmbGV4LXNocmluazogMDtcXG5cXHRmbGV4LWJhc2lzOiAyMCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzU3Y2M5OTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ucG9zc2libGVtZWFsIHtcXG5cXHRoZWlnaHQ6IDkwJTtcXG5cXHR3aWR0aDogOTAlO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0bWFyZ2luOiBhdXRvO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMyMjU3N2E7XFxuXFx0Ym94LXNoYWRvdzogMnB4IDJweCA0eCA0cHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgIzA2MzE0ZDtcXG59XFxuXFxuI21lYWxfbGlzdCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRtYXJnaW46IDIwcHg7XFxuXFx0Z2FwOiA4cHg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2Zvcm1jb250YWluZXIge1xcblxcdG1hcmdpbi10b3A6IDIwcHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jc2VsZWN0aW9uYm94IHtcXG5cXHRmb250LXdlaWdodDogNDAwO1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHRmb250LWZhbWlseTogXFxcIkdpbGwgU2Fuc1xcXCIsIFxcXCJHaWxsIFNhbnMgTVRcXFwiLCBDYWxpYnJpLCBcXFwiVHJlYnVjaGV0IE1TXFxcIiwgc2Fucy1zZXJpZjtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cGFkZGluZzogM3B4O1xcblxcdGdhcDogOHB4O1xcblxcdGNvbG9yOiAjMjI1NzdhO1xcbn1cXG5cXG4jZ3JvY2VyaWVzLFxcbiNzdWJtaXQge1xcblxcdHdpZHRoOiA4MCU7XFxuXFx0aGVpZ2h0OiAzMHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDhweDtcXG5cXHRtYXJnaW46IGF1dG87XFxuXFx0bWFyZ2luLWJvdHRvbTogMjBweDtcXG5cXHRwYWRkaW5nOiBhdXRvO1xcbn1cXG5cXG4jZ3JvY2VyaWVzIHtcXG5cXHRtYXJnaW4tbGVmdDogMzBweDtcXG59XFxuI2dyb2NlcnltaWRkbGUge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAyMCUgODAlO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XFxufVxcblxcbiNncm9jZXJ5bWlkZGxlID4gZGl2IHtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGJsYWNrO1xcblxcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnRpdGxlIHtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRmb250LXNpemU6IDI4cHg7XFxuXFx0Y29sb3I6ICMyMjU3N2E7XFxufVxcblxcbiN0aXRsZTEge1xcblxcdGdyaWQtYXJlYTogMS8xLzIvMjtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiN0aXRsZTIge1xcblxcdGdyaWQtYXJlYTogMS8yLzIvMztcXG59XFxuI3RpdGxlMyB7XFxuXFx0Z3JpZC1hcmVhOiAxLzMvMi80O1xcbn1cXG5cXG4jdGl0bGU0IHtcXG5cXHRncmlkLWFyZWE6IDEvNC8yLzU7XFxufVxcblxcbi5ncmlkbHlmZSB7XFxuXFx0ZmxleC1ncm93OiAwO1xcblxcdG92ZXJmbG93LXk6IGF1dG87XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiA4cHg7XFxufVxcblxcbi5saXN0aXRlbXMge1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRmb250LXNpemU6IDE0cHg7XFxuXFx0d2lkdGg6IDgwJTtcXG5cXHRjb2xvcjogIzU3Y2M5OTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjI1NzdhO1xcblxcdGJvcmRlci1yYWRpdXM6IDhweDtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCAjODJmMzhkO1xcbn1cXG5cXG4jY2VsbDAwLFxcbiNjZWxsMDEsXFxuI2NlbGwwMixcXG4jY2VsbDAzLFxcbiNjZWxsMDQsXFxuI2NlbGwwNSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCB7IG1lYWxsaXN0IH07XG5jbGFzcyBNZWFsIHtcblx0Y29uc3RydWN0b3IobmFtZSwgdGFncywgaW5ncmVkaWVudHMpIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMudGFncyA9IHRhZ3M7XG5cdFx0dGhpcy5pbmdyZWRpZW50cyA9IGluZ3JlZGllbnRzO1xuXHR9XG59XG5jbGFzcyBJbmdyZWRpZW50cyB7XG5cdGNvbnN0cnVjdG9yKG5hbWUsIGxvY2F0aW9uKSB7XG5cdFx0KHRoaXMubmFtZSA9IG5hbWUpLCAodGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uKTtcblx0fVxufVxuXG5jb25zdCBjcmVhbSA9IG5ldyBJbmdyZWRpZW50cyhcImNyZWFtXCIsIFwiZGFpcnlcIik7XG5jb25zdCBjaGlja2Vuc3RvY2sgPSBuZXcgSW5ncmVkaWVudHMoXCJjaGlja2VuIHN0b2NrXCIsIFwicHJvZHVjZVwiKTtcbmNvbnN0IG9uaW9uID0gbmV3IEluZ3JlZGllbnRzKFwib25pb25cIiwgXCJwcm9kdWNlXCIpO1xuY29uc3QgY2hpY2tlbiA9IG5ldyBJbmdyZWRpZW50cyhcImNoaWNrZW5cIiwgXCJtZWF0XCIpO1xuY29uc3QgYmFjb24gPSBuZXcgSW5ncmVkaWVudHMoXCJiYWNvblwiLCBcIm1lYXRcIik7XG5jb25zdCBjaGlsaV9iZWFucyA9IG5ldyBJbmdyZWRpZW50cyhcImNoaWxpIGJlYW5zXCIsIFwicHJvZHVjZVwiKTtcbmNvbnN0IGdhcmxpYyA9IG5ldyBJbmdyZWRpZW50cyhcImdhcmxpY1wiLCBcInByb2R1Y2VcIik7XG5jb25zdCBjZWxlcnkgPSBuZXcgSW5ncmVkaWVudHMoXCJjZWxlcnlcIiwgXCJwcm9kdWNlXCIpO1xuY29uc3QgY2Fycm90cyA9IG5ldyBJbmdyZWRpZW50cyhcImNhcnJvdHNcIiwgXCJwcm9kdWNlXCIpO1xuY29uc3QgY2FubmVsaW5pX2JlYW5zID0gbmV3IEluZ3JlZGllbnRzKFwiY2FubmVsaW5pX2JlYW5zXCIsIFwicHJvZHVjZVwiKTtcbmNvbnN0IHRvbWF0b19wYXN0ZSA9IG5ldyBJbmdyZWRpZW50cyhcInRvbWF0byBwYXN0ZVwiLCBcInByb2R1Y2VcIik7XG5jb25zdCBkaWNlZF90b21hdG9lcyA9IG5ldyBJbmdyZWRpZW50cyhcIkRpY2VkIFRvbWF0b3NcIiwgXCJwcm9kdWNlXCIpO1xuY29uc3QgdmVuaXNvbiA9IG5ldyBJbmdyZWRpZW50cyhcIlZlbmlzb25cIiwgXCJtZWF0XCIpO1xuY29uc3QgZ3JvdW5kbWVhdCA9IG5ldyBJbmdyZWRpZW50cyhcIkdyb3VuZCBtZWF0XCIsIFwibWVhdFwiKTtcbmNvbnN0IHdvbnRvbndyYXBwZXJzID0gbmV3IEluZ3JlZGllbnRzKFwiV29udG9uIHdyYXBwZXJzXCIsIFwicHJvZHVjZVwiKTtcbmNvbnN0IGNhYmJhZ2UgPSBuZXcgSW5ncmVkaWVudHMoXCJDYWJiYWdlXCIsIFwicHJvZHVjZVwiKTtcbmNvbnN0IHNhbG1vbiA9IG5ldyBJbmdyZWRpZW50cyhcIlNhbG1vblwiLCBcIm1lYXRcIik7XG5jb25zdCBwYXBlcnRvd2VscyA9IG5ldyBJbmdyZWRpZW50cyhcIlBhcGVyIFRvd2Vsc1wiLCBcIm5vbmZvb2RcIik7XG5jb25zdCBpY2VjcmVhbSA9IG5ldyBJbmdyZWRpZW50cyhcIkljZSBDcmVhbVwiLCBcImZyb3plblwiKTtcbmNvbnN0IHBvcHNpY2xlcyA9IG5ldyBJbmdyZWRpZW50cyhcIlBvcHNpY2xlc1wiLCBcImZyb3plblwiKTtcblxubGV0IHBhcGVyVG93ZWxzID0gbmV3IE1lYWwoXCJwYXBlciB0b3dlbHNcIiwgW1wibm9uZm9vZFwiLCBcImFsbFwiXSwgW3BhcGVydG93ZWxzXSk7XG5sZXQgaWNlQ3JlYW0gPSBuZXcgTWVhbChcIkljZSBDcmVhbVwiLCBbXCJmcm96ZW5cIiwgXCJhbGxcIl0sIFtpY2VjcmVhbV0pO1xubGV0IFBvcHNpY2xlcyA9IG5ldyBNZWFsKFwiUG9wc2ljbGVzXCIsIFtcImZyb3plblwiLCBcImFsbFwiXSwgW3BvcHNpY2xlc10pO1xuXG5sZXQgU2FsbW9uID0gbmV3IE1lYWwoXG5cdFwiU2FsbW9uXCIsXG5cdFtcImZpc2hcIiwgXCJzZWFmb29kXCIsIFwiLG1lYXRcIiwgXCJoZWFsdGh5XCIsIFwiYWxsXCJdLFxuXHRbc2FsbW9uXVxuKTtcblxubGV0IHBvdHN0aWNrZXJzID0gbmV3IE1lYWwoXG5cdFwiUG90c3RpY2tlcnNcIixcblx0W1wiaG90XCIsIFwiY3Jpc3B5XCIsIFwic2F2b3J5XCIsIFwiZXRobmljXCIsIFwiYWxsXCJdLFxuXHRbZ3JvdW5kbWVhdCwgd29udG9ud3JhcHBlcnMsIGNhYmJhZ2UsIGNhcnJvdHMsIGdhcmxpY11cbik7XG5sZXQgY2hpY2tlbl9zb3VwID0gbmV3IE1lYWwoXG5cdFwiQ2hpY2tlbiBzb3VwXCIsXG5cdFtcImRpbm5lclwiLCBcInNvdXBcIiwgXCJob3RcIiwgXCJjaGlja2VuXCIsIFwiYWxsXCJdLFxuXHRbY2hpY2tlbnN0b2NrLCBvbmlvbiwgY3JlYW0sIGNhcnJvdHMsIGNlbGVyeSwgY2hpY2tlbl1cbik7XG5cbmxldCB2ZW5pc29uX2NoaWxpID0gbmV3IE1lYWwoXG5cdFwiVmVuaXNvbiBDaGlsaVwiLFxuXHRbXCJ2ZW5pc29uXCIsIFwiY2hpbGlcIiwgXCJob3RcIiwgXCJhbGxcIl0sXG5cblx0W3Zlbmlzb24sIG9uaW9uLCBnYXJsaWMsIGNoaWNrZW5zdG9jaywgY2hpbGlfYmVhbnMsIGRpY2VkX3RvbWF0b2VzXVxuKTtcbmxldCBtYXJyeW1lY2hpY2tlbiA9IG5ldyBNZWFsKFxuXHRcIk1hcnJ5IE1lIENoaWNrZW5cIixcblx0W1wiY2hpY2tlblwiLCBcImNyZWFteVwiLCBcImhvdFwiLCBcImFsbFwiXSxcblx0W2NoaWNrZW4sIGNyZWFtLCBnYXJsaWMsIGNoaWNrZW5zdG9jaywgY2hpbGlfYmVhbnMsIGRpY2VkX3RvbWF0b2VzXVxuKTtcbmxldCBwYXN0YV9mYWdpb2xlID0gbmV3IE1lYWwoXG5cdFwiUGFzdGFfZmFnaW9sZVwiLFxuXHRbXCJpdGFsaWFuXCIsIFwic291cFwiLCBcImhvdFwiLCBcImFsbFwiXSxcblxuXHRbYmFjb24sIG9uaW9uLCBnYXJsaWMsIGNoaWNrZW5zdG9jaywgY2FubmVsaW5pX2JlYW5zLCB0b21hdG9fcGFzdGVdXG4pO1xuY29uc3QgbWVhbGxpc3QgPSBbXG5cdHZlbmlzb25fY2hpbGksXG5cdG1hcnJ5bWVjaGlja2VuLFxuXHRjaGlja2VuX3NvdXAsXG5cdHBhc3RhX2ZhZ2lvbGUsXG5cdHBvdHN0aWNrZXJzLFxuXHRTYWxtb24sXG5cdHBhcGVyVG93ZWxzLFxuXHRpY2VDcmVhbSxcblx0UG9wc2ljbGVzLFxuXTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBtZWFsbGlzdCB9IGZyb20gXCIuL21lYWxzXCI7XG5cbmxldCBwb3NzaWJsZW1lYWxzID0gW107XG4vL2FjdHMgYXMgdGhlIGFycmF5IHRvIGhvbGQgbWVhbHMgdGhhdCBhcmUgc2VsZWN0ZWQgYXMgcG9zc2libGUgb3B0aW9ucywgc3RvcmVzIHRoZW0gYXMgdGhlIGZ1bGwgb2JqZWN0c1xubGV0IHNlbGVjdGVkbWVhbHMgPSBbXTtcbmxldCBmaW5hbGxpc3QgPSBbXTtcbmxldCBsaXN0X29mX21lYWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZWFsX2xpc3RcIik7XG5sZXQgY2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO1xuLy8gZ2xvYmFsIHZhcmlhYmxlc1xubGV0IG1pZGRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWlkZGxlXCIpO1xubGV0IGNyZWF0ZWxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZV9saXN0XCIpO1xuY29uc3QgbGlzdG9mTWVhbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lYWxfbGlzdFwiKTtcbmxldCBzdWJtaXRidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKTtcbmxldCBncm9jZXJpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyb2Nlcmllc1wiKTtcblxuLy9PbmNlIHN1Ym1pdCBidXR0b24gaXMgY2xpY2tlZCwgZ29lcyB0aHJvdWdoIGFuZCBnZXRzIGFsbCBjaGVja2VkIHZhbHVlc1xuLy9UdXJucyB0aGUgdmFsdWVzIGludG8gYW4gYXJyYXkgY2FsbGVkIHRhZ2xpc3QuICBFdmVyeXRpbWUgaXQgaXMgY2xpY2tlZCBpdCB3aXBlcyBpdCBjbGVhbiBhbmQgcmVtYWtlcyB0aGUgbGlzdFxuZnVuY3Rpb24gZ2V0VGFncygpIHtcblx0bGV0IHRhZ2xpc3QgPSBbXTtcblx0Y29uc3QgY2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0J2lucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkJ1xuXHQpO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGNoZWNrYm94ZXMubGVuZ3RoOyBpKyspIHtcblx0XHR0YWdsaXN0LnB1c2goY2hlY2tib3hlc1tpXS52YWx1ZSk7XG5cdH1cblx0aWYgKHRhZ2xpc3QubGVuZ3RoID09IDApIHtcblx0XHRhbGVydChcIlBsZWFzZSBtYWtlIGEgc2VsZWN0aW9uXCIpO1xuXHRcdHJldHVybjtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gdGFnbGlzdDtcblx0fVxufVxuXG4vL2NoZWNrcyBpZiB0aGUgc2Vjb25kIGFycmF5IGlzIGEgc3Vic2V0IG9mIHRoZSBmaXJzdCBhcnJheVxuZnVuY3Rpb24gaXNTdWJzZXQodGFnYXJyYXksIG1lYWxhcnJheSkge1xuXHRyZXR1cm4gdGFnYXJyYXkuZXZlcnkoKGVsZW1lbnQpID0+IG1lYWxhcnJheS5pbmNsdWRlcyhlbGVtZW50KSk7XG59XG4vL3RoaXMgY2hlY2tzIHRvIHNlZSBpZiB0aGUgdGFnIGVsZW1lbnRzIGFyZSBpbiBlYWNoIGZvb2QgZWxlbWVudHNcbmZ1bmN0aW9uIGNyb3NzQ2hlY2sodGFnbGlzdCkge1xuXHRtaWRkbGUuaW5uZXJIVE1MID0gXCJcIjtcblx0cG9zc2libGVtZWFscyA9IFtdO1xuXG5cdGZvciAobGV0IG1lYWwgb2YgbWVhbGxpc3QpIHtcblx0XHQvL2ZvciBldmVyeSBtZWFsIGluIG1lYWwgbGlzdFxuXHRcdC8vY2FsbHMgaXNTdWJzZXQgdG8gc2VlIGlmIHRoZSB0YWdhcnJheSBtYXRjaGVzIHRoZSB0YWcgYXJyYXkgb2YgdGhhdCBtZWFsLlxuXHRcdC8vSWYgdGhlcmVzIGEgbWF0Y2gsIGNyZWF0ZSBhIG5ldyBjb3B5IG9mIHRoZSBtZWFsLCBhbmQgdGhlbiBwdXQgaXQgaW50byBhbiBhcnJheSBvZiBwb3NzaWJsZSBtZWFsc1xuXHRcdGlmIChpc1N1YnNldCh0YWdsaXN0LCBtZWFsLnRhZ3MpID09IHRydWUpIHtcblx0XHRcdGxldCBwb3NzaWJsZW1lYWwgPSBtZWFsO1xuXHRcdFx0cG9zc2libGVtZWFscy5wdXNoKHBvc3NpYmxlbWVhbCk7XG5cdFx0fVxuXHR9XG5cdGlmIChwb3NzaWJsZW1lYWxzLmxlbmd0aCA9PT0gMCkge1xuXHRcdGxldCB0YWdsaXN0ID0gW107XG5cdFx0Y29uc3QgY2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0XHQnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQnXG5cdFx0KTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNoZWNrYm94ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNoZWNrYm94ZXNbaV0uY2hlY2tlZCA9IGZhbHNlO1xuXHRcdH1cblxuXHRcdGFsZXJ0KFwiTm8gbWF0Y2hlcyBmb3VuZC4gIFRyeSBhIGRpZmZlcmVudCBzZWxlY3Rpb25cIik7XG5cdH1cbn1cblxuLy9tYWtlcyBidXR0b25zIGZvciB0aGUgbWVhbHMgYmFzZWQgb24gdGhlIHRhZ3MgdGhhdCBtYXRjaFxuZnVuY3Rpb24gbWFrZUVsZW1lbnQodHlwZSwgaWRlbnRpdHksIHdoZXJlLCB0ZXh0KSB7XG5cdGxldCBwb29wcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG5cdHBvb3BzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGlkZW50aXR5KTtcblx0cG9vcHMuaW5uZXJIVE1MID0gdGV4dDtcblx0d2hlcmUuYXBwZW5kKHBvb3BzKTtcblx0cG9vcHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGFkZFRvR3JvY2VyeUxpc3QocG9vcHMpKTtcbn1cblxuLy93aGVuIHRoZSBtZWFsIGJ1dHRvbiBpcyBwcmVzc2VkLCBtYWtlIHN1cmUgdGhhdCBpdCBtYXRjaGVzIGEgbWVhbCwgYW5kIHRoZW4gYWRkIHRoYXQgbWVhbCBvYmplY3QgdG8gYSBmaW5hbCBhcnJheVxuZnVuY3Rpb24gYWRkVG9Hcm9jZXJ5TGlzdCh0aGVtZWFsKSB7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgbWVhbGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRpZiAodGhlbWVhbC5pbm5lckhUTUwgPT09IG1lYWxsaXN0W2ldLm5hbWUpIHtcblx0XHRcdGxldCBmaW5hbG1lYWwgPSBtZWFsbGlzdFtpXTtcblx0XHRcdGZpbmFsbGlzdC5wdXNoKGZpbmFsbWVhbCk7XG5cdFx0XHRjb25zb2xlLmxvZyhmaW5hbGxpc3QpO1xuXHRcdH1cblx0fVxuXHRkaXNwbGF5TWVhbHMoKTtcbn1cbi8vcmVtb3ZlcyBzb21lIGl0ZW0gZnJvbSBhbiBhcnJheVxuZnVuY3Rpb24gUmVtb3ZlKHRoaW5neSkge1xuXHRjb25zb2xlLmxvZyhcInRoaXMgaXMgYW4gYXJyYXk/XCIpO1xuXHRjb25zb2xlLmxvZyhmaW5hbGxpc3QpO1xuXHRjb25zb2xlLmxvZyhcInBvc2l0aW9uIGluIGFycmF5XCIpO1xuXHRmaW5hbGxpc3Quc3BsaWNlKHRoaW5neSwgMSk7XG5cdGRpc3BsYXlNZWFscyhmaW5hbGxpc3QpO1xufVxuLy9kaXNwbGF5cyB0aGUgbWVhbHMgaW4gZmluYWxsaXN0IGFzIGJ1dHRvbnNcbmZ1bmN0aW9uIGRpc3BsYXlNZWFscygpIHtcblx0bGlzdF9vZl9tZWFscy5pbm5lckhUTUwgPSBcIlwiO1xuXHRjb25zb2xlLmxvZyhcIlRoaXMgaXMgdGhlIGJlZ2luaW5uaW5nIG9mIGRpc3BsYXkgbWVhbHMgXCIgKyBmaW5hbGxpc3QpO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGZpbmFsbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBmaW5hbGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdFx0ZmluYWxidXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsaXN0bWVhbFwiKTtcblx0XHRmaW5hbGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJ1dHRvblwiW2ldKTtcblx0XHRmaW5hbGJ1dHRvbi5pbm5lckhUTUwgPSBmaW5hbGxpc3RbaV0ubmFtZTtcblx0XHRsaXN0X29mX21lYWxzLmFwcGVuZChmaW5hbGJ1dHRvbik7XG5cdFx0ZmluYWxidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IGZpbmFsbGlzdFtpXS5pbmdyZWRpZW50cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRmaW5hbGJ1dHRvbi5pbm5lckhUTUwgKz0gZmluYWxsaXN0W2ldLmluZ3JlZGllbnRzW2pdLm5hbWUgKyBcIiBcIjtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRmaW5hbGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XG5cdFx0XHRmaW5hbGJ1dHRvbi5pbm5lckhUTUwgPSBmaW5hbGxpc3RbaV0ubmFtZTtcblx0XHR9KTtcblx0XHRmaW5hbGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0ZmluYWxsaXN0LnNwbGljZShbaV0sIDEpO1xuXHRcdFx0ZGlzcGxheU1lYWxzKCk7XG5cdFx0fSk7XG5cdH1cbn1cblxuLy9hZGRzIHRoZSB0aXRsZXMgdG8gdGhlIGdyb2NlcnkgbGlzdFxuZnVuY3Rpb24gYWRkbWlkZGxlVGl0bGUoZG9jLCBpZCwgY2xzLCBpbm5lciwgY2VsbCkge1xuXHRsZXQgYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2VsbCk7XG5cdGRvYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGRvYy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG5cdGRvYy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBjbHMpO1xuXHRkb2MuaW5uZXJIVE1MID0gaW5uZXI7XG5cdGJveC5hcHBlbmQoZG9jKTtcbn1cblxuZnVuY3Rpb24gYWRkTGlzdEVsZW1lbnQoZmluYWxsaXN0LCBpbmdyZWRpZW50cywgbG9jYXRpb24sIGNlbGwpIHtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBmaW5hbGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRmb3IgKGxldCBqID0gMDsgaiA8IGZpbmFsbGlzdFtpXS5pbmdyZWRpZW50cy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKGZpbmFsbGlzdFtpXS5pbmdyZWRpZW50c1tqXS5sb2NhdGlvbiA9PT0gbG9jYXRpb24pIHtcblx0XHRcdFx0bGV0IHByb2R1Y2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjZWxsKTsgLy9nZXRzIHRoZSBjZWxsIGFuZCBhc3NpZ25zIGl0IGEgbmFtZVxuXHRcdFx0XHRsZXQgcHJvZHVjZWl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRcdFx0XHRwcm9kdWNlaXRlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxpc3RpdGVtc1wiKTtcblx0XHRcdFx0cHJvZHVjZWl0ZW0uaW5uZXJIVE1MID0gZmluYWxsaXN0W2ldLmluZ3JlZGllbnRzW2pdLm5hbWU7XG5cdFx0XHRcdHByb2R1Y2VpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRcdFx0cHJvZHVjZWl0ZW0ucmVtb3ZlKCk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHByb2R1Y2UuYXBwZW5kKHByb2R1Y2VpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbWFrZUdyb2NlcnlMaXN0KCkge1xuXHQvL2NvbnZlcnQgdGhlIG1pZGRsZSBwYWdlIHRvIHRoZSBsaXN0IG9mIGdyb2Nlcmllc1xuXHRtaWRkbGUuaW5uZXJIVE1MID0gXCJcIjtcblx0bWlkZGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZ3JvY2VyeW1pZGRsZVwiKTtcblx0bWFrZUdyaWQoMiwgNik7XG5cdGFkZG1pZGRsZVRpdGxlKFwiZGFpcnl0aXRsZVwiLCBcInRpdGxlMVwiLCBcInRpdGxlXCIsIFwiRGFpcnlcIiwgXCJjZWxsMDBcIik7XG5cdGFkZG1pZGRsZVRpdGxlKFwiUHJvZHVjZVwiLCBcInRpdGxlMlwiLCBcInRpdGxlXCIsIFwiUHJvZHVjZVwiLCBcImNlbGwwMVwiKTtcblx0YWRkbWlkZGxlVGl0bGUoXCJGcm96ZW5cIiwgXCJ0aXRsZTNcIiwgXCJ0aXRsZVwiLCBcIkZyb3plblwiLCBcImNlbGwwMlwiKTtcblx0YWRkbWlkZGxlVGl0bGUoXCJDYW5uZWRcIiwgXCJ0aXRsZTRcIiwgXCJ0aXRsZVwiLCBcIk1lYXRcIiwgXCJjZWxsMDNcIik7XG5cdGFkZG1pZGRsZVRpdGxlKFwiT3RoZXJcIiwgXCJ0aXRsZTRcIiwgXCJ0aXRsZVwiLCBcIk90aGVyXCIsIFwiY2VsbDA0XCIpO1xuXHRhZGRtaWRkbGVUaXRsZShcIk5vbi1Gb29kXCIsIFwidGl0bGU0XCIsIFwidGl0bGVcIiwgXCJOb24tRm9vZFwiLCBcImNlbGwwNVwiKTtcblx0YWRkTGlzdEVsZW1lbnQoZmluYWxsaXN0LCBmaW5hbGxpc3QuaW5ncmVkaWVudHMsIFwicHJvZHVjZVwiLCBcImNlbGwxMVwiKTtcblx0YWRkTGlzdEVsZW1lbnQoZmluYWxsaXN0LCBmaW5hbGxpc3QuaW5ncmVkaWVudHMsIFwiZGFpcnlcIiwgXCJjZWxsMTBcIik7XG5cdGFkZExpc3RFbGVtZW50KGZpbmFsbGlzdCwgZmluYWxsaXN0LmluZ3JlZGllbnRzLCBcIm1lYXRcIiwgXCJjZWxsMTNcIik7XG5cdGFkZExpc3RFbGVtZW50KGZpbmFsbGlzdCwgZmluYWxsaXN0LmluZ3JlZGllbnRzLCBcImZyb3plblwiLCBcImNlbGwxMlwiKTtcblx0YWRkTGlzdEVsZW1lbnQoZmluYWxsaXN0LCBmaW5hbGxpc3QuaW5ncmVkaWVudHMsIFwib3RoZXJcIiwgXCJjZWxsMTRcIik7XG5cdGFkZExpc3RFbGVtZW50KGZpbmFsbGlzdCwgZmluYWxsaXN0LmluZ3JlZGllbnRzLCBcIm5vbmZvb2RcIiwgXCJjZWxsMTVcIik7XG59XG5cbmZ1bmN0aW9uIG1ha2VHcmlkKHJvd3MsIGNvbHMpIHtcblx0bGV0IGdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyb2NlcnltaWRkbGVcIik7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XG5cdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBjb2xzOyBqKyspIHtcblx0XHRcdGNvbnN0IGdyaWRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdGdyaWRJdGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZ3JpZGx5ZmVcIik7XG5cdFx0XHRncmlkSXRlbS5pZCA9IGBjZWxsJHtpfSR7an1gO1xuXHRcdFx0Z3JpZC5hcHBlbmRDaGlsZChncmlkSXRlbSk7XG5cdFx0fVxuXHR9XG59XG5cbi8vfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+QUNUVUFMIEVYRUNVVElORyBDT0RFfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+flxuXG4vL3J1bnMgdGhlIGZ1bmN0aW9uIHdoZW4gYSB0YWcgaXMgY2xpY2tlZCBpbnN0ZWFkIG9mIHRoZSBzdWJtaXQgYnV0dG9uXG5mb3IgKGxldCBpID0gMDsgaSA8IGNoZWNrYm94ZXMubGVuZ3RoOyBpKyspIHtcblx0Y2hlY2tib3hlc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGNyb3NzQ2hlY2soZ2V0VGFncygpKTtcblx0XHRwb3NzaWJsZW1lYWxzLnNvcnQoKGEsIGIpID0+IHtcblx0XHRcdGlmIChhLm5hbWUgPCBiLm5hbWUpIHtcblx0XHRcdFx0cmV0dXJuIC0xO1xuXHRcdFx0fSBlbHNlIGlmIChhLm5hbWUgPiBiLm5hbWUpIHtcblx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdH1cblx0XHR9KTsgLy9hbHBoYWJldGl6ZXMgdGhlIGFycmF5XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHBvc3NpYmxlbWVhbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdG1ha2VFbGVtZW50KFwiYnV0dG9uXCIsIFwicG9zc2libGVtZWFsXCIsIG1pZGRsZSwgcG9zc2libGVtZWFsc1tpXS5uYW1lKTtcblx0XHR9XG5cdH0pO1xufVxuc3VibWl0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdGNyb3NzQ2hlY2soZ2V0VGFncygpKTtcblx0cG9zc2libGVtZWFscy5zb3J0KChhLCBiKSA9PiB7XG5cdFx0aWYgKGEubmFtZSA8IGIubmFtZSkge1xuXHRcdFx0cmV0dXJuIC0xO1xuXHRcdH0gZWxzZSBpZiAoYS5uYW1lID4gYi5uYW1lKSB7XG5cdFx0XHRyZXR1cm4gMTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXHR9KTsgLy9hbHBoYWJldGl6ZXMgdGhlIGFycmF5XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwb3NzaWJsZW1lYWxzLmxlbmd0aDsgaSsrKSB7XG5cdFx0bWFrZUVsZW1lbnQoXCJidXR0b25cIiwgXCJwb3NzaWJsZW1lYWxcIiwgbWlkZGxlLCBwb3NzaWJsZW1lYWxzW2ldLm5hbWUpO1xuXHR9XG59KTtcblxuZ3JvY2VyaWVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdG1ha2VHcm9jZXJ5TGlzdCgpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=