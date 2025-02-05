import { Router } from 'express'
import { verifyJWT, adminAuth } from '../middlewares/auth.middlewares.js'
import { getAllDepartments, getAllSchoolDepartments, getDepartment } from '../controllers/department.controller.js'

const router = Router()

router.route("/").get(getAllDepartments)
router.route("/schooldepartment").get(verifyJWT, adminAuth, getAllSchoolDepartments)
router.route("/:name").get(getDepartment)

export default router
