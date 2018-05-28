/**
 * Created by admin on 2017/11/2.
 */
function route(handle,pathname,res,postData){
    if(typeof handle[pathname] === 'function'){
        handle[pathname](res,postData);
    }else{
        console.log('404 not found');
    }
}
exports.route = route;