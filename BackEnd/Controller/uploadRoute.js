import express from "express";
import upload from "../utils/Multer.js";
import cloudinary from "../Configs/cloudinary.js";

const router = express.Router();

async function hadleImgeUpload(req, res) {
  try {
    if (!req.file) {
      return res
        .status(400)
        .json({ sucess: false, message: "No file received" });
    }

    const result = await cloudinary.uploader.upload_stream(
      { folder: "myUploads" },
      (error, uploadResult) => {
        if (error) {
          console.log(error);
          return res
            .status(500)
            .json({ sucess: false, message: "Cloudinary upload failed" });
        }

        return res.status(200).json({
          sucess: true,
          message: "Image uploaded successfully",
          url: uploadResult.secure_url,
          public_id: uploadResult.public_id,
        });
      }
    );

    // Send buffer to Cloudinary
    result.end(req.file.buffer);
  } catch (err) {
    console.log(err);
    res.status(500).json({ sucess: false, message: "Server error" });
  }
}
export default hadleImgeUpload;
