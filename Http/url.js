/**
 * Created by admin on 2017/10/12.
 */

var url = require('url');
// console.log(url.parse('http://www.imooc.com/video/6710'));

// var p = url.format({
//     protocol:'http',
//     host:'imooc.com:7890',
//     path:'video/6710?pp=10',
//     search:'?pp=10',
//     query:'pp=10',
//     pathname:'video/6710',
//     href:'http://www.imooc.com:7890/video/6710?pp=10'
// })
// console.log(p);

// var urlT = url.resolve('http://www.imooc.com:8080','/video/6710');
// console.log(urlT);

var urlh = url.parse('http://www.imooc.com/video/6710?pp=10&qq=20',true);
// querystring.stringify(urlh);
console.log(urlh);

