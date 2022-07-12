// Core
import express from 'express'

// Routers
import * as routers from './routers/index.js'

//logger
import { logger } from './utils/index.js'
import {
  errorLogger,
  validationErrorLogger,
  notFoundErrorLogger,
} from './utils/index.js'

//Error
import { NotFoundError } from './utils/errors/index.js'

// import session from 'express-session';

// Instruments
// import {
//     sessionOptions,
// } from './utils';

const app = express()

app.use(express.json())

//logger
if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    logger.debug({
      method: req.method,
      payload: req.body,
    })
    next()
  })
}

//Routers
app.use('/auth', routers.auth)
app.use('/users', routers.users)
app.use('/classes', routers.classes)
app.use('/lessons', routers.lessons)

// app.use(session(sessionOptions))

app.use('*', (req, res, next) => {
  throw new NotFoundError(`Page ${req.baseUrl} not found`, 404)
})

if (process.env.NODE_ENV !== 'test') {
  app.use((error, req, res, next) => {
    switch (error.name) {
      case 'ValidationError':
        validationErrorLogger.error(
          `${req.method}: ${req.url} ${error.message} \n ${JSON.stringify(
            req.body
          )}`
        )
        res.status(404).json({ message: error.message })
        break
      case 'NotFoundError':
        notFoundErrorLogger.error(`${req.method}: ${req.url}`)
        res.status(404).json({ message: error.message })
        break
      default:
        errorLogger.error(`${error.name}:${error.message}`)
        res.status(404).json({ message: error.message })
        break
    }
  })
}

export { app }
