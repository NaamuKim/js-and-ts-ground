import * as React from "react";
import {useEffect, useReducer, useMemo, Dispatch} from "react";

export const CODE = {
    MINE: -7,
    NORMAL: -1,
    QUESTION: -2,
    FLAG: -3,
    QUESTION_MINE: -4,
    FLAG_MINE: -5,
    CLICKED_MINE: -6,
    OPENED: 0,
} as const;

interface ReducerState {
    tableData: number[][];
    data : {
        row: number,
        cell: number,
        mine: number,
    },
    timer: number,
    result: string,
    halted: boolean,
    openedCount: number,
}

const initialState: ReducerState ={
    tableData:[],
    data: {
        row:0,
        cell:0,
        mine:0,
    },
    timer:0,
    result: '',
    halted: true,
    openedCount: 0,
}

const plantMine = (row:number, cell: number, mine: number)=>{
    const candidate = Array(row*cell).fill(undefined).map((arr,i)=>{
        return i;
    })
    const shuffle =[];
    while(candidate.length>row*cell-mine){
        const chosen = candidate.splice(Math.floor(Math.random()* candidate.length),1)[0];
        shuffle.push(chosen);
    }
    const data= [];
    for(let i= 0; i<row; i++) {
        const rowData:number[]=[];
        data.push(rowData);
        for(let j=0;j<cell;j++){
            rowData.push(CODE.NORMAL);
        }
    }
    for(let k= 0; k<shuffle.length;k++){
        const ver=Math.floor(shuffle[k]/cell);
        const hor=shuffle[k]%cell;
        data[ver][hor]=CODE.MINE;
    }
    console.log(data)
    return data;
}