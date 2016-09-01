'use strict';

const _ = require('lodash');

const compiled = _.template('hello <%= user %>!');

const hello = function(name) {
  return compiled({ 'user': name });
}

module.exports = hello;