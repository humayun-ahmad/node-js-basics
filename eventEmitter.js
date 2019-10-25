// import events module
var events = require('events');

// create an eventEmitrer object
var eventEmitrer = new events.EventEmitter();

// To fire an event, use the emit() method:
// Create an event handler with function expression:
var myEventHander = function(msg) {
  console.log("I hear a scream!");
  console.log(msg);
}

// Assign the event handler to an event:
eventEmitrer.on('scream', myEventHander);
// console.log(a);
// Fire the 'scream' event:
eventEmitrer.emit('scream'); //both are right
eventEmitrer.emit('scream','the event was emitted');
