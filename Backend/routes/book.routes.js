import { Router } from 'express';
import { verifyJWT, adminAuth } from '../middlewares/auth.middlewares.js';
import { 
    addBooks,
    removeBooks,
    getBook,
    getAllBooks } from "../controllers/book.controller.js";

import { bookValidator } from '../middlewares/validators.js';
const router = Router()

router.route("/addBooks").post(bookValidator, verifyJWT, adminAuth, addBooks)
router.route("/removeBooks/:bookId").delete(verifyJWT, removeBooks)
router.route("/getBook/:title").get(verifyJWT, getBook)
router.route("/getAllBooks").get(verifyJWT, getAllBooks)

export default router