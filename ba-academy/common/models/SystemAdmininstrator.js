'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(SystemAdmininstrator) {
  Composer.restrictModelMethods(SystemAdmininstrator);
};
