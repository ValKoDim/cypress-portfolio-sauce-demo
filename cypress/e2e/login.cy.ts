const baseUrl = Cypress.config('baseUrl');

describe('User login test suites', () => {
  beforeEach(() => {
    cy.visit(`${baseUrl}/auth/login`);
  });
  it('User login with invalid credentials', () => {
    cy.get('[data-test="email"]').type('testuser@test.com');
    cy.get('[data-test="password"]').type('$0m3$tr0ngP@ssw0rd');
    cy.get('[data-test="login-submit"]').click();
    cy.get('[data-test="login-error"]')
      .should('be.visible')
      .should('contain', 'Invalid email or password');
  })
})