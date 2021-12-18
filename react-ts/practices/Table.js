"use strict";
exports.__esModule = true;
var React = require("react");
var react_1 = require("react");
var Tr_1 = require("./Tr");
var Table = function (_a) {
    var tableData = _a.tableData, dispatch = _a.dispatch;
    return (React.createElement("table", null, Array(tableData.length).fill(null).map(function (tr, i) { return ((0, react_1.useMemo)(function () { return React.createElement(Tr_1["default"], { key: i, dispatch: dispatch, rowIndex: i, rowData: tableData[i] }); }, [tableData[i]])); })));
};
exports["default"] = Table;
