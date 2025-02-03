import { Router } from 'express';
import { 
    addBooks,
    removeBooks } from "../controllers/book.controller.js";

const router = Router()

router.route("/addBooks").post(addBooks)
router.route("/removeBooks").post(removeBooks)

export default router