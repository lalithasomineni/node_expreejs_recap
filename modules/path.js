const path = require("path");

console.log(path.dirname);
console.log(path.sep);
console.log(path.join('/modules','/app.js'))
console.log(path.basename('/modules','/app.js','text.txt'))
console.log(path.resolve(__dirname,__filename,'/modules','/app.js','text.txt'))