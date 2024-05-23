const commentModel = require("../models/commentModel");
const videoModel = require("../models/videoModel");

// getAllCommentsByVideoId,
// createComment,
const getAllCommentsByVideoId = async (req, res) => {
  console.log("Getting all comments by video id.....");
  const response = [];
  const { id } = req.params;
  const video = await videoModel.findOne({ videoID: id });
  console.log("im here", video);
  if (!video) {
    res.status(404).send("Video not found");
  } else {
    for (let i = 0; i < video.comments.length; i++) {
      const comment = await commentModel.findOne({ _id: video.comments[i] });
      response.push(comment);
    }
    res.send(response);
  }
};

const createComment = async (req, res) => {
  // console.log("Creating comment.....");
  // const { id, comment } = req.body;
  // console.log(comment);
  // const video = await videoModel.findOne({ videoID: id });
  // if (!video) {
  //   res.status(404).send("Video not found");
  // } else {
  //   const newComment = new commentModel({ comment });
  //   const comment = await newComment.save();
  //   video.comments.push(comment._id);
  //   await video.save();
  //   res.send(comment);
  // }
};

module.exports = { getAllCommentsByVideoId, createComment };
