"use strict";

require('./global');

var express = require('express'),
    app     = express();

(function init(){
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        next();
    });

    require('./settings')(app);
    require('./middlewares')(app);
    require('./controllers')(app);
    require('./models')(app);
    require('./routes')(app);
}());

(function start() {
    app.listen(app.settings.port, app.settings.host, function () {
        console.log(`Server listening on port ${app.settings.port}`);
    });
}());