/**
 * Created by admin on 2017/9/26.
 */

process.stdin.resume();     //开启输入流
process.stdout.write('请输入内容：');

process.stdin.on('data',function(chunk){
    console.log('用户输入了：'+ chunk);
    process.exit();
})