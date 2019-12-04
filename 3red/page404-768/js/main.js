/// Menu
let headerMenu = document.querySelector('.header__menu');
let menu = document.querySelector('.menu');
let btnClose = document.querySelector('.btn-close');
headerMenu.addEventListener('click', function() {
    menu.style.display = 'block';
    document.body.style.overflow = 'hidden';
});
btnClose.addEventListener('click', function() {
    menu.style.display = 'none';
    document.body.style.overflow = 'visible';
});