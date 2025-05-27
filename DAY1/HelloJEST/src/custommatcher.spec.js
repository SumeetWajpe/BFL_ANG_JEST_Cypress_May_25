expect.extend({
  toBeWithinARange(received, floor, ceiling) {
    const pass = received >= floor && received <= ceiling;
    if (pass) {
      return {
        message: () =>
          `${received} is within range of ${floor} and ${ceiling} `,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `${received} is outside of the range of ${floor} and ${ceiling} `,
        pass: false,
      };
    }
  },
});

describe("test suite for using custom matcher", () => {
  fit("tests for toBeWithinARange matcher", () => {
    expect(10).toBeWithinARange(12, 15);
  });
});
