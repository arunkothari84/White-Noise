const express = require("express");
const {
  getAllCommentsByVideoId,
  createComment,
} = require("../controllers/commentController");

const router = express.Router();

router.get("/:id", getAllCommentsByVideoId);
router.post("/", createComment);

module.exports = router;
