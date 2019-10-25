var fs = require('fs');

/*
// same
var file = fs.readFileSync('readme.txt', 'utf8')

fs.writeFileSync('writeme.txt', file);
*/

//same work as like above:
fs.readFile('readme.txt', 'utf8', function (err,data) {
  console.log(data);
})
