describe('Button click test', () => {
  it('should change button text after click', () => {
    // Truy cập trang cần test
    cy.visit('http://localhost:5173');

    // Tìm button (giả sử có id="myButton")
    cy.get('#myButton')
      .should('have.text', 'Click me') // kiểm tra text ban đầu
      .click(); // click button

    // Kiểm tra text sau khi click
    cy.get('#myButton')
      .should('have.text', 'Đã click');

    cy.visit('http://localhost:5173/admin');
    cy.contains('button', 'Create').click();
  });


});