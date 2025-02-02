import { Router } from 'express'
//import { verifyJWT } from '../middlewares/auth.middlewares.js'
import { getAllDepartments, getAllSchoolDepartments, getDepartment } from '../controllers/department.controller.js'

const router = Router()

router.route("/").get(getAllDepartments)
router.route("/schooldepartment").get(getAllSchoolDepartments)
router.route("/:name").get(getDepartment)

export default router
