import * as React from 'react';
import { useState, useCallback } from 'react';
function Form() {
  const [row, setRow] = useState(0);
  const [cell, setCell] = useState(0);
  const [mine, setMine] = useState(0);

  const onChangeRow = useCallback((e) => {
    setRow(e.target.value);
  }, []);
  const onChangeCell = useCallback((e) => {
    setCell(e.target.value);
  }, []);
  const onChangeMine = useCallback((e) => {
    setMine(e.target.value);
  }, []);

  return (
    <div>
      <form>
        <input type='number' placeholder='가로' value={row} onChange={onChangeRow} />
        <input type='number' placeholder='세로' value={cell} onChange={onChangeCell} />
        <input type='number' placeholder='지뢰' value={mine} onChange={onChangeMine} />
      </form>
    </div>
  );
}

export default Form;
