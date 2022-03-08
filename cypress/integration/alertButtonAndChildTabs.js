describe('Test popups and Handling windows that open in new tab', function () {
  it('Test alert button pop ups', ()=>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('#alertbtn').click();
    cy.on('window:alert', (error, runnable) => {
      expect(error).to.eq('Hello , share this practice page and share your knowledge');
    });
    cy.get('#confirmbtn').click();
    cy.on('window:confirm', (error, runnable) => {
      expect(error).to.be.equal('Hello , Are you sure you want to confirm?');
    })

    //Handling windows that open in new tab
    cy.get('#opentab').invoke('removeAttr', 'target').click();//
    cy.url().then(function (url) {
      cy.log(url);
      if (url.includes('https://www.rahulshettyacademy.com/#/index')) {
        cy.log('Success');
      }
      expect(url).to.equal('https://www.rahulshettyacademy.com/#/index');
    })
    cy.url().should('include', 'https://www.rahulshettyacademy.com/#/index');
    cy.url().should('eq', 'https://www.rahulshettyacademy.com/#/index');
    cy.go('back');
  })
})