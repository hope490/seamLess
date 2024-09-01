/// <reference types="cypress" />
const { PageBase } = require("./PageBase.cy");

class TransferFund extends PageBase {
  transferAmountField() {
    return cy.get("#amount");
  }
  fromAccount() {
    return cy.get("#fromAccountId");
  }

  toAccount() {
    return cy.get("#toAccountId");
  }

  transferFundBTN() {
    return cy.get(":nth-child(4) > .button");
  }
  clicktransferFundBTN() {
    this.click(this.transferFundBTN());
  }

  transfundSuccessMessage() {
    return cy.get(".title").filter((_, el) => {
      return Cypress.$(el).text().includes("Transfer Complete");
    });
  }
}

module.exports = { TransferFund };
