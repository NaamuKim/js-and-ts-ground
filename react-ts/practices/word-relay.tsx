import * as React from "react";
import {useState, useRef, useCallback} from "react";

const WordRelay = ()=>{
    const [word, setWord]=useState("나무")
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");

    const inputEl=useRef<HTMLInputElement>(null);

    const onChangeWord=useCallback((e:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(e.currentTarget.value);
    },[])

    const onSubmitForm= useCallback<(e: React.FormEvent)=>void>((e)=>{
        e.preventDefault();
        const input= inputEl.current;
        if(word[word.length-1]===value[0]&&!value.split("").find(e=>e===" ")){
            setResult('딩동댕');
            setWord(value);
            setValue("");
            if (input) {
                input.focus();
            }
        }else if(value.split("").find(e=>e===" ")){
            setResult("띄어쓰기는 제외하고 해주세요");
            setValue("");
            if(input){
                input.focus();
            }
        } else {
            setResult("땡");
            setValue("");
            if(input){
                input.focus();
            }
        }
    },[value])

    return (
        <>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
                <input
                    ref={inputEl}
                    value={value}
                    onChange={onChangeWord}
                />
                <button>입력!</button>
            </form>
            <div>{result}</div>
        </>
    )
};

export default WordRelay;