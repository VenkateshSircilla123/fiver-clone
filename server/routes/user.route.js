import express, { Router } from 'express'
const router = Router()
import { getUsers, deleteUser, getUser } from '../controllers/user.controller.js'
import { verifyToken } from '../middleware/jwt.js'

router.get('/', getUsers)

router.delete('/delete/:id', verifyToken, deleteUser)
router.get('/:id', getUser)

export default router