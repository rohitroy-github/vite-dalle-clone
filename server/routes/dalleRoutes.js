import express from "express";
import * as dotenv from "dotenv";
import {Configuration, OpenAIApi} from "openai";

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

router.route("/").get((req, res) => {
  res.status(200).json({message: "Hello from DALL-E!"});
});

// postRequestToSendPromptAndGetImage
router.route("/").post(async (req, res) => {
  try {
    const {prompt} = req.body;

    const aiResponse = await openai.createImage({
      prompt,
      // n: 3,
      n: 1,
      // size: "1024x1024",
      size: "512x512",
      response_format: "b64_json",
    });

    const image = aiResponse.data.data[0].b64_json;
    res.status(200).json({photo: image});
    // const image1 = aiResponse.data.data[0].b64_json;
    // const image2 = aiResponse.data.data[1].b64_json;
    // const image3 = aiResponse.data.data[2].b64_json;
    // res.status(200).json({photos: [image1, image2, image3]});
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send(error?.response.data.error.message || "Something went wrong");
  }
});

export default router;
