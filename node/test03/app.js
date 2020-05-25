const http=require('http');
const queryString=require('querystring');

const server=http.createServer((req,res)=>{
    const method=req.method;
    const url=req.url;
    const path=url.split('?')[0];
    const query=queryString.parse(url.split('?')[1]);
    const env=process.env.NODE_ENV;

    // 设置返回数据类型
    res.setHeader('Content-type','application/json');
    res.write("query:"+JSON.stringify(query))

    // 返回的数据
    const resData={
        method,
        url,
        path,
        query,
        env
    }

    console.log(JSON.stringify(req.query));
    // get方法：
    if(req.method==='GET'){
        res.end(JSON.stringify(resData));
    }
    //post方法
    else if (req.method==='POST'){
        console.log('req contentType:'+req.headers['content-type']);
        let postData='';
        req.on('data',chunk=>{
            postData+=chunk.toString();
        })
        req.on('end',()=>{
            console.log(postData);
            resData.postData=postData;
            res.end(JSON.stringify(resData));
        })
    }
})
server.listen(8000);
console.log("ok")