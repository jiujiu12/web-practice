let arr = ['鸣人','佐助']
let res = arr.push('小樱');
console.log(arr);//[ '鸣人', '佐助', '小樱' ]
console.log(res);//返回数组长度，3

// let res2 = arr.pop();
// console.log(arr);
// console.log(res2);//返回删除值

let res3 = arr.shift();
console.log(arr);//['佐助', '小樱' ]
console.log(res3);//返回删除值

let res4 = arr.unshift('大蛇丸');
console.log(arr);//[ '大蛇丸', '佐助', '小樱' ]
console.log(res4);//3

// let arr2 =new Array([1,2,3,4,5]);//[[1,2,3,4,5]]
// console.log(arr2);

let arr2 =new Array(3);
arr2 = [1,2,3,4,5];//[1,2,3,4,5]
console.log(arr2);