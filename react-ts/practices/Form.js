"use strict";
exports.__esModule = true;
var React = require("react");
var Mine_1 = require("./Mine");
var react_1 = require("react");
var mineaction_1 = require("./mineaction");
var Form = function () {
    var _a = (0, react_1.useState)(10), row = _a[0], setRow = _a[1];
    var _b = (0, react_1.useState)(10), cell = _b[0], setCell = _b[1];
    var _c = (0, react_1.useState)(20), mine = _c[0], setMine = _c[1];
    var dispatch = (0, react_1.useContext)(Mine_1.TableContext).dispatch;
    var onChangeRow = (0, react_1.useCallback)(function (e) {
        setRow(Number(e.target.value));
    }, []);
    var onChangeCell = (0, react_1.useCallback)(function (e) {
        setCell(Number(e.target.value));
    }, []);
    var onChangeMine = (0, react_1.useCallback)(function (e) {
        setMine(Number(e.target.value));
    }, []);
    var onClickBtn = (0, react_1.useCallback)(function () {
        dispatch((0, mineaction_1.startGame)(row, cell, mine));
    }, [row, cell, mine]);
    return (React.createElement("div", null,
        React.createElement("input", { type: "number", placeholder: "\uC138\uB85C", value: row, onChange: onChangeRow }),
        React.createElement("input", { type: "number", placeholder: "\uAC00\uB85C", value: cell, onChange: onChangeCell }),
        React.createElement("input", { type: "number", placeholder: "\uC9C0\uB8B0", value: mine, onChange: onChangeMine }),
        React.createElement("button", { onClick: onClickBtn }, "\uC2DC\uC791")));
};
exports["default"] = Form;
