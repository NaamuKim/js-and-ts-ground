"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var React = require("react");
var react_1 = require("react");
var Response = function () {
    var _a = (0, react_1.useState)('waiting'), state = _a[0], setState = _a[1];
    var _b = (0, react_1.useState)('클릭해서 시작하세요.'), message = _b[0], setMessage = _b[1];
    var _c = (0, react_1.useState)([]), result = _c[0], setResult = _c[1];
    var timeout = (0, react_1.useRef)(null);
    var startTime = (0, react_1.useRef)(0);
    var endTime = (0, react_1.useRef)(0);
    var onClickScreen = (0, react_1.useCallback)(function () {
        if (state === 'waiting') {
            timeout.current = window.setTimeout(function () {
                setState('now');
                setMessage('지금 클릭');
                startTime.current = new Date().getTime();
            }, Math.floor(Math.random() * 1000) + 2000);
            setState('ready');
            setMessage('초록색이 되면 클릭하세용~');
        }
        else if (state === 'ready') {
            if (timeout.current) {
                clearTimeout(timeout.current);
            }
            setState('waiting');
            setMessage('초록색이 된 후에 클릭하시겠어요?');
        }
        else if (state === 'now') {
            endTime.current = new Date().getTime();
            setState('waiting');
            setMessage('클릭해서 시작하세요.');
            setResult(function (prevResult) {
                return __spreadArray(__spreadArray([], prevResult, true), [endTime.current - startTime.current], false);
            });
        }
    }, [state]);
    var onReset = (0, react_1.useCallback)(function () {
        setResult([]);
    }, []);
    var renderAverage = function () {
        return (result.length === 0
            ? null
            : React.createElement(React.Fragment, null,
                React.createElement("div", null,
                    "\uD3C9\uADE0 \uC2DC\uAC04: ",
                    result.reduce(function (a, c) { return a + c; }) / result.length,
                    "ms"),
                React.createElement("button", { onClick: onReset }, "\uB9AC\uC14B~")));
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { id: "screen", className: state, onClick: onClickScreen }, message),
        renderAverage));
};
exports["default"] = Response;
