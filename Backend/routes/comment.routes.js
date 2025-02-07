import { Router } from "express";
import { verifyJWT } from "jsonwebtoken";
import { addComments } from "../controllers/comments.controller";

const router = Router()

router.route("/addComment").post(verifyJWT, addComments)

export default router