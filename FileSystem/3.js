/**
 * Created by admin on 2017/9/26.
 */
var fs = require('fs');

fs.open('1.txt','r',function(err,fd){
    if(err){
        console.log('文件打开失败');
    }else{
        //读取文件
        var bf = new Buffer(10);
        fs.read(fd,bf,0,bf.length,null,function(err,bflength,newBf){
            // console.log(bf);

            console.log(bf.toString());
            console.log(bflength);

            // for(var i = 0; i < bflength; i++){
            //     console.log(String.fromCharCode(bf[i]));
            // }
        })

    }
})