const buttons = document.getElementsByClassName('btn');
const counter = document.querySelector('.count');
const subtract = document.querySelector('#subtract');
const reset = document.querySelector('#reset');
const add = document.querySelector('#add');

subtract.addEventListener('click', () => {
  counter.innerHTML--;
});
reset.addEventListener('click', () => {
  counter.innerHTML = 0;
});
add.addEventListener('click', () => {
  counter.innerHTML++;
});

for (let button of buttons) {
  button.addEventListener('click', () => {
    (counter.innerHTML < 0) ? counter.classList.add('danger') : counter.classList.remove('danger');
  });
}