"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var react_1 = require("react");
var Ball = /** @class */ (function (_super) {
    __extends(Ball, _super);
    function Ball() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ball.prototype.render = function () {
        var number = this.props.number;
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
    };
    return Ball;
}(react_1.Component));
exports["default"] = Ball;
