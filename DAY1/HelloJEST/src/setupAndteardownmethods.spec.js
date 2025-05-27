fdescribe("a suite for using setup and teardown methods", () => {
  beforeAll(() => {
    console.log("This runs once before all tests in this suite");
  });
  afterAll(() => {
    console.log("This runs once after all tests in this suite");
  });
  beforeEach(() => {
    console.log("This runs before each test in this suite");
  });
  afterEach(() => {
    console.log("This runs after each test in this suite");
  });

  it("sample test", () => {
    console.log("Test 1 is running");
    expect(true).toBe(true);
  });
  it("sample test2", () => {
    console.log("Test 2 is running");

    expect(true).toBe(true);
  });
});
