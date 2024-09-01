const { TransferFund } = require("../PageObjects/TransferFundPage.cy");
const { HomePage } = require("../PageObjects/HomePage.cy");
const { UserDashboard } = require("../PageObjects/UserDashboard.cy");

describe(" Transfer Funds", () => {
  const login = new HomePage();
  const userDashboard = new UserDashboard();
  const transfer = new TransferFund();
  const URL = "https://parabank.parasoft.com/parabank/index.htm";

  before(() => {
    cy.visit(URL);
    login.clickCustomerLoginBtn();
    cy.fixture("data.json").then((data) => {
      login.userNameField().type(data.userNameField);
      login.passwordField().type(data.passwordField);
      cy.log(data.userNameField);
      cy.log(data.passwordField);
    });

    login.LoginBTN().click();
  });

  it("Should transfer funds", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    userDashboard.clicktransferFundBTN();

    cy.fixture("data.json").then((data) => {
      transfer.transferAmountField().type(data.transferAmountField);
      transfer.fromAccount().should("have.length.greaterThan", 0);
      transfer.fromAccount().select(data.fromAccount);
      transfer.toAccount().select(data.toAccount);
    });

    transfer.clicktransferFundBTN();
    transfer
      .transfundSuccessMessage()
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(`Confirmation Message: ${text}`);

        const trimmedText = text.trim().replace(/\s+/g, " ");

        expect(trimmedText).to.include("Transfer Complete");
      });
  });
});
