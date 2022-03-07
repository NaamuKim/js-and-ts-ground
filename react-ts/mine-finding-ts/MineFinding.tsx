import * as React from 'react';
import { createContext, useMemo, useReducer } from 'react';
import Form from './Form';
import { reducer } from './Reducer';
import Table from './Table';
import { Codes, Context, IInitialState, InputData, ReducerState } from './type';

export const CODE = {
  MINE: -7,
  NORMAL: -1,
  QUESTION: -2,
  FLAG: -3,
  QUESTION_MINE: -4,
  FLAG_MINE: -5,
  CLICKED_MINE: -6,
  OPENED: 0,
};

export const TableContext = createContext<Context>({
  tableData: [],
  halted: true,
  dispatch: () => {},
});

export const initialState: ReducerState = {
  tableData: [],
  data: {
    row: 0,
    cell: 0,
    mine: 0,
  },
  timer: 0,
  result: '',
  halted: true,
  openedCount: 0,
};

export const plantMine = ({ row, cell, mine }: InputData): Codes[][] => {
  const candidate = Array(row * cell)
    .fill(undefined)
    .map((arr, i) => {
      return i;
    });
  console.log(candidate);
  const shuffle = [];
  while (candidate.length > row * cell - mine) {
    const chosen = candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0];
    shuffle.push(chosen);
  }
  const data: Codes[][] = [];
  for (let i = 0; i < row; i++) {
    const rowData: Codes[] = [];
    data.push(rowData);
    for (let j = 0; j < cell; j++) {
      rowData.push(CODE.NORMAL);
    }
  }
  for (let k = 0; k < shuffle.length; k++) {
    const ver = Math.floor(shuffle[k] / cell);
    const hor = shuffle[k] % cell;
    data[ver][hor] = CODE.MINE;
  }
  return data;
};

function MineFinding() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { tableData, halted } = state;
  const value = useMemo(() => ({ tableData, halted, dispatch }), [tableData, halted]);
  return (
    <TableContext.Provider value={value}>
      <Form />
      <Table />
    </TableContext.Provider>
  );
}

export default MineFinding;
