// 通过递归，使得新对象开辟出一块空间，内容与拷贝对象一致，但不会受拷贝对象影响
function deepClone(obj){
    console.log(typeof obj);
    let newObj = typeof obj === Array ? obj : {};
    if (typeof obj === Array) {
        return newObj;
    }else{

        for (const i in obj) {
            if (obj.hasOwnProperty(i)) {
                newObj[i] = typeof newObj[i] === 'object' ?  deepClone(obj[i]) : obj[i];  
            }
        }
        return newObj;
    }

}
 
var a = {
    "first":1,
    "second":2,
    "third": [1,2,3]
};

var b = deepClone(a);
a["first"] = 8;
console.log(a);
console.log(b);