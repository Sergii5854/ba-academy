'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(Subject) {
  Composer.restrictModelMethods(Subject);
};
