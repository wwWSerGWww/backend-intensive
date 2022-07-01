import { getPassword } from './env/index.js'
const password = getPassword()

export const authorization = (req, res, next) => {
  const auth = req.header('Authorization')
  if (auth && auth === password) {
    next()
  } else {
    res.status(401).json({ message: 'not authenticated' })
  }
}
