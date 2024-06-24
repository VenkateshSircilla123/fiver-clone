import { Router } from 'express'
import { getAuth, register, login, logout } from "../controllers/auth.controller.js";

const router = Router()

router.get('/',getAuth)
router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)


export default router