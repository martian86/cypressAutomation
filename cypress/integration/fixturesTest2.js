import users from '../fixtures/users.json';
describe('Test suite', () => {
  let name;
  let gender;


  before(function () {
    cy.fixture('angularData').then(function (fileData) {
      name = fileData.name;
      gender = fileData.gender
      cy.log(fileData);
    })
  })

  it.skip('First test case without fixtures', () => {
    cy.visit('https://rahulshettyacademy.com/angularpractice/');
    cy.get(".form-group:nth-child(1) input[name='name']").type('Bob');
    cy.get('#exampleFormControlSelect1').select('Female');
  })

  it.skip('Second test case using fixtures', () => {
    cy.visit('https://rahulshettyacademy.com/angularpractice/');
    cy.get(".form-group:nth-child(1) input[name='name']").type(name);
    cy.get('#exampleFormControlSelect1').select(gender);
  })

  it('Another fixtures test case using imports', function () {
    cy.log(users[0].name);
  })

  it('Another fixtures test case using cy.fixtures()', function () {
    cy.fixture('users.json').then(function ($element) {
      cy.log($element[0].name);
    })
  })
})