/**
 * Created by admin on 2017/9/28.
 */
var http = require('http');
var url = require('url');
var server = http.createServer();

server.on('request',function(req,res){
    // console.log(req.url);
    var urlstr = url.parse( req.url );
    switch (urlstr.pathname){
        case '/':
            res.writeHead(200,{
                'content-type':'text/html;charset=utf-8'
            });
            res.end('<h1>这是首页</h1>');
            break;
        case '/user':
            res.writeHead(200,{
                'content-type':'text/html;charset=utf-8'
            })
            res.end('<h1>个人中心</h1>');
            break;
        default:
            res.writeHead(200,{
                'content-type':'text/html;charset=utf-8'
            })
            res.end('<h1>错误页面</h1>');
            break;
    }
})

server.listen(8888,'localhost')