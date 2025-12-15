import express from "express";
import { DeleteUser, GetProfile, LoginUser, RegisterUser, UpdateUser } from "../Controller/RegisterUser.js";


const router = express.Router();


router.post('/sign-up',RegisterUser)

router.post('/login',LoginUser);

router.get('/get-profile',GetProfile);

router.put('/update-profile',UpdateUser);

router.delete('/delete-profile',DeleteUser);


export default router;