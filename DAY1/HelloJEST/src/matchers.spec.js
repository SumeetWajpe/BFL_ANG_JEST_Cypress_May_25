xdescribe("test suite for using different matchers", () => {
  it("tests for toBe Matcher (===)", () => {
    expect("60").toBe(60);
  });

  it("tests for toEqual to match two Objects (===) + object inspection", () => {
    expect({ name: "John" }).toEqual({ name: "John" });
  });

  it("test for toContain matcher", () => {
    expect([1, 2, 3, 4]).toContain(3);
  });
  //   test.skip("test for toContain matcher", () => {
  //     expect([1, 2, 3, 4]).toContain(3);
  //   });

  it("test for toMatch matcher", () => {
    expect("Javascript Library").toMatch(/library/i);
  });

  it("test for toBeCloseTo matcher", () => {
    expect(3).toBeCloseTo(2.9999999); // passes
    expect(3).toBeCloseTo(2.888888); // fails
  });
});
