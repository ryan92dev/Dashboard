const asyncHandler = require("express-async-handler");
const cloudinaryUploadImg = require("../../utils/cloudinary");
const slugify = require("slugify");
const fs = require("fs");
const Post = require("../../models/Post");
const Category = require("../../models/Category");
const Tag = require("../../models/Tag");
const sendError = require("../../utils/sendError");

const updatePost = asyncHandler(async (req, res, next) => {
  const { title, excerpt, content, category, tags, featured } = req.body;
  const { id } = req.params;

  const post = await Post.findById(id);

  if (!post) {
    return sendError(res, 404, "Post not found");
  }

  const slug = slugify(title, {
    replacement: "-",
    lower: true,
    strict: true,
  });

  const postExists = await Post.findOne({ slug });

  if (postExists && postExists._id.toString() !== id.toString()) {
    return sendError(res, 400, "Post with the same title already exists");
  }

  const categories = await Category.find({ _id: { $in: category } });
  const tagsData = await Tag.find({ _id: { $in: tags } });

  if (req.file) {
    const result = await cloudinaryUploadImg(req.file.path);
    fs.unlinkSync(req.file.path);

    post.image = {
      url: result.secure_url,
      public_id: result.public_id,
    };
  }

  post.title = title;
  post.slug = slug;
  post.excerpt = excerpt;
  post.content = content;
  post.category = categories;
  post.tags = tagsData;
  post.featured = featured;

  await post.save();

  res.status(200).json({
    success: true,
    message: "Post updated successfully",
    post,
  });
});

module.exports = updatePost;
