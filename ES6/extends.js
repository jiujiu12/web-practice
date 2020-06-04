// Object.assign(target,source)方法
const target = {a : 1 ,b : 2};
const source = {b : 3 ,c : 4};

console.log("At the begining,the target is：");
console.log(target);
console.log("------------------------");

const returnTarget = Object.assign(target,source);

console.log("source is:"+source);
console.log(source);
console.log("------------------------");
console.log("Then,we return the target"+ returnTarget);
console.log(returnTarget);


// ...运算符，用于取出参数中所有可遍历属性，拷贝到当前对象。是一种浅拷贝
let bar = {a : 1 ,b : 2};
let baz = {...bar};
console.log(baz);

// 解构赋值 与 扩展运算符结合，用于生成数组
// 若将扩展运算符用于数组赋值，必须将其作为最后一个参数，否则报错
const [first,...res] = [1,2,3,4,5];
console.log(first);
console.log(res);

