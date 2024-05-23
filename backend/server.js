const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const videoRoutes = require("./routes/videos");
const commentRoutes = require("./routes/comments");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();

app.use(cors());
app.use(bodyParser.json());
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen(process.env.PORT, () => {
      console.log("Server is running on port 4000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
