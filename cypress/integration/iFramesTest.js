///<reference types = "cypress-iframe" />
import 'cypress-iframe';
describe('Test iFrames in Cypress', function () {
  it.skip('Test 1 - without frames', function () {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('.login-btn').should('contain.text', 'LOGIN');
    cy.get('.login-btn').then(function ($el) {
      expect($el.text()).to.equal('LOGIN');
    })
  })

  it('Test 2 - Using frames', function () {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    //load the frame into cypress context
    cy.frameLoaded('#courses-iframe');

    //use cy.iframe() each time
    cy.iframe().find('.theme-btn.register-btn').should('contain.text', 'Login');
    cy.iframe().find('.theme-btn.register-btn').then(function ($el) {
      expect($el.text()).to.be.eq('Login');
    })
    cy.iframe().find('div[class="courses-block col-lg-3 col-md-4 col-sm-6 col-xs-12"]').should('have.length', 12);
    cy.iframe().contains('Mentorship').click();
    cy.iframe().find("h1[class='pricing-title text-white ls-1']").should('have.length', 2);
    cy.iframe().find("h1[class*='pricing-title']").should('have.length', 2);
    /*cy.iframe().find('div[class="courses-block col-lg-3 col-md-4 col-sm-6 col-xs-12"]').should('have.length', 12);*/
    cy.iframe().find('.pricing-title.text-white.ls-1').then(function ($element) {
      expect($element).to.have.length(2);
      expect($element.length).to.equal(2);
      cy.iframe().find('.pricing-title.text-white.ls-1').should('have.length', 2);
    })
  })
})