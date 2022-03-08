class FinalPurchasePage{
  getCountryTextBox() {
    return cy.get('#country');
  }

  selectCountry(country) {
    return cy.get('.suggestions ul li a').contains(country);
  }

  selectIAgreeCheckBox() {
    cy.get('#checkbox2').check({force: true});
  }

  getPurchaseButton() {
    return cy.get("input[value='Purchase']");
  }

  getSuccessMessage() {
    cy.get('.alert.alert-success.alert-dismissible').should('contain.text', 'Thank you! Your order will be delivered in next few weeks :-).');
    cy.get('.alert.alert-success.alert-dismissible').then(($message) => {
      let text = $message.text();
      expect(text.includes('Success')).to.be.true;
    })
  }
}

export default FinalPurchasePage;