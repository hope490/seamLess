const { HomePage } = require("../../PageObjects/HomePage.cy");
describe(" Should log user in", () => {
  const login = new HomePage();
  const URL = "https://parabank.parasoft.com/parabank/index.htm";
  it("LoginPage", () => {
    cy.visit(URL);
    login.clickCustomerLoginBtn();
    cy.fixture("data.json").then((data) => {
      login.userNameField().type(data.userNameField);
      login.passwordField().type(data.passwordField);
    });
    login.LoginBTN().click();
    login.loginMessage().should("contain.text", "Welcome Ebubechukwu Moghalu");
  });
});
