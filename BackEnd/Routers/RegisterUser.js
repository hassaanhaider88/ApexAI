import express from "express";
import { AllRegisteredUser, DeleteUser, GetProfile, LoginUser, RegisterUser, UpdateUser } from "../Controller/RegisterUser.js";


const router = express.Router();

router.get('/all-users',AllRegisteredUser)

router.post('/register',RegisterUser)

router.post('/login',LoginUser);

router.post('/get-profile',GetProfile);

router.put('/update-profile',UpdateUser);

router.delete('/delete-profile',DeleteUser);


export default router;