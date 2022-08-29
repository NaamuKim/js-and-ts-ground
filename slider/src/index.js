const slides = document.querySelector('.slides'); //전체 슬라이드 컨테이너
const slidesDiv = document.querySelectorAll('.slides li'); //모든 슬라이드들
let currentIdx = 0; //현재 슬라이드 index
const slideCount = slidesDiv.length; // 슬라이드 개수
const prev = document.querySelector('#prev-btn'); //이전 버튼
const next = document.querySelector('#next-btn'); //다음 버튼
const slideWidth = 1000; //한개의 슬라이드 넓이
const slideMargin = 100; //슬라이드간의 margin 값

//전체 슬라이드 컨테이너 넓이 설정
slides.style.width = (slideWidth + slideMargin) * slideCount + 'px';

function moveSlide(num) {
  slides.style.left = -num * 1100 + 'px';
  currentIdx = num;
}

prev.addEventListener('click', function () {
  if (currentIdx !== 0) moveSlide(currentIdx - 1);
});

next.addEventListener('click', function () {
  if (currentIdx !== slideCount - 1) {
    moveSlide(currentIdx + 1);
  }
});
