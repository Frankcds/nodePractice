/**
 * Created by admin on 2017/9/26.
 */
// var bf = new Buffer(5);

var bf = new Buffer('miaov','UTF-8');
for(var i = 0; i < bf.length; i++){
    // console.log(bf[i]);
    console.log(String.fromCharCode(bf[i]));
}
var a = 100;
module.exports.a = a;
