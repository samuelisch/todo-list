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
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --black: rgb(29, 29, 29);\n    --white: rgb(250, 250, 250);\n    --grey: rgb(121, 121, 121);\n}\n\nhtml,\nbody {\n    font-size: 8px;\n    font-family: Arial, Helvetica, sans-serif;\n    margin: 0;\n    color: var(--black);\n    background: rgb(235, 235, 235);\n}\n\n#header-bar {\n    padding: 18px 20px;\n    color: var(--white);\n    background: rgb(75, 75, 75);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nh2 {\n    margin: 0;\n    font-size: 3rem;\n}\n\n.nav-btn {\n    background: inherit;\n    border: none;\n    color: var(--white);\n}\n\n.nav-bar {\n    display: none;\n    background: rgb(219, 219, 219);\n    color:rgb(37, 37, 37);\n    font-size: 1.5rem;\n    box-shadow: 0px 1px 2px var(--grey);\n    /* prevent highlights */\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */\n    -khtml-user-select: none; /* Konqueror HTML */\n    -moz-user-select: none; /* Old versions of Firefox */\n    -ms-user-select: none; /* Internet Explorer/Edge */\n    user-select: none; /* Non-prefixed version, currently\n                        supported by Chrome, Edge, Opera and Firefox */\n}\n\n.wrapper {\n    padding: 15px;\n}\n\n.list {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n.selection {\n    padding: 7px;\n    border-radius: 5px;\n    display: flex;\n}\n\n.selection i,\n.add-project-btn i {\n    margin-right: 10px;\n}\n\n.selection:hover {\n    background:rgb(204, 204, 204);\n}\n\n.selected {\n    background: rgb(204, 204, 204);\n    font-weight: bold;\n}\n\nh3 {\n    font-size: 1.9rem;\n}\n\n.add-project-btn {\n    display: none;\n}\n\n.project {\n    justify-content: space-between;\n}\n\n.tab > * {\n    pointer-events: none;\n}\n\n.project-delete {\n    pointer-events: all;\n}\n\n.project-delete {\n    display: none;\n}\n\n.project-delete:hover {\n    color:rgb(190, 39, 39);\n}\n\n.project:hover .project-delete {\n    display: block;\n}\n\n.content {\n    margin: 20px;\n}\n\n.tasks {\n    margin: 5px;\n}\n\n.task {\n    font-size: 1.3rem;\n    color: var(--black);\n    border: 1px solid var(--grey);\n    border-radius: 10px;\n    padding: 10px 10px;\n    margin-top: 15px;\n}\n\n.task:hover {\n    background: rgb(204, 204, 204);\n}\n\n.info-wrapper {\n    display: none;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.complete-icon {\n    width: 12px;\n    height: 12px;\n    border: 1px solid var(--grey);\n    border-radius: 50%;\n}\n\n.task-name {\n    width: 55%;\n    margin-left: 5px;\n}\n\n.side-icons-wrapper {\n    display: flex;\n    width: 30px;\n    justify-content: space-between;\n}\n\n.edit-icon,\n.delete-icon {\n    display: none;\n    color: var(--grey);\n}\n\n.edit-icon:hover {\n    color: var(--black);\n}\n\n.delete-icon:hover {\n    color: rgb(190, 39, 39);\n}\n\n.task:hover .edit-icon,\n.task:hover .delete-icon {\n    display: block;\n}\n\n.task-edit-form {\n    display: none;\n    height: 50px;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.edit-inputs {\n    display: flex;\n    width: 80%;\n    max-width: 600px;\n    justify-content: space-around;\n}\n\n.edit-task-title {\n    width: 50%;\n}\n\n.edit-task-due {\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.confirm-edit-buttons {\n    width: 150px;\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.confirm-edit,\n.cancel-edit {\n    border: 1px solid var(--black);\n    border-radius: 5px;\n    background: inherit;\n}\n\n.confirm-edit:hover {\n    border: 1px solid rgba(149, 229, 149, 0.9);\n    background: rgba(149, 229, 149, 0.9);\n}\n\n.cancel-edit:hover {\n    border: 1px solid rgba(196, 94, 94, 0.9);\n    background: rgba(196, 94, 94, 0.9);\n}\n\n.project-form,\n.task-form {\n    display: none;\n    font-size: 13px;\n}\n\n.task-form {\n    text-align: center;\n}\n\n.add-task-btn {\n    font-size: 1.5rem;\n    display: none;\n    text-align: center;\n}\n\n.form-input {\n    border-radius: 3px;\n    border: 1px solid var(--black);\n    padding: 4px 8px;\n}\n\n.form-btns {\n    display: inline-block;\n}\n\n.form-btns button {\n    padding: 3px;\n}\n\n.task-submit-btn:hover,\n.project-submit-btn:hover {\n    background:rgba(149, 229, 149, 0.9);\n    border: 2px solid rgba(149, 229, 149, 0.9);\n}\n\n.task-cancel-btn:hover,\n.project-cancel-btn:hover {\n    background:rgba(196, 94, 94, 0.9);\n    color:rgb(235, 235, 235);\n    border: 2px solid rgba(196, 94, 94, 0.9);\n}\n\n.display-flex {\n    display: flex;\n}\n\n.display {\n    display: block;\n}\n\n@media (min-width: 321px) {\n    html,\n    body {\n        font-size: 10px;\n    }\n\n    .tasks {\n        margin: 10px;\n    }\n}\n\n@media (min-width: 769px) {\n    header {\n        position: fixed;\n        width: 100vw;\n        z-index: 5;\n    }\n\n    .nav-btn {\n        display: none;\n    }\n\n    .nav-wrap {\n        width: 30%;\n        max-width: 400px;\n    }\n\n    .nav-bar {\n        z-index: 1;\n        display: flex;\n        position: fixed;\n        width: inherit;\n        max-width: inherit;\n        height: 100vh;\n        overflow: hidden;\n    }\n\n    .wrapper {\n        width: 100%;\n        overflow-y: scroll;\n        -ms-overflow-style: none;  /* Internet Explorer 10+ */\n        scrollbar-width: none;  /* Firefox */\n    }\n\n    .wrapper::-webkit-scrollbar { \n        display: none;  /* Safari and Chrome */\n    }\n\n    .wrapper ul:first-child {\n        margin-top: 80px;\n    }\n\n    .project-form {\n        margin-top: 10px;\n    }\n    \n    .content-wrapper {\n        display: flex;\n    }\n\n    .main-wrapper {\n        width: 60%;\n        margin: 80px;\n        flex: 2;\n        max-width: 1000px;\n    }\n}\n\n@media (max-width: 1030px) {\n    .project-form .form-btns {\n        margin-top: 10px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --black: rgb(29, 29, 29);\n    --white: rgb(250, 250, 250);\n    --grey: rgb(121, 121, 121);\n}\n\nhtml,\nbody {\n    font-size: 8px;\n    font-family: Arial, Helvetica, sans-serif;\n    margin: 0;\n    color: var(--black);\n    background: rgb(235, 235, 235);\n}\n\n#header-bar {\n    padding: 18px 20px;\n    color: var(--white);\n    background: rgb(75, 75, 75);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nh2 {\n    margin: 0;\n    font-size: 3rem;\n}\n\n.nav-btn {\n    background: inherit;\n    border: none;\n    color: var(--white);\n}\n\n.nav-bar {\n    display: none;\n    background: rgb(219, 219, 219);\n    color:rgb(37, 37, 37);\n    font-size: 1.5rem;\n    box-shadow: 0px 1px 2px var(--grey);\n    /* prevent highlights */\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */\n    -khtml-user-select: none; /* Konqueror HTML */\n    -moz-user-select: none; /* Old versions of Firefox */\n    -ms-user-select: none; /* Internet Explorer/Edge */\n    user-select: none; /* Non-prefixed version, currently\n                        supported by Chrome, Edge, Opera and Firefox */\n}\n\n.wrapper {\n    padding: 15px;\n}\n\n.list {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n.selection {\n    padding: 7px;\n    border-radius: 5px;\n    display: flex;\n}\n\n.selection i,\n.add-project-btn i {\n    margin-right: 10px;\n}\n\n.selection:hover {\n    background:rgb(204, 204, 204);\n}\n\n.selected {\n    background: rgb(204, 204, 204);\n    font-weight: bold;\n}\n\nh3 {\n    font-size: 1.9rem;\n}\n\n.add-project-btn {\n    display: none;\n}\n\n.project {\n    justify-content: space-between;\n}\n\n.tab > * {\n    pointer-events: none;\n}\n\n.project-delete {\n    pointer-events: all;\n}\n\n.project-delete {\n    display: none;\n}\n\n.project-delete:hover {\n    color:rgb(190, 39, 39);\n}\n\n.project:hover .project-delete {\n    display: block;\n}\n\n.content {\n    margin: 20px;\n}\n\n.tasks {\n    margin: 5px;\n}\n\n.task {\n    font-size: 1.3rem;\n    color: var(--black);\n    border: 1px solid var(--grey);\n    border-radius: 10px;\n    padding: 10px 10px;\n    margin-top: 15px;\n}\n\n.task:hover {\n    background: rgb(204, 204, 204);\n}\n\n.info-wrapper {\n    display: none;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.complete-icon {\n    width: 12px;\n    height: 12px;\n    border: 1px solid var(--grey);\n    border-radius: 50%;\n}\n\n.task-name {\n    width: 55%;\n    margin-left: 5px;\n}\n\n.side-icons-wrapper {\n    display: flex;\n    width: 30px;\n    justify-content: space-between;\n}\n\n.edit-icon,\n.delete-icon {\n    display: none;\n    color: var(--grey);\n}\n\n.edit-icon:hover {\n    color: var(--black);\n}\n\n.delete-icon:hover {\n    color: rgb(190, 39, 39);\n}\n\n.task:hover .edit-icon,\n.task:hover .delete-icon {\n    display: block;\n}\n\n.task-edit-form {\n    display: none;\n    height: 50px;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.edit-inputs {\n    display: flex;\n    width: 80%;\n    max-width: 600px;\n    justify-content: space-around;\n}\n\n.edit-task-title {\n    width: 50%;\n}\n\n.edit-task-due {\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.confirm-edit-buttons {\n    width: 150px;\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.confirm-edit,\n.cancel-edit {\n    border: 1px solid var(--black);\n    border-radius: 5px;\n    background: inherit;\n}\n\n.confirm-edit:hover {\n    border: 1px solid rgba(149, 229, 149, 0.9);\n    background: rgba(149, 229, 149, 0.9);\n}\n\n.cancel-edit:hover {\n    border: 1px solid rgba(196, 94, 94, 0.9);\n    background: rgba(196, 94, 94, 0.9);\n}\n\n.project-form,\n.task-form {\n    display: none;\n    font-size: 13px;\n}\n\n.task-form {\n    text-align: center;\n}\n\n.add-task-btn {\n    font-size: 1.5rem;\n    display: none;\n    text-align: center;\n}\n\n.form-input {\n    border-radius: 3px;\n    border: 1px solid var(--black);\n    padding: 4px 8px;\n}\n\n.form-btns {\n    display: inline-block;\n}\n\n.form-btns button {\n    padding: 3px;\n}\n\n.task-submit-btn:hover,\n.project-submit-btn:hover {\n    background:rgba(149, 229, 149, 0.9);\n    border: 2px solid rgba(149, 229, 149, 0.9);\n}\n\n.task-cancel-btn:hover,\n.project-cancel-btn:hover {\n    background:rgba(196, 94, 94, 0.9);\n    color:rgb(235, 235, 235);\n    border: 2px solid rgba(196, 94, 94, 0.9);\n}\n\n.display-flex {\n    display: flex;\n}\n\n.display {\n    display: block;\n}\n\n@media (min-width: 321px) {\n    html,\n    body {\n        font-size: 10px;\n    }\n\n    .tasks {\n        margin: 10px;\n    }\n}\n\n@media (min-width: 769px) {\n    header {\n        position: fixed;\n        width: 100vw;\n        z-index: 5;\n    }\n\n    .nav-btn {\n        display: none;\n    }\n\n    .nav-wrap {\n        width: 30%;\n        max-width: 400px;\n    }\n\n    .nav-bar {\n        z-index: 1;\n        display: flex;\n        position: fixed;\n        width: inherit;\n        max-width: inherit;\n        height: 100vh;\n        overflow: hidden;\n    }\n\n    .wrapper {\n        width: 100%;\n        overflow-y: scroll;\n        -ms-overflow-style: none;  /* Internet Explorer 10+ */\n        scrollbar-width: none;  /* Firefox */\n    }\n\n    .wrapper::-webkit-scrollbar { \n        display: none;  /* Safari and Chrome */\n    }\n\n    .wrapper ul:first-child {\n        margin-top: 80px;\n    }\n\n    .project-form {\n        margin-top: 10px;\n    }\n    \n    .content-wrapper {\n        display: flex;\n    }\n\n    .main-wrapper {\n        width: 60%;\n        margin: 80px;\n        flex: 2;\n        max-width: 1000px;\n    }\n}\n\n@media (max-width: 1030px) {\n    .project-form .form-btns {\n        margin-top: 10px;\n    }\n}"],"sourceRoot":""}]);
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
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
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

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
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
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
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
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
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
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content */ "./src/modules/content.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");





// PAGE BEHAVIOUR
const navBtn = document.querySelector('.nav-btn');
const nav = document.querySelector('.nav-bar');
const projectForm = document.querySelector('.project-form');
const taskForm = document.querySelector('.task-form');
const addProjBtn = document.querySelector('.add-project-btn');
const addTaskBtn = document.querySelector('.add-task-btn');
const addProjBtnSubmit = document.querySelector('.project-submit-btn');
const addTaskBtnSubmit = document.querySelector('.task-submit-btn');
const projectBtnCancel = document.querySelector('.project-cancel-btn');
const taskBtnCancel = document.querySelector('.task-cancel-btn');

(() => {
    function dropdownMenu() {
        nav.classList.toggle('display');
    }

    function submitProjectForm(e) {
        e.preventDefault();
        // get title of project from form
        const projectInput = document.querySelector('.project-form input');
        const validInput = projectInput.validity;
        const inputValue = projectInput.value;
        if (validInput.valueMissing) {
            projectInput.setCustomValidity('Please enter a name for this project');
            projectInput.reportValidity();
            return;
        }
        if (_content__WEBPACK_IMPORTED_MODULE_0__.default.projectExists(projectInput.value)) {
            projectInput.setCustomValidity('Project already exists!');
            projectInput.reportValidity();
            return;
        }
        // add DOM elements
        _content__WEBPACK_IMPORTED_MODULE_0__.default.addProjectLink(inputValue);
        // create new project instance
        _content__WEBPACK_IMPORTED_MODULE_0__.default.createNewProject(inputValue);
        // cancel form display / reset
        _content__WEBPACK_IMPORTED_MODULE_0__.default.cancelForm(projectForm, addProjBtn);
    }

    function submitTaskForm(e) {
        e.preventDefault();
        // get title of task from form
        const taskInput = document.querySelector('.task-form input');
        const validInput = taskInput.validity;
        const inputValue = taskInput.value;
        if (validInput.valueMissing) {
            taskInput.setCustomValidity('Please enter a name for this task');
            taskInput.reportValidity();
            return;
        }
        // add DOM elements
        _content__WEBPACK_IMPORTED_MODULE_0__.default.addTaskCell(inputValue);
        // create new task instance
        _content__WEBPACK_IMPORTED_MODULE_0__.default.createNewTask(inputValue);
        // cancel form display / reset
        _content__WEBPACK_IMPORTED_MODULE_0__.default.cancelForm(taskForm, addTaskBtn);
    }

    // event listeners for navBtn and add project btn
    navBtn.addEventListener('click', dropdownMenu);
    // passes function to wait for event before calling toggleForms
    addProjBtn.addEventListener('click', () => _content__WEBPACK_IMPORTED_MODULE_0__.default.toggleForm(projectForm, addProjBtn));
    addTaskBtn.addEventListener('click', () => _content__WEBPACK_IMPORTED_MODULE_0__.default.toggleForm(taskForm, addTaskBtn));
    projectBtnCancel.addEventListener('click', () => _content__WEBPACK_IMPORTED_MODULE_0__.default.cancelForm(projectForm, addProjBtn));
    taskBtnCancel.addEventListener('click', () => _content__WEBPACK_IMPORTED_MODULE_0__.default.cancelForm(taskForm, addTaskBtn));
    addProjBtnSubmit.addEventListener('click', submitProjectForm);
    addTaskBtnSubmit.addEventListener('click', submitTaskForm);
})();

function showProjects(arr) { // check if there are existing projects in storage
    const len = arr.length;
    // go through all stored projects and add them to link
    for (let i = 3; i < len; i += 1) {
        const proj = arr[i];
        // show project on initial load
        _content__WEBPACK_IMPORTED_MODULE_0__.default.addProjectLink(proj.title, proj.dataNum);
    }
}

// check if storage has first element
if (_storage__WEBPACK_IMPORTED_MODULE_3__.default.hasProjects()) {
    const projArr = _storage__WEBPACK_IMPORTED_MODULE_3__.default.getProjects();
    _project__WEBPACK_IMPORTED_MODULE_2__.default.setProjectArray(projArr);
    _project__WEBPACK_IMPORTED_MODULE_2__.default.setCurrentProject(projArr[0]);

    // check if more than default 3 projects in storage
    if (projArr.length > 3) {
        showProjects(projArr);
    }
} else {
    // else create own project and save to storage
    const proj = _project__WEBPACK_IMPORTED_MODULE_2__.default.CreateProject('inbox');
    proj.setDataNum(0);
    _project__WEBPACK_IMPORTED_MODULE_2__.default.setCurrentProject(proj);

    // save to localStorage under projects
    _project__WEBPACK_IMPORTED_MODULE_2__.default.addToArray(proj);

    // create project instances for other tabs - today and this week
    const dayProj = _project__WEBPACK_IMPORTED_MODULE_2__.default.CreateProject('today');
    dayProj.setDataNum(1);
    _project__WEBPACK_IMPORTED_MODULE_2__.default.addToArray(dayProj);

    const weekProj = _project__WEBPACK_IMPORTED_MODULE_2__.default.CreateProject('this week');
    weekProj.setDataNum(2);
    _project__WEBPACK_IMPORTED_MODULE_2__.default.addToArray(weekProj);
}

// check if storage has tasks
if (_storage__WEBPACK_IMPORTED_MODULE_3__.default.hasTasks()) {
    const project = _project__WEBPACK_IMPORTED_MODULE_2__.default.getCurrentProject();
    const taskArray = _storage__WEBPACK_IMPORTED_MODULE_3__.default.getTasks();
    _task__WEBPACK_IMPORTED_MODULE_1__.default.setTaskArray(taskArray);
    // add to currProjArr
    _content__WEBPACK_IMPORTED_MODULE_0__.default.setCurrentTasks(project);
}


/***/ }),

/***/ "./src/modules/content.js":
/*!********************************!*\
  !*** ./src/modules/content.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");



const dayTab = document.querySelector('.day');
const weekTab = document.querySelector('.week');
const taskForm = document.querySelector('.task-form');
const listItems = document.querySelectorAll('.tab');

function toggleForm(...args) {
    args.forEach((argument) => argument.classList.toggle('display'));
}

function toggleFormFlex(...args) {
    args.forEach((argument) => argument.classList.toggle('display-flex'));
}

function completeTask(task) {
    const t = task;
    t.completed = true;
    const completeIcon = t.querySelector('.complete-icon');
    completeIcon.style.background = 'rgba(81, 192, 81, 0.253)';
    t.style.color = 'rgb(150, 150, 150)';
    t.style.borderColor = 'rgb(150, 150, 150)';
    t.style.textDecoration = 'line-through';
}

function uncompleteTask(task) {
    const t = task;
    t.completed = false;
    const completeIcon = t.querySelector('.complete-icon');
    completeIcon.style.background = 'inherit';
    t.style.color = 'var(--black)';
    t.style.borderColor = 'var(--grey)';
    t.style.textDecoration = 'none';
}

function displayEdit(task) {
    const t = task;
    // show edit form, display off for task info
    const taskInfo = t.querySelector('.info-wrapper');
    const taskTitle = t.querySelector('.task-name');
    const taskDue = t.querySelector('.date');
    const editTitle = t.querySelector('.edit-task-title');
    const editDue = t.querySelector('.edit-task-due');

    editTitle.value = taskTitle.textContent;
    editDue.value = taskDue.textContent;

    toggleFormFlex(taskInfo, taskForm);
}

function resetEdit(task) {
    const t = task;
    // reset form, toggle displayEdit
    t.querySelector('.task-edit-form').reset();

    displayEdit(t);
}

function submitEdit(task) {
    const t = task;
    const taskTitle = t.querySelector('.task-name');
    const taskDue = t.querySelector('.date');
    const editedTitle = t.querySelector('.edit-task-title');
    const editedDue = t.querySelector('.edit-task-due');

    // update task instance in taskModule
    _task__WEBPACK_IMPORTED_MODULE_0__.default.updateTaskInfo(t.dataset.num, editedTitle.value, editedDue.value);

    // change task title and date according to form
    taskTitle.textContent = editedTitle.value;
    taskDue.textContent = _task__WEBPACK_IMPORTED_MODULE_0__.default.formatDate(editedDue.value);

    resetEdit(task);
}

function showCurrentTasks(arr) {
    arr.forEach((task) => {
        // eslint-disable-next-line no-use-before-define
        addTaskCell(task.title, task.due, task.completed, task.dataNum);
    });
}

function setCurrentTasks(project) {
    const taskArray = _task__WEBPACK_IMPORTED_MODULE_0__.default.getTaskArray();
    const tasks = taskArray.filter((task) => task.project === project.title);
    _task__WEBPACK_IMPORTED_MODULE_0__.default.setCurrentProjTasks(tasks);
    showCurrentTasks(tasks);
}

function updateArray(project) {
    // reload all tasks to current project selected
    if (project.title === 'today') {
        showCurrentTasks(_task__WEBPACK_IMPORTED_MODULE_0__.default.getTasksToday());
        return;
    }
    if (project.title === 'this week') {
        showCurrentTasks(_task__WEBPACK_IMPORTED_MODULE_0__.default.getWeekTasks());
        return;
    }
    setCurrentTasks(project);
}

function removeTaskInstance(task) {
    // pass parameter to check if project is under 'today' or 'week'
    const project = _project__WEBPACK_IMPORTED_MODULE_1__.default.getCurrentProject();
    // remove from task array
    _task__WEBPACK_IMPORTED_MODULE_0__.default.deleteTask(task.dataset.num);
    // check project selected
    updateArray(project);
}

function clearTasks() {
    document.querySelector('.tasks').innerHTML = '';
}

function deleteTask(task) {
    // have to clear tasks and recreate all instances again, as dataNum is spread out
    clearTasks();
    // remove instance and reset list
    removeTaskInstance(task);
}

function createNewTask(taskName) {
    const project = _project__WEBPACK_IMPORTED_MODULE_1__.default.getCurrentProject();
    // create instance of task from factory
    _task__WEBPACK_IMPORTED_MODULE_0__.default.addNewTask(taskName, project);
}

function addTaskCell(taskName, dueDate, completed, dataNum) {
    const tasks = document.querySelector('.tasks');
    // create div element to wrap both task info and edit info
    const newTask = document.createElement('div');
    newTask.className = 'task';
    // dataset num to identify task instance in proj taskList array
    if (dataNum === undefined) {
        newTask.dataset.num = _task__WEBPACK_IMPORTED_MODULE_0__.default.numOfTasks();
    } else {
        newTask.dataset.num = dataNum;
    }

    // create div to hold all taskInfo in flexbox
    const taskInfo = document.createElement('div');
    taskInfo.className = 'info-wrapper display-flex';

    // create icon element - styled to circle - to reflect priority of task
    const completeIcon = document.createElement('div');
    completeIcon.className = 'complete-icon';

    // create span element for task title
    const taskTitle = document.createElement('span');
    taskTitle.className = 'task-name';
    taskTitle.textContent = taskName;

    // create div element to store date - to be changed upon edit
    // create edit form for this too, to select date
    const taskDue = document.createElement('div');
    taskDue.className = 'date';
    taskDue.textContent = dueDate || _task__WEBPACK_IMPORTED_MODULE_0__.default.getDateToday();

    // append edit and delete icons to right side of date div.
    const sideIconsWrapper = document.createElement('div');
    sideIconsWrapper.className = 'side-icons-wrapper';
    const editIcon = document.createElement('span');
    editIcon.className = 'edit-icon';
    editIcon.innerHTML = '<i class="far fa-edit"></i>';
    const deleteIcon = document.createElement('span');
    deleteIcon.className = 'delete-icon';
    deleteIcon.innerHTML = '<i class="far fa-trash-alt"></i>';
    sideIconsWrapper.appendChild(editIcon);
    sideIconsWrapper.appendChild(deleteIcon);

    // append elements to task div, then append task div to list div
    // MAIN TASK CELL
    taskInfo.appendChild(completeIcon);
    taskInfo.appendChild(taskTitle);
    taskInfo.appendChild(taskDue);
    taskInfo.appendChild(sideIconsWrapper);
    newTask.appendChild(taskInfo);

    // check if task is complete according to input parameters
    if (completed) {
        completeTask(newTask);
    }

    // create task edit form
    const taskEditForm = document.createElement('form');
    taskEditForm.className = 'task-edit-form'; // to display flex
    // wrapper for input elements
    const editInputs = document.createElement('div');
    editInputs.className = 'edit-inputs';
    // input elements
    const editTitle = document.createElement('input');
    editTitle.className = 'edit-task-title';
    const editDate = document.createElement('input');
    editDate.className = 'edit-task-due';
    editDate.type = 'text';

    // button wrapper
    const confirmBtns = document.createElement('div');
    confirmBtns.className = 'confirm-edit-buttons';
    // buttons
    const confirmBtn = document.createElement('button');
    confirmBtn.className = 'confirm-edit';
    confirmBtn.type = 'button';
    confirmBtn.textContent = 'Save';
    const cancelBtn = document.createElement('button');
    cancelBtn.className = 'cancel-edit';
    cancelBtn.type = 'button';
    cancelBtn.textContent = 'Cancel';

    // append to form element
    editInputs.appendChild(editTitle);
    editInputs.appendChild(editDate);
    confirmBtns.appendChild(confirmBtn);
    confirmBtns.appendChild(cancelBtn);
    taskEditForm.appendChild(editInputs);
    taskEditForm.appendChild(confirmBtns);

    // append task-edit-form to task element
    newTask.appendChild(taskEditForm);

    // add to DOM
    tasks.appendChild(newTask);

    // event listener for task completion
    completeIcon.addEventListener('click', () => {
        // change task instance in taskModule
        _task__WEBPACK_IMPORTED_MODULE_0__.default.toggleComplete(newTask.dataset.num);

        // check if task completed already
        if (completed) {
            uncompleteTask(newTask);
        } else {
            completeTask(newTask);
        }
    });

    // event listeners for side icons
    editIcon.addEventListener('click', () => displayEdit(newTask));
    deleteIcon.addEventListener('click', () => deleteTask(newTask));

    // event listeners for edit form
    confirmBtn.addEventListener('click', () => submitEdit(newTask));
    cancelBtn.addEventListener('click', () => resetEdit(newTask));
    // eventListeners for formatting of date
    editDate.addEventListener('focus', (event) => {
        const e = event;
        e.target.type = 'date';
    });
    editDate.addEventListener('blur', (event) => {
        const e = event;
        e.target.type = 'text';
        if (!editDate.value) {
            editDate.value = _task__WEBPACK_IMPORTED_MODULE_0__.default.getDateToday();
        } else {
            const date = editDate.value;
            editDate.value = _task__WEBPACK_IMPORTED_MODULE_0__.default.formatDate(date);
        }
    });
}

function clearContent() {
    const tasks = document.querySelector('.tasks');
    tasks.innerHTML = '';
}

function updateContent() {
    setCurrentTasks(_project__WEBPACK_IMPORTED_MODULE_1__.default.getCurrentProject());
}

function linkSelected() {
    return document.querySelector('.selected');
}

function removePreviousHighlight() {
    const highlighted = document.querySelector('.selected');
    if (!highlighted) return;
    highlighted.classList.remove('selected');
}

function selectLink(link) {
    removePreviousHighlight();
    // switch to selected link
    link.classList.add('selected');
    // change project currProj to selected link's datanum
    _project__WEBPACK_IMPORTED_MODULE_1__.default.changeProject(link.dataset.num);
    // clear previous content of project
    clearContent();
    // update content with currProj's tasks
    updateContent();
}

function sameLink(link) {
    return (linkSelected() === link);
}

function checkLink(e) {
    const link = e.target;
    // check if same link as selected
    if (sameLink(link)) {
        return;
    }

    // if day or week tabs selected
    if (link === dayTab || link === weekTab) {
        removePreviousHighlight();
        clearContent();
        link.classList.add('selected');
        if (link === dayTab) {
            _project__WEBPACK_IMPORTED_MODULE_1__.default.changeProject(1);
            // get tasks that coincide with date today
            const tasks = _task__WEBPACK_IMPORTED_MODULE_0__.default.getTasksToday(_task__WEBPACK_IMPORTED_MODULE_0__.default.getDateToday());
            showCurrentTasks(tasks);
        } else {
            _project__WEBPACK_IMPORTED_MODULE_1__.default.changeProject(2);
            // get tasks that coincide with 7 days ahead, including today
            const tasks = _task__WEBPACK_IMPORTED_MODULE_0__.default.getWeekTasks(_task__WEBPACK_IMPORTED_MODULE_0__.default.getWeek());
            showCurrentTasks(tasks);
        }
        return;
    }
    if (link.classList.contains('fa-trash-alt')) {
        // ignore delete button element
        return;
    }
    selectLink(link);
}

function removeProjectLink(linkToRemove, num) {
    linkToRemove.remove();
    clearContent();
    // update projectArray
    _task__WEBPACK_IMPORTED_MODULE_0__.default.deleteProjectTasks(num);
    _project__WEBPACK_IMPORTED_MODULE_1__.default.deleteProj(num);
}

function updateProjectNums(dataNum) {
    const remainingProjects = document.querySelectorAll('[data-num]');
    // get array from remaining project nodes
    const projectsArr = Array.from(remainingProjects);
    // filter array to only include projects after deleted project
    const projectsToUpdate = projectsArr.filter((project) => project.dataset.num > dataNum);
    projectsToUpdate.forEach((project) => {
        const p = project;
        p.dataset.num -= 1;
    });
}

function deleteProjectLink(link) {
    const dataNum = link.dataset.num;
    // remove html element
    removeProjectLink(link, dataNum);
    updateProjectNums(dataNum);
}

function cancelForm(element1, element2) {
    element1.reset();
    toggleForm(element1, element2);
}

function projectExists(projectName) {
    const projArray = _project__WEBPACK_IMPORTED_MODULE_1__.default.getProjectArray();
    return (projArray.map((project) => project.title).includes(projectName));
}

function createNewProject(projectName) {
    _project__WEBPACK_IMPORTED_MODULE_1__.default.addNewProject(projectName);
}

function addProjectLink(projectName, dataNum) {
    const projects = document.querySelector('.projects');

    // create new list element, set dataset link to project(count);
    const newLink = document.createElement('li');
    newLink.className = 'selection project tab';
    if (dataNum === undefined) {
        newLink.dataset.num = _project__WEBPACK_IMPORTED_MODULE_1__.default.numOfProjects();
    } else {
        newLink.dataset.num = dataNum;
    }

    // create icon
    const leftWrapper = document.createElement('div');
    leftWrapper.className = 'project-info';
    const icon = document.createElement('i');
    icon.className = 'far fa-list-alt';
    // create default project name
    const projTitle = document.createElement('span');
    projTitle.className = 'project-title';
    projTitle.textContent = projectName;
    // create delete button - to be shown only on hover
    const deleteIcon = document.createElement('div');
    deleteIcon.innerHTML = '<i class="far fa-trash-alt"></i>';
    deleteIcon.className = 'project-delete';

    // append children to link
    leftWrapper.appendChild(icon);
    leftWrapper.appendChild(projTitle);
    newLink.appendChild(leftWrapper);
    newLink.appendChild(deleteIcon);

    // append link to project
    projects.appendChild(newLink);

    newLink.addEventListener('click', checkLink);
    deleteIcon.addEventListener('click', () => deleteProjectLink(newLink));
}

// event listener for clicks on project tabs
listItems.forEach((item) => item.addEventListener('click', checkLink));

const contentModule = {
    addTaskCell,
    addProjectLink,
    projectExists,
    cancelForm,
    createNewTask,
    createNewProject,
    toggleForm,
    toggleFormFlex,
    checkLink,
    setCurrentTasks,
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contentModule);


/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");

// FACTORY FUNCTION FOR PROJECTS
const CreateProject = (title) => {
    // initialise project array
    let dataNum;

    // function to set title
    function setTitle(t) {
        this.title = t;
    }

    function setDataNum(num) {
        this.dataNum = num;
    }

    return {
        title, setTitle, dataNum, setDataNum,
    };
};

// on initial load of webpage
let currProj;
let projArray = [];

function setCurrentProject(project) {
    currProj = project;
}

function setProjectArray(arr) {
    projArray = arr;
}

function getCurrentProject() {
    return currProj;
}

function getProjectArray() {
    return projArray;
}

function getProject(num) {
    return projArray[num];
}

function saveArray() {
    // save array to storage - update storage values
    _storage__WEBPACK_IMPORTED_MODULE_0__.default.addProjToStorage(projArray);
}

function updateArray(arr) {
    setProjectArray(arr);
    saveArray();
}

function addToArray(proj) {
    projArray.push(proj);
    updateArray(projArray);
}

// switch projects to selected from UI
function changeProject(dataNum) {
    currProj = projArray[dataNum];
}

function deleteProj(num) {
    // split array into two, removing affecting element
    const firstHalfArray = projArray.slice(0, num);
    const secondHalfArray = projArray.slice(parseInt(num, 10) + 1);
    // update dataNum of remaining tabs
    secondHalfArray.forEach((e) => {
        e.dataNum -= 1;
    });

    // assign array back to original projArray
    const tempArray = firstHalfArray.concat(secondHalfArray);
    updateArray(tempArray);
}

// ADD PROJECT / save to storage
function addNewProject(projectName) {
    // create new instance of project
    const newProject = CreateProject(projectName);
    newProject.dataNum = projArray.length;
    addToArray(newProject);
}

function numOfProjects() {
    return projArray.length;
}

const projectModule = {
    CreateProject,
    addNewProject,
    changeProject,
    numOfProjects,
    getCurrentProject,
    setCurrentProject,
    getProjectArray,
    setProjectArray,
    getProject,
    deleteProj,
    addToArray,
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectModule);


/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getProjects() {
    return JSON.parse(localStorage.getItem(0));
}

// check if localStorage has items
function hasProjects() {
    return localStorage[0];
}

function hasTasks() {
    return localStorage[1];
}

function addProjToStorage(projectArray) {
    localStorage.setItem(0, JSON.stringify(projectArray));
}

function getTasks() {
    return JSON.parse(localStorage.getItem(1));
}

function addTaskToStorage(taskArray) {
    localStorage.setItem(1, JSON.stringify(taskArray));
}

const storage = {
    getProjects,
    hasProjects,
    addProjToStorage,
    getTasks,
    hasTasks,
    addTaskToStorage,
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storage);


/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");


// FACTORY FUNCTION FOR TASKS
const CreateTask = (title, due, completed) => {
    let project;
    let dataNum;
    // change title, flag or date
    function setTitle(t) {
        this.title = t;
    }

    function setDue(date) {
        this.due = date;
    }

    return {
        title, due, project, completed, dataNum, setTitle, setDue,
    };
};

let taskArray = [];
let currentProjTasks = [];

function saveArray() {
    _storage__WEBPACK_IMPORTED_MODULE_0__.default.addTaskToStorage(taskArray);
}

function getTaskArray() {
    return taskArray;
}

function getCurrentProjTasks() {
    return currentProjTasks;
}

function setTaskArray(arr) {
    taskArray = arr;
}

function setCurrentProjTasks(arr) {
    currentProjTasks = arr;
}

function fillSingleNum(num) {
    if (num < 10) {
        return `0${num}`;
    }
    return num;
}

function formatDate(date) {
    return date
        .split('-')
        .reverse()
        .join('/');
}

function getDateToday() {
    const date = new Date();
    return formatDate(`${date.getFullYear()}-${fillSingleNum(date.getMonth() + 1)}-${fillSingleNum(date.getDate())}`);
}

function getWeek() {
    const result = [];
    for (let i = 0; i < 7; i += 1) {
        const d = new Date();
        d.setDate(d.getDate() + i);
        result.push(formatDate(`${d.getFullYear()}-${fillSingleNum(d.getMonth() + 1)}-${fillSingleNum(d.getDate())}`));
    }

    return result;
}

function toggleComplete(num) {
    // set task completed to opposite of itself, identified with dataNum from UI
    taskArray[num].completed = !taskArray[num].completed;
    saveArray();
}

function updateTaskInfo(num, newTitle, newDue) {
    const taskToBeEdited = taskArray[num];
    taskToBeEdited.title = newTitle;
    taskToBeEdited.due = newDue;

    saveArray();
}

function getTasksToday(date = getDateToday()) {
    currentProjTasks = taskArray.filter((task) => task.due === date);
    // show filtered array
    return currentProjTasks;
}

function getWeekTasks(dateRange = getWeek()) {
    let totalTasks = [];
    dateRange.forEach((date) => {
        const dateSelected = date;
        const dayArray = taskArray.filter((task) => task.due === dateSelected);
        totalTasks = totalTasks.concat(dayArray);
    });
    currentProjTasks = totalTasks;
    return currentProjTasks;
}

function numOfTasks() {
    return taskArray.length;
}

function addToArray(task) {
    taskArray.push(task);
    saveArray();
}

function addNewTask(taskName, project) {
    // new instance from task factory
    const newTask = CreateTask(taskName);
    // update dataNum
    newTask.dataNum = taskArray.length;
    newTask.due = getDateToday();
    // update linking project
    newTask.project = project.title;
    // add to task array
    addToArray(newTask);
}

function deleteTask(num) {
    // split array into two, removing affecting element
    const firstHalfArray = taskArray.slice(0, num);
    const secondHalfArray = taskArray.slice(parseInt(num, 10) + 1);
    // update dataNum of remaining tabs
    secondHalfArray.forEach((e) => {
        e.dataNum -= 1;
    });

    // assign array back to original projArray
    taskArray = firstHalfArray.concat(secondHalfArray);
    saveArray();
}

function deleteProjectTasks(num) {
    const projects = _storage__WEBPACK_IMPORTED_MODULE_0__.default.getProjects();
    const project = projects[num];
    const { title } = project;
    taskArray.forEach((task) => {
        if (task.project === title) {
            deleteTask(task.dataNum);
        }
    });
}

const task = {
    CreateTask,
    addNewTask,
    numOfTasks,
    toggleComplete,
    updateTaskInfo,
    deleteTask,
    getTasksToday,
    getWeekTasks,
    getCurrentProjTasks,
    getTaskArray,
    getDateToday,
    getWeek,
    formatDate,
    deleteProjectTasks,
    setTaskArray,
    setCurrentProjTasks,
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (task);


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/content */ "./src/modules/content.js");
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");
/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/project */ "./src/modules/project.js");
/* harmony import */ var _modules_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/task */ "./src/modules/task.js");
/* harmony import */ var _modules_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/storage */ "./src/modules/storage.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* eslint-disable no-unused-vars */








})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY29udGVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSxpREFBaUQsK0JBQStCLGtDQUFrQyxpQ0FBaUMsR0FBRyxpQkFBaUIscUJBQXFCLGdEQUFnRCxnQkFBZ0IsMEJBQTBCLHFDQUFxQyxHQUFHLGlCQUFpQix5QkFBeUIsMEJBQTBCLGtDQUFrQyxvQkFBb0IscUNBQXFDLDBCQUEwQixHQUFHLFFBQVEsZ0JBQWdCLHNCQUFzQixHQUFHLGNBQWMsMEJBQTBCLG1CQUFtQiwwQkFBMEIsR0FBRyxjQUFjLG9CQUFvQixxQ0FBcUMsNEJBQTRCLHdCQUF3QiwwQ0FBMEMsZ0VBQWdFLGlEQUFpRCw0Q0FBNEMsa0RBQWtELDBEQUEwRCxxREFBcUQsK0dBQStHLGNBQWMsb0JBQW9CLEdBQUcsV0FBVyxnQkFBZ0IsaUJBQWlCLHVCQUF1QixHQUFHLGdCQUFnQixtQkFBbUIseUJBQXlCLG9CQUFvQixHQUFHLHVDQUF1Qyx5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LFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVkseUJBQXlCLHVCQUF1QixPQUFPLEtBQUssc0JBQXNCLE9BQU8sS0FB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O0FBQzlDO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7VUN6S3BCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQzhDO0FBQ1Y7QUFDVTtBQUNOO0FBQ007O0FBRXpCIiwiZmlsZSI6Ii4vYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tYmxhY2s6IHJnYigyOSwgMjksIDI5KTtcXG4gICAgLS13aGl0ZTogcmdiKDI1MCwgMjUwLCAyNTApO1xcbiAgICAtLWdyZXk6IHJnYigxMjEsIDEyMSwgMTIxKTtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gICAgZm9udC1zaXplOiA4cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMzUsIDIzNSwgMjM1KTtcXG59XFxuXFxuI2hlYWRlci1iYXIge1xcbiAgICBwYWRkaW5nOiAxOHB4IDIwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGJhY2tncm91bmQ6IHJnYig3NSwgNzUsIDc1KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oMiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4ubmF2LWJ0biB7XFxuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLm5hdi1iYXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjE5LCAyMTksIDIxOSk7XFxuICAgIGNvbG9yOnJnYigzNywgMzcsIDM3KTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMnB4IHZhcigtLWdyZXkpO1xcbiAgICAvKiBwcmV2ZW50IGhpZ2hsaWdodHMgKi9cXG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lOyAvKiBpT1MgU2FmYXJpICovXFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEtvbnF1ZXJvciBIVE1MICovXFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE9sZCB2ZXJzaW9ucyBvZiBGaXJlZm94ICovXFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSW50ZXJuZXQgRXhwbG9yZXIvRWRnZSAqL1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTsgLyogTm9uLXByZWZpeGVkIHZlcnNpb24sIGN1cnJlbnRseVxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvcnRlZCBieSBDaHJvbWUsIEVkZ2UsIE9wZXJhIGFuZCBGaXJlZm94ICovXFxufVxcblxcbi53cmFwcGVyIHtcXG4gICAgcGFkZGluZzogMTVweDtcXG59XFxuXFxuLmxpc3Qge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5zZWxlY3Rpb24ge1xcbiAgICBwYWRkaW5nOiA3cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnNlbGVjdGlvbiBpLFxcbi5hZGQtcHJvamVjdC1idG4gaSB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLnNlbGVjdGlvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6cmdiKDIwNCwgMjA0LCAyMDQpO1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjA0LCAyMDQsIDIwNCk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5oMyB7XFxuICAgIGZvbnQtc2l6ZTogMS45cmVtO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnRuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50YWIgPiAqIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0LWRlbGV0ZSB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcblxcbi5wcm9qZWN0LWRlbGV0ZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0LWRlbGV0ZTpob3ZlciB7XFxuICAgIGNvbG9yOnJnYigxOTAsIDM5LCAzOSk7XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyIC5wcm9qZWN0LWRlbGV0ZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIG1hcmdpbjogMjBweDtcXG59XFxuXFxuLnRhc2tzIHtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcblxcbi50YXNrIHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcblxcbi50YXNrOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIwNCwgMjA0LCAyMDQpO1xcbn1cXG5cXG4uaW5mby13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29tcGxldGUtaWNvbiB7XFxuICAgIHdpZHRoOiAxMnB4O1xcbiAgICBoZWlnaHQ6IDEycHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi50YXNrLW5hbWUge1xcbiAgICB3aWR0aDogNTUlO1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG5cXG4uc2lkZS1pY29ucy13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmVkaXQtaWNvbixcXG4uZGVsZXRlLWljb24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tZ3JleSk7XFxufVxcblxcbi5lZGl0LWljb246aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbn1cXG5cXG4uZGVsZXRlLWljb246aG92ZXIge1xcbiAgICBjb2xvcjogcmdiKDE5MCwgMzksIDM5KTtcXG59XFxuXFxuLnRhc2s6aG92ZXIgLmVkaXQtaWNvbixcXG4udGFzazpob3ZlciAuZGVsZXRlLWljb24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnRhc2stZWRpdC1mb3JtIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5lZGl0LWlucHV0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1heC13aWR0aDogNjAwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uZWRpdC10YXNrLXRpdGxlIHtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLmVkaXQtdGFzay1kdWUge1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmNvbmZpcm0tZWRpdC1idXR0b25zIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLmNvbmZpcm0tZWRpdCxcXG4uY2FuY2VsLWVkaXQge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcXG59XFxuXFxuLmNvbmZpcm0tZWRpdDpob3ZlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTQ5LCAyMjksIDE0OSwgMC45KTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgxNDksIDIyOSwgMTQ5LCAwLjkpO1xcbn1cXG5cXG4uY2FuY2VsLWVkaXQ6aG92ZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE5NiwgOTQsIDk0LCAwLjkpO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE5NiwgOTQsIDk0LCAwLjkpO1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtLFxcbi50YXNrLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxufVxcblxcbi50YXNrLWZvcm0ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5hZGQtdGFzay1idG4ge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZm9ybS1pbnB1dCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2spO1xcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xcbn1cXG5cXG4uZm9ybS1idG5zIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4uZm9ybS1idG5zIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDNweDtcXG59XFxuXFxuLnRhc2stc3VibWl0LWJ0bjpob3ZlcixcXG4ucHJvamVjdC1zdWJtaXQtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDpyZ2JhKDE0OSwgMjI5LCAxNDksIDAuOSk7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMTQ5LCAyMjksIDE0OSwgMC45KTtcXG59XFxuXFxuLnRhc2stY2FuY2VsLWJ0bjpob3ZlcixcXG4ucHJvamVjdC1jYW5jZWwtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDpyZ2JhKDE5NiwgOTQsIDk0LCAwLjkpO1xcbiAgICBjb2xvcjpyZ2IoMjM1LCAyMzUsIDIzNSk7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMTk2LCA5NCwgOTQsIDAuOSk7XFxufVxcblxcbi5kaXNwbGF5LWZsZXgge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZGlzcGxheSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIxcHgpIHtcXG4gICAgaHRtbCxcXG4gICAgYm9keSB7XFxuICAgICAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgLnRhc2tzIHtcXG4gICAgICAgIG1hcmdpbjogMTBweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIHtcXG4gICAgaGVhZGVyIHtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgICAgIHotaW5kZXg6IDU7XFxuICAgIH1cXG5cXG4gICAgLm5hdi1idG4ge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAubmF2LXdyYXAge1xcbiAgICAgICAgd2lkdGg6IDMwJTtcXG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7XFxuICAgIH1cXG5cXG4gICAgLm5hdi1iYXIge1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICB3aWR0aDogaW5oZXJpdDtcXG4gICAgICAgIG1heC13aWR0aDogaW5oZXJpdDtcXG4gICAgICAgIGhlaWdodDogMTAwdmg7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB9XFxuXFxuICAgIC53cmFwcGVyIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTArICovXFxuICAgICAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7ICAvKiBGaXJlZm94ICovXFxuICAgIH1cXG5cXG4gICAgLndyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgXFxuICAgICAgICBkaXNwbGF5OiBub25lOyAgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cXG4gICAgfVxcblxcbiAgICAud3JhcHBlciB1bDpmaXJzdC1jaGlsZCB7XFxuICAgICAgICBtYXJnaW4tdG9wOiA4MHB4O1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LWZvcm0ge1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgfVxcbiAgICBcXG4gICAgLmNvbnRlbnQtd3JhcHBlciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB9XFxuXFxuICAgIC5tYWluLXdyYXBwZXIge1xcbiAgICAgICAgd2lkdGg6IDYwJTtcXG4gICAgICAgIG1hcmdpbjogODBweDtcXG4gICAgICAgIGZsZXg6IDI7XFxuICAgICAgICBtYXgtd2lkdGg6IDEwMDBweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTAzMHB4KSB7XFxuICAgIC5wcm9qZWN0LWZvcm0gLmZvcm0tYnRucyB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLDBCQUEwQjtBQUM5Qjs7QUFFQTs7SUFFSSxjQUFjO0lBQ2QseUNBQXlDO0lBQ3pDLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLG1DQUFtQztJQUNuQyx1QkFBdUI7SUFDdkIsMkJBQTJCLEVBQUUsZUFBZTtJQUM1Qyx5QkFBeUIsRUFBRSxXQUFXO0lBQ3RDLHdCQUF3QixFQUFFLG1CQUFtQjtJQUM3QyxzQkFBc0IsRUFBRSw0QkFBNEI7SUFDcEQscUJBQXFCLEVBQUUsMkJBQTJCO0lBQ2xELGlCQUFpQixFQUFFO3NFQUMrQztBQUN0RTs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCw4QkFBOEI7QUFDbEM7O0FBRUE7O0lBRUksYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDOztBQUVBOztJQUVJLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksMENBQTBDO0lBQzFDLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHdDQUF3QztJQUN4QyxrQ0FBa0M7QUFDdEM7O0FBRUE7O0lBRUksYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxtQ0FBbUM7SUFDbkMsMENBQTBDO0FBQzlDOztBQUVBOztJQUVJLGlDQUFpQztJQUNqQyx3QkFBd0I7SUFDeEIsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSTs7UUFFSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksWUFBWTtJQUNoQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsWUFBWTtRQUNaLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLGFBQWE7UUFDYixlQUFlO1FBQ2YsY0FBYztRQUNkLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksV0FBVztRQUNYLGtCQUFrQjtRQUNsQix3QkFBd0IsR0FBRywwQkFBMEI7UUFDckQscUJBQXFCLEdBQUcsWUFBWTtJQUN4Qzs7SUFFQTtRQUNJLGFBQWEsR0FBRyxzQkFBc0I7SUFDMUM7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLFlBQVk7UUFDWixPQUFPO1FBQ1AsaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1ibGFjazogcmdiKDI5LCAyOSwgMjkpO1xcbiAgICAtLXdoaXRlOiByZ2IoMjUwLCAyNTAsIDI1MCk7XFxuICAgIC0tZ3JleTogcmdiKDEyMSwgMTIxLCAxMjEpO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgICBmb250LXNpemU6IDhweDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIzNSwgMjM1LCAyMzUpO1xcbn1cXG5cXG4jaGVhZGVyLWJhciB7XFxuICAgIHBhZGRpbmc6IDE4cHggMjBweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgYmFja2dyb3VuZDogcmdiKDc1LCA3NSwgNzUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmgyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5uYXYtYnRuIHtcXG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4ubmF2LWJhciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMTksIDIxOSwgMjE5KTtcXG4gICAgY29sb3I6cmdiKDM3LCAzNywgMzcpO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAycHggdmFyKC0tZ3JleSk7XFxuICAgIC8qIHByZXZlbnQgaGlnaGxpZ2h0cyAqL1xcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IC8qIGlPUyBTYWZhcmkgKi9cXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXFxuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTsgLyogS29ucXVlcm9yIEhUTUwgKi9cXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogT2xkIHZlcnNpb25zIG9mIEZpcmVmb3ggKi9cXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXFxuICAgIHVzZXItc2VsZWN0OiBub25lOyAvKiBOb24tcHJlZml4ZWQgdmVyc2lvbiwgY3VycmVudGx5XFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VwcG9ydGVkIGJ5IENocm9tZSwgRWRnZSwgT3BlcmEgYW5kIEZpcmVmb3ggKi9cXG59XFxuXFxuLndyYXBwZXIge1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG4ubGlzdCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnNlbGVjdGlvbiB7XFxuICAgIHBhZGRpbmc6IDdweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc2VsZWN0aW9uIGksXFxuLmFkZC1wcm9qZWN0LWJ0biBpIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uc2VsZWN0aW9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDpyZ2IoMjA0LCAyMDQsIDIwNCk7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMDQsIDIwNCwgMjA0KTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmgzIHtcXG4gICAgZm9udC1zaXplOiAxLjlyZW07XFxufVxcblxcbi5hZGQtcHJvamVjdC1idG4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRhYiA+ICoge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlOmhvdmVyIHtcXG4gICAgY29sb3I6cmdiKDE5MCwgMzksIDM5KTtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIgLnByb2plY3QtZGVsZXRlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4udGFza3Mge1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuXFxuLnRhc2sge1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuLnRhc2s6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjA0LCAyMDQsIDIwNCk7XFxufVxcblxcbi5pbmZvLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb21wbGV0ZS1pY29uIHtcXG4gICAgd2lkdGg6IDEycHg7XFxuICAgIGhlaWdodDogMTJweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnRhc2stbmFtZSB7XFxuICAgIHdpZHRoOiA1NSU7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcblxcbi5zaWRlLWljb25zLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZWRpdC1pY29uLFxcbi5kZWxldGUtaWNvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmV5KTtcXG59XFxuXFxuLmVkaXQtaWNvbjpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxufVxcblxcbi5kZWxldGUtaWNvbjpob3ZlciB7XFxuICAgIGNvbG9yOiByZ2IoMTkwLCAzOSwgMzkpO1xcbn1cXG5cXG4udGFzazpob3ZlciAuZWRpdC1pY29uLFxcbi50YXNrOmhvdmVyIC5kZWxldGUtaWNvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4udGFzay1lZGl0LWZvcm0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmVkaXQtaW5wdXRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5lZGl0LXRhc2stdGl0bGUge1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uZWRpdC10YXNrLWR1ZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uY29uZmlybS1lZGl0LWJ1dHRvbnMge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4uY29uZmlybS1lZGl0LFxcbi5jYW5jZWwtZWRpdCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xcbn1cXG5cXG4uY29uZmlybS1lZGl0OmhvdmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNDksIDIyOSwgMTQ5LCAwLjkpO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE0OSwgMjI5LCAxNDksIDAuOSk7XFxufVxcblxcbi5jYW5jZWwtZWRpdDpob3ZlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTk2LCA5NCwgOTQsIDAuOSk7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTk2LCA5NCwgOTQsIDAuOSk7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0sXFxuLnRhc2stZm9ybSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuXFxuLnRhc2stZm9ybSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmFkZC10YXNrLWJ0biB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mb3JtLWlucHV0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxuICAgIHBhZGRpbmc6IDRweCA4cHg7XFxufVxcblxcbi5mb3JtLWJ0bnMge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5mb3JtLWJ0bnMgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogM3B4O1xcbn1cXG5cXG4udGFzay1zdWJtaXQtYnRuOmhvdmVyLFxcbi5wcm9qZWN0LXN1Ym1pdC1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMTQ5LCAyMjksIDE0OSwgMC45KTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxNDksIDIyOSwgMTQ5LCAwLjkpO1xcbn1cXG5cXG4udGFzay1jYW5jZWwtYnRuOmhvdmVyLFxcbi5wcm9qZWN0LWNhbmNlbC1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMTk2LCA5NCwgOTQsIDAuOSk7XFxuICAgIGNvbG9yOnJnYigyMzUsIDIzNSwgMjM1KTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxOTYsIDk0LCA5NCwgMC45KTtcXG59XFxuXFxuLmRpc3BsYXktZmxleCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5kaXNwbGF5IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjFweCkge1xcbiAgICBodG1sLFxcbiAgICBib2R5IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgfVxcblxcbiAgICAudGFza3Mge1xcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkge1xcbiAgICBoZWFkZXIge1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICAgICAgei1pbmRleDogNTtcXG4gICAgfVxcblxcbiAgICAubmF2LWJ0biB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5uYXYtd3JhcCB7XFxuICAgICAgICB3aWR0aDogMzAlO1xcbiAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcXG4gICAgfVxcblxcbiAgICAubmF2LWJhciB7XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIHdpZHRoOiBpbmhlcml0O1xcbiAgICAgICAgbWF4LXdpZHRoOiBpbmhlcml0O1xcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIH1cXG5cXG4gICAgLndyYXBwZXIge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7ICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMCsgKi9cXG4gICAgICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgIC8qIEZpcmVmb3ggKi9cXG4gICAgfVxcblxcbiAgICAud3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXIgeyBcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7ICAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xcbiAgICB9XFxuXFxuICAgIC53cmFwcGVyIHVsOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDgwcHg7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtZm9ybSB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICB9XFxuICAgIFxcbiAgICAuY29udGVudC13cmFwcGVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG5cXG4gICAgLm1haW4td3JhcHBlciB7XFxuICAgICAgICB3aWR0aDogNjAlO1xcbiAgICAgICAgbWFyZ2luOiA4MHB4O1xcbiAgICAgICAgZmxleDogMjtcXG4gICAgICAgIG1heC13aWR0aDogMTAwMHB4O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDMwcHgpIHtcXG4gICAgLnByb2plY3QtZm9ybSAuZm9ybS1idG5zIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBjb250ZW50TW9kdWxlIGZyb20gJy4vY29udGVudCc7XG5pbXBvcnQgdGFza01vZHVsZSBmcm9tICcuL3Rhc2snO1xuaW1wb3J0IHByb2plY3RNb2R1bGUgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCBzdG9yYWdlTW9kdWxlIGZyb20gJy4vc3RvcmFnZSc7XG5cbi8vIFBBR0UgQkVIQVZJT1VSXG5jb25zdCBuYXZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWJ0bicpO1xuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1iYXInKTtcbmNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybScpO1xuY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1mb3JtJyk7XG5jb25zdCBhZGRQcm9qQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LWJ0bicpO1xuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idG4nKTtcbmNvbnN0IGFkZFByb2pCdG5TdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1zdWJtaXQtYnRuJyk7XG5jb25zdCBhZGRUYXNrQnRuU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stc3VibWl0LWJ0bicpO1xuY29uc3QgcHJvamVjdEJ0bkNhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNhbmNlbC1idG4nKTtcbmNvbnN0IHRhc2tCdG5DYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1jYW5jZWwtYnRuJyk7XG5cbigoKSA9PiB7XG4gICAgZnVuY3Rpb24gZHJvcGRvd25NZW51KCkge1xuICAgICAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZSgnZGlzcGxheScpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN1Ym1pdFByb2plY3RGb3JtKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBnZXQgdGl0bGUgb2YgcHJvamVjdCBmcm9tIGZvcm1cbiAgICAgICAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybSBpbnB1dCcpO1xuICAgICAgICBjb25zdCB2YWxpZElucHV0ID0gcHJvamVjdElucHV0LnZhbGlkaXR5O1xuICAgICAgICBjb25zdCBpbnB1dFZhbHVlID0gcHJvamVjdElucHV0LnZhbHVlO1xuICAgICAgICBpZiAodmFsaWRJbnB1dC52YWx1ZU1pc3NpbmcpIHtcbiAgICAgICAgICAgIHByb2plY3RJbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnUGxlYXNlIGVudGVyIGEgbmFtZSBmb3IgdGhpcyBwcm9qZWN0Jyk7XG4gICAgICAgICAgICBwcm9qZWN0SW5wdXQucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29udGVudE1vZHVsZS5wcm9qZWN0RXhpc3RzKHByb2plY3RJbnB1dC52YWx1ZSkpIHtcbiAgICAgICAgICAgIHByb2plY3RJbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnUHJvamVjdCBhbHJlYWR5IGV4aXN0cyEnKTtcbiAgICAgICAgICAgIHByb2plY3RJbnB1dC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGFkZCBET00gZWxlbWVudHNcbiAgICAgICAgY29udGVudE1vZHVsZS5hZGRQcm9qZWN0TGluayhpbnB1dFZhbHVlKTtcbiAgICAgICAgLy8gY3JlYXRlIG5ldyBwcm9qZWN0IGluc3RhbmNlXG4gICAgICAgIGNvbnRlbnRNb2R1bGUuY3JlYXRlTmV3UHJvamVjdChpbnB1dFZhbHVlKTtcbiAgICAgICAgLy8gY2FuY2VsIGZvcm0gZGlzcGxheSAvIHJlc2V0XG4gICAgICAgIGNvbnRlbnRNb2R1bGUuY2FuY2VsRm9ybShwcm9qZWN0Rm9ybSwgYWRkUHJvakJ0bik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3VibWl0VGFza0Zvcm0oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIGdldCB0aXRsZSBvZiB0YXNrIGZyb20gZm9ybVxuICAgICAgICBjb25zdCB0YXNrSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1mb3JtIGlucHV0Jyk7XG4gICAgICAgIGNvbnN0IHZhbGlkSW5wdXQgPSB0YXNrSW5wdXQudmFsaWRpdHk7XG4gICAgICAgIGNvbnN0IGlucHV0VmFsdWUgPSB0YXNrSW5wdXQudmFsdWU7XG4gICAgICAgIGlmICh2YWxpZElucHV0LnZhbHVlTWlzc2luZykge1xuICAgICAgICAgICAgdGFza0lucHV0LnNldEN1c3RvbVZhbGlkaXR5KCdQbGVhc2UgZW50ZXIgYSBuYW1lIGZvciB0aGlzIHRhc2snKTtcbiAgICAgICAgICAgIHRhc2tJbnB1dC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGFkZCBET00gZWxlbWVudHNcbiAgICAgICAgY29udGVudE1vZHVsZS5hZGRUYXNrQ2VsbChpbnB1dFZhbHVlKTtcbiAgICAgICAgLy8gY3JlYXRlIG5ldyB0YXNrIGluc3RhbmNlXG4gICAgICAgIGNvbnRlbnRNb2R1bGUuY3JlYXRlTmV3VGFzayhpbnB1dFZhbHVlKTtcbiAgICAgICAgLy8gY2FuY2VsIGZvcm0gZGlzcGxheSAvIHJlc2V0XG4gICAgICAgIGNvbnRlbnRNb2R1bGUuY2FuY2VsRm9ybSh0YXNrRm9ybSwgYWRkVGFza0J0bik7XG4gICAgfVxuXG4gICAgLy8gZXZlbnQgbGlzdGVuZXJzIGZvciBuYXZCdG4gYW5kIGFkZCBwcm9qZWN0IGJ0blxuICAgIG5hdkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRyb3Bkb3duTWVudSk7XG4gICAgLy8gcGFzc2VzIGZ1bmN0aW9uIHRvIHdhaXQgZm9yIGV2ZW50IGJlZm9yZSBjYWxsaW5nIHRvZ2dsZUZvcm1zXG4gICAgYWRkUHJvakJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNvbnRlbnRNb2R1bGUudG9nZ2xlRm9ybShwcm9qZWN0Rm9ybSwgYWRkUHJvakJ0bikpO1xuICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjb250ZW50TW9kdWxlLnRvZ2dsZUZvcm0odGFza0Zvcm0sIGFkZFRhc2tCdG4pKTtcbiAgICBwcm9qZWN0QnRuQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY29udGVudE1vZHVsZS5jYW5jZWxGb3JtKHByb2plY3RGb3JtLCBhZGRQcm9qQnRuKSk7XG4gICAgdGFza0J0bkNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNvbnRlbnRNb2R1bGUuY2FuY2VsRm9ybSh0YXNrRm9ybSwgYWRkVGFza0J0bikpO1xuICAgIGFkZFByb2pCdG5TdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXRQcm9qZWN0Rm9ybSk7XG4gICAgYWRkVGFza0J0blN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdFRhc2tGb3JtKTtcbn0pKCk7XG5cbmZ1bmN0aW9uIHNob3dQcm9qZWN0cyhhcnIpIHsgLy8gY2hlY2sgaWYgdGhlcmUgYXJlIGV4aXN0aW5nIHByb2plY3RzIGluIHN0b3JhZ2VcbiAgICBjb25zdCBsZW4gPSBhcnIubGVuZ3RoO1xuICAgIC8vIGdvIHRocm91Z2ggYWxsIHN0b3JlZCBwcm9qZWN0cyBhbmQgYWRkIHRoZW0gdG8gbGlua1xuICAgIGZvciAobGV0IGkgPSAzOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgcHJvaiA9IGFycltpXTtcbiAgICAgICAgLy8gc2hvdyBwcm9qZWN0IG9uIGluaXRpYWwgbG9hZFxuICAgICAgICBjb250ZW50TW9kdWxlLmFkZFByb2plY3RMaW5rKHByb2oudGl0bGUsIHByb2ouZGF0YU51bSk7XG4gICAgfVxufVxuXG4vLyBjaGVjayBpZiBzdG9yYWdlIGhhcyBmaXJzdCBlbGVtZW50XG5pZiAoc3RvcmFnZU1vZHVsZS5oYXNQcm9qZWN0cygpKSB7XG4gICAgY29uc3QgcHJvakFyciA9IHN0b3JhZ2VNb2R1bGUuZ2V0UHJvamVjdHMoKTtcbiAgICBwcm9qZWN0TW9kdWxlLnNldFByb2plY3RBcnJheShwcm9qQXJyKTtcbiAgICBwcm9qZWN0TW9kdWxlLnNldEN1cnJlbnRQcm9qZWN0KHByb2pBcnJbMF0pO1xuXG4gICAgLy8gY2hlY2sgaWYgbW9yZSB0aGFuIGRlZmF1bHQgMyBwcm9qZWN0cyBpbiBzdG9yYWdlXG4gICAgaWYgKHByb2pBcnIubGVuZ3RoID4gMykge1xuICAgICAgICBzaG93UHJvamVjdHMocHJvakFycik7XG4gICAgfVxufSBlbHNlIHtcbiAgICAvLyBlbHNlIGNyZWF0ZSBvd24gcHJvamVjdCBhbmQgc2F2ZSB0byBzdG9yYWdlXG4gICAgY29uc3QgcHJvaiA9IHByb2plY3RNb2R1bGUuQ3JlYXRlUHJvamVjdCgnaW5ib3gnKTtcbiAgICBwcm9qLnNldERhdGFOdW0oMCk7XG4gICAgcHJvamVjdE1vZHVsZS5zZXRDdXJyZW50UHJvamVjdChwcm9qKTtcblxuICAgIC8vIHNhdmUgdG8gbG9jYWxTdG9yYWdlIHVuZGVyIHByb2plY3RzXG4gICAgcHJvamVjdE1vZHVsZS5hZGRUb0FycmF5KHByb2opO1xuXG4gICAgLy8gY3JlYXRlIHByb2plY3QgaW5zdGFuY2VzIGZvciBvdGhlciB0YWJzIC0gdG9kYXkgYW5kIHRoaXMgd2Vla1xuICAgIGNvbnN0IGRheVByb2ogPSBwcm9qZWN0TW9kdWxlLkNyZWF0ZVByb2plY3QoJ3RvZGF5Jyk7XG4gICAgZGF5UHJvai5zZXREYXRhTnVtKDEpO1xuICAgIHByb2plY3RNb2R1bGUuYWRkVG9BcnJheShkYXlQcm9qKTtcblxuICAgIGNvbnN0IHdlZWtQcm9qID0gcHJvamVjdE1vZHVsZS5DcmVhdGVQcm9qZWN0KCd0aGlzIHdlZWsnKTtcbiAgICB3ZWVrUHJvai5zZXREYXRhTnVtKDIpO1xuICAgIHByb2plY3RNb2R1bGUuYWRkVG9BcnJheSh3ZWVrUHJvaik7XG59XG5cbi8vIGNoZWNrIGlmIHN0b3JhZ2UgaGFzIHRhc2tzXG5pZiAoc3RvcmFnZU1vZHVsZS5oYXNUYXNrcygpKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RNb2R1bGUuZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgICBjb25zdCB0YXNrQXJyYXkgPSBzdG9yYWdlTW9kdWxlLmdldFRhc2tzKCk7XG4gICAgdGFza01vZHVsZS5zZXRUYXNrQXJyYXkodGFza0FycmF5KTtcbiAgICAvLyBhZGQgdG8gY3VyclByb2pBcnJcbiAgICBjb250ZW50TW9kdWxlLnNldEN1cnJlbnRUYXNrcyhwcm9qZWN0KTtcbn1cbiIsImltcG9ydCB0YXNrTW9kdWxlIGZyb20gJy4vdGFzayc7XG5pbXBvcnQgcHJvamVjdE1vZHVsZSBmcm9tICcuL3Byb2plY3QnO1xuXG5jb25zdCBkYXlUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF5Jyk7XG5jb25zdCB3ZWVrVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlZWsnKTtcbmNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZm9ybScpO1xuY29uc3QgbGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYicpO1xuXG5mdW5jdGlvbiB0b2dnbGVGb3JtKC4uLmFyZ3MpIHtcbiAgICBhcmdzLmZvckVhY2goKGFyZ3VtZW50KSA9PiBhcmd1bWVudC5jbGFzc0xpc3QudG9nZ2xlKCdkaXNwbGF5JykpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVGb3JtRmxleCguLi5hcmdzKSB7XG4gICAgYXJncy5mb3JFYWNoKChhcmd1bWVudCkgPT4gYXJndW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnZGlzcGxheS1mbGV4JykpO1xufVxuXG5mdW5jdGlvbiBjb21wbGV0ZVRhc2sodGFzaykge1xuICAgIGNvbnN0IHQgPSB0YXNrO1xuICAgIHQuY29tcGxldGVkID0gdHJ1ZTtcbiAgICBjb25zdCBjb21wbGV0ZUljb24gPSB0LnF1ZXJ5U2VsZWN0b3IoJy5jb21wbGV0ZS1pY29uJyk7XG4gICAgY29tcGxldGVJY29uLnN0eWxlLmJhY2tncm91bmQgPSAncmdiYSg4MSwgMTkyLCA4MSwgMC4yNTMpJztcbiAgICB0LnN0eWxlLmNvbG9yID0gJ3JnYigxNTAsIDE1MCwgMTUwKSc7XG4gICAgdC5zdHlsZS5ib3JkZXJDb2xvciA9ICdyZ2IoMTUwLCAxNTAsIDE1MCknO1xuICAgIHQuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcbn1cblxuZnVuY3Rpb24gdW5jb21wbGV0ZVRhc2sodGFzaykge1xuICAgIGNvbnN0IHQgPSB0YXNrO1xuICAgIHQuY29tcGxldGVkID0gZmFsc2U7XG4gICAgY29uc3QgY29tcGxldGVJY29uID0gdC5xdWVyeVNlbGVjdG9yKCcuY29tcGxldGUtaWNvbicpO1xuICAgIGNvbXBsZXRlSWNvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJ2luaGVyaXQnO1xuICAgIHQuc3R5bGUuY29sb3IgPSAndmFyKC0tYmxhY2spJztcbiAgICB0LnN0eWxlLmJvcmRlckNvbG9yID0gJ3ZhcigtLWdyZXkpJztcbiAgICB0LnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5RWRpdCh0YXNrKSB7XG4gICAgY29uc3QgdCA9IHRhc2s7XG4gICAgLy8gc2hvdyBlZGl0IGZvcm0sIGRpc3BsYXkgb2ZmIGZvciB0YXNrIGluZm9cbiAgICBjb25zdCB0YXNrSW5mbyA9IHQucXVlcnlTZWxlY3RvcignLmluZm8td3JhcHBlcicpO1xuICAgIGNvbnN0IHRhc2tUaXRsZSA9IHQucXVlcnlTZWxlY3RvcignLnRhc2stbmFtZScpO1xuICAgIGNvbnN0IHRhc2tEdWUgPSB0LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlJyk7XG4gICAgY29uc3QgZWRpdFRpdGxlID0gdC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10YXNrLXRpdGxlJyk7XG4gICAgY29uc3QgZWRpdER1ZSA9IHQucXVlcnlTZWxlY3RvcignLmVkaXQtdGFzay1kdWUnKTtcblxuICAgIGVkaXRUaXRsZS52YWx1ZSA9IHRhc2tUaXRsZS50ZXh0Q29udGVudDtcbiAgICBlZGl0RHVlLnZhbHVlID0gdGFza0R1ZS50ZXh0Q29udGVudDtcblxuICAgIHRvZ2dsZUZvcm1GbGV4KHRhc2tJbmZvLCB0YXNrRm9ybSk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0RWRpdCh0YXNrKSB7XG4gICAgY29uc3QgdCA9IHRhc2s7XG4gICAgLy8gcmVzZXQgZm9ybSwgdG9nZ2xlIGRpc3BsYXlFZGl0XG4gICAgdC5xdWVyeVNlbGVjdG9yKCcudGFzay1lZGl0LWZvcm0nKS5yZXNldCgpO1xuXG4gICAgZGlzcGxheUVkaXQodCk7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdEVkaXQodGFzaykge1xuICAgIGNvbnN0IHQgPSB0YXNrO1xuICAgIGNvbnN0IHRhc2tUaXRsZSA9IHQucXVlcnlTZWxlY3RvcignLnRhc2stbmFtZScpO1xuICAgIGNvbnN0IHRhc2tEdWUgPSB0LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlJyk7XG4gICAgY29uc3QgZWRpdGVkVGl0bGUgPSB0LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2stdGl0bGUnKTtcbiAgICBjb25zdCBlZGl0ZWREdWUgPSB0LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2stZHVlJyk7XG5cbiAgICAvLyB1cGRhdGUgdGFzayBpbnN0YW5jZSBpbiB0YXNrTW9kdWxlXG4gICAgdGFza01vZHVsZS51cGRhdGVUYXNrSW5mbyh0LmRhdGFzZXQubnVtLCBlZGl0ZWRUaXRsZS52YWx1ZSwgZWRpdGVkRHVlLnZhbHVlKTtcblxuICAgIC8vIGNoYW5nZSB0YXNrIHRpdGxlIGFuZCBkYXRlIGFjY29yZGluZyB0byBmb3JtXG4gICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gZWRpdGVkVGl0bGUudmFsdWU7XG4gICAgdGFza0R1ZS50ZXh0Q29udGVudCA9IHRhc2tNb2R1bGUuZm9ybWF0RGF0ZShlZGl0ZWREdWUudmFsdWUpO1xuXG4gICAgcmVzZXRFZGl0KHRhc2spO1xufVxuXG5mdW5jdGlvbiBzaG93Q3VycmVudFRhc2tzKGFycikge1xuICAgIGFyci5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICAgICAgICBhZGRUYXNrQ2VsbCh0YXNrLnRpdGxlLCB0YXNrLmR1ZSwgdGFzay5jb21wbGV0ZWQsIHRhc2suZGF0YU51bSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRUYXNrcyhwcm9qZWN0KSB7XG4gICAgY29uc3QgdGFza0FycmF5ID0gdGFza01vZHVsZS5nZXRUYXNrQXJyYXkoKTtcbiAgICBjb25zdCB0YXNrcyA9IHRhc2tBcnJheS5maWx0ZXIoKHRhc2spID0+IHRhc2sucHJvamVjdCA9PT0gcHJvamVjdC50aXRsZSk7XG4gICAgdGFza01vZHVsZS5zZXRDdXJyZW50UHJvalRhc2tzKHRhc2tzKTtcbiAgICBzaG93Q3VycmVudFRhc2tzKHRhc2tzKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQXJyYXkocHJvamVjdCkge1xuICAgIC8vIHJlbG9hZCBhbGwgdGFza3MgdG8gY3VycmVudCBwcm9qZWN0IHNlbGVjdGVkXG4gICAgaWYgKHByb2plY3QudGl0bGUgPT09ICd0b2RheScpIHtcbiAgICAgICAgc2hvd0N1cnJlbnRUYXNrcyh0YXNrTW9kdWxlLmdldFRhc2tzVG9kYXkoKSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHByb2plY3QudGl0bGUgPT09ICd0aGlzIHdlZWsnKSB7XG4gICAgICAgIHNob3dDdXJyZW50VGFza3ModGFza01vZHVsZS5nZXRXZWVrVGFza3MoKSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0Q3VycmVudFRhc2tzKHByb2plY3QpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVUYXNrSW5zdGFuY2UodGFzaykge1xuICAgIC8vIHBhc3MgcGFyYW1ldGVyIHRvIGNoZWNrIGlmIHByb2plY3QgaXMgdW5kZXIgJ3RvZGF5JyBvciAnd2VlaydcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdE1vZHVsZS5nZXRDdXJyZW50UHJvamVjdCgpO1xuICAgIC8vIHJlbW92ZSBmcm9tIHRhc2sgYXJyYXlcbiAgICB0YXNrTW9kdWxlLmRlbGV0ZVRhc2sodGFzay5kYXRhc2V0Lm51bSk7XG4gICAgLy8gY2hlY2sgcHJvamVjdCBzZWxlY3RlZFxuICAgIHVwZGF0ZUFycmF5KHByb2plY3QpO1xufVxuXG5mdW5jdGlvbiBjbGVhclRhc2tzKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpLmlubmVySFRNTCA9ICcnO1xufVxuXG5mdW5jdGlvbiBkZWxldGVUYXNrKHRhc2spIHtcbiAgICAvLyBoYXZlIHRvIGNsZWFyIHRhc2tzIGFuZCByZWNyZWF0ZSBhbGwgaW5zdGFuY2VzIGFnYWluLCBhcyBkYXRhTnVtIGlzIHNwcmVhZCBvdXRcbiAgICBjbGVhclRhc2tzKCk7XG4gICAgLy8gcmVtb3ZlIGluc3RhbmNlIGFuZCByZXNldCBsaXN0XG4gICAgcmVtb3ZlVGFza0luc3RhbmNlKHRhc2spO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXdUYXNrKHRhc2tOYW1lKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RNb2R1bGUuZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgICAvLyBjcmVhdGUgaW5zdGFuY2Ugb2YgdGFzayBmcm9tIGZhY3RvcnlcbiAgICB0YXNrTW9kdWxlLmFkZE5ld1Rhc2sodGFza05hbWUsIHByb2plY3QpO1xufVxuXG5mdW5jdGlvbiBhZGRUYXNrQ2VsbCh0YXNrTmFtZSwgZHVlRGF0ZSwgY29tcGxldGVkLCBkYXRhTnVtKSB7XG4gICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKTtcbiAgICAvLyBjcmVhdGUgZGl2IGVsZW1lbnQgdG8gd3JhcCBib3RoIHRhc2sgaW5mbyBhbmQgZWRpdCBpbmZvXG4gICAgY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1Rhc2suY2xhc3NOYW1lID0gJ3Rhc2snO1xuICAgIC8vIGRhdGFzZXQgbnVtIHRvIGlkZW50aWZ5IHRhc2sgaW5zdGFuY2UgaW4gcHJvaiB0YXNrTGlzdCBhcnJheVxuICAgIGlmIChkYXRhTnVtID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbmV3VGFzay5kYXRhc2V0Lm51bSA9IHRhc2tNb2R1bGUubnVtT2ZUYXNrcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1Rhc2suZGF0YXNldC5udW0gPSBkYXRhTnVtO1xuICAgIH1cblxuICAgIC8vIGNyZWF0ZSBkaXYgdG8gaG9sZCBhbGwgdGFza0luZm8gaW4gZmxleGJveFxuICAgIGNvbnN0IHRhc2tJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0luZm8uY2xhc3NOYW1lID0gJ2luZm8td3JhcHBlciBkaXNwbGF5LWZsZXgnO1xuXG4gICAgLy8gY3JlYXRlIGljb24gZWxlbWVudCAtIHN0eWxlZCB0byBjaXJjbGUgLSB0byByZWZsZWN0IHByaW9yaXR5IG9mIHRhc2tcbiAgICBjb25zdCBjb21wbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb21wbGV0ZUljb24uY2xhc3NOYW1lID0gJ2NvbXBsZXRlLWljb24nO1xuXG4gICAgLy8gY3JlYXRlIHNwYW4gZWxlbWVudCBmb3IgdGFzayB0aXRsZVxuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0YXNrVGl0bGUuY2xhc3NOYW1lID0gJ3Rhc2stbmFtZSc7XG4gICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFza05hbWU7XG5cbiAgICAvLyBjcmVhdGUgZGl2IGVsZW1lbnQgdG8gc3RvcmUgZGF0ZSAtIHRvIGJlIGNoYW5nZWQgdXBvbiBlZGl0XG4gICAgLy8gY3JlYXRlIGVkaXQgZm9ybSBmb3IgdGhpcyB0b28sIHRvIHNlbGVjdCBkYXRlXG4gICAgY29uc3QgdGFza0R1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tEdWUuY2xhc3NOYW1lID0gJ2RhdGUnO1xuICAgIHRhc2tEdWUudGV4dENvbnRlbnQgPSBkdWVEYXRlIHx8IHRhc2tNb2R1bGUuZ2V0RGF0ZVRvZGF5KCk7XG5cbiAgICAvLyBhcHBlbmQgZWRpdCBhbmQgZGVsZXRlIGljb25zIHRvIHJpZ2h0IHNpZGUgb2YgZGF0ZSBkaXYuXG4gICAgY29uc3Qgc2lkZUljb25zV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGVJY29uc1dyYXBwZXIuY2xhc3NOYW1lID0gJ3NpZGUtaWNvbnMtd3JhcHBlcic7XG4gICAgY29uc3QgZWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZWRpdEljb24uY2xhc3NOYW1lID0gJ2VkaXQtaWNvbic7XG4gICAgZWRpdEljb24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFyIGZhLWVkaXRcIj48L2k+JztcbiAgICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGRlbGV0ZUljb24uY2xhc3NOYW1lID0gJ2RlbGV0ZS1pY29uJztcbiAgICBkZWxldGVJY29uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhciBmYS10cmFzaC1hbHRcIj48L2k+JztcbiAgICBzaWRlSWNvbnNXcmFwcGVyLmFwcGVuZENoaWxkKGVkaXRJY29uKTtcbiAgICBzaWRlSWNvbnNXcmFwcGVyLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xuXG4gICAgLy8gYXBwZW5kIGVsZW1lbnRzIHRvIHRhc2sgZGl2LCB0aGVuIGFwcGVuZCB0YXNrIGRpdiB0byBsaXN0IGRpdlxuICAgIC8vIE1BSU4gVEFTSyBDRUxMXG4gICAgdGFza0luZm8uYXBwZW5kQ2hpbGQoY29tcGxldGVJY29uKTtcbiAgICB0YXNrSW5mby5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICAgIHRhc2tJbmZvLmFwcGVuZENoaWxkKHRhc2tEdWUpO1xuICAgIHRhc2tJbmZvLmFwcGVuZENoaWxkKHNpZGVJY29uc1dyYXBwZXIpO1xuICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQodGFza0luZm8pO1xuXG4gICAgLy8gY2hlY2sgaWYgdGFzayBpcyBjb21wbGV0ZSBhY2NvcmRpbmcgdG8gaW5wdXQgcGFyYW1ldGVyc1xuICAgIGlmIChjb21wbGV0ZWQpIHtcbiAgICAgICAgY29tcGxldGVUYXNrKG5ld1Rhc2spO1xuICAgIH1cblxuICAgIC8vIGNyZWF0ZSB0YXNrIGVkaXQgZm9ybVxuICAgIGNvbnN0IHRhc2tFZGl0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICB0YXNrRWRpdEZvcm0uY2xhc3NOYW1lID0gJ3Rhc2stZWRpdC1mb3JtJzsgLy8gdG8gZGlzcGxheSBmbGV4XG4gICAgLy8gd3JhcHBlciBmb3IgaW5wdXQgZWxlbWVudHNcbiAgICBjb25zdCBlZGl0SW5wdXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWRpdElucHV0cy5jbGFzc05hbWUgPSAnZWRpdC1pbnB1dHMnO1xuICAgIC8vIGlucHV0IGVsZW1lbnRzXG4gICAgY29uc3QgZWRpdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBlZGl0VGl0bGUuY2xhc3NOYW1lID0gJ2VkaXQtdGFzay10aXRsZSc7XG4gICAgY29uc3QgZWRpdERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGVkaXREYXRlLmNsYXNzTmFtZSA9ICdlZGl0LXRhc2stZHVlJztcbiAgICBlZGl0RGF0ZS50eXBlID0gJ3RleHQnO1xuXG4gICAgLy8gYnV0dG9uIHdyYXBwZXJcbiAgICBjb25zdCBjb25maXJtQnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbmZpcm1CdG5zLmNsYXNzTmFtZSA9ICdjb25maXJtLWVkaXQtYnV0dG9ucyc7XG4gICAgLy8gYnV0dG9uc1xuICAgIGNvbnN0IGNvbmZpcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25maXJtQnRuLmNsYXNzTmFtZSA9ICdjb25maXJtLWVkaXQnO1xuICAgIGNvbmZpcm1CdG4udHlwZSA9ICdidXR0b24nO1xuICAgIGNvbmZpcm1CdG4udGV4dENvbnRlbnQgPSAnU2F2ZSc7XG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2FuY2VsQnRuLmNsYXNzTmFtZSA9ICdjYW5jZWwtZWRpdCc7XG4gICAgY2FuY2VsQnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcblxuICAgIC8vIGFwcGVuZCB0byBmb3JtIGVsZW1lbnRcbiAgICBlZGl0SW5wdXRzLmFwcGVuZENoaWxkKGVkaXRUaXRsZSk7XG4gICAgZWRpdElucHV0cy5hcHBlbmRDaGlsZChlZGl0RGF0ZSk7XG4gICAgY29uZmlybUJ0bnMuYXBwZW5kQ2hpbGQoY29uZmlybUJ0bik7XG4gICAgY29uZmlybUJ0bnMuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcbiAgICB0YXNrRWRpdEZvcm0uYXBwZW5kQ2hpbGQoZWRpdElucHV0cyk7XG4gICAgdGFza0VkaXRGb3JtLmFwcGVuZENoaWxkKGNvbmZpcm1CdG5zKTtcblxuICAgIC8vIGFwcGVuZCB0YXNrLWVkaXQtZm9ybSB0byB0YXNrIGVsZW1lbnRcbiAgICBuZXdUYXNrLmFwcGVuZENoaWxkKHRhc2tFZGl0Rm9ybSk7XG5cbiAgICAvLyBhZGQgdG8gRE9NXG4gICAgdGFza3MuYXBwZW5kQ2hpbGQobmV3VGFzayk7XG5cbiAgICAvLyBldmVudCBsaXN0ZW5lciBmb3IgdGFzayBjb21wbGV0aW9uXG4gICAgY29tcGxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAvLyBjaGFuZ2UgdGFzayBpbnN0YW5jZSBpbiB0YXNrTW9kdWxlXG4gICAgICAgIHRhc2tNb2R1bGUudG9nZ2xlQ29tcGxldGUobmV3VGFzay5kYXRhc2V0Lm51bSk7XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgdGFzayBjb21wbGV0ZWQgYWxyZWFkeVxuICAgICAgICBpZiAoY29tcGxldGVkKSB7XG4gICAgICAgICAgICB1bmNvbXBsZXRlVGFzayhuZXdUYXNrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbXBsZXRlVGFzayhuZXdUYXNrKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gZXZlbnQgbGlzdGVuZXJzIGZvciBzaWRlIGljb25zXG4gICAgZWRpdEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkaXNwbGF5RWRpdChuZXdUYXNrKSk7XG4gICAgZGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRlbGV0ZVRhc2sobmV3VGFzaykpO1xuXG4gICAgLy8gZXZlbnQgbGlzdGVuZXJzIGZvciBlZGl0IGZvcm1cbiAgICBjb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc3VibWl0RWRpdChuZXdUYXNrKSk7XG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVzZXRFZGl0KG5ld1Rhc2spKTtcbiAgICAvLyBldmVudExpc3RlbmVycyBmb3IgZm9ybWF0dGluZyBvZiBkYXRlXG4gICAgZWRpdERhdGUuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgZSA9IGV2ZW50O1xuICAgICAgICBlLnRhcmdldC50eXBlID0gJ2RhdGUnO1xuICAgIH0pO1xuICAgIGVkaXREYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgZSA9IGV2ZW50O1xuICAgICAgICBlLnRhcmdldC50eXBlID0gJ3RleHQnO1xuICAgICAgICBpZiAoIWVkaXREYXRlLnZhbHVlKSB7XG4gICAgICAgICAgICBlZGl0RGF0ZS52YWx1ZSA9IHRhc2tNb2R1bGUuZ2V0RGF0ZVRvZGF5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBkYXRlID0gZWRpdERhdGUudmFsdWU7XG4gICAgICAgICAgICBlZGl0RGF0ZS52YWx1ZSA9IHRhc2tNb2R1bGUuZm9ybWF0RGF0ZShkYXRlKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjbGVhckNvbnRlbnQoKSB7XG4gICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKTtcbiAgICB0YXNrcy5pbm5lckhUTUwgPSAnJztcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ29udGVudCgpIHtcbiAgICBzZXRDdXJyZW50VGFza3MocHJvamVjdE1vZHVsZS5nZXRDdXJyZW50UHJvamVjdCgpKTtcbn1cblxuZnVuY3Rpb24gbGlua1NlbGVjdGVkKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQnKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUHJldmlvdXNIaWdobGlnaHQoKSB7XG4gICAgY29uc3QgaGlnaGxpZ2h0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQnKTtcbiAgICBpZiAoIWhpZ2hsaWdodGVkKSByZXR1cm47XG4gICAgaGlnaGxpZ2h0ZWQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0TGluayhsaW5rKSB7XG4gICAgcmVtb3ZlUHJldmlvdXNIaWdobGlnaHQoKTtcbiAgICAvLyBzd2l0Y2ggdG8gc2VsZWN0ZWQgbGlua1xuICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAvLyBjaGFuZ2UgcHJvamVjdCBjdXJyUHJvaiB0byBzZWxlY3RlZCBsaW5rJ3MgZGF0YW51bVxuICAgIHByb2plY3RNb2R1bGUuY2hhbmdlUHJvamVjdChsaW5rLmRhdGFzZXQubnVtKTtcbiAgICAvLyBjbGVhciBwcmV2aW91cyBjb250ZW50IG9mIHByb2plY3RcbiAgICBjbGVhckNvbnRlbnQoKTtcbiAgICAvLyB1cGRhdGUgY29udGVudCB3aXRoIGN1cnJQcm9qJ3MgdGFza3NcbiAgICB1cGRhdGVDb250ZW50KCk7XG59XG5cbmZ1bmN0aW9uIHNhbWVMaW5rKGxpbmspIHtcbiAgICByZXR1cm4gKGxpbmtTZWxlY3RlZCgpID09PSBsaW5rKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tMaW5rKGUpIHtcbiAgICBjb25zdCBsaW5rID0gZS50YXJnZXQ7XG4gICAgLy8gY2hlY2sgaWYgc2FtZSBsaW5rIGFzIHNlbGVjdGVkXG4gICAgaWYgKHNhbWVMaW5rKGxpbmspKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBpZiBkYXkgb3Igd2VlayB0YWJzIHNlbGVjdGVkXG4gICAgaWYgKGxpbmsgPT09IGRheVRhYiB8fCBsaW5rID09PSB3ZWVrVGFiKSB7XG4gICAgICAgIHJlbW92ZVByZXZpb3VzSGlnaGxpZ2h0KCk7XG4gICAgICAgIGNsZWFyQ29udGVudCgpO1xuICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgIGlmIChsaW5rID09PSBkYXlUYWIpIHtcbiAgICAgICAgICAgIHByb2plY3RNb2R1bGUuY2hhbmdlUHJvamVjdCgxKTtcbiAgICAgICAgICAgIC8vIGdldCB0YXNrcyB0aGF0IGNvaW5jaWRlIHdpdGggZGF0ZSB0b2RheVxuICAgICAgICAgICAgY29uc3QgdGFza3MgPSB0YXNrTW9kdWxlLmdldFRhc2tzVG9kYXkodGFza01vZHVsZS5nZXREYXRlVG9kYXkoKSk7XG4gICAgICAgICAgICBzaG93Q3VycmVudFRhc2tzKHRhc2tzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb2plY3RNb2R1bGUuY2hhbmdlUHJvamVjdCgyKTtcbiAgICAgICAgICAgIC8vIGdldCB0YXNrcyB0aGF0IGNvaW5jaWRlIHdpdGggNyBkYXlzIGFoZWFkLCBpbmNsdWRpbmcgdG9kYXlcbiAgICAgICAgICAgIGNvbnN0IHRhc2tzID0gdGFza01vZHVsZS5nZXRXZWVrVGFza3ModGFza01vZHVsZS5nZXRXZWVrKCkpO1xuICAgICAgICAgICAgc2hvd0N1cnJlbnRUYXNrcyh0YXNrcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobGluay5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhLXRyYXNoLWFsdCcpKSB7XG4gICAgICAgIC8vIGlnbm9yZSBkZWxldGUgYnV0dG9uIGVsZW1lbnRcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZWxlY3RMaW5rKGxpbmspO1xufVxuXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0TGluayhsaW5rVG9SZW1vdmUsIG51bSkge1xuICAgIGxpbmtUb1JlbW92ZS5yZW1vdmUoKTtcbiAgICBjbGVhckNvbnRlbnQoKTtcbiAgICAvLyB1cGRhdGUgcHJvamVjdEFycmF5XG4gICAgdGFza01vZHVsZS5kZWxldGVQcm9qZWN0VGFza3MobnVtKTtcbiAgICBwcm9qZWN0TW9kdWxlLmRlbGV0ZVByb2oobnVtKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlUHJvamVjdE51bXMoZGF0YU51bSkge1xuICAgIGNvbnN0IHJlbWFpbmluZ1Byb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbnVtXScpO1xuICAgIC8vIGdldCBhcnJheSBmcm9tIHJlbWFpbmluZyBwcm9qZWN0IG5vZGVzXG4gICAgY29uc3QgcHJvamVjdHNBcnIgPSBBcnJheS5mcm9tKHJlbWFpbmluZ1Byb2plY3RzKTtcbiAgICAvLyBmaWx0ZXIgYXJyYXkgdG8gb25seSBpbmNsdWRlIHByb2plY3RzIGFmdGVyIGRlbGV0ZWQgcHJvamVjdFxuICAgIGNvbnN0IHByb2plY3RzVG9VcGRhdGUgPSBwcm9qZWN0c0Fyci5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QuZGF0YXNldC5udW0gPiBkYXRhTnVtKTtcbiAgICBwcm9qZWN0c1RvVXBkYXRlLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgY29uc3QgcCA9IHByb2plY3Q7XG4gICAgICAgIHAuZGF0YXNldC5udW0gLT0gMTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdExpbmsobGluaykge1xuICAgIGNvbnN0IGRhdGFOdW0gPSBsaW5rLmRhdGFzZXQubnVtO1xuICAgIC8vIHJlbW92ZSBodG1sIGVsZW1lbnRcbiAgICByZW1vdmVQcm9qZWN0TGluayhsaW5rLCBkYXRhTnVtKTtcbiAgICB1cGRhdGVQcm9qZWN0TnVtcyhkYXRhTnVtKTtcbn1cblxuZnVuY3Rpb24gY2FuY2VsRm9ybShlbGVtZW50MSwgZWxlbWVudDIpIHtcbiAgICBlbGVtZW50MS5yZXNldCgpO1xuICAgIHRvZ2dsZUZvcm0oZWxlbWVudDEsIGVsZW1lbnQyKTtcbn1cblxuZnVuY3Rpb24gcHJvamVjdEV4aXN0cyhwcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IHByb2pBcnJheSA9IHByb2plY3RNb2R1bGUuZ2V0UHJvamVjdEFycmF5KCk7XG4gICAgcmV0dXJuIChwcm9qQXJyYXkubWFwKChwcm9qZWN0KSA9PiBwcm9qZWN0LnRpdGxlKS5pbmNsdWRlcyhwcm9qZWN0TmFtZSkpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgcHJvamVjdE1vZHVsZS5hZGROZXdQcm9qZWN0KHByb2plY3ROYW1lKTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdExpbmsocHJvamVjdE5hbWUsIGRhdGFOdW0pIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xuXG4gICAgLy8gY3JlYXRlIG5ldyBsaXN0IGVsZW1lbnQsIHNldCBkYXRhc2V0IGxpbmsgdG8gcHJvamVjdChjb3VudCk7XG4gICAgY29uc3QgbmV3TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbmV3TGluay5jbGFzc05hbWUgPSAnc2VsZWN0aW9uIHByb2plY3QgdGFiJztcbiAgICBpZiAoZGF0YU51bSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG5ld0xpbmsuZGF0YXNldC5udW0gPSBwcm9qZWN0TW9kdWxlLm51bU9mUHJvamVjdHMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBuZXdMaW5rLmRhdGFzZXQubnVtID0gZGF0YU51bTtcbiAgICB9XG5cbiAgICAvLyBjcmVhdGUgaWNvblxuICAgIGNvbnN0IGxlZnRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGVmdFdyYXBwZXIuY2xhc3NOYW1lID0gJ3Byb2plY3QtaW5mbyc7XG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBpY29uLmNsYXNzTmFtZSA9ICdmYXIgZmEtbGlzdC1hbHQnO1xuICAgIC8vIGNyZWF0ZSBkZWZhdWx0IHByb2plY3QgbmFtZVxuICAgIGNvbnN0IHByb2pUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBwcm9qVGl0bGUuY2xhc3NOYW1lID0gJ3Byb2plY3QtdGl0bGUnO1xuICAgIHByb2pUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICAgIC8vIGNyZWF0ZSBkZWxldGUgYnV0dG9uIC0gdG8gYmUgc2hvd24gb25seSBvbiBob3ZlclxuICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZWxldGVJY29uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhciBmYS10cmFzaC1hbHRcIj48L2k+JztcbiAgICBkZWxldGVJY29uLmNsYXNzTmFtZSA9ICdwcm9qZWN0LWRlbGV0ZSc7XG5cbiAgICAvLyBhcHBlbmQgY2hpbGRyZW4gdG8gbGlua1xuICAgIGxlZnRXcmFwcGVyLmFwcGVuZENoaWxkKGljb24pO1xuICAgIGxlZnRXcmFwcGVyLmFwcGVuZENoaWxkKHByb2pUaXRsZSk7XG4gICAgbmV3TGluay5hcHBlbmRDaGlsZChsZWZ0V3JhcHBlcik7XG4gICAgbmV3TGluay5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcblxuICAgIC8vIGFwcGVuZCBsaW5rIHRvIHByb2plY3RcbiAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChuZXdMaW5rKTtcblxuICAgIG5ld0xpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja0xpbmspO1xuICAgIGRlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkZWxldGVQcm9qZWN0TGluayhuZXdMaW5rKSk7XG59XG5cbi8vIGV2ZW50IGxpc3RlbmVyIGZvciBjbGlja3Mgb24gcHJvamVjdCB0YWJzXG5saXN0SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrTGluaykpO1xuXG5jb25zdCBjb250ZW50TW9kdWxlID0ge1xuICAgIGFkZFRhc2tDZWxsLFxuICAgIGFkZFByb2plY3RMaW5rLFxuICAgIHByb2plY3RFeGlzdHMsXG4gICAgY2FuY2VsRm9ybSxcbiAgICBjcmVhdGVOZXdUYXNrLFxuICAgIGNyZWF0ZU5ld1Byb2plY3QsXG4gICAgdG9nZ2xlRm9ybSxcbiAgICB0b2dnbGVGb3JtRmxleCxcbiAgICBjaGVja0xpbmssXG4gICAgc2V0Q3VycmVudFRhc2tzLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29udGVudE1vZHVsZTtcbiIsImltcG9ydCBzdG9yYWdlTW9kdWxlIGZyb20gJy4vc3RvcmFnZSc7XG4vLyBGQUNUT1JZIEZVTkNUSU9OIEZPUiBQUk9KRUNUU1xuY29uc3QgQ3JlYXRlUHJvamVjdCA9ICh0aXRsZSkgPT4ge1xuICAgIC8vIGluaXRpYWxpc2UgcHJvamVjdCBhcnJheVxuICAgIGxldCBkYXRhTnVtO1xuXG4gICAgLy8gZnVuY3Rpb24gdG8gc2V0IHRpdGxlXG4gICAgZnVuY3Rpb24gc2V0VGl0bGUodCkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXREYXRhTnVtKG51bSkge1xuICAgICAgICB0aGlzLmRhdGFOdW0gPSBudW07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGUsIHNldFRpdGxlLCBkYXRhTnVtLCBzZXREYXRhTnVtLFxuICAgIH07XG59O1xuXG4vLyBvbiBpbml0aWFsIGxvYWQgb2Ygd2VicGFnZVxubGV0IGN1cnJQcm9qO1xubGV0IHByb2pBcnJheSA9IFtdO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50UHJvamVjdChwcm9qZWN0KSB7XG4gICAgY3VyclByb2ogPSBwcm9qZWN0O1xufVxuXG5mdW5jdGlvbiBzZXRQcm9qZWN0QXJyYXkoYXJyKSB7XG4gICAgcHJvakFycmF5ID0gYXJyO1xufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50UHJvamVjdCgpIHtcbiAgICByZXR1cm4gY3VyclByb2o7XG59XG5cbmZ1bmN0aW9uIGdldFByb2plY3RBcnJheSgpIHtcbiAgICByZXR1cm4gcHJvakFycmF5O1xufVxuXG5mdW5jdGlvbiBnZXRQcm9qZWN0KG51bSkge1xuICAgIHJldHVybiBwcm9qQXJyYXlbbnVtXTtcbn1cblxuZnVuY3Rpb24gc2F2ZUFycmF5KCkge1xuICAgIC8vIHNhdmUgYXJyYXkgdG8gc3RvcmFnZSAtIHVwZGF0ZSBzdG9yYWdlIHZhbHVlc1xuICAgIHN0b3JhZ2VNb2R1bGUuYWRkUHJvalRvU3RvcmFnZShwcm9qQXJyYXkpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVBcnJheShhcnIpIHtcbiAgICBzZXRQcm9qZWN0QXJyYXkoYXJyKTtcbiAgICBzYXZlQXJyYXkoKTtcbn1cblxuZnVuY3Rpb24gYWRkVG9BcnJheShwcm9qKSB7XG4gICAgcHJvakFycmF5LnB1c2gocHJvaik7XG4gICAgdXBkYXRlQXJyYXkocHJvakFycmF5KTtcbn1cblxuLy8gc3dpdGNoIHByb2plY3RzIHRvIHNlbGVjdGVkIGZyb20gVUlcbmZ1bmN0aW9uIGNoYW5nZVByb2plY3QoZGF0YU51bSkge1xuICAgIGN1cnJQcm9qID0gcHJvakFycmF5W2RhdGFOdW1dO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qKG51bSkge1xuICAgIC8vIHNwbGl0IGFycmF5IGludG8gdHdvLCByZW1vdmluZyBhZmZlY3RpbmcgZWxlbWVudFxuICAgIGNvbnN0IGZpcnN0SGFsZkFycmF5ID0gcHJvakFycmF5LnNsaWNlKDAsIG51bSk7XG4gICAgY29uc3Qgc2Vjb25kSGFsZkFycmF5ID0gcHJvakFycmF5LnNsaWNlKHBhcnNlSW50KG51bSwgMTApICsgMSk7XG4gICAgLy8gdXBkYXRlIGRhdGFOdW0gb2YgcmVtYWluaW5nIHRhYnNcbiAgICBzZWNvbmRIYWxmQXJyYXkuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICBlLmRhdGFOdW0gLT0gMTtcbiAgICB9KTtcblxuICAgIC8vIGFzc2lnbiBhcnJheSBiYWNrIHRvIG9yaWdpbmFsIHByb2pBcnJheVxuICAgIGNvbnN0IHRlbXBBcnJheSA9IGZpcnN0SGFsZkFycmF5LmNvbmNhdChzZWNvbmRIYWxmQXJyYXkpO1xuICAgIHVwZGF0ZUFycmF5KHRlbXBBcnJheSk7XG59XG5cbi8vIEFERCBQUk9KRUNUIC8gc2F2ZSB0byBzdG9yYWdlXG5mdW5jdGlvbiBhZGROZXdQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgLy8gY3JlYXRlIG5ldyBpbnN0YW5jZSBvZiBwcm9qZWN0XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IENyZWF0ZVByb2plY3QocHJvamVjdE5hbWUpO1xuICAgIG5ld1Byb2plY3QuZGF0YU51bSA9IHByb2pBcnJheS5sZW5ndGg7XG4gICAgYWRkVG9BcnJheShuZXdQcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gbnVtT2ZQcm9qZWN0cygpIHtcbiAgICByZXR1cm4gcHJvakFycmF5Lmxlbmd0aDtcbn1cblxuY29uc3QgcHJvamVjdE1vZHVsZSA9IHtcbiAgICBDcmVhdGVQcm9qZWN0LFxuICAgIGFkZE5ld1Byb2plY3QsXG4gICAgY2hhbmdlUHJvamVjdCxcbiAgICBudW1PZlByb2plY3RzLFxuICAgIGdldEN1cnJlbnRQcm9qZWN0LFxuICAgIHNldEN1cnJlbnRQcm9qZWN0LFxuICAgIGdldFByb2plY3RBcnJheSxcbiAgICBzZXRQcm9qZWN0QXJyYXksXG4gICAgZ2V0UHJvamVjdCxcbiAgICBkZWxldGVQcm9qLFxuICAgIGFkZFRvQXJyYXksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0TW9kdWxlO1xuIiwiZnVuY3Rpb24gZ2V0UHJvamVjdHMoKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oMCkpO1xufVxuXG4vLyBjaGVjayBpZiBsb2NhbFN0b3JhZ2UgaGFzIGl0ZW1zXG5mdW5jdGlvbiBoYXNQcm9qZWN0cygpIHtcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlWzBdO1xufVxuXG5mdW5jdGlvbiBoYXNUYXNrcygpIHtcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlWzFdO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qVG9TdG9yYWdlKHByb2plY3RBcnJheSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKDAsIEpTT04uc3RyaW5naWZ5KHByb2plY3RBcnJheSkpO1xufVxuXG5mdW5jdGlvbiBnZXRUYXNrcygpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgxKSk7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2tUb1N0b3JhZ2UodGFza0FycmF5KSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oMSwgSlNPTi5zdHJpbmdpZnkodGFza0FycmF5KSk7XG59XG5cbmNvbnN0IHN0b3JhZ2UgPSB7XG4gICAgZ2V0UHJvamVjdHMsXG4gICAgaGFzUHJvamVjdHMsXG4gICAgYWRkUHJvalRvU3RvcmFnZSxcbiAgICBnZXRUYXNrcyxcbiAgICBoYXNUYXNrcyxcbiAgICBhZGRUYXNrVG9TdG9yYWdlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmFnZTtcbiIsImltcG9ydCBzdG9yYWdlTW9kdWxlIGZyb20gJy4vc3RvcmFnZSc7XG5cbi8vIEZBQ1RPUlkgRlVOQ1RJT04gRk9SIFRBU0tTXG5jb25zdCBDcmVhdGVUYXNrID0gKHRpdGxlLCBkdWUsIGNvbXBsZXRlZCkgPT4ge1xuICAgIGxldCBwcm9qZWN0O1xuICAgIGxldCBkYXRhTnVtO1xuICAgIC8vIGNoYW5nZSB0aXRsZSwgZmxhZyBvciBkYXRlXG4gICAgZnVuY3Rpb24gc2V0VGl0bGUodCkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXREdWUoZGF0ZSkge1xuICAgICAgICB0aGlzLmR1ZSA9IGRhdGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGUsIGR1ZSwgcHJvamVjdCwgY29tcGxldGVkLCBkYXRhTnVtLCBzZXRUaXRsZSwgc2V0RHVlLFxuICAgIH07XG59O1xuXG5sZXQgdGFza0FycmF5ID0gW107XG5sZXQgY3VycmVudFByb2pUYXNrcyA9IFtdO1xuXG5mdW5jdGlvbiBzYXZlQXJyYXkoKSB7XG4gICAgc3RvcmFnZU1vZHVsZS5hZGRUYXNrVG9TdG9yYWdlKHRhc2tBcnJheSk7XG59XG5cbmZ1bmN0aW9uIGdldFRhc2tBcnJheSgpIHtcbiAgICByZXR1cm4gdGFza0FycmF5O1xufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50UHJvalRhc2tzKCkge1xuICAgIHJldHVybiBjdXJyZW50UHJvalRhc2tzO1xufVxuXG5mdW5jdGlvbiBzZXRUYXNrQXJyYXkoYXJyKSB7XG4gICAgdGFza0FycmF5ID0gYXJyO1xufVxuXG5mdW5jdGlvbiBzZXRDdXJyZW50UHJvalRhc2tzKGFycikge1xuICAgIGN1cnJlbnRQcm9qVGFza3MgPSBhcnI7XG59XG5cbmZ1bmN0aW9uIGZpbGxTaW5nbGVOdW0obnVtKSB7XG4gICAgaWYgKG51bSA8IDEwKSB7XG4gICAgICAgIHJldHVybiBgMCR7bnVtfWA7XG4gICAgfVxuICAgIHJldHVybiBudW07XG59XG5cbmZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlXG4gICAgICAgIC5zcGxpdCgnLScpXG4gICAgICAgIC5yZXZlcnNlKClcbiAgICAgICAgLmpvaW4oJy8nKTtcbn1cblxuZnVuY3Rpb24gZ2V0RGF0ZVRvZGF5KCkge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIHJldHVybiBmb3JtYXREYXRlKGAke2RhdGUuZ2V0RnVsbFllYXIoKX0tJHtmaWxsU2luZ2xlTnVtKGRhdGUuZ2V0TW9udGgoKSArIDEpfS0ke2ZpbGxTaW5nbGVOdW0oZGF0ZS5nZXREYXRlKCkpfWApO1xufVxuXG5mdW5jdGlvbiBnZXRXZWVrKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBkLnNldERhdGUoZC5nZXREYXRlKCkgKyBpKTtcbiAgICAgICAgcmVzdWx0LnB1c2goZm9ybWF0RGF0ZShgJHtkLmdldEZ1bGxZZWFyKCl9LSR7ZmlsbFNpbmdsZU51bShkLmdldE1vbnRoKCkgKyAxKX0tJHtmaWxsU2luZ2xlTnVtKGQuZ2V0RGF0ZSgpKX1gKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlQ29tcGxldGUobnVtKSB7XG4gICAgLy8gc2V0IHRhc2sgY29tcGxldGVkIHRvIG9wcG9zaXRlIG9mIGl0c2VsZiwgaWRlbnRpZmllZCB3aXRoIGRhdGFOdW0gZnJvbSBVSVxuICAgIHRhc2tBcnJheVtudW1dLmNvbXBsZXRlZCA9ICF0YXNrQXJyYXlbbnVtXS5jb21wbGV0ZWQ7XG4gICAgc2F2ZUFycmF5KCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRhc2tJbmZvKG51bSwgbmV3VGl0bGUsIG5ld0R1ZSkge1xuICAgIGNvbnN0IHRhc2tUb0JlRWRpdGVkID0gdGFza0FycmF5W251bV07XG4gICAgdGFza1RvQmVFZGl0ZWQudGl0bGUgPSBuZXdUaXRsZTtcbiAgICB0YXNrVG9CZUVkaXRlZC5kdWUgPSBuZXdEdWU7XG5cbiAgICBzYXZlQXJyYXkoKTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFza3NUb2RheShkYXRlID0gZ2V0RGF0ZVRvZGF5KCkpIHtcbiAgICBjdXJyZW50UHJvalRhc2tzID0gdGFza0FycmF5LmZpbHRlcigodGFzaykgPT4gdGFzay5kdWUgPT09IGRhdGUpO1xuICAgIC8vIHNob3cgZmlsdGVyZWQgYXJyYXlcbiAgICByZXR1cm4gY3VycmVudFByb2pUYXNrcztcbn1cblxuZnVuY3Rpb24gZ2V0V2Vla1Rhc2tzKGRhdGVSYW5nZSA9IGdldFdlZWsoKSkge1xuICAgIGxldCB0b3RhbFRhc2tzID0gW107XG4gICAgZGF0ZVJhbmdlLmZvckVhY2goKGRhdGUpID0+IHtcbiAgICAgICAgY29uc3QgZGF0ZVNlbGVjdGVkID0gZGF0ZTtcbiAgICAgICAgY29uc3QgZGF5QXJyYXkgPSB0YXNrQXJyYXkuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmR1ZSA9PT0gZGF0ZVNlbGVjdGVkKTtcbiAgICAgICAgdG90YWxUYXNrcyA9IHRvdGFsVGFza3MuY29uY2F0KGRheUFycmF5KTtcbiAgICB9KTtcbiAgICBjdXJyZW50UHJvalRhc2tzID0gdG90YWxUYXNrcztcbiAgICByZXR1cm4gY3VycmVudFByb2pUYXNrcztcbn1cblxuZnVuY3Rpb24gbnVtT2ZUYXNrcygpIHtcbiAgICByZXR1cm4gdGFza0FycmF5Lmxlbmd0aDtcbn1cblxuZnVuY3Rpb24gYWRkVG9BcnJheSh0YXNrKSB7XG4gICAgdGFza0FycmF5LnB1c2godGFzayk7XG4gICAgc2F2ZUFycmF5KCk7XG59XG5cbmZ1bmN0aW9uIGFkZE5ld1Rhc2sodGFza05hbWUsIHByb2plY3QpIHtcbiAgICAvLyBuZXcgaW5zdGFuY2UgZnJvbSB0YXNrIGZhY3RvcnlcbiAgICBjb25zdCBuZXdUYXNrID0gQ3JlYXRlVGFzayh0YXNrTmFtZSk7XG4gICAgLy8gdXBkYXRlIGRhdGFOdW1cbiAgICBuZXdUYXNrLmRhdGFOdW0gPSB0YXNrQXJyYXkubGVuZ3RoO1xuICAgIG5ld1Rhc2suZHVlID0gZ2V0RGF0ZVRvZGF5KCk7XG4gICAgLy8gdXBkYXRlIGxpbmtpbmcgcHJvamVjdFxuICAgIG5ld1Rhc2sucHJvamVjdCA9IHByb2plY3QudGl0bGU7XG4gICAgLy8gYWRkIHRvIHRhc2sgYXJyYXlcbiAgICBhZGRUb0FycmF5KG5ld1Rhc2spO1xufVxuXG5mdW5jdGlvbiBkZWxldGVUYXNrKG51bSkge1xuICAgIC8vIHNwbGl0IGFycmF5IGludG8gdHdvLCByZW1vdmluZyBhZmZlY3RpbmcgZWxlbWVudFxuICAgIGNvbnN0IGZpcnN0SGFsZkFycmF5ID0gdGFza0FycmF5LnNsaWNlKDAsIG51bSk7XG4gICAgY29uc3Qgc2Vjb25kSGFsZkFycmF5ID0gdGFza0FycmF5LnNsaWNlKHBhcnNlSW50KG51bSwgMTApICsgMSk7XG4gICAgLy8gdXBkYXRlIGRhdGFOdW0gb2YgcmVtYWluaW5nIHRhYnNcbiAgICBzZWNvbmRIYWxmQXJyYXkuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICBlLmRhdGFOdW0gLT0gMTtcbiAgICB9KTtcblxuICAgIC8vIGFzc2lnbiBhcnJheSBiYWNrIHRvIG9yaWdpbmFsIHByb2pBcnJheVxuICAgIHRhc2tBcnJheSA9IGZpcnN0SGFsZkFycmF5LmNvbmNhdChzZWNvbmRIYWxmQXJyYXkpO1xuICAgIHNhdmVBcnJheSgpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0VGFza3MobnVtKSB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBzdG9yYWdlTW9kdWxlLmdldFByb2plY3RzKCk7XG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzW251bV07XG4gICAgY29uc3QgeyB0aXRsZSB9ID0gcHJvamVjdDtcbiAgICB0YXNrQXJyYXkuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICBpZiAodGFzay5wcm9qZWN0ID09PSB0aXRsZSkge1xuICAgICAgICAgICAgZGVsZXRlVGFzayh0YXNrLmRhdGFOdW0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmNvbnN0IHRhc2sgPSB7XG4gICAgQ3JlYXRlVGFzayxcbiAgICBhZGROZXdUYXNrLFxuICAgIG51bU9mVGFza3MsXG4gICAgdG9nZ2xlQ29tcGxldGUsXG4gICAgdXBkYXRlVGFza0luZm8sXG4gICAgZGVsZXRlVGFzayxcbiAgICBnZXRUYXNrc1RvZGF5LFxuICAgIGdldFdlZWtUYXNrcyxcbiAgICBnZXRDdXJyZW50UHJvalRhc2tzLFxuICAgIGdldFRhc2tBcnJheSxcbiAgICBnZXREYXRlVG9kYXksXG4gICAgZ2V0V2VlayxcbiAgICBmb3JtYXREYXRlLFxuICAgIGRlbGV0ZVByb2plY3RUYXNrcyxcbiAgICBzZXRUYXNrQXJyYXksXG4gICAgc2V0Q3VycmVudFByb2pUYXNrcyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRhc2s7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCBjb250ZW50TW9kdWxlIGZyb20gJy4vbW9kdWxlcy9jb250ZW50JztcbmltcG9ydCBVSU1vZHVsZSBmcm9tICcuL21vZHVsZXMvVUknO1xuaW1wb3J0IHByb2plY3RNb2R1bGUgZnJvbSAnLi9tb2R1bGVzL3Byb2plY3QnO1xuaW1wb3J0IHRhc2tNb2R1bGUgZnJvbSAnLi9tb2R1bGVzL3Rhc2snO1xuaW1wb3J0IHN0b3JhZ2VNb2R1bGUgZnJvbSAnLi9tb2R1bGVzL3N0b3JhZ2UnO1xuXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbiJdLCJzb3VyY2VSb290IjoiIn0=