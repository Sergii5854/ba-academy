'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(AssetTimeEntry) {
  Composer.restrictModelMethods(AssetTimeEntry);
};
