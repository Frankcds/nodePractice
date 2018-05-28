/**
 * Created by admin on 2017/9/28.
 */
var fs = require('fs');
var http = require('http');
var url = require('url');
var qs= require('querystring');

var server = http.createServer();

server.on('request',function(req,res){
    var urlStr = url.parse( req.url );
    var HtmlDir = __dirname + '/html/';
    switch(urlStr.pathname){
        case '/':
            sendData(HtmlDir + 'index.html',req,res);
            break;
        case '/user':
            sendData(HtmlDir + 'user.html',req,res);
            break;
        case '/login':
            sendData(HtmlDir + 'login.html',req,res);
            break;
        case '/login/check':
            // console.log(req.method.toUpperCase());

            // console.log(qs.parse(urlStr.query));

            if(req.method.toUpperCase() == 'POST'){
                var str = '';
                req.on('data',function(chunk){
                    str += chunk;
                })
                req.on('end',function(){
                    console.log(qs.parse(str));
                })
            }
        // default:
        //     // res.writeHead(200,{
        //     //     'content-type':'text/html;charset=utf-8'
        //     // })
        //     // res.end('不存在这页面');
        //     break;
    }
});

function sendData(file,req,res){
    fs.readFile( file,function(err,data){
        if(err){
            res.writeHead(404,{
                'content-type':'text/html;charset=utf-8'
            })
            res.end('<h1>页面被LEO吃掉了</h1>');
        }else{
            res.writeHead(200,{
                'content-type':'text/html;charset=utf-8'
            })
            res.end(data);
        }
    })
}

server.listen(9999,'localhost');