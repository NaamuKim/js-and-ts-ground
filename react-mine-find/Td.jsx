import React, { useContext } from 'react';
import { CODE, ableContext } from './minesearch';

const getTdStyle = (code) => {
  switch (code) {
    case CODE.NORMAL:
    case CODE.MINE:
      return {
        background: '#444',
      };
    case CODE.OPENED:
      return {
        background: white,
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
      return;
    case CODE.MINE:
      return 'x';
  }
};

function Td({ rowIndex, cellIndex }) {
  const { tableData, dispatch } = useContext(TableContext);
  const onClickTd = useCallback(() => {
    dispatch({ type: OPEN_CELL, row: rowIndex, cell: cellIndex });
  }, [rowIndex, cellIndex]);

  return (
    <td style={getTdStyle(tableData[(rowIndex, cellIndex)])} onClick={onClickTd}>
      {getTdText(tableData[rowIndex][cellIndex])}
    </td>
  );
}

export default Td;
