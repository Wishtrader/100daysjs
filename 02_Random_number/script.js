const genNumber = document.querySelector('.count');
const generate = document.querySelector('#generate');

generate.addEventListener('click', () => {
  let a =  Math.floor(Math.random() * 10 + 1);
  genNumber.innerHTML = a.toString();
});