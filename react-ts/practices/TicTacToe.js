"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.RESET_GAME = exports.CHANGE_TURN = exports.CLICK_CELL = exports.SET_WINNER = void 0;
var React = require("react");
var react_1 = require("react");
var Table_1 = require("./Table");
var initialState = {
    winner: '',
    turn: 'O',
    tableData: [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ],
    recentCell: [-1, -1]
};
exports.SET_WINNER = 'SET_WINNER';
exports.CLICK_CELL = 'CLICK_CELL';
exports.CHANGE_TURN = 'CHANGE_TURN';
exports.RESET_GAME = 'RESET_GAME';
var setWinner = function (winner) {
    return { type: exports.SET_WINNER, winner: winner };
};
var clickCell = function (row, cell) {
    return { type: exports.CLICK_CELL, row: row, cell: cell };
};
var reducer = function (state, action) {
    switch (action.type) {
        case exports.SET_WINNER:
            return __assign(__assign({}, state), { winner: action.winner });
        case exports.CLICK_CELL: {
            var tableData = __spreadArray([], state.tableData, true);
            tableData[action.row] = __spreadArray([], tableData[action.row], true);
            tableData[action.row][action.cell] = state.turn;
            return __assign(__assign({}, state), { tableData: tableData, recentCell: [action.row, action.cell] });
        }
        case exports.CHANGE_TURN: {
            return __assign(__assign({}, state), { turn: state.turn === 'O' ? 'X' : 'O' });
        }
        case exports.RESET_GAME: {
            return __assign(__assign({}, state), { turn: 'O', tableData: [
                    ['', '', ''],
                    ['', '', ''],
                    ['', '', ''],
                ], recentCell: [-1, -1] });
        }
        default:
            return state;
    }
};
var TicTacToe = function () {
    var _a = (0, react_1.useReducer)(reducer, initialState), state = _a[0], dispatch = _a[1];
    var tableData = state.tableData, turn = state.turn, winner = state.winner, recentCell = state.recentCell;
    (0, react_1.useEffect)(function () {
        var row = recentCell[0], cell = recentCell[1];
        if (row < 0) {
            return;
        }
        var full = false;
        if (tableData[row][0] === turn &&
            tableData[row][1] === turn &&
            tableData[row][2] === turn) {
            full = true;
        }
        if (tableData[cell][0] === turn &&
            tableData[cell][1] === turn &&
            tableData[cell][2] === turn) {
            full = true;
        }
        if (tableData[0][0] === turn &&
            tableData[1][1] === turn &&
            tableData[2][2] === turn) {
            full = true;
        }
        if (tableData[0][2] === turn &&
            tableData[1][1] === turn &&
            tableData[2][0] === turn) {
            full = true;
        }
        if (full) {
            dispatch({ type: exports.SET_WINNER, winner: turn });
            dispatch({ type: exports.RESET_GAME });
        }
        else {
            var all_1 = true;
            tableData.forEach(function (row) {
                row.forEach(function (cell) {
                    if (!cell) {
                        all_1 = false;
                    }
                });
            });
            if (all_1) {
                dispatch({ type: exports.RESET_GAME });
            }
            else {
                dispatch({ type: exports.CHANGE_TURN });
            }
        }
    }, [recentCell]);
    var onClickTable = (0, react_1.useCallback)(function () {
        dispatch(setWinner('O'));
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement(Table_1["default"], { onClick: onClickTable, tableData: tableData, dispatch: dispatch }),
        winner && React.createElement("div", null,
            winner,
            "\uB2D8\uC758 \uC2B9\uB9AC")));
};
exports["default"] = TicTacToe;
