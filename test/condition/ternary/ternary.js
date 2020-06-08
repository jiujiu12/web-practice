window.onload = function(){
    const container = document.querySelector('#container');
    const theme = document.querySelector('#theme');

    function changeColor(bgColor,textColor){
        container.style.backgroundColor = bgColor;
        container.style.color = textColor;
    }

    theme.addEventListener('change',()=>{
        (theme.value === 'black') ? changeColor('black','white') : changeColor('white','black');
    })
}