const imgs = document.getElementById("imgs");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

const image = document.querySelectorAll("#imgs img");

let index = 0;

let interval = setInterval(run, 2000);

function run() {
  index++;

  changeImage();
}

function changeImage() {
  if (index > image.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = image.length - 1;
  }

  imgs.style.transform = `translateX(${-index * 500}px)`;
}

rightBtn.addEventListener("click", () => {
  index++;

  changeImage();
  resetInterval();
});

leftBtn.addEventListener("click", () => {
  index--;

  changeImage();
  resetInterval();
});

//this function resets the interval to have a better transition when clicking the buttons
function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}
