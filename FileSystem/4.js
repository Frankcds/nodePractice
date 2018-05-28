/**
 * Created by admin on 2017/9/26.
 */
var fs = require("fs");
fs.open('1.txt','r+',function(err,fd){
    var bf = new Buffer('123');
    fs.write(fd,bf,0,3,5,function(){
        console.log(arguments);
    });
    fs.close(fd,function(){
        console.log('已经关闭了文件');
    });
})