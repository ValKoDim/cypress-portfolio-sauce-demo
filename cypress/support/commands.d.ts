/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    /**
     * Get element by data-test attribute.
     * Example: cy.getElement('submit-button')
     */
    getElement<E extends HTMLElement = HTMLElement>(
      selector: string
    ): Chainable<JQuery<E>>;
  }
}
