const realTime = document.querySelector('#real-time');

function updateTime() {
  const now = new Date();
  const nowTime = now.toLocaleTimeString();
  realTime.textContent = nowTime;
}

updateTime();
setInterval(updateTime, 1000);