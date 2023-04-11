// MongoDB connection file

import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => console.log("Database(MongoDB) connection established :)"))
    .catch((error) => {
      console.error("Database(MongoDB) connection failed :(");
      console.error(error);
    });
};

export default connectDB;

// checked
