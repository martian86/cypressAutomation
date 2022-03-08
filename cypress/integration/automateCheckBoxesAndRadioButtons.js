describe('Automate UI elements test suite', function () {
  it('Automate check boxes', function () {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('#checkBoxOption1').check().should('be.checked').should('have.value', 'option1');
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value', 'option1');
    cy.get('fieldset').find("input[type='checkbox']").eq(2).check().uncheck();
    cy.get("input[type='checkbox']").check(['option2', 'option3']);
    cy.get("[value='option2']").should('be.checked');
    cy.get("[value='option3']").should('be.checked');
    cy.get('select').select(3).should('have.value', 'option3');  //index
    cy.get('select').select('Option2').should('have.value', 'option2');//Text content
    cy.get('select').select('option1').should('have.value', 'option1');//Values
  })

  it('Radio button example', function () {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('#radio-btn-example').find('label').each(function ($element) {
      if ($element.text().includes('Radio2')) {
        /*cy.wrap($element).find('.radioButton').click();*/
        cy.wrap($element).find('.radioButton').check().should('be.checked');
      }
    })
  })
})