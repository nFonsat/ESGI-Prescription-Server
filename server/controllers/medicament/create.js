"use strict";

/**
 * Created by nicolas on 29/09/2016.
 */
module.exports = function (app) {

    return function(req, res, next){
        var cis            = req.body.cis,
            name           = req.body.name,
            form           = req.body.pharmaceutical_form,
            adminStatus    = req.body.administration,
            administration = req.body.administrative_status,
            procedure      = req.body.procedure,
            comState       = req.body.commercial_state,
            dateAMM        = req.body.date_amm,
            bdmStatus      = req.body.bdm_status,
            authorisation  = req.body.authorisation,
            owner          = req.body.owner,
            security       = req.body.security;

        var option = {
            cis: cis,
            name: name,
            pharmaceutical_form: form,
            administration: adminStatus,
            administrative_status: administration,
            procedure: procedure,
            commercial_state: comState,
            date_amm: dateAMM,
            bdm_status: bdmStatus,
            authorisation: authorisation,
            owner: owner,
            security: security
        };

        app.models.Medicament.findOne( {cis:cis}).exec()
            .then((instance) => {
                if (instance) {
                    return res.status(403).json({error: "Already exist"});
                }

                var medicament = new app.models.Medicament(option);

                return medicament.save()
                    .then((data) => {
                        res.json(data);
                    });
            })
            .catch((err) => {
                console.error(err);
                res.status(500).json(err);
            });
    }

};