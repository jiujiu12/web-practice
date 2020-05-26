const http=require('http');
const blogRoute=require('./src/route/blog');
const userRoute=require('./src/route/user');
const { getList }=require('./src/controller/blog')

const server=http.createServer((req,res)=>{

    // 设置返回数据类型
    res.setHeader('Content-type','application/json');

    // blog模块路由或者user模块路由
    let blogMsg= blogRoute.blogHandle(req,res);
    let userMsg= userRoute.userHandle(req,res);
    
    if (blogMsg) {
        //blog 博客模块
        res.end(
            // JSON.stringify(blogMsg)
            JSON.stringify()
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
server.listen(8000);
console.log("ok")