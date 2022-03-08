describe('Test for navigating to new domain in Cypress', function () {
  before(function () {
    cy.log('I am executed only once before any test starts.')
  })

  after(function () {
    cy.log('I am executed only once after entire test execution completes.')
  })

  beforeEach(function () {
    cy.log('I am executed before each test.')
  })

  afterEach(function () {
    cy.log('I am executed after each test.')
  })

  it('Test1', function () {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('#openwindow').click();
  })

  it('Get property value of an attribute', function () {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    //First get the button element and resolve the promise
    cy.get('#openwindow').then(function (el) {
      
      //fetch the value of 'onClick' property using prop() method of jQuery. It is url in this case
      const url = el.prop('onclick');
      cy.log(url);
      //cy.visit(url); //This will work only if it is in the same domain.
    })
  })
})