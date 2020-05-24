const http=require('http');
const queryString=require('querystring');

const server=http.createServer((req,res)=>{
    console.log("methods:"+req.method);
    const url=req.url;
    console.log("url:"+url);
    req.query=queryString.parse(url.split('?')[1]);
    console.log(req.query);
    res.end=(JSON.stringify(req.query));
    
}).listen(8000);