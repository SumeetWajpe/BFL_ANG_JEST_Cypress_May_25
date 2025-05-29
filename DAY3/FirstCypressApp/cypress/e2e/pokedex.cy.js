/// <reference types="Cypress" />
describe("test suite for podedex app", () => {
  it("searching for pokemon (bulb) in pokedex app", () => {
    cy.visit("http://localhost:4200/home");
    cy.wait(20000);

    cy.get("#search_pokemon").type("bu");
    cy.wait(2000);
    // get will select the element (selector)
    // cy.get(".pokemon-content").should("have.length", 2);

    // find works on top of selected elements given by get()
    // cy.get("app-pokemon-item")
    //   .find(".pokemon-content")
    //   .should("have.length", 2);

    cy.get("app-pokemon-item").find(".pokemon-content").first().click();
  });
});
