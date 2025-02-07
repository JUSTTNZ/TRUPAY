import { Router } from "express"
import { verifyJWT, adminAuth } from '../middlewares/auth.middlewares.js'
import {
    registerUser,
    loginUser,
    logOutUser,
    refreshAccessToken,
    updateUserDetails,
    changeUserCurrentPassword
} from "../controllers/user.controller.js"
import { userRegisterValidator } from "../middlewares/validators.js";

const router = Router();

//test endpoint
router.route("/register").post(userRegisterValidator, registerUser);

router.route("/login").post(loginUser)

// secured routes
router.route("/logout").post(verifyJWT, logOutUser)
router.route("refreshToken").post(verifyJWT, refreshAccessToken)
router.route("/updateUserDetails").patch(verifyJWT, updateUserDetails)
router.route("/changePassword").post(verifyJWT, changeUserCurrentPassword)

export default router