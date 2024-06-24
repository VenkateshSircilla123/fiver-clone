import { Router } from "express";
import {createReview, getReviews} from '../controllers/review.controller.js'
import { verifyToken } from "../middleware/jwt.js";

const router = Router()

router.get('/:id', getReviews)
router.post('/', verifyToken, createReview)


export default router