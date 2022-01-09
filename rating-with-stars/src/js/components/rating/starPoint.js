const starImageSourceMap = {
	empty: "./src/images/icon_empty_star.png",
	half: "./src/images/icon_half_star.png",
	full: "./src/images/icon_star.png",
};

class StarPoint {
	constructor() {
		this.starContentElement = document.querySelector(".content-star");
		this.starBackgroundElement =
			this.starContentElement.querySelector(".star-background");
		this.starimages = this.starBackgroundElement.querySelectorAll("img");
		this.starPointResetButton =
			this.starContentElement.querySelector(".icon-remove-star");
		this.lockedStarPoint = false;
	}
	setup() {
		this.bindEvents();
	}
	//별점을 고정된 상태로 만들어 준다.
	lockedStarPoint() {
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
		this.starBackgroundElement.addEventListener("mousemove", (event) => {
			const { target, offsetX: currentUserPoint } = event; //offsetX: 타겟 요소에서의 마우스 포인터의 x축 위치를 반환합니다.
			const { point } = target.dataset;
			const starPointIndex = parseInt(point, 10) - 1;
			const [starImageClientRect] = target.getClientRects();
			const starImageWidth = starImageClientRect.width;
			const isOverHalf = starImageWidth / 2 < currentUserPoint;

			if (this.isLockedStarPoint()) {
				return;
			}
			console.log(isOverHalf);
		});
	}
}

export default StarPoint;
