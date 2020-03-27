describe("Pizza Config", () => {

  const NAME_VALUE = 'John Smith';
  const SIGNUP_EMAIL = 'john@gmail.fake';
  const SIGNUP_PASS = 'secretpass';

  beforeEach(() => {
    cy.visit('http://localhost:3000/pizza/config');
    cy.get(`input[name="pizzaName"]`).as('nameInput');
    cy.get(`input[name="toppingOne"]`).as('toppingOne');
    cy.get(`input[name="toppingTwo"]`).as('toppingTwo');
    // cy.get(`input[name="isTermsOn"]`).as('termsCheckbox');
  });

  it('fills out and submits form', () => {
    cy.get('@nameInput')
      .type(NAME_VALUE)
      .should('have.value', NAME_VALUE);

    cy.get('@toppingOne')
      .check()
      .should('be.checked');

      cy.get('@toppingTwo')
      .check()
      .should('be.checked');

    cy.get('button').click();

    cy.get('#placeOrderBtn').click();
  });


  // cy.get(`input[id='name']`).should("have.length", 1);


});