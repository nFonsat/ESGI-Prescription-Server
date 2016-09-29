"use strict";

/**
 * Created by nicolas on 29/09/2016.
 */
module.exports = function (app) {

    return function(req, res, next){
        res.status(400).json({error: 'not implemented'});
    }

};