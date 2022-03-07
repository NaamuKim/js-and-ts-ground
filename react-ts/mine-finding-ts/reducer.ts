import { START_GAME } from './actionType';
import { initialState, plantMine } from './MineFinding';
import { IInitialState, ReducerActions, ReducerState } from './type';

export const reducer = (state = initialState, action: ReducerActions): ReducerState => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        data: {
          row: action.row,
          cell: action.cell,
          mine: action.mine,
        },
        openedCount: 0,
        tableData: plantMine({ row: action.row, cell: action.cell, mine: action.mine }),
        halted: false,
        result: '',
        timer: 0,
      };
    default:
      return state;
  }
};
