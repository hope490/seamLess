/// <reference types="cypress" />
const { PageBase } = require("./PageBase.cy");

class RequestLoan extends PageBase {
  loanAmountField() {
    return cy.get("#amount");
  }
  downPaymentField() {
    return cy.get("#downPayment");
  }

  fromAccount() {
    return cy.get("#fromAccountId");
  }

  applyBTN() {
    return cy.get('[colspan="2"] > .button');
  }
  clickapplyBTN() {
    this.click(this.applyBTN());
  }

  loanApprovalMessage() {
    return cy.get("#loanRequestApproved");
  }
}

module.exports = { RequestLoan };
