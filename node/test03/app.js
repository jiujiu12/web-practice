const http=require('http');
const blogRoute=require('./src/route/blog');
const userRoute=require('./src/route/user');
const queryString=require('querystring');

// 获取POST请求
const getPostData=(req=>{
    const promise=new Promise((resolve,reject)=>{
        if (req.method !== 'POST') {
            resolve({});
            console.log("not post");
            return
        } 
        if (req.headers['content-type'] !== 'application/json') {
            resolve({});
            console.log("not json");
            return
        } 
        let postData='';
        req.on('data',chunk=>{
            postData += chunk.toString();
        })
        req.on('end',(postData)=>{
            console.log("getPostData : "+ postData);
            if (!postData) {
                resolve({});
                console.log("空");
                return
            }
            console.log("getPostData : "+ postData);
            return JSON.stringify(postData);
        })
        resolve(postData);
    })
    return promise;
});

const server=http.createServer((req,res)=>{

    // 设置返回数据类型
    res.setHeader('Content-type','application/json');

    const url=req.url;

    req.query=queryString.parse(url.split('?')[0]);

    getPostData(req).then(postData=>{
        req.body=postData;
        console.log("server:"+postData);

        // blog模块路由或者user模块路由
        let blogMsg= blogRoute.blogHandle(req,res);
        let userMsg= userRoute.userHandle(req,res);
        
        if (blogMsg) {
            //blog 博客模块
            res.end(
                // JSON.stringify(blogMsg)
                JSON.stringify(blogMsg)
                );
            return
        }
        if(userMsg){
            //user 用户模块
            res.end(JSON.stringify(userMsg));
            return
        }
        // 返回404
        res.writeHead(404, {"Content-type" : "text/html"});
        res.write("<center><h1>Error 404: resource not found</h1></center>");
        res.end();
    })

    
})
server.listen(8000);
console.log("ok")