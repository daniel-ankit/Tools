const click = new Audio();
click.src = "../click.mp3";

const body = document.querySelector('body');
const a = document.querySelectorAll('a');

toggle.addEventListener("click", ()=>{
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    for(var i=0; i<15; i++){
        a[i].classList.toggle('active');
    }
    click.play();
})