// import events module
var events = require('events');

// create an eventEmitrer object
var eventEmitrer = new events.EventEmitter();

// To fire an event, use the emit() method:
// Create an event handler:
var myEventHander = function() {
  console.log("I hear a scream!");
}

// Assign the event handler to an event:
eventEmitrer.on('scream', myEventHander);
// console.log(a);
// Fire the 'scream' event:
eventEmitrer.emit('scream');
