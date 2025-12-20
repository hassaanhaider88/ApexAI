import express from "express";
import {
  AllRegisteredUser,
  DeleteUser,
  GetProfile,
  LoginUser,
  RegisterUser,
  UpdateUserApproveness,
  updateUserModuleStatus,
  UploadUserCertificate,
} from "../Controller/RegisterUser.js";
import { isAdmin } from "../middlewares/IsAdmin.js";

const router = express.Router();

router.get("/all-users", AllRegisteredUser);

router.post("/register", RegisterUser);

router.post("/login", LoginUser);

router.post("/get-profile", GetProfile);

router.post("/update-profile", isAdmin, UpdateUserApproveness);

router.post("/delete-profile", isAdmin, DeleteUser);

router.post("/update-module", isAdmin, updateUserModuleStatus);

router.post("/upload-certificate", UploadUserCertificate);

export default router;
