'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(CreateSubject) {
  Composer.restrictModelMethods(CreateSubject);
};
