// random background image

const images = ["0.jpg", "1.jpg", "2.jpg"];

function randomImage() {
    const chosenImage = images[Math.floor(Math.random() * images.length)];
    bgImageSrc = `src/img/${chosenImage}`;
    document.body.style.backgroundImage = `url(${bgImageSrc})`;
}

randomImage();

// real time clock

const realTime = document.querySelector('#real-time');

function updateTime() {
  const now = new Date();
  const nowTime = now.toLocaleTimeString();
  realTime.textContent = nowTime;
}

updateTime();
setInterval(updateTime, 1000);