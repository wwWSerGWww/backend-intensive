import dg from 'debug'

//Instruments
import { Users } from '../../controllers/index.js'

const debug = dg('router:users')

export const get = async (req, res) => {
  debug(`${req.method} - ${req.originalUrl}`)
  try {
    res.status(200).json({ data: {} })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export const post = async (req, res) => {
  debug(`${req.method} - ${req.originalUrl}`)
  try {
    const user = new Users(req.body)
    const data = await user.create()
    res.status(201).json(data)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export const getByHash = (req, res) => {
  debug(`${req.method} - ${req.originalUrl}`)
  try {
    res.status(200).json({ data: {} })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
export const updateByHash = (req, res) => {
  debug(`${req.method} - ${req.originalUrl}`)
  try {
    res.status(200).json({ data: {} })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
export const deleteByHash = (req, res) => {
  debug(`${req.method} - ${req.originalUrl}`)
  try {
    res.status(204).send()
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
