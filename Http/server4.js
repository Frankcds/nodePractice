/**
 * Created by admin on 2017/10/10.
 */
var http = require('http');

var server = http.createServer();

server.on('listening',function(){
    console.log('listening');
})
server.on('request',function(req,res){
    console.log('有客户端请求了');
    res.writeHead(200,'ok',{
        'content-type':'text/html;charset=UTF-8'
    });
    res.write('<h1>Hello</h1>');
    res.end();
})
server.listen(9999,'localhost');

var buf = Buffer.from('ool');
console.log(buf.toString());
