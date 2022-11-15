const asyncHandler = require("express-async-handler");
const cloudinaryUploadImg = require("../../utils/cloudinary");
const slugify = require("slugify");
const fs = require("fs");
const Post = require("../../models/Post");

const sendError = require("../../utils/sendError");
const checkUpdateCategory = require("../../utils/checkUpdateCategory");
const checkUpdateTags = require("../../utils/checkUpdateTags");

const createPost = asyncHandler(async (req, res) => {
  const data = req.body;

  const { title, excerpt, content, category, tags } = data;

  const user = req.user;

  if (!user) return sendError(res, "Not authorized", 403);

  // Get the path to the image from local storage
  const localImagePath = `public/images/posts/${req.file.filename}`;

  // Upload the image to Cloudinary
  const cloudinaryResponse = await cloudinaryUploadImg(localImagePath);

  // Get the URL of the image from Cloudinary
  const cloudinaryImageUrl = cloudinaryResponse.url;

  // Check if post with the same slug already exists
  const postExists = await Post.findOne({ title });

  if (postExists) {
    return sendError(res, "Post with the same title already exists", 400);
  }

  // Create slug from title
  const slug = slugify(title, { lower: true });
  // Create a new post

  // Check if category exists in the list database or create

  if (!category) {
    return sendError(res, "Category is required", 400);
  }

  const categoryArrayIds = await checkUpdateCategory(category);

  // Check if tags exist in the list database or create

  let tagsArrayIds;

  if (tags) {
    tagsArrayIds = await checkUpdateTags(tags);
  }

  console.log("user", user);
  console.log("slug", slug);

  const post = await Post.create({
    title,
    excerpt,
    content,
    categories: categoryArrayIds,
    tags: tagsArrayIds,
    slug,
    author: user._id,
    featuredImage: cloudinaryImageUrl,
  });

  // Delete the image from local storage
  fs.unlinkSync(localImagePath);

  // Send the response
  return res.json({
    success: true,
    message: "Post created successfully",
    data: post,
  });
});

module.exports = createPost;
