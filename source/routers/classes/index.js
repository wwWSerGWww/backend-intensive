import express from 'express'
import { get, post, getByHash, updateByHash, deleteByHash } from './handlers.js'
import { authorization } from '../../utils/index.js'

const router = express.Router()

router.get('/', get)
router.post('/', [authorization], post)

router.get('/:classHash', [authorization], getByHash)
router.put('/:classHash', [authorization], updateByHash)
router.delete('/:classHash', [authorization], deleteByHash)

export { router as classes }
