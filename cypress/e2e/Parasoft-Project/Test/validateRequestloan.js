const { RequestLoan } = require("../PageObjects/RequestLoanPage.cy");
const { HomePage } = require("../PageObjects/HomePage.cy");
const { UserDashboard } = require("../PageObjects/UserDashboard.cy");

describe("Request Loan", () => {
  const login = new HomePage();
  const userDashboard = new UserDashboard();
  const requestLoan = new RequestLoan();
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

  it("Should request loan", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    userDashboard.clickrequestLoanBTN();

    cy.fixture("data.json").then((data) => {
      requestLoan.loanAmountField().type(data.loanAmount);
      requestLoan.downPaymentField().type(data.downPayment);
      cy.wait(5000);
      requestLoan.fromAccount().select(data.fromAccount);
    });

    requestLoan.clickapplyBTN();
    cy.wait(5000);
    requestLoan
      .loanApprovalMessage()
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(`Actual text content: ${text}`);

        const trimmedText = text.trim().replace(/\s+/g, " ");

        expect(trimmedText).to.include(
          "Congratulations, your loan has been approved."
        );

        const accountNumberMatch = trimmedText.match(
          /Your new account number: (\d+)/
        );
        if (accountNumberMatch) {
          const accountNumber = accountNumberMatch[1];
          cy.log(`Extracted Account Number: ${accountNumber}`);
          Cypress.env("accountNumber", accountNumber);
        } else {
          throw new Error("Account number not found in the response text");
        }
      });
  });
});
