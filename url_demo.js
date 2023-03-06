const url = require('url');

const myUrl = new URL('http://www.google.com/hello');

// serialized url
console.log(myUrl.href);
console.log(myUrl.toString());

// // host (root domain)
// console.log(myUrl.host);
// // hostname (does not contain port)
// console.log(myUrl.hostname);
// pathname
// console.log(myUrl.pathname);
// // serialzed query
// console.log(myUrl.search);
// // params object
// console.log(myUrl.searchParams);
// // Add param
// // myUrl.searchParams('abc', '124');
// // console.log(myUrl.searchParams);
