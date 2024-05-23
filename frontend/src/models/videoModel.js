import mongoose from "mongoose";

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
  category: {
    type: String,
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

export default mongoose.model("Video", videoSchema);
