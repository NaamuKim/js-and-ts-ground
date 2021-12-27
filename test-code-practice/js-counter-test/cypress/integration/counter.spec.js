describe("example counter app", () => {
	beforeEach(() => {
		cy.visit("http://127.0.0.1:5500/js-counter-test/index.html");
	});
	it("최초의 카운터 값을 0으로 보여준다.", () => {
		cy.get("#value").invoke("text").should("eq", "0");
	});
	it("+버튼을 클릭 시 count가 1 증가한다.", () => {
		cy.get("#value")
			.invoke("text")
			.then((value) => {
				const preValue = Number(value);
				cy.get(".increase-btn").click();
				cy.get("#value")
					.invoke("text")
					.should("eq", String(preValue + 1));
			});
	});
	it("-버튼을 클릭 시 count가 1 감소한다.", () => {
		cy.get(".increase-btn").click();
		cy.get("#value")
			.invoke("text")
			.then((value) => {
				const preValue = Number(value);
				cy.get(".decrease-btn").click();
				cy.get("#value")
					.invoke("text")
					.should("eq", String(preValue - 1));
			});
	});

	it("+ 버튼을 클릭 시 count가 10이 넘는 경우 더 이상 증가하지 못한다. (Max 값이 10)", () => {
		for (let i = 0; i < 11; i++) {
			cy.get(".increase-btn").click();
		}
		cy.get("#value").invoke("text").should("eq", "10");
	});

	it("- 버튼을 클릭 시 count가 0보다 작아지는 경우 더 이상 감소하지 못한다. (Min 값이 10)", () => {
		cy.get(".decrease-btn").click("");
		cy.get("#value").invoke("text").should("eq", "0");
	});

	it("리셋 버튼을 클릭 시 counter가 0으로 초기화된다.", () => {
		cy.get(".increase-btn").click("");
		cy.get(".reset-btn").click("");
		cy.get("#value").invoke("text").should("eq", "0");
	});
});
