'use strict';

// Load configuration
require('dotenv').config();

// Launch mongoose db singleton
require('./services/utils/database');

// Load dependencies
const express = require('express');
const bodyParser = require('body-parser');
const accountRouter = require('./routes/accountRoutes');
const logger = require('./services/utils/logger');

// Create server function
function server() {

  // Initialize express server
  const app = express();

  // Server configuration
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // Add routes #TODO: Loader to dynamically load based on fp
  app.use('/accounts', accountRouter);

  // Return server
  return app;
}

module.exports = server;
