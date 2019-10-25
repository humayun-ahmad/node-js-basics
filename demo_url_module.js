

var url = require('url');
var adr = 'http://127.0.0.1:8080/default.htm?year=2017&month=february';

var q = url.parse(adr,true);

// please see this output
console.log(q);

// manualy see the output:
console.log(q.host); // return localhost: 8080
console.log(q.pathname); // returns '/default.html'
console.log(q.search); // returns '?year=2017&month=february'
console.log(q.query);
