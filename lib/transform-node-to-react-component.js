"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var transformNodeToReactComponent = function transformNodeToReactComponent(node) {
  if (!node) return null;

  switch (node.name) {
    /* ----------------- div ----------------- */
    // case 'div':
    //   break

    /* ----------------- blockquote----------------- */
    case 'blockquote':
      return {
        name: 'blockquote',
        children: node.children[0].children[0].data
        /* ----------------- p ----------------- */

      };

    case 'p':
      return {
        name: 'p',
        children: node.children[0].data
        /* ----------------- figure----------------- */

      };

    case 'figure':
      /* ----------------- img ----------------- */
      if (node.children[0].name === 'img') {
        var _node$children = _slicedToArray(node.children, 1),
            _node$children$0$attr = _node$children[0].attribs,
            src = _node$children$0$attr.src,
            alt = _node$children$0$attr.alt;

        var caption;

        if (node.children.length === 2) {
          var _node$children2 = _slicedToArray(node.children, 2),
              _node$children2$1$chi = _slicedToArray(_node$children2[1].children, 1),
              data = _node$children2$1$chi[0].data;

          caption = data;
        }

        return {
          name: 'img',
          children: (0, _core.jsx)(_react.Fragment, null, (0, _core.jsx)("img", {
            src: src,
            alt: alt
          }), (0, _core.jsx)("figcaption", null, caption))
        };
      }
      /* ----------------- youtube embed----------------- */


      if (node.name === 'figure' && node.attribs["class"].includes('wp-block-embed-youtube')) {
        var _node$children3 = _slicedToArray(node.children, 1),
            _node$children3$0$chi = _slicedToArray(_node$children3[0].children, 2),
            _node$children3$0$chi2 = _node$children3$0$chi[1].attribs,
            title = _node$children3$0$chi2.title,
            _src = _node$children3$0$chi2.src;

        return {
          name: 'youtube',
          children: (0, _core.jsx)("iframe", {
            src: _src,
            name: title
          })
        };
      }

      return null;

    default:
      return null;
  }
};

var _default = transformNodeToReactComponent;
exports["default"] = _default;