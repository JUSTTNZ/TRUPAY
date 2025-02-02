import { Router } from 'express'
import { getAllLevels } from '../controllers/level.controller.js'   

const router = Router()

router.route("/").get(getAllLevels)

export default router
