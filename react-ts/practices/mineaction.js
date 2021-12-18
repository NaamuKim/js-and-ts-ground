"use strict";
exports.__esModule = true;
exports.incrementTimer = exports.normalizeCell = exports.questionCell = exports.flagMine = exports.clickMine = exports.openCell = exports.startGame = exports.INCREMENT_TIMER = exports.NORMALIZE_CELL = exports.QUESTION_CELL = exports.FLAG_CELL = exports.CLICK_MINE = exports.OPEN_CELL = exports.START_GAME = void 0;
exports.START_GAME = 'START_GAME';
exports.OPEN_CELL = 'OPEN_CELL';
exports.CLICK_MINE = 'CLICK_MINE';
exports.FLAG_CELL = 'FLAG_CELL';
exports.QUESTION_CELL = 'QUESTION_CELL';
exports.NORMALIZE_CELL = 'NORMALIZE_CELL';
exports.INCREMENT_TIMER = 'INCREMENT_TIMER';
var startGame = function (row, cell, mine) {
    return {
        type: exports.START_GAME,
        row: row,
        cell: cell,
        mine: mine
    };
};
exports.startGame = startGame;
var openCell = function (row, cell) {
    return {
        type: exports.OPEN_CELL,
        row: row,
        cell: cell
    };
};
exports.openCell = openCell;
var clickMine = function (row, cell) {
    return {
        type: exports.CLICK_MINE,
        row: row,
        cell: cell
    };
};
exports.clickMine = clickMine;
var flagMine = function (row, cell) {
    return {
        type: exports.FLAG_CELL,
        row: row,
        cell: cell
    };
};
exports.flagMine = flagMine;
var questionCell = function (row, cell) {
    return {
        type: exports.QUESTION_CELL,
        row: row,
        cell: cell
    };
};
exports.questionCell = questionCell;
var normalizeCell = function (row, cell) {
    return {
        type: exports.NORMALIZE_CELL,
        row: row,
        cell: cell
    };
};
exports.normalizeCell = normalizeCell;
var incrementTimer = function () {
    return {
        type: exports.INCREMENT_TIMER
    };
};
exports.incrementTimer = incrementTimer;
