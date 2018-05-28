/**
 * Created by admin on 2017/10/18.
 */

var EventEmitter = require('events').EventEmitter
var p = require('events');
console.log(p);

var life = new EventEmitter();

life.setMaxListeners(11);

function water(who){
    console.log('给 ' + who + ' ' +
        '倒水1')
}

life.on('some_event',water);
life.on('some_event',function(who){
    console.log('给 ' + who + ' ' +
        '倒水2')
});
life.on('some_event',function(who){
    console.log('给 ' + who + ' ' +
        '倒水3')
});
life.on('some_event',function(who){
    console.log('给 ' + who + ' ' +
        '倒水4')
});
life.on('some_event',function(who){
    console.log('给 ' + who + ' ' +
        '倒水5')
});
life.on('some_event',function(who){
    console.log('给 ' + who + ' ' +
        '倒水6')
});
life.on('some_event',function(who){
    console.log('给 ' + who + ' ' +
        '倒水7')
});
life.on('some_event',function(who){
    console.log('给 ' + who + ' ' +
        '倒水8')
});
life.on('some_event',function(who){
    console.log('给 ' + who + ' ' +
        '倒水9')
});
life.on('some_event',function(who){
    console.log('给 ' + who + ' ' +
        '倒水10')
});
life.on('some_event',function(who){
    console.log('给 ' + who + ' ' +
        '倒水11')
});
life.on('pp',function(){
    console.log('事件pp');
})

life.removeListener('some_event',water);
// life.removeAllListeners('some_event');


life.emit('pp');
life.emit('some_event' , '他');


console.log(EventEmitter.listenerCount(life,'some_event'));
console.log(EventEmitter.listenerCount(life,'pp'));


