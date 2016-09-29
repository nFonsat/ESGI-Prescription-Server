"use strict";

require('./global');

var express = require('express'),
    app     = express();

(function init(){
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