describe('My first test suite', function () {
  it('First test case', function () {
    cy.visit(Cypress.env('urlSeleniumPractise'));
    //cy.visit(Cypress.env('urlSeleniumPractise','https://www.google.com'));
    cy.get('.search-keyword').type('ca');
    cy.wait(2000);
    
    cy.get('.product:visible').should('have.length', 4);
    cy.get('.products').as('productLocator');
    cy.get('@productLocator').find('.product').should('have.length', 4);

    //If you want to access the inner elements inside <products> tag, use find()
    // For subsequent child elements, use find() method
    /*cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click()
      .then(function () {
        console.log('Product added to cart!!!');
      });*/
    cy.get('@productLocator').find('.product').each(function ($element, index) {
      
      //Once you have used cy.get(), subsequent locators use find() method
      //text() is JQuery method. It works if promise is resolved.
      if ($element.find('.product-name').text().includes('Cashew') || $element.find('.product-name').text().includes('Capsicum')) {
        
        /*click() method is depricated because $element.find() returns a promise.
        Therefore we use cy.wrap() to resolve the promise*/

        //$element.find('button').click();    //click() method is depricated

        //Tag name can also be used as CSS Selector
        cy.wrap($element).find('button').click();
      }
    })

    

    /*
    You cannot tweak the original behaviour of cypress. This wont work. If you want to get the text of the logo element, then you have to resolve the promise by yourself. You have to use then() method to resolve the promise yourself. Non cypress commands are not able to resolve the promise by themselves

    */
    /*let logo = cy.get('.brand.greenLogo');
    cy.log(logo.text());*/

    cy.get('.brand.greenLogo').then(function ($logo) {
      let logoText = $logo.text();
      cy.log(logoText);
    })

    //Assert that the text is GREENKART
    cy.get('.brand.greenLogo').should('have.text', 'GREENKART');
    cy.get('.brand.greenLogo').then(($el)=> {
      let text = $el.text();
      expect(text).to.be.eq('GREENKART');
    })

    cy.get("img[alt='Cart']").click();
    cy.contains('PROCEED TO CHECKOUT').click();
    cy.contains('Place Order').click();
  })
})