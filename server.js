/**
 * Created by admin on 2017/9/26.
 */
var http = require("http");
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end("Hello world!");
}).listen(1337,'127.0.0.1');