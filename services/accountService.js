'use strict';

const Account = require('../models/account');
const assert = require('assert');
const logger = require('./utils/logger');

async function GetAllAccounts() {
  const accounts = await Account.find()
    .then(res => {
      return res;
    })
    .catch(err => {
      logger.error(err);
    });
    return accounts;
}

async function AddAccount(accountDTO) {
  let account = new Account(accountDTO);
  account.save()
  .then(res => {
    return res;
  })
  .catch(err => {
    logger.error(err);
  });
}

module.exports = {
  GetAllAccounts: GetAllAccounts,
  AddAccount: AddAccount
}
