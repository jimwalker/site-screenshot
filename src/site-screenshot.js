'use strict';

// Load modules
const phantomjs = require('phantomjs-prebuilt');
const path = require('path');
const childProcess = require('child_process');
const binPath = phantomjs.path;

exports.ImageBase64 = function (url, sizeX = 320, sizeY = 240) {
    
    try {
        if(url !== undefined) {
            const childArgs = [
                '--ignore-ssl-errors=true',
                path.join(__dirname, 'phantom.js'),
                url,
                sizeX,
                sizeY,            
            ];

            // Return JSON
            return JSON.parse(childProcess.execFileSync(binPath, childArgs).toString());
        } else {
            // fail
            return {"status":"fail","url":""};
        }
    } catch (e) {
        // fail
        return {"status":"fail","url":url};
    }
};