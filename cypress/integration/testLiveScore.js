require('../support/commands.js');
describe('Test suite for live score', function () {
  it('Get Ashes Live score', function () {
    cy.getCricketScore();
  })
})