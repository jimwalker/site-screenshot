'use strict';

const Webwalker = require('./src/site-screenshot');
const imageInfo = Webwalker.ImageBase64('http://google.com', 640, 480);  // Synchronous call

//console.log("Image Height: ", imageInfo.imageHeight); // Just image height
console.log(imageInfo); // JSON object