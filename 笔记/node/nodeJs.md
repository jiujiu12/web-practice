# nodeJs

## vscode

换行--LF，与Linux兼容

## CommonJS规范

模块加载机制。每个js都是一个模块，它们内部各自使用的变量名和函数名都互不冲突。

一个模块要对外部暴露变量，可以用`module.exports=variable;`

一个模块要引用其他模块暴露的变量，用`var ref=require('module_name');`

## 深入了解模块原理

大量的全局变量会导致变量名冲突问题，Node.js在加载了js模块后，会把代码包装一下，进行闭包，将模块内代码用一个匿名函数包起来，使得原来的全局变量变为局部变量。

## module.exports和exports

一般使用module.exports。只有暴露变量是个对象时，exports才能正常输出。故一般用第一种。

**原因：**module.exports与exports指的是同一个对象。load函数返回的是module.exports。

## 基本模块

### global

唯一的全局对象

### process进程

NodeJS进程。

## fs模块

node内置的文件系统模块，负责读写文件。

### 读取文件

#### 异步读取文件

```javascript
//err--null，data--String；err--错误对象，data--undefined
fs.readFile('./web-practice/node/sample.txt','utf-8',function(err,data){
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
```

#### 同步读取文件

```javascript
// 同步读取文件：比起异步，函数多了个Sync后缀，且不接收回调函数，函数直接返回结果。
// 同步读取文件发生错误，则需要用try..catch捕获错误。
try {
    var data = fs.readFileSync('./web-practice/node/sample.txt', 'utf-8');
    console.log(data);
} catch (err) {
     console.log(err);
}
```



### 写入文件

#### 异步写入文件

```javascript
// 异步将数据写入文件fs.writeFile()
// 参数：文件名，数据，回调函数
// 数据：1. String，默认utf-8写入文件；2. Buffer写入的是二进制文件
  var wData="Hello,Node.js";
  fs.writeFile('./web-practice/node/output.txt',wData,function(err){
     if (err) {
         console.log(err);
     }else{
         console.log('success!');
     }
 })
```



#### 同步写入文件

```javascript
// 同步将数据写入文件 fs.writeFileSync()
var wData2=110011;
fs.writeFileSync('./web-practice/node/output.txt',wData2);
```



### 获取文件信息

#### 异步获取文件信息

stat()

```javascript
// 如果我们要获取文件大小，创建时间等信息，可以使用fs.stat()，它返回一个Stat对象，能告诉我们文件或目录的详细信息：
fs.stat('./web-practice/node/sample.txt', function (err, stat) {
    if (err) {
        console.log(err);
    } else {
        // 是否是文件:
        console.log('isFile: ' + stat.isFile());
        // 是否是目录:
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            // 文件大小:
            console.log('size: ' + stat.size);
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
        }
    }
});
```

#### 同步获取文件信息

### 使用同步或异步

在`fs`模块中，提供同步方法是为了方便使用。那我们到底是应该用异步方法还是同步方法呢？

由于Node环境执行的JavaScript代码是服务器端代码，所以，绝大部分需要在服务器运行期反复执行业务逻辑的代码，*必须使用异步代码*，否则，同步代码在执行时期，服务器将停止响应，因为JavaScript只有一个执行线程。

服务器启动时如果需要读取配置文件，或者结束时需要写入到状态文件时，可以使用同步代码，因为这些代码只在启动和结束时执行一次，不影响服务器正常运行时的异步执行。

## steam

​	是nodejs提供的一个仅在服务器端可用的模块，支持“流”这种数据结构。

### 从文件流中读取文本内容

```javascript
// 1.从文件流中读取文本内容
// 读取数据的流都继承自stream.Readable
// data事件可能有多次，每次传递的chunk是流的一部分数据。
var rs=fs.createReadStream('./web-practice/node/sample.txt','utf-8');
rs.on('data',function(chunk){
    console.log('DATA:');
    console.log(chunk);
});

rs.on('end',function(){
    console.log('END');
});

rs.on('error',function(err){
    console.log('ERROR:'+err);
});
```

### 以流的形式写入文件

```javascript
// 2. 以流的形式写入文件
// 写入的流都继承自stream.Writable
var ws=fs.createWriteStream('./web-practice/node/output.txt','utf-8');
ws.write('使用流将数据写入文本\n');
ws.write('END');
ws.end();
```

### pipe

​	就像可以把两个水管串成一个更长的水管一样，两个流也可以串起来。一个`Readable`流和一个`Writable`流串起来后，所有的数据自动从`Readable`流进入`Writable`流，这种操作叫`pipe`。

​	在Node.js中，`Readable`流有一个`pipe()`方法，就是用来干这件事的。故，这实际上是一个复制文件的程序：

