"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Home_tsx"],{

/***/ "./resources/js/Pages/Home.tsx":
/*!*************************************!*\
  !*** ./resources/js/Pages/Home.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var layouts_1 = __importDefault(__webpack_require__(/*! ../components/layouts */ "./resources/js/components/layouts/index.tsx"));

var Home = function Home() {
  var foo = "React";
  var bar = "TypeScript";
  return react_1["default"].createElement(layouts_1["default"], {
    title: 'Welcome to my home page',
    children: 'From the home page'
  });
};

exports["default"] = Home;

/***/ }),

/***/ "./resources/js/components/layouts/index.tsx":
/*!***************************************************!*\
  !*** ./resources/js/components/layouts/index.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var Layout = function Layout(props) {
  var title = props.title,
      children = props.children;
  return react_1["default"].createElement("div", {
    className: "container"
  }, title && react_1["default"].createElement("div", {
    className: "row"
  }, react_1["default"].createElement("div", {
    className: "col-sm-12"
  }, react_1["default"].createElement("h1", null, title))), react_1["default"].createElement("div", {
    className: "row"
  }, react_1["default"].createElement("div", {
    className: "col-sm-12"
  }, children)));
};

exports["default"] = Layout;

/***/ })

}]);