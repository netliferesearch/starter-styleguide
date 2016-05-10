'use strict';

var kss = require('kss');
var defaultConfig = require('./config');
var callback = function() {};

module.exports = {
    config: require('./config'),
	extendConfig: require('./utils/extend-config'),
    runKss: function() {
        kss(config, callback);
    }
};
