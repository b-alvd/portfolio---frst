const nav = document.querySelector('header nav');
const hamburger = document.querySelector('.header_hamburger');
// const navItemEls = document.querySelectorAll('.header_nav__item');

hamburger.addEventListener('click', () => {
    // nav.classList.toggle('header_nav--open');
    hamburger.classList.toggle('header_hamburger--open');
});

// navItemEls.forEach(navItemEl => {
//     navItemEl.addEventListener('click', () => {
//         navEl.classList.remove('header_nav--open');
//         hamburgerEl.classList.remove('header_hamburger--open');
//     });
// });