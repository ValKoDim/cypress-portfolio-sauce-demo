import HomePage from "../page-objects/HomePage";
import ProductPage from "../page-objects/ProductPage";
import CheckoutPage from "../page-objects/CheckoutPage";

describe('Core functionality of the cart', ( ) => {
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

        CheckoutPage.isVisible();
              
        CheckoutPage.elements.getProductsNames().eq(0)
            .should('be.visible')
            .invoke('text')
            .then(t=> t.trim())
            .should('eq', 'Combination Pliers');

        CheckoutPage.elements.getProductsQuantities().eq(0)
            .should('be.visible')
            .should('have.value', '1');
    });
});