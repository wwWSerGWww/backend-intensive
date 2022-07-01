import { createLogger, format, transports } from 'winston'

const { combine, timestamp, printf } = format

const logFormat = printf(({ message, timestamp }) => {
  return `  1.${message.method}
  2.${timestamp}
  3.${JSON.stringify(message.payload)}`
})

export const logger = createLogger({
  level: 'debug',
  format: combine(timestamp(), logFormat),
  transports: [
    // new transports.File({ filename: 'error.log', level: 'error' }),
    // new transports.File({ filename: 'combined.log' }),
    new transports.Console(),
  ],
})
