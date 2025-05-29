describe("first test suite", () => {
  // it("visits Flipkart home page", () => {
  //   cy.visit("https://www.flipkart.com/");
  // });
  it("visits Flipkart home page and searches for iphone", () => {
    cy.visit("https://www.flipkart.com/");
    // select (focus) the textbox & then type iPhone
    cy.get("input.Pke_EE").type("iphone");
  });
});
