class CheckOutPage{
  getFrame() {
    return cy.get('.aut-iframe');
  }
  getProductRow() {
    return cy.get('tbody tr');
  }
  getQuantityValue() {
    let quantity = [];
    cy.get('tbody tr td:nth-child(2) #exampleInputEmail1').each(($elements) => {
      let qty = parseInt($elements.val());
      quantity.push(qty);
      cy.log(qty);
  });
    return quantity;
  }
  getPriceValue() {
    let priceValue = [];
    cy.get('tbody tr td:nth-child(3) strong').each(($elements) => {
      let price = parseInt($elements.text().split(' ')[1]);
      priceValue.push(price);
      cy.log(price);
    });
    return priceValue;
  }
  getTotalPriceOfAllMobiles() {
    let sumOfProducts = 0;
    cy.get('.text-right h3 strong').then(($element) => {
      let totalPrice = $element.text().split(' ')[1];
      sumOfProducts=totalPrice;
      cy.log(totalPrice);
    })
  }
  getCheckoutButton() {
    return cy.get('.btn.btn-success');
  }
}

export default CheckOutPage;