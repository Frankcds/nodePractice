/**
 * Created by admin on 2017/10/27.
 */
function route(handle,pathname,res,req){
    console.log("About to route a request for" + pathname);
    if(typeof handle[pathname] === 'function'){
        handle[pathname](res,req);
    }else{
        console.log("No request handler found for" + pathname);
        // return "404 Not found";
        res.writeHead(404,{"Content-type":"text/plain"});
        res.write("404 Not found");
        res.end();
    }
}
exports.route = route;