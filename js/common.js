

var scrllTop = '';

$(window).on('scroll', function() {

    var scrllDown = 0;

    scrllDown = $(this).scrollTop();

    if(scrllTop < scrllDown) {
        console.log('Вниз! Ты крутишь вниз!');

        fixNav();
        $('.header__nav').css('top', '-46px');
    } else {
        console.log('Вверх! Ты крутишь вверх!')

        showHead()
        fixNav()
    }
    
    scrllTop = $(this).scrollTop();
});

function fixNav() {

    if ($(window).scrollTop() > ($('.header__nav').offset().top) + 46) { // Где 46 это высота .header__nav

        $('.header__nav').css('position', 'fixed');
    } else if($(window).scrollTop() < ($('.header').outerHeight() - 46)) { // Где 46 это высота .header__nav
        
        $('.header__nav').css({
            position: 'unset',
            top: ''
        });
    }
}
function showHead() {

    if ($(window).scrollTop() > ($('.header').outerHeight() - 46)) {

        $('.header__nav').css({
            top: '0px'
        });
    }
}