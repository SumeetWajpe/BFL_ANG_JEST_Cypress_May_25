describe("test suite for using different matchers", () => {
  it("tests for toBe Matcher (===)", () => {
    expect("60").toBe(60);
  });

  it("tests for toEqual to match two Objects (===) + object inspection", () => {
    expect({ name: "John" }).toEqual({ name: "John" });
  });
});
