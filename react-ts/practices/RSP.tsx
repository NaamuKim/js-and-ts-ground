import * as React from 'react';
import {useState, useRef, useEffect} from 'react';

const rspCoords={
    ROCK: '0',
    SCISSORS: '-142px',
    PAPER: '-284px'
} as const;

const scores ={
    ROCK: 0,
    SCISSORS: 1,
    PAPER: -1,
} as const;

type ImgCoords = typeof rspCoords[keyof typeof rspCoords]


const computerChoice = (imgCoords: ImgCoords) => {
    return (Object.keys(rspCoords) as ['ROCK', 'SCISSORS', 'PAPER']).find((k)=>{
        return rspCoords[k]===imgCoords;
    })!
}

const RSP = () =>{
    const [result, setResult] = useState('');
    const [imgCoord, setImgCoord] = useState<ImgCoords>(rspCoords.ROCK);
    const [score, setScore] = useState(0);
    const interval = useRef<number>()

    useEffect(() => { // componentDidMount, componentDidUpdate 역할(1대1 대응은 아님)
        console.log('다시 실행');
        interval.current = window.setInterval(onChangeHand, 100);
        return () => { // componentWillUnmount 역할
            console.log('종료');
            clearInterval(interval.current);
        }
    }, [imgCoord]);

    const onChangeHand = () =>{
        if(imgCoord===rspCoords.ROCK) {
            setImgCoord(rspCoords.SCISSORS);
        } else if (imgCoord===rspCoords.SCISSORS){
            setImgCoord(rspCoords.PAPER);
        } else if (imgCoord === rspCoords.PAPER){
            setImgCoord(rspCoords.ROCK);
        }
    }

    const onClickBtn = (choice: keyof typeof rspCoords) => () => {
        clearInterval(interval.current);
        const myScore= scores[choice];
        const comScore=scores[computerChoice(imgCoord)];
        const diff = myScore - comScore;
        if(diff===0) {
            setResult('비겼습니다');

        } else if([-1, 2]. includes(diff)) {
            setResult('이겼습니다!');
            setScore((prevScore)=>prevScore+1);
        } else {
            setResult('졌습니다!');
            setScore((prevScore)=>prevScore-1);
        }
        setTimeout(()=>{
            interval.current = window.setInterval(onChangeHand, 100);
        },1000);

    }

    return (
        <>
            <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
            <div>
                <button id="rock" className="btn" onClick={onClickBtn('ROCK')}>바위</button>
                <button id="scissor" className="btn" onClick={onClickBtn('SCISSORS')}>가위</button>
                <button id="paper" className="btn" onClick={onClickBtn('PAPER')}>보</button>
            </div>
            <div>{result}</div>
            <div>현재 {score}점</div>
        </>
    );
}

export default RSP;