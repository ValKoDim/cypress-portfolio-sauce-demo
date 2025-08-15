export class Navbar {
    elements = {
        getLogo: () => cy.get('a.navbar-brand'),
        getCartButton: () => cy.getElement('nav-cart'),
        getCartQuantity: () => cy.getElement('cart-quantity'),
    };

    isVisible(): void {
        this.elements.getLogo()
            .should('be.visible');
    }
};
