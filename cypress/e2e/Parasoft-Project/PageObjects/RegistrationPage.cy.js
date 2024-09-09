/// <reference types="cypress" />
const { PageBase } = require("./PageBase.cy");

class RegisterPage extends PageBase {
  firstNameField() {
    return cy.get("#customer\\.firstName");
  }

  lastNameField() {
    return cy.get("#customer\\.lastName");
  }

  addressField() {
    return cy.get("#customer\\.address\\.street");
  }
  cityField() {
    return cy.get("#customer\\.address\\.city");
  }
  stateField() {
    return cy.get("#customer\\.address\\.state");
  }
  zipCodeField() {
    return cy.get("#customer\\.address\\.zipCode");
  }
  phoneNumberField() {
    return cy.get("#customer\\.phoneNumber");
  }
  SSnField() {
    return cy.get("#customer\\.ssn");
  }

  userNameField() {
    return cy.get("#customer\\.username");
  }

  passwordField() {
    return cy.get("#customer\\.password");
  }
  confirmPasswordField() {
    return cy.get("#repeatedPassword");
  }

  registerBTN() {
    return cy.get('[colspan="2"] > .button');
  }

  clickregisterBTN() {
    this.click(this.registerBTN());
  }

  titleMessage() {
    return cy.get(".title");
  }
}

module.exports = { RegisterPage };
