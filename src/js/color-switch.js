import colors from './colors';
import { refs } from './refs';

const { body, startBtn, stopBtn } = refs;

console.log(colors);
console.log(refs);
console.log(body);
console.log(startBtn);
console.log(stopBtn);

startBtn.addEventListener('click', () => {
  // startChangeColor
  console.log('Нажали кнопку старт');
  console.log(body.style);
  body.style.backgroundColor = 'black';

  console.log(randomIntegerFromInterval(0, 6));
  // body.insertAdjacentHTML('beforebegin', 'style="background-color: black;"')
});
stopBtn.addEventListener('click', () => {
  // stopChangeColor
  console.log('Нажали кнопку стоп');
 });

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// style="background-color: black;"