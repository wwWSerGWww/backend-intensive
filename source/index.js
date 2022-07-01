// Core
import dg from 'debug'

// Instruments
import { app } from './server.js'
import { getPort } from './utils/index.js'

// // DB
// import './db';

const PORT = getPort()
const debugSrv = dg('server:main')

app.listen(PORT, () => {
  debugSrv(`Server API is up on port ${PORT}`)
})
