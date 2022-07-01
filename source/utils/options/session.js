// Instruments
import { getPassword } from '../env/index.js'

export const sessionOptions = {
  key: 'user',
  secret: getPassword(),
  resave: false,
  rolling: true,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 15 * 60 * 1000,
  },
}
