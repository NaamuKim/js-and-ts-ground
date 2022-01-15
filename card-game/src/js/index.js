const horizontal = 5;
const vertical = 2;
const cards = [
  './src/images/binky.png',
  './src/images/gary.png',
  './src/images/javadog.png',
  './src/images/licat.png',
  './src/images/mura.png',
];
let clickFlag = true;
let clickCard = [];
let completedCard = [];
function setCard(horizontal, vertical) {
  clickFlag = false;
  for (let i = 0; i < horizontal * vertical; i++) {
    const card = document.createElement('div');
    card.className = 'card';
    const cardInner = document.createElement('div');
    cardInner.className = 'card-inner';
    const cardFront = document.createElement('div');
    cardFront.className = 'card-front';
    const cardBack = document.createElement('div');
    cardBack.className = 'card-back';
    cardBack.style.background = `url(${cards[i]})`;
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);

    card.addEventListener('click', function () {
      if (clickFlag && !completedCard.includes(this)) {
        card.classList.toggle('flipped');
        clickCard.push(this);
        if (clickCard.length === 2) {
          const firstBackGround = clickCard[0].querySelector('.card-back').style.background;
          const secondBackGround = clickCard[1].querySelector('.card-back').style.background;
          if (firstBackGround === secondBackGround) {
            completedCard.push(clickCard[0]);
            completedCard.push(clickCard[1]);
            clickCard = [];
            if (completedCard.length === horizontal * vertical) {
              const endTime = new Date().getTime();
              alert(`축하합니다. ${(endTime - startTime.getTime()) / 1000}초 걸렸습니다`);
              document.querySelector('#wrapper').innerHTML = '';
              colorCandidate = cards.slice();
              cards = [];
              completedCard = [];
              startTime = null;
              shuffle();
              setCard(horizontal, vertical);
            }
          } else {
            clickFlag = false;
            setTimeout(() => {
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
  }

  document.querySelectorAll('.card').forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('flipped');
    }, 1000 + 100 * index);
  });
  setTimeout(() => {
    document.querySelectorAll('.card').forEach((card, index) => {
      card.classList.remove('flipped');
    });
    clickFlag = true;
    startTime = new Date();
  }, 3000);
}
setCard(horizontal, vertical);
