"use strict";

/**
 * Created by nicolas on 29/09/2016.
 */
module.exports = function (app) {

    return function(req, res, next){
        var autocomplete = req.query.autocomplete;
        var limit        = req.query.limit || 10;
        var query = {};

        if (autocomplete) {
            query = {
                "name" : new RegExp(`.*${autocomplete}.*`, 'i')
            }
        }

        var promises = [
            app.models.Medicament.find( query ).limit(limit).exec(),
            app.models.Medicament.count().exec()
        ];

        global.Promise.all(promises)
            .then((promises) => {
                var medicaments = promises[0],
                    count       = promises[1];

                res.json({status: 200, total: count, result: medicaments});
            })
            .catch((err) => {
                console.error(err);
                res.status(500).json(err);
            });

    }

};