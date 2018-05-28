/**
 * Created by admin on 2017/9/28.
 */
var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer();

server.on('request',function(req,res){
    var filepath = __dirname + '/html/';
    var urlStr = url.parse(req.url);
    // console.log(urlStr);
    // console.log(req.url);
    switch(urlStr.pathname){
        case '/':
                sendData(filepath + 'index.html',req,res);
                break;
        case '/user':
                sendData(filepath + 'user.html',req,res);
                break;
        default:
                res.writeHead(200,{
                    'content-type':'text/html'
                })
                res.end('输入有误');
                break;
    }

})

function sendData(file,req,res){
    fs.readFile(file,function(err,data){
        if(err){
            res.writeHead(404,{
                'content-type':'text/html'
            })
            res.end('页面有误');
        }else{
            res.writeHead(200,{
                'content-type':'text/html'
            })
            res.end(data);
        }
    })
}

server.listen(7890,'localhost');