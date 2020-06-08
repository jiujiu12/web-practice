window.onload = function () {
    const select = document.querySelector('#select');
    const weather = document.querySelector('#weather');

    select.addEventListener ('change',function () {
        const change = select.value;
        
        switch (change) {
            case '':
                weather.textContent='';
                break;
            case 'snowing':
                weather.textContent = 'It will be snowing ,please put on warm clothes.';
                break;
            case 'rainy':
                weather.textContent = 'It will be rainy ,please bring your umbralla.';
                break;
            case 'sunny':
                weather.textContent = 'The weather will be fine.';
                break;
            case 'overcast':
                weather.textContent = 'It will be overcast.';
                break;
            default:
                break;
        }
    })

  
}