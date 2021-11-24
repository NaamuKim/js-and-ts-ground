var firstNumber = Math.ceil(Math.random() * 9);
var secondNumber = Math.ceil(Math.random() * 9);
var result = firstNumber * secondNumber;
var word = document.createElement("div");
word.textContent = "".concat(String(firstNumber), " \uACF1\uD558\uAE30 ").concat(String(secondNumber), "\uB294 \uBB34\uC5C7\uC778\uAC00\uC694?");
document.body.append(word);
var form = document.createElement("form");
document.body.append(form);
var input = document.createElement("input");
input.type = "number";
form.append(input);
var button = document.createElement("button");
button.textContent = "입력";
form.append(button);
var resultDiv = document.createElement("div");
if (input)
    document.body.append(resultDiv);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (result === Number(input.value)) { //정답 맞춘 경우
        resultDiv.textContent = "정답입니다";
        firstNumber = Math.ceil(Math.random() * 9);
        secondNumber = Math.ceil(Math.random() * 9);
        result = firstNumber * secondNumber;
        word.textContent = "".concat(String(firstNumber), " \uACF1\uD558\uAE30 ").concat(String(secondNumber), "\uB294 \uBB34\uC5C7\uC778\uAC00\uC694?");
        input.value = "";
        input.focus();
    }
    else { //틀린 경우
        resultDiv.textContent = "다시 구해보세요!";
        input.value = "";
        input.focus();
    }
});
