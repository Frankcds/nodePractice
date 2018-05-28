/**
 * Created by admin on 2017/10/25.
 */
var https = require('https');
var fs = require('fs');

var options = {
    key: fs.readFileSync('ssh_key.pem'),
    cert: fs.readFileSync('ssh_cert.pem')
}

https.createServer(options,function(req,res){
    res.writeHead(200,'ok',{
        "content-type":"text/html;charset=UTF-8"
    })
    res.end('hello world');
}).listen(9080)