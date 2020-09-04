'use strict';

// Load dependencies
const express = require("express");
const router = express.Router();

// Load logger to pass into service
const logger = require('../services/utils/logger');

// Load Mongoose Model to load into services
const Account = require('../models/account');

// Load services module
const _accountService = require("../services/accountService/accountService");
// Initialize it with Mongoose Model and logger
const accountService = new _accountService(Account, logger);

router.get("/getall", async (req, res) => {
  logger.info('/getall');
  const accounts = await accountService.GetAllAccounts()
  // Return array of accounts
  if (accounts.errors) {
    res.status(500).json({ accounts });
  } else {
    res.status(200).json({ accounts });
  }
});

router.post("/add", async (req, res) => {
  logger.info('/add');
  const accountDTO = req.body; // #TODO: middleware validation
  const account = await accountService.AddAccount(accountDTO);
  // Return created account
  if (account.errors) {
    res.status(500).json({ account });
  } else {
    res.status(200).json({ account });
  }
})

module.exports = router;
