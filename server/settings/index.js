"use strict";

const morgan = require('morgan');

module.exports = function (app) {

    const DEFAULT_ENV = 'development';

    var env = DEFAULT_ENV;

    //app.use(morgan('short'));

    app.settings = require('./' + env);

};