const express = require("express");
const router = express.Router();

const { create } = require("../controllers/post/postController");
const { postImgResize, imageUpload } = require("../middleware/imageUpload");
const authMiddleware = require("../middleware/authMiddleware");

router.post(
  "/create",
  authMiddleware,
  imageUpload.single("image"),
  postImgResize,
  create
);

module.exports = router;
