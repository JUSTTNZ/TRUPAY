import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middlewares.js";
import { addComments } from "../controllers/comments.controller.js";

const router = Router()

router.route("/addComment/:bookId").post(verifyJWT, addComments)

export default router