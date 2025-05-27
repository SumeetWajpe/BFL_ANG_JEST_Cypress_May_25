const postModule = require("./fetchPostAsync");
describe("test suite for async fetchPost", () => {
  //   it("tests for fetchPost using async/await", async () => {
  //     try {
  //       // arrange
  //       var mockResult = {
  //         userId: 1,
  //         id: 1,
  //         title:
  //           "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  //         body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  //       };
  //       // act
  //       const post = await postModule.fetchPost(1);

  //       // assert
  //       expect(post).toEqual(mockResult);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   });
  it("tests for fetchPost using promise", () => {
    // arrange
    var mockResult = {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    };
    // act
    const thePromise = postModule.fetchPost(1);
    thePromise.then(post => {
      // assert
      expect(post).toEqual(mockResult);
    });
  });
  fit("tests for fetchPostToReturnAPromise using promise",  () => {
    //     return expect(
    //       postModule.fetchPostToReturnAPromise(1),
    //     ).resolves.toBeDefined(); // resolves is a Jest matcher that waits for the promise to resolve
    // await expect(postModule.fetchPost(1)).resolves.toEqual({
    //   userId: 2,
    //   id: 1,
    //   title:
    //     "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    //   body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    // });
    return expect(postModule.fetchPost(1)).resolves.toEqual({
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    }); // resolves is a Jest matcher that waits for the promise to resolve
  });
});
