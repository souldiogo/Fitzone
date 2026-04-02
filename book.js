// Menu hambúrguer
const hamburger = document.querySelector('.hamburger');
const menuEspaco = document.querySelector('.menu-espaco');

hamburger.addEventListener('click', () => {
    menuEspaco.classList.toggle('open');
});