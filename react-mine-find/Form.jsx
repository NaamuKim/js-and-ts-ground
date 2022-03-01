import React, { useState, useCallback, useContext } from 'react';
import { TableContext } from './minesearch';
import { START_GAME } from './minesearch';
function Form() {
  const [row, setRow] = useState(10);
  const [cell, setCell] = useState(10);
  const [mine, setMine] = useState(20);
  const { dispatch } = useContext(TableContext);

  const onChangeRow = useCallback((e) => {
    setRow(e.target.value);
  }, []);
  const onChangeCell = useCallback((e) => {
    setCell(e.target.value);
  }, []);
  const onChangeMine = useCallback((e) => {
    setMine(e.target.value);
  }, []);

  const onClickBtn = useCallback(() => {
    dispatch({ type: START_GAME, row, cell, mine });
  }, [row, cell, mine]);
  return (
    <div>
      <input type='number' placeholder='세로' value={row} onChange={onChagneRow} />
      <input type='number' placeholder='가로' value={cell} onChange={onChangeCell} />
      <input type='number' placeholder='지뢰' value={mine} onChange={onChangeMine} />
    </div>
  );
}

export default Form;
