/**
 * Created by admin on 2017/9/27.
 */
var fs = require('fs');

// fs.readFile('2.txt',function(err,data){
//     if(err){
//         console.log('读取文件失败');
//     }else{
//         console.log( data.toString() );
//     }
// })

// fs.unlink('2.txt',function(err){
//     if(err){
//         console.log('删除文件失败');
//     }else{
//         console.log('删除文件成功');
//     }
// })

// fs.writeFile('2.txt','miaov',function(){
//     console.log('成功');
// })

// fs.rename('10.txt','2.txt',function(err){
//     if(err){
//         console.log('重命名失败');
//     }else{
//         console.log('重命名成功');
//     }
// })


fs.stat('2.txt',function(err,data){
    if(data.size > 5){
        console.log('文件大于5字节');
    }else{
        console.log('文件小于或等于5字节');
    }
})
