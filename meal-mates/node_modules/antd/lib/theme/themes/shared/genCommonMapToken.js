"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = genCommonMapToken;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _genFontSizes = _interopRequireDefault(require("./genFontSizes"));
var _genRadius = _interopRequireDefault(require("./genRadius"));
function genCommonMapToken(token) {
  var motionUnit = token.motionUnit,
    motionBase = token.motionBase,
    fontSize = token.fontSize,
    borderRadius = token.borderRadius,
    lineWidth = token.lineWidth;
  var fontSizes = (0, _genFontSizes["default"])(fontSize);
  return (0, _extends2["default"])({
    // motion
    motionDurationFast: (motionBase + motionUnit).toFixed(1) + "s",
    motionDurationMid: (motionBase + motionUnit * 2).toFixed(1) + "s",
    motionDurationSlow: (motionBase + motionUnit * 3).toFixed(1) + "s",
    // font
    fontSizes: fontSizes.map(function (fs) {
      return fs.size;
    }),
    lineHeights: fontSizes.map(function (fs) {
      return fs.lineHeight;
    }),
    // line
    lineWidthBold: lineWidth + 1
  }, (0, _genRadius["default"])(borderRadius));
}