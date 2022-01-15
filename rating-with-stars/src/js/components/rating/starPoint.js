const starImageSourceMap = {
  empty: './src/images/icon_empty_star.png',
  half: './src/images/icon_half_star.png',
  full: './src/images/icon_star.png',
};

class StarPoint {
  constructor() {
    this.starContentElement = document.querySelector('.content-star');
    this.starBackgroundElement = this.starContentElement.querySelector('.star-background');
    this.starimages = this.starBackgroundElement.querySelectorAll('img');
    this.starPointResetButton = this.starContentElement.querySelector('.icon-remove-star');
    this.lockedStarPoint = false;
  }
  setup() {
    this.bindEvents();
  }
  //별점을 고정된 상태로 만들어 준다.
  lockStarPoint() {
    this.lockedStarPoint = true;
  }
  unlockStarPoint() {
    this.lockedStarPoint = false;
  }

  //별점의 상태를 반환한다.
  isLockedStarPoint() {
    return this.lockedStarPoint;
  }

  bindEvents() {
    //마우스 움직임 이벤트
    this.starBackgroundElement.addEventListener('mousemove', (event) => {
      const { target, offsetX: currentUserPoint } = event; //offsetX: 타겟 요소에서의 마우스 포인터의 x축 위치를 반환합니다.
      const { point } = target.dataset;
      const starPointIndex = parseInt(point, 10) - 1;
      console.log(target.getClientRects());
      const [starImageClientRect] = target.getClientRects();

      const starImageWidth = starImageClientRect.width;
      const isOverHalf = starImageWidth / 2 < currentUserPoint;

      if (this.isLockedStarPoint()) {
        return;
      }
      this.renderStarPointImages({
        drawableLimitIndex: starPointIndex,
        isOverHalf,
      });
    });
    this.starBackgroundElement.addEventListener('click', () => this.lockStarPoint());
    this.starPointResetButton.addEventListener('click', () => {
      this.unlockStarPoint();
      this.resetStarPointImages();
    });
    this.starBackgroundElement.addEventListener('mouseout', () => {
      !this.isLockedStarPoint() && this.resetStarPointImages();
    });
  }
  renderStarPointImages(payload = {}) {
    const { drawableLimitIndex = -1, isOverHalf = false } = payload;
    Array.prototype.forEach.call(this.starimages, (starimage, index) => {
      //현재 순환 순서보다 마우스가 호버된 별의 인덱스가 크다면 꽉찬변, 아니면 빈별
      let imageSource = index < drawableLimitIndex ? starImageSourceMap.full : starImageSourceMap.empty;

      if (drawableLimitIndex === index) {
        imageSource = isOverHalf ? starImageSourceMap.full : starImageSourceMap.half;
      }
      starimage.src = imageSource;
    });
  }
  resetStarPointImages() {
    this.renderStarPointImages();
  }
}

export default StarPoint;
