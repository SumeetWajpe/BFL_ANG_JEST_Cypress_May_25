const loginPage = require("../pages/loginPage");

describe("test suite for lambdatest.io ", function () {
  before(function () {
    cy.fixture("login").then(function (data) {
      this.loginData = data;
    });
  });

  //   it("should login successfully", () => {
  //     cy.visit(
  //       "https://ecommerce-playground.lambdatest.io/index.php?route=account/login",
  //     );
  //     cy.get("#input-email").type("aniketadmin@gmail.com");
  //     cy.get("#input-password").type("admin@1");
  //     cy.get("form > .btn").click();
  //     cy.url().should(
  //       "eq",
  //       "https://ecommerce-playground.lambdatest.io/index.php?route=account/account",
  //     );
  //   });
  //   it("should login successfully but using fixtures", () => {
  //     cy.visit(
  //       "https://ecommerce-playground.lambdatest.io/index.php?route=account/login",
  //     );

  //     cy.fixture("login").then(data => {
  //       cy.get("#input-email").type(data.email);
  //       cy.get("#input-password").type(data.pwd);
  //       cy.get("form > .btn").click();
  //       cy.url().should(
  //         "eq",
  //         "https://ecommerce-playground.lambdatest.io/index.php?route=account/account",
  //       );
  //     });
  //   });
  //   it("should login successfully but using fixtures", function () {
  //     cy.visit(
  //       "https://ecommerce-playground.lambdatest.io/index.php?route=account/login",
  //     );

  //     // console.log(this.loginData);
  //     //fetching data from fixtures fetch in before -> beforeAll
  //     cy.get("#input-email").type(this.loginData.email);
  //     cy.get("#input-password").type(this.loginData.pwd);
  //     cy.get("form > .btn").click();
  //     cy.url().should(
  //       "eq",
  //       "https://ecommerce-playground.lambdatest.io/index.php?route=account/account",
  //     );
  //   });

  it("use Login Page object for reuable biz Logic", function () {
    cy.visit(
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/login",
    );
    loginPage.login(this.loginData.email, this.loginData.pwd);
    cy.url().should(
      "eq",
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/account",
    );
  });
});
