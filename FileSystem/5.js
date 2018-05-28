/**
 * Created by admin on 2017/9/26.
 */
var fs = require('fs');

var fileName = '2.txt';

// fs.writeFile(fileName,'miaov',function(){
//     console.log(arguments);
// })

// fs.appendFile(fileName,'-chen',function(){
//     console.log(arguments);
// })
// fs.exists(fileName,function(isExists){
//     if(!isExists){
//         fs.writeFile(fileName,'miaov',function(err){
//             if(err){
//                 console.log('创建文件失败');
//             }else{
//                 console.log('创建文件成功并添加了内容');
//             }
//         })
//     }else{
//         fs.appendFile(fileName,'-leo',function(err){
//             if(err){
//                 console.log('追加内容失败');
//             }else{
//                 console.log('追加内容成功');
//             }
//         })
//     }
// })


if(!fs.existsSync(fileName)){
    fs.writeFileSync(fileName,'miaov');
    console.log('新文件创建成功');
}else{
    fs.appendFileSync(fileName,'-leo');
    console.log('新内容追加成功');
}

