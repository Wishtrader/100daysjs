const genColor = document.querySelector('.count');
const generate = document.querySelector('#generate');

generate.addEventListener('click', () => {
  let hexColor = Math.random().toString(16).substring(2, 8);
  genColor.textContent = hexColor;
  document.body.style.background = "#" + hexColor;
});