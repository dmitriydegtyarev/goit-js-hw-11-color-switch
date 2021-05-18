import colors from './colors';
import { refs } from './refs';

const { body, startBtn, stopBtn } = refs;

const colorsMaxIndex = colors.length - 1;
let intervalID = null;
let changeColor = false;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function initRandomColor() {
  return body.style.backgroundColor = colors[randomIntegerFromInterval(0, colorsMaxIndex)];
};

function startChangeBackgroundColor() {

  if (changeColor) {
      return
    };

  intervalID = setInterval(() => {
    initRandomColor();
    startBtn.classList.add('visually-hidden');
    changeColor = true;
    console.log(`Change backround color: ${changeColor},`, `Color: ${initRandomColor()}`);
  }, 1000);  
};

function stopChangeBackgroundColor() {
  clearInterval(intervalID);
  body.style.backgroundColor = '';
  startBtn.classList.remove('visually-hidden');
  changeColor = false;
  console.log(`Change backround color: ${changeColor}`);
};

startBtn.addEventListener('click', startChangeBackgroundColor);
stopBtn.addEventListener('click', stopChangeBackgroundColor);