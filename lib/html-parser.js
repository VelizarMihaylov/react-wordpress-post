"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _htmlparser220kb = require("htmlparser2-20kb");

var htmlParser = function htmlParser(rawHtml) {
  var handler = new _htmlparser220kb.DomHandler(function (error, dom) {
    if (error) {
      throw Error('Error parsing HTML ', error);
    }
  });
  var parser = new _htmlparser220kb.Parser(handler);
  parser.write(rawHtml);
  parser.end();
  var dom = handler.dom;
  var nodes = dom.filter(function (node) {
    return node.children;
  }).map(function (element) {
    return element;
  });
  return nodes;
};

var _default = htmlParser;
exports["default"] = _default;