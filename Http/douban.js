/**
 * Created by admin on 2017/10/23.
 */
var http = require('http');

var querystring = require('querystring');

var postData = querystring.stringify({
    ck:'WsnD',
    start:0,
    comment_id:8924499,
    text:'试试用node进行评论',
    ref_cid:''
})
var options = {
    Schema:'https',
    hostname:'movie.douban.com',
    port:80,
    path:'/review/8880756/',
    method:'POST',
    headers:{
         'Accept':'application/json, text/javascript, */*; q=0.01',
         'Accept-Encoding':'gzip, deflate, br',
         'Accept-Language':'zh-CN,zh;q=0.8',
         'Connection':'keep-alive',
         'Content-Length':postData.length,
         'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
         'Cookie':'bid=BNI08kX3Qhk; viewed="10546125"; gr_user_id=4c5fbf70-6291-40ba-82e5-3815527e399d; __yadk_uid=bbUHRDYxbHr1Fow3VwVdw0qnLY50QZZR; __utmt=1; ck=WsnD; ps=y; dbcl2="168585075:43flxz7r1Y4"; ap=1; ll="118159"; _pk_ref.100001.4cf6=%5B%22%22%2C%22%22%2C1508727235%2C%22https%3A%2F%2Fwww.douban.com%2F%22%5D; _vwo_uuid_v2=52075EA9B48355B9D7ED4BFC41EAB176|2db42f34798abde429b8f828a98a2a7c; _pk_id.100001.4cf6=b5d1cb640cebe848.1504749410.5.1508727250.1508492666.; _pk_ses.100001.4cf6=*; __utma=30149280.1970136612.1502439743.1508492408.1508727116.24; __utmb=30149280.25.6.1508727169772; __utmc=30149280; __utmz=30149280.1508727116.24.24.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; __utmv=30149280.16858; __utma=223695111.1038303539.1504749410.1508492408.1508727235.5; __utmb=223695111.0.10.1508727235; __utmc=223695111; __utmz=223695111.1508727235.5.5.utmcsr=douban.com|utmccn=(referral)|utmcmd=referral|utmcct=/; push_noty_num=0; push_doumail_num=0',
         'Host':'movie.douban.com',
         'Origin':'https://movie.douban.com',
         'Referer':'https://movie.douban.com/review/8880756/',
         'User-Agent':'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36',
         'X-Requested-With':'XMLHttpRequest'
    }
}

var req = http.request(options,function(res){
    console.log('Status:' + res.status)
    console.log('headers:' + JSON.stringify(res.headers));

    res.on('data',function(chunk){
        console.log(Buffer.isBuffer(chunk));
        console.log(typeof chunk);
    })
    res.on('end',function(){
        console.log('评论成功');
    })
})

req.on('error',function(e){
    console.log('错误信息为：' + e.message);
})

req.write(postData);

req.end();