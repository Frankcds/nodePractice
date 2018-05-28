/**
 * Created by admin on 2017/11/2.
 */
var querystring = require('querystring');
var fs = require('fs');
function start(res,postData){
    console.log('this is start');
    // var body = '<html>'+
    //     '<head>'+
    //     '<meta http-equiv="Content-Type" content="text/html; '+
    //     'charset=UTF-8" />'+
    //     '</head>'+
    //     '<body>'+
    //     '<form action="/upload" method="post">'+
    //     '<textarea name="text" rows="20" cols="60"></textarea>'+
    //     '<input type="submit" value="Submit text" />'+
    //     '</form>'+
    //     '</body>'+
    //     '</html>';
    var filepath = __dirname+'/html/start.html';
    fs.readFile(filepath,function(err,data){
        res.writeHead(200,{
            'Content-type':'text/html;charset=utf-8'
        })
        res.write(data);
        res.end();
    })

}
function upload(res,postData){
    console.log('this is upload');
    res.writeHead(200,{
        'Content-type':'text/html;charset=utf-8'
    })
    res.write("You've sent the text:" + querystring.parse(postData).text);
    res.end();
}

exports.start = start;
exports.upload = upload;