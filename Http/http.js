/**
 * Created by admin on 2017/10/17.
 */

var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain;charset=UTF-8'})
    res.write('Hello Nodejs')
    res.end()
}).listen(2015,'localhost')