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
	[chickenstock, onion, cream, carrots, celery, chicken]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFV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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNib0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3RIQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7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YnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL21lYWxzLmpzIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcblx0bWFyZ2luOiAwcHg7XG59XG5mb3JtIHtcblx0Zm9udC1zaXplOiAyOHB4O1xuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcblx0cGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5idXR0b24ge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjI1NzdhO1xuXHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCAjMDMyMDM0O1xuXHRjb2xvcjogIzgwZWQ5OTtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuYnV0dG9uOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzAzMjAzNDtcbn1cbiNtYWluYm9keSB7XG5cdG1hcmdpbjogMHB4O1xuXHRoZWlnaHQ6IDEwMHZoO1xuXHR3aWR0aDogMTAwdnc7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbiN0aXRsZWxvZ28sXG4jYm90dG9tIHtcblx0ZmxleC1iYXNpczogMjAlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjI1NzdhO1xuXHRjb2xvcjogIzgwZWQ5OTtcblx0Zm9udC1zaXplOiAzNnB4O1xuXHRmb250LWZhbWlseTogXCJHaWxsIFNhbnNcIiwgXCJHaWxsIFNhbnMgTVRcIiwgQ2FsaWJyaSwgXCJUcmVidWNoZXQgTVNcIiwgc2Fucy1zZXJpZjtcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG5cdHBhZGRpbmctbGVmdDogMjBweDtcbn1cbiNib3R0b20ge1xuXHRjb2xvcjogIzgwZWQ5OTtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGZvbnQtc2l6ZTogMTZweDtcbn1cblxuI21pZCB7XG5cdGZsZXgtYmFzaXM6IDYwJTtcblx0YmFja2dyb3VuZC1jb2xvcjogIzU3Y2M5OTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbiNib3R0b20ge1xuXHRmbGV4LWJhc2lzOiAyMCU7XG5cdGJhY2tncm91bmQtY29sb3I6ICMyMjU3N2E7XG59XG5cbiNtaWRsZWZ0IHtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0Ym9yZGVyLXJpZ2h0OiBzb2xpZCAycHggYmxhY2s7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0ZmxleC1iYXNpczogMjAlO1xuXHRmbGV4LXNocmluazogMDtcblx0ZmxleC1ncm93OiAwO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTdjYzk5O1xuXHRjb2xvcjogIzIyNTc3YTtcbn1cblxuI21pZGRsZSB7XG5cdG1hcmdpbi10b3A6IDVweDtcblxuXHRvdmVyZmxvdy15OiBhdXRvO1xuXHRoZWlnaHQ6IDQ3NXB4O1xuXHRmbGV4LWJhc2lzOiA2MCU7XG5cdGJhY2tncm91bmQtY29sb3I6ICM1N2NjOTk7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmcjtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XG5cdGdyaWQtYXV0by1yb3dzOiBhdXRvO1xuXHRncmlkLWdhcDogOHB4O1xufVxuXG4jbWlkcmlnaHQge1xuXHRib3JkZXItbGVmdDogMnB4IHNvbGlkIGJsYWNrO1xuXHRmbGV4LWdyb3c6IDA7XG5cdGZsZXgtc2hyaW5rOiAwO1xuXHRmbGV4LWJhc2lzOiAyMCU7XG5cdGJhY2tncm91bmQtY29sb3I6ICM1N2NjOTk7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnBvc3NpYmxlbWVhbCB7XG5cdGhlaWdodDogMTAwcHg7XG5cdHdpZHRoOiAyMDBweDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdG1hcmdpbjogYXV0bztcblx0YmFja2dyb3VuZC1jb2xvcjogIzIyNTc3YTtcblx0Ym94LXNoYWRvdzogMnB4IDJweCA0eCA0cHg7XG5cdGJvcmRlcjogMXB4IHNvbGlkICMwNjMxNGQ7XG5cdG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5wb3NzaWJsZW1lYWw6aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDMyMDM0O1xufVxuXG4ubGlzdG1lYWw6aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDMyMDM0O1xufVxuXG4jbWVhbF9saXN0IHtcblx0ZGlzcGxheTogZmxleDtcblx0bWFyZ2luOiAyMHB4O1xuXHRnYXA6IDhweDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuI2Zvcm1jb250YWluZXIge1xuXHRoZWlnaHQ6IDQwMHB4O1xuXHRvdmVyZmxvdy15OiBhdXRvO1xuXHRtYXJnaW4tdG9wOiAyMHB4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jc2VsZWN0aW9uYm94IHtcblx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0Zm9udC1zaXplOiAyMHB4O1xuXHRmb250LWZhbWlseTogXCJHaWxsIFNhbnNcIiwgXCJHaWxsIFNhbnMgTVRcIiwgQ2FsaWJyaSwgXCJUcmVidWNoZXQgTVNcIiwgc2Fucy1zZXJpZjtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0cGFkZGluZzogM3B4O1xuXHRnYXA6IDhweDtcblx0Y29sb3I6ICMyMjU3N2E7XG59XG5cbiNncm9jZXJpZXMsXG4jc3VibWl0IHtcblx0d2lkdGg6IDgwJTtcblx0aGVpZ2h0OiAzMHB4O1xuXHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdG1hcmdpbjogYXV0bztcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcblx0cGFkZGluZzogYXV0bztcblx0bWFyZ2luLWxlZnQ6IDI1cHg7XG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbiNncm9jZXJ5bWlkZGxlIHtcblx0d2lkdGg6IDEwMCU7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtcm93czogMjAlIDgwJTtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcbn1cblxuI2dyb2NlcnltaWRkbGUgPiBkaXYge1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBibGFjaztcblx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xufVxuXG4udGl0bGUge1xuXHRmb250LXdlaWdodDogNzAwO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGZvbnQtc2l6ZTogMjhweDtcblx0Y29sb3I6ICMyMjU3N2E7XG59XG5cbiN0aXRsZTEge1xuXHRncmlkLWFyZWE6IDEvMS8yLzI7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiN0aXRsZTIge1xuXHRncmlkLWFyZWE6IDEvMi8yLzM7XG59XG4jdGl0bGUzIHtcblx0Z3JpZC1hcmVhOiAxLzMvMi80O1xufVxuXG4jdGl0bGU0IHtcblx0Z3JpZC1hcmVhOiAxLzQvMi81O1xufVxuXG4uZ3JpZGx5ZmUge1xuXHRmbGV4LWdyb3c6IDA7XG5cdG92ZXJmbG93LXk6IGF1dG87XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogOHB4O1xufVxuXG4ubGlzdGl0ZW1zIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdHdpZHRoOiA4MCU7XG5cdGNvbG9yOiAjNTdjYzk5O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjI1NzdhO1xuXHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdGJvcmRlcjogMnB4IHNvbGlkICM4MmYzOGQ7XG59XG4ubGlzdGl0ZW1zOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzA0MmE0Mztcbn1cblxuI2NlbGwwMCxcbiNjZWxsMDEsXG4jY2VsbDAyLFxuI2NlbGwwMyxcbiNjZWxsMDQsXG4jY2VsbDA1IHtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwi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QWtCO0NBQ2xCLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUVBOzs7Ozs7Q0FNQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHVCQUF1QjtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG5cXHRtYXJnaW46IDBweDtcXG59XFxuZm9ybSB7XFxuXFx0Zm9udC1zaXplOiAyOHB4O1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcblxcdHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxuYnV0dG9uIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjI1NzdhO1xcblxcdGJvcmRlci1yYWRpdXM6IDhweDtcXG5cXHRib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggIzAzMjAzNDtcXG5cXHRjb2xvcjogIzgwZWQ5OTtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMwMzIwMzQ7XFxufVxcbiNtYWluYm9keSB7XFxuXFx0bWFyZ2luOiAwcHg7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHR3aWR0aDogMTAwdnc7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jdGl0bGVsb2dvLFxcbiNib3R0b20ge1xcblxcdGZsZXgtYmFzaXM6IDIwJTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzIyNTc3YTtcXG5cXHRjb2xvcjogIzgwZWQ5OTtcXG5cXHRmb250LXNpemU6IDM2cHg7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJHaWxsIFNhbnNcXFwiLCBcXFwiR2lsbCBTYW5zIE1UXFxcIiwgQ2FsaWJyaSwgXFxcIlRyZWJ1Y2hldCBNU1xcXCIsIHNhbnMtc2VyaWY7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuXFx0cGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG4jYm90dG9tIHtcXG5cXHRjb2xvcjogIzgwZWQ5OTtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuI21pZCB7XFxuXFx0ZmxleC1iYXNpczogNjAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM1N2NjOTk7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG4jYm90dG9tIHtcXG5cXHRmbGV4LWJhc2lzOiAyMCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzIyNTc3YTtcXG59XFxuXFxuI21pZGxlZnQge1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Ym9yZGVyLXJpZ2h0OiBzb2xpZCAycHggYmxhY2s7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRmbGV4LWJhc2lzOiAyMCU7XFxuXFx0ZmxleC1zaHJpbms6IDA7XFxuXFx0ZmxleC1ncm93OiAwO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM1N2NjOTk7XFxuXFx0Y29sb3I6ICMyMjU3N2E7XFxufVxcblxcbiNtaWRkbGUge1xcblxcdG1hcmdpbi10b3A6IDVweDtcXG5cXG5cXHRvdmVyZmxvdy15OiBhdXRvO1xcblxcdGhlaWdodDogNDc1cHg7XFxuXFx0ZmxleC1iYXNpczogNjAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM1N2NjOTk7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xcblxcdGdyaWQtYXV0by1yb3dzOiBhdXRvO1xcblxcdGdyaWQtZ2FwOiA4cHg7XFxufVxcblxcbiNtaWRyaWdodCB7XFxuXFx0Ym9yZGVyLWxlZnQ6IDJweCBzb2xpZCBibGFjaztcXG5cXHRmbGV4LWdyb3c6IDA7XFxuXFx0ZmxleC1zaHJpbms6IDA7XFxuXFx0ZmxleC1iYXNpczogMjAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM1N2NjOTk7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnBvc3NpYmxlbWVhbCB7XFxuXFx0aGVpZ2h0OiAxMDBweDtcXG5cXHR3aWR0aDogMjAwcHg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRtYXJnaW46IGF1dG87XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzIyNTc3YTtcXG5cXHRib3gtc2hhZG93OiAycHggMnB4IDR4IDRweDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjMDYzMTRkO1xcblxcdG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuLnBvc3NpYmxlbWVhbDpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzAzMjAzNDtcXG59XFxuXFxuLmxpc3RtZWFsOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDMyMDM0O1xcbn1cXG5cXG4jbWVhbF9saXN0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdG1hcmdpbjogMjBweDtcXG5cXHRnYXA6IDhweDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jZm9ybWNvbnRhaW5lciB7XFxuXFx0aGVpZ2h0OiA0MDBweDtcXG5cXHRvdmVyZmxvdy15OiBhdXRvO1xcblxcdG1hcmdpbi10b3A6IDIwcHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jc2VsZWN0aW9uYm94IHtcXG5cXHRmb250LXdlaWdodDogNDAwO1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHRmb250LWZhbWlseTogXFxcIkdpbGwgU2Fuc1xcXCIsIFxcXCJHaWxsIFNhbnMgTVRcXFwiLCBDYWxpYnJpLCBcXFwiVHJlYnVjaGV0IE1TXFxcIiwgc2Fucy1zZXJpZjtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cGFkZGluZzogM3B4O1xcblxcdGdhcDogOHB4O1xcblxcdGNvbG9yOiAjMjI1NzdhO1xcbn1cXG5cXG4jZ3JvY2VyaWVzLFxcbiNzdWJtaXQge1xcblxcdHdpZHRoOiA4MCU7XFxuXFx0aGVpZ2h0OiAzMHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDhweDtcXG5cXHRtYXJnaW46IGF1dG87XFxuXFx0bWFyZ2luLWJvdHRvbTogMjBweDtcXG5cXHRwYWRkaW5nOiBhdXRvO1xcblxcdG1hcmdpbi1sZWZ0OiAyNXB4O1xcblxcdG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbiNncm9jZXJ5bWlkZGxlIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogMjAlIDgwJTtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1xcbn1cXG5cXG4jZ3JvY2VyeW1pZGRsZSA+IGRpdiB7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBibGFjaztcXG5cXHRib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi50aXRsZSB7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Zm9udC1zaXplOiAyOHB4O1xcblxcdGNvbG9yOiAjMjI1NzdhO1xcbn1cXG5cXG4jdGl0bGUxIHtcXG5cXHRncmlkLWFyZWE6IDEvMS8yLzI7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jdGl0bGUyIHtcXG5cXHRncmlkLWFyZWE6IDEvMi8yLzM7XFxufVxcbiN0aXRsZTMge1xcblxcdGdyaWQtYXJlYTogMS8zLzIvNDtcXG59XFxuXFxuI3RpdGxlNCB7XFxuXFx0Z3JpZC1hcmVhOiAxLzQvMi81O1xcbn1cXG5cXG4uZ3JpZGx5ZmUge1xcblxcdGZsZXgtZ3JvdzogMDtcXG5cXHRvdmVyZmxvdy15OiBhdXRvO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogOHB4O1xcbn1cXG5cXG4ubGlzdGl0ZW1zIHtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Zm9udC1zaXplOiAxNHB4O1xcblxcdHdpZHRoOiA4MCU7XFxuXFx0Y29sb3I6ICM1N2NjOTk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzIyNTc3YTtcXG5cXHRib3JkZXItcmFkaXVzOiA4cHg7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgIzgyZjM4ZDtcXG59XFxuLmxpc3RpdGVtczpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzA0MmE0MztcXG59XFxuXFxuI2NlbGwwMCxcXG4jY2VsbDAxLFxcbiNjZWxsMDIsXFxuI2NlbGwwMyxcXG4jY2VsbDA0LFxcbiNjZWxsMDUge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgeyBtZWFsbGlzdCB9O1xuY2xhc3MgTWVhbCB7XG5cdGNvbnN0cnVjdG9yKG5hbWUsIHRhZ3MsIGluZ3JlZGllbnRzKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnRhZ3MgPSB0YWdzO1xuXHRcdHRoaXMuaW5ncmVkaWVudHMgPSBpbmdyZWRpZW50cztcblx0fVxufVxuY2xhc3MgSW5ncmVkaWVudHMge1xuXHRjb25zdHJ1Y3RvcihuYW1lLCBsb2NhdGlvbikge1xuXHRcdCh0aGlzLm5hbWUgPSBuYW1lKSwgKHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbik7XG5cdH1cbn1cblxuY29uc3QgY3JlYW0gPSBuZXcgSW5ncmVkaWVudHMoXCJjcmVhbVwiLCBcImRhaXJ5XCIpO1xuY29uc3QgY2hpY2tlbnN0b2NrID0gbmV3IEluZ3JlZGllbnRzKFwiY2hpY2tlbiBzdG9ja1wiLCBcInByb2R1Y2VcIik7XG5jb25zdCBvbmlvbiA9IG5ldyBJbmdyZWRpZW50cyhcIm9uaW9uXCIsIFwicHJvZHVjZVwiKTtcbmNvbnN0IGNoaWNrZW4gPSBuZXcgSW5ncmVkaWVudHMoXCJjaGlja2VuXCIsIFwibWVhdFwiKTtcbmNvbnN0IGJhY29uID0gbmV3IEluZ3JlZGllbnRzKFwiYmFjb25cIiwgXCJtZWF0XCIpO1xuY29uc3QgY2hpbGlfYmVhbnMgPSBuZXcgSW5ncmVkaWVudHMoXCJjaGlsaSBiZWFuc1wiLCBcInByb2R1Y2VcIik7XG5jb25zdCBnYXJsaWMgPSBuZXcgSW5ncmVkaWVudHMoXCJnYXJsaWNcIiwgXCJwcm9kdWNlXCIpO1xuY29uc3QgY2VsZXJ5ID0gbmV3IEluZ3JlZGllbnRzKFwiY2VsZXJ5XCIsIFwicHJvZHVjZVwiKTtcbmNvbnN0IGNhcnJvdHMgPSBuZXcgSW5ncmVkaWVudHMoXCJjYXJyb3RzXCIsIFwicHJvZHVjZVwiKTtcbmNvbnN0IGNhbm5lbGluaV9iZWFucyA9IG5ldyBJbmdyZWRpZW50cyhcImNhbm5lbGluaV9iZWFuc1wiLCBcInByb2R1Y2VcIik7XG5jb25zdCB0b21hdG9fcGFzdGUgPSBuZXcgSW5ncmVkaWVudHMoXCJ0b21hdG8gcGFzdGVcIiwgXCJwcm9kdWNlXCIpO1xuY29uc3QgZGljZWRfdG9tYXRvZXMgPSBuZXcgSW5ncmVkaWVudHMoXCJkaWNlZCB0b21hdG9zXCIsIFwicHJvZHVjZVwiKTtcbmNvbnN0IHZlbmlzb24gPSBuZXcgSW5ncmVkaWVudHMoXCJ2ZW5pc29uXCIsIFwibWVhdFwiKTtcbmNvbnN0IGdyb3VuZG1lYXQgPSBuZXcgSW5ncmVkaWVudHMoXCJncm91bmQgbWVhdFwiLCBcIm1lYXRcIik7XG5jb25zdCB3b250b253cmFwcGVycyA9IG5ldyBJbmdyZWRpZW50cyhcIndvbnRvbiB3cmFwcGVyc1wiLCBcInByb2R1Y2VcIik7XG5jb25zdCBjYWJiYWdlID0gbmV3IEluZ3JlZGllbnRzKFwiY2FiYmFnZVwiLCBcInByb2R1Y2VcIik7XG5jb25zdCBzYWxtb24gPSBuZXcgSW5ncmVkaWVudHMoXCJzYWxtb25cIiwgXCJtZWF0XCIpO1xuY29uc3QgcGFwZXJ0b3dlbHMgPSBuZXcgSW5ncmVkaWVudHMoXCJwYXBlciB0b3dlbHNcIiwgXCJub25mb29kXCIpO1xuY29uc3QgaWNlY3JlYW0gPSBuZXcgSW5ncmVkaWVudHMoXCJpY2UgY3JlYW1cIiwgXCJmcm96ZW5cIik7XG5jb25zdCBwb3BzaWNsZXMgPSBuZXcgSW5ncmVkaWVudHMoXCJwb3BzaWNsZXNcIiwgXCJmcm96ZW5cIik7XG5jb25zdCBuYXBraW5zID0gbmV3IEluZ3JlZGllbnRzKFwibmFwa2luc1wiLCBcIm5vbmZvb2RcIik7XG5jb25zdCBoYW5kc29hcCA9IG5ldyBJbmdyZWRpZW50cyhcImhhbmRzb2FwXCIsIFwibm9uZm9vZFwiKTtcbmNvbnN0IGRpc2hzb2FwID0gbmV3IEluZ3JlZGllbnRzKFwiZGlzaHNvYXBcIiwgXCJub25mb29kXCIpO1xuY29uc3QgbGF1bmRyeWRldGVyZ2VudCA9IG5ldyBJbmdyZWRpZW50cyhcImxhdW5kcnkgZGV0ZXJnZW50XCIsIFwibm9uZm9vZFwiKTtcbmNvbnN0IGRpc2h3YXNoZXJfcG9kcyA9IG5ldyBJbmdyZWRpZW50cyhcImRpc2h3YXNoZXIgcG9kc1wiLCBcIm5vbmZvb2RcIik7XG5jb25zdCBjaGlwcyA9IG5ldyBJbmdyZWRpZW50cyhcImNoaXBzXCIsIFwib3RoZXJcIik7XG5jb25zdCBhZHZpbCA9IG5ldyBJbmdyZWRpZW50cyhcImFkdmlsXCIsIFwibm9uZm9vZFwiKTtcblxubGV0IG1hY2Fyb25pYW5kY2hlZXNlID0gbmV3IE1lYWwoXG5cdFwibWFjYXJvbmkgYW5kIGNoZWVzZVwiLFxuXHRbXCJhbGxcIiwgXCJob3RcIiwgXCJjcmVhbXlcIl0sXG5cdG5hcGtpbnNcbik7XG5sZXQgQWR2aWwgPSBuZXcgTWVhbChcImFkdmlsXCIsIFtcIm5vbmZvb2RcIiwgXCJhbGxcIl0pO1xubGV0IENoaXBzID0gbmV3IE1lYWwoXCJjaGlwc1wiLCBbXCJub25mb29kXCIsIFwiYWxsXCIsIFwic25hY2tzXCJdLCBjaGlwcyk7XG5sZXQgTmFwa2lucyA9IG5ldyBNZWFsKFwibmFwa2luc1wiLCBbXCJub25mb29kXCIsIFwiYWxsXCJdLCBuYXBraW5zKTtcbmxldCBIYW5kc29hcCA9IG5ldyBNZWFsKFwiaGFuZHNvYXBcIiwgW1wibm9uZm9vZFwiLCBcImFsbFwiXSwgaGFuZHNvYXApO1xubGV0IERpc2hzb2FwID0gbmV3IE1lYWwoXCJkaXNoc29hcFwiLCBbXCJub25mb29kXCIsIFwiYWxsXCJdLCBkaXNoc29hcCk7XG5sZXQgTGF1bmRyeWRldGVyZ2VudCA9IG5ldyBNZWFsKFxuXHRcImxhdW5kcnlkZXRlcmdlbnRcIixcblx0W1wibm9uZm9vZFwiLCBcImFsbFwiXSxcblx0bGF1bmRyeWRldGVyZ2VudFxuKTtcbmxldCBkaXNod2FzaGVycG9kcyA9IG5ldyBNZWFsKFxuXHRcImRpc2h3YXNoZXIgcG9wZHNcIixcblx0W1wibm9uZm9vZFwiLCBcImFsbFwiXSxcblx0ZGlzaHdhc2hlcl9wb2RzXG4pO1xubGV0IHBhcGVyVG93ZWxzID0gbmV3IE1lYWwoXCJwYXBlciB0b3dlbHNcIiwgW1wibm9uZm9vZFwiLCBcImFsbFwiXSwgW3BhcGVydG93ZWxzXSk7XG5sZXQgaWNlQ3JlYW0gPSBuZXcgTWVhbChcImljZSBjcmVhbVwiLCBbXCJmcm96ZW5cIiwgXCJhbGxcIl0sIFtpY2VjcmVhbV0pO1xubGV0IFBvcHNpY2xlcyA9IG5ldyBNZWFsKFwicG9wc2ljbGVzXCIsIFtcImZyb3plblwiLCBcImFsbFwiXSwgW3BvcHNpY2xlc10pO1xuXG5sZXQgU2FsbW9uID0gbmV3IE1lYWwoXG5cdFwic2FsbW9uXCIsXG5cdFtcImZpc2hcIiwgXCJzZWFmb29kXCIsIFwiLG1lYXRcIiwgXCJoZWFsdGh5XCIsIFwiYWxsXCJdLFxuXHRbc2FsbW9uXVxuKTtcblxubGV0IHBvdHN0aWNrZXJzID0gbmV3IE1lYWwoXG5cdFwicG90c3RpY2tlcnNcIixcblx0W1wiaG90XCIsIFwiY3Jpc3B5XCIsIFwic2F2b3J5XCIsIFwiZXRobmljXCIsIFwiYWxsXCJdLFxuXHRbZ3JvdW5kbWVhdCwgd29udG9ud3JhcHBlcnMsIGNhYmJhZ2UsIGNhcnJvdHMsIGdhcmxpY11cbik7XG5sZXQgY2hpY2tlbl9zb3VwID0gbmV3IE1lYWwoXG5cdFwiY2hpY2tlbiBzb3VwXCIsXG5cdFtcImRpbm5lclwiLCBcInNvdXBcIiwgXCJob3RcIiwgXCJjaGlja2VuXCIsIFwiYWxsXCJdLFxuXHRbY2hpY2tlbnN0b2NrLCBvbmlvbiwgY3JlYW0sIGNhcnJvdHMsIGNlbGVyeSwgY2hpY2tlbl1cbik7XG5cbmxldCB2ZW5pc29uX2NoaWxpID0gbmV3IE1lYWwoXG5cdFwidmVuaXNvbiBjaGlsaVwiLFxuXHRbXCJ2ZW5pc29uXCIsIFwiY2hpbGlcIiwgXCJob3RcIiwgXCJhbGxcIl0sXG5cblx0W3Zlbmlzb24sIG9uaW9uLCBnYXJsaWMsIGNoaWNrZW5zdG9jaywgY2hpbGlfYmVhbnMsIGRpY2VkX3RvbWF0b2VzXVxuKTtcbmxldCBtYXJyeW1lY2hpY2tlbiA9IG5ldyBNZWFsKFxuXHRcIm1hcnJ5IG1lIGNoaWNrZW5cIixcblx0W1wiY2hpY2tlblwiLCBcImNyZWFteVwiLCBcImhvdFwiLCBcImFsbFwiXSxcblx0W2NoaWNrZW4sIGNyZWFtLCBnYXJsaWMsIGNoaWNrZW5zdG9jaywgY2hpbGlfYmVhbnMsIGRpY2VkX3RvbWF0b2VzXVxuKTtcbmxldCBwYXN0YV9mYWdpb2xlID0gbmV3IE1lYWwoXG5cdFwicGFzdGFfZmFnaW9sZVwiLFxuXHRbXCJpdGFsaWFuXCIsIFwic291cFwiLCBcImhvdFwiLCBcImFsbFwiXSxcblxuXHRbYmFjb24sIG9uaW9uLCBnYXJsaWMsIGNoaWNrZW5zdG9jaywgY2FubmVsaW5pX2JlYW5zLCB0b21hdG9fcGFzdGVdXG4pO1xuY29uc3QgbWVhbGxpc3QgPSBbXG5cdHZlbmlzb25fY2hpbGksXG5cdG1hcnJ5bWVjaGlja2VuLFxuXHRjaGlja2VuX3NvdXAsXG5cdHBhc3RhX2ZhZ2lvbGUsXG5cdHBvdHN0aWNrZXJzLFxuXHRTYWxtb24sXG5cdHBhcGVyVG93ZWxzLFxuXHRpY2VDcmVhbSxcblx0UG9wc2ljbGVzLFxuXHROYXBraW5zLFxuXHRMYXVuZHJ5ZGV0ZXJnZW50LFxuXHRkaXNod2FzaGVycG9kcyxcblx0SGFuZHNvYXAsXG5cdERpc2hzb2FwLFxuXHRDaGlwcyxcblx0QWR2aWwsXG5cdG1hY2Fyb25pYW5kY2hlZXNlLFxuXTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBtZWFsbGlzdCB9IGZyb20gXCIuL21lYWxzXCI7XG5cbmxldCBwb3NzaWJsZW1lYWxzID0gW107XG4vL2FjdHMgYXMgdGhlIGFycmF5IHRvIGhvbGQgbWVhbHMgdGhhdCBhcmUgc2VsZWN0ZWQgYXMgcG9zc2libGUgb3B0aW9ucywgc3RvcmVzIHRoZW0gYXMgdGhlIGZ1bGwgb2JqZWN0c1xubGV0IHNlbGVjdGVkbWVhbHMgPSBbXTtcbmxldCBmaW5hbGxpc3QgPSBbXTtcbmxldCBmaW5hbGluZ3JlZGllbnRzID0gW107XG5cbmxldCBsaXN0X29mX21lYWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZWFsX2xpc3RcIik7XG5sZXQgY2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO1xuLy8gZ2xvYmFsIHZhcmlhYmxlc1xubGV0IG1pZGRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWlkZGxlXCIpO1xubGV0IGNyZWF0ZWxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZV9saXN0XCIpO1xuY29uc3QgbGlzdG9mTWVhbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lYWxfbGlzdFwiKTtcbmxldCBzdWJtaXRidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKTtcbmxldCBncm9jZXJpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyb2Nlcmllc1wiKTtcblxuLy9PbmNlIHN1Ym1pdCBidXR0b24gaXMgY2xpY2tlZCwgZ29lcyB0aHJvdWdoIGFuZCBnZXRzIGFsbCBjaGVja2VkIHZhbHVlc1xuLy9UdXJucyB0aGUgdmFsdWVzIGludG8gYW4gYXJyYXkgY2FsbGVkIHRhZ2xpc3QuICBFdmVyeXRpbWUgaXQgaXMgY2xpY2tlZCBpdCB3aXBlcyBpdCBjbGVhbiBhbmQgcmVtYWtlcyB0aGUgbGlzdFxuZnVuY3Rpb24gZ2V0VGFncygpIHtcblx0bGV0IHRhZ2xpc3QgPSBbXTtcblx0Y29uc3QgY2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0J2lucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkJ1xuXHQpO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGNoZWNrYm94ZXMubGVuZ3RoOyBpKyspIHtcblx0XHR0YWdsaXN0LnB1c2goY2hlY2tib3hlc1tpXS52YWx1ZSk7XG5cdH1cblx0aWYgKHRhZ2xpc3QubGVuZ3RoID09IDApIHtcblx0XHRhbGVydChcIlBsZWFzZSBtYWtlIGEgc2VsZWN0aW9uXCIpO1xuXHRcdHJldHVybjtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gdGFnbGlzdDtcblx0fVxufVxuXG4vL2NoZWNrcyBpZiB0aGUgc2Vjb25kIGFycmF5IGlzIGEgc3Vic2V0IG9mIHRoZSBmaXJzdCBhcnJheVxuZnVuY3Rpb24gaXNTdWJzZXQodGFnYXJyYXksIG1lYWxhcnJheSkge1xuXHRyZXR1cm4gdGFnYXJyYXkuZXZlcnkoKGVsZW1lbnQpID0+IG1lYWxhcnJheS5pbmNsdWRlcyhlbGVtZW50KSk7XG59XG4vL3RoaXMgY2hlY2tzIHRvIHNlZSBpZiB0aGUgdGFnIGVsZW1lbnRzIGFyZSBpbiBlYWNoIGZvb2QgZWxlbWVudHNcbmZ1bmN0aW9uIGNyb3NzQ2hlY2sodGFnbGlzdCkge1xuXHRtaWRkbGUuaW5uZXJIVE1MID0gXCJcIjtcblx0cG9zc2libGVtZWFscyA9IFtdO1xuXG5cdGZvciAobGV0IG1lYWwgb2YgbWVhbGxpc3QpIHtcblx0XHQvL2ZvciBldmVyeSBtZWFsIGluIG1lYWwgbGlzdFxuXHRcdC8vY2FsbHMgaXNTdWJzZXQgdG8gc2VlIGlmIHRoZSB0YWdhcnJheSBtYXRjaGVzIHRoZSB0YWcgYXJyYXkgb2YgdGhhdCBtZWFsLlxuXHRcdC8vSWYgdGhlcmVzIGEgbWF0Y2gsIGNyZWF0ZSBhIG5ldyBjb3B5IG9mIHRoZSBtZWFsLCBhbmQgdGhlbiBwdXQgaXQgaW50byBhbiBhcnJheSBvZiBwb3NzaWJsZSBtZWFsc1xuXHRcdGlmIChpc1N1YnNldCh0YWdsaXN0LCBtZWFsLnRhZ3MpID09IHRydWUpIHtcblx0XHRcdGxldCBwb3NzaWJsZW1lYWwgPSBtZWFsO1xuXHRcdFx0cG9zc2libGVtZWFscy5wdXNoKHBvc3NpYmxlbWVhbCk7XG5cdFx0fVxuXHR9XG5cdGlmIChwb3NzaWJsZW1lYWxzLmxlbmd0aCA9PT0gMCkge1xuXHRcdGxldCB0YWdsaXN0ID0gW107XG5cdFx0Y29uc3QgY2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0XHQnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQnXG5cdFx0KTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNoZWNrYm94ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNoZWNrYm94ZXNbaV0uY2hlY2tlZCA9IGZhbHNlO1xuXHRcdH1cblxuXHRcdGFsZXJ0KFwiTm8gbWF0Y2hlcyBmb3VuZC4gIFRyeSBhIGRpZmZlcmVudCBzZWxlY3Rpb25cIik7XG5cdH1cbn1cblxuLy9tYWtlcyBidXR0b25zIGZvciB0aGUgbWVhbHMgYmFzZWQgb24gdGhlIHRhZ3MgdGhhdCBtYXRjaFxuZnVuY3Rpb24gbWFrZUVsZW1lbnQodHlwZSwgaWRlbnRpdHksIHdoZXJlLCB0ZXh0KSB7XG5cdGxldCBwb29wcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG5cdHBvb3BzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGlkZW50aXR5KTtcblx0cG9vcHMuaW5uZXJIVE1MID0gdGV4dDtcblx0d2hlcmUuYXBwZW5kKHBvb3BzKTtcblx0cG9vcHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGFkZFRvR3JvY2VyeUxpc3QocG9vcHMpKTtcbn1cblxuLy93aGVuIHRoZSBtZWFsIGJ1dHRvbiBpcyBwcmVzc2VkLCBtYWtlIHN1cmUgdGhhdCBpdCBtYXRjaGVzIGEgbWVhbCwgYW5kIHRoZW4gYWRkIHRoYXQgbWVhbCBvYmplY3QgdG8gYSBmaW5hbCBhcnJheVxuZnVuY3Rpb24gYWRkVG9Hcm9jZXJ5TGlzdCh0aGVtZWFsKSB7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgbWVhbGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRpZiAodGhlbWVhbC5pbm5lckhUTUwgPT09IG1lYWxsaXN0W2ldLm5hbWUpIHtcblx0XHRcdGxldCBmaW5hbG1lYWwgPSBtZWFsbGlzdFtpXTtcblx0XHRcdGZpbmFsbGlzdC5wdXNoKGZpbmFsbWVhbCk7XG5cdFx0XHRjb25zb2xlLmxvZyhmaW5hbGxpc3QpO1xuXHRcdH1cblx0fVxuXHRkaXNwbGF5TWVhbHMoKTtcbn1cbi8vcmVtb3ZlcyBzb21lIGl0ZW0gZnJvbSBhbiBhcnJheVxuZnVuY3Rpb24gUmVtb3ZlKHRoaW5neSkge1xuXHRjb25zb2xlLmxvZyhcInRoaXMgaXMgYW4gYXJyYXk/XCIpO1xuXHRjb25zb2xlLmxvZyhmaW5hbGxpc3QpO1xuXHRjb25zb2xlLmxvZyhcInBvc2l0aW9uIGluIGFycmF5XCIpO1xuXHRmaW5hbGxpc3Quc3BsaWNlKHRoaW5neSwgMSk7XG5cdGRpc3BsYXlNZWFscyhmaW5hbGxpc3QpO1xufVxuLy9kaXNwbGF5cyB0aGUgbWVhbHMgaW4gZmluYWxsaXN0IGFzIGJ1dHRvbnNcbmZ1bmN0aW9uIGRpc3BsYXlNZWFscygpIHtcblx0bGlzdF9vZl9tZWFscy5pbm5lckhUTUwgPSBcIlwiO1xuXHRjb25zb2xlLmxvZyhcIlRoaXMgaXMgdGhlIGJlZ2luaW5uaW5nIG9mIGRpc3BsYXkgbWVhbHMgXCIgKyBmaW5hbGxpc3QpO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGZpbmFsbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBmaW5hbGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdFx0ZmluYWxidXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsaXN0bWVhbFwiKTtcblx0XHRmaW5hbGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJ1dHRvblwiW2ldKTtcblx0XHRmaW5hbGJ1dHRvbi5pbm5lckhUTUwgPSBmaW5hbGxpc3RbaV0ubmFtZTtcblx0XHRsaXN0X29mX21lYWxzLmFwcGVuZChmaW5hbGJ1dHRvbik7XG5cdFx0ZmluYWxidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IGZpbmFsbGlzdFtpXS5pbmdyZWRpZW50cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRmaW5hbGJ1dHRvbi5pbm5lckhUTUwgKz0gZmluYWxsaXN0W2ldLmluZ3JlZGllbnRzW2pdLm5hbWUgKyBcIiBcIjtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRmaW5hbGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XG5cdFx0XHRmaW5hbGJ1dHRvbi5pbm5lckhUTUwgPSBmaW5hbGxpc3RbaV0ubmFtZTtcblx0XHR9KTtcblx0XHRmaW5hbGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0ZmluYWxsaXN0LnNwbGljZShbaV0sIDEpO1xuXHRcdFx0ZGlzcGxheU1lYWxzKCk7XG5cdFx0fSk7XG5cdH1cbn1cblxuLy9hZGRzIHRoZSB0aXRsZXMgdG8gdGhlIGdyb2NlcnkgbGlzdFxuZnVuY3Rpb24gYWRkbWlkZGxlVGl0bGUoZG9jLCBpZCwgY2xzLCBpbm5lciwgY2VsbCkge1xuXHRsZXQgYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2VsbCk7XG5cdGRvYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGRvYy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG5cdGRvYy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBjbHMpO1xuXHRkb2MuaW5uZXJIVE1MID0gaW5uZXI7XG5cdGJveC5hcHBlbmQoZG9jKTtcbn1cblxuZnVuY3Rpb24gYWRkTGlzdEVsZW1lbnQoZmluYWxpbmdyZWRpZW50cywgbG9jYXRpb24sIGNlbGwpIHtcblx0Zm9yIChsZXQgaiA9IDA7IGogPCBmaW5hbGluZ3JlZGllbnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0aWYgKGZpbmFsaW5ncmVkaWVudHNbal0ubG9jYXRpb24gPT09IGxvY2F0aW9uKSB7XG5cdFx0XHRsZXQgcHJvZHVjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNlbGwpOyAvL2dldHMgdGhlIGNlbGwgYW5kIGFzc2lnbnMgaXQgYSBuYW1lXG5cdFx0XHRsZXQgcHJvZHVjZWl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRcdFx0cHJvZHVjZWl0ZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsaXN0aXRlbXNcIik7XG5cdFx0XHRwcm9kdWNlaXRlbS5pbm5lckhUTUwgPSBmaW5hbGluZ3JlZGllbnRzW2pdLm5hbWU7XG5cdFx0XHRwcm9kdWNlaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0XHRwcm9kdWNlaXRlbS5yZW1vdmUoKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRwcm9kdWNlLmFwcGVuZChwcm9kdWNlaXRlbSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIG1ha2VHcm9jZXJ5TGlzdCgpIHtcblx0Ly9jb252ZXJ0IHRoZSBtaWRkbGUgcGFnZSB0byB0aGUgbGlzdCBvZiBncm9jZXJpZXNcblx0bWlkZGxlLmlubmVySFRNTCA9IFwiXCI7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgZmluYWxsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBmaW5hbGxpc3RbaV0uaW5ncmVkaWVudHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGZpbmFsaW5ncmVkaWVudHMucHVzaChmaW5hbGxpc3RbaV0uaW5ncmVkaWVudHNbal0pO1xuXHRcdH1cblx0fVxuXHRjb25zb2xlLmxvZyhmaW5hbGluZ3JlZGllbnRzKTtcblxuXHRmaW5hbGluZ3JlZGllbnRzLnNvcnQoKGEsIGIpID0+IHtcblx0XHRpZiAoYS5uYW1lIDwgYi5uYW1lKSB7XG5cdFx0XHRyZXR1cm4gLTE7XG5cdFx0fSBlbHNlIGlmIChhLm5hbWUgPiBiLm5hbWUpIHtcblx0XHRcdHJldHVybiAxO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cdH0pO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGZpbmFsaW5ncmVkaWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zb2xlLmxvZyhmaW5hbGluZ3JlZGllbnRzW2ldLm5hbWUpO1xuXHR9XG5cdGNvbnNvbGUubG9nKGZpbmFsbGlzdCk7XG5cdG1pZGRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImdyb2NlcnltaWRkbGVcIik7XG5cdG1ha2VHcmlkKDIsIDYpO1xuXHRhZGRtaWRkbGVUaXRsZShcImRhaXJ5dGl0bGVcIiwgXCJ0aXRsZTFcIiwgXCJ0aXRsZVwiLCBcIkRhaXJ5XCIsIFwiY2VsbDAwXCIpO1xuXHRhZGRtaWRkbGVUaXRsZShcIlByb2R1Y2VcIiwgXCJ0aXRsZTJcIiwgXCJ0aXRsZVwiLCBcIlByb2R1Y2VcIiwgXCJjZWxsMDFcIik7XG5cdGFkZG1pZGRsZVRpdGxlKFwiRnJvemVuXCIsIFwidGl0bGUzXCIsIFwidGl0bGVcIiwgXCJGcm96ZW5cIiwgXCJjZWxsMDJcIik7XG5cdGFkZG1pZGRsZVRpdGxlKFwiQ2FubmVkXCIsIFwidGl0bGU0XCIsIFwidGl0bGVcIiwgXCJNZWF0XCIsIFwiY2VsbDAzXCIpO1xuXHRhZGRtaWRkbGVUaXRsZShcIk90aGVyXCIsIFwidGl0bGU0XCIsIFwidGl0bGVcIiwgXCJPdGhlclwiLCBcImNlbGwwNFwiKTtcblx0YWRkbWlkZGxlVGl0bGUoXCJOb24tRm9vZFwiLCBcInRpdGxlNFwiLCBcInRpdGxlXCIsIFwiTm9uLUZvb2RcIiwgXCJjZWxsMDVcIik7XG5cdGFkZExpc3RFbGVtZW50KGZpbmFsaW5ncmVkaWVudHMsIFwicHJvZHVjZVwiLCBcImNlbGwxMVwiKTtcblx0YWRkTGlzdEVsZW1lbnQoZmluYWxpbmdyZWRpZW50cywgXCJkYWlyeVwiLCBcImNlbGwxMFwiKTtcblx0YWRkTGlzdEVsZW1lbnQoZmluYWxpbmdyZWRpZW50cywgXCJtZWF0XCIsIFwiY2VsbDEzXCIpO1xuXHRhZGRMaXN0RWxlbWVudChmaW5hbGluZ3JlZGllbnRzLCBcImZyb3plblwiLCBcImNlbGwxMlwiKTtcblx0YWRkTGlzdEVsZW1lbnQoZmluYWxpbmdyZWRpZW50cywgXCJvdGhlclwiLCBcImNlbGwxNFwiKTtcblx0YWRkTGlzdEVsZW1lbnQoZmluYWxpbmdyZWRpZW50cywgXCJub25mb29kXCIsIFwiY2VsbDE1XCIpO1xufVxuXG5mdW5jdGlvbiBtYWtlR3JpZChyb3dzLCBjb2xzKSB7XG5cdGxldCBncmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncm9jZXJ5bWlkZGxlXCIpO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuXHRcdGZvciAobGV0IGogPSAwOyBqIDwgY29sczsgaisrKSB7XG5cdFx0XHRjb25zdCBncmlkSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRncmlkSXRlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImdyaWRseWZlXCIpO1xuXHRcdFx0Z3JpZEl0ZW0uaWQgPSBgY2VsbCR7aX0ke2p9YDtcblx0XHRcdGdyaWQuYXBwZW5kQ2hpbGQoZ3JpZEl0ZW0pO1xuXHRcdH1cblx0fVxufVxuXG4vL35+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fkFDVFVBTCBFWEVDVVRJTkcgQ09ERX5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5cblxuLy9ydW5zIHRoZSBmdW5jdGlvbiB3aGVuIGEgdGFnIGlzIGNsaWNrZWQgaW5zdGVhZCBvZiB0aGUgc3VibWl0IGJ1dHRvblxuZm9yIChsZXQgaSA9IDA7IGkgPCBjaGVja2JveGVzLmxlbmd0aDsgaSsrKSB7XG5cdGNoZWNrYm94ZXNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRjcm9zc0NoZWNrKGdldFRhZ3MoKSk7XG5cdFx0cG9zc2libGVtZWFscy5zb3J0KChhLCBiKSA9PiB7XG5cdFx0XHRpZiAoYS5uYW1lIDwgYi5uYW1lKSB7XG5cdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdH0gZWxzZSBpZiAoYS5uYW1lID4gYi5uYW1lKSB7XG5cdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHR9XG5cdFx0fSk7IC8vYWxwaGFiZXRpemVzIHRoZSBhcnJheVxuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwb3NzaWJsZW1lYWxzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRtYWtlRWxlbWVudChcImJ1dHRvblwiLCBcInBvc3NpYmxlbWVhbFwiLCBtaWRkbGUsIHBvc3NpYmxlbWVhbHNbaV0ubmFtZSk7XG5cdFx0fVxuXHR9KTtcbn1cbmdyb2Nlcmllcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRtYWtlR3JvY2VyeUxpc3QoKTtcbn0pO1xuXG5zdWJtaXRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0Y3Jvc3NDaGVjayhnZXRUYWdzKCkpO1xuXHRwb3NzaWJsZW1lYWxzLnNvcnQoKGEsIGIpID0+IHtcblx0XHRpZiAoYS5uYW1lIDwgYi5uYW1lKSB7XG5cdFx0XHRyZXR1cm4gLTE7XG5cdFx0fSBlbHNlIGlmIChhLm5hbWUgPiBiLm5hbWUpIHtcblx0XHRcdHJldHVybiAxO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cdH0pOyAvL2FscGhhYmV0aXplcyB0aGUgYXJyYXlcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHBvc3NpYmxlbWVhbHMubGVuZ3RoOyBpKyspIHtcblx0XHRtYWtlRWxlbWVudChcImJ1dHRvblwiLCBcInBvc3NpYmxlbWVhbFwiLCBtaWRkbGUsIHBvc3NpYmxlbWVhbHNbaV0ubmFtZSk7XG5cdH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9