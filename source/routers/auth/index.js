import express from 'express'
import { login, logout } from './handlers.js'
import { authorization } from '../../utils/index.js'

const router = express.Router()

router.post('/login', login)
router.post('/logout', [authorization], logout)

export { router as auth }
