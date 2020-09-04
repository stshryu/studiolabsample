'use strict';

require('dotenv').config();

let mongoose = require('mongoose');

const server = process.env.MONGO_HOST;
const port = process.env.MONGO_PORT;
const database = process.env.MONG_INITDB_DATABASE;
const logger = require('./logger');

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    console.log(`${server}`);
    mongoose.connect(`mongodb://${server}:${port}/${database}`, { useNewUrlParser: true })
      .then(() => {
        logger.info("Database connection successfull");
      })
      .catch(err => {
        logger.error(err);
      });
  }
}

module.exports = new Database();
