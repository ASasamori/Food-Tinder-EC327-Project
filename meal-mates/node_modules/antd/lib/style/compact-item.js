"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.genCompactItemStyle = genCompactItemStyle;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends4 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
// handle border collapse
function compactItemBorder(token, borderedItemCls, popoverFocusedCls) {
  var childCombinator = borderedItemCls ? '> *' : '';
  return {
    '&-item:not(&-last-item)': {
      marginInlineEnd: -token.lineWidth
    },
    '&-item': (0, _extends4["default"])((0, _extends4["default"])((0, _defineProperty2["default"])({}, "&:hover " + childCombinator + ", &:focus " + childCombinator + ", &:active " + childCombinator, {
      zIndex: 2
    }), popoverFocusedCls ? (0, _defineProperty2["default"])({}, "&" + popoverFocusedCls, {
      zIndex: 2
    }) : {}), (0, _defineProperty2["default"])({}, "&[disabled] " + childCombinator, {
      zIndex: 0
    }))
  };
}
// handle border-radius
function compactItemBorderRadius(prefixCls, borderedElementCls) {
  var _ref2;
  var childCombinator = borderedElementCls ? "> " + borderedElementCls : '';
  return _ref2 = {}, (0, _defineProperty2["default"])(_ref2, "&-item:not(&-first-item):not(&-last-item) " + childCombinator, {
    borderRadius: 0
  }), (0, _defineProperty2["default"])(_ref2, '&-item:not(&-last-item)&-first-item', (0, _defineProperty2["default"])({}, "& " + childCombinator + ", &" + prefixCls + "-sm " + childCombinator + ", &" + prefixCls + "-lg " + childCombinator, {
    borderStartEndRadius: 0,
    borderEndEndRadius: 0
  })), (0, _defineProperty2["default"])(_ref2, '&-item:not(&-first-item)&-last-item', (0, _defineProperty2["default"])({}, "& " + childCombinator + ", &" + prefixCls + "-sm " + childCombinator + ", &" + prefixCls + "-lg " + childCombinator, {
    borderStartStartRadius: 0,
    borderEndStartRadius: 0
  })), _ref2;
}
function genCompactItemStyle(token, prefixCls, /** Some component borders are implemented on child elements like `Select` */
borderedElementCls,
/**
 * Some components have special `focus` className especially with popovers like `Select` and
 * `DatePicker`
 */
popoverFocusedCls) {
  return {
    '&-compact': (0, _extends4["default"])((0, _extends4["default"])({}, compactItemBorder(token, borderedElementCls, popoverFocusedCls)), compactItemBorderRadius(prefixCls, borderedElementCls))
  };
}