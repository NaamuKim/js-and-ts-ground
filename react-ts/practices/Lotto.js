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
var Ball_1 = require("./Ball");
var react_1 = require("react");
function getWinNumbers() {
    console.log('getWinNumbers');
    var candidate = Array(45).fill(null).map(function (v, i) { return i + 1; });
    var shuffle = [];
    while (candidate.length > 0) {
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }
    var bonusNumber = shuffle[shuffle.length - 1];
    var winNumbers = shuffle.slice(0, 6).sort(function (p, c) { return p - c; });
    return __spreadArray(__spreadArray([], winNumbers, true), [bonusNumber], false);
}
var Lotto = function () {
    var lottoNumbers = (0, react_1.useMemo)(function () { return getWinNumbers(); }, []);
    var _a = (0, react_1.useState)(lottoNumbers), winNumbers = _a[0], setWinNumbers = _a[1];
    var _b = (0, react_1.useState)([]), winBalls = _b[0], setWinBalls = _b[1];
    var _c = (0, react_1.useState)(null), bonus = _c[0], setBonus = _c[1];
    var _d = (0, react_1.useState)(false), redo = _d[0], setRedo = _d[1];
    var timeouts = (0, react_1.useRef)([]);
    (0, react_1.useEffect)(function () {
        console.log('useEffect');
        var _loop_1 = function (i) {
            timeouts.current[i] = window.setTimeout(function () {
                setWinBalls(function (prevBalls) { return __spreadArray(__spreadArray([], prevBalls, true), [winNumbers[i]], false); });
            }, (i + 1) * 1000);
        };
        for (var i = 0; i < winNumbers.length - 1; i++) {
            _loop_1(i);
        }
        timeouts.current[6] = window.setTimeout(function () {
            setBonus(winNumbers[6]);
            setRedo(true);
        }, 7000);
        return function () {
            timeouts.current.forEach(function (v) {
                clearTimeout(v);
            });
        };
    }, [timeouts.current]); // 빈 배열이면 componentDidMount와 동일
    // 배열에 요소가 있으면 componentDidMount랑 componentDidUpdate 둘 다 수행
    (0, react_1.useEffect)(function () {
        console.log('로또 숫자를 생성합니다.');
    }, [winNumbers]);
    var onClickRedo = (0, react_1.useCallback)(function () {
        console.log('onClickRedo');
        console.log(winNumbers);
        setWinNumbers(getWinNumbers());
        setWinBalls([]);
        setBonus(null);
        setRedo(false);
        timeouts.current = [];
    }, [winNumbers]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", null, "\uB2F9\uCCA8 \uC22B\uC790"),
        React.createElement("div", { id: "\uACB0\uACFC\uCC3D" }, winBalls.map(function (v) { return React.createElement(Ball_1["default"], { key: v, number: v }); })),
        React.createElement("div", null, "\uBCF4\uB108\uC2A4!"),
        bonus && React.createElement(Ball_1["default"], { number: bonus }),
        redo && React.createElement("button", { onClick: onClickRedo }, "\uD55C \uBC88 \uB354!")));
};
exports["default"] = Lotto;
