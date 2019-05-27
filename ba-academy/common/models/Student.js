'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(Student) {
  Composer.restrictModelMethods(Student);
};
