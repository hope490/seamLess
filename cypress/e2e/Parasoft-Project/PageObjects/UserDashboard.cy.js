/// <reference types="cypress" />
const { PageBase } = require("./PageBase.cy");

class UserDashboard extends PageBase {
  newAccountBTN() {
    return cy.get("#leftPanel > ul > :nth-child(1) > a");
  }

  clickNewAccountBTN() {
    this.click(this.newAccountBTN());
  }

  transferFundBTN() {
    return cy.get("#leftPanel > ul > :nth-child(3) > a");
  }

  clicktransferFundBTN() {
    this.click(this.transferFundBTN());
  }
  requestLoanBTN() {
    return cy.get("#leftPanel > ul > :nth-child(7) > a");
  }

  clickrequestLoanBTN() {
    this.click(this.requestLoanBTN());
  }

  logOutBTN() {
    return cy.get("#leftPanel > ul > :nth-child(8) > a");
  }

  clicklogOutBTN() {
    this.click(this.logOutBTN());
  }
  accountDetails() {
    return cy.get("#accountDetails");
  }
  accountNumber() {
    return cy.get("#newAccountId");
  }
}

module.exports = { UserDashboard };
