const btn = document.getElementById('btn');
const loader = document.getElementById('loader');
let interval;
let miliseconds = 500;
let degrees = 360;

btn.addEventListener('click', () => {
    setInterval(function () {
            //loader.style.transform = 'rotate(' + degrees + 'deg)';
            if(degrees == 360){
                degrees == 0;
            }else {
                degrees = 360;
            } 

            loader.style.transform = 'rotate(360deg)';
                
            
    }, miliseconds);


});