/**
 * Created by admin on 2017/10/26.
 */
// console.log(Buffer);
// console.log(new Buffer('Hello world','base64'));
var buf = new Buffer('hello world');

// console.log(buf.byteLength);

var buf = new Buffer('hello Imooc');
// console.log(buf.length);

var buf2 = new Buffer(5);

console.log(buf.copy(buf2,0,6,buf.length));
console.log(buf2.toString());

// console.log(buf2.toString());