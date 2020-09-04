'use strict'

// Loading Configuration
require('dotenv').config();

// Load dependencies
const logger = require('./services/utils/logger');
const server = require('./server');

// Configure server
const port = process.env.SERVER_PORT;
const host = process.env.SERVER_HOST;

// Initialize server
const app = server();

// Start server
app.listen(port, host, () => {
  logger.info(`Server listening on: http://${host}:${port}`);
});
