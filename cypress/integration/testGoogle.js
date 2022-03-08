beforeEach(() => {
  cy.visit('https://www.google.com/');
  cy.get("input[title='Search']").as('InputBox');
})

describe('Test suite', () => {

  it('test case: Test google home page', () => {
    cy.get('@InputBox').type('Sachin Tendulkar');
    cy.get('.gNO89b').then(function ($button) {
      $button[0].click();
    })
  })
})

/*
describe('parent', () => {
  beforeEach(() => {
    cy.wrap('one').as('a')
  })

  context('child', () => {
    beforeEach(() => {
      cy.wrap('two').as('b')
    })

    describe('grandchild', () => {
      beforeEach(() => {
        cy.wrap('three').as('c')
      })

      it('can access all aliases as properties', function () {
        expect(this.a).to.eq('one') // true
        expect(this.b).to.eq('two') // true
        expect(this.c).to.eq('three') // true
      })
    })
  })
})*/