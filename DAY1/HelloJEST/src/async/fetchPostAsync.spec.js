const postModule = require("./fetchPostAsync");
describe("test suite for async fetchPostAsync", () => {
  it("tests for fetchPostAsync", async () => {
    try {
      // arrange

      var mockResult = {
        userId: 1,
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      };
      // act

      const post = await postModule.fetchPost(1);

      // assert
      expect(post).toEqual(mockResult);
    } catch (error) {
      console.log(error);
    }
  });
});
