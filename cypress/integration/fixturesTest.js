/*
'import' and 'export' may only appear at the top level.
*/

import fileDataImport from '../fixtures/example.json'
//This imports the JSON file "example.json" into the variable "fileDataImport"

describe("Fixtures test", function () {
  it("Test1: Use cy.fixture() method to load file", function () {
    /*
      cy.fixture() assumes that the file path is within the fixtures folder.
      You can nest fixtures within folders and reference them by defining the path from the fixtures Folder

      For e.g.
      cy.fixture('users/admin.json') // Get data from {fixtures folder}/users/admin.json

    */
    
    //example.json is present in fixtures folder
    cy.fixture("example.json").then(($fileData) => {
      cy.log($fileData.email);
    });
  });

  it("Test2: Use import statement to load file into a variable", function () {
    cy.log(fileDataImport.name);
  });
});