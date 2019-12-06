let header = document.querySelector('.header')
let prevScrollTop = 0;


window.onscroll = function() {scroll()};

function scroll() {
    
    let scrollTop = window.pageYOffset;


        if (scrollTop === 0) {

            header.classList.remove("header-fixed");
            header.classList.remove("header-fixed--hide");
            
        } else if (scrollTop > prevScrollTop && scrollTop > 86 ) {

            header.classList.add("header-fixed--hide");
            
        } else if (scrollTop < prevScrollTop && scrollTop > 86) {
            header.classList.add("header-fixed");
            header.classList.remove("header-fixed--hide");
            
        }

    prevScrollTop = scrollTop;
}


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
