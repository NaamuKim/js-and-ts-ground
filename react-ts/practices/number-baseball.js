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
var Try_1 = require("./Try");
var getNumbers = function () {
    var candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var array = [];
    for (var i = 0; i < 4; i += 1) {
        var chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    return array;
};
var NumberBaseball = function () {
    var _a = (0, react_1.useState)(getNumbers()), answer = _a[0], setAnswer = _a[1];
    var _b = (0, react_1.useState)(''), value = _b[0], setValue = _b[1];
    var _c = (0, react_1.useState)(''), result = _c[0], setResult = _c[1];
    var _d = (0, react_1.useState)([]), tries = _d[0], setTries = _d[1];
    var inputEl = (0, react_1.useRef)(null);
    var onSubmitForm = (0, react_1.useCallback)(function (e) {
        e.preventDefault();
        var input = inputEl.current;
        if (value === answer.join('')) {
            setTries(function (t) { return (__spreadArray(__spreadArray([], t, true), [
                {
                    "try": value,
                    result: '홈런'
                }
            ], false)); });
            setResult('홈런');
            setValue('');
            setAnswer(getNumbers());
            setTries([]);
            if (input) {
                input.focus();
            }
        }
        else {
            var answerArray = value.split('').map(function (v) { return parseInt(v); });
            var strike_1 = 0;
            var ball_1 = 0;
            if (tries.length >= 9) {
                setResult("\uC2E4\uD328 \uB2F5\uC740 ".concat(answer.join(','), "\uC785\uB2C8\uB2E4!"));
                alert('다시 시작합니다');
                setValue('');
                setAnswer(getNumbers());
                setTries([]);
                if (input) {
                    input.focus();
                }
            }
            else {
                console.log('답은', answer.join(''));
                for (var i = 0; i < 4; i += 1) {
                    if (answerArray[i] === answer[i]) {
                        strike_1 += 1;
                    }
                    else if (answer.includes(answerArray[i])) {
                        ball_1 += 1;
                    }
                }
                setTries(function (t) { return (__spreadArray(__spreadArray([], t, true), [
                    {
                        "try": value,
                        result: "".concat(strike_1, " \uC2A4\uD2B8\uB77C\uC774\uD06C, ").concat(ball_1, " \uBCFC\uC785\uB2C8\uB2E4.")
                    }
                ], false)); });
                setValue('');
                if (input) {
                    input.focus();
                }
            }
        }
    }, [value, answer]);
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", null, result),
        React.createElement("form", { onSubmit: onSubmitForm },
            React.createElement("input", { ref: inputEl, maxLength: 4, value: value, onChange: function (e) { return setValue(e.target.value); } }),
            React.createElement("button", null, "\uC785\uB825!")),
        React.createElement("div", null,
            "\uC2DC\uB3C4: ",
            tries.length),
        React.createElement("ul", null, tries.map(function (v, i) { return (React.createElement(Try_1["default"], { key: "".concat(i + 1, "\uCC28 \uC2DC\uB3C4: ").concat(v["try"]), tryInfo: v })); }))));
};
exports["default"] = NumberBaseball;
