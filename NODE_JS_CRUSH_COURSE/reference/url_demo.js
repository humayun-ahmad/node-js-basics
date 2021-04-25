const url = require('url');

const myUrl = new URL('https://example.org/abc?foo=~bar');

// URL Param
console.log(myUrl.searchParams.get('foo'));

// add param
myUrl.searchParams.append('ok', '123')
console.log(myUrl.searchParams);

// delete param
myUrl.searchParams.delete('ok')
console.log(myUrl.searchParams);


