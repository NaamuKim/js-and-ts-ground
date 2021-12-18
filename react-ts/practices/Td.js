"use strict";
exports.__esModule = true;
var React = require("react");
var react_1 = require("react");
var TicTacToe_1 = require("./TicTacToe");
var Td = function (_a) {
    var rowIndex = _a.rowIndex, cellIndex = _a.cellIndex, dispatch = _a.dispatch, cellData = _a.cellData;
    var onClickTd = (0, react_1.useCallback)(function () {
        if (cellData) {
            return;
        }
        dispatch({ type: TicTacToe_1.CLICK_CELL, row: rowIndex, cell: cellIndex });
    }, [cellData]);
    return (React.createElement("td", { onClick: onClickTd }, cellData));
};
exports["default"] = Td;
