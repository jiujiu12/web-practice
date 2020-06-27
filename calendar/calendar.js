// leapYear方法，判断是否为闰年
function leapYear(year) {
    return year % 100 == 0?(year % 4 == 0 ? 1:0):(year % 400 == 0 ? 1:0);
}

// 存储月份总天数
function getDaySum(year) {
    const arr=[31,28+leapYear(year),31,30,31,30,31,31,30,31,30,31];
    return arr;
}

// 存储某年某个月一号是周几
function getDay(year,mouth) {
    const date = new Date(year,mouth,1);
    const firstday = date.getDay();
    console.log(firstday);
    return firstday;
}


// 获取容器
var box=document.getElementById('container');

// 渲染日历
function render(box,year) {
    var table = document.createElement('table');
    var tr = [];
    var td = [];
    table.setAttribute('border','1');

    var mouth;
    var firstday;
    for (var i = 0; i <5; i++){
        tr[i] = document.createElement('tr');
        for (var i = 0; i <7; i++){
            td[i] = document.createElement('td');
            
        }  
    }

    // 获取天数
    var days=getDaySum(year);
    for (let i = 0; i < days; i++) {
        const element = array[i];
        
    }
}