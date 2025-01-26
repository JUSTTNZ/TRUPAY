import { Router } from "express"
import { verifyJWT } from '../middlewares/auth.middlewares.js'
import {
    registerUser,
    loginUser,
    logOutUser
} from "../controllers/user.controller.js"
import validator from "../middlewares/validators.js";

const router = Router();

//test endpoint
router.post("/register", validator.userRegisterValidator, registerUser);

router.route("/login").post(loginUser)
router.route("/logout").post(verifyJWT, logOutUser)

export default router