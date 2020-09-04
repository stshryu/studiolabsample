'use strict';

require('dotenv').config();
require('winston-mongodb');

const appRoot = require('app-root-path');
const winston = require('winston');
const mongoHost = process.env.MONGO_HOST;
const mongoPort = process.env.MONGO_PORT;
const mongoDatabase = process.env.MONGO_INITDB_DATABASE;

const options = {
  file: {
    level: 'debug',
    filename: `${appRoot}/logs/app.log`,
    handleExceptions: true,
    json: true,
    maxsize: 10485760,
    colorize: false
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true
  },
  database: {
    db: `mongodb://${mongoHost}:${mongoPort}/${mongoDatabase}`,
    collection: 'logs',
    level: 'info',
    capped: true
  }
}

const logger = winston.createLogger({
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.MongoDB(options.database),
    new winston.transports.Console(options.console)
  ]
})

module.exports = logger;
