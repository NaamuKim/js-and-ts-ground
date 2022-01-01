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

	realInput.addEventListener("change", (e) => {
		loadFile(e.target);
	});

	const changeTransform = () => {
		const items = document.querySelectorAll(".carousel-item");

		items.forEach((e, i) => {
			const degree = 360 / items.length;
			if (items.length > 1) {
				e.style.transform = `rotateY(${
					i * degree
				}deg) translateZ(250px) rotateY(-${i * degree}deg)`;
			}
			if (items.length >= 5) {
				if (i === 0) {
					e.style.transform = "rotateY(0deg) translateZ(250px)";
				} else if (i === 1) {
					e.style.transform =
						"rotateY(72deg) translateZ(250px) rotateY(-72deg)";
				} else if (i === 2) {
					e.style.transform =
						"rotateY(144deg) translateZ(250px) rotateY(-144deg)";
				} else if (i === items.length - 2) {
					e.style.transform =
						"rotateY(216deg) translateZ(250px) rotateY(-216deg)";
				} else if (i === item.length - 1) {
					e.style.transform =
						"rotateY(288deg) translateZ(250px) rotateY(-288deg)";
				} else {
					e.style.transform = `rotateY(${
						i * degree
					}deg) translateZ(250px) rotateY(-${i * degree}deg)`;
				}
			}
		});
	};

	function createTag(url) {
		const list = document.createElement("li");
		const img = document.createElement("img");
		list.classList.add("carousel-item");
		img.src = url;
		list.appendChild(img);
		const items = document.querySelectorAll(".carousel-item");
		items.forEach((item) => item.classList.remove("now"));
		list.classList.add("now");
		return list;
	}

	function loadFile(input) {
		const items = document.querySelectorAll(".carousel-item");
		if (input.files) {
			const reader = new FileReader();
			reader.onload = (e) => {
				const imgUrl = e.target.result;
				carList.insertBefore(createTag(imgUrl), items[0]);
				changeTransform();
			};
			reader.readAsDataURL(input.files[0]);
		}
	}

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
			changeTransform();
		}
	};

	const onClickNext = () => {
		const carItem = document.querySelectorAll(".carousel-item");
		if (carItem.length > 1) {
			const nowItem = document.querySelector(".now");
			const next = nowItem.nextElementSibling;
			carList.appendChild(nowItem);
			next.classList.add("now");
			changeTransform();
		}
	};
	window.onload = changeTransform();
})();
