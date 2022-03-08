describe('Test to use tables in Cypress', function () {
  it('Use tables using each() method', function () {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    
    cy.get('.table-display tbody tr').each(function ($element) {
      if ($element.find('td').eq(1).text().includes('WebServices / REST API Testing with SoapUI')){
        let price = $element.find('td').eq(2).text();
        cy.log(price);
      }
    })

    cy.get('.table-display tbody tr td:nth-child(2)').each(function ($element, index, $list) {
      if ($element.text().includes('Learn JMETER from Scratch - (Performance + Load) Testing Tool')){
        cy.log('Price of the course is: '+$element.next().text());
        cy.get('.table-display tbody tr td:nth-child(2)').eq(index).next().then(function ($price) {
          cy.log('expect($price.text()).to.equal(\'25\');');
          expect($price.text()).to.equal('25');
          cy.get('.table-display tbody tr td:nth-child(2)').eq(index).next().should('contain.text', '25');
          cy.log('One more time '+$price.text());
        })
      }
    })
  })
})