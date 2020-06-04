// 浅拷贝 两个对象指向同一块地址
let a = [1,2,3,4];
let b = a;
a[0]=5;
console.log(a[0]);
console.log(b[0]);