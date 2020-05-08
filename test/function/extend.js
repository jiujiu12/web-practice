var father={
    name:'张三',
    house:'小平房',
    money:1000000,
    cars:'轿车'
}

var son={
    name:'张四'
}

// 错误：控制台上打印undefined
// 个人理解：father没有i这个属性
// for(let i in father){
//     if(son.i){
//         continue;
//     }
//     son.i=father.i;
// }

// for(let i in son){
//     console.log(son.i);
// }

for(let i in father){
    if(son[i]){
        continue;
    }
    son[i]=father[i];
}

for(let i in son){
    console.log(son[i]);
}


var person=new Object();
person.name='张三';
console.log(person.name);