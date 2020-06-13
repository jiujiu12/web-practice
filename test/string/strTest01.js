/* 
    统计字符串中每个字符的出现频率，返回一个 Object，key 为统计字符，value 为出现频率
    1. 不限制 key 的顺序
    2. 输入的字符串参数不会为空
    3. 忽略空白字符
*/
function count(str) {
    var obj = {};
    str.replace(/\S/g,function(s){
       !obj[s] ?obj[s]= 1:obj[s]++;
   })
    return obj;
    
}
// let定义报错
var count = count("Hello world!");
console.log(count);

/**
 * css 中经常有类似 background-image 这种通过 - 连接的字符，通过 javascript 设置样式的时候需要将这种样式转换成 backgroundImage 驼峰格式，请完成此转换功能
 * 1. 以 - 为分隔符，将第二个起的非空单词首字母转为大写
 * 2. -webkit-border-image 转换后的结果为 webkitBorderImage
 **/

function cssStyle2DomStyle(sName) {
    let temp = 
   sName.replace(/-([a-z])/g,(str,letters,index) => {
        console.log(str,letters,index);
        let after = index?letters.toUpperCase():letters;
        console.log(after)
        return after;       
    })
    return temp;
}

let camel = cssStyle2DomStyle('font-size');

console.log(camel);
