"use strict";

const http  = require('http'),
    Promise = require("bluebird")
    ;

/**
 * Created by nicolas on 29/09/2016.
 */
module.exports = function(){

    return function (method, host, port, path, data) {
        return new Promise(
            function (resolve, reject) {

                var options = {
                    host: host,
                    port: port,
                    path: path,
                    method: method
                };

                if (data) {
                    const headers = {
                        'Content-Type': 'application/json',
                        'Content-Length': Buffer.byteLength(data)
                    };
                    options.headers = headers;
                }

                var req = http.request(options, (res) => {

                    res.setEncoding('utf8');

                    res.on('data', (chunk) => {
                        resolve(chunk);
                    });
                });

                req.on('error', (e) => {
                    reject(e);
                });

                if (data) {
                    req.write(data);
                }

                req.end();
            }
        );
    };
};
