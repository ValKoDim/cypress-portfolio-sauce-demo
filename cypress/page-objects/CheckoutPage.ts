import { Navbar } from "../components/Navbar";

class CheckoutPage {
    navbar = new Navbar();
    elements = {
        getProductsNames: () => cy.getElement('product-title'),
        getProductsQuantities: () => cy.getElement('product-quantity'),
        getStepsIndicator: () => cy.get('ul.steps-4.steps-indicator')
    };

    isVisible(): void {
        cy.url().should('include', '/checkout');

        this.elements.getStepsIndicator()
            .should('be.visible')
    }

};

export default new CheckoutPage();