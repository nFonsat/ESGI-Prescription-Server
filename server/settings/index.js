"use strict";

module.exports = function (app) {

    const DEFAULT_ENV = 'development';

    var env = DEFAULT_ENV;

    app.use(require('morgan')('short'));

    app.settings = require('./' + env);

};