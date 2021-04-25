const secondhand = document.querySelector(".second-hand");
const minhand = document.querySelector(".min-hand");
const hourhand = document.querySelector(".hour-hand");
const clockTarget = document.querySelector(".digitalClock");

function setAnalog() {
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

function setDigital() {
  let date = new Date();
  let month = date.getMonth();
  let clockDate = date.getDate();
  let day = date.getDay();

  const week = ["일", "월", "화", "수", "목", "금", "토"];
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  clockTarget.innerText =
    `${month + 1}월 ${clockDate}일 ${week[day]}요일` +
    `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
}

function init() {
  setDigital();
  setAnalog();
  setInterval(setDigital, 1000);
  setInterval(setAnalog, 1000);
}

init();
