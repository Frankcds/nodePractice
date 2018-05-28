/**
 * Created by admin on 2017/9/26.
 */
var bf = new Buffer('miaov');
console.log(bf);
var bf4 = new Buffer(10);

bf.copy(bf4);
console.log(bf4);