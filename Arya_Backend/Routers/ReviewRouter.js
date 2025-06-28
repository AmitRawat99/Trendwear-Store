import express from 'express'
const Router = express.Router()
import { Authorize } from "../controllers/UserController.js";
import { AddReview, findReview } from "../controllers/ReviewController.js";

Router.post("/add-review/:id" , Authorize , AddReview)
Router.get("/all-reviews/:id", findReview)

export default Router