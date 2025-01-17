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
	overflow-y: auto;
	flex-grow: 0;
	flex-shrink: 0;
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
	position: fixed;
	bottom: 160px;
	right: 45px;
	width: 200px;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC,WAAW;AACZ;AACA;CACC,eAAe;CACf,0BAA0B;CAC1B,kBAAkB;AACnB;;AAEA;CACC,yBAAyB;CACzB,kBAAkB;CAClB,mCAAmC;CACnC,cAAc;CACd,gBAAgB;AACjB;;AAEA;CACC,yBAAyB;AAC1B;AACA;CACC,WAAW;CACX,aAAa;CACb,YAAY;CACZ,aAAa;CACb,sBAAsB;AACvB;;AAEA;;CAEC,eAAe;CACf,aAAa;CACb,mBAAmB;CACnB,yBAAyB;CACzB,cAAc;CACd,eAAe;CACf,6EAA6E;CAC7E,0BAA0B;CAC1B,kBAAkB;AACnB;AACA;CACC,cAAc;CACd,uBAAuB;CACvB,mBAAmB;CACnB,eAAe;AAChB;;AAEA;CACC,gBAAgB;CAChB,YAAY;CACZ,cAAc;CACd,eAAe;CACf,yBAAyB;CACzB,aAAa;CACb,mBAAmB;AACpB;AACA;CACC,eAAe;CACf,yBAAyB;AAC1B;;AAEA;CACC,gBAAgB;CAChB,6BAA6B;CAC7B,aAAa;CACb,sBAAsB;CACtB,8BAA8B;CAC9B,eAAe;CACf,cAAc;CACd,YAAY;CACZ,yBAAyB;CACzB,cAAc;AACf;;AAEA;CACC,cAAc;CACd,YAAY;CACZ,eAAe;CACf,yBAAyB;CACzB,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,mCAAmC;CACnC,sCAAsC;CACtC,aAAa;AACd;;AAEA;CACC,4BAA4B;CAC5B,YAAY;CACZ,cAAc;CACd,eAAe;CACf,yBAAyB;CACzB,aAAa;CACb,sBAAsB;CACtB,8BAA8B;AAC/B;;AAEA;CACC,WAAW;CACX,UAAU;CACV,uBAAuB;CACvB,mBAAmB;CACnB,YAAY;CACZ,yBAAyB;CACzB,0BAA0B;CAC1B,yBAAyB;AAC1B;AACA;CACC,yBAAyB;AAC1B;;AAEA;CACC,yBAAyB;AAC1B;;AAEA;CACC,aAAa;CACb,YAAY;CACZ,QAAQ;CACR,sBAAsB;AACvB;;AAEA;CACC,gBAAgB;CAChB,aAAa;CACb,sBAAsB;AACvB;;AAEA;CACC,gBAAgB;CAChB,eAAe;CACf,6EAA6E;CAC7E,aAAa;CACb,mBAAmB;CACnB,YAAY;CACZ,QAAQ;CACR,cAAc;AACf;;AAEA;;CAEC,UAAU;CACV,YAAY;CACZ,kBAAkB;CAClB,YAAY;CACZ,mBAAmB;CACnB,aAAa;AACd;;AAEA;CACC,eAAe;CACf,aAAa;CACb,WAAW;CACX,YAAY;AACb;AACA;CACC,WAAW;CACX,aAAa;CACb,2BAA2B;CAC3B,8CAA8C;AAC/C;;AAEA;CACC,mBAAmB;CACnB,6BAA6B;CAC7B,8BAA8B;AAC/B;;AAEA;CACC,gBAAgB;CAChB,kBAAkB;CAClB,eAAe;CACf,cAAc;AACf;;AAEA;CACC,kBAAkB;CAClB,kBAAkB;AACnB;AACA;CACC,kBAAkB;AACnB;AACA;CACC,kBAAkB;AACnB;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,YAAY;CACZ,gBAAgB;CAChB,aAAa;CACb,mBAAmB;CACnB,sBAAsB;CACtB,QAAQ;AACT;;AAEA;CACC,kBAAkB;CAClB,eAAe;CACf,UAAU;CACV,cAAc;CACd,yBAAyB;CACzB,kBAAkB;CAClB,yBAAyB;AAC1B;AACA;CACC,yBAAyB;AAC1B;;AAEA;;;;;;CAMC,aAAa;CACb,mBAAmB;CACnB,uBAAuB;AACxB","sourcesContent":["body {\n\tmargin: 0px;\n}\nform {\n\tfont-size: 28px;\n\ttext-decoration: underline;\n\tpadding-left: 10px;\n}\n\nbutton {\n\tbackground-color: #22577a;\n\tborder-radius: 8px;\n\tbox-shadow: 2px 2px 2px 2px #032034;\n\tcolor: #80ed99;\n\tfont-weight: 700;\n}\n\nbutton:hover {\n\tbackground-color: #032034;\n}\n#mainbody {\n\tmargin: 0px;\n\theight: 100vh;\n\twidth: 100vw;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n#titlelogo,\n#bottom {\n\tflex-basis: 20%;\n\tdisplay: flex;\n\talign-items: center;\n\tbackground-color: #22577a;\n\tcolor: #80ed99;\n\tfont-size: 36px;\n\tfont-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n\ttext-decoration: underline;\n\tpadding-left: 20px;\n}\n#bottom {\n\tcolor: #80ed99;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-size: 16px;\n}\n\n#mid {\n\toverflow-y: auto;\n\tflex-grow: 0;\n\tflex-shrink: 0;\n\tflex-basis: 60%;\n\tbackground-color: #57cc99;\n\tdisplay: flex;\n\tflex-direction: row;\n}\n#bottom {\n\tflex-basis: 20%;\n\tbackground-color: #22577a;\n}\n\n#midleft {\n\tfont-weight: 700;\n\tborder-right: solid 2px black;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tflex-basis: 20%;\n\tflex-shrink: 0;\n\tflex-grow: 0;\n\tbackground-color: #57cc99;\n\tcolor: #22577a;\n}\n\n#middle {\n\tflex-shrink: 0;\n\tflex-grow: 0;\n\tflex-basis: 60%;\n\tbackground-color: #57cc99;\n\tdisplay: grid;\n\tjustify-content: center;\n\talign-items: center;\n\tgrid-template-rows: 1fr 1fr 1fr 1fr;\n\tgrid-template-columns: 1fr 1fr 1fr 1fr;\n\tgrid-gap: 8px;\n}\n\n#midright {\n\tborder-left: 2px solid black;\n\tflex-grow: 0;\n\tflex-shrink: 0;\n\tflex-basis: 20%;\n\tbackground-color: #57cc99;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n}\n\n.possiblemeal {\n\theight: 90%;\n\twidth: 90%;\n\tjustify-content: center;\n\talign-items: center;\n\tmargin: auto;\n\tbackground-color: #22577a;\n\tbox-shadow: 2px 2px 4x 4px;\n\tborder: 1px solid #06314d;\n}\n.possiblemeal:hover {\n\tbackground-color: #032034;\n}\n\n.listmeal:hover {\n\tbackground-color: #032034;\n}\n\n#meal_list {\n\tdisplay: flex;\n\tmargin: 20px;\n\tgap: 8px;\n\tflex-direction: column;\n}\n\n#formcontainer {\n\tmargin-top: 20px;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n#selectionbox {\n\tfont-weight: 400;\n\tfont-size: 20px;\n\tfont-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: 3px;\n\tgap: 8px;\n\tcolor: #22577a;\n}\n\n#groceries,\n#submit {\n\twidth: 80%;\n\theight: 30px;\n\tborder-radius: 8px;\n\tmargin: auto;\n\tmargin-bottom: 20px;\n\tpadding: auto;\n}\n\n#groceries {\n\tposition: fixed;\n\tbottom: 160px;\n\tright: 45px;\n\twidth: 200px;\n}\n#grocerymiddle {\n\twidth: 100%;\n\tdisplay: grid;\n\tgrid-template-rows: 20% 80%;\n\tgrid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\n}\n\n#grocerymiddle > div {\n\talign-items: center;\n\tborder-right: 2px solid black;\n\tborder-bottom: 2px solid black;\n}\n\n.title {\n\tfont-weight: 700;\n\ttext-align: center;\n\tfont-size: 28px;\n\tcolor: #22577a;\n}\n\n#title1 {\n\tgrid-area: 1/1/2/2;\n\ttext-align: center;\n}\n#title2 {\n\tgrid-area: 1/2/2/3;\n}\n#title3 {\n\tgrid-area: 1/3/2/4;\n}\n\n#title4 {\n\tgrid-area: 1/4/2/5;\n}\n\n.gridlyfe {\n\tflex-grow: 0;\n\toverflow-y: auto;\n\tdisplay: flex;\n\talign-items: center;\n\tflex-direction: column;\n\tgap: 8px;\n}\n\n.listitems {\n\ttext-align: center;\n\tfont-size: 14px;\n\twidth: 80%;\n\tcolor: #57cc99;\n\tbackground-color: #22577a;\n\tborder-radius: 8px;\n\tborder: 2px solid #82f38d;\n}\n.listitems:hover {\n\tbackground-color: #042a43;\n}\n\n#cell00,\n#cell01,\n#cell02,\n#cell03,\n#cell04,\n#cell05 {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n"],"sourceRoot":""}]);
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

let Chips = new Meal("Chips", ["nonfood", "all", "snacks"], chips);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLFVBQVUsVUFBVSxZQUFZLGFBQWEsZ0NBQWdDLGdCQUFnQixHQUFHLFFBQVEsb0JBQW9CLCtCQUErQix1QkFBdUIsR0FBRyxZQUFZLDhCQUE4Qix1QkFBdUIsd0NBQXdDLG1CQUFtQixxQkFBcUIsR0FBRyxrQkFBa0IsOEJBQThCLEdBQUcsYUFBYSxnQkFBZ0Isa0JBQWtCLGlCQUFpQixrQkFBa0IsMkJBQTJCLEdBQUcsMEJBQTBCLG9CQUFvQixrQkFBa0Isd0JBQXdCLDhCQUE4QixtQkFBbUIsb0JBQW9CLHdGQUF3RiwrQkFBK0IsdUJBQXVCLEdBQUcsV0FBVyxtQkFBbUIsNEJBQTRCLHdCQUF3QixvQkFBb0IsR0FBRyxVQUFVLHFCQUFxQixpQkFBaUIsbUJBQW1CLG9CQUFvQiw4QkFBOEIsa0JBQWtCLHdCQUF3QixHQUFHLFdBQVcsb0JBQW9CLDhCQUE4QixHQUFHLGNBQWMscUJBQXFCLGtDQUFrQyxrQkFBa0IsMkJBQTJCLG1DQUFtQyxvQkFBb0IsbUJBQW1CLGlCQUFpQiw4QkFBOEIsbUJBQW1CLEdBQUcsYUFBYSxtQkFBbUIsaUJBQWlCLG9CQUFvQiw4QkFBOEIsa0JBQWtCLDRCQUE0Qix3QkFBd0Isd0NBQXdDLDJDQUEyQyxrQkFBa0IsR0FBRyxlQUFlLGlDQUFpQyxpQkFBaUIsbUJBQW1CLG9CQUFvQiw4QkFBOEIsa0JBQWtCLDJCQUEyQixtQ0FBbUMsR0FBRyxtQkFBbUIsZ0JBQWdCLGVBQWUsNEJBQTRCLHdCQUF3QixpQkFBaUIsOEJBQThCLCtCQUErQiw4QkFBOEIsR0FBRyx1QkFBdUIsOEJBQThCLEdBQUcscUJBQXFCLDhCQUE4QixHQUFHLGdCQUFnQixrQkFBa0IsaUJBQWlCLGFBQWEsMkJBQTJCLEdBQUcsb0JBQW9CLHFCQUFxQixrQkFBa0IsMkJBQTJCLEdBQUcsbUJBQW1CLHFCQUFxQixvQkFBb0Isd0ZBQXdGLGtCQUFrQix3QkFBd0IsaUJBQWlCLGFBQWEsbUJBQW1CLEdBQUcsMEJBQTBCLGVBQWUsaUJBQWlCLHVCQUF1QixpQkFBaUIsd0JBQXdCLGtCQUFrQixHQUFHLGdCQUFnQixvQkFBb0Isa0JBQWtCLGdCQUFnQixpQkFBaUIsR0FBRyxrQkFBa0IsZ0JBQWdCLGtCQUFrQixnQ0FBZ0MsbURBQW1ELEdBQUcsMEJBQTBCLHdCQUF3QixrQ0FBa0MsbUNBQW1DLEdBQUcsWUFBWSxxQkFBcUIsdUJBQXVCLG9CQUFvQixtQkFBbUIsR0FBRyxhQUFhLHVCQUF1Qix1QkFBdUIsR0FBRyxXQUFXLHVCQUF1QixHQUFHLFdBQVcsdUJBQXVCLEdBQUcsYUFBYSx1QkFBdUIsR0FBRyxlQUFlLGlCQUFpQixxQkFBcUIsa0JBQWtCLHdCQUF3QiwyQkFBMkIsYUFBYSxHQUFHLGdCQUFnQix1QkFBdUIsb0JBQW9CLGVBQWUsbUJBQW1CLDhCQUE4Qix1QkFBdUIsOEJBQThCLEdBQUcsb0JBQW9CLDhCQUE4QixHQUFHLCtEQUErRCxrQkFBa0Isd0JBQXdCLDRCQUE0QixHQUFHLHFCQUFxQjtBQUMvckw7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUN0TzFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhO0FBQ3JDLGlCQUFpQix1R0FBYTtBQUM5QixpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQ3hCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2JvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDN0dBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7OztBQ0FxQjtBQUNjOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLDRDQUFRO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsSUFBSSw0Q0FBUSxTQUFTO0FBQ3RDLDRCQUE0Qiw0Q0FBUTtBQUNwQyxtQkFBbUIsNENBQVE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscUNBQXFDO0FBQ3hEO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsNkJBQTZCO0FBQzlDO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkMsa0JBQWtCLHFDQUFxQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEVBQUU7QUFDRixpQkFBaUIsNkJBQTZCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLFVBQVU7QUFDM0Isa0JBQWtCLFVBQVU7QUFDNUI7QUFDQTtBQUNBLHdCQUF3QixFQUFFLEVBQUUsRUFBRTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGdCQUFnQix1QkFBdUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRyxHQUFHOztBQUVOLGtCQUFrQiwwQkFBMEI7QUFDNUM7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEVBQUUsR0FBRzs7QUFFTCxpQkFBaUIsMEJBQTBCO0FBQzNDO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvbWVhbHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuXHRtYXJnaW46IDBweDtcbn1cbmZvcm0ge1xuXHRmb250LXNpemU6IDI4cHg7XG5cdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuXHRwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmJ1dHRvbiB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMyMjU3N2E7XG5cdGJvcmRlci1yYWRpdXM6IDhweDtcblx0Ym94LXNoYWRvdzogMnB4IDJweCAycHggMnB4ICMwMzIwMzQ7XG5cdGNvbG9yOiAjODBlZDk5O1xuXHRmb250LXdlaWdodDogNzAwO1xufVxuXG5idXR0b246aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDMyMDM0O1xufVxuI21haW5ib2R5IHtcblx0bWFyZ2luOiAwcHg7XG5cdGhlaWdodDogMTAwdmg7XG5cdHdpZHRoOiAxMDB2dztcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuI3RpdGxlbG9nbyxcbiNib3R0b20ge1xuXHRmbGV4LWJhc2lzOiAyMCU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGJhY2tncm91bmQtY29sb3I6ICMyMjU3N2E7XG5cdGNvbG9yOiAjODBlZDk5O1xuXHRmb250LXNpemU6IDM2cHg7XG5cdGZvbnQtZmFtaWx5OiBcIkdpbGwgU2Fuc1wiLCBcIkdpbGwgU2FucyBNVFwiLCBDYWxpYnJpLCBcIlRyZWJ1Y2hldCBNU1wiLCBzYW5zLXNlcmlmO1xuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcblx0cGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuI2JvdHRvbSB7XG5cdGNvbG9yOiAjODBlZDk5O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Zm9udC1zaXplOiAxNnB4O1xufVxuXG4jbWlkIHtcblx0b3ZlcmZsb3cteTogYXV0bztcblx0ZmxleC1ncm93OiAwO1xuXHRmbGV4LXNocmluazogMDtcblx0ZmxleC1iYXNpczogNjAlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTdjYzk5O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuI2JvdHRvbSB7XG5cdGZsZXgtYmFzaXM6IDIwJTtcblx0YmFja2dyb3VuZC1jb2xvcjogIzIyNTc3YTtcbn1cblxuI21pZGxlZnQge1xuXHRmb250LXdlaWdodDogNzAwO1xuXHRib3JkZXItcmlnaHQ6IHNvbGlkIDJweCBibGFjaztcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRmbGV4LWJhc2lzOiAyMCU7XG5cdGZsZXgtc2hyaW5rOiAwO1xuXHRmbGV4LWdyb3c6IDA7XG5cdGJhY2tncm91bmQtY29sb3I6ICM1N2NjOTk7XG5cdGNvbG9yOiAjMjI1NzdhO1xufVxuXG4jbWlkZGxlIHtcblx0ZmxleC1zaHJpbms6IDA7XG5cdGZsZXgtZ3JvdzogMDtcblx0ZmxleC1iYXNpczogNjAlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTdjYzk5O1xuXHRkaXNwbGF5OiBncmlkO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnI7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xuXHRncmlkLWdhcDogOHB4O1xufVxuXG4jbWlkcmlnaHQge1xuXHRib3JkZXItbGVmdDogMnB4IHNvbGlkIGJsYWNrO1xuXHRmbGV4LWdyb3c6IDA7XG5cdGZsZXgtc2hyaW5rOiAwO1xuXHRmbGV4LWJhc2lzOiAyMCU7XG5cdGJhY2tncm91bmQtY29sb3I6ICM1N2NjOTk7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnBvc3NpYmxlbWVhbCB7XG5cdGhlaWdodDogOTAlO1xuXHR3aWR0aDogOTAlO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0bWFyZ2luOiBhdXRvO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjI1NzdhO1xuXHRib3gtc2hhZG93OiAycHggMnB4IDR4IDRweDtcblx0Ym9yZGVyOiAxcHggc29saWQgIzA2MzE0ZDtcbn1cbi5wb3NzaWJsZW1lYWw6aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDMyMDM0O1xufVxuXG4ubGlzdG1lYWw6aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDMyMDM0O1xufVxuXG4jbWVhbF9saXN0IHtcblx0ZGlzcGxheTogZmxleDtcblx0bWFyZ2luOiAyMHB4O1xuXHRnYXA6IDhweDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuI2Zvcm1jb250YWluZXIge1xuXHRtYXJnaW4tdG9wOiAyMHB4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jc2VsZWN0aW9uYm94IHtcblx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0Zm9udC1zaXplOiAyMHB4O1xuXHRmb250LWZhbWlseTogXCJHaWxsIFNhbnNcIiwgXCJHaWxsIFNhbnMgTVRcIiwgQ2FsaWJyaSwgXCJUcmVidWNoZXQgTVNcIiwgc2Fucy1zZXJpZjtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0cGFkZGluZzogM3B4O1xuXHRnYXA6IDhweDtcblx0Y29sb3I6ICMyMjU3N2E7XG59XG5cbiNncm9jZXJpZXMsXG4jc3VibWl0IHtcblx0d2lkdGg6IDgwJTtcblx0aGVpZ2h0OiAzMHB4O1xuXHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdG1hcmdpbjogYXV0bztcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcblx0cGFkZGluZzogYXV0bztcbn1cblxuI2dyb2NlcmllcyB7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0Ym90dG9tOiAxNjBweDtcblx0cmlnaHQ6IDQ1cHg7XG5cdHdpZHRoOiAyMDBweDtcbn1cbiNncm9jZXJ5bWlkZGxlIHtcblx0d2lkdGg6IDEwMCU7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtcm93czogMjAlIDgwJTtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcbn1cblxuI2dyb2NlcnltaWRkbGUgPiBkaXYge1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBibGFjaztcblx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xufVxuXG4udGl0bGUge1xuXHRmb250LXdlaWdodDogNzAwO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGZvbnQtc2l6ZTogMjhweDtcblx0Y29sb3I6ICMyMjU3N2E7XG59XG5cbiN0aXRsZTEge1xuXHRncmlkLWFyZWE6IDEvMS8yLzI7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiN0aXRsZTIge1xuXHRncmlkLWFyZWE6IDEvMi8yLzM7XG59XG4jdGl0bGUzIHtcblx0Z3JpZC1hcmVhOiAxLzMvMi80O1xufVxuXG4jdGl0bGU0IHtcblx0Z3JpZC1hcmVhOiAxLzQvMi81O1xufVxuXG4uZ3JpZGx5ZmUge1xuXHRmbGV4LWdyb3c6IDA7XG5cdG92ZXJmbG93LXk6IGF1dG87XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogOHB4O1xufVxuXG4ubGlzdGl0ZW1zIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdHdpZHRoOiA4MCU7XG5cdGNvbG9yOiAjNTdjYzk5O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjI1NzdhO1xuXHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdGJvcmRlcjogMnB4IHNvbGlkICM4MmYzOGQ7XG59XG4ubGlzdGl0ZW1zOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzA0MmE0Mztcbn1cblxuI2NlbGwwMCxcbiNjZWxsMDEsXG4jY2VsbDAyLFxuI2NlbGwwMyxcbiNjZWxsMDQsXG4jY2VsbDA1IHtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxXQUFXO0FBQ1o7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O0FBQzFCOztBQUVBOzs7Ozs7Q0FNQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHVCQUF1QjtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG5cXHRtYXJnaW46IDBweDtcXG59XFxuZm9ybSB7XFxuXFx0Zm9udC1zaXplOiAyOHB4O1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcblxcdHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxuYnV0dG9uIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjI1NzdhO1xcblxcdGJvcmRlci1yYWRpdXM6IDhweDtcXG5cXHRib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggIzAzMjAzNDtcXG5cXHRjb2xvcjogIzgwZWQ5OTtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMwMzIwMzQ7XFxufVxcbiNtYWluYm9keSB7XFxuXFx0bWFyZ2luOiAwcHg7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHR3aWR0aDogMTAwdnc7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jdGl0bGVsb2dvLFxcbiNib3R0b20ge1xcblxcdGZsZXgtYmFzaXM6IDIwJTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzIyNTc3YTtcXG5cXHRjb2xvcjogIzgwZWQ5OTtcXG5cXHRmb250LXNpemU6IDM2cHg7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJHaWxsIFNhbnNcXFwiLCBcXFwiR2lsbCBTYW5zIE1UXFxcIiwgQ2FsaWJyaSwgXFxcIlRyZWJ1Y2hldCBNU1xcXCIsIHNhbnMtc2VyaWY7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuXFx0cGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG4jYm90dG9tIHtcXG5cXHRjb2xvcjogIzgwZWQ5OTtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuI21pZCB7XFxuXFx0b3ZlcmZsb3cteTogYXV0bztcXG5cXHRmbGV4LWdyb3c6IDA7XFxuXFx0ZmxleC1zaHJpbms6IDA7XFxuXFx0ZmxleC1iYXNpczogNjAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM1N2NjOTk7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG4jYm90dG9tIHtcXG5cXHRmbGV4LWJhc2lzOiAyMCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzIyNTc3YTtcXG59XFxuXFxuI21pZGxlZnQge1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Ym9yZGVyLXJpZ2h0OiBzb2xpZCAycHggYmxhY2s7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRmbGV4LWJhc2lzOiAyMCU7XFxuXFx0ZmxleC1zaHJpbms6IDA7XFxuXFx0ZmxleC1ncm93OiAwO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM1N2NjOTk7XFxuXFx0Y29sb3I6ICMyMjU3N2E7XFxufVxcblxcbiNtaWRkbGUge1xcblxcdGZsZXgtc2hyaW5rOiAwO1xcblxcdGZsZXgtZ3JvdzogMDtcXG5cXHRmbGV4LWJhc2lzOiA2MCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzU3Y2M5OTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuXFx0Z3JpZC1nYXA6IDhweDtcXG59XFxuXFxuI21pZHJpZ2h0IHtcXG5cXHRib3JkZXItbGVmdDogMnB4IHNvbGlkIGJsYWNrO1xcblxcdGZsZXgtZ3JvdzogMDtcXG5cXHRmbGV4LXNocmluazogMDtcXG5cXHRmbGV4LWJhc2lzOiAyMCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzU3Y2M5OTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ucG9zc2libGVtZWFsIHtcXG5cXHRoZWlnaHQ6IDkwJTtcXG5cXHR3aWR0aDogOTAlO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0bWFyZ2luOiBhdXRvO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMyMjU3N2E7XFxuXFx0Ym94LXNoYWRvdzogMnB4IDJweCA0eCA0cHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgIzA2MzE0ZDtcXG59XFxuLnBvc3NpYmxlbWVhbDpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzAzMjAzNDtcXG59XFxuXFxuLmxpc3RtZWFsOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDMyMDM0O1xcbn1cXG5cXG4jbWVhbF9saXN0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdG1hcmdpbjogMjBweDtcXG5cXHRnYXA6IDhweDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jZm9ybWNvbnRhaW5lciB7XFxuXFx0bWFyZ2luLXRvcDogMjBweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNzZWxlY3Rpb25ib3gge1xcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiR2lsbCBTYW5zXFxcIiwgXFxcIkdpbGwgU2FucyBNVFxcXCIsIENhbGlicmksIFxcXCJUcmVidWNoZXQgTVNcXFwiLCBzYW5zLXNlcmlmO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAzcHg7XFxuXFx0Z2FwOiA4cHg7XFxuXFx0Y29sb3I6ICMyMjU3N2E7XFxufVxcblxcbiNncm9jZXJpZXMsXFxuI3N1Ym1pdCB7XFxuXFx0d2lkdGg6IDgwJTtcXG5cXHRoZWlnaHQ6IDMwcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogOHB4O1xcblxcdG1hcmdpbjogYXV0bztcXG5cXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xcblxcdHBhZGRpbmc6IGF1dG87XFxufVxcblxcbiNncm9jZXJpZXMge1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHRib3R0b206IDE2MHB4O1xcblxcdHJpZ2h0OiA0NXB4O1xcblxcdHdpZHRoOiAyMDBweDtcXG59XFxuI2dyb2NlcnltaWRkbGUge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAyMCUgODAlO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XFxufVxcblxcbiNncm9jZXJ5bWlkZGxlID4gZGl2IHtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGJsYWNrO1xcblxcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnRpdGxlIHtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRmb250LXNpemU6IDI4cHg7XFxuXFx0Y29sb3I6ICMyMjU3N2E7XFxufVxcblxcbiN0aXRsZTEge1xcblxcdGdyaWQtYXJlYTogMS8xLzIvMjtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiN0aXRsZTIge1xcblxcdGdyaWQtYXJlYTogMS8yLzIvMztcXG59XFxuI3RpdGxlMyB7XFxuXFx0Z3JpZC1hcmVhOiAxLzMvMi80O1xcbn1cXG5cXG4jdGl0bGU0IHtcXG5cXHRncmlkLWFyZWE6IDEvNC8yLzU7XFxufVxcblxcbi5ncmlkbHlmZSB7XFxuXFx0ZmxleC1ncm93OiAwO1xcblxcdG92ZXJmbG93LXk6IGF1dG87XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiA4cHg7XFxufVxcblxcbi5saXN0aXRlbXMge1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRmb250LXNpemU6IDE0cHg7XFxuXFx0d2lkdGg6IDgwJTtcXG5cXHRjb2xvcjogIzU3Y2M5OTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjI1NzdhO1xcblxcdGJvcmRlci1yYWRpdXM6IDhweDtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCAjODJmMzhkO1xcbn1cXG4ubGlzdGl0ZW1zOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDQyYTQzO1xcbn1cXG5cXG4jY2VsbDAwLFxcbiNjZWxsMDEsXFxuI2NlbGwwMixcXG4jY2VsbDAzLFxcbiNjZWxsMDQsXFxuI2NlbGwwNSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCB7IG1lYWxsaXN0IH07XG5jbGFzcyBNZWFsIHtcblx0Y29uc3RydWN0b3IobmFtZSwgdGFncywgaW5ncmVkaWVudHMpIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMudGFncyA9IHRhZ3M7XG5cdFx0dGhpcy5pbmdyZWRpZW50cyA9IGluZ3JlZGllbnRzO1xuXHR9XG59XG5jbGFzcyBJbmdyZWRpZW50cyB7XG5cdGNvbnN0cnVjdG9yKG5hbWUsIGxvY2F0aW9uKSB7XG5cdFx0KHRoaXMubmFtZSA9IG5hbWUpLCAodGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uKTtcblx0fVxufVxuXG5jb25zdCBjcmVhbSA9IG5ldyBJbmdyZWRpZW50cyhcImNyZWFtXCIsIFwiZGFpcnlcIik7XG5jb25zdCBjaGlja2Vuc3RvY2sgPSBuZXcgSW5ncmVkaWVudHMoXCJjaGlja2VuIHN0b2NrXCIsIFwicHJvZHVjZVwiKTtcbmNvbnN0IG9uaW9uID0gbmV3IEluZ3JlZGllbnRzKFwib25pb25cIiwgXCJwcm9kdWNlXCIpO1xuY29uc3QgY2hpY2tlbiA9IG5ldyBJbmdyZWRpZW50cyhcImNoaWNrZW5cIiwgXCJtZWF0XCIpO1xuY29uc3QgYmFjb24gPSBuZXcgSW5ncmVkaWVudHMoXCJiYWNvblwiLCBcIm1lYXRcIik7XG5jb25zdCBjaGlsaV9iZWFucyA9IG5ldyBJbmdyZWRpZW50cyhcImNoaWxpIGJlYW5zXCIsIFwicHJvZHVjZVwiKTtcbmNvbnN0IGdhcmxpYyA9IG5ldyBJbmdyZWRpZW50cyhcImdhcmxpY1wiLCBcInByb2R1Y2VcIik7XG5jb25zdCBjZWxlcnkgPSBuZXcgSW5ncmVkaWVudHMoXCJjZWxlcnlcIiwgXCJwcm9kdWNlXCIpO1xuY29uc3QgY2Fycm90cyA9IG5ldyBJbmdyZWRpZW50cyhcImNhcnJvdHNcIiwgXCJwcm9kdWNlXCIpO1xuY29uc3QgY2FubmVsaW5pX2JlYW5zID0gbmV3IEluZ3JlZGllbnRzKFwiY2FubmVsaW5pX2JlYW5zXCIsIFwicHJvZHVjZVwiKTtcbmNvbnN0IHRvbWF0b19wYXN0ZSA9IG5ldyBJbmdyZWRpZW50cyhcInRvbWF0byBwYXN0ZVwiLCBcInByb2R1Y2VcIik7XG5jb25zdCBkaWNlZF90b21hdG9lcyA9IG5ldyBJbmdyZWRpZW50cyhcImRpY2VkIHRvbWF0b3NcIiwgXCJwcm9kdWNlXCIpO1xuY29uc3QgdmVuaXNvbiA9IG5ldyBJbmdyZWRpZW50cyhcInZlbmlzb25cIiwgXCJtZWF0XCIpO1xuY29uc3QgZ3JvdW5kbWVhdCA9IG5ldyBJbmdyZWRpZW50cyhcImdyb3VuZCBtZWF0XCIsIFwibWVhdFwiKTtcbmNvbnN0IHdvbnRvbndyYXBwZXJzID0gbmV3IEluZ3JlZGllbnRzKFwid29udG9uIHdyYXBwZXJzXCIsIFwicHJvZHVjZVwiKTtcbmNvbnN0IGNhYmJhZ2UgPSBuZXcgSW5ncmVkaWVudHMoXCJjYWJiYWdlXCIsIFwicHJvZHVjZVwiKTtcbmNvbnN0IHNhbG1vbiA9IG5ldyBJbmdyZWRpZW50cyhcInNhbG1vblwiLCBcIm1lYXRcIik7XG5jb25zdCBwYXBlcnRvd2VscyA9IG5ldyBJbmdyZWRpZW50cyhcInBhcGVyIHRvd2Vsc1wiLCBcIm5vbmZvb2RcIik7XG5jb25zdCBpY2VjcmVhbSA9IG5ldyBJbmdyZWRpZW50cyhcImljZSBjcmVhbVwiLCBcImZyb3plblwiKTtcbmNvbnN0IHBvcHNpY2xlcyA9IG5ldyBJbmdyZWRpZW50cyhcInBvcHNpY2xlc1wiLCBcImZyb3plblwiKTtcbmNvbnN0IG5hcGtpbnMgPSBuZXcgSW5ncmVkaWVudHMoXCJuYXBraW5zXCIsIFwibm9uZm9vZFwiKTtcbmNvbnN0IGhhbmRzb2FwID0gbmV3IEluZ3JlZGllbnRzKFwiaGFuZHNvYXBcIiwgXCJub25mb29kXCIpO1xuY29uc3QgZGlzaHNvYXAgPSBuZXcgSW5ncmVkaWVudHMoXCJkaXNoc29hcFwiLCBcIm5vbmZvb2RcIik7XG5jb25zdCBsYXVuZHJ5ZGV0ZXJnZW50ID0gbmV3IEluZ3JlZGllbnRzKFwibGF1bmRyeSBkZXRlcmdlbnRcIiwgXCJub25mb29kXCIpO1xuY29uc3QgZGlzaHdhc2hlcl9wb2RzID0gbmV3IEluZ3JlZGllbnRzKFwiZGlzaHdhc2hlciBwb2RzXCIsIFwibm9uZm9vZFwiKTtcbmNvbnN0IGNoaXBzID0gbmV3IEluZ3JlZGllbnRzKFwiY2hpcHNcIiwgXCJvdGhlclwiKTtcblxubGV0IENoaXBzID0gbmV3IE1lYWwoXCJDaGlwc1wiLCBbXCJub25mb29kXCIsIFwiYWxsXCIsIFwic25hY2tzXCJdLCBjaGlwcyk7XG5sZXQgTmFwa2lucyA9IG5ldyBNZWFsKFwibmFwa2luc1wiLCBbXCJub25mb29kXCIsIFwiYWxsXCJdLCBuYXBraW5zKTtcbmxldCBIYW5kc29hcCA9IG5ldyBNZWFsKFwiaGFuZHNvYXBcIiwgW1wibm9uZm9vZFwiLCBcImFsbFwiXSwgaGFuZHNvYXApO1xubGV0IERpc2hzb2FwID0gbmV3IE1lYWwoXCJkaXNoc29hcFwiLCBbXCJub25mb29kXCIsIFwiYWxsXCJdLCBkaXNoc29hcCk7XG5sZXQgTGF1bmRyeWRldGVyZ2VudCA9IG5ldyBNZWFsKFxuXHRcImxhdW5kcnlkZXRlcmdlbnRcIixcblx0W1wibm9uZm9vZFwiLCBcImFsbFwiXSxcblx0bGF1bmRyeWRldGVyZ2VudFxuKTtcbmxldCBkaXNod2FzaGVycG9kcyA9IG5ldyBNZWFsKFxuXHRcImRpc2h3YXNoZXIgcG9wZHNcIixcblx0W1wibm9uZm9vZFwiLCBcImFsbFwiXSxcblx0ZGlzaHdhc2hlcl9wb2RzXG4pO1xubGV0IHBhcGVyVG93ZWxzID0gbmV3IE1lYWwoXCJwYXBlciB0b3dlbHNcIiwgW1wibm9uZm9vZFwiLCBcImFsbFwiXSwgW3BhcGVydG93ZWxzXSk7XG5sZXQgaWNlQ3JlYW0gPSBuZXcgTWVhbChcImljZSBjcmVhbVwiLCBbXCJmcm96ZW5cIiwgXCJhbGxcIl0sIFtpY2VjcmVhbV0pO1xubGV0IFBvcHNpY2xlcyA9IG5ldyBNZWFsKFwicG9wc2ljbGVzXCIsIFtcImZyb3plblwiLCBcImFsbFwiXSwgW3BvcHNpY2xlc10pO1xuXG5sZXQgU2FsbW9uID0gbmV3IE1lYWwoXG5cdFwic2FsbW9uXCIsXG5cdFtcImZpc2hcIiwgXCJzZWFmb29kXCIsIFwiLG1lYXRcIiwgXCJoZWFsdGh5XCIsIFwiYWxsXCJdLFxuXHRbc2FsbW9uXVxuKTtcblxubGV0IHBvdHN0aWNrZXJzID0gbmV3IE1lYWwoXG5cdFwicG90c3RpY2tlcnNcIixcblx0W1wiaG90XCIsIFwiY3Jpc3B5XCIsIFwic2F2b3J5XCIsIFwiZXRobmljXCIsIFwiYWxsXCJdLFxuXHRbZ3JvdW5kbWVhdCwgd29udG9ud3JhcHBlcnMsIGNhYmJhZ2UsIGNhcnJvdHMsIGdhcmxpY11cbik7XG5sZXQgY2hpY2tlbl9zb3VwID0gbmV3IE1lYWwoXG5cdFwiY2hpY2tlbiBzb3VwXCIsXG5cdFtcImRpbm5lclwiLCBcInNvdXBcIiwgXCJob3RcIiwgXCJjaGlja2VuXCIsIFwiYWxsXCJdLFxuXHRbY2hpY2tlbnN0b2NrLCBvbmlvbiwgY3JlYW0sIGNhcnJvdHMsIGNlbGVyeSwgY2hpY2tlbl1cbik7XG5cbmxldCB2ZW5pc29uX2NoaWxpID0gbmV3IE1lYWwoXG5cdFwidmVuaXNvbiBjaGlsaVwiLFxuXHRbXCJ2ZW5pc29uXCIsIFwiY2hpbGlcIiwgXCJob3RcIiwgXCJhbGxcIl0sXG5cblx0W3Zlbmlzb24sIG9uaW9uLCBnYXJsaWMsIGNoaWNrZW5zdG9jaywgY2hpbGlfYmVhbnMsIGRpY2VkX3RvbWF0b2VzXVxuKTtcbmxldCBtYXJyeW1lY2hpY2tlbiA9IG5ldyBNZWFsKFxuXHRcIm1hcnJ5IG1lIGNoaWNrZW5cIixcblx0W1wiY2hpY2tlblwiLCBcImNyZWFteVwiLCBcImhvdFwiLCBcImFsbFwiXSxcblx0W2NoaWNrZW4sIGNyZWFtLCBnYXJsaWMsIGNoaWNrZW5zdG9jaywgY2hpbGlfYmVhbnMsIGRpY2VkX3RvbWF0b2VzXVxuKTtcbmxldCBwYXN0YV9mYWdpb2xlID0gbmV3IE1lYWwoXG5cdFwicGFzdGFfZmFnaW9sZVwiLFxuXHRbXCJpdGFsaWFuXCIsIFwic291cFwiLCBcImhvdFwiLCBcImFsbFwiXSxcblxuXHRbYmFjb24sIG9uaW9uLCBnYXJsaWMsIGNoaWNrZW5zdG9jaywgY2FubmVsaW5pX2JlYW5zLCB0b21hdG9fcGFzdGVdXG4pO1xuY29uc3QgbWVhbGxpc3QgPSBbXG5cdHZlbmlzb25fY2hpbGksXG5cdG1hcnJ5bWVjaGlja2VuLFxuXHRjaGlja2VuX3NvdXAsXG5cdHBhc3RhX2ZhZ2lvbGUsXG5cdHBvdHN0aWNrZXJzLFxuXHRTYWxtb24sXG5cdHBhcGVyVG93ZWxzLFxuXHRpY2VDcmVhbSxcblx0UG9wc2ljbGVzLFxuXHROYXBraW5zLFxuXHRMYXVuZHJ5ZGV0ZXJnZW50LFxuXHRkaXNod2FzaGVycG9kcyxcblx0SGFuZHNvYXAsXG5cdERpc2hzb2FwLFxuXHRDaGlwcyxcbl07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgbWVhbGxpc3QgfSBmcm9tIFwiLi9tZWFsc1wiO1xuXG5sZXQgcG9zc2libGVtZWFscyA9IFtdO1xuLy9hY3RzIGFzIHRoZSBhcnJheSB0byBob2xkIG1lYWxzIHRoYXQgYXJlIHNlbGVjdGVkIGFzIHBvc3NpYmxlIG9wdGlvbnMsIHN0b3JlcyB0aGVtIGFzIHRoZSBmdWxsIG9iamVjdHNcbmxldCBzZWxlY3RlZG1lYWxzID0gW107XG5sZXQgZmluYWxsaXN0ID0gW107XG5sZXQgZmluYWxpbmdyZWRpZW50cyA9IFtdO1xuXG5sZXQgbGlzdF9vZl9tZWFscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVhbF9saXN0XCIpO1xubGV0IGNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKTtcbi8vIGdsb2JhbCB2YXJpYWJsZXNcbmxldCBtaWRkbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pZGRsZVwiKTtcbmxldCBjcmVhdGVsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGVfbGlzdFwiKTtcbmNvbnN0IGxpc3RvZk1lYWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZWFsX2xpc3RcIik7XG5sZXQgc3VibWl0YnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRcIik7XG5sZXQgZ3JvY2VyaWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncm9jZXJpZXNcIik7XG5cbi8vT25jZSBzdWJtaXQgYnV0dG9uIGlzIGNsaWNrZWQsIGdvZXMgdGhyb3VnaCBhbmQgZ2V0cyBhbGwgY2hlY2tlZCB2YWx1ZXNcbi8vVHVybnMgdGhlIHZhbHVlcyBpbnRvIGFuIGFycmF5IGNhbGxlZCB0YWdsaXN0LiAgRXZlcnl0aW1lIGl0IGlzIGNsaWNrZWQgaXQgd2lwZXMgaXQgY2xlYW4gYW5kIHJlbWFrZXMgdGhlIGxpc3RcbmZ1bmN0aW9uIGdldFRhZ3MoKSB7XG5cdGxldCB0YWdsaXN0ID0gW107XG5cdGNvbnN0IGNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCdcblx0KTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjaGVja2JveGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dGFnbGlzdC5wdXNoKGNoZWNrYm94ZXNbaV0udmFsdWUpO1xuXHR9XG5cdGlmICh0YWdsaXN0Lmxlbmd0aCA9PSAwKSB7XG5cdFx0YWxlcnQoXCJQbGVhc2UgbWFrZSBhIHNlbGVjdGlvblwiKTtcblx0XHRyZXR1cm47XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIHRhZ2xpc3Q7XG5cdH1cbn1cblxuLy9jaGVja3MgaWYgdGhlIHNlY29uZCBhcnJheSBpcyBhIHN1YnNldCBvZiB0aGUgZmlyc3QgYXJyYXlcbmZ1bmN0aW9uIGlzU3Vic2V0KHRhZ2FycmF5LCBtZWFsYXJyYXkpIHtcblx0cmV0dXJuIHRhZ2FycmF5LmV2ZXJ5KChlbGVtZW50KSA9PiBtZWFsYXJyYXkuaW5jbHVkZXMoZWxlbWVudCkpO1xufVxuLy90aGlzIGNoZWNrcyB0byBzZWUgaWYgdGhlIHRhZyBlbGVtZW50cyBhcmUgaW4gZWFjaCBmb29kIGVsZW1lbnRzXG5mdW5jdGlvbiBjcm9zc0NoZWNrKHRhZ2xpc3QpIHtcblx0bWlkZGxlLmlubmVySFRNTCA9IFwiXCI7XG5cdHBvc3NpYmxlbWVhbHMgPSBbXTtcblxuXHRmb3IgKGxldCBtZWFsIG9mIG1lYWxsaXN0KSB7XG5cdFx0Ly9mb3IgZXZlcnkgbWVhbCBpbiBtZWFsIGxpc3Rcblx0XHQvL2NhbGxzIGlzU3Vic2V0IHRvIHNlZSBpZiB0aGUgdGFnYXJyYXkgbWF0Y2hlcyB0aGUgdGFnIGFycmF5IG9mIHRoYXQgbWVhbC5cblx0XHQvL0lmIHRoZXJlcyBhIG1hdGNoLCBjcmVhdGUgYSBuZXcgY29weSBvZiB0aGUgbWVhbCwgYW5kIHRoZW4gcHV0IGl0IGludG8gYW4gYXJyYXkgb2YgcG9zc2libGUgbWVhbHNcblx0XHRpZiAoaXNTdWJzZXQodGFnbGlzdCwgbWVhbC50YWdzKSA9PSB0cnVlKSB7XG5cdFx0XHRsZXQgcG9zc2libGVtZWFsID0gbWVhbDtcblx0XHRcdHBvc3NpYmxlbWVhbHMucHVzaChwb3NzaWJsZW1lYWwpO1xuXHRcdH1cblx0fVxuXHRpZiAocG9zc2libGVtZWFscy5sZW5ndGggPT09IDApIHtcblx0XHRsZXQgdGFnbGlzdCA9IFtdO1xuXHRcdGNvbnN0IGNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdFx0J2lucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkJ1xuXHRcdCk7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjaGVja2JveGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjaGVja2JveGVzW2ldLmNoZWNrZWQgPSBmYWxzZTtcblx0XHR9XG5cblx0XHRhbGVydChcIk5vIG1hdGNoZXMgZm91bmQuICBUcnkgYSBkaWZmZXJlbnQgc2VsZWN0aW9uXCIpO1xuXHR9XG59XG5cbi8vbWFrZXMgYnV0dG9ucyBmb3IgdGhlIG1lYWxzIGJhc2VkIG9uIHRoZSB0YWdzIHRoYXQgbWF0Y2hcbmZ1bmN0aW9uIG1ha2VFbGVtZW50KHR5cGUsIGlkZW50aXR5LCB3aGVyZSwgdGV4dCkge1xuXHRsZXQgcG9vcHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuXHRwb29wcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBpZGVudGl0eSk7XG5cdHBvb3BzLmlubmVySFRNTCA9IHRleHQ7XG5cdHdoZXJlLmFwcGVuZChwb29wcyk7XG5cdHBvb3BzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBhZGRUb0dyb2NlcnlMaXN0KHBvb3BzKSk7XG59XG5cbi8vd2hlbiB0aGUgbWVhbCBidXR0b24gaXMgcHJlc3NlZCwgbWFrZSBzdXJlIHRoYXQgaXQgbWF0Y2hlcyBhIG1lYWwsIGFuZCB0aGVuIGFkZCB0aGF0IG1lYWwgb2JqZWN0IHRvIGEgZmluYWwgYXJyYXlcbmZ1bmN0aW9uIGFkZFRvR3JvY2VyeUxpc3QodGhlbWVhbCkge1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IG1lYWxsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYgKHRoZW1lYWwuaW5uZXJIVE1MID09PSBtZWFsbGlzdFtpXS5uYW1lKSB7XG5cdFx0XHRsZXQgZmluYWxtZWFsID0gbWVhbGxpc3RbaV07XG5cdFx0XHRmaW5hbGxpc3QucHVzaChmaW5hbG1lYWwpO1xuXHRcdFx0Y29uc29sZS5sb2coZmluYWxsaXN0KTtcblx0XHR9XG5cdH1cblx0ZGlzcGxheU1lYWxzKCk7XG59XG4vL3JlbW92ZXMgc29tZSBpdGVtIGZyb20gYW4gYXJyYXlcbmZ1bmN0aW9uIFJlbW92ZSh0aGluZ3kpIHtcblx0Y29uc29sZS5sb2coXCJ0aGlzIGlzIGFuIGFycmF5P1wiKTtcblx0Y29uc29sZS5sb2coZmluYWxsaXN0KTtcblx0Y29uc29sZS5sb2coXCJwb3NpdGlvbiBpbiBhcnJheVwiKTtcblx0ZmluYWxsaXN0LnNwbGljZSh0aGluZ3ksIDEpO1xuXHRkaXNwbGF5TWVhbHMoZmluYWxsaXN0KTtcbn1cbi8vZGlzcGxheXMgdGhlIG1lYWxzIGluIGZpbmFsbGlzdCBhcyBidXR0b25zXG5mdW5jdGlvbiBkaXNwbGF5TWVhbHMoKSB7XG5cdGxpc3Rfb2ZfbWVhbHMuaW5uZXJIVE1MID0gXCJcIjtcblx0Y29uc29sZS5sb2coXCJUaGlzIGlzIHRoZSBiZWdpbmlubmluZyBvZiBkaXNwbGF5IG1lYWxzIFwiICsgZmluYWxsaXN0KTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBmaW5hbGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgZmluYWxidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRcdGZpbmFsYnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGlzdG1lYWxcIik7XG5cdFx0ZmluYWxidXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJidXR0b25cIltpXSk7XG5cdFx0ZmluYWxidXR0b24uaW5uZXJIVE1MID0gZmluYWxsaXN0W2ldLm5hbWU7XG5cdFx0bGlzdF9vZl9tZWFscy5hcHBlbmQoZmluYWxidXR0b24pO1xuXHRcdGZpbmFsYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuXHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBmaW5hbGxpc3RbaV0uaW5ncmVkaWVudHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZmluYWxidXR0b24uaW5uZXJIVE1MICs9IGZpbmFsbGlzdFtpXS5pbmdyZWRpZW50c1tqXS5uYW1lICsgXCIgXCI7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0ZmluYWxidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuXHRcdFx0ZmluYWxidXR0b24uaW5uZXJIVE1MID0gZmluYWxsaXN0W2ldLm5hbWU7XG5cdFx0fSk7XG5cdFx0ZmluYWxidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdGZpbmFsbGlzdC5zcGxpY2UoW2ldLCAxKTtcblx0XHRcdGRpc3BsYXlNZWFscygpO1xuXHRcdH0pO1xuXHR9XG59XG5cbi8vYWRkcyB0aGUgdGl0bGVzIHRvIHRoZSBncm9jZXJ5IGxpc3RcbmZ1bmN0aW9uIGFkZG1pZGRsZVRpdGxlKGRvYywgaWQsIGNscywgaW5uZXIsIGNlbGwpIHtcblx0bGV0IGJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNlbGwpO1xuXHRkb2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRkb2Muc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuXHRkb2Muc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgY2xzKTtcblx0ZG9jLmlubmVySFRNTCA9IGlubmVyO1xuXHRib3guYXBwZW5kKGRvYyk7XG59XG5cbmZ1bmN0aW9uIGFkZExpc3RFbGVtZW50KGZpbmFsaW5ncmVkaWVudHMsIGxvY2F0aW9uLCBjZWxsKSB7XG5cdGZvciAobGV0IGogPSAwOyBqIDwgZmluYWxpbmdyZWRpZW50cy5sZW5ndGg7IGorKykge1xuXHRcdGlmIChmaW5hbGluZ3JlZGllbnRzW2pdLmxvY2F0aW9uID09PSBsb2NhdGlvbikge1xuXHRcdFx0bGV0IHByb2R1Y2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjZWxsKTsgLy9nZXRzIHRoZSBjZWxsIGFuZCBhc3NpZ25zIGl0IGEgbmFtZVxuXHRcdFx0bGV0IHByb2R1Y2VpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0XHRcdHByb2R1Y2VpdGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGlzdGl0ZW1zXCIpO1xuXHRcdFx0cHJvZHVjZWl0ZW0uaW5uZXJIVE1MID0gZmluYWxpbmdyZWRpZW50c1tqXS5uYW1lO1xuXHRcdFx0cHJvZHVjZWl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdFx0cHJvZHVjZWl0ZW0ucmVtb3ZlKCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0cHJvZHVjZS5hcHBlbmQocHJvZHVjZWl0ZW0pO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBtYWtlR3JvY2VyeUxpc3QoKSB7XG5cdC8vY29udmVydCB0aGUgbWlkZGxlIHBhZ2UgdG8gdGhlIGxpc3Qgb2YgZ3JvY2VyaWVzXG5cdG1pZGRsZS5pbm5lckhUTUwgPSBcIlwiO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGZpbmFsbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdGZvciAobGV0IGogPSAwOyBqIDwgZmluYWxsaXN0W2ldLmluZ3JlZGllbnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRmaW5hbGluZ3JlZGllbnRzLnB1c2goZmluYWxsaXN0W2ldLmluZ3JlZGllbnRzW2pdKTtcblx0XHR9XG5cdH1cblx0Y29uc29sZS5sb2coZmluYWxpbmdyZWRpZW50cyk7XG5cblx0ZmluYWxpbmdyZWRpZW50cy5zb3J0KChhLCBiKSA9PiB7XG5cdFx0aWYgKGEubmFtZSA8IGIubmFtZSkge1xuXHRcdFx0cmV0dXJuIC0xO1xuXHRcdH0gZWxzZSBpZiAoYS5uYW1lID4gYi5uYW1lKSB7XG5cdFx0XHRyZXR1cm4gMTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXHR9KTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBmaW5hbGluZ3JlZGllbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc29sZS5sb2coZmluYWxpbmdyZWRpZW50c1tpXS5uYW1lKTtcblx0fVxuXHRjb25zb2xlLmxvZyhmaW5hbGxpc3QpO1xuXHRtaWRkbGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJncm9jZXJ5bWlkZGxlXCIpO1xuXHRtYWtlR3JpZCgyLCA2KTtcblx0YWRkbWlkZGxlVGl0bGUoXCJkYWlyeXRpdGxlXCIsIFwidGl0bGUxXCIsIFwidGl0bGVcIiwgXCJEYWlyeVwiLCBcImNlbGwwMFwiKTtcblx0YWRkbWlkZGxlVGl0bGUoXCJQcm9kdWNlXCIsIFwidGl0bGUyXCIsIFwidGl0bGVcIiwgXCJQcm9kdWNlXCIsIFwiY2VsbDAxXCIpO1xuXHRhZGRtaWRkbGVUaXRsZShcIkZyb3plblwiLCBcInRpdGxlM1wiLCBcInRpdGxlXCIsIFwiRnJvemVuXCIsIFwiY2VsbDAyXCIpO1xuXHRhZGRtaWRkbGVUaXRsZShcIkNhbm5lZFwiLCBcInRpdGxlNFwiLCBcInRpdGxlXCIsIFwiTWVhdFwiLCBcImNlbGwwM1wiKTtcblx0YWRkbWlkZGxlVGl0bGUoXCJPdGhlclwiLCBcInRpdGxlNFwiLCBcInRpdGxlXCIsIFwiT3RoZXJcIiwgXCJjZWxsMDRcIik7XG5cdGFkZG1pZGRsZVRpdGxlKFwiTm9uLUZvb2RcIiwgXCJ0aXRsZTRcIiwgXCJ0aXRsZVwiLCBcIk5vbi1Gb29kXCIsIFwiY2VsbDA1XCIpO1xuXHRhZGRMaXN0RWxlbWVudChmaW5hbGluZ3JlZGllbnRzLCBcInByb2R1Y2VcIiwgXCJjZWxsMTFcIik7XG5cdGFkZExpc3RFbGVtZW50KGZpbmFsaW5ncmVkaWVudHMsIFwiZGFpcnlcIiwgXCJjZWxsMTBcIik7XG5cdGFkZExpc3RFbGVtZW50KGZpbmFsaW5ncmVkaWVudHMsIFwibWVhdFwiLCBcImNlbGwxM1wiKTtcblx0YWRkTGlzdEVsZW1lbnQoZmluYWxpbmdyZWRpZW50cywgXCJmcm96ZW5cIiwgXCJjZWxsMTJcIik7XG5cdGFkZExpc3RFbGVtZW50KGZpbmFsaW5ncmVkaWVudHMsIFwib3RoZXJcIiwgXCJjZWxsMTRcIik7XG5cdGFkZExpc3RFbGVtZW50KGZpbmFsaW5ncmVkaWVudHMsIFwibm9uZm9vZFwiLCBcImNlbGwxNVwiKTtcbn1cblxuZnVuY3Rpb24gbWFrZUdyaWQocm93cywgY29scykge1xuXHRsZXQgZ3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3JvY2VyeW1pZGRsZVwiKTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcblx0XHRmb3IgKGxldCBqID0gMDsgaiA8IGNvbHM7IGorKykge1xuXHRcdFx0Y29uc3QgZ3JpZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0Z3JpZEl0ZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJncmlkbHlmZVwiKTtcblx0XHRcdGdyaWRJdGVtLmlkID0gYGNlbGwke2l9JHtqfWA7XG5cdFx0XHRncmlkLmFwcGVuZENoaWxkKGdyaWRJdGVtKTtcblx0XHR9XG5cdH1cbn1cblxuLy9+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5BQ1RVQUwgRVhFQ1VUSU5HIENPREV+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+XG5cbi8vcnVucyB0aGUgZnVuY3Rpb24gd2hlbiBhIHRhZyBpcyBjbGlja2VkIGluc3RlYWQgb2YgdGhlIHN1Ym1pdCBidXR0b25cbmZvciAobGV0IGkgPSAwOyBpIDwgY2hlY2tib3hlcy5sZW5ndGg7IGkrKykge1xuXHRjaGVja2JveGVzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0Y3Jvc3NDaGVjayhnZXRUYWdzKCkpO1xuXHRcdHBvc3NpYmxlbWVhbHMuc29ydCgoYSwgYikgPT4ge1xuXHRcdFx0aWYgKGEubmFtZSA8IGIubmFtZSkge1xuXHRcdFx0XHRyZXR1cm4gLTE7XG5cdFx0XHR9IGVsc2UgaWYgKGEubmFtZSA+IGIubmFtZSkge1xuXHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0fVxuXHRcdH0pOyAvL2FscGhhYmV0aXplcyB0aGUgYXJyYXlcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcG9zc2libGVtZWFscy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bWFrZUVsZW1lbnQoXCJidXR0b25cIiwgXCJwb3NzaWJsZW1lYWxcIiwgbWlkZGxlLCBwb3NzaWJsZW1lYWxzW2ldLm5hbWUpO1xuXHRcdH1cblx0fSk7XG59XG5ncm9jZXJpZXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0bWFrZUdyb2NlcnlMaXN0KCk7XG59KTtcblxuc3VibWl0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdGNyb3NzQ2hlY2soZ2V0VGFncygpKTtcblx0cG9zc2libGVtZWFscy5zb3J0KChhLCBiKSA9PiB7XG5cdFx0aWYgKGEubmFtZSA8IGIubmFtZSkge1xuXHRcdFx0cmV0dXJuIC0xO1xuXHRcdH0gZWxzZSBpZiAoYS5uYW1lID4gYi5uYW1lKSB7XG5cdFx0XHRyZXR1cm4gMTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXHR9KTsgLy9hbHBoYWJldGl6ZXMgdGhlIGFycmF5XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwb3NzaWJsZW1lYWxzLmxlbmd0aDsgaSsrKSB7XG5cdFx0bWFrZUVsZW1lbnQoXCJidXR0b25cIiwgXCJwb3NzaWJsZW1lYWxcIiwgbWlkZGxlLCBwb3NzaWJsZW1lYWxzW2ldLm5hbWUpO1xuXHR9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==