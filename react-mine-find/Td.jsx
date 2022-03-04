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
  const { tableData } = useContext(TableContext);
  return <td>{getTdText(tableData[rowIndex][cellIndex])}</td>;
}

export default Td;
