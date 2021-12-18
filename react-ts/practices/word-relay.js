"use strict";
exports.__esModule = true;
var React = require("react");
var react_1 = require("react");
var WordRelay = function () {
    var _a = (0, react_1.useState)("나무"), word = _a[0], setWord = _a[1];
    var _b = (0, react_1.useState)(""), value = _b[0], setValue = _b[1];
    var _c = (0, react_1.useState)(""), result = _c[0], setResult = _c[1];
    var inputEl = (0, react_1.useRef)(null);
    var onChangeWord = (0, react_1.useCallback)(function (e) {
        setValue(e.currentTarget.value);
    }, []);
    var onSubmitForm = (0, react_1.useCallback)(function (e) {
        e.preventDefault();
        var input = inputEl.current;
        if (word[word.length - 1] === value[0] && !value.split("").find(function (e) { return e === " "; })) {
            setResult('딩동댕');
            setWord(value);
            setValue("");
            if (input) {
                input.focus();
            }
        }
        else if (value.split("").find(function (e) { return e === " "; })) {
            setResult("띄어쓰기는 제외하고 해주세요");
            setValue("");
            if (input) {
                input.focus();
            }
        }
        else {
            setResult("땡");
            setValue("");
            if (input) {
                input.focus();
            }
        }
    }, [value]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", null, word),
        React.createElement("form", { onSubmit: onSubmitForm },
            React.createElement("input", { ref: inputEl, value: value, onChange: onChangeWord }),
            React.createElement("button", null, "\uC785\uB825!")),
        React.createElement("div", null, result)));
};
exports["default"] = WordRelay;
