/**
 * Created by admin on 2017/9/26.
 */
/*Buffer.isEncoding()   是否属于buffer支持的编码格式*/
// console.log(Buffer.isEncoding('utf-8'));
// console.log(Buffer.isEncoding('gbk'));
// console.log(Buffer.isEncoding('hex'));


// var arr = [1,2,3,4];
// var bf = new Buffer(10)
// console.log(Buffer.isBuffer(arr));
// console.log(Buffer.isBuffer(bf));

// var str1 = 'miaov';
//
// console.log(str1.length);
// console.log(Buffer.byteLength(str1));
//
// var str2 = '妙味';
// console.log(str2.length);
// console.log(Buffer.byteLength(str2));


// var str1 = 'miaov';
// var str2 = '妙味';
// var list = [new Buffer(str1),new Buffer(str2)];
// // console.log(bf);
// var bf2 = Buffer.concat(list);
// console.log(bf2);


process.stdout.write('请输入内容：');

process.stdin.resume();

process.stdin.on('data',function(chunk){
    console.log(chunk);
    // process.exit();
    process.exit();
})
