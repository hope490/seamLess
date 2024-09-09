const { HomePage } = require("../PageObjects/HomePage.cy");
const { OpenAccount } = require("../PageObjects/OpenAccountPage.cy");
const { UserDashboard } = require("../PageObjects/UserDashboard.cy");

describe("Account Creation", () => {
  const login = new HomePage();
  const openAccount = new OpenAccount();
  const userDashboard = new UserDashboard();
  const URL = "https://parabank.parasoft.com/parabank/index.htm";
  let accountNumber;

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
  it("Should open an account", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    userDashboard.clickNewAccountBTN();

    cy.fixture("data.json").then((data) => {
      openAccount.dropDownBTN().select(data.accountType);
    });
    cy.wait(5000);
    openAccount.clickaccountBTN();
    openAccount.verifyAccountOpened();

    openAccount
      .accountNumber()
      .invoke("text")
      .then((text) => {
        accountNumber = text.trim();
        cy.log(`Extracted Account Number: ${accountNumber}`);

        openAccount.clickaccountNumber();
        userDashboard.accountDetails().should("be.visible");
      });
  });
});
