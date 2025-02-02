import { Router } from 'express'
import { verifyJWT } from '../middlewares/auth.middlewares.js'
import { getAllDepartments, getAllSchoolDepartments, getDepartment } from '../controllers/department.controller.js'

const router = Router()

router.route("/").get(verifyJWT, getAllDepartments)
router.route("/schooldepartment").get(verifyJWT, getAllSchoolDepartments)
router.route("/:name").get(verifyJWT, getDepartment)

export default router
