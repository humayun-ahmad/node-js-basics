/**
split the query string into readable parts:
**/
// require is a function which help to import module in a file
var http = require('http'); // import http module
var url = require('url'); // import url module

// create a server object:
http.createServer(function (req,res) {
  res.writeHead(200,{'Content-Type': 'text/html'});

// Use the url module to turn the querystring into an object:
  var q = url.parse(req.url,true).query;

  // Return the year and month the query object:
  var txt = q.year + " " + q.month;
  // res.write(txt);
  res.end(txt);
}).listen(8080); // the server object listens on port 8080

// for the run this code:please search this in the below url:
// http://127.0.0.1:8080/default.htm?year=2017&month=february
