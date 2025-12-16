import * as winston from 'winston';
import * as colors from '@colors/colors';

import * as dotenv from 'dotenv';

dotenv.config({ path: './env/env' });

const myFormat = winston.format.printf(({ level, message, timestamp }) => {
  let colorizedMessage = message as string;
  switch (level) {
    case 'error':
      colorizedMessage = colors.red(message as string);
      break;
    case 'warn':
      colorizedMessage = colors.yellow(message as string);
      break;
    case 'info':
      colorizedMessage = colors.green(message as string);
      break;
  }

  return `${timestamp} ${level}: ${message}`;
});

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(winston.format.timestamp(), myFormat),
  transports: [new winston.transports.Console()],
});

export default logger;
