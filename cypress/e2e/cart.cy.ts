import HomePage from "../page-objects/HomePage";

describe('Core functionality of the cart', ( ) => {
    const baseUrl = Cypress.config('baseUrl');
    beforeEach(() => {
        HomePage.navigate();
        HomePage.isVisible();
    });
    it('should add an item to the cart', () => {
        HomePage.getProductByName('Combination Pliers')
            .should('be.visible')
            .click();
        
        cy.get('[data-test="add-to-cart"]')
            .should('be.visible')
            .should('not.be.disabled')
            .click();
        
        cy.get('[data-test="cart-quantity"]')
            .should('be.visible')
            .should('have.text', '1');

        cy.get('[data-test="nav-cart"]')
            .should('be.visible')
            .click();

        cy.url().should('include', '/checkout');
              
        cy.get('[data-test="product-title"]').eq(0)
            .should('be.visible')
            .invoke('text')
            .then(t=> t.trim())
            .should('eq', 'Combination Pliers');

        cy.get('[data-test="product-quantity"]').eq(0)
            .should('be.visible')
            .should('have.value', '1');
    });
});