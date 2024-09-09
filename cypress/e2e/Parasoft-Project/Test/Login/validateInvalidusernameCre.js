const { HomePage } = require("../../PageObjects/HomePage.cy");

describe("Invalid Username", () => {
  const login = new HomePage();
  const URL = "https://parabank.parasoft.com/parabank/index.htm";

  beforeEach(() => {
    cy.visit(URL);
  });

  it("Should not log user in with invalid username credentials", () => {
    login.clickCustomerLoginBtn();
    cy.fixture("data.json").then((data) => {
      login.userNameField().type(data.invalidUserName);
      login.passwordField().type(data.passwordField);
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
