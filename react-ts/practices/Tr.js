"use strict";
exports.__esModule = true;
var React = require("react");
var react_1 = require("react");
var Td_1 = require("./Td");
var Tr = function (_a) {
    var rowData = _a.rowData, rowIndex = _a.rowIndex, dispatch = _a.dispatch;
    return (React.createElement("tr", null, Array(rowData.length).fill(null).map(function (td, i) { return ((0, react_1.useMemo)(function () { return React.createElement(Td_1["default"], { key: i, dispatch: dispatch, rowIndex: rowIndex, cellIndex: i, cellData: rowData[i] }, ''); }, [rowData[i]])); })));
};
exports["default"] = Tr;
