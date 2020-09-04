'use strict';

const supertest = require('supertest');
const app = require('express');
const _accountService = require("../../services/accountService/accountService");
const chai = require('chai');

const should = chai.should();
const expect = chai.expect;
const assert = chai.assert;

// Mock Mongoose Schema methods and pass as arg into _accountService
let account = {
  find: () => Promise.resolve([ { "name": "test1" }, { "name": "test2" }])
}
let accountService = new _accountService(account);

// Mocked response should return two accounts
describe('AccountService Get All Accounts', () => {
  it('Should return array length 2', async () => {
    const result = await accountService.GetAllAccounts();
    expect(result.length).to.equal(2);
  });
});
