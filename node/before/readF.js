'use strict';

var fs=require('fs');

// 异步读取文件；err--null，data--String；err--错误对象，data--undefined
fs.readFile('./node/sample.txt','utf-8',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
        // String转Buffer对象；
        var buf=Buffer.from(data,'utf-8');
        console.log(buf);
        // Buffer对象转为String是：data.toString('utf-8');
    }
})

// 同步读取文件：比起异步，函数多了个Sync后缀，且不接收回调函数，函数直接返回结果。
// 同步读取文件发生错误，则需要用try..catch捕获错误。
// try {
//     var data = fs.readFileSync('./node/sample.txt', 'utf-8');
//     console.log(data);
// } catch (err) {
    
// }

// 异步将数据写入文件fs.writeFile()
// 参数：文件名，数据，回调函数
// 数据：1. String，默认utf-8写入文件；2. Buffer写入的是二进制文件
// var wData="Hello,Node.js";
// fs.writeFile('./node/output.txt',wData,function(err){
//     if (err) {
//         console.log(err);
//     }else{
//         console.log('success!');
//     }
// })

// // 同步将数据写入文件 fs.writeFileSync()
// var wData2=new Buffer('二进制数据','utf-8');
// fs.writeFileSync('./node/output.txt',wData2);

// 异步获取文件信息
// 如果我们要获取文件大小，创建时间等信息，可以使用fs.stat()，它返回一个Stat对象，能告诉我们文件或目录的详细信息：
// fs.stat('./node/sample.txt', function (err, stat) {
//     if (err) {
//         console.log(err);
//     } else {
//         // 是否是文件:
//         console.log('isFile: ' + stat.isFile());
//         // 是否是目录:
//         console.log('isDirectory: ' + stat.isDirectory());
//         if (stat.isFile()) {
//             // 文件大小:
//             console.log('size: ' + stat.size);
//             // 创建时间, Date对象:
//             console.log('birth time: ' + stat.birthtime);
//             // 修改时间, Date对象:
//             console.log('modified time: ' + stat.mtime);
//         }
//     }
// });

// 同步获取文件信息
    // fs.statSync('./node/sample.txt')