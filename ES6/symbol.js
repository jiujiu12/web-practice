let obj = {
    abc : 123,
    "hello" : "world"
}
console.log(typeof obj["hello"]);

const PROP_NAME = Symbol();
const PROP_AGE = Symbol();

const WORLD = "hello world";

let obj2 = {
    [PROP_NAME] : "Sherry",
    [WORLD] : "你好，世界"
}

console.log(obj2[PROP_NAME]);
console.log(obj2['hello world']);