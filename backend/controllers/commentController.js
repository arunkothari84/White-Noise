const commentModel = require("../models/commentModel");
const videoModel = require("../models/videoModel");
const { SQSClient, SendMessageCommand } = require("@aws-sdk/client-sqs");
const dotenv = require("dotenv");
dotenv.config();

const credentials = {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
};

const config = {
  region: "us-east-1",
  credentials,
};

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
  console.log("Creating comment.....");
  console.log(req.body);
  const { id, comment } = req.body; // Changed variable name to commentText
  await queueForSetinment(id, comment);
  // console.log(commentText);
  // const video = await videoModel.findOne({ videoID: id });
  // if (!video) {
  //   res.status(404).send("Video not found");
  // } else {
  //   // const newComment = new commentModel({ comment: comment }); // Changed variable name to commentText
  //   // const savedComment = await newComment.save(); // Changed variable name to savedComment
  //   // video.comments.push(savedComment._id); // Use savedComment instead of comment
  //   // await video.save();
  //   await queueForSetinment(id, comment); // Changed variable name to commentText
  //   res.send(comment); // Use savedComment instead of comment
  // }
};

async function queueForSetinment(videoID, comment) {
  const sqsClient = new SQSClient(config);
  const params = {
    QueueUrl: process.env.AWS_SQS_TO_NOTIFY_SETINMENT,
    MessageBody: JSON.stringify({ videoID, comment }),
  };

  try {
    const command = new SendMessageCommand(params);
    const data = await sqsClient.send(command);
    console.log("Success from queueFor Sentiment", data.MessageId);
  } catch (error) {
    console.log("Error while sending message in queue For Sentiment", error);
  }
}

module.exports = { getAllCommentsByVideoId, createComment };
