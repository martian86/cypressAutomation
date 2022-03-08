// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getCricketScore', function() {
  cy.visit('https://www.cricbuzz.com/');
  cy.get("a[title='Live Cricket Score']").click();
  cy.get("a[title = 'Australia vs England']").click();
  cy.contains('Scorecard').click();
})

Cypress.Commands.add('addProductToCart', function (productName) {
  cy.get('.card.h-100').each(function ($product) {
    if ($product.find('.card-title').text().includes(productName)) {
      cy.wrap($product).find('.card-footer .btn.btn-info').click();
      return false; //same as 'break' in Java
      }
  })
})
