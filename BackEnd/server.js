import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./Configs/ConnectDB.js";

import AdminRouter from "./Routers/Admin.js";
import RegisterAdminRouter from "./Routers/RegisterUser.js";
import CourseRouter from "./Routers/Course.js";
import hadleImgeUpload from "./Controller/uploadRoute.js";
import upload from "./utils/Multer.js";
import ContactUsRouter from "./Routers/ContactUs.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// middlewares/requestLogger.js
const requestLogger = (req, res, next) => {
  console.log(`[${req.method}] ${req.originalUrl}`);
  next();
};

app.use(requestLogger);

app.get("/", (req, res) =>
  res.json({
    success: 200,
    message: "APIs is working",
  })
);

// Admin Related related APIs endpoint
app.use("/api/admin", AdminRouter);

/// common user related APIs
app.use("/api/user", RegisterAdminRouter);

// Course Related APId
app.use("/api/course", CourseRouter);

// uploade image
app.post("/api/upload", upload.single("courseImage"), hadleImgeUpload);

// contact us
app.use("/api/contact", ContactUsRouter);

app.listen(PORT, () => console.log(`Server Running on ${PORT}`));
