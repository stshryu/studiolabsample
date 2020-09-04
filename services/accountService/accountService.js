'use strict';

class AccountService {
  account;
  logger;

  constructor (account, logger) {
    this.account = account;
    this.logger = logger;
  }

  // Method to grab all accounts through Mongoose ORM
  async GetAllAccounts () {
    const result = await this.account.find()
      .then(res => {
        return res;
      })
      .catch(err => {
        this.logger.error(err);
        return err;
      });
      return result;
  }

  // Method to Add a new account through Mongoose ORM
  async AddAccount (accountDTO) {
    let result = new this.account(accountDTO);
    let res = await result.save()
    .then(res => {
      return res;
    })
    .catch(err => {
      this.logger.error(err);
      return err;
    });
    return res;
  }
}

module.exports = AccountService;
