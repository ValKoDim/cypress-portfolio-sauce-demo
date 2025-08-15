import { Navbar } from "../components/Navbar";

class HomePage {
    navbar = new Navbar();
    
    elements = {
        getFilters: () => cy.getElement('filters'),
        getProductsContainer: () => cy.getElement(''),
    }

    navigate(): void {
        const baseUrl = Cypress.config('baseUrl');
        cy.visit(`${baseUrl}/`);
    }

    isVisible(): void {
        cy.url().should('include', '/');

        this.elements.getFilters()
            .should('be.visible');

        this.elements.getProductsContainer()
            .should('be.visible');
    }

    getProductByName(name: string) {
    return cy.get('[data-test="product-name"]')
      .filter((index, el) => el.textContent?.trim() === name)
      .closest('a.card')
      .should('be.visible');
    }
}

export default new HomePage();