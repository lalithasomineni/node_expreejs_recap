const {readFile,writeFile, writeFileSync} = require('fs');

readFile('./dummies/text.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
    }
    const first = result;

    readFile('./dummies/text.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
        }
        const second = result;
        writeFile('./dummies/text3.txt',`text overwritten ${first}  ${second}`,{'flag': 'a'},(err,result)=>{
            if(err){
                console.log(err);
            }
        })
    })
})


