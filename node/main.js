'use strict';

// 引入hello模块对外暴露的变量,greet变量存放的就是hello模块暴露的greet函数
// require中是引入模块位置的相对路径
var greet=require('./hello');
var s="Sheery";

greet(s);