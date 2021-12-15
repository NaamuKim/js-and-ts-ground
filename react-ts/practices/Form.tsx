import * as React from "react";
import {START_GAME, TableContext} from "./Mine";
import {useState, useCallback,useContext, memo} from "react";
import Table from "./Table";

const Form = ()=>{
    const [row,setRow]=useState(10);
    const [cell, setCell] = useState(10);
    const [mine, setMine] = useState(20);
    const {dispatch}= useContext(TableContext);

    const onChangeRow=useCallback((e:React.ChangeEvent<HTMLInputElement>)=>{
        setRow(e.target.value);
    },[])

    const onChangeCell=useCallback((e:React.ChangeEvent<HTMLInputElement>)=>{
        setCell(e.target.value);
    },[]);

    const onChangeMine = useCallback((e:React.ChangeEvent<HTMLInputElement>)=>{
        setMine(e.target.value);
    },[])

    return (
        <div>
            <input type="number" placeholder="세로" value={row} onChange={onChangeRow}/>
            <input type="number" placeholder="가로" value={cell} onChange={onChangeCell}/>
            <input type="number" placeholder="지뢰" value={mine} onChange={onChangeMine}/>
            <button onClick={onClickBtn}>시작</button>
        </div>
    )
}