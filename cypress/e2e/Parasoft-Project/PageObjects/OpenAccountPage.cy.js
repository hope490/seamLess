/// <reference types="cypress" />
const { PageBase } = require("./PageBase.cy");

class OpenAccount extends PageBase {
  dropDownBTN() {
    return cy.get("#type");
  }

  amountField() {
    return cy.get("#fromAccountId");
  }

  accountBTN() {
    return cy.get("form > div > .button");
  }
  clickaccountBTN() {
    this.click(this.accountBTN());
  }

  verifyAccountOpened() {
    return cy.contains("Account Opened!").should("be.visible");
  }

  accountNumber() {
    return cy.get("#newAccountId");
  }

  clickaccountNumber() {
    this.click(this.accountNumber());
  }
}

module.exports = { OpenAccount };
