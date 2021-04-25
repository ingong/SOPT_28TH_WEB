const secondhand = document.querySelector(".second-hand");
const minhand = document.querySelector(".min-hand");
const hourhand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondDegrees = (seconds / 60) * 360 + 90;
  secondhand.style.transform = `rotate(${secondDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90;
  minhand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hourDegrees = (hours / 12) * 360 + 90;
  hourhand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
setDate();
