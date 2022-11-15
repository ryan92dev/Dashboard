const createPost = require("./createPost");
const updatePost = require("./updatePost");
const deletePost = require("./deletePost");
const {
  getSinglePosts,
  getAllPosts,
  getAllPostsByUser,
  getCurrentUserPosts,
  getPostByCategory,
} = require("./getPost");

module.exports = {
  create: createPost,
  update: updatePost,
  delete: deletePost,
  postById: getSinglePosts,
  allPosts: getAllPosts,
  allPostsByUser: getAllPostsByUser,
  currentUserPosts: getCurrentUserPosts,
  postByCategory: getPostByCategory,
};
