'use strict'

// Loading Configuration
require('dotenv').config();

// Load dependencies
const express = require('express');
const bodyParser = require('body-parser');
const accountRouter = require('./routes/accountRoutes');
const logger = require('./services/utils/logger');

// Configure server
const port = process.env.SERVER_PORT;
const host = process.env.SERVER_HOST;

require('./services/utils/database');

const app = express();

// Engine Setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Load Routes
app.use('/accounts', accountRouter);

app.listen(port, host, () => {
  logger.info(`Server listening on: http://${host}:${port}`);
});
