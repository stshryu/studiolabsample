'use strict';

const mongoose  = require('mongoose');

const schema = mongoose.Schema({
  name: { type: String, required: '{PATH} is required' },
  last_modified: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Account", schema);
