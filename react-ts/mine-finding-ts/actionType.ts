export const START_GAME = 'START_GAME';
export const OPEN_CELL = 'OPEN_CELL';
export const CLICK_MINE = 'CLICK_MINE';
export const FLAG_MINE = 'FLAG_MINE';
export const QUESTION_MINE = 'QUESTION_MINE';
export const NORMALIZE_CELL = 'NORMALIZE_CELL';
export const INCREMENT_TIMER = 'INCREMENT_TIMER';

export interface StartGameAction {
  type: typeof START_GAME;
  row: number;
  cell: number;
  mine: number;
}

export interface OpenCellAction {
  type: typeof OPEN_CELL;
  row: number;
  cell: number;
}

export interface ClickMineAction {
  type: typeof CLICK_MINE;
  row: number;
  cell: number;
}

export interface FlagMineAction {
  type: typeof FLAG_MINE;
  row: number;
  cell: number;
}

export interface QuestionMineAction {
  type: typeof QUESTION_MINE;
  row: number;
  cell: number;
}

export interface NormalizeCellAction {
  type: typeof NORMALIZE_CELL;
  row: number;
  cell: number;
}

export interface IncrementTimerAction {
  type: typeof INCREMENT_TIMER;
}
