import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mogodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

const PORT = process.env.PORT;

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit: "50mb"}));

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

app.get("/", async (req, res) => {
  res.status(200).json({
    message: "This is the server for Rohit Roy's DALL-E clone project !",
  });
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () =>
      console.log(`Server is running at : http://localhost:${PORT} :)`)
    );
  } catch (error) {
    console.log("Server connection failed : ", error);
  }
};

startServer();

// checked
