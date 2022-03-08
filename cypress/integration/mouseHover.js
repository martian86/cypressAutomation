describe('Test popups', function () {
  it('Test mouse hover', ()=>{
    cy.visit(Cypress.env('urlAutomationPractise'));
    cy.get('.mouse-hover-content').invoke('show').contains('Top').click();
    //cy.contains('Top').click();
    cy.url().should('contain', '#top');
  })

  it('Force click on \'Top\' button which is hidden', ()=>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('.mouse-hover-content').contains('Top').click({ force: true });// Instead of invoke('show') method, you can use {force:true};
    cy.url().should('contain', '#top');
  })
})