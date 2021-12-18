"use strict";
exports.__esModule = true;
var React = require("react");
var react_1 = require("react");
var Mine_1 = require("./Mine");
var MineTd_1 = require("./MineTd");
var Tr = (0, react_1.memo)(function (_a) {
    var rowIndex = _a.rowIndex;
    var tableData = (0, react_1.useContext)(Mine_1.TableContext).tableData;
    return (React.createElement("tr", null, tableData[0] && Array(tableData[0].length).fill(null).map(function (td, i) { return React.createElement(MineTd_1["default"], { rowIndex: rowIndex, cellIndex: i }); })));
});
exports["default"] = Tr;
