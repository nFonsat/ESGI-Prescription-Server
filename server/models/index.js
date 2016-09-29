"use strict";

const mongoose = require('mongoose');

module.exports = function (app) {
    app.mongoose = mongoose.connect(app.settings.database.uri);
    app.mongoose.Promise = global.Promise;

    app.models = {};
    app.models.Medicament = require('./Medicament')(app);

};