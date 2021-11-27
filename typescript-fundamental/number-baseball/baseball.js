var body = document.body;
var numbers;
var array;
function chooseNumber() {
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    array = [];
    for (var i = 0; i < 4; i++) {
        var chosen = numbers.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
}
chooseNumber();
var result = document.createElement("h3");
body.append(result);
var form = document.createElement("form");
document.body.append(form);
var input = document.createElement('input');
form.append(input);
input.type = 'text';
input.placeholder = "숫자 4개를 입력하세요!";
input.maxLength = 4;
var button = document.createElement('button');
button.textContent = '입력';
form.append(button);
var wrongCount = 0;
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var answer = input.value;
    if (answer === array.join("")) {
        result.textContent = "홈런";
        input.value = "";
        input.focus();
        chooseNumber();
        wrongCount = 0;
    }
    else {
        var answerArray = answer.split('');
        var strike = 0;
        var ball = 0;
        wrongCount += 1;
        if (wrongCount > 10) {
            result.textContent = "10\uBC88 \uB118\uAC8C \uD2C0\uB824\uC11C \uC2E4\uD328! \uB2F5\uC740 ".concat(array.join(','), " \uC785\uB2C8\uB2E4!");
            input.value = "";
            input.focus();
            chooseNumber();
            wrongCount = 0;
        }
        else {
            for (var i = 0; i < 4; i++) {
                if (Number(answerArray[i]) === array[i]) {
                    strike += 1;
                }
                else if (array.indexOf(Number(answerArray[i])) > -1) {
                    ball += 1;
                }
            }
            result.textContent = strike + '스트라이크' + ball + '볼입니다!';
            input.value = '';
            input.focus();
        }
    }
});
