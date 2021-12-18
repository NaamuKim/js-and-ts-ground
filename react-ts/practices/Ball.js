"use strict";
exports.__esModule = true;
var React = require("react");
var react_1 = require("react");
var Ball = (0, react_1.memo)(function (_a) {
    var number = _a.number;
    var background;
    if (number <= 10) {
        background = 'red';
    }
    else if (number <= 20) {
        background = 'orange';
    }
    else if (number <= 30) {
        background = 'yellow';
    }
    else if (number <= 40) {
        background = 'blue';
    }
    else {
        background = 'green';
    }
    return (React.createElement("div", { className: "ball", style: { background: background } }, number));
});
exports["default"] = React.memo(Ball);
