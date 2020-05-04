# nodeJs

## vscode

换行--LF，与Linux兼容

## CommonJS规范

模块加载机制。每个js都是一个模块，它们内部各自使用的变量名和函数名都互不冲突。

一个模块要对外部暴露变量，可以用**module.exports=variable;**

一个模块要引用其他模块暴露的变量，用**var ref=require('module_name');**

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

