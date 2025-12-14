import express from "express";
import { CheckAdmin } from "../Controller/Admin.js";

const router = express.Router();


router.post('/check',CheckAdmin)


export default router;