'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(ParticipantInfo) {
  Composer.restrictModelMethods(ParticipantInfo);
};
