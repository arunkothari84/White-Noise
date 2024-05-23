const express = require("express");
const {
  getAllVideos,
  getVideoById,
  getRelatedVideosById,
  getVideoByCategory,
} = require("../controllers/videoController");

const router = express.Router();

router.get("/", getAllVideos);

router.get("/details/:id", getVideoById);

router.get("/related/:id", getRelatedVideosById);

router.get("/category/:type", getVideoByCategory);

module.exports = router;
