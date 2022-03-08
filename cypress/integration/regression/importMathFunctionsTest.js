import { squareNum, cubeNum } from './exportMathFunctions.js';
import anyNameAreaOfObject from '../defaultexportsMathFunctions.js'
//any name can be used for importing and storing data of default export variables
//This syntax is similar to the import statement in fixtures

import { volume } from '../defaultexportsMathFunctions.js'
/*We have used brackets to store the data received from exported variables. This is different from the syntax we used for importing file data in fixtures.

Also, we use braces {...} to store imported values. Remember - if we used braces to
export variables, we have to use braces to import them as well.
Names of the variables used in import statement should be same as that in export statement.
*/

describe('Testing math functions', function () {
  it('Square of number', function () {
    cy.log(squareNum(5));
  })

  it('Cube of number', function () {
    cy.log(cubeNum(5));
  })

  it('Area of Object', function () {
    cy.log(anyNameAreaOfObject(5,4));
  })

  it('Volume of Object', function () {
    cy.log(volume(5,4,3));
  })
})