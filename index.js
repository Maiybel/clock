const hourEL = document.querySelector(".hour");
const minuteEL = document.querySelector(".minute");
const secondEL = document.querySelector(".second");

function updateclock() {
    const currentDate = new Date();
    setTimeout(updateclock, 1000)
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();
    const hourDeg = (hour / 12) * 360;
    hourEL.style.transform = 'rotate(${hourDeg}deg)';
    const minuteDeg = (hour / 60) * 360;
    minuteEL.style.transform = 'rotate(${minuteDeg}deg)';
    const secondDeg = (hour / 60) * 360;
    secondEL.style.transform = 'rotate(${secondDeg}deg)';
}
updateclock();