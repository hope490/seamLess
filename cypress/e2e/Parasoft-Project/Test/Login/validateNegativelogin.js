const { HomePage } = require("../../PageObjects/HomePage.cy");

describe("Invalid Login Senario", () => {
  const login = new HomePage();
  const URL = "https://parabank.parasoft.com/parabank/index.htm";

  beforeEach(() => {
    cy.visit(URL);
  });

  it("Should not log user in with incorrect credentials", () => {
    login.clickCustomerLoginBtn();
    cy.fixture("data.json").then((data) => {
      login.userNameField().type(data.invalidUserName);
      login.passwordField().type(data.wrongPassword);
    });
    login.LoginBTN().click();
    login
      .loginErrorMessage()
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(`Error message text: ${text}`);
        expect(text).to.equal(
          "The username and password could not be verified."
        );
      });
  });
});
