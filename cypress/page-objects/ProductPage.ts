import { Navbar } from "../components/Navbar";

class ProductPage {
    navbar = new Navbar();
    elements = {
        getProductTitle: () => cy.getElement('product-name'),
        getProductDescription: () => cy.getElement('product-description'),
        getProductPrice: () => cy.getElement('unit-price'),
        getAddtoCartButton: () => cy.getElement('add-to-cart'),
        getAddToFavoritesButton: () => cy.getElement('add-to-favorites'),
    };

    isVisible(): void {
        cy.url().should('include', '/product');

        this.elements.getProductTitle()
            .should('be.visible');

        this.elements.getProductDescription()
            .should('be.visible');

        this.elements.getProductPrice()
            .should('be.visible');

        this.elements.getAddtoCartButton()
            .should('be.visible')
            .should('not.be.disabled');

        this.elements.getAddToFavoritesButton()
            .should('be.visible');
    }
};

export default new ProductPage();