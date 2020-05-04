'use strict';

var name="World";
var str=`Hello,${name}`;
console.log("Hello World");

var str2='Hello';
function greet(name){
    console.log(str2+","+name)
}

// 将greet函数暴露出去
module.exports=greet;