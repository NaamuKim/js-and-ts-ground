"use strict";
exports.__esModule = true;
exports.getTdText = void 0;
var React = require("react");
var react_1 = require("react");
var Mine_1 = require("./Mine");
var mineaction_1 = require("./mineaction");
var getTdStyle = function (code) {
    switch (code) {
        case Mine_1.CODE.NORMAL:
        case Mine_1.CODE.MINE:
            return {
                background: '#444'
            };
        case Mine_1.CODE.CLICKED_MINE:
        case Mine_1.CODE.OPENED:
            return {
                background: 'white'
            };
        case Mine_1.CODE.QUESTION_MINE:
        case Mine_1.CODE.QUESTION:
            return {
                background: 'yellow'
            };
        case Mine_1.CODE.FLAG_MINE:
        case Mine_1.CODE.FLAG:
            return {
                background: 'red'
            };
        default:
            return {
                background: 'white'
            };
    }
};
var getTdText = function (code) {
    switch (code) {
        case Mine_1.CODE.NORMAL:
            return '';
        case Mine_1.CODE.MINE:
            return 'X';
        case Mine_1.CODE.CLICKED_MINE:
            return '팡';
        case Mine_1.CODE.FLAG_MINE:
        case Mine_1.CODE.FLAG:
            return '⛳';
        case Mine_1.CODE.QUESTION_MINE:
        case Mine_1.CODE.QUESTION:
            return '?';
        default:
            return code || '';
    }
};
exports.getTdText = getTdText;
var Td = function (_a) {
    var rowIndex = _a.rowIndex, cellIndex = _a.cellIndex;
    var _b = (0, react_1.useContext)(Mine_1.TableContext), tableData = _b.tableData, dispatch = _b.dispatch, halted = _b.halted;
    var onClickTd = (0, react_1.useCallback)(function () {
        if (halted) {
            return;
        }
        switch (tableData[rowIndex][cellIndex]) {
            case Mine_1.CODE.OPENED:
            case Mine_1.CODE.FLAG_MINE:
            case Mine_1.CODE.FLAG:
            case Mine_1.CODE.QUESTION_MINE:
            case Mine_1.CODE.QUESTION:
                return;
            case Mine_1.CODE.NORMAL:
                dispatch((0, mineaction_1.openCell)(rowIndex, cellIndex));
                return;
            case Mine_1.CODE.MINE:
                dispatch((0, mineaction_1.clickMine)(rowIndex, cellIndex));
                return;
            default:
                return;
        }
    }, [tableData[rowIndex][cellIndex], halted]);
    var onRightClickTd = (0, react_1.useCallback)(function (e) {
        e.preventDefault();
        if (halted) {
            return;
        }
        switch (tableData[rowIndex][cellIndex]) {
            case Mine_1.CODE.NORMAL:
            case Mine_1.CODE.MINE:
                dispatch((0, mineaction_1.flagMine)(rowIndex, cellIndex));
                return;
            case Mine_1.CODE.FLAG_MINE:
            case Mine_1.CODE.FLAG:
                dispatch((0, mineaction_1.questionCell)(rowIndex, cellIndex));
                return;
            case Mine_1.CODE.QUESTION_MINE:
            case Mine_1.CODE.QUESTION:
                dispatch((0, mineaction_1.normalizeCell)(rowIndex, cellIndex));
                return;
            default:
                return;
        }
    }, [tableData[rowIndex][cellIndex], halted]);
    return (React.createElement(RealTd, { onClickTd: onClickTd, onRightClickTd: onRightClickTd, data: tableData[rowIndex][cellIndex] }));
};
var RealTd = (0, react_1.memo)(function (_a) {
    var onClickTd = _a.onClickTd, onRightClickTd = _a.onRightClickTd, data = _a.data;
    return (React.createElement("td", { style: getTdStyle(data), onClick: onClickTd, onContextMenu: onRightClickTd }, (0, exports.getTdText)(data)));
});
exports["default"] = (0, react_1.memo)(Td);
