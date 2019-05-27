'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(Manager) {
  Composer.restrictModelMethods(Manager);
};
