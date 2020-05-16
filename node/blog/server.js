//--- 请求路径为/，访问index；请求路径为/login，访问登录页面；请求路径为/register，访问注册页面；
var http=require('http');
var fs=require('fs');
var path=require('path');
var mime=require('./node_modules/_mime@1.2.11@mime');
var url=require('url');


function send404(response) {
    response.writeHead(404, {"Content-type" : "text/plain"});
    response.write("Error 404: resource not found");
    response.end();
  }

  function sendPage(response, filePath, fileContents) {
    response.writeHead(200, {"Content-type" : mime.lookup(path.basename(filePath))});
    response.end(fileContents);
  }
  function serverWorking(response, absPath) {
    fs.exists(absPath, function(exists) {
      if (exists) {
        fs.readFile(absPath, function(err, data) {
          if (err) {
            send404(response)
          } else {
            sendPage(response, absPath, data);
          }
        });
      } else {
        send404(response);
      }
    });
  }
  // 创建server
http.createServer((req,res)=>{
    // res.writeHead(200,{'Content-Type':'text/plain'});
    // res.write("Hello!\n");
    // res.end('Bye')
    var filePath;
    if (req.url=="/") {
        filePath='index.html';
    }else{
        filePath='public'+req.url;
    }
    let absPath='./'+filePath;
    serverWorking(res,absPath);
    
}).listen(8888);

