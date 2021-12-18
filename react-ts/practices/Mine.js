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
exports.TableContext = exports.CODE = void 0;
var React = require("react");
var react_1 = require("react");
var mineaction_1 = require("./mineaction");
var MineTable_1 = require("./MineTable");
var Form_1 = require("./Form");
exports.CODE = {
    MINE: -7,
    NORMAL: -1,
    QUESTION: -2,
    FLAG: -3,
    QUESTION_MINE: -4,
    FLAG_MINE: -5,
    CLICKED_MINE: -6,
    OPENED: 0
};
exports.TableContext = (0, react_1.createContext)({
    tableData: [],
    halted: true,
    dispatch: function () { }
});
var initialState = {
    tableData: [],
    data: {
        row: 0,
        cell: 0,
        mine: 0
    },
    timer: 0,
    result: '',
    halted: true,
    openedCount: 0
};
var plantMine = function (row, cell, mine) {
    var candidate = Array(row * cell).fill(undefined).map(function (arr, i) {
        return i;
    });
    var shuffle = [];
    while (candidate.length > row * cell - mine) {
        var chosen = candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0];
        shuffle.push(chosen);
    }
    var data = [];
    for (var i = 0; i < row; i++) {
        var rowData = [];
        data.push(rowData);
        for (var j = 0; j < cell; j++) {
            rowData.push(exports.CODE.NORMAL);
        }
    }
    for (var k = 0; k < shuffle.length; k++) {
        var ver = Math.floor(shuffle[k] / cell);
        var hor = shuffle[k] % cell;
        data[ver][hor] = exports.CODE.MINE;
    }
    console.log(data);
    return data;
};
var reducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case mineaction_1.START_GAME:
            return __assign(__assign({}, state), { data: {
                    row: action.row,
                    cell: action.cell,
                    mine: action.mine
                }, openedCount: 0, tableData: plantMine(action.row, action.cell, action.mine), halted: false, timer: 0 });
        case mineaction_1.OPEN_CELL: {
            var tableData_1 = __spreadArray([], state.tableData, true);
            tableData_1.forEach(function (row, i) {
                tableData_1[i] = __spreadArray([], row, true);
            });
            var checked_1 = [];
            var openedCount_1 = 0;
            var checkAround_1 = function (row, cell) {
                console.log(row, cell);
                if (row < 0 || row >= tableData_1.length || cell < 0 || cell >= tableData_1[0].length) {
                    return;
                } // 상하좌우 없는칸은 안 열기
                if ([exports.CODE.OPENED, exports.CODE.FLAG, exports.CODE.FLAG_MINE, exports.CODE.QUESTION_MINE, exports.CODE.QUESTION].includes(tableData_1[row][cell])) {
                    return;
                } // 닫힌 칸만 열기
                if (checked_1.includes(row + '/' + cell)) {
                    return;
                }
                else {
                    checked_1.push(row + '/' + cell);
                } // 한 번 연칸은 무시하기
                var around = [
                    tableData_1[row][cell - 1], tableData_1[row][cell + 1],
                ];
                if (tableData_1[row - 1]) {
                    around = around.concat([tableData_1[row - 1][cell - 1], tableData_1[row - 1][cell], tableData_1[row - 1][cell + 1]]);
                }
                if (tableData_1[row + 1]) {
                    around = around.concat([tableData_1[row + 1][cell - 1], tableData_1[row + 1][cell], tableData_1[row + 1][cell + 1]]);
                }
                var count = around.filter(function (v) {
                    return [exports.CODE.MINE, exports.CODE.FLAG_MINE, exports.CODE.QUESTION_MINE].includes(v);
                }).length;
                if (count === 0) { // 주변칸 오픈
                    if (row > -1) {
                        var near = [];
                        if (row - 1 > -1) {
                            near.push([row - 1, cell - 1]);
                            near.push([row - 1, cell]);
                            near.push([row - 1, cell + 1]);
                        }
                        near.push([row, cell - 1]);
                        near.push([row, cell + 1]);
                        if (row + 1 < tableData_1.length) {
                            near.push([row + 1, cell - 1]);
                            near.push([row + 1, cell]);
                            near.push([row + 1, cell + 1]);
                        }
                        near.forEach(function (n) {
                            if (tableData_1[n[0]][n[1]] !== exports.CODE.OPENED) {
                                checkAround_1(n[0], n[1]);
                            }
                        });
                    }
                }
                if (tableData_1[row][cell] === exports.CODE.NORMAL) { // 내 칸이 닫힌 칸이면 카운트 증가
                    openedCount_1 += 1;
                }
                tableData_1[row][cell] = count;
            };
            checkAround_1(action.row, action.cell);
            var halted = false;
            var result = '';
            console.log(state.data.row * state.data.cell - state.data.mine, state.openedCount, openedCount_1);
            if (state.data.row * state.data.cell - state.data.mine === state.openedCount + openedCount_1) { // 승리
                halted = true;
                result = "".concat(state.timer, "\uCD08\uB9CC\uC5D0 \uC2B9\uB9AC\uD558\uC168\uC2B5\uB2C8\uB2E4");
            }
            return __assign(__assign({}, state), { tableData: tableData_1, openedCount: state.openedCount + openedCount_1, halted: halted, result: result });
        }
        case mineaction_1.CLICK_MINE: {
            var tableData = __spreadArray([], state.tableData, true);
            tableData[action.row] = __spreadArray([], state.tableData[action.row], true);
            if (tableData[action.row][action.cell] === exports.CODE.MINE) {
                tableData[action.row][action.cell] = exports.CODE.FLAG_MINE;
            }
            else {
                tableData[action.row][action.cell] = exports.CODE.FLAG;
            }
            return __assign(__assign({}, state), { tableData: tableData });
        }
        case mineaction_1.FLAG_CELL: {
            var tableData = __spreadArray([], state.tableData, true);
            tableData[action.row] = __spreadArray([], state.tableData[action.row], true);
            if (tableData[action.row][action.cell] === exports.CODE.MINE) {
                tableData[action.row][action.cell] = exports.CODE.FLAG_MINE;
            }
            else {
                tableData[action.row][action.cell] = exports.CODE.FLAG;
            }
            return __assign(__assign({}, state), { tableData: tableData });
        }
        case mineaction_1.QUESTION_CELL: {
            var tableData = __spreadArray([], state.tableData, true);
            tableData[action.row] = __spreadArray([], state.tableData[action.row], true);
            if (tableData[action.row][action.cell] === exports.CODE.FLAG_MINE) {
                tableData[action.row][action.cell] = exports.CODE.QUESTION_MINE;
            }
            else {
                tableData[action.row][action.cell] = exports.CODE.QUESTION;
            }
            return __assign(__assign({}, state), { tableData: tableData });
        }
        case mineaction_1.NORMALIZE_CELL: {
            var tableData = __spreadArray([], state.tableData, true);
            tableData[action.row] = __spreadArray([], state.tableData[action.row], true);
            if (tableData[action.row][action.cell] === exports.CODE.QUESTION_MINE) {
                tableData[action.row][action.cell] = exports.CODE.MINE;
            }
            else {
                tableData[action.row][action.cell] = exports.CODE.NORMAL;
            }
            return __assign(__assign({}, state), { tableData: tableData });
        }
        case mineaction_1.INCREMENT_TIMER: {
            return __assign(__assign({}, state), { timer: state.timer + 1 });
        }
        default:
            return state;
    }
};
var MineSearch = function () {
    var _a = (0, react_1.useReducer)(reducer, initialState), state = _a[0], dispatch = _a[1];
    var tableData = state.tableData, halted = state.halted, timer = state.timer, result = state.result;
    var value = (0, react_1.useMemo)(function () { return ({ tableData: tableData, halted: halted, dispatch: dispatch }); }, [tableData, halted]);
    (0, react_1.useEffect)(function () {
        var timer;
        if (halted === false) {
            timer = window.setInterval(function () {
                dispatch({ type: mineaction_1.INCREMENT_TIMER });
            }, 1000);
        }
        return function () {
            clearInterval(timer);
        };
    });
    return (React.createElement(exports.TableContext.Provider, { value: value },
        React.createElement(Form_1["default"], null),
        React.createElement("div", null, timer),
        React.createElement(MineTable_1["default"], null),
        React.createElement("div", null, result)));
};
exports["default"] = MineSearch;
