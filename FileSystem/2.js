/**
 * Created by admin on 2017/9/26.
 */
var fs = require('fs');

// fs.open('1.txt','r',function(err,fd){
//     console.log(fd);
// })
// console.log('ok');           /*异步  优：更省时*/

var fd = fs.openSync('1.txt','r');
console.log(fd);                /*同步  优：便于阅读*/