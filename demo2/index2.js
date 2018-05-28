/**
 * Created by admin on 2017/11/2.
 */
var server = require('./server2');
var route = require('./route2');
var requestHandle = require('./requestHandle2');


// var handle = {
//     '/':requestHandle.start,
//     '/start':requestHandle.start,
//     '/upload':requestHandle.upload
// }

var handle = {}
handle["/"] = requestHandle.start
handle["/start"] = requestHandle.start
handle["/upload"] = requestHandle.upload

// console.log(typeof handle['/upload'] === 'function');


server.start(route.route,handle);