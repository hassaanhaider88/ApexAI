import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./Configs/ConnectDB.js";

import AdminRouter from "./Routers/Admin.js";


const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// middlewares/requestLogger.js
const requestLogger = (req, res, next) => {
    console.log(`[${req.method}] ${req.originalUrl}`);
    next();
};

app.use(requestLogger)



app.get("/", (req, res) =>
  res.json({
    success: 200,
    message: "APIs is working",
  })
);

// Admin Related related APIs endpoint
app.use('/api/admin',AdminRouter)


/// common user related APIs

app.listen(PORT, () => console.log(`Server Running on ${PORT}`));
