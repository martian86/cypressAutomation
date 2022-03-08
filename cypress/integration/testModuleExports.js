let message = require('./moduleExports.js')
//if you use module.exports, then you need to use require() method to access the exported data
describe('Testing module.exports', function () {
  it('Testcase 1: Use module.exports', function () {
    //the exported anonymous function is stored in message
    //hence we write "message()"
    cy.log(message());
    cy.log(message.variableProperty);
  });

  it('Testcase 2: Use module.exports.variableProperty', function () {
    /*The value is stored in "variableProperty" property of message object.
    message object will look like:

    message = {
      variableProperty: 'This is property attached to export object'
    }
    Hence we write message.variableProperty
    */
    cy.log(message.variableProperty);
  })

  it('Testcase 3: Just use exports keyword', function () {
    cy.log(message());
    cy.log(message.variableProperty);
    cy.log(message.anotherVariableProperty);
    cy.log(message.justUseExportsKeyWord);
  })
})