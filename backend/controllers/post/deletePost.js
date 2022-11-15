const asyncHandler = require("express-async-handler");
const Post = require("../../models/Post");

const deletePost = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const post = await Post.findById(id);

  if (!post) {
    return sendError(res, 404, "Post not found");
  }

  await post.delete();

  res.status(200).json({
    success: true,
    message: "Post deleted successfully",
  });
});
