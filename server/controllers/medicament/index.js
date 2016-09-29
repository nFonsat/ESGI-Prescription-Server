"use strict";

/**
 * Created by nicolas on 29/09/2016.
 */
module.exports = function (app) {

    return {
        create : require('./create')(app),
        read : require('./read')(app),
        list : require('./list')(app)
    }

};