import express from 'express'
import {
  get,
  post,
  getByHash,
  updateByHash,
  deleteByHash,
  enroll,
  expel,
  postVideos,
  getVideosByHash,
  deleteVideosByHash,
  postKeynotes,
  getKeynotesByHash,
  deleteKeynotesByHash,
} from './handlers.js'
import { authorization } from '../../utils/index.js'

const router = express.Router()

router.get('/', get)
router.post('/', [authorization], post)

router.get('/:lessonHash', [authorization], getByHash)
router.put('/:lessonHash', [authorization], updateByHash)
router.delete('/:lessonHash', [authorization], deleteByHash)

router.post('/:lessonHash/enroll', [authorization], enroll)
router.post('/:lessonHash/expel', [authorization], expel)

router.post('/:lessonHash/videos', [authorization], postVideos)
router.get('/:lessonHash/videos/:videoHash', [authorization], getVideosByHash)
router.delete(
  '/:lessonHash/videos/:videoHash',
  [authorization],
  deleteVideosByHash
)

router.post('/:lessonHash/keynotes', [authorization], postKeynotes)
router.get(
  '/:lessonHash/keynotes/:keynoteHash',
  [authorization],
  getKeynotesByHash
)
router.delete(
  '/:lessonHash/keynotes/:keynoteHash',
  [authorization],
  deleteKeynotesByHash
)
export { router as lessons }
