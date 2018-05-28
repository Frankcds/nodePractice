/**
 * Created by admin on 2017/10/27.
 */
var server = require('./server');
var route = require('./route');
var requestHandlers = require('./requestHandlers');

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;
// console.log(handle);

// console.log(handle);
// var p = {
//     "/":requestHandlers.start,
//     "/start":requestHandlers.start,
//     "/upload":requestHandlers.upload
// };
// console.log(p);

server.start(route.route,handle);

