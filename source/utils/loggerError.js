import { createLogger, format, transports } from 'winston'

const { combine, timestamp, printf } = format

const logFormat = printf(({ message, timestamp }) => {
  return `${timestamp} ${message}`
})

export const errorLogger = createLogger({
  level: 'error',
  format: combine(timestamp(), logFormat),
  transports: [
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
  ],
})
