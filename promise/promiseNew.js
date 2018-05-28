/**
 * Created by admin on 2017/10/25.
 */
var http = require('http');
var Promise = require('bluebird');

var url = 'http://www.imooc.com/learn/'
var baseUrl = 'http://www.imooc.com/learn/348'
// console.log(Promise)

function getPageAsync(url){
    return new Promise(function(resolve,reject){
        console.log('正在爬取' + url);

        http.get(url,function(res){
            var html = '';
            res.on('data',function(chunk){
                html += chunk;
            })
            res.on('end',function(){
                // console.log(html);
                resolve(html);
            })
        }).on('error',function(e){
            reject(e);
            console.log('获取数据出错');
        })
    })
}
var fetchCourseArray = [];

videoIds.forEach(function(id){
    fetchCourseArray.push(getPageAsync(baseUrl + id));
})
// getPageAsync(url);
Promise.all([])