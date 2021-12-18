"use strict";
exports.__esModule = true;
var React = require("react");
var Mine_1 = require("./Mine");
var react_1 = require("react");
var MineTr_1 = require("./MineTr");
var Table = function () {
    var tableData = (0, react_1.useContext)(Mine_1.TableContext).tableData;
    return (React.createElement("table", null, Array(tableData.length).fill(null).map(function (tr, i) { return React.createElement(MineTr_1["default"], { rowIndex: i }); })));
};
exports["default"] = Table;
