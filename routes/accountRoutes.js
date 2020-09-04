'use strict';

const express = require("express");
const router = express.Router();
const accountService = require("../services/accountService");
const Account = require("../models/account");
const logger = require('../services/utils/logger');

router.get("/getall", async (req, res) => {
  logger.info('/getall');
  const accounts = await accountService.GetAllAccounts();
  logger.info('/getall 200');
  res.status(200).json(accounts);
});

router.post("/add", async (req, res) => {
  logger.info('/add');
  const accountDTO = req.body;
  const account = await accountService.AddAccount(accountDTO);
  logger.info('/add 200');
  res.status(200).send(account);
})

module.exports = router;
