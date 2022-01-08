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
		this.bindEvent();
	}
	//별점을 고정된 상태로 만들어 준다.
	lockedStarPoint() {
		this.lockedStarPoint = true;
	}
	unlockStarPoint() {
		this.lockedStarPoint = false;
	}

	//별점의 상태를 반환합니다.
	isLockedStarPoint() {
		return this.lockedStarPoint;
	}
}

export default StarPoint;
