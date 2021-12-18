"use strict";
exports.__esModule = true;
var React = require("react");
var react_1 = require("react");
var rspCoords = {
    ROCK: '0',
    SCISSORS: '-142px',
    PAPER: '-284px'
};
var scores = {
    ROCK: 0,
    SCISSORS: 1,
    PAPER: -1
};
var computerChoice = function (imgCoords) {
    return Object.keys(rspCoords).find(function (k) {
        return rspCoords[k] === imgCoords;
    });
};
var RSP = function () {
    var _a = (0, react_1.useState)(''), result = _a[0], setResult = _a[1];
    var _b = (0, react_1.useState)(rspCoords.ROCK), imgCoord = _b[0], setImgCoord = _b[1];
    var _c = (0, react_1.useState)(0), score = _c[0], setScore = _c[1];
    var interval = (0, react_1.useRef)();
    (0, react_1.useEffect)(function () {
        console.log('다시 실행');
        interval.current = window.setInterval(onChangeHand, 100);
        return function () {
            console.log('종료');
            clearInterval(interval.current);
        };
    }, [imgCoord]);
    var onChangeHand = function () {
        if (imgCoord === rspCoords.ROCK) {
            setImgCoord(rspCoords.SCISSORS);
        }
        else if (imgCoord === rspCoords.SCISSORS) {
            setImgCoord(rspCoords.PAPER);
        }
        else if (imgCoord === rspCoords.PAPER) {
            setImgCoord(rspCoords.ROCK);
        }
    };
    var onClickBtn = function (choice) { return function () {
        clearInterval(interval.current);
        var myScore = scores[choice];
        var comScore = scores[computerChoice(imgCoord)];
        var diff = myScore - comScore;
        if (diff === 0) {
            setResult('비겼습니다');
        }
        else if ([-1, 2].includes(diff)) {
            setResult('이겼습니다!');
            setScore(function (prevScore) { return prevScore + 1; });
        }
        else {
            setResult('졌습니다!');
            setScore(function (prevScore) { return prevScore - 1; });
        }
        setTimeout(function () {
            interval.current = window.setInterval(onChangeHand, 100);
        }, 1000);
    }; };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { id: "computer", style: { background: "url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ".concat(imgCoord, " 0") } }),
        React.createElement("div", null,
            React.createElement("button", { id: "rock", className: "btn", onClick: onClickBtn('ROCK') }, "\uBC14\uC704"),
            React.createElement("button", { id: "scissor", className: "btn", onClick: onClickBtn('SCISSORS') }, "\uAC00\uC704"),
            React.createElement("button", { id: "paper", className: "btn", onClick: onClickBtn('PAPER') }, "\uBCF4")),
        React.createElement("div", null, result),
        React.createElement("div", null,
            "\uD604\uC7AC ",
            score,
            "\uC810")));
};
exports["default"] = RSP;
