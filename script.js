'use strict';

const start = document.getElementById('start')

let boxTop = 200;
let boxLeft = 200;

document.addEventListener('keydown', (event) => {
    let keyName = event.key
 if(keyName === 'ArrowDown'){
    boxTop += 10
 }if(keyName === 'ArrowUp'){
    boxTop -= 10
 }
document.getElementById("box").style.top = boxTop + "px";
});

document.addEventListener('keydown', (event)=>{
    let keyName = event.key
    if(keyName === 'ArrowLeft'){
        boxLeft -= 10
    }if(keyName === 'ArrowRight'){
        boxLeft += 10
    }
document.getElementById("box").style.left = boxLeft + "px";
})



const image = document.createElement('img')
start.addEventListener('click', ()=>{
    image.src = 'patinho.jpg'
    image.setAttribute('id', 'box')
    document.body.appendChild(image)
})