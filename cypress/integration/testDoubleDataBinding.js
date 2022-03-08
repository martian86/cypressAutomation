describe('Two-way Data Binding example', function () {
  let name;
  let gender;
  let productNames = [];

  beforeEach(function () {
    cy.fixture('angularData.json').then(($data) => {
      name = $data.name;
      gender = $data.gender;
      productNames = $data.productName;
    })
  })
  it('Testing angular features', function () {
    cy.visit('https://rahulshettyacademy.com/angularpractice/');
    cy.get("div[class='form-group'] input[name='name']").type('B');
    cy.get("div[class='form-group']:nth-child(1) label:nth-child(1)").click();
    cy.get('.alert.alert-danger').then(($element) => {
      let text = $element.text();
      expect(text).to.eq('Name should be at least 2 characters');
    })
    cy.get("div[class='form-group'] input[name='name']").then(($element) => {
      const minLength = $element.attr('minlength');
      //we use attr() method of JQuery because 'minlength' is an attribute
      cy.log(minLength);
      expect(minLength).to.eq("2");
    })

    cy.get("div[class='form-group'] input[name='name']").should('have.attr', 'minlength', 2);
    cy.get("div[class='form-group'] input[name='name']").clear();
    cy.get("div[class='form-group'] input[name='name']").type(name);
    cy.get("h4 input[name='name']").should('have.value', name);
    
    cy.get("h4 input[name='name']").invoke('val').then(($text) => {
      
      cy.log($text);
      expect($text).to.equal('Bob');
      assert($text = 'Bob', 'Double data binding not working');
    })

    cy.get(".form-check.form-check-inline:nth-child(4) .form-check-input").should('be.disabled');
  })

  it('Add product to cart', function () {
    cy.visit('https://rahulshettyacademy.com/angularpractice/shop');
    /*let length = productNames.length;
    for (let i = 0; i < length; i++){
      cy.addProductToCart(productNames[i]);
    }*/
    productNames.forEach((eachProductName) => {
      cy.addProductToCart(eachProductName);
    })
    cy.get('.nav-link.btn.btn-primary').contains('Checkout').click();
  })
})