"use strict";

const http  = require('http'),
    fs      = require('fs')
    Promise = require("bluebird")
    ;

/**
 * Created by nicolas on 29/09/2016.
 */
module.exports = function(){

    return function (url, filename) {
        return new Promise(
            function (resolve, reject) {

                var file  = fs.createWriteStream(filename);
                var count = 0;

                http.get(url, (response) => {
                    console.log(`DOWNLOAD -- ${url} in ${filename} -- ${response.statusCode}`);
                    response.setEncoding('utf8');
                    response.pipe(file);
                    response.resume();

                    response.on('data', (chunk) => {
                        console.log(chunk);
                        count += chunk.length;
                    });

                    response.on('end', () => {
                        console.log(`Total received : ${count}`);
                        resolve(file);
                    });
                }).on('error', (e) => {
                    reject(e);
                    console.error(`Got error: ${e.message}`);
                });

            }
        );
    };
};
