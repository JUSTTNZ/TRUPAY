import { Router } from "express"
import { verifyJWT } from '../middlewares/auth.middlewares.js'
import {
    registerUser,
    loginUser,
    logOutUser,
    refreshAccessToken,
    updateUserDetails
} from "../controllers/user.controller.js"
import validator from "../middlewares/validators.js";

const router = Router();

//test endpoint
router.post("/register", validator.userRegisterValidator, registerUser);

router.route("/login").post(loginUser)

// secured routes
router.route("/logout").post(verifyJWT, logOutUser)
router.route("refreshToken").post(verifyJWT, refreshAccessToken)
router.route("/updateUserDetails").post(verifyJWT, updateUserDetails)

export default router