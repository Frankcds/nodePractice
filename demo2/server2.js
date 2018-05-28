/**
 * Created by admin on 2017/11/2.
 */
var http = require('http');
var url = require('url');

function start(route,handle){
    http.createServer(function(req,res){
        var postData = "";
        var pathname = url.parse(req.url).pathname;
        // console.log('handle-----------------' + typeof handle[pathname]);
        req.on('data',function(chunk){
            postData += chunk;
        })
        req.on('end',function(){
            route(handle,pathname,res,postData);
        })

    }).listen(8899,'localhost');
}
exports.start = start