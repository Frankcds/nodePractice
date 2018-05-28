/**
 * Created by admin on 2017/10/11.
 */
var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer();

server.on('request',function(req,res){
    // res.writeHead(200,'ok',{
    //     'content-type':'text/html;charset=UTF-8'
    // })
    // res.write('<h1>hello</h1>');
    // res.end();
    var filename = __dirname + '/html/';
    var urlstr = url.parse(req.url);
    switch(urlstr.pathname){
        case '/':
            sendData(filename + 'index.html',req,res);
            break;
        case '/user':
            sendData(filename + 'user.html',req,res);
            break;
        default:
            res.writeHead(200,'ok',{
                'content-type':'text/html;charset=UTF-8'
            });
            res.end('<h1>这是一个错误页面</h1>');
            break;
    }
});

function sendData(file,req,res){
    fs.readFile(file,function(err,data){
        if(err){
            res.writeHead(404,'ok',{
                'content-type':'text/html;charset=UTF-8'
            });
            res.end('错误');
        }else{
            res.writeHead(200,'ok',{
                'content-type':'text/html;charset=UTF-8'
            });
            res.end(data);
        }
    })
}

server.listen(9999,'localhost');
