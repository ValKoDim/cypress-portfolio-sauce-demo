/// <reference types="cypress" />
/// <reference path="./commands.d.ts" /> 

/*Get element by data-test attribute.
Example: cy.getElement('submit-button')*/
Cypress.Commands.add('getElement', (selector: string) => {
  return cy.get(`[data-test="${selector}"]`)
})
