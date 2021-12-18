"use strict";
exports.__esModule = true;
var React = require("react");
var Try = function (_a) {
    var tryInfo = _a.tryInfo;
    return (React.createElement("li", null,
        React.createElement("div", null, tryInfo["try"]),
        React.createElement("div", null, tryInfo.result)));
};
exports["default"] = Try;
