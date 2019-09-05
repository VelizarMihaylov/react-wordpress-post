"use strict";

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('transformWordpressPostDefinition', function () {
  var htmlParser = function htmlParser(html) {
    return html;
  };

  it('should return null if no matching node in the html', function () {
    var html = '<div>Some random div</div>';
    expect((0, _index["default"])(htmlParser)(html)).toBe(null);
  });
});