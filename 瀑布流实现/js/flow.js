$(function(){
  
    waterfall(".wrapper",".item");
 });
//  页面重加载事件
 $(window).resize(function () {
     waterfall(".wrapper",".item");
 })

 function waterfall(element,child) {
    var child = $(child) || $('.item');
    var wrap = $(element) || $('.wrapper');

    // 宽度，所有元素宽度一致
    var itemW=$(".item").outerWidth(true);

   //  可容纳总列数
    var colNum=Math.floor(wrap.outerWidth(true)/$(".item").outerWidth(true));
    console.log(colNum);//3

   //  定义padding
    var padding=25;

   //  初始化第一列的top和left值
    var posi=new Array(colNum);

   //  每个元素所处列数
    var eleCol=[];
    var itemH=[];
    $.each(posi,(i)=>{
        posi[i]=new Object();
        if (!i) {
            posi[i].top = padding;
            posi[i].left = padding;
        }else{
            posi[i].top = padding;
            posi[i].left = padding + i * itemW;
        }
        console.log("看看遍历多少次： "+i)

        console.log("初始top，posi[i].top"+posi[i].top);
        console.log("初始left，posi[i].left"+posi[i].left);
    })
    child.each(function (i) {
        itemH[i]=$(this).outerHeight(true);
        
        if ((i+1)% colNum == 0) {
            eleCol[i] = colNum;
        }else{
            eleCol[i] = (i+1) % colNum;
        }
        var sub = eleCol[i]-1;
        // console.log(i);
        // console.log(sub);
        console.log("eleCol[i]:"+eleCol[i]);
        var top = posi[sub].top+'px';
        var left = posi[sub].left+'px';
       //  设置每个元素的位置
        $(this).css({"position":"absolute","top" :top,"left" : left});
       //  重置posi值
       posi[sub].top += $(this).outerHeight(true);
       console.log("重置top，posi[sub].top:"+posi[sub].top)

    })
}
 