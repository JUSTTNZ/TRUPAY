import { Router } from 'express';
import { verifyJWT } from '../middlewares/auth.middlewares.js';
import { 
    addBooks,
    removeBooks,
    getBook,
    getAllBooks } from "../controllers/book.controller.js";

import { bookValidator } from '../middlewares/validators.js';
const router = Router()

router.route("/addBooks").post(bookValidator, addBooks)
router.route("/removeBooks/:bookId").delete(removeBooks)
router.route("/getBook/:title").get(verifyJWT, getBook)
router.route("/getAllBooks").get(verifyJWT, getAllBooks)

export default router