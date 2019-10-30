var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {

  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
// appendFile method
  fs.appendFile('text.txt','Hello world', function (err,data) {
      if(err){
        throw err;
      }
      console.log("saved!");
  });
// open method
  fs.open('mynewfile.txt','w',function(err){
    if(err) throw err;
    console.log("open worked!");
    //console.log("fild a error in open method\n");
  });


// writeFile method
fs.writeFile("mynewfile.txt","this is my text", function (err) {
  if(err) throw err;
  console.log('replaced');
});

// unlink method
fs.unlink('mynewfile1.txt',function (err) {
  // if(err) throw err;
  console.log("file Deleted!");
})

// rename
fs.rename('rename.txt', 'myrenamedfile.txt', function (err) {
  //if (err) throw err;
  console.log('File Renamed!');
});


}).listen(8080);
