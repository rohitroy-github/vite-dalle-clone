import express from "express";
import * as dotenv from "dotenv";
import {v2 as cloudinary} from "cloudinary";

import Post from "../mogodb/models/post.js";

dotenv.config();

const router = express.Router();

// forFetchingAllUploadedPosts
router.route("/").get(async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json({success: true, data: posts});
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Coudn't fetch posts right now. Please try again later !",
    });
  }
});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// forUploadingPosts/Images
router.route("/").post(async (req, res) => {
  try {
    const {name, prompt, photo} = req.body;
    const photoUrl = await cloudinary.uploader.upload(photo);

    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl.url,
    });

    res.status(200).json({success: true, data: newPost});
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Unable to make a post right now. Please try again later !",
    });
  }
});

export default router;
