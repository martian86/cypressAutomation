describe('Dynamic Dropdown', function () {
  it('Dynamic Dropdown Test case', function () {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('#autocomplete').type('Ind');
    cy.get('.ui-menu-item .ui-menu-item-wrapper').each(function ($element, index, $list) {
      if ($element.text() == 'India') {
        cy.wrap($element).click();
      }
    })
    cy.get('#autocomplete').should('have.value', 'India');
  })

  it('Visible-Invisible elements', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('#displayed-text').should('be.visible');
    cy.get('#hide-textbox').click();
    cy.get('#displayed-text').should('not.be.visible');
    cy.get('#show-textbox').click();
    cy.get('#displayed-text').should('be.visible');
  })
})