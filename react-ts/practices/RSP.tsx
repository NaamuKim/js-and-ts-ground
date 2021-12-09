import * as React from 'react';
import {useState, useRef, useEffect} from 'react';

const rspCoords={
    ROCK: '0',
    SCISSORS: '-142px',
    PAPER: '-284px'
}

const scores ={
    ROCK: 1,
    SCISSORS: 0,
    PAPER: -1,
}

const computerChoice = (imgCoords) => {
    return Object.keys(rspCoords).find((k)=>{
        return rspCoords[k]===imgCoords;
    })
}

const RSP =() =>{
    return (
        <>
        <div id="computer" style={{background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`}}>
            <div>
                <button id="rock" className="btn" onClick={onClickBtn('바위')}>바위</button>
                <button id="scissor" className="btn" onClick={onClickBtn('가위')}>가위</button>
                <button id="paper" className="btn" onClick={onClickBtn('보')}>보</button>
            </div>
            <div>{result}</div>
            <div>현재 점수는 {score}점입니다.</div>
        </div>
        </>
    )
}