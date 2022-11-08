const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        console.log('homepage');
        res.end('welcome to my webpage');
    }
    else if(req.url === '/myprofile'){
        console.log('in user profile');
        res.end('morning lalli')
    }
    else{
       res.end( `<h1>sorry page does not exist, pls go back to homepage</h1>
        <a href = "/">homepage</a>`)
    }
    //console.log(req);
    
})
server.listen(5000);
                        