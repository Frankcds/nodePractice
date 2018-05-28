/**
 * Created by admin on 2017/9/27.
 */


var fs = require('fs');

var filedir = './miaov/source';

fs.watch(filedir,function(ev,file){

    fs.readdir(filedir,function(err,dataList){
        var arr = [];
        dataList.forEach(function(f){
            if(f){
                var info = fs.statSync(filedir + '/' + f);
                // console.log(f);
                if(info.mode == 33206){
                    arr.push(filedir + '/' + f);
                }
            }

        });
        // console.log(arr);
        var content = '';
        arr.forEach(function(f){
            var c = fs.readFileSync( f );


            content += c.toString() + '\n';
        })
        fs.writeFile('./miaov/js/index.js',content);
    })
})