const click = new Audio();
click.src = "../click.mp3";

const body = document.querySelector('body');

toggle.addEventListener("click", ()=>{
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    click.play();
})