describe("Movie Star", () => {
	it("추천 버튼이 정상적으로 동작하는지 확인합니다.", () => {
		cy.visit("http://127.0.0.1:5500/rating-with-stars/index.html");

		const buttonRecommend = cy.get(".button-recommend");
		buttonRecommend.click();
		buttonRecommend.should("have.class", "on");
	});

	it("하트 버튼이 정상적으로 동작하는지 확인합니다.", () => {
		cy.visit("http://127.0.0.1:5500/rating-with-stars/index.html");

		const buttonHeart = cy.get(".button-heart");
		buttonHeart.click();
		buttonHeart.should("have.class", "on");
	});
});
