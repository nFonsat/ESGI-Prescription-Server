"use strict";

const router    = require('express').Router(),
    jsonparser  = require('body-parser').json()

/**
 * Created by nicolas on 29/09/2016.
 */
module.exports = function (app) {

    router.get('/all',
        app.controllers.medicament.list
    );

    router.post('',
        jsonparser,
        app.controllers.medicament.create
    );

    router.get('/:cis',
        app.controllers.medicament.read
    );

    return router;
};