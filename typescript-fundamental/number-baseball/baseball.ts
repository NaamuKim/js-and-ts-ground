const {body} =document;
let numbers: number[];
let array: number[];

function chooseNumber(){
    numbers=[1,2,3,4,5,6,7,8,9];
    array=[];
    for(let i=0; i<4; i++){
        const chosen=numbers.splice(Math.floor(Math.random()*(9-i)),1)[0];
        array.push(chosen);
    }
}

chooseNumber();

const result=document.createElement("h3");
body.append(result);
const form= document.createElement("form");
document.body.append(form);
const input=document.createElement('input')
form.append(input);
input.type='text';
input.placeholder="숫자 4개를 입력하세요!"
input.maxLength=4;
const button=document.createElement('button');
button.textContent='입력';
form.append(button);

let wrongCount=0;

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const answer=input.value;
    if(answer===array.join("")){
        result.textContent= "홈런";
        input.value= "";
        input.focus();
        chooseNumber();
        wrongCount=0;
    } else{
        const answerArray=answer.split('');
        let strike=0;
        let ball=0;
        wrongCount+=1;
        if(wrongCount > 10) {
            result.textContent=`10번 넘게 틀려서 실패! 답은 ${array.join(',')} 입니다!`
            input.value="";
            input.focus();
            chooseNumber();
            wrongCount=0;
        }
        else{
            for(let i=0;i<4;i++){
                if(Number(answerArray[i])===array[i]) {
                    strike+=1;
                }
                else if(array.indexOf(Number(answerArray[i]))>-1){
                    ball+=1;
                }
            }
            result.textContent=strike + '스트라이크' + ball + '볼입니다!';
            input.value='';
            input.focus();
        }
    }
})