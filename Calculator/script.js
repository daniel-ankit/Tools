const body = document.querySelector('body');
const keys = document.querySelectorAll('.container input');
const heading = document.getElementById('heading');

const click = new Audio();
click.src = "../click.mp3"; 
toggle.addEventListener("click", ()=>{
    click.play();
     toggle.classList.toggle('active');
     for(var i=0; i<21; i++)
     keys[i].classList.toggle('active');
     body.classList.toggle('active');
     heading.classList.toggle('active');
})