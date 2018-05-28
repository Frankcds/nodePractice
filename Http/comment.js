/**
 * Created by admin on 2017/10/18.
 */

var http = require('http');

var querystring = require('querystring');



var postData = querystring.stringify({
    'content':'这是测试的',
    'mid':000
})

var options = {
    hostname:'www.imooc.com',
    port: 80,
    path:'/course/docomment',
    method:'POST',
    headers:{
        'Accept':'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding':'gzip, deflate',
        'Accept-Language':'zh-CN,zh;q=0.8',
        'Connection':'keep-alive',
        'Content-Length':postData.length,
        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie':'imooc_uuid=c0c6b948-0ab6-4149-86a5-c895e53cecbf; imooc_isnew_ct=1501120941; UM_distinctid=15dc0c0b8a06c-0db357e5038504-36624308-1fa400-15dc0c0b8a19af; CNZZDATA1261110065=299313063-1502176397-https%253A%252F%252Fwww.baidu.com%252F%7C1502176397; loginstate=1; apsid=M4NWM5YzI2ODRiZmU4ZjUwYzI2ZjhhYTE2ZjIwMGEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDk3NzU4OQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxMDA3NzgwOTMyQHFxLmNvbQAAAAAAAAAAAAAAAAAAAGM5NjRiNWVkZGY4MDA4YTg1ODBkODJjZGVlYTgyZjM2h2rcWYdq3Fk%3DNj; PHPSESSID=qml7ikii5rlumfdiil67rq5jp5; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1507876694,1508121196,1508202074,1508314688; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1508315012; imooc_isnew=2; cvde=59e5566787229-270',
        'Host':'www.imooc.com',
        'Origin':'http://www.imooc.com',
        'Referer':'http://www.imooc.com/video/8837',
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36',
        'X-Requested-With':'XMLHttpRequest'
    }
}
var req = http.request(options,function(res){
    console.log('Status' + res.statusCode);
    console.log('headers' + JSON.stringify(res.headers))
    console.log('options');

    res.on('data',function(chunk){
        console.log(Buffer.isBuffer(chunk));
        console.log(typeof chunk);
    })
    res.on('end',function(){
        console.log('评论完毕！');
    })


})

function baseClass(){
    this.showMag = function(){
        alert("baseClass::showmMsg");
    }
}
function extendClass(){

}

extendClass.prototype = new baseClass();




req.on('error',function(e){
    console.log('Error：' + e.message);
})
req.write(postData);
req.end();
