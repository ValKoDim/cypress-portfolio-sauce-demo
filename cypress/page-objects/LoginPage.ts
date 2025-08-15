import { Navbar } from "../components/Navbar";

class LoginPage {
    navbar = new Navbar();
    
    elements = {
        getEmailInput: () => cy.getElement('email'),
        getPasswordInput: () => cy.getElement('password'),
        getLoginButton: () => cy.getElement('login-submit'),
        getTitle: () => cy.getElement('page-title'),
        getLoginError: () => cy.getElement('login-error')
    }

    errorMessages = {
        invalidCredentials: 'Invalid email or password'
    }

    navigate(): void {
        const baseUrl = Cypress.config('baseUrl');
        cy.visit(`${baseUrl}/auth/login`);
    }

    isVisible(): void {
        cy.url().should('include', '/auth/login');

        this.elements.getEmailInput()
            .should('be.visible');
        
        this.elements.getPasswordInput()
            .should('be.visible');
        
        this.elements.getLoginButton()
            .should('be.visible')
            .should('not.be.disabled');
    }

    loginUser(email: string, password: string): void {
        this.elements.getEmailInput()
            .clear()
            .type(email);
        
        this.elements.getPasswordInput()
            .clear()
            .type(password);
        
        this.elements.getLoginButton()
            .click();
    }

    assertError(errorMsg: String): void {
        this.elements.getLoginError()
            .should('be.visible')
            .should('have.text', errorMsg);
    }
}

export default new LoginPage();