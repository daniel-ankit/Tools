const options = {weekday:'long', year :'numeric', month : 'long', day : 'numeric'}
setInterval(() => {
    let current = new Date;
    hr = current.getHours()<10 ? ('0' + current.getHours()) : (current.getHours());
    min = current.getMinutes()<10 ? ('0' + current.getMinutes()) : (current.getMinutes());
    sec = current.getSeconds()<10 ? ('0' + current.getSeconds()) : (current.getSeconds());
    let time =  hr + ":" + min + ":" + sec;
    let date = current.toLocaleDateString(undefined, options);
    document.getElementById("time").innerHTML = time;
    document.getElementById("date").innerHTML = date;
}, 1000);

const body = document.querySelector('body');
const clock = document.getElementById('clock');
const head = document.getElementById('head');

const click = new Audio();
click.src = "../click.mp3"; 
toggle.addEventListener("click", ()=>{
    click.play();
     toggle.classList.toggle('active');
     body.classList.toggle('active');
     clock.classList.toggle('active');
     head.classList.toggle('active');
})