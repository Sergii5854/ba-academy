'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(UpdateSubject) {
  Composer.restrictModelMethods(UpdateSubject);
};
