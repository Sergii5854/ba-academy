'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(Teacher) {
  Composer.restrictModelMethods(Teacher);
};
