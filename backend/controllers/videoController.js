const videoModel = require("../models/videoModel");

// get all videos
const getAllVideos = async (req, res) => {
  try {
    console.log("Getting all videos.....");
    const data = await videoModel.find();
    console.log(data);
    res.send(data);
  } catch (error) {
    console.error("Error while getting all videos", error);
    res.status(500).send("Internal Server Error");
  }
};

// get video by id
const getVideoById = async (req, res) => {
  console.log("Getting video by id.....");
  const { id } = req.params;
  const video = await videoModel.findOneAndUpdate(
    { videoID: id },
    { $inc: { views: 1 } },
    { new: true }
  );
  console.log("here", video);
  if (!video) {
    res.status(404).send("Video not found");
  } else {
    res.send(video);
  }
};

// get related videos by id
const getRelatedVideosById = async (req, res) => {
  const { id } = req.params;
  const video = await videoModel.find({ videoID: id });
  if (!video) {
    res.status(404).send("Video not found");
  } else {
    const relatedVideos = await videoModel.find({
      category: video[0].category,
    });
    res.send(relatedVideos);
  }
};

// get videos by category
const getVideoByCategory = async (req, res) => {
  const { type } = req.params;
  const videos = await videoModel.find({ category: type });
  if (!videos) {
    res.status(404).send("Videos not found");
  } else {
    res.send(videos);
  }
};

module.exports = {
  getAllVideos,
  getVideoById,
  getRelatedVideosById,
  getVideoByCategory,
};
