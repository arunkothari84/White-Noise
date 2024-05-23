"use server";

import mongoose from "mongoose";

const ConnectDB = async () => {
  console.log(process.env.REACT_APP_MONGO_URI);
  try {
    await mongoose.connect(process.env.REACT_APP_MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed", error);
  }
};

export default ConnectDB;
