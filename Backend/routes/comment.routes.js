import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middlewares.js";
import { commentValidator } from "../middlewares/validators.js";
import { addComments, deleteComments, getAllComments } from "../controllers/comments.controller.js";

const router = Router()

router.route("/addComment/:bookId").post(verifyJWT, commentValidator, addComments)
router.route("/deleteComment/:commentId").delete(verifyJWT, deleteComments)
router.route("/getAllComments/:bookId").get(verifyJWT, getAllComments)
export default router