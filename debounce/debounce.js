let num = 1;
let content = document.getElementById('content');
let btn = document.getElementById('button');

function count() {
    content.innerHTML = num++;
};


// 1. 没有进行防抖处理
// content.onmousemove = count;

//2.  防抖 ->非立即执行版本
// 触发事件后，等待n秒执行；若在n秒内再次触发，则以最新的时间为起点，再次等待n秒

/* function debounce(func,wait){
    
    console.log("hi")
    let timeout;
    return function () {
        console.log("hi")
        let context = this;
        let args = arguments;

        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(() =>{
            func.apply(context,args);
        },wait)
    }
}
    btn.onclick = debounce(count,200); */


//3. 防抖 ->添加立即执行
/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */
function debounce(func,wait,immediate) {
    let timeout;

    return function () {
        let context = this;
        let args = arguments;
        if (timeout) {
            console.log("clear"); 
            clearTimeout(timeout);
            // 说明只会清理这个函数，但不会清理改变id值
             console.log(timeout)
            };

        if (immediate) {
            var callNow = !timeout;
            // 返回ID值，用于clear
            timeout = setTimeout(() => {
                timeout = null;
            }, wait)
            if (callNow) func.apply(context, args)
        }
        else {
            // if (timeout) {console.log("clear"); clearTimeout(timeout)};
            timeout = setTimeout(function(){
                func.apply(context, args)
            }, wait);
        }
    }
}

content.onmouseover = debounce(count,1000,true);

// btn.onclick = debounce(count,1000,true);