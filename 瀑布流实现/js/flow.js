$(function(){
  
    waterfall(".wrapper",".item",25);
 });
//  页面重加载事件
 $(window).resize(function () {
     waterfall(".wrapper",".item",25);
 })

//  function waterfall(element,child,padding) {
//     var child = $(child) || $('.item');
//     var wrap = $(element) || $('.wrapper');
//     var padding = padding || 25;

//     // 宽度，所有元素宽度一致
//     var itemW=$(".item").outerWidth(true);

//    //  可容纳总列数
//     var colNum=Math.floor(wrap.outerWidth(true)/child.outerWidth(true));
//     console.log(colNum);//3

//    //  初始化第一列的top和left值
//     var posi=new Array(colNum);

//     $.each(posi,(i)=>{
//         posi[i]=new Object();
//         posi[i].top = padding;
//         posi[i].left = padding + i * itemW;

//     })
     
//     //  每个元素所处列数
//     var eleCol=[];
//      //循环图片列表
//     child.each(function (i) {
        
//         if ((i+1)% colNum == 0) {
//             eleCol[i] = colNum;
//         }else{
//             eleCol[i] = (i+1) % colNum;
//         }
//         var sub = eleCol[i]-1;
//         var top = posi[sub].top+'px';
//         var left = posi[sub].left+'px';
//        //  设置每个元素的位置
//         $(this).css({"position":"absolute","top" :top,"left" : left});
//        //  每遍历完一次，重置top值
//        posi[sub].top += $(this).outerHeight(true);

//     })
// }
function waterfall(element,child,padding) {
    var child = $(child) || $('.item');
    var wrap = $(element) || $('.wrapper');
    var padding = padding || 25;

    // 宽度，所有元素宽度一致
    var itemW=$(".item").outerWidth(true);

   //  可容纳总列数
    var colNum=Math.floor(wrap.outerWidth(true)/child.outerWidth(true));
    console.log(colNum);//3

    
    // 定义列高度数组并初始化
    var itemH = new Array(colNum);
    $.each(itemH,(i)=>{
        itemH[i]=0;
    })


     //循环图片列表
    child.each(function (i) {  
        // 定义最小高度和对应的index并初始化
        var minHeight = itemH[0];
        var minIndex = 0;
        console.log("最初最小高度为："+minHeight+"下标为："+minIndex);

        // 存储本次循环对象的高度
        var thisH = $(this).outerHeight(true);

        $.each(itemH,(i)=>{
            if (itemH[i] < minHeight) {
                minHeight = itemH[i];
                minIndex = i;
            }
            console.log("比较后最小高度为："+minHeight+"下标为："+minIndex);
        })

       

        var sub = minIndex;
        var top = minHeight;
        var left = minIndex * itemW+'px';
       //  设置每个元素的位置
        $(this).css({"position":"absolute","top" :top,"left" : left});
       //  每遍历完一次，重置top值
       itemH[sub] += thisH;
       console.log("itemH值："+itemH[sub]);

    })
}