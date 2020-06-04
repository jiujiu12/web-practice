{
    let a = 10;
    const b = 5;
    var c = 1;
}
// console.log(a);报错
// console.log(b);报错
console.log(c);

var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function (){
        console.log(i);
    };
}
a[6]();

// 不存在变量提升
console.log(d);//输出undefined
var d = 4;

// console.log(e);
// let e = 7;

