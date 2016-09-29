"use strict";

/**
 * Created by nicolas on 29/09/2016.
 */
module.exports = function (app) {

    return function(req, res, next){

        var cis = req.params.cis;

        app.models.Medicament.findOne( {cis:cis} ).exec()
            .then((instance) => {
                if (!instance) {
                    return res.status(404).json({status: 404, error: "Not found !"});
                }

                res.json({status: 200, result: instance});
            })
            .catch((err) => {
                console.error(err);
                res.status(500).json( {status: 500, error: err} );
            });
    }

};