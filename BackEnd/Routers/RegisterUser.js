import express from "express";
import {
  AllRegisteredUser,
  DeleteUser,
  GetProfile,
  LoginUser,
  RegisterUser,
  UpdateUserApproveness,
  updateUserModuleStatus,
} from "../Controller/RegisterUser.js";

const router = express.Router();

router.get("/all-users", AllRegisteredUser);

router.post("/register", RegisterUser);

router.post("/login", LoginUser);

router.post("/get-profile", GetProfile);

router.post("/update-profile", UpdateUserApproveness);

router.post("/delete-profile", DeleteUser);

router.post("/update-module", updateUserModuleStatus);

export default router;
