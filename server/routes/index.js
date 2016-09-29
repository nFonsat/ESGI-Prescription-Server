"use strict";

module.exports = function (app) {

    app.use('/api/medicament', require('./medicament')(app));

};