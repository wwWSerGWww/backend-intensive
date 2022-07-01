import express from 'express'
import { get, post, getByHash, updateByHash, deleteByHash } from './handlers.js'
import { authorization } from '../../utils/index.js'

const router = express.Router()

router.get('/', [authorization], get)
router.post('/', post)

router.get('/:userHash', [authorization], getByHash)
router.put('/:userHash', [authorization], updateByHash)
router.delete('/:userHash', [authorization], deleteByHash)

export { router as users }
