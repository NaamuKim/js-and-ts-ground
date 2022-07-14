import { Dispatch } from 'react';
import {
  StartGameAction,
  OpenCellAction,
  ClickMineAction,
  FlagMineAction,
  QuestionMineAction,
  NormalizeCellAction,
  IncrementTimerAction,
} from './action';
import { CODE } from './MineFinding';

export interface ReducerState {
  tableData: Codes[][];
  data: InputData;
  timer: number;
  result: string;
  halted: boolean;
  openedCount: number;
}

export interface InputData {
  row: number;
  cell: number;
  mine: number;
}

export type ReducerActions =
  | StartGameAction
  | OpenCellAction
  | ClickMineAction
  | FlagMineAction
  | QuestionMineAction
  | NormalizeCellAction
  | IncrementTimerAction;

export interface IInitialState {
  tableData: [];
  data: {
    row: 0;
    cell: 0;
    mine: 0;
  };
  timer: 0;
  result: '';
  halted: true;
  openedCount: 0;
}

export interface Context {
  tableData: Codes[][];
  halted: boolean;
  dispatch: Dispatch<ReducerActions>;
}
export type Codes = typeof CODE[keyof typeof CODE];
