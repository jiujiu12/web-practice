/**
 * 由于字母 a 的 ASCII 编码为 97，被转换为十六进制数值后为 61，
 * 因此如果要匹配字符 a，就应该在前面添加“\x”前缀，以提示它为 ASCII 编码。
 */
let reg1 = /\x61/;
let str1 = "JavaScript";
let result1 = str1.match(reg1);
console.log(result1);//['a',index:1,input:'JavaScript',groups:undefined]

/**
 * 使用十六进制需要添加“\x”前缀，主要是为了避免语义混淆，而八进制则不需要添加前缀。
 *该数组的第 0 个元素存放的是匹配文本，而其余的元素存放的是与正则表达式的子表达式匹配的文本。除了这些常规的数组元素之外，返回的数组还含有两个对象属性。index 属性声明的是匹配文本的起始字符在 stringObject 中的位置，input 属性声明的是对 stringObject 的引用。
 */
let reg2 = /\141/;
let str2 = "JavaScript";
let result2 = str2.match(reg2);
console.log(result2);

/**
 * ASCII 编码只能够匹配有限的单字节字符，使用 Unicode 编码可以表示双字节字符。Unicode 编码方式：“\u”前缀加上 4 位十六进制值。
 */
let reg3 = /\u0061/;
let str3 = "JavaScript";
let result3 = str3.match(reg3);
console.log(result3);


/**
 * 左侧的重复类量词优先级较高。会保证右侧最低匹配的情况下，左侧重复类量词尽可能占所有字符
 */
var str4 = "<html><head><title></title></head><body></body></html>";
var reg4 = /(<.*>)(<.*>)/
var result4 = str4.match(reg4);

console.log(result4)
//左侧表达式匹配"<html><head><title></title></head><body></body></html>"
console.log(result4[1]);
//右侧表达式匹配“</html>”
console.log(result4[2]);  

var r = /<.*?>/
var a = str4.match(r);  //返回单个元素数组["<html>"]
console.log(a)


/**
 * 
 */
var s5 = "ggle gogle google gooogle goooogle gooooogle goooooogle gooooooogle goooooooogle";

// 1) 如果仅匹配单词 ggle 和 gogle  ?匹配0或1个
var r5 = /go?gle/g;                 // /go{0,1}gle/g
var result5 = s5.match(r5);
console.log(result5);
// 2) 如果匹配第 4 个单词 gooogle
var r6 = /go{3}gle/g;               // /gooogle/g
var result6 = s5.match(r6);
console.log(result6);
// 3) 如果匹配第 4 个到第 6 个之间的单词
var r7 = /go{3,5}gle/g;              
var result7 = s5.match(r7);
console.log(result7);
// 4) 如果匹配所有单词
var r8 = /go*gle/g;                  // /go{0,}gle/g        
var result8 = s5.match(r8);
console.log(result8);
// 5) 如果匹配包含字符“o”的所有词
var r9 = /go+gle/g;                  // /go{1,}gle/g        
var result9 = s5.match(r9);
console.log(result9);

var s10 = "how are you"
// 1) 匹配最后一个单词
var reg10 = /\w+$/;
var result10 = s10.match(reg10);
console.log(result10);
// 2) 匹配第一个单词
var reg11 = /^\w+/;
var result11 = s10.match(reg11);
console.log(result11);
// 3) 匹配每一个单词
var reg12 = /\w+/g;
var result12 = s10.match(reg12);
console.log(result12);

var s13 = "one : 1; two= 2";
var reg13 = /\w*(?==)/;  //使用正前向声明，指定执行匹配必须满足的条件
var result13 = s13.match(reg13);
console.log(result13);

var reg14 = /\w*(?!=)/;  //使用正前向声明，指定执行匹配必须满足的条件
var result14 = s13.match(reg14);
console.log(result14);

var s15 = "ab=21, bc=45, cd=43";
var reg15 = /\w+/g;
while (a = reg15.exec(s15)) {
    console.log(a);  //返回类似["ab=21","bc=45","cd=43"]三个数组
}

var s16 = "<h1>title<h1><p>text<p>";
var r16 = /(<\/?\w+>)\1/g;
var a16 = s16.match(r16); 
console.log(a16);
