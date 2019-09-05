"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

var _htmlParser = _interopRequireDefault(require("./html-parser"));

var _transformNodeToReactComponent = _interopRequireDefault(require("./transform-node-to-react-component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var transformWordpressPostDefinition = function transformWordpressPostDefinition(htmlParser) {
  return function () {
    var html = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var override = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var extend = arguments.length > 2 ? arguments[2] : undefined;
    return htmlParser(html).map(function (node, index) {
      if (!node || _typeof(node) !== 'object') throw Error("Please provide a valid node to generateReactComponent.");
      if (_typeof(override) !== 'object') throw Error("Please provide a valid component list to generateReactComponent.");
      var componentList = {
        p: _objectSpread({
          type: 'p'
        }, override.p),
        blockquote: _objectSpread({
          type: 'blockquote',
          props: {}
        }, override.blockquote),
        img: _objectSpread({
          type: 'figure',
          props: {}
        }, override.img),
        youtube: _objectSpread({
          type: 'figure',
          props: {}
        }, override.youtube)
      };
      var component = (0, _transformNodeToReactComponent["default"])(node, index);

      if (component) {
        var name = component.name,
            children = component.children;
        var _componentList$name = componentList[name],
            type = _componentList$name.type,
            props = _componentList$name.props;
        console.log('Type', type);
        return (0, _core.jsx)(type, props, children);
      }

      return null;
    });
  };
};

var transformWordpressPost = transformWordpressPostDefinition(_htmlParser["default"]);
var _default = transformWordpressPost;
exports["default"] = _default;