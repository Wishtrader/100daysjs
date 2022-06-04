const modal = document.querySelector('.modal');
const button = document.querySelector('#btn');
const close = document.querySelector('.close');

button.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('show-modal');
});

close.addEventListener('click', (e) => {
    modal.classList.add('hide-modal');
    setTimeout(() => {
        modal.classList.remove('show-modal');
        modal.classList.remove('hide-modal');
    }, 500);
})