import { Router } from "express"
import { verifyJWT } from 
import {
    registerUser,
    loginUser,
    logOutUser
} from "../controllers/user.controller.js"

const router = Router()

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/logout").post(logOutUser)

export default router