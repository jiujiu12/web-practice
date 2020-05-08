'use strict';

var name="World";
var str=`Hello,${name}`;
console.log("Hello World");

var str2='Hello';
function greet(name){
    console.log(str2+","+name)
}

var x = 10;
var i;
var temp=i;
for(i=x-1;i>0;i--){
x*=i;
}
console.log(x);

// 将greet函数暴露出去
module.exports=greet;