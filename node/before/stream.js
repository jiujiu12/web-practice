'use strict';

var fs=require('fs');

// 1.从文件流中读取文本内容
// 读取数据的流都继承自stream.Readable
// data事件可能有多次，每次传递的chunk是流的一部分数据。
// var rs=fs.createReadStream('./web-practice/node/sample.txt','utf-8');
// rs.on('data',function(chunk){
//     console.log('DATA:');
//     console.log(chunk);
// });

// rs.on('end',function(){
//     console.log('END');
// });

// rs.on('error',function(err){
//     console.log('ERROR:'+err);
// });

// 2. 以流的形式写入文件
// 写入的流都继承自stream.Writable
// var ws=fs.createWriteStream('./web-practice/node/output.txt','utf-8');
// ws.write('使用流将数据写入文本\n');
// ws.write('END');
// ws.end();

// 用pipe复制文件
var rs2=fs.createReadStream('./web-practice/node/sample.txt','utf-8');
var ws2=fs.createWriteStream('./web-practice/node/output.txt','utf-8');
rs2.pipe(ws2);
