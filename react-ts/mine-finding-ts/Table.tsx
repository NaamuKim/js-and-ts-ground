import * as React from 'react';
import { useContext, useState } from 'react';
import { TableContext } from './MineFinding';
import Tr from './Tr';

function Table() {
  const { tableData } = useContext(TableContext);
  return (
    <>
      <table>
        <tbody>
          {Array(tableData.length)
            .fill(null)
            .map((tr, i) => (
              <Tr key={i} rowIndex={i} />
            ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
