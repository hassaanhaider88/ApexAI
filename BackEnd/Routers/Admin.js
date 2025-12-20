import express from "express";
import { CheckAdmin,SendAdminInfo } from "../Controller/Admin.js";
import { isAdmin } from "../middlewares/IsAdmin.js";

const router = express.Router();


router.post('/check',CheckAdmin)

router.post('/info',isAdmin,SendAdminInfo);
export default router;