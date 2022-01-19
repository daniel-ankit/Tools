const date = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",];

const renderCalendar = () => {
    date.setDate(1);
    const monthDays = document.getElementById("days");
    const lastDay = new Date( date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const prevLastDay = new Date( date.getFullYear(), date.getMonth(), 0).getDate();
    const firstDayIndex = date.getDay();
    const lastDayIndex = new Date( date.getFullYear(), date.getMonth() + 1, 0).getDay();
    const nextDays = 7 - lastDayIndex - 1;
    document.getElementById("mn").innerHTML = months[date.getMonth()];
    document.getElementById("dy").innerHTML = new Date().toDateString();

    let days = "";

    for (let x = firstDayIndex; x > 0; x--)
    {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++)
    {
        if(i === new Date().getDate() && date.getMonth() === new Date().getMonth())
            days += `<div class="today" id="today">${i}</div>`;

        else days += `<div>${i}</div>`;
    }

    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
        monthDays.innerHTML = days;
    }
};

document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

renderCalendar();

const container = document.getElementById('container');
const month = document.getElementById('month');
const today = document.getElementById('today');
const days = document.getElementById('days');
const heading = document.getElementById('heading');

const click = new Audio();
click.src = "../click.mp3";

toggle.addEventListener("click", ()=>{
    toggle.classList.toggle('active');
    container.classList.toggle('active');
    month.classList.toggle('active');
    today.classList.toggle('active');
    days.classList.toggle('active');
    heading.classList.toggle('active');
    click.play();
})