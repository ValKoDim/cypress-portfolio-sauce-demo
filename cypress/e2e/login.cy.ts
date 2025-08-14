describe('User login test suites', () => {
  const baseUrl = Cypress.config('baseUrl');
  beforeEach(() => {
    cy.visit(`${baseUrl}/auth/login`);
  });
  it('User Login with valid credentials', () => {
    cy.url().should('include', '/auth/login');

    cy.get('[data-test="email"]')
      .should('be.visible')
      .clear()
      .type('customer@practicesoftwaretesting.com');
    
    cy.get('[data-test="password"]')
      .should('be.visible')
      .clear()
      .type('welcome01');

    cy.get('[data-test="login-submit"]')
      .should('be.visible')
      .should('not.be.disabled')
      .click();

    cy.url().should('include', '/account');
    cy.get('[data-test="page-title"]')
      .should('be.visible')
      .should('have.text', 'My account');
  });

  it('User login with invalid credentials', () => {
    cy.get('[data-test="email"]')
      .should('be.visible')
      .clear()
      .type('wronguser@gmail.com');

    cy.get('[data-test="password"]')
      .should('be.visible')
      .clear()
      .type('$0m3$tr0ngP@ssw0rd');

    cy.get('[data-test="login-submit"]')
      .should('be.visible')
      .should('be.enabled')
      .click();

    cy.url().should('include', '/auth/login');

    cy.get('[data-test="login-error"]')
      .should('be.visible')
      .should('have.text', 'Invalid email or password');
  });
});