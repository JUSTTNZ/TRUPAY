import { Router } from "express"
import {
    registerUser,
    loginUser
} from "../controllers/user.controller.js"
import validator from "../middlewares/validators.js";

const router = Router();

//test endpoint
router.post("/register", validator.registerUserValidator, registerUser);

router.route("/login").post(loginUser)

export default router