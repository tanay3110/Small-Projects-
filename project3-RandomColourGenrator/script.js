let btn = document.querySelector('button')
let boxColour = document.querySelector('.colour-box');
btn.addEventListener('click', changeColour);

function changeColour() {
    boxColour.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

