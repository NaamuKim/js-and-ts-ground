import React, { useContext } from 'react';
import { TableContext } from './minesearch';
import Tr from './Tr';
function Table() {
  const { tableData } = useContext(TableContext);
  return (
    <table>
      {Array(tableData.length)
        .fill()
        .map((tr, i) => (
          <Tr rowIndex={i} />
        ))}
    </table>
  );
}

export default Table;
