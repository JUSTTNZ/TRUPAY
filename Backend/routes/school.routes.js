import { Router }  from "express";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

import {
    getAllSchools,
    getSchool
} from "../controllers/school.controller.js";

const router = Router();

router.route("/").get(getAllSchools);
router.route("/:name").get(verifyJWT, getSchool);

export default router