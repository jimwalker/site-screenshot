const page = require('webpage').create();
const system = require('system');
const arg_count = system.args.length - 1;
var url, sizeX, sizeY;

if (arg_count < 3 || arg_count > 4) {
    console.log('Usage: phantom.js URL sizeX sizeY');
    phantom.exit();
} else {

    url = system.args[1];
    sizeX = system.args[2];
    sizeY = system.args[3];

    page.open(url, function (status) { 

        if (status === "success") {

            // Set viewport
            page.viewportSize = {
                width: sizeX,
                height: sizeY
            };

            // Clip it to size, sometimes issues with viewport not working
            page.clipRect = {top: 0, left: 0, width: sizeX, height: sizeY};
    
            const base64 = page.renderBase64('PNG'); // PNG, GIF, JPEG

            const o = {
                "status": "success",
                "url": url,
                "title": page.title,
                "fileType": "PNG",
                "imageBase64": base64,
                "imageWidth" : sizeX,
                "imageHeight" : sizeY,
            };

            // Output our JSON
            console.log(JSON.stringify(o));
            phantom.exit( 0 );
        } else {
            // Output JSON fail
            console.log(JSON.stringify({"status": "fail","url":undefined}));
            phantom.exit( 1 );
        }
        
    });

}