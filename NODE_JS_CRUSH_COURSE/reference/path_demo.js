const path = require('path');

// base dir file
console.log(path.basename(__filename));

// dir name
console.log(path.dirname(__filename));

//ext name
console.log(path.extname(__filename));

// parse
console.log(path.parse(__filename));

//use any parse element
console.log(path.parse(__filename).name);

// concatinate
console.log(path.join(__dirname, 'test/bangladesh', 'helo.html'));

