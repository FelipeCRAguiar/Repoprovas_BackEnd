import { Router } from "express";
import categoryRouter from "./categoryRouter";
import disciplineRouter from "./disciplineRouter";
import teacherRouter from "./teacherRouter";
import termRouter from "./termRouter";

const router : Router = Router()

router.use(categoryRouter)
router.use(disciplineRouter)
router.use(teacherRouter)
router.use(termRouter)

export default router