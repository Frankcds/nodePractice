/**
 * Created by admin on 2017/9/27.
 */

var http = require('http');

var server = http.createServer();

// server.on('error',function(err){
//     console.log(err);
// })

server.on('listening',function(){
    console.log('listening');
})

server.on('request',function(req , res){
    console.log('有客户端请求了');
    // console.log(req);
    // console.log("--------------")
    // console.log(res);
    res.writeHead(200,'ok',{
        'content-type':'text/html;charset=utf-8'
    });
    res.write('<h1>Hello</h1>');
    res.end();
})

server.listen(8888,'localhost');


