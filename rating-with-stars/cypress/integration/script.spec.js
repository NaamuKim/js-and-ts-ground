describe('Movie Star', () => {
  it('추천 버튼이 정상적으로 동작하는지 확인합니다.', () => {
    cy.visit('http://127.0.0.1:5501/rating-with-stars/index.html');

    const buttonRecommend = cy.get('.button-recommend');
    buttonRecommend.click();
    buttonRecommend.should('have.class', 'on');
  });

  it('하트 버튼이 정상적으로 동작하는지 확인합니다.', () => {
    cy.visit('http://127.0.0.1:5501/rating-with-stars/index.html');

    const buttonHeart = cy.get('.button-heart');
    buttonHeart.click();
    buttonHeart.should('have.class', 'on');
  });
  it('별점 버튼이 정상적으로 동작하는지 확인합니다.', () => {
    cy.visit('http://127.0.0.1:5501/rating-with-stars/index.html');

    const targetIndex = 2;
    const thirdStar = cy.get('.star-background img').eq(targetIndex);

    thirdStar.click();
    cy.wait(500);

    cy.get('.star-background img').each(($img, index) => {
      const source = $img.prop('src');
      if (index < targetIndex) {
        expect(source).equal('http://127.0.0.1:5501/rating-with-stars/src/images/icon_star.png');
      }

      if (index === targetIndex) {
        expect(source).equal('http://127.0.0.1:5501/rating-with-stars/src/images/icon_half_star.png');
      }

      if (index > targetIndex) {
        expect(source).equal('http://127.0.0.1:5501/rating-with-stars/src/images/icon_empty_star.png');
      }
    });

    cy.get('.icon-remove-star').click();
    cy.wait(500);

    cy.get('.star-background img')
      .should('have.length', 5)
      .each(($img) =>
        expect($img.prop('src')).equal('http://127.0.0.1:5501/rating-with-stars/src/images/icon_empty_star.png')
      );
  });
});
