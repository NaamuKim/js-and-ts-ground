// 1. PC 화면입니다. 모바일은 고려하지 않습니다.
// 2. 바닐라 JS로 캐러셀을 직접 만들어 봅니다.
// 3. input 태그를 통해 이미지를 업로드 하면 캐러셀에 해당 이미지가 나타납니다.
// 4. `prev` 버튼과 `next` 버튼을 누르면 각각 이전, 다음 이미지로 이동되게 합니다.
// 5. 첫 번째 사진에서 이전 버튼을 누르면 마지막 사진이, 또한 마지막 사진에서 다음 버튼을 나오면 첫 번째 사진이 나타나도록 구현하세요.
(() => {
	const uploadBtn = document.querySelector(".upload-btn");
	const realInput = document.querySelector("#real-input");
	const carousel = document.querySelector(".carousel");
	const carList = document.querySelector(".carousel-list");
	const prevBtn = document.querySelector("#prev-btn");
	const nextBtn = document.querySelector("#next-btn");

	uploadBtn.addEventListener("click", () => {
		realInput.click();
	});

	const loadFile = (input) => {
		const file = input.files[0];
		const newImage = document.createElement("img");
		newImage.src = URL.createObjectURL(file);
		nowItem.appendChild(newImage);
	};

	prevBtn.addEventListener("click", () => {
		onClickPrev();
	});

	nextBtn.addEventListener("click", () => {
		onClickNext();
	});

	const onClickPrev = () => {
		const carItem = document.querySelectorAll(".carousel-item");
		if (carItem.length > 1) {
			const nowItem = document.querySelector(".now");
			const prev = carItem[carItem.length - 1];
			carList.insertBefore(prev, carItem[0]);
			nowItem.classList.remove("now");
			prev.classList.add("now");
		}
	};
	const onClickNext = () => {
		const carItem = document.querySelectorAll(".carousel-item");
		if (carItem.length > 1) {
			const nowItem = document.querySelector(".now");
			const next = nowItem.nextElementSibling;
			carList.appendChild(nowItem);
			next.classList.add("now");
		}
	};
})();
