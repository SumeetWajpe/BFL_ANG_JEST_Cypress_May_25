xdescribe("a suite for mocking", () => {
  it("tests for a mock function", () => {
    const mockFun = jest.fn(); // create a mock function with JEST

    let result = mockFun(10);
    // expect(result).toBeUndefined();
    // expect(mockFun).toHaveBeenCalled();
    // expect(mockFun).toHaveBeenCalledWith(10);
    expect(mockFun).toHaveBeenCalledTimes(1);
  });
});

describe("a suite for mocking", () => {
  it("tests for a mock function", () => {
    const mockCallback = jest.fn(x => 42 + x);
    forEach([0, 1], mockCallback);

    // The mock function was called twice
    // expect(mockCallback.mock.calls).toHaveLength(2);
    // expect(mockCallback.mock.calls[0][0]).toBe(0);
    // expect(mockCallback.mock.calls[1][0]).toBe(1);
    expect(mockCallback.mock.results[0].value).toBe(42);
  });
});

function forEach(items, callback) {
  for (const item of items) {
    callback(item);
  }
}
