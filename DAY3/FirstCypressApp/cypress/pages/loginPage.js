class LoginPage {
  elements = {
    userEmail: () => cy.get("#input-email"),
    userPwd: () => cy.get("#input-password"),
    loginBtn: () => cy.get("form > .btn"),
  };

  login(userEmail, userPwd) {
    this.elements.userEmail().type(userEmail);
    this.elements.userPwd().type(userPwd);
    this.elements.loginBtn().click();
  }
}

module.exports = new LoginPage();
