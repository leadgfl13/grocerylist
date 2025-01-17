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
	font-weight: 700;
}

button:hover {
	background-color: #032034;
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
	flex-grow: 0;
	background-color: #57cc99;
	color: #22577a;
}

#middle {
	margin-top: 5px;

	overflow-y: auto;
	height: 475px;
	flex-basis: 60%;
	background-color: #57cc99;
	display: grid;
	justify-content: center;
	align-items: center;
	grid-template-rows: 1fr 1fr 1fr 1fr;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-auto-rows: auto;
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
	height: 100px;
	width: 200px;
	justify-content: center;
	align-items: center;
	margin: auto;
	background-color: #22577a;
	box-shadow: 2px 2px 4x 4px;
	border: 1px solid #06314d;
	margin-bottom: 5px;
}
.possiblemeal:hover {
	background-color: #032034;
}

.listmeal:hover {
	background-color: #032034;
}

#meal_list {
	display: flex;
	margin: 20px;
	gap: 8px;
	flex-direction: column;
}

#formcontainer {
	height: 400px;
	overflow-y: auto;
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
	margin-left: 25px;
	margin-bottom: 20px;
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
.listitems:hover {
	background-color: #042a43;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC,WAAW;AACZ;AACA;CACC,eAAe;CACf,0BAA0B;CAC1B,kBAAkB;AACnB;;AAEA;CACC,yBAAyB;CACzB,kBAAkB;CAClB,mCAAmC;CACnC,cAAc;CACd,gBAAgB;AACjB;;AAEA;CACC,yBAAyB;AAC1B;AACA;CACC,WAAW;CACX,aAAa;CACb,YAAY;CACZ,aAAa;CACb,sBAAsB;AACvB;;AAEA;;CAEC,eAAe;CACf,aAAa;CACb,mBAAmB;CACnB,yBAAyB;CACzB,cAAc;CACd,eAAe;CACf,6EAA6E;CAC7E,0BAA0B;CAC1B,kBAAkB;AACnB;AACA;CACC,cAAc;CACd,uBAAuB;CACvB,mBAAmB;CACnB,eAAe;AAChB;;AAEA;CACC,eAAe;CACf,yBAAyB;CACzB,aAAa;CACb,mBAAmB;AACpB;AACA;CACC,eAAe;CACf,yBAAyB;AAC1B;;AAEA;CACC,gBAAgB;CAChB,6BAA6B;CAC7B,aAAa;CACb,sBAAsB;CACtB,8BAA8B;CAC9B,eAAe;CACf,cAAc;CACd,YAAY;CACZ,yBAAyB;CACzB,cAAc;AACf;;AAEA;CACC,eAAe;;CAEf,gBAAgB;CAChB,aAAa;CACb,eAAe;CACf,yBAAyB;CACzB,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,mCAAmC;CACnC,sCAAsC;CACtC,oBAAoB;CACpB,aAAa;AACd;;AAEA;CACC,4BAA4B;CAC5B,YAAY;CACZ,cAAc;CACd,eAAe;CACf,yBAAyB;CACzB,aAAa;CACb,sBAAsB;CACtB,8BAA8B;AAC/B;;AAEA;CACC,aAAa;CACb,YAAY;CACZ,uBAAuB;CACvB,mBAAmB;CACnB,YAAY;CACZ,yBAAyB;CACzB,0BAA0B;CAC1B,yBAAyB;CACzB,kBAAkB;AACnB;AACA;CACC,yBAAyB;AAC1B;;AAEA;CACC,yBAAyB;AAC1B;;AAEA;CACC,aAAa;CACb,YAAY;CACZ,QAAQ;CACR,sBAAsB;AACvB;;AAEA;CACC,aAAa;CACb,gBAAgB;CAChB,gBAAgB;CAChB,aAAa;CACb,sBAAsB;AACvB;;AAEA;CACC,gBAAgB;CAChB,eAAe;CACf,6EAA6E;CAC7E,aAAa;CACb,mBAAmB;CACnB,YAAY;CACZ,QAAQ;CACR,cAAc;AACf;;AAEA;;CAEC,UAAU;CACV,YAAY;CACZ,kBAAkB;CAClB,YAAY;CACZ,mBAAmB;CACnB,aAAa;CACb,iBAAiB;CACjB,mBAAmB;AACpB;;AAEA;CACC,WAAW;CACX,aAAa;CACb,2BAA2B;CAC3B,8CAA8C;AAC/C;;AAEA;CACC,mBAAmB;CACnB,6BAA6B;CAC7B,8BAA8B;AAC/B;;AAEA;CACC,gBAAgB;CAChB,kBAAkB;CAClB,eAAe;CACf,cAAc;AACf;;AAEA;CACC,kBAAkB;CAClB,kBAAkB;AACnB;AACA;CACC,kBAAkB;AACnB;AACA;CACC,kBAAkB;AACnB;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,YAAY;CACZ,gBAAgB;CAChB,aAAa;CACb,mBAAmB;CACnB,sBAAsB;CACtB,QAAQ;AACT;;AAEA;CACC,kBAAkB;CAClB,eAAe;CACf,UAAU;CACV,cAAc;CACd,yBAAyB;CACzB,kBAAkB;CAClB,yBAAyB;AAC1B;AACA;CACC,yBAAyB;AAC1B;;AAEA;;;;;;CAMC,aAAa;CACb,mBAAmB;CACnB,uBAAuB;AACxB","sourcesContent":["body {\n\tmargin: 0px;\n}\nform {\n\tfont-size: 28px;\n\ttext-decoration: underline;\n\tpadding-left: 10px;\n}\n\nbutton {\n\tbackground-color: #22577a;\n\tborder-radius: 8px;\n\tbox-shadow: 2px 2px 2px 2px #032034;\n\tcolor: #80ed99;\n\tfont-weight: 700;\n}\n\nbutton:hover {\n\tbackground-color: #032034;\n}\n#mainbody {\n\tmargin: 0px;\n\theight: 100vh;\n\twidth: 100vw;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n#titlelogo,\n#bottom {\n\tflex-basis: 20%;\n\tdisplay: flex;\n\talign-items: center;\n\tbackground-color: #22577a;\n\tcolor: #80ed99;\n\tfont-size: 36px;\n\tfont-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n\ttext-decoration: underline;\n\tpadding-left: 20px;\n}\n#bottom {\n\tcolor: #80ed99;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-size: 16px;\n}\n\n#mid {\n\tflex-basis: 60%;\n\tbackground-color: #57cc99;\n\tdisplay: flex;\n\tflex-direction: row;\n}\n#bottom {\n\tflex-basis: 20%;\n\tbackground-color: #22577a;\n}\n\n#midleft {\n\tfont-weight: 700;\n\tborder-right: solid 2px black;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tflex-basis: 20%;\n\tflex-shrink: 0;\n\tflex-grow: 0;\n\tbackground-color: #57cc99;\n\tcolor: #22577a;\n}\n\n#middle {\n\tmargin-top: 5px;\n\n\toverflow-y: auto;\n\theight: 475px;\n\tflex-basis: 60%;\n\tbackground-color: #57cc99;\n\tdisplay: grid;\n\tjustify-content: center;\n\talign-items: center;\n\tgrid-template-rows: 1fr 1fr 1fr 1fr;\n\tgrid-template-columns: 1fr 1fr 1fr 1fr;\n\tgrid-auto-rows: auto;\n\tgrid-gap: 8px;\n}\n\n#midright {\n\tborder-left: 2px solid black;\n\tflex-grow: 0;\n\tflex-shrink: 0;\n\tflex-basis: 20%;\n\tbackground-color: #57cc99;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n}\n\n.possiblemeal {\n\theight: 100px;\n\twidth: 200px;\n\tjustify-content: center;\n\talign-items: center;\n\tmargin: auto;\n\tbackground-color: #22577a;\n\tbox-shadow: 2px 2px 4x 4px;\n\tborder: 1px solid #06314d;\n\tmargin-bottom: 5px;\n}\n.possiblemeal:hover {\n\tbackground-color: #032034;\n}\n\n.listmeal:hover {\n\tbackground-color: #032034;\n}\n\n#meal_list {\n\tdisplay: flex;\n\tmargin: 20px;\n\tgap: 8px;\n\tflex-direction: column;\n}\n\n#formcontainer {\n\theight: 400px;\n\toverflow-y: auto;\n\tmargin-top: 20px;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n#selectionbox {\n\tfont-weight: 400;\n\tfont-size: 20px;\n\tfont-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: 3px;\n\tgap: 8px;\n\tcolor: #22577a;\n}\n\n#groceries,\n#submit {\n\twidth: 80%;\n\theight: 30px;\n\tborder-radius: 8px;\n\tmargin: auto;\n\tmargin-bottom: 20px;\n\tpadding: auto;\n\tmargin-left: 25px;\n\tmargin-bottom: 20px;\n}\n\n#grocerymiddle {\n\twidth: 100%;\n\tdisplay: grid;\n\tgrid-template-rows: 20% 80%;\n\tgrid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\n}\n\n#grocerymiddle > div {\n\talign-items: center;\n\tborder-right: 2px solid black;\n\tborder-bottom: 2px solid black;\n}\n\n.title {\n\tfont-weight: 700;\n\ttext-align: center;\n\tfont-size: 28px;\n\tcolor: #22577a;\n}\n\n#title1 {\n\tgrid-area: 1/1/2/2;\n\ttext-align: center;\n}\n#title2 {\n\tgrid-area: 1/2/2/3;\n}\n#title3 {\n\tgrid-area: 1/3/2/4;\n}\n\n#title4 {\n\tgrid-area: 1/4/2/5;\n}\n\n.gridlyfe {\n\tflex-grow: 0;\n\toverflow-y: auto;\n\tdisplay: flex;\n\talign-items: center;\n\tflex-direction: column;\n\tgap: 8px;\n}\n\n.listitems {\n\ttext-align: center;\n\tfont-size: 14px;\n\twidth: 80%;\n\tcolor: #57cc99;\n\tbackground-color: #22577a;\n\tborder-radius: 8px;\n\tborder: 2px solid #82f38d;\n}\n.listitems:hover {\n\tbackground-color: #042a43;\n}\n\n#cell00,\n#cell01,\n#cell02,\n#cell03,\n#cell04,\n#cell05 {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n"],"sourceRoot":""}]);
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
const diced_tomatoes = new Ingredients("diced tomatos", "produce");
const venison = new Ingredients("venison", "meat");
const groundmeat = new Ingredients("ground meat", "meat");
const wontonwrappers = new Ingredients("wonton wrappers", "produce");
const cabbage = new Ingredients("cabbage", "produce");
const salmon = new Ingredients("salmon", "meat");
const papertowels = new Ingredients("paper towels", "nonfood");
const icecream = new Ingredients("ice cream", "frozen");
const popsicles = new Ingredients("popsicles", "frozen");
const napkins = new Ingredients("napkins", "nonfood");
const handsoap = new Ingredients("handsoap", "nonfood");
const dishsoap = new Ingredients("dishsoap", "nonfood");
const laundrydetergent = new Ingredients("laundry detergent", "nonfood");
const dishwasher_pods = new Ingredients("dishwasher pods", "nonfood");
const chips = new Ingredients("chips", "other");
const advil = new Ingredients("advil", "nonfood");

let macaroniandcheese = new Meal(
	"macaroni and cheese",
	["all", "hot", "creamy"],
	napkins
);
let Advil = new Meal("advil", ["nonfood", "all"]);
let Chips = new Meal("chips", ["nonfood", "all", "snacks"], chips);
let Napkins = new Meal("napkins", ["nonfood", "all"], napkins);
let Handsoap = new Meal("handsoap", ["nonfood", "all"], handsoap);
let Dishsoap = new Meal("dishsoap", ["nonfood", "all"], dishsoap);
let Laundrydetergent = new Meal(
	"laundrydetergent",
	["nonfood", "all"],
	laundrydetergent
);
let dishwasherpods = new Meal(
	"dishwasher popds",
	["nonfood", "all"],
	dishwasher_pods
);
let paperTowels = new Meal("paper towels", ["nonfood", "all"], [papertowels]);
let iceCream = new Meal("ice cream", ["frozen", "all"], [icecream]);
let Popsicles = new Meal("popsicles", ["frozen", "all"], [popsicles]);

let Salmon = new Meal(
	"salmon",
	["fish", "seafood", ",meat", "healthy", "all"],
	[salmon]
);

let potstickers = new Meal(
	"potstickers",
	["hot", "crispy", "savory", "ethnic", "all"],
	[groundmeat, wontonwrappers, cabbage, carrots, garlic]
);
let chicken_soup = new Meal(
	"chicken soup",
	["dinner", "soup", "hot", "chicken", "all"],
	[chickenstock, onion, carrots, celery, chicken]
);

let venison_chili = new Meal(
	"venison chili",
	["venison", "chili", "hot", "all"],

	[venison, onion, garlic, chickenstock, chili_beans, diced_tomatoes]
);
let marrymechicken = new Meal(
	"marry me chicken",
	["chicken", "creamy", "hot", "all"],
	[chicken, cream, garlic, chickenstock, chili_beans, diced_tomatoes]
);
let pasta_fagiole = new Meal(
	"pasta_fagiole",
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
	Napkins,
	Laundrydetergent,
	dishwasherpods,
	Handsoap,
	Dishsoap,
	Chips,
	Advil,
	macaroniandcheese,
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
			console.log(finallist);
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
	let produce = document.getElementById(cell); //gets the cell and assigns it a name
	produce.innerHTML = "";
	for (let j = 0; j < finalingredients.length; j++) {
		if (finalingredients[j].location === location) {
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
	//need to clear the innerHTML of the grocerymiddle cells
	finalingredients = [];
	console.log(finallist);
	let grocerymiddle = document.getElementById("grocerymiddle");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sVUFBVSxVQUFVLFlBQVksYUFBYSxnQ0FBZ0MsZ0JBQWdCLEdBQUcsUUFBUSxvQkFBb0IsK0JBQStCLHVCQUF1QixHQUFHLFlBQVksOEJBQThCLHVCQUF1Qix3Q0FBd0MsbUJBQW1CLHFCQUFxQixHQUFHLGtCQUFrQiw4QkFBOEIsR0FBRyxhQUFhLGdCQUFnQixrQkFBa0IsaUJBQWlCLGtCQUFrQiwyQkFBMkIsR0FBRywwQkFBMEIsb0JBQW9CLGtCQUFrQix3QkFBd0IsOEJBQThCLG1CQUFtQixvQkFBb0Isd0ZBQXdGLCtCQUErQix1QkFBdUIsR0FBRyxXQUFXLG1CQUFtQiw0QkFBNEIsd0JBQXdCLG9CQUFvQixHQUFHLFVBQVUsb0JBQW9CLDhCQUE4QixrQkFBa0Isd0JBQXdCLEdBQUcsV0FBVyxvQkFBb0IsOEJBQThCLEdBQUcsY0FBYyxxQkFBcUIsa0NBQWtDLGtCQUFrQiwyQkFBMkIsbUNBQW1DLG9CQUFvQixtQkFBbUIsaUJBQWlCLDhCQUE4QixtQkFBbUIsR0FBRyxhQUFhLG9CQUFvQix1QkFBdUIsa0JBQWtCLG9CQUFvQiw4QkFBOEIsa0JBQWtCLDRCQUE0Qix3QkFBd0Isd0NBQXdDLDJDQUEyQyx5QkFBeUIsa0JBQWtCLEdBQUcsZUFBZSxpQ0FBaUMsaUJBQWlCLG1CQUFtQixvQkFBb0IsOEJBQThCLGtCQUFrQiwyQkFBMkIsbUNBQW1DLEdBQUcsbUJBQW1CLGtCQUFrQixpQkFBaUIsNEJBQTRCLHdCQUF3QixpQkFBaUIsOEJBQThCLCtCQUErQiw4QkFBOEIsdUJBQXVCLEdBQUcsdUJBQXVCLDhCQUE4QixHQUFHLHFCQUFxQiw4QkFBOEIsR0FBRyxnQkFBZ0Isa0JBQWtCLGlCQUFpQixhQUFhLDJCQUEyQixHQUFHLG9CQUFvQixrQkFBa0IscUJBQXFCLHFCQUFxQixrQkFBa0IsMkJBQTJCLEdBQUcsbUJBQW1CLHFCQUFxQixvQkFBb0Isd0ZBQXdGLGtCQUFrQix3QkFBd0IsaUJBQWlCLGFBQWEsbUJBQW1CLEdBQUcsMEJBQTBCLGVBQWUsaUJBQWlCLHVCQUF1QixpQkFBaUIsd0JBQXdCLGtCQUFrQixzQkFBc0Isd0JBQXdCLEdBQUcsb0JBQW9CLGdCQUFnQixrQkFBa0IsZ0NBQWdDLG1EQUFtRCxHQUFHLDBCQUEwQix3QkFBd0Isa0NBQWtDLG1DQUFtQyxHQUFHLFlBQVkscUJBQXFCLHVCQUF1QixvQkFBb0IsbUJBQW1CLEdBQUcsYUFBYSx1QkFBdUIsdUJBQXVCLEdBQUcsV0FBVyx1QkFBdUIsR0FBRyxXQUFXLHVCQUF1QixHQUFHLGFBQWEsdUJBQXVCLEdBQUcsZUFBZSxpQkFBaUIscUJBQXFCLGtCQUFrQix3QkFBd0IsMkJBQTJCLGFBQWEsR0FBRyxnQkFBZ0IsdUJBQXVCLG9CQUFvQixlQUFlLG1CQUFtQiw4QkFBOEIsdUJBQXVCLDhCQUE4QixHQUFHLG9CQUFvQiw4QkFBOEIsR0FBRywrREFBK0Qsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsR0FBRyxxQkFBcUI7QUFDdHRMO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDck8xQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTtBQUNyQyxpQkFBaUIsdUdBQWE7QUFDOUIsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUN4QmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNib0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3RIQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7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dHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9tZWFscy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG5cdG1hcmdpbjogMHB4O1xufVxuZm9ybSB7XG5cdGZvbnQtc2l6ZTogMjhweDtcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG5cdHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuYnV0dG9uIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzIyNTc3YTtcblx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggIzAzMjAzNDtcblx0Y29sb3I6ICM4MGVkOTk7XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwMzIwMzQ7XG59XG4jbWFpbmJvZHkge1xuXHRtYXJnaW46IDBweDtcblx0aGVpZ2h0OiAxMDB2aDtcblx0d2lkdGg6IDEwMHZ3O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jdGl0bGVsb2dvLFxuI2JvdHRvbSB7XG5cdGZsZXgtYmFzaXM6IDIwJTtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0YmFja2dyb3VuZC1jb2xvcjogIzIyNTc3YTtcblx0Y29sb3I6ICM4MGVkOTk7XG5cdGZvbnQtc2l6ZTogMzZweDtcblx0Zm9udC1mYW1pbHk6IFwiR2lsbCBTYW5zXCIsIFwiR2lsbCBTYW5zIE1UXCIsIENhbGlicmksIFwiVHJlYnVjaGV0IE1TXCIsIHNhbnMtc2VyaWY7XG5cdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuXHRwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG4jYm90dG9tIHtcblx0Y29sb3I6ICM4MGVkOTk7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRmb250LXNpemU6IDE2cHg7XG59XG5cbiNtaWQge1xuXHRmbGV4LWJhc2lzOiA2MCU7XG5cdGJhY2tncm91bmQtY29sb3I6ICM1N2NjOTk7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4jYm90dG9tIHtcblx0ZmxleC1iYXNpczogMjAlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjI1NzdhO1xufVxuXG4jbWlkbGVmdCB7XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdGJvcmRlci1yaWdodDogc29saWQgMnB4IGJsYWNrO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGZsZXgtYmFzaXM6IDIwJTtcblx0ZmxleC1zaHJpbms6IDA7XG5cdGZsZXgtZ3JvdzogMDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzU3Y2M5OTtcblx0Y29sb3I6ICMyMjU3N2E7XG59XG5cbiNtaWRkbGUge1xuXHRtYXJnaW4tdG9wOiA1cHg7XG5cblx0b3ZlcmZsb3cteTogYXV0bztcblx0aGVpZ2h0OiA0NzVweDtcblx0ZmxleC1iYXNpczogNjAlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTdjYzk5O1xuXHRkaXNwbGF5OiBncmlkO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnI7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xuXHRncmlkLWF1dG8tcm93czogYXV0bztcblx0Z3JpZC1nYXA6IDhweDtcbn1cblxuI21pZHJpZ2h0IHtcblx0Ym9yZGVyLWxlZnQ6IDJweCBzb2xpZCBibGFjaztcblx0ZmxleC1ncm93OiAwO1xuXHRmbGV4LXNocmluazogMDtcblx0ZmxleC1iYXNpczogMjAlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTdjYzk5O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5wb3NzaWJsZW1lYWwge1xuXHRoZWlnaHQ6IDEwMHB4O1xuXHR3aWR0aDogMjAwcHg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRtYXJnaW46IGF1dG87XG5cdGJhY2tncm91bmQtY29sb3I6ICMyMjU3N2E7XG5cdGJveC1zaGFkb3c6IDJweCAycHggNHggNHB4O1xuXHRib3JkZXI6IDFweCBzb2xpZCAjMDYzMTRkO1xuXHRtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ucG9zc2libGVtZWFsOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzAzMjAzNDtcbn1cblxuLmxpc3RtZWFsOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzAzMjAzNDtcbn1cblxuI21lYWxfbGlzdCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdG1hcmdpbjogMjBweDtcblx0Z2FwOiA4cHg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbiNmb3JtY29udGFpbmVyIHtcblx0aGVpZ2h0OiA0MDBweDtcblx0b3ZlcmZsb3cteTogYXV0bztcblx0bWFyZ2luLXRvcDogMjBweDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuI3NlbGVjdGlvbmJveCB7XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdGZvbnQtc2l6ZTogMjBweDtcblx0Zm9udC1mYW1pbHk6IFwiR2lsbCBTYW5zXCIsIFwiR2lsbCBTYW5zIE1UXCIsIENhbGlicmksIFwiVHJlYnVjaGV0IE1TXCIsIHNhbnMtc2VyaWY7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHBhZGRpbmc6IDNweDtcblx0Z2FwOiA4cHg7XG5cdGNvbG9yOiAjMjI1NzdhO1xufVxuXG4jZ3JvY2VyaWVzLFxuI3N1Ym1pdCB7XG5cdHdpZHRoOiA4MCU7XG5cdGhlaWdodDogMzBweDtcblx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRtYXJnaW46IGF1dG87XG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XG5cdHBhZGRpbmc6IGF1dG87XG5cdG1hcmdpbi1sZWZ0OiAyNXB4O1xuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4jZ3JvY2VyeW1pZGRsZSB7XG5cdHdpZHRoOiAxMDAlO1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLXJvd3M6IDIwJSA4MCU7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XG59XG5cbiNncm9jZXJ5bWlkZGxlID4gZGl2IHtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Ym9yZGVyLXJpZ2h0OiAycHggc29saWQgYmxhY2s7XG5cdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcbn1cblxuLnRpdGxlIHtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LXNpemU6IDI4cHg7XG5cdGNvbG9yOiAjMjI1NzdhO1xufVxuXG4jdGl0bGUxIHtcblx0Z3JpZC1hcmVhOiAxLzEvMi8yO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jdGl0bGUyIHtcblx0Z3JpZC1hcmVhOiAxLzIvMi8zO1xufVxuI3RpdGxlMyB7XG5cdGdyaWQtYXJlYTogMS8zLzIvNDtcbn1cblxuI3RpdGxlNCB7XG5cdGdyaWQtYXJlYTogMS80LzIvNTtcbn1cblxuLmdyaWRseWZlIHtcblx0ZmxleC1ncm93OiAwO1xuXHRvdmVyZmxvdy15OiBhdXRvO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDhweDtcbn1cblxuLmxpc3RpdGVtcyB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHR3aWR0aDogODAlO1xuXHRjb2xvcjogIzU3Y2M5OTtcblx0YmFja2dyb3VuZC1jb2xvcjogIzIyNTc3YTtcblx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRib3JkZXI6IDJweCBzb2xpZCAjODJmMzhkO1xufVxuLmxpc3RpdGVtczpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwNDJhNDM7XG59XG5cbiNjZWxsMDAsXG4jY2VsbDAxLFxuI2NlbGwwMixcbiNjZWxsMDMsXG4jY2VsbDA0LFxuI2NlbGwwNSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwi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QXlCO0NBQ3pCLGtCQUFrQjtDQUNsQix5QkFBeUI7QUFDMUI7QUFDQTtDQUNDLHlCQUF5QjtBQUMxQjs7QUFFQTs7Ozs7O0NBTUMsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQix1QkFBdUI7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuXFx0bWFyZ2luOiAwcHg7XFxufVxcbmZvcm0ge1xcblxcdGZvbnQtc2l6ZTogMjhweDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG5cXHRwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzIyNTc3YTtcXG5cXHRib3JkZXItcmFkaXVzOiA4cHg7XFxuXFx0Ym94LXNoYWRvdzogMnB4IDJweCAycHggMnB4ICMwMzIwMzQ7XFxuXFx0Y29sb3I6ICM4MGVkOTk7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDMyMDM0O1xcbn1cXG4jbWFpbmJvZHkge1xcblxcdG1hcmdpbjogMHB4O1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3RpdGxlbG9nbyxcXG4jYm90dG9tIHtcXG5cXHRmbGV4LWJhc2lzOiAyMCU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMyMjU3N2E7XFxuXFx0Y29sb3I6ICM4MGVkOTk7XFxuXFx0Zm9udC1zaXplOiAzNnB4O1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiR2lsbCBTYW5zXFxcIiwgXFxcIkdpbGwgU2FucyBNVFxcXCIsIENhbGlicmksIFxcXCJUcmVidWNoZXQgTVNcXFwiLCBzYW5zLXNlcmlmO1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcblxcdHBhZGRpbmctbGVmdDogMjBweDtcXG59XFxuI2JvdHRvbSB7XFxuXFx0Y29sb3I6ICM4MGVkOTk7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxufVxcblxcbiNtaWQge1xcblxcdGZsZXgtYmFzaXM6IDYwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTdjYzk5O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuI2JvdHRvbSB7XFxuXFx0ZmxleC1iYXNpczogMjAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMyMjU3N2E7XFxufVxcblxcbiNtaWRsZWZ0IHtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdGJvcmRlci1yaWdodDogc29saWQgMnB4IGJsYWNrO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0ZmxleC1iYXNpczogMjAlO1xcblxcdGZsZXgtc2hyaW5rOiAwO1xcblxcdGZsZXgtZ3JvdzogMDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTdjYzk5O1xcblxcdGNvbG9yOiAjMjI1NzdhO1xcbn1cXG5cXG4jbWlkZGxlIHtcXG5cXHRtYXJnaW4tdG9wOiA1cHg7XFxuXFxuXFx0b3ZlcmZsb3cteTogYXV0bztcXG5cXHRoZWlnaHQ6IDQ3NXB4O1xcblxcdGZsZXgtYmFzaXM6IDYwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTdjYzk5O1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmcjtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcXG5cXHRncmlkLWF1dG8tcm93czogYXV0bztcXG5cXHRncmlkLWdhcDogOHB4O1xcbn1cXG5cXG4jbWlkcmlnaHQge1xcblxcdGJvcmRlci1sZWZ0OiAycHggc29saWQgYmxhY2s7XFxuXFx0ZmxleC1ncm93OiAwO1xcblxcdGZsZXgtc2hyaW5rOiAwO1xcblxcdGZsZXgtYmFzaXM6IDIwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTdjYzk5O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5wb3NzaWJsZW1lYWwge1xcblxcdGhlaWdodDogMTAwcHg7XFxuXFx0d2lkdGg6IDIwMHB4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0bWFyZ2luOiBhdXRvO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMyMjU3N2E7XFxuXFx0Ym94LXNoYWRvdzogMnB4IDJweCA0eCA0cHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgIzA2MzE0ZDtcXG5cXHRtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcbi5wb3NzaWJsZW1lYWw6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMwMzIwMzQ7XFxufVxcblxcbi5saXN0bWVhbDpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzAzMjAzNDtcXG59XFxuXFxuI21lYWxfbGlzdCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRtYXJnaW46IDIwcHg7XFxuXFx0Z2FwOiA4cHg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2Zvcm1jb250YWluZXIge1xcblxcdGhlaWdodDogNDAwcHg7XFxuXFx0b3ZlcmZsb3cteTogYXV0bztcXG5cXHRtYXJnaW4tdG9wOiAyMHB4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3NlbGVjdGlvbmJveCB7XFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJHaWxsIFNhbnNcXFwiLCBcXFwiR2lsbCBTYW5zIE1UXFxcIiwgQ2FsaWJyaSwgXFxcIlRyZWJ1Y2hldCBNU1xcXCIsIHNhbnMtc2VyaWY7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHBhZGRpbmc6IDNweDtcXG5cXHRnYXA6IDhweDtcXG5cXHRjb2xvcjogIzIyNTc3YTtcXG59XFxuXFxuI2dyb2NlcmllcyxcXG4jc3VibWl0IHtcXG5cXHR3aWR0aDogODAlO1xcblxcdGhlaWdodDogMzBweDtcXG5cXHRib3JkZXItcmFkaXVzOiA4cHg7XFxuXFx0bWFyZ2luOiBhdXRvO1xcblxcdG1hcmdpbi1ib3R0b206IDIwcHg7XFxuXFx0cGFkZGluZzogYXV0bztcXG5cXHRtYXJnaW4tbGVmdDogMjVweDtcXG5cXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4jZ3JvY2VyeW1pZGRsZSB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IDIwJSA4MCU7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcXG59XFxuXFxuI2dyb2NlcnltaWRkbGUgPiBkaXYge1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Ym9yZGVyLXJpZ2h0OiAycHggc29saWQgYmxhY2s7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4udGl0bGUge1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogMjhweDtcXG5cXHRjb2xvcjogIzIyNTc3YTtcXG59XFxuXFxuI3RpdGxlMSB7XFxuXFx0Z3JpZC1hcmVhOiAxLzEvMi8yO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI3RpdGxlMiB7XFxuXFx0Z3JpZC1hcmVhOiAxLzIvMi8zO1xcbn1cXG4jdGl0bGUzIHtcXG5cXHRncmlkLWFyZWE6IDEvMy8yLzQ7XFxufVxcblxcbiN0aXRsZTQge1xcblxcdGdyaWQtYXJlYTogMS80LzIvNTtcXG59XFxuXFxuLmdyaWRseWZlIHtcXG5cXHRmbGV4LWdyb3c6IDA7XFxuXFx0b3ZlcmZsb3cteTogYXV0bztcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDhweDtcXG59XFxuXFxuLmxpc3RpdGVtcyB7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogMTRweDtcXG5cXHR3aWR0aDogODAlO1xcblxcdGNvbG9yOiAjNTdjYzk5O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMyMjU3N2E7XFxuXFx0Ym9yZGVyLXJhZGl1czogOHB4O1xcblxcdGJvcmRlcjogMnB4IHNvbGlkICM4MmYzOGQ7XFxufVxcbi5saXN0aXRlbXM6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMwNDJhNDM7XFxufVxcblxcbiNjZWxsMDAsXFxuI2NlbGwwMSxcXG4jY2VsbDAyLFxcbiNjZWxsMDMsXFxuI2NlbGwwNCxcXG4jY2VsbDA1IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IHsgbWVhbGxpc3QgfTtcbmNsYXNzIE1lYWwge1xuXHRjb25zdHJ1Y3RvcihuYW1lLCB0YWdzLCBpbmdyZWRpZW50cykge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy50YWdzID0gdGFncztcblx0XHR0aGlzLmluZ3JlZGllbnRzID0gaW5ncmVkaWVudHM7XG5cdH1cbn1cbmNsYXNzIEluZ3JlZGllbnRzIHtcblx0Y29uc3RydWN0b3IobmFtZSwgbG9jYXRpb24pIHtcblx0XHQodGhpcy5uYW1lID0gbmFtZSksICh0aGlzLmxvY2F0aW9uID0gbG9jYXRpb24pO1xuXHR9XG59XG5cbmNvbnN0IGNyZWFtID0gbmV3IEluZ3JlZGllbnRzKFwiY3JlYW1cIiwgXCJkYWlyeVwiKTtcbmNvbnN0IGNoaWNrZW5zdG9jayA9IG5ldyBJbmdyZWRpZW50cyhcImNoaWNrZW4gc3RvY2tcIiwgXCJwcm9kdWNlXCIpO1xuY29uc3Qgb25pb24gPSBuZXcgSW5ncmVkaWVudHMoXCJvbmlvblwiLCBcInByb2R1Y2VcIik7XG5jb25zdCBjaGlja2VuID0gbmV3IEluZ3JlZGllbnRzKFwiY2hpY2tlblwiLCBcIm1lYXRcIik7XG5jb25zdCBiYWNvbiA9IG5ldyBJbmdyZWRpZW50cyhcImJhY29uXCIsIFwibWVhdFwiKTtcbmNvbnN0IGNoaWxpX2JlYW5zID0gbmV3IEluZ3JlZGllbnRzKFwiY2hpbGkgYmVhbnNcIiwgXCJwcm9kdWNlXCIpO1xuY29uc3QgZ2FybGljID0gbmV3IEluZ3JlZGllbnRzKFwiZ2FybGljXCIsIFwicHJvZHVjZVwiKTtcbmNvbnN0IGNlbGVyeSA9IG5ldyBJbmdyZWRpZW50cyhcImNlbGVyeVwiLCBcInByb2R1Y2VcIik7XG5jb25zdCBjYXJyb3RzID0gbmV3IEluZ3JlZGllbnRzKFwiY2Fycm90c1wiLCBcInByb2R1Y2VcIik7XG5jb25zdCBjYW5uZWxpbmlfYmVhbnMgPSBuZXcgSW5ncmVkaWVudHMoXCJjYW5uZWxpbmlfYmVhbnNcIiwgXCJwcm9kdWNlXCIpO1xuY29uc3QgdG9tYXRvX3Bhc3RlID0gbmV3IEluZ3JlZGllbnRzKFwidG9tYXRvIHBhc3RlXCIsIFwicHJvZHVjZVwiKTtcbmNvbnN0IGRpY2VkX3RvbWF0b2VzID0gbmV3IEluZ3JlZGllbnRzKFwiZGljZWQgdG9tYXRvc1wiLCBcInByb2R1Y2VcIik7XG5jb25zdCB2ZW5pc29uID0gbmV3IEluZ3JlZGllbnRzKFwidmVuaXNvblwiLCBcIm1lYXRcIik7XG5jb25zdCBncm91bmRtZWF0ID0gbmV3IEluZ3JlZGllbnRzKFwiZ3JvdW5kIG1lYXRcIiwgXCJtZWF0XCIpO1xuY29uc3Qgd29udG9ud3JhcHBlcnMgPSBuZXcgSW5ncmVkaWVudHMoXCJ3b250b24gd3JhcHBlcnNcIiwgXCJwcm9kdWNlXCIpO1xuY29uc3QgY2FiYmFnZSA9IG5ldyBJbmdyZWRpZW50cyhcImNhYmJhZ2VcIiwgXCJwcm9kdWNlXCIpO1xuY29uc3Qgc2FsbW9uID0gbmV3IEluZ3JlZGllbnRzKFwic2FsbW9uXCIsIFwibWVhdFwiKTtcbmNvbnN0IHBhcGVydG93ZWxzID0gbmV3IEluZ3JlZGllbnRzKFwicGFwZXIgdG93ZWxzXCIsIFwibm9uZm9vZFwiKTtcbmNvbnN0IGljZWNyZWFtID0gbmV3IEluZ3JlZGllbnRzKFwiaWNlIGNyZWFtXCIsIFwiZnJvemVuXCIpO1xuY29uc3QgcG9wc2ljbGVzID0gbmV3IEluZ3JlZGllbnRzKFwicG9wc2ljbGVzXCIsIFwiZnJvemVuXCIpO1xuY29uc3QgbmFwa2lucyA9IG5ldyBJbmdyZWRpZW50cyhcIm5hcGtpbnNcIiwgXCJub25mb29kXCIpO1xuY29uc3QgaGFuZHNvYXAgPSBuZXcgSW5ncmVkaWVudHMoXCJoYW5kc29hcFwiLCBcIm5vbmZvb2RcIik7XG5jb25zdCBkaXNoc29hcCA9IG5ldyBJbmdyZWRpZW50cyhcImRpc2hzb2FwXCIsIFwibm9uZm9vZFwiKTtcbmNvbnN0IGxhdW5kcnlkZXRlcmdlbnQgPSBuZXcgSW5ncmVkaWVudHMoXCJsYXVuZHJ5IGRldGVyZ2VudFwiLCBcIm5vbmZvb2RcIik7XG5jb25zdCBkaXNod2FzaGVyX3BvZHMgPSBuZXcgSW5ncmVkaWVudHMoXCJkaXNod2FzaGVyIHBvZHNcIiwgXCJub25mb29kXCIpO1xuY29uc3QgY2hpcHMgPSBuZXcgSW5ncmVkaWVudHMoXCJjaGlwc1wiLCBcIm90aGVyXCIpO1xuY29uc3QgYWR2aWwgPSBuZXcgSW5ncmVkaWVudHMoXCJhZHZpbFwiLCBcIm5vbmZvb2RcIik7XG5cbmxldCBtYWNhcm9uaWFuZGNoZWVzZSA9IG5ldyBNZWFsKFxuXHRcIm1hY2Fyb25pIGFuZCBjaGVlc2VcIixcblx0W1wiYWxsXCIsIFwiaG90XCIsIFwiY3JlYW15XCJdLFxuXHRuYXBraW5zXG4pO1xubGV0IEFkdmlsID0gbmV3IE1lYWwoXCJhZHZpbFwiLCBbXCJub25mb29kXCIsIFwiYWxsXCJdKTtcbmxldCBDaGlwcyA9IG5ldyBNZWFsKFwiY2hpcHNcIiwgW1wibm9uZm9vZFwiLCBcImFsbFwiLCBcInNuYWNrc1wiXSwgY2hpcHMpO1xubGV0IE5hcGtpbnMgPSBuZXcgTWVhbChcIm5hcGtpbnNcIiwgW1wibm9uZm9vZFwiLCBcImFsbFwiXSwgbmFwa2lucyk7XG5sZXQgSGFuZHNvYXAgPSBuZXcgTWVhbChcImhhbmRzb2FwXCIsIFtcIm5vbmZvb2RcIiwgXCJhbGxcIl0sIGhhbmRzb2FwKTtcbmxldCBEaXNoc29hcCA9IG5ldyBNZWFsKFwiZGlzaHNvYXBcIiwgW1wibm9uZm9vZFwiLCBcImFsbFwiXSwgZGlzaHNvYXApO1xubGV0IExhdW5kcnlkZXRlcmdlbnQgPSBuZXcgTWVhbChcblx0XCJsYXVuZHJ5ZGV0ZXJnZW50XCIsXG5cdFtcIm5vbmZvb2RcIiwgXCJhbGxcIl0sXG5cdGxhdW5kcnlkZXRlcmdlbnRcbik7XG5sZXQgZGlzaHdhc2hlcnBvZHMgPSBuZXcgTWVhbChcblx0XCJkaXNod2FzaGVyIHBvcGRzXCIsXG5cdFtcIm5vbmZvb2RcIiwgXCJhbGxcIl0sXG5cdGRpc2h3YXNoZXJfcG9kc1xuKTtcbmxldCBwYXBlclRvd2VscyA9IG5ldyBNZWFsKFwicGFwZXIgdG93ZWxzXCIsIFtcIm5vbmZvb2RcIiwgXCJhbGxcIl0sIFtwYXBlcnRvd2Vsc10pO1xubGV0IGljZUNyZWFtID0gbmV3IE1lYWwoXCJpY2UgY3JlYW1cIiwgW1wiZnJvemVuXCIsIFwiYWxsXCJdLCBbaWNlY3JlYW1dKTtcbmxldCBQb3BzaWNsZXMgPSBuZXcgTWVhbChcInBvcHNpY2xlc1wiLCBbXCJmcm96ZW5cIiwgXCJhbGxcIl0sIFtwb3BzaWNsZXNdKTtcblxubGV0IFNhbG1vbiA9IG5ldyBNZWFsKFxuXHRcInNhbG1vblwiLFxuXHRbXCJmaXNoXCIsIFwic2VhZm9vZFwiLCBcIixtZWF0XCIsIFwiaGVhbHRoeVwiLCBcImFsbFwiXSxcblx0W3NhbG1vbl1cbik7XG5cbmxldCBwb3RzdGlja2VycyA9IG5ldyBNZWFsKFxuXHRcInBvdHN0aWNrZXJzXCIsXG5cdFtcImhvdFwiLCBcImNyaXNweVwiLCBcInNhdm9yeVwiLCBcImV0aG5pY1wiLCBcImFsbFwiXSxcblx0W2dyb3VuZG1lYXQsIHdvbnRvbndyYXBwZXJzLCBjYWJiYWdlLCBjYXJyb3RzLCBnYXJsaWNdXG4pO1xubGV0IGNoaWNrZW5fc291cCA9IG5ldyBNZWFsKFxuXHRcImNoaWNrZW4gc291cFwiLFxuXHRbXCJkaW5uZXJcIiwgXCJzb3VwXCIsIFwiaG90XCIsIFwiY2hpY2tlblwiLCBcImFsbFwiXSxcblx0W2NoaWNrZW5zdG9jaywgb25pb24sIGNhcnJvdHMsIGNlbGVyeSwgY2hpY2tlbl1cbik7XG5cbmxldCB2ZW5pc29uX2NoaWxpID0gbmV3IE1lYWwoXG5cdFwidmVuaXNvbiBjaGlsaVwiLFxuXHRbXCJ2ZW5pc29uXCIsIFwiY2hpbGlcIiwgXCJob3RcIiwgXCJhbGxcIl0sXG5cblx0W3Zlbmlzb24sIG9uaW9uLCBnYXJsaWMsIGNoaWNrZW5zdG9jaywgY2hpbGlfYmVhbnMsIGRpY2VkX3RvbWF0b2VzXVxuKTtcbmxldCBtYXJyeW1lY2hpY2tlbiA9IG5ldyBNZWFsKFxuXHRcIm1hcnJ5IG1lIGNoaWNrZW5cIixcblx0W1wiY2hpY2tlblwiLCBcImNyZWFteVwiLCBcImhvdFwiLCBcImFsbFwiXSxcblx0W2NoaWNrZW4sIGNyZWFtLCBnYXJsaWMsIGNoaWNrZW5zdG9jaywgY2hpbGlfYmVhbnMsIGRpY2VkX3RvbWF0b2VzXVxuKTtcbmxldCBwYXN0YV9mYWdpb2xlID0gbmV3IE1lYWwoXG5cdFwicGFzdGFfZmFnaW9sZVwiLFxuXHRbXCJpdGFsaWFuXCIsIFwic291cFwiLCBcImhvdFwiLCBcImFsbFwiXSxcblxuXHRbYmFjb24sIG9uaW9uLCBnYXJsaWMsIGNoaWNrZW5zdG9jaywgY2FubmVsaW5pX2JlYW5zLCB0b21hdG9fcGFzdGVdXG4pO1xuY29uc3QgbWVhbGxpc3QgPSBbXG5cdHZlbmlzb25fY2hpbGksXG5cdG1hcnJ5bWVjaGlja2VuLFxuXHRjaGlja2VuX3NvdXAsXG5cdHBhc3RhX2ZhZ2lvbGUsXG5cdHBvdHN0aWNrZXJzLFxuXHRTYWxtb24sXG5cdHBhcGVyVG93ZWxzLFxuXHRpY2VDcmVhbSxcblx0UG9wc2ljbGVzLFxuXHROYXBraW5zLFxuXHRMYXVuZHJ5ZGV0ZXJnZW50LFxuXHRkaXNod2FzaGVycG9kcyxcblx0SGFuZHNvYXAsXG5cdERpc2hzb2FwLFxuXHRDaGlwcyxcblx0QWR2aWwsXG5cdG1hY2Fyb25pYW5kY2hlZXNlLFxuXTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBtZWFsbGlzdCB9IGZyb20gXCIuL21lYWxzXCI7XG5cbmxldCBwb3NzaWJsZW1lYWxzID0gW107XG4vL2FjdHMgYXMgdGhlIGFycmF5IHRvIGhvbGQgbWVhbHMgdGhhdCBhcmUgc2VsZWN0ZWQgYXMgcG9zc2libGUgb3B0aW9ucywgc3RvcmVzIHRoZW0gYXMgdGhlIGZ1bGwgb2JqZWN0c1xubGV0IHNlbGVjdGVkbWVhbHMgPSBbXTtcbmxldCBmaW5hbGxpc3QgPSBbXTtcbmxldCBmaW5hbGluZ3JlZGllbnRzID0gW107XG5cbmxldCBsaXN0X29mX21lYWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZWFsX2xpc3RcIik7XG5sZXQgY2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO1xuLy8gZ2xvYmFsIHZhcmlhYmxlc1xubGV0IG1pZGRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWlkZGxlXCIpO1xubGV0IGNyZWF0ZWxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZV9saXN0XCIpO1xuY29uc3QgbGlzdG9mTWVhbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lYWxfbGlzdFwiKTtcbmxldCBzdWJtaXRidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKTtcbmxldCBncm9jZXJpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyb2Nlcmllc1wiKTtcblxuLy9PbmNlIHN1Ym1pdCBidXR0b24gaXMgY2xpY2tlZCwgZ29lcyB0aHJvdWdoIGFuZCBnZXRzIGFsbCBjaGVja2VkIHZhbHVlc1xuLy9UdXJucyB0aGUgdmFsdWVzIGludG8gYW4gYXJyYXkgY2FsbGVkIHRhZ2xpc3QuICBFdmVyeXRpbWUgaXQgaXMgY2xpY2tlZCBpdCB3aXBlcyBpdCBjbGVhbiBhbmQgcmVtYWtlcyB0aGUgbGlzdFxuZnVuY3Rpb24gZ2V0VGFncygpIHtcblx0bGV0IHRhZ2xpc3QgPSBbXTtcblx0Y29uc3QgY2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0J2lucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkJ1xuXHQpO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGNoZWNrYm94ZXMubGVuZ3RoOyBpKyspIHtcblx0XHR0YWdsaXN0LnB1c2goY2hlY2tib3hlc1tpXS52YWx1ZSk7XG5cdH1cblx0aWYgKHRhZ2xpc3QubGVuZ3RoID09IDApIHtcblx0XHRyZXR1cm47XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIHRhZ2xpc3Q7XG5cdH1cbn1cblxuLy9jaGVja3MgaWYgdGhlIHNlY29uZCBhcnJheSBpcyBhIHN1YnNldCBvZiB0aGUgZmlyc3QgYXJyYXlcbmZ1bmN0aW9uIGlzU3Vic2V0KHRhZ2FycmF5LCBtZWFsYXJyYXkpIHtcblx0cmV0dXJuIHRhZ2FycmF5LmV2ZXJ5KChlbGVtZW50KSA9PiBtZWFsYXJyYXkuaW5jbHVkZXMoZWxlbWVudCkpO1xufVxuLy90aGlzIGNoZWNrcyB0byBzZWUgaWYgdGhlIHRhZyBlbGVtZW50cyBhcmUgaW4gZWFjaCBmb29kIGVsZW1lbnRzXG5mdW5jdGlvbiBjcm9zc0NoZWNrKHRhZ2xpc3QpIHtcblx0bWlkZGxlLmlubmVySFRNTCA9IFwiXCI7XG5cdHBvc3NpYmxlbWVhbHMgPSBbXTtcblxuXHRmb3IgKGxldCBtZWFsIG9mIG1lYWxsaXN0KSB7XG5cdFx0Ly9mb3IgZXZlcnkgbWVhbCBpbiBtZWFsIGxpc3Rcblx0XHQvL2NhbGxzIGlzU3Vic2V0IHRvIHNlZSBpZiB0aGUgdGFnYXJyYXkgbWF0Y2hlcyB0aGUgdGFnIGFycmF5IG9mIHRoYXQgbWVhbC5cblx0XHQvL0lmIHRoZXJlcyBhIG1hdGNoLCBjcmVhdGUgYSBuZXcgY29weSBvZiB0aGUgbWVhbCwgYW5kIHRoZW4gcHV0IGl0IGludG8gYW4gYXJyYXkgb2YgcG9zc2libGUgbWVhbHNcblx0XHRpZiAoaXNTdWJzZXQodGFnbGlzdCwgbWVhbC50YWdzKSA9PSB0cnVlKSB7XG5cdFx0XHRsZXQgcG9zc2libGVtZWFsID0gbWVhbDtcblx0XHRcdHBvc3NpYmxlbWVhbHMucHVzaChwb3NzaWJsZW1lYWwpO1xuXHRcdH1cblx0fVxuXHRpZiAocG9zc2libGVtZWFscy5sZW5ndGggPT09IDApIHtcblx0XHRsZXQgdGFnbGlzdCA9IFtdO1xuXHRcdGNvbnN0IGNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdFx0J2lucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkJ1xuXHRcdCk7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjaGVja2JveGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjaGVja2JveGVzW2ldLmNoZWNrZWQgPSBmYWxzZTtcblx0XHR9XG5cdH1cbn1cblxuLy9tYWtlcyBidXR0b25zIGZvciB0aGUgbWVhbHMgYmFzZWQgb24gdGhlIHRhZ3MgdGhhdCBtYXRjaFxuZnVuY3Rpb24gbWFrZUVsZW1lbnQodHlwZSwgaWRlbnRpdHksIHdoZXJlLCB0ZXh0KSB7XG5cdGxldCBwb29wcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG5cdHBvb3BzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGlkZW50aXR5KTtcblx0cG9vcHMuaW5uZXJIVE1MID0gdGV4dDtcblx0d2hlcmUuYXBwZW5kKHBvb3BzKTtcblx0cG9vcHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGFkZFRvR3JvY2VyeUxpc3QocG9vcHMpKTtcbn1cblxuLy93aGVuIHRoZSBtZWFsIGJ1dHRvbiBpcyBwcmVzc2VkLCBtYWtlIHN1cmUgdGhhdCBpdCBtYXRjaGVzIGEgbWVhbCwgYW5kIHRoZW4gYWRkIHRoYXQgbWVhbCBvYmplY3QgdG8gYSBmaW5hbCBhcnJheVxuZnVuY3Rpb24gYWRkVG9Hcm9jZXJ5TGlzdCh0aGVtZWFsKSB7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgbWVhbGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRpZiAodGhlbWVhbC5pbm5lckhUTUwgPT09IG1lYWxsaXN0W2ldLm5hbWUpIHtcblx0XHRcdGxldCBmaW5hbG1lYWwgPSBtZWFsbGlzdFtpXTtcblx0XHRcdGZpbmFsbGlzdC5wdXNoKGZpbmFsbWVhbCk7XG5cdFx0XHRjb25zb2xlLmxvZyhmaW5hbGxpc3QpO1xuXHRcdH1cblx0fVxuXHRkaXNwbGF5TWVhbHMoKTtcbn1cbi8vcmVtb3ZlcyBzb21lIGl0ZW0gZnJvbSBhbiBhcnJheVxuZnVuY3Rpb24gUmVtb3ZlKHRoaW5neSkge1xuXHRjb25zb2xlLmxvZyhcInRoaXMgaXMgYW4gYXJyYXk/XCIpO1xuXHRjb25zb2xlLmxvZyhmaW5hbGxpc3QpO1xuXHRjb25zb2xlLmxvZyhcInBvc2l0aW9uIGluIGFycmF5XCIpO1xuXHRmaW5hbGxpc3Quc3BsaWNlKHRoaW5neSwgMSk7XG5cdGRpc3BsYXlNZWFscyhmaW5hbGxpc3QpO1xufVxuLy9kaXNwbGF5cyB0aGUgbWVhbHMgaW4gZmluYWxsaXN0IGFzIGJ1dHRvbnNcbmZ1bmN0aW9uIGRpc3BsYXlNZWFscygpIHtcblx0bGlzdF9vZl9tZWFscy5pbm5lckhUTUwgPSBcIlwiO1xuXHRjb25zb2xlLmxvZyhcIlRoaXMgaXMgdGhlIGJlZ2luaW5uaW5nIG9mIGRpc3BsYXkgbWVhbHMgXCIgKyBmaW5hbGxpc3QpO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGZpbmFsbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBmaW5hbGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdFx0ZmluYWxidXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsaXN0bWVhbFwiKTtcblx0XHRmaW5hbGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJ1dHRvblwiW2ldKTtcblx0XHRmaW5hbGJ1dHRvbi5pbm5lckhUTUwgPSBmaW5hbGxpc3RbaV0ubmFtZTtcblx0XHRsaXN0X29mX21lYWxzLmFwcGVuZChmaW5hbGJ1dHRvbik7XG5cdFx0ZmluYWxidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IGZpbmFsbGlzdFtpXS5pbmdyZWRpZW50cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRmaW5hbGJ1dHRvbi5pbm5lckhUTUwgKz0gZmluYWxsaXN0W2ldLmluZ3JlZGllbnRzW2pdLm5hbWUgKyBcIiBcIjtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRmaW5hbGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XG5cdFx0XHRmaW5hbGJ1dHRvbi5pbm5lckhUTUwgPSBmaW5hbGxpc3RbaV0ubmFtZTtcblx0XHR9KTtcblx0XHRmaW5hbGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0ZmluYWxsaXN0LnNwbGljZShbaV0sIDEpO1xuXHRcdFx0Y29uc29sZS5sb2coZmluYWxsaXN0KTtcblx0XHRcdGRpc3BsYXlNZWFscygpO1xuXHRcdH0pO1xuXHR9XG59XG5cbi8vYWRkcyB0aGUgdGl0bGVzIHRvIHRoZSBncm9jZXJ5IGxpc3RcbmZ1bmN0aW9uIGFkZG1pZGRsZVRpdGxlKGRvYywgaWQsIGNscywgaW5uZXIsIGNlbGwpIHtcblx0bGV0IGJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNlbGwpO1xuXHRkb2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRkb2Muc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuXHRkb2Muc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgY2xzKTtcblx0ZG9jLmlubmVySFRNTCA9IGlubmVyO1xuXHRib3guYXBwZW5kKGRvYyk7XG59XG5cbmZ1bmN0aW9uIGFkZExpc3RFbGVtZW50KGZpbmFsaW5ncmVkaWVudHMsIGxvY2F0aW9uLCBjZWxsKSB7XG5cdGxldCBwcm9kdWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2VsbCk7IC8vZ2V0cyB0aGUgY2VsbCBhbmQgYXNzaWducyBpdCBhIG5hbWVcblx0cHJvZHVjZS5pbm5lckhUTUwgPSBcIlwiO1xuXHRmb3IgKGxldCBqID0gMDsgaiA8IGZpbmFsaW5ncmVkaWVudHMubGVuZ3RoOyBqKyspIHtcblx0XHRpZiAoZmluYWxpbmdyZWRpZW50c1tqXS5sb2NhdGlvbiA9PT0gbG9jYXRpb24pIHtcblx0XHRcdGxldCBwcm9kdWNlaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdFx0XHRwcm9kdWNlaXRlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxpc3RpdGVtc1wiKTtcblx0XHRcdHByb2R1Y2VpdGVtLmlubmVySFRNTCA9IGZpbmFsaW5ncmVkaWVudHNbal0ubmFtZTtcblx0XHRcdHByb2R1Y2VpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRcdHByb2R1Y2VpdGVtLnJlbW92ZSgpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHByb2R1Y2UuYXBwZW5kKHByb2R1Y2VpdGVtKTtcblx0XHR9XG5cdH1cbn1cbmZ1bmN0aW9uIG1ha2VHcm9jZXJ5TGlzdCgpIHtcblx0Ly9uZWVkIHRvIGNsZWFyIHRoZSBpbm5lckhUTUwgb2YgdGhlIGdyb2NlcnltaWRkbGUgY2VsbHNcblx0ZmluYWxpbmdyZWRpZW50cyA9IFtdO1xuXHRjb25zb2xlLmxvZyhmaW5hbGxpc3QpO1xuXHRsZXQgZ3JvY2VyeW1pZGRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3JvY2VyeW1pZGRsZVwiKTtcblx0bWlkZGxlLmlubmVySFRNTCA9IFwiXCI7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgZmluYWxsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBmaW5hbGxpc3RbaV0uaW5ncmVkaWVudHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGZpbmFsaW5ncmVkaWVudHMucHVzaChmaW5hbGxpc3RbaV0uaW5ncmVkaWVudHNbal0pO1xuXHRcdH1cblx0fVxuXHRjb25zb2xlLmxvZyhmaW5hbGluZ3JlZGllbnRzKTtcblxuXHRmaW5hbGluZ3JlZGllbnRzLnNvcnQoKGEsIGIpID0+IHtcblx0XHRpZiAoYS5uYW1lIDwgYi5uYW1lKSB7XG5cdFx0XHRyZXR1cm4gLTE7XG5cdFx0fSBlbHNlIGlmIChhLm5hbWUgPiBiLm5hbWUpIHtcblx0XHRcdHJldHVybiAxO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cdH0pO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGZpbmFsaW5ncmVkaWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zb2xlLmxvZyhmaW5hbGluZ3JlZGllbnRzW2ldLm5hbWUpO1xuXHR9XG5cdGNvbnNvbGUubG9nKGZpbmFsbGlzdCk7XG5cdG1pZGRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImdyb2NlcnltaWRkbGVcIik7XG5cdG1ha2VHcmlkKDIsIDYpO1xuXHRhZGRtaWRkbGVUaXRsZShcImRhaXJ5dGl0bGVcIiwgXCJ0aXRsZTFcIiwgXCJ0aXRsZVwiLCBcIkRhaXJ5XCIsIFwiY2VsbDAwXCIpO1xuXHRhZGRtaWRkbGVUaXRsZShcIlByb2R1Y2VcIiwgXCJ0aXRsZTJcIiwgXCJ0aXRsZVwiLCBcIlByb2R1Y2VcIiwgXCJjZWxsMDFcIik7XG5cdGFkZG1pZGRsZVRpdGxlKFwiRnJvemVuXCIsIFwidGl0bGUzXCIsIFwidGl0bGVcIiwgXCJGcm96ZW5cIiwgXCJjZWxsMDJcIik7XG5cdGFkZG1pZGRsZVRpdGxlKFwiQ2FubmVkXCIsIFwidGl0bGU0XCIsIFwidGl0bGVcIiwgXCJNZWF0XCIsIFwiY2VsbDAzXCIpO1xuXHRhZGRtaWRkbGVUaXRsZShcIk90aGVyXCIsIFwidGl0bGU0XCIsIFwidGl0bGVcIiwgXCJPdGhlclwiLCBcImNlbGwwNFwiKTtcblx0YWRkbWlkZGxlVGl0bGUoXCJOb24tRm9vZFwiLCBcInRpdGxlNFwiLCBcInRpdGxlXCIsIFwiTm9uLUZvb2RcIiwgXCJjZWxsMDVcIik7XG5cdGFkZExpc3RFbGVtZW50KGZpbmFsaW5ncmVkaWVudHMsIFwicHJvZHVjZVwiLCBcImNlbGwxMVwiKTtcblx0YWRkTGlzdEVsZW1lbnQoZmluYWxpbmdyZWRpZW50cywgXCJkYWlyeVwiLCBcImNlbGwxMFwiKTtcblx0YWRkTGlzdEVsZW1lbnQoZmluYWxpbmdyZWRpZW50cywgXCJtZWF0XCIsIFwiY2VsbDEzXCIpO1xuXHRhZGRMaXN0RWxlbWVudChmaW5hbGluZ3JlZGllbnRzLCBcImZyb3plblwiLCBcImNlbGwxMlwiKTtcblx0YWRkTGlzdEVsZW1lbnQoZmluYWxpbmdyZWRpZW50cywgXCJvdGhlclwiLCBcImNlbGwxNFwiKTtcblx0YWRkTGlzdEVsZW1lbnQoZmluYWxpbmdyZWRpZW50cywgXCJub25mb29kXCIsIFwiY2VsbDE1XCIpO1xufVxuXG5mdW5jdGlvbiBtYWtlR3JpZChyb3dzLCBjb2xzKSB7XG5cdGxldCBncmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncm9jZXJ5bWlkZGxlXCIpO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuXHRcdGZvciAobGV0IGogPSAwOyBqIDwgY29sczsgaisrKSB7XG5cdFx0XHRjb25zdCBncmlkSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRncmlkSXRlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImdyaWRseWZlXCIpO1xuXHRcdFx0Z3JpZEl0ZW0uaWQgPSBgY2VsbCR7aX0ke2p9YDtcblx0XHRcdGdyaWQuYXBwZW5kQ2hpbGQoZ3JpZEl0ZW0pO1xuXHRcdH1cblx0fVxufVxuXG4vL35+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fkFDVFVBTCBFWEVDVVRJTkcgQ09ERX5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5cblxuLy9ydW5zIHRoZSBmdW5jdGlvbiB3aGVuIGEgdGFnIGlzIGNsaWNrZWQgaW5zdGVhZCBvZiB0aGUgc3VibWl0IGJ1dHRvblxuZm9yIChsZXQgaSA9IDA7IGkgPCBjaGVja2JveGVzLmxlbmd0aDsgaSsrKSB7XG5cdGNoZWNrYm94ZXNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRjcm9zc0NoZWNrKGdldFRhZ3MoKSk7XG5cdFx0cG9zc2libGVtZWFscy5zb3J0KChhLCBiKSA9PiB7XG5cdFx0XHRpZiAoYS5uYW1lIDwgYi5uYW1lKSB7XG5cdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdH0gZWxzZSBpZiAoYS5uYW1lID4gYi5uYW1lKSB7XG5cdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHR9XG5cdFx0fSk7IC8vYWxwaGFiZXRpemVzIHRoZSBhcnJheVxuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwb3NzaWJsZW1lYWxzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRtYWtlRWxlbWVudChcImJ1dHRvblwiLCBcInBvc3NpYmxlbWVhbFwiLCBtaWRkbGUsIHBvc3NpYmxlbWVhbHNbaV0ubmFtZSk7XG5cdFx0fVxuXHR9KTtcbn1cbmdyb2Nlcmllcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRtYWtlR3JvY2VyeUxpc3QoKTtcbn0pO1xuXG5zdWJtaXRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0Y3Jvc3NDaGVjayhnZXRUYWdzKCkpO1xuXHRwb3NzaWJsZW1lYWxzLnNvcnQoKGEsIGIpID0+IHtcblx0XHRpZiAoYS5uYW1lIDwgYi5uYW1lKSB7XG5cdFx0XHRyZXR1cm4gLTE7XG5cdFx0fSBlbHNlIGlmIChhLm5hbWUgPiBiLm5hbWUpIHtcblx0XHRcdHJldHVybiAxO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cdH0pOyAvL2FscGhhYmV0aXplcyB0aGUgYXJyYXlcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHBvc3NpYmxlbWVhbHMubGVuZ3RoOyBpKyspIHtcblx0XHRtYWtlRWxlbWVudChcImJ1dHRvblwiLCBcInBvc3NpYmxlbWVhbFwiLCBtaWRkbGUsIHBvc3NpYmxlbWVhbHNbaV0ubmFtZSk7XG5cdH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9