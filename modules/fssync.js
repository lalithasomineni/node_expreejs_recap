const fs = require('fs');


const first = fs.readFileSync('./dummies/text.txt','utf8');

const second = fs.writeFileSync('./dummies/text2.txt',`${first}`,{'flag': 'a'},'utf8')

console.log(first)