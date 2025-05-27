const axios = require("axios");
const fetchPost = async id => {
  console.log(`Within Fetch Post`);
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );
  return response.data;
};

const fetchPostToReturnAPromise = id => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
};

module.exports = { fetchPost, fetchPostToReturnAPromise };
