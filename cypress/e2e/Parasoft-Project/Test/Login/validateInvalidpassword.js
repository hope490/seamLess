const { HomePage } = require("../../PageObjects/HomePage.cy");

describe("Wrong password", () => {
  const login = new HomePage();
  const URL = "https://parabank.parasoft.com/parabank/index.htm";

  beforeEach(() => {
    cy.visit(URL);
  });

  it("Should not log user in with wrong password", () => {
    login.clickCustomerLoginBtn();
    cy.fixture("data.json").then((data) => {
      login.userNameField().type(data.userNameField);
      login.passwordField().type(data.wrongPassword);
    });
    login.LoginBTN().click();
    login
      .loginErrorMessage()
      .should(
        "contain.text",
        "The username and password could not be verified."
      );
  });
});
