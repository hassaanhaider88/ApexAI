import express from "express";
import {
  CreateCourse,
  DeleteCourse,
  getAllCourseFromDB,
  getSingeCourseFromDB,
  UpdateCourse,
} from "../Controller/Course.js";
import { isAdmin } from "../middlewares/IsAdmin.js";

const router = express.Router();

router.post("/create", isAdmin,CreateCourse);
router.get("/get-all", getAllCourseFromDB);
router.post("/get-single", getSingeCourseFromDB);
router.post("/update", isAdmin,UpdateCourse);
router.post("/delete",isAdmin ,DeleteCourse);

export default router;
