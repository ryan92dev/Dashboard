const Post = require("../../models/Post");
const Category = require("../../models/Category");

const getSinglePosts = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id);
  res.status(200).json({
    success: true,
    post,
  });
};

const getAllPosts = async (req, res) => {
  const posts = await Post.find();
  res.status(200).json({
    success: true,
    posts,
  });
};

const getAllPostsByUser = async (req, res) => {
  const { id } = req.params;
  const posts = await Post.find({ user: id });
  res.status(200).json({
    success: true,
    posts,
  });
};

const getCurrentUserPosts = async (req, res) => {
  const posts = await Post.find({ user: req.user._id });
  res.status(200).json({
    success: true,
    posts,
  });
};

const getPostByCategory = async (req, res) => {
  const { category } = req.params;
  const categoryData = await Category.findOne({ name: category });
  const posts = await Post.find({ category: categoryData._id });
  res.status(200).json({
    success: true,
    posts,
  });
};

module.exports = {
  getSinglePosts,
  getAllPosts,
  getAllPostsByUser,
  getCurrentUserPosts,
  getPostByCategory,
};
