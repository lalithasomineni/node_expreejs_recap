const greet = require('./function');

const names = require('./utils');

const singlePerson = require('./alternative-flavor');

const item = require('./alternative-flavor');

console.log(singlePerson);

greet(names.john);

greet(names.lee);


greet('lalli');