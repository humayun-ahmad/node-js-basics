// Import events module
var events = require('events');

// Create an EventEmitter object
var myEmitter = new events.EventEmitter();
/*
myEmitter.on("someEvent", function(mssg) {
  console.log(mssg);
});

myEmitter.emit("someEvent", 'the event was emitt');
*/

// function expression
// listener1
var listener1 = function listener1() {
    console.log("listener1 executed");;
}

myEmitter.addListener('connection', listener1);

console.log(myEmitter.emit('connection'));
