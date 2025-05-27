const axios = require("axios");
const fetchPost = async id => {
  console.log(`Within Fetch Post`);
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );
  return response.data;
};
module.exports = { fetchPost };
