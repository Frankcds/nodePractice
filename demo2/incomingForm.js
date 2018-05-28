/**
 * Created by admin on 2017/11/3.
 */
var formidable = require('formidable'),
    http = require('http'),
    url = require('url');

http.createServer(function(req,res){
    if(req.url == '/upload' && req.method.toLowerCase() == 'post'){
        var form = new formidable.IncomingForm();
        form.parse(req,function(err,fields,files){
            res.writeHead(200,{'Content-type':'text/plain'});
            res.write('received upload:\n\n');
            res.end(util.inspect({fields:fields,files:files}));
        });
        return;
    }
    res.writeHead(200,{'content-type':'text/html'});
    res.end(
        '<form action="/upload" enctype="multipart/form-data" '+
        'method="post">'+
        '<input type="text" name="title"><br>'+
        '<input type="file" name="upload" multiple="multiple"><br>'+
        '<input type="submit" value="Upload">'+
        '</form>'
    )

}).listen(7799,'localhost');