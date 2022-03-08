class HomePage{
  getNameTextBox() {
    return cy.get("div[class='form-group'] input[name='name']");
  }

  clickAnywhere() {
    return cy.get("div[class='form-group']:nth-child(1) label:nth-child(1)");
  }

  getAlertMessage() {
    return cy.get('.alert.alert-danger');
  }

  getDataBindingTextBox() {
    return cy.get("h4 input[name='name']");
  }

  getDisabledRadioButton() {
    return cy.get(".form-check.form-check-inline:nth-child(4) .form-check-input");
  }

}
//export default HomePage;
export { HomePage as default };