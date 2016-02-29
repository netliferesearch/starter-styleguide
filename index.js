'use strict';

var kss = require('kss');
var config = require('./config');
var callback = function() {};

module.exports = function() {
    kss(config, callback);
}
