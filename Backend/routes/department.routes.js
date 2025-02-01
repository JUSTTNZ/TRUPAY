import { Router } from 'express'
import { verifyJWT } from '../middlewares/auth.middlewares.js'
import { getAllDepartments, getDepartment } from '../controllers/department.controller.js'

const router = Router()

router.route("/").get(verifyJWT, getAllDepartments)
router.route("/:name").get(verifyJWT, getDepartment)

export default router
