// Core
import dg from 'debug'

// Instruments
import { app } from './server.js'
import { getPort } from './utils/index.js'

// DB
import { connection } from './db/index.js'

const PORT = getPort()
const debugSrv = dg('server:main')

connection
  .then(() => {
    app.listen(PORT, () => {
      debugSrv(`Server API is up on port ${PORT}`)
    })
  })
  .catch((error) => debugSrv(`Error start server API: ${error.message}`))
