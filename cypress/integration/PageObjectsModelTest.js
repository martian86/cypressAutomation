import HomePage from '../support/pageObjects/HomePage.js';
import { ProductPage } from '../support/pageObjects/ProductPage.js';
import CheckOutPage from '../support/pageObjects/CheckOutPage.js';
import FinalPurchasePage from '../support/pageObjects/FinalPurchasePage.js';

describe('Page Objects Test Suite', function () {

  let name;
  let gender;
  let productNames = [];

  beforeEach(function () {
    cy.fixture(Cypress.env('angularDataFile')).then(($data) => {
      name = $data.name;
      gender = $data.gender;
      productNames = $data.productName;
    })
  })

  it('Test case to purchase mobiles', function () {
    cy.visit(Cypress.env('urlAngular'));
    const homePage = new HomePage();
    const productPage = new ProductPage();
    const checkoutPage = new CheckOutPage();
    const finalPurchasePage = new FinalPurchasePage();

    homePage.getNameTextBox().type('B');
    homePage.clickAnywhere().click();
    homePage.getAlertMessage().then(($element) => {
      let text = $element.text();
      expect(text).to.eq('Name should be at least 2 characters');
    });
    homePage.getNameTextBox().then(($element) => {
      const minLength = $element.attr('minlength');
      //we use attr() method of JQuery because 'minlength' is an attribute
      cy.log(minLength);
      expect(minLength).to.eq("2");
    });

    homePage.getNameTextBox().should('have.attr', 'minlength', 2);
    homePage.getNameTextBox().clear();
    homePage.getNameTextBox().type(name);

    homePage.getDataBindingTextBox().should('have.value', name);
    
    homePage.getDataBindingTextBox().invoke('val').then(($text) => {
      
      cy.log($text);
      expect($text).to.equal('Bob');
      assert($text = 'Bob', 'Double data binding not working');
    });

    homePage.getDisabledRadioButton().should('be.disabled');
    productPage.getShopLink().click();

    productNames.forEach((eachProductName) => {
      cy.addProductToCart(eachProductName);
    });

    productPage.getCheckoutButton().click();

    let sum = 0;
    let sumOfProducts = 0;
    cy.get('tbody tr td:nth-child(4) strong').each(($elements) => {
      let price = Number($elements.text().split(' ')[1]);
      sum = sum + price;
      cy.log(sum);
    });

    cy.get('.text-right h3 strong').then(($element) => {
      let totalPrice = Number($element.text().split(' ')[1]);

      sumOfProducts = totalPrice;
      cy.log(sumOfProducts);
      expect(sum).to.eq(sumOfProducts);
    });

    


    checkoutPage.getCheckoutButton().click();
    

    let country = 'India';
    finalPurchasePage.getCountryTextBox().type(country);
  
    finalPurchasePage.selectCountry(country).click();
  
    finalPurchasePage.selectIAgreeCheckBox();
  
    finalPurchasePage.getPurchaseButton().click();
    finalPurchasePage.getSuccessMessage();
  })
})