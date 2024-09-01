const { HomePage } = require("../PageObjects/HomePage.cy");
const { RegisterPage } = require("../PageObjects/RegistrationPage.cy");
describe(" Should register a user", () => {
  const homepage = new HomePage();
  const registration = new RegisterPage();
  const URL = "https://parabank.parasoft.com/parabank/index.htm";
  it("RegisterPage", () => {
    cy.visit(URL);
    homepage.clickRegisterBTN();
    cy.fixture("data.json").then((data) => {
      registration.firstNameField().type(data.firstNameField);
      registration.lastNameField().type(data.lastNameField);
      registration.addressField().type(data.addressField);
      registration.cityField().type(data.cityField);
      registration.stateField().type(data.stateField);
      registration.zipCodeField().type(data.zipCodeField);
      registration.phoneNumberField().type(data.phoneNumberField);
      registration.SSnField().type(data.SSnField);
      registration.userNameField().type(data.userNameField);
      registration.passwordField().type(data.passwordField);
      registration.confirmPasswordField().type(data.confirmPasswordField);
    });

    registration.clickregisterBTN();
    registration
      .titleMessage()
      .invoke("text")
      .then((text) => {
        cy.log(text);
        expect(text).to.equal("Welcome Ebube24");
      });
  });
});
