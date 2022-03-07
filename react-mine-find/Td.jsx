import e from 'express';
import React, { useContext, useCallback } from 'react';
import { CODE, ableContext, OPEN_CELL, CLICK_MINE, NORMALIZE_CELL } from './MineSearch';

const getTdStyle = (code) => {
  switch (code) {
    case CODE.NORMAL:
    case CODE.MINE:
      return {
        background: '#444',
      };
    case CODE.OPENED:
    case CODE.CLICKED_MINE:
      return {
        background: white,
      };
    case CODE.QUESTION_MINE:
    case CODE.QUESTION:
      return {
        background: 'yellow',
      };
    default:
      return {
        background: 'white',
      };
  }
};

const getTdText = (code) => {
  switch (code) {
    case CODE.NORMAL:
      return '';
    case CODE.MINE:
      return 'x';
    case CODE.CLICKED_MINE:
      return '펑';
    case CODE.FLAG:
    case CODE.FLAG_MINE:
      return '!';
    case QUESTION:
    case QUESTION_MINE:
      return '?';
    default:
      return code || '';
  }
};

function Td({ rowIndex, cellIndex }) {
  const { tableData, dispatch, halted } = useContext(TableContext);
  const onClickTd = useCallback(() => {
    if (halted) {
      return;
    }
    switch (tableData[rowIndex][cellIndex]) {
      case CODE.OPENED:
      case CODE.FLAG_MINE:
      case CODE.FLAG:
      case CODE.QUESTION_MINE:
      case CODE.QUESTION:
        return;
      case CODE.NORMAL:
        dispatch({ type: OPEN_CELL, row: rowIndex, cell: cellIndex });
        return;
      case CODE.MINE:
        dispatch({
          type: CLICK_MINE,
          row: rowIndex,
          cell: cellIndex,
        });
    }
  }, [rowIndex, cellIndex]);

  const onRightClickTd = useCallback(
    (e) => {
      e.preventDefault();
      switch (tableData[rowIndex][cellIndex]) {
        case CODE.NORMAL:
        case CODE.MINE:
          dispatch({
            type: FLAG_CELL,
            row: rowIndex,
            cell: cellIndex,
          });
        case CODE.FLAG_MINE:
        case CODE.FLAG:
          dispatch({
            type: QUESTION_CELL,
            row: rowIndex,
            cell: cellIndex,
          });
        case CODE.QUESTION_MINE:
        case CODE.QUESTION:
          dispatch({
            type: NORMALIZE_CELL,
            row: rowIndex,
            cell: cellIndex,
          });
        default:
          return;
      }
    },
    [tableData[rowIndex][cellIndex]]
  );

  return (
    <td style={getTdStyle(tableData[(rowIndex, cellIndex)])} onClick={onClickTd} onContextMenu={onRightClickTd}>
      {getTdText(tableData[rowIndex][cellIndex])}
    </td>
  );
}

export default Td;
