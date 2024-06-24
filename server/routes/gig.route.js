import { Router } from "express";
import {  createGig, deleteGig, getGig, getGigs, test} from '../controllers/gig.controller.js'
import { verifyToken } from "../middleware/jwt.js";


const router = Router()

router.get('/',getGigs)
router.get('/test',test)
router.get('/single/:id', getGig)
router.post('/',verifyToken,createGig)
router.delete('/delete/:id',verifyToken,deleteGig)

export default router