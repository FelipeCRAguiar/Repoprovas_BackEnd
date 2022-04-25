import { Router } from "express";
import * as termController from "../controllers/termController.js"

const termRouter : Router = Router()

termRouter.get("/term", termController.getAllTerms)

export default termRouter