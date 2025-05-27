const Add = require("./add");
test("Test case for addition", function () {
  // Arrange
  let result = null;
  // Act
  result = Add(20, 30);

  // Assert
  expect(result).toBe(50);
});
