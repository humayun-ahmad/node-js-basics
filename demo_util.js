var events = require('events');
var util = require('util');

var txt = 'Congratulate %s on his %dth birthday!';
// uses of format() method:

var result = util.format(txt,'Mary', 6);
console.log(result);

var person = function (name) {
  this.name = name;
};

// var eventEmitrer = new events.EventEmitter();

util.inherits(person,events.EventEmitter);

var james = new person('james');
var mary = new person('mary');
var ryu = new person('ryu');

var people = [james,mary,ryu];

people.forEach(function(person) {
  person.on('speak',function (msg) {
    console.log(person.name + ' said ' + msg);
  });
});

james.emit('speak', 'hey dudes');
