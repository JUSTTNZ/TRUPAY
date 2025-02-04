import { Router } from 'express';
import { 
    addBooks,
    removeBooks } from "../controllers/book.controller.js";

import { bookValidator } from '../middlewares/validators.js';
const router = Router()

router.route("/addBooks").post(bookValidator, addBooks)
router.route("/removeBooks").post(removeBooks)

export default router