/**
 * Created by admin on 2017/10/27.
 */
// var exec = require("child_process").exec;

var querystring = require("querystring"),
    fs = require('fs'),
    formidable = require('formidable');
function start(res,req){
    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; '+
        'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" method="post" enctype="multipart/form-data">'+
        '<input type="file" name="upload"/>'+
        '<input type="submit" value="Upload file" />'+
        '</form>'+
        '</body>'+
        '</html>';
    // console.log("Request handler 'start' was called");
    // var content = "empty";
    // exec("ls -lah",function(error,stdout,stderr){
    //     res.writeHead(200,{
    //         "Content-type":"text/plain;charset=UTF-8"
    //     });
    //     // console.log("error:  ---------"+error);
    //     // console.log("-------------------------");
    //     // console.log("stdout:  ---------"+stdout);
    //     res.write(stdout);
    //     res.end();
    // });
    res.writeHead(200,{
        "Content-type":"text/html"
    })
    res.write(body);
    res.end();

}
function upload(res,req){
    var form = new formidable.IncomingForm();
    form.parse(req,function(error,fields,files){
        console.log("parsing done");
        fs.renameSync(files.uplpad.path,"/tmp/test.png");
        res.writeHead(200,{
            "Content-type":"text/plain;charset=UTF-8"
        })
        res.write("You've sent the text:" + querystring.parse(postData).text);
        res.end();
    })

}

function show(res,req){
    console.log("Request handler 'show' was called");
    fs.readFile("/tmp/test.png","binary",function(error,file){
        if(error){
            res.writeHead(500,{"Content-type":"text/plain"});
            res.write(error);
            res.end();
        }else{
            res.writeHead(200,{"Content-type":"image/png"});
            res.write(file,"binary");
            res.end();
        }
    });
}




exports.start = start;
exports.upload = upload;
exports.show = show;