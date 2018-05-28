/**
 * Created by admin on 2017/9/26.
 */

/* 要操作文件首先必须导入fs模块
* fs.open(path,flags,[mode],callback)
*   path:要打开的文件的路径;
*   flags: 打开文件的方式 读/写
*   mode：设置文件的模式 读/写/执行  4/2/1
*   callback: 回调
*       err: 文件打开失败后的错误,如果成功 err为null
*       fd: 被打开文件的标识;
* */


var fs = require('fs');
var bf = new Buffer(10)
fs.open('1.txt','r',function(err,fd){
    // console.log(err);
    // console.log(fd);
    if(err){
        console.log('文件被打开失败');
    }else{
        // console.log('文件被打开成功');
        fs.read(fd,bf,0,bf.length,null,function(err,bflength,newbf){
            if(err){
                console.log(err);
            }else{
                console.log(bflength);
                console.log(newbf.toString());
            }
        })
    }
})
