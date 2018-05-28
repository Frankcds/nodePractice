/**
 * Created by admin on 2017/9/26.
 */

var str = 'qwert'
var bf = new Buffer(5);
var a = require('./1.js');
console.log(a);
// console.log(bf);
console.log(bf);
bf.write(str,1,3);
console.log(bf);
// bf.write(要写入的字符串，从Buffer对象中的几位开始写入，写入的字符串的长度，写入的字符串的编码)