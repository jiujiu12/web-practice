const http=require('http');
const blogRoute=require('./src/route/blog')
const userRoute=require('./src/route/user')

const server=http.createServer((req,res)=>{

    // 设置返回数据类型
    res.setHeader('Content-type','application/json');
    let blogMsg= blogRoute.blogHandle(req,res);
    let userMsg= userRoute.userHandle(req,res);
    if (blogMsg) {
        res.end(JSON.stringify(blogMsg));
    }
    else if(userMsg){
        res.end(JSON.stringify(userMsg));
    }
})
server.listen(8000);
console.log("ok")