import express from "express";
import {
  CreateCourse,
  DeleteCourse,
  getAllCourseFromDB,
  getSingeCourseFromDB,
  UpdateCourse,
} from "../Controller/Course.js";

const router = express.Router();

router.post("/create", CreateCourse);
router.get("/get-all", getAllCourseFromDB);
router.post("/get-single", getSingeCourseFromDB);
router.get("/update", UpdateCourse);
router.post("/delete", DeleteCourse);

export default router;
