"use strict";
var horizontal = 4;
var vertical = 3;
var colors = ['red', 'red', 'orange', 'orange', 'green', 'green', 'yellow', 'yellow', "white", "white", 'pink', 'pink'];
var colorCandidate = colors.slice();
var color = [];
var clickFlag = true;
var clickCard = [];
var completedCard = [];
var startTime;
function shuffle() {
    for (var i = 0; colorCandidate.length > 0; i += 1) {
        color = color.concat(colorCandidate.splice(Math.floor(Math.random() * colorCandidate.length), 1));
    }
}
function setCard(horizontal, vertical) {
    clickFlag = false;
    var _loop_1 = function (i) {
        var card = document.createElement('div');
        card.className = 'card';
        var cardInner = document.createElement('div');
        cardInner.className = 'card-inner';
        var cardFront = document.createElement('div');
        cardFront.className = 'card-front';
        var cardBack = document.createElement('div');
        cardBack.className = 'card-back';
        cardBack.style.backgroundColor = color[i];
        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);
        card.addEventListener('click', function () {
            if (clickFlag && !completedCard.includes(this)) {
                card.classList.toggle('flipped');
                clickCard.push(this);
                if (clickCard.length === 2) {
                    var firstBackGround = clickCard[0].querySelector('.card-back').style.backgroundColor;
                    var secondBackGround = clickCard[1].querySelector('.card-back').style.backgroundColor;
                    if (firstBackGround === secondBackGround) {
                        completedCard.push(clickCard[0]);
                        completedCard.push(clickCard[1]);
                        clickCard = [];
                        if (completedCard.length === horizontal * vertical) {
                            var endTime = new Date().getTime();
                            alert("\uCD95\uD558\uD569\uB2C8\uB2E4. ".concat((endTime - startTime.getTime()) / 1000, "\uCD08 \uAC78\uB838\uC2B5\uB2C8\uB2E4"));
                            document.querySelector('#wrapper').innerHTML = '';
                            colorCandidate = colors.slice();
                            color = [];
                            completedCard = [];
                            startTime = null;
                            shuffle();
                            setCard(horizontal, vertical);
                        }
                    }
                    else {
                        clickFlag = false;
                        setTimeout(function () {
                            clickCard[0].classList.remove('flipped');
                            clickCard[1].classList.remove('flipped');
                            clickFlag = true;
                            clickCard = [];
                        }, 1000);
                    }
                }
            }
        });
        document.querySelector('#wrapper').appendChild(card);
    };
    for (var i = 0; i < horizontal * vertical; i++) {
        _loop_1(i);
    }
    document.querySelectorAll('.card').forEach(function (card, index) {
        setTimeout(function () {
            card.classList.add('flipped');
        }, 1000 + 100 * index);
    });
    setTimeout(function () {
        document.querySelectorAll('.card').forEach(function (card, index) {
            card.classList.remove('flipped');
        });
        clickFlag = true;
        startTime = new Date();
    }, 3000);
}
shuffle();
setCard(horizontal, vertical);
