/**
 * Created by admin on 2017/11/10.
 */
var express = require('express');
var app = express();
console.log(process.env.PORT);
app.set('port',process.env.PORT || 3000);
app.get('/',function(req,res){
    res.send('Hello World');
})


app.get('/about',function(req,res){
    res.send('the node course')
})

app.use(function(req,res,next){
    res.status(404);
    res.send('404 - Not Found');
})

app.listen(app.get('port'),function(){
    console.log('express started on port 3000')
})

//可注释
var server = app.listen(8081,function(){
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 hhtp://%s:%s",host,port);
})