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
    // expect(10).toBeWithinARange(5, 15); // passes
    // expect(10).toBeWithinARange(12, 15); // fails
    // expect(10).not.toBeWithinARange(20, 60); // passes
    expect({ noofemp: 1000, salary: 20000 }).toEqual({
      noofemp: expect.toBeWithinARange(1000, 2000),
      salary: expect.toBeWithinARange(15000, 25000),
    });
  });
});
