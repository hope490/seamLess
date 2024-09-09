const { HomePage } = require("../PageObjects/HomePage.cy");
const { UserDashboard } = require("../PageObjects/UserDashboard.cy");

describe(" Log out", () => {
  const login = new HomePage();
  const userDashboard = new UserDashboard();
  const URL = "https://parabank.parasoft.com/parabank/index.htm";
  it("Logout Page", () => {
    cy.visit(URL);
    login.clickCustomerLoginBtn();
    cy.fixture("data.json").then((data) => {
      login.userNameField().type(data.userNameField);
      login.passwordField().type(data.passwordField);
    });
    login.LoginBTN().click();
    userDashboard.clicklogOutBTN();
  });
});
