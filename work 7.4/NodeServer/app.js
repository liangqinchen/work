/**
 * Created by sks on 2016/7/4.
 */

var http = require("http");
var fs = require("fs");


http.createServer(function (request, response) {

    if (request.url == "/index.html") {
        response.end(fs.readFileSync("index.html"));

    } else if (request.url.match(/\/server/)) {

        var pKv = /(\?|\&)([^=]+)=([^&]+)/g;
        var params = {};
        while (true) {
            var result = pKv.exec(request.url);
            if (result) {
                params[result[2]] = result[3];
            } else {
                break;
            }
        }

        response.end("<!DOCTYPE html><html><head><meta charset='UTF-8'></head><body>" + (parseInt(params['one']) + parseInt(params['two']))+ "</body></html>");
    } else {
        response.end("<h1>404</h1>");
    }
}).listen(1000);