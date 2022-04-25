import { Router } from "express";
import * as categoryController from "../controllers/categoryController.js";

const categoryRouter : Router = Router()

categoryRouter.get("/category-teacher", categoryController.getAllCategoriesWithTeachers)
categoryRouter.get("/category-discipline", categoryController.getAllCategoriesWithDisciplines)

export default categoryRouter