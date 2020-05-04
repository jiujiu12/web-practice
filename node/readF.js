'use strict';

var fs=require('fs');

// 异步读取文件；err--null，data--String；err--错误对象，data--undefined
// fs.readFile('./web-practice/node/sample.txt','utf-8',function(err,data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//         // String转Buffer对象；
//         var buf=Buffer.from(data,'utf-8');
//         console.log(buf);
//         // Buffer对象转为String是：data.toString('utf-8');
//     }
// })

// 同步读取文件：比起异步，函数多了个Sync后缀，且不接收回调函数，函数直接返回结果。
// 同步读取文件发生错误，则需要用try..catch捕获错误。
try {
    var data = fs.readFileSync('./web-practice/node/sample.txt', 'utf-8');
    console.log(data);
} catch (err) {
    
}

// 异步将数据写入文件fs.writeFile()
// 参数：文件名，数据，回调函数
// 数据：1. String，默认utf-8写入文件；2. Buffer写入的是二进制文件
// var wData="Hello,Node.js";
// fs.writeFile('./web-practice/node/output.txt',wData,function(err){
//     if (err) {
//         console.log(err);
//     }else{
//         console.log('success!');
//     }
// })

// 同步将数据写入文件 fs.writeFileSync()
var wData2=110011;
fs.writeFileSync('./web-practice/node/output.txt',wData2);