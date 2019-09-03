"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

var _htmlParser = _interopRequireDefault(require("./html-parser"));

var _transformNodeToReactComponent = _interopRequireDefault(require("./transform-node-to-react-component"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var generateReactComponent = function generateReactComponent(React, transformNodeToReactComponent) {
  return function (node, componentList, index) {
    if (!node || _typeof(node) !== 'object') throw Error("Please provide a valid node to generateReactComponent.");
    if (!componentList || _typeof(componentList) !== 'object') throw Error("Please provide a valid component list to generateReactComponent.");

    var _ref = transformNodeToReactComponent(node) || {},
        name = _ref.name,
        children = _ref.children;

    if (name && children) {
      return (0, _core.jsx)("name", _extends({}, componentList[name].props, {
        children: children
      }));
    }

    return null;
  };
};

var transformWordpressPostDefinition = function transformWordpressPostDefinition(htmlParser) {
  return function () {
    var html = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var componentList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var defaultComponentList = {
      p: _objectSpread({
        type: 'p'
      }, componentList.p),
      blockquote: _objectSpread({
        type: 'blockquote',
        props: {}
      }, componentList.blockquote),
      img: _objectSpread({
        type: 'figure',
        props: {}
      }, componentList.img),
      youtube: _objectSpread({
        type: 'figure',
        props: {}
      }, componentList.youtube)
    };
    return htmlParser(html).map(function (node, index) {
      return generateReactComponent(_react["default"], _transformNodeToReactComponent["default"])(node, defaultComponentList, index);
    });
  };
};

var transformWordpressPost = transformWordpressPostDefinition(_htmlParser["default"]);
var _default = transformWordpressPost;
exports["default"] = _default;