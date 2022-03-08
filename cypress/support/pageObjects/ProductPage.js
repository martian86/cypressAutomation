class ProductPage{
  getShopLink() {
    return cy.get('a[href="/angularpractice/shop"]');
  }

  getCheckoutButton() {
    return cy.get('.nav-link.btn.btn-primary').contains('Checkout');
  }
}
export { ProductPage};