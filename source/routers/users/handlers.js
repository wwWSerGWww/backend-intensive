import dg from 'debug'

//Instruments
import { Users } from '../../controllers/index.js'
import {
  find,
  findByID,
  findByIdAndUpdate,
  findByIdAndDelete,
} from '../../models/index.js'

const debug = dg('router:users')

export const get = async (req, res) => {
  debug(`${req.method} - ${req.originalUrl}`)
  try {
    const data = await find()
    if (data.length) {
      res.status(200).json(data)
    } else {
      res.status(400).json({
        message: 'incorrect payload',
      })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const post = async (req, res) => {
  debug(`${req.method} - ${req.originalUrl}`)
  try {
    const user = new Users(req.body)
    const data = await user.create()
    if (data) {
      res.status(201).json(data)
    } else {
      res.status(400).json({
        message: 'incorrect payload',
      })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getByHash = async (req, res) => {
  debug(`${req.method} - ${req.originalUrl}`)
  try {
    const data = await findByID(req.params['userHash'])
    if (data) {
      res.status(200).json(data)
    } else {
      res.status(400).json({
        message: 'incorrect payload',
      })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
export const updateByHash = async (req, res) => {
  debug(`${req.method} - ${req.originalUrl}`)
  try {
    const data = await findByIdAndUpdate(req.params['userHash'], req.body)
    if (data) {
      res.status(200).json(data)
    } else {
      res.status(400).json({
        message: 'incorrect payload',
      })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
export const deleteByHash = async (req, res) => {
  debug(`${req.method} - ${req.originalUrl}`)
  try {
    const data = await findByIdAndDelete(req.params['userHash'])
    if (data) {
      res.status(204).send()
    } else {
      res.status(400).json({
        message: 'incorrect payload',
      })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
