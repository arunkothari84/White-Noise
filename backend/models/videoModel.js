const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  videoID: {
    type: String,
    required: true,
  },
  videoName: {
    type: String,
    required: true,
  },
  views: {
    type: Number,
    default: 0,
  },
  likes: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

module.exports = mongoose.model("Video", videoSchema);
