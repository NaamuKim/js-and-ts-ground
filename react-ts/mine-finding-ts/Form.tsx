import * as React from 'react';
import { useState, useCallback, useContext } from 'react';
import { startGame } from './actionType';
import { TableContext } from './MineFinding';
function Form() {
  const [row, setRow] = useState(0);
  const [cell, setCell] = useState(0);
  const [mine, setMine] = useState(0);
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
    dispatch(startGame(row, cell, mine));
  }, [row, cell, mine]);

  return (
    <div>
      <input type='number' placeholder='가로' value={row} onChange={onChangeRow} />
      <input type='number' placeholder='세로' value={cell} onChange={onChangeCell} />
      <input type='number' placeholder='지뢰' value={mine} onChange={onChangeMine} />
      <button onClick={onClickBtn}>시작</button>
    </div>
  );
}

export default Form;
