// console.log(arguments);
// console.log(require('module').wrapper);

// how to import & export data from 1 module to another
// the C variable is in uppercase cus in class we use the uppercase names
// Module.exports
const C = require('./text-module-1');
const calc1 = new C();
console.log(calc1.add(2, 5));

// when & how to use the export shorthand
// export
// const calc2 = require('./test-module-2');

// using Es6 to destructure it correctly
const { add, multiply} = require('./test-module-2');
console.log(multiply(2, 5));

// caching
require('./test-module-3') ();
require('./test-module-3')();
require('./test-module-3')();
