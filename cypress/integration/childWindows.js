describe('Handling child windows', function () {
  it('Test case to learn about new tab', function () {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    //invoke() method invokes a jQuery method as specified. For e.g. removeAttr() in this case.
    cy.get('#opentab').invoke('removeAttr', 'target').click();
    
    cy.url().then(function (url) {
      let urlOfPage = url;
      cy.log(urlOfPage);
      expect(urlOfPage).to.be.eq('https://www.rahulshettyacademy.com/#/index');
    })
  })

  it('Test case without invoke() method', function () {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('#opentab').click();
    
    cy.url().then(function (url) {
      let urlOfPage = url;
      cy.log(urlOfPage);
      expect(urlOfPage).to.be.eq('https://www.rahulshettyacademy.com/#/index');
    })
  })
})