// step 1: create onload handler

window.onload =  () => {
     main();
}

function main() {
const root = document.getElementById('root');
const change = document.getElementById('chanage-btn');


btn = addEventListener('click', function() {
     const bgcolor = generatorRGBColor();
     root.style.backgroundColor = bgcolor;
});
}


//step 2 : random color generator function

function generatorRGBColor() {
     //rgb(0,0,0),rgb(255,255,255)

     const red = Math.floor(Math.random() * 255);
     const green = Math.floor(Math.random() * 255);
     const blue = Math.floor(Math.random() * 255);


return   `rgb(${red}, ${green}, ${blue})`;
}


