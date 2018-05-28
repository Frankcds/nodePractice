/**
 * Created by admin on 2017/10/26.
 */
var http = require('http');
var url = require('url');

function start(route,handle){
    http.createServer(function(req,res){
        var postData = "";
        var pathname = url.parse(req.url).pathname;
        console.log('Request for  -'+pathname+'-   received');
        // res.setEncoding("utf8");


        route(handle,pathname,res,req);
        // console.log('1');
        // console.log(pathname);


    }).listen(9988,'localhost');
}



exports.start = start;

// console.log('2');