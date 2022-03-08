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

export const startGame = (row: number, cell: number, mine: number): StartGameAction => {
  return {
    type: START_GAME,
    row,
    cell,
    mine,
  };
};

export interface OpenCellAction {
  type: typeof OPEN_CELL;
  row: number;
  cell: number;
}

export const openCell = (row: number, cell: number): OpenCellAction => {
  return {
    type: OPEN_CELL,
    row,
    cell,
  };
};

export interface ClickMineAction {
  type: typeof CLICK_MINE;
  row: number;
  cell: number;
}

export const clickMine = (row: number, cell: number): ClickMineAction => {
  return {
    type: CLICK_MINE,
    row,
    cell,
  };
};

export interface FlagMineAction {
  type: typeof FLAG_MINE;
  row: number;
  cell: number;
}

export const flagMine = (row: number, cell: number): FlagMineAction => {
  return {
    type: FLAG_MINE,
    row,
    cell,
  };
};

export interface QuestionMineAction {
  type: typeof QUESTION_MINE;
  row: number;
  cell: number;
}

export const questionMine = (row: number, cell: number): QuestionMineAction => {
  return {
    type: QUESTION_MINE,
    row,
    cell,
  };
};

export interface NormalizeCellAction {
  type: typeof NORMALIZE_CELL;
  row: number;
  cell: number;
}

export const normalizeCell = (row: number, cell: number): NormalizeCellAction => {
  return {
    type: NORMALIZE_CELL,
    row,
    cell,
  };
};
export interface IncrementTimerAction {
  type: typeof INCREMENT_TIMER;
}
