"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _genControlHeight = _interopRequireDefault(require("../shared/genControlHeight"));
var _default2 = _interopRequireDefault(require("../default"));
var _genCompactSizeMapToken = _interopRequireDefault(require("./genCompactSizeMapToken"));
var _genFontSizes = _interopRequireDefault(require("../shared/genFontSizes"));
var derivative = function derivative(token, mapToken) {
  var mergedMapToken = mapToken !== null && mapToken !== void 0 ? mapToken : (0, _default2["default"])(token);
  var fontSize = mergedMapToken.fontSizes[0]; // Smaller size font-size as base
  var fontSizes = (0, _genFontSizes["default"])(fontSize);
  var controlHeight = mergedMapToken.controlHeight - 4;
  return (0, _extends2["default"])((0, _extends2["default"])((0, _extends2["default"])((0, _extends2["default"])({}, mergedMapToken), (0, _genCompactSizeMapToken["default"])(mapToken !== null && mapToken !== void 0 ? mapToken : token)), {
    // font
    fontSizes: fontSizes.map(function (fs) {
      return fs.size;
    }),
    lineHeights: fontSizes.map(function (fs) {
      return fs.lineHeight;
    }),
    // controlHeight
    controlHeight: controlHeight
  }), (0, _genControlHeight["default"])((0, _extends2["default"])((0, _extends2["default"])({}, mergedMapToken), {
    controlHeight: controlHeight
  })));
};
var _default = derivative;
exports["default"] = _default;