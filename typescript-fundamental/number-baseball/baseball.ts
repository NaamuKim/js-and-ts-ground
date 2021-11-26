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

const result=document.createElement("h1");
body.append(result);
const form= document.createElement("form");
document.body.append(form);
const input=document.createElement('input')
form.append(input);
input.type='text';
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
    }
})