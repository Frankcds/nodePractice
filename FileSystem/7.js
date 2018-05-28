/**
 * Created by admin on 2017/9/27.
 */
var fs = require('fs');

var fileName = '2.txt';


fs.watch(fileName,function(ev,fn){
    console.log(ev);
    if(fn){
        console.log(fn + '发生了改变');
    }else{
        console.log('fn不存在');
    }
})