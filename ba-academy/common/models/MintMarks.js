'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(MintMarks) {
  Composer.restrictModelMethods(MintMarks);
};
