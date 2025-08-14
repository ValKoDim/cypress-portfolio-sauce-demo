class AccountPage {
    elements = {
        getPageTitle: () => cy.get('[data-test="page-title"]'),
        getOptionsMenu: () => cy.get('div.btn-group-vertical'),
    }

    isVisible(): void {
        cy.url().should('include', '/account');

        this.elements.getPageTitle()
            .should('be.visible')
            .should('have.text', 'My account');

        this.elements.getOptionsMenu()
            .should('be.visible')
    }
};

export default new AccountPage();