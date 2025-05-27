const Add = require("./add");
// JEST test method
// test("Test case for addition", function () {
//   // Arrange
//   let result = null;
//   // Act
//   result = Add(20, 30);

//   // Assert
//   expect(result).toBe(50);
// });

describe("Test suite for addition test cases", () => {
  it("tests addition of two numbers", () => {
    // Arrange
    let result = null;
    // Act
    result = Add(20, 30);
    // Assert
    expect(result).toBe(60);
  });
  it("tests addition of two strings", () => {
    // Arrange
    let result = null;
    // Act
    result = Add("Hello", "JEST");
    // Assert
    expect(result).toBe("HelloJEST");
  });
});
