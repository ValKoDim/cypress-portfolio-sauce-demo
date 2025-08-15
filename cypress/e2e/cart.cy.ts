import HomePage from "../page-objects/HomePage";
import ProductPage from "../page-objects/ProductPage";

describe('Core functionality of the cart', ( ) => {
    const baseUrl = Cypress.config('baseUrl');
    beforeEach(() => {
        HomePage.navigate();
        HomePage.isVisible();
        HomePage.navbar.isVisible();
    });
    it('should add an item to the cart', () => {
        HomePage.getProductByName('Combination Pliers')
            .click();
        
        ProductPage.isVisible();
        
        ProductPage.elements.getAddtoCartButton()
            .click();
        
        ProductPage.navbar.elements.getCartQuantity()
            .should('have.text', '1');

        ProductPage.navbar.elements.getCartButton()
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