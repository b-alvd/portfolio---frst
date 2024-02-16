const hamburger = document.querySelector('.header_hamburger');
const navMenu = document.querySelector('header nav ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('header_hamburger--open');
    navMenu.classList.toggle('show');
});