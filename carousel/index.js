// 1. PC 화면입니다. 모바일은 고려하지 않습니다.
// 2. 바닐라 JS로 캐러셀을 직접 만들어 봅니다.
// 3. input 태그를 통해 이미지를 업로드 하면 캐러셀에 해당 이미지가 나타납니다.
// 4. `prev` 버튼과 `next` 버튼을 누르면 각각 이전, 다음 이미지로 이동되게 합니다.
// 5. 첫 번째 사진에서 이전 버튼을 누르면 마지막 사진이, 또한 마지막 사진에서 다음 버튼을 나오면 첫 번째 사진이 나타나도록 구현하세요.
const loadFile = (input) => {
	const file = input.files[0];

	const newImage = document.createElement("img");
	newImage.setAttribute("class", "img");

	newImage.src = URL.createObjectURL(file);
	newImage.style.width = "464px";
	newImage.style.height = "463px";
};
