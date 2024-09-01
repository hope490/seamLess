const { PageBase } = require("./PageBase.cy");

class HomePage extends PageBase {
  RegisterBTN() {
    return cy.get("#loginPanel > :nth-child(3) > a");
  }

  clickRegisterBTN() {
    this.click(this.RegisterBTN());
  }

  CustomerLoginBtn() {
    return cy.contains("Customer Login");
  }

  clickCustomerLoginBtn() {
    this.click(this.CustomerLoginBtn());
  }

  userNameField() {
    return cy.get(":nth-child(2) > .input");
  }

  passwordField() {
    return cy.get(":nth-child(4) > .input");
  }
  LoginBTN() {
    return cy.get(":nth-child(5) > .button");
  }

  loginMessage() {
    return cy.get(".smallText");
  }

  loginErrorMessage() {
    return cy.get(".error");
  }
}
module.exports = { HomePage };
