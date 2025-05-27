function fetchData(callback) {
  // AJAX
  // setTimeOut
  setTimeout(() => {
    callback("success");
  }, 2000);
}

test("test suite for async with callbacks", done => {
  function CallMeBack(data) {
    try {
      expect(data).toBe("success");
      done(); // this tells jest that the test is complete
    } catch (e) {
      console.log(e);
      done(); // this tells jest that the test is complete even if it fails
    }
  }
  fetchData(CallMeBack);
});
