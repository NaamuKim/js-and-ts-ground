let firstNumber = Math.ceil(Math.random()*9);
let secondNumber = Math.ceil(Math.random()*9);
let result = firstNumber*secondNumber;

const word = document.createElement("div");
word.textContent =`${String(firstNumber)} 곱하기 ${String(secondNumber)}는 무엇인가요?`;
document.body.append(word);

const form=document.createElement("form");
document.body.append(form);

const input=document.createElement("input");
input.type = `number`;
form.append(input);

const button=document.createElement("button");
button.textContent="입력";
form.append(button);

const resultDiv=document.createElement("div");
if(input)document.body.append(resultDiv);


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(result === Number(input.value)){ //정답 맞춘 경우
        resultDiv.textContent="정답입니다";
        firstNumber = Math.ceil(Math.random()*9);
        secondNumber = Math.ceil(Math.random()*9);
        result = firstNumber*secondNumber;
        word.textContent =`${String(firstNumber)} 곱하기 ${String(secondNumber)}는 무엇인가요?`;
        input.value="";
        input.focus();
    }
    else{ //틀린 경우
        resultDiv.textContent="다시 구해보세요!";
        input.value="";
        input.focus();
    }
})