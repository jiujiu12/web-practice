$(function(){
    warterfall();
    var heightArr=[];
    $(".item").each(function (index) {
        heightArr[index]=$(this).outerHeight();
    })

 });
//  页面重加载事件
 $(window).resize(function () {
     warterfall();
 })
//  计算所需列数 函数
 function countCol() {
     var colNum=Math.floor($(".wrapper").outerWidth/$(".item").outerWidth);
     return colNum;
 }

 function waterfall() {
     
 }