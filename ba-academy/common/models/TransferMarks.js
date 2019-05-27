'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(TransferMarks) {
  Composer.restrictModelMethods(TransferMarks);
};
