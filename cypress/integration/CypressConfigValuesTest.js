describe('Test suite for fetchig values from Cypress.json', function () {
  it('Test case 1', function () {
    const json = Cypress.config();
    cy.log(Cypress.config());
    cy.log(JSON.stringify(json));
    cy.log(Cypress.config().defaultCommandTimeout);
    cy.log((JSON.stringify(json)).defaultCommandTimeout);

    Cypress.config('defaultCommandTimeout', 12000);
    cy.log(Cypress.config('defaultCommandTimeout'));
    cy.log(Cypress.config().defaultCommandTimeout);
  })

  it('Learn about JSON and JavaScript Objects', function () {
    //let JavaScriptObject = { "name": "Aniruddha", "age": 35 };

    //This also yeilds same result
    let JavaScriptObject = { name: "Aniruddha", age: 35 };
    
    cy.log(JavaScriptObject);

        //Converts a JavaScript value (i.e. JSON Value) to a JSON string.
    let JavaScriptObjectString = JSON.stringify(JavaScriptObject);
    cy.log(JavaScriptObjectString);

    cy.log(JavaScriptObject.age);
    cy.log(JavaScriptObjectString.name); //prints nothing...why???
    //dot notation is working only with JavaScript objects and not with JSON String

    let JSONString = "{\"Name\""+":"+"\"Aniruddha\",\"Age\":"+"35,\"Occupation\":\"Software Professional\"}";
    let JSONObjectFromString = JSON.parse(JSONString);
    //Converts a JavaScript Object Notation (JSON) string into an JSON object.
    cy.log(JSONObjectFromString.Occupation);
    cy.log(JSONObjectFromString.Name);
    cy.log(JSONString);
    cy.log(JSONObjectFromString);
  })

  it('Cypress environment', function () {
    cy.log(JSON.stringify(Cypress.env()));
  })
})