window.onload = function () {
    const choose = document.querySelector('#choose');
    const h2 = document.querySelector('.month');
    const lists = document.querySelector('.lists');
    var len = 31;

    choose.addEventListener('change',()=>{
        const val = parseInt(choose.value);
        let month;

        switch (val) {
            case 1:len = 31;month='January';break;
            case 3:len = 31;month='March';break;
            case 5:len = 31;month='May';break;
            case 7:len = 31;month='July';break;
            case 8:len = 31; month='Aguest';break;
            case 10:len = 31;month='October';break;
            case 12: len = 31; month='December';break;
            case 2: len = 28; month='February';break;
            case 4:len = 30;month='April';break;
            case 6:len = 30;month='June';break;
            case 9:len = 30;month='September';break;
            case 11: len = 30;month='November';break;
            default:break;
        }
        init(len,month);
    })

    function init(len,month) {
        // 先将lists置空
        lists.innerHTML = '';

        h2.textContent = month;
        for (let i = 1; i <= len; i++) {

            let li = document.createElement('li');
            let textnode = document.createTextNode(i);
            li.appendChild(textnode);
            // li.setAttribute('class','item');
            li.className = 'item';
            lists.appendChild(li);
        }
    }

    init(len,'January');
   
    
}