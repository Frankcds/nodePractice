/**
 * Created by admin on 2017/9/27.
 */
var fs = require('fs');

// fs.mkdir('./1',function(){
//     console.log(arguments);
//     console.log('创建了一个文件夹');
// })

// fs.rmdir('./1',function(){
//     console.log(arguments);
//     console.log('删除了文件夹');
// })


fs.readdir('../FileSystem',function(err,fileList){
    fileList.forEach(function(f){
        fs.stat(f,function(err,info){
            switch(info.mode){
                case 33206:
                    console.log('[文件]' + f);
                    break;
                case 16822:
                    console.log('[文件夹]' + f);
                    break;
                default:
                    console.log('[其他类型]' + f);
                    break;
            }
        })
    })
})

