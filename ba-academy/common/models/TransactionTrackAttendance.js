'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(TransactionTrackAttendance) {
  Composer.restrictModelMethods(TransactionTrackAttendance);
};
