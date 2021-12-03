"use strict";
var Hero = /** @class */ (function () {
    function Hero(mine) {
        this.mine = mine;
        this.att = Math.ceil(Math.random() * 2);
        this.hp = Math.ceil(Math.random() * 5) + 25;
        this.hero = true;
        this.field = true;
    }
    return Hero;
}());
var Sub = /** @class */ (function () {
    function Sub(mine) {
        this.field = false;
        this.mine = mine;
        this.att = Math.ceil(Math.random() * 5);
        this.hp = Math.ceil(Math.random() * 5);
        this.cost = Math.floor((this.att + this.hp) / 2);
    }
    return Sub;
}());
function isSub(data) {
    return !!data.cost;
}
function isHero(data) {
    return !!data.hero;
}
new Hero(true);
var opponent = {
    hero: document.getElementById('rival-hero'),
    deck: document.getElementById('rival-deck'),
    field: document.getElementById('rival-cards'),
    cost: document.getElementById('rival-cost'),
    deckData: [],
    heroData: null,
    fieldData: [],
    chosenCard: null,
    chosenCardData: null
};
var me = {
    hero: document.getElementById('my-hero'),
    deck: document.getElementById('my-deck'),
    field: document.getElementById('my-cards'),
    cost: document.getElementById('my-cost'),
    deckData: [],
    heroData: null,
    fieldData: [],
    chosenCard: null,
    chosenCardData: null
};
var turnButton = document.getElementById('turn-btn');
var myTurn = true;
function initiate() {
    [opponent, me].forEach(function (item) {
        item.deckData = [];
        item.heroData = null;
        item.fieldData = [];
        item.chosenCard = null;
        item.chosenCardData = null;
    });
    createDeck({ mine: true, count: 5 });
    createDeck({ mine: false, count: 5 });
    createHero({ mine: true });
    createHero({ mine: false });
    redrawScreen({ mine: true });
    redrawScreen({ mine: false });
}
initiate();
function createDeck(_a) {
    var mine = _a.mine, count = _a.count;
    var player = mine ? me : opponent;
    for (var i = 0; i < count; i++) {
        player.deckData.push(new Sub(mine));
    }
    redrawDeck(player);
}
function createHero(_a) {
    var mine = _a.mine;
    var player = mine ? me : opponent;
    player.heroData = new Hero(mine);
    connectCardDOM({ data: player.heroData, DOM: player.hero, hero: true });
}
function connectCardDOM(_a) {
    var data = _a.data, DOM = _a.DOM, _b = _a.hero, hero = _b === void 0 ? false : _b;
    var cardEl = document.querySelector('.card-hidden .card').cloneNode(true);
    cardEl.querySelector('.card-att').textContent = String(data.att);
    cardEl.querySelector('.card-hp').textContent = String(data.hp);
    if (hero) {
        cardEl.querySelector(".card-cost").style.display = 'none';
        var name_1 = document.createElement('div');
        name_1.textContent = '영웅';
        cardEl.appendChild(name_1);
    }
    else {
        cardEl.querySelector('.card-cost').textContent = String(data.cost);
    }
    cardEl.addEventListener('click', function () {
        if (isSub(data) && data.mine === myTurn && !data.field) {
            if (!deckToField({ data: data })) {
                createDeck({ mine: myTurn, count: 1 });
            }
        }
        turnAction({ cardEl: cardEl, data: data });
    });
    DOM.appendChild(cardEl);
}
function redrawScreen(_a) {
    var mine = _a.mine;
    var player = mine ? me : opponent;
    redrawHero(player);
}
function redrawHero(target) {
    if (!target.heroData) {
        throw new Error('heroData가 없습니다');
    }
    target.hero.innerHTML = "";
    connectCardDOM({ data: target.heroData, DOM: target.hero, hero: true });
}
function redrawDeck(target) {
    target.deck.innerHTML = "";
    target.deckData.forEach(function (data) {
        connectCardDOM({ data: data, DOM: target.deck, hero: false });
    });
}
function redrawField(target) {
    target.field.innerHTML = "";
    target.fieldData.forEach(function (data) {
        connectCardDOM({ data: data, DOM: target.field });
    });
}
function deckToField(_a) {
    var data = _a.data;
    var target = myTurn ? me : opponent;
    var currentCost = Number(target.cost.textContent);
    if (currentCost < data.cost) {
        alert('코스트가 모자릅니다.');
        return true;
    }
    data.field = true;
    var idx = target.deckData.indexOf(data);
    target.deckData.splice(idx, 1);
    target.fieldData.push(data);
    redrawField(target);
    redrawDeck(target);
    target.cost.textContent = String(currentCost - data.cost);
    return false;
}
function turnAction(_a) {
    var cardEl = _a.cardEl, data = _a.data;
    var team = myTurn ? me : opponent;
    var enemy = myTurn ? opponent : me;
    if (cardEl.classList.contains('card-turnover')) {
        return;
    }
    var enemyCard = myTurn ? !data.mine : data.mine;
    if (enemyCard && team.chosenCardData) {
        data.hp = data.hp - team.chosenCardData.att;
        if (data.hp <= 0) {
            if (isSub(data)) {
                var index = enemy.fieldData.indexOf(data);
                enemy.fieldData.splice(index, 1);
            }
            else {
                alert('승리했습니다!');
                initiate();
            }
        }
        redrawScreen({ mine: !myTurn });
        if (team.chosenCard) {
            team.chosenCard.classList.remove('card-selected');
            team.chosenCard.classList.add('card-turnover');
        }
        team.chosenCard = null;
        team.chosenCardData = null;
        return;
    }
    else if (enemyCard) {
        return;
    }
    if (data.field) { // 카드가 필드에 있으면
        //  영웅 부모와 필드카드의 부모가 다르기때문에 document에서 모든 .card를 검색한다
        // 카드.parentNode.querySelectorAll('.card').forEach(function (card) {
        document.querySelectorAll('.card').forEach(function (card) {
            card.classList.remove('card-selected');
        });
        console.log(cardEl);
        cardEl.classList.add('card-selected');
        team.chosenCard = cardEl;
        team.chosenCardData = data;
    }
}
turnButton.addEventListener('click', function () {
    var target = myTurn ? me : opponent;
    document.getElementById('rival').classList.toggle('turn');
    document.getElementById('my').classList.toggle('turn');
    redrawField(target);
    redrawHero(target);
    myTurn = !myTurn; // 턴을 넘기는 코드
    if (myTurn) {
        me.cost.textContent = '10';
    }
    else {
        opponent.cost.textContent = '10';
    }
});
