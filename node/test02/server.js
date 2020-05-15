const http=require('http');
const url=require('url');

function start(route){
    function onRequest(req,res){
        console.log(req.url);
        let pathname=url.parse(req.url).pathname;
        route(pathname);
        console.log('收到'+pathname+'的请求！');
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write("Hello World");
        res.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log('服务已启动~');

}

exports.start=start;