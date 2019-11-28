
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

// Filter ============

let filter = document.querySelector('.objects__btn-filter');

let filterContent = document.querySelector('.objects__filter');
let selectAny = document.querySelector('.btn-selectAny');
let selectAll = document.querySelector('.btn-selectAll');
let selectAlloptions = document.querySelector('.objects__selectAll-options');
let selectAnyoptions = document.querySelector('.objects__selectAny-options');

filter.addEventListener('click', function() {
   
    filter.classList.toggle('objects__btn--active') ;
    filterContent.classList.toggle('objects__selectAny-options--block') ;
    
    
});
 
selectAny.addEventListener('click', function() {
   
    selectAnyoptions.classList.toggle('objects__selectAny-options--block') ;
    
    
});
selectAll.addEventListener('click', function() {
    selectAlloptions.classList.toggle('objects__selectAny-options--block') ;
    
});
// Map ============
let mapBtn = document.querySelector('.objects__btn-map');
let objectsMap = document.querySelector('.objects__map');
let objectsWrap = document.querySelector('.objects__item-container');
mapBtn.addEventListener('click', function() {
   
    mapBtn.classList.toggle('objects__btn--active') ;
    objectsMap.classList.toggle('objects__map--block') ;
    objectsWrap.classList.toggle('objects__item-container--none');
    
    
});