import { Router } from 'express'
import { verifyJWT } from '../middlewares/auth.middlewares.js'
import { getAllLevels } from '../controllers/level.controller.js'   

const router = Router()

router.route("/").get(verifyJWT, getAllLevels)

export default router
