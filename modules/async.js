/*const {readFile,writeFile} = require('fs');
//const { promisify } = require('util');

//const readPromise = promisify(readFile(path,'utf8'));
//const writePromise = promisify(writeFile);




//1st written
const getText = async ()=>{
    const read = new Promise((resolve,reject)=>{
        readFile(path,'utf8',(err,result)=>{
            if(err){
                reject(err);
            }
            if(result){
                resolve(result);
                console.log(result);
            }
       })
    })
    //2nd written
    const first = await readPromise('./modules/dummies/text.txt');
   await writePromise('./modules/dummies/text4.txt',`${first}`);
}


//1st written
getText()
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
})*/


