'use strict';

// process.nextTick()函数不是立刻执行，而是在下一次循环执行
process.nextTick(function(){
    console.log("等等我啊！");
})

console.log("我来了，冲鸭~");

process.on('exit',function(code){
    console.log('程序即将退出，编码为：'+code);
})
// 判断js执行环境
if(typeof(window)==='undefined'){
    console.log("node环境");
}else{
    console.log("浏览器环境")
}

// 结果：
// 我来了，冲鸭~
// node浏览器环境
// 等等我啊！
// 说明：传入process.nextTick()的函数不是立刻执行，而是要等到下一次事件循环。
// 程序即将退出，编码为code