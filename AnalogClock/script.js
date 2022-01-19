const deg = 6;
const hr = document.getElementById('hr');
const mn = document.getElementById('mn');
const sc = document.getElementById('sc');

setInterval(() => {
    let date = new Date();
    let hh = date.getHours() * 30;
    let mm = date.getMinutes() * deg;
    let ss = date.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
})

const body = document.querySelector('body');
const toggle = document.getElementById('toggle');
const clock = document.getElementById('clock');
const h1 = document.getElementById('h1');
const click = new Audio();
click.src = "../click.mp3"; 
toggle.addEventListener("click", ()=>{
    click.play();
     toggle.classList.toggle('active');
     body.classList.toggle('active');
     clock.classList.toggle('active');
     hr.classList.toggle('active');
     mn.classList.toggle('active');
     sc.classList.toggle('active');
     h1.classList.toggle('active');
})