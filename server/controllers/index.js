"use strict";

module.exports = function (app) {

    app.controllers = {};

    app.controllers.medicament = require('./medicament')(app);

};