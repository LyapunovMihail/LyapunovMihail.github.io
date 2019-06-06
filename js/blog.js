

$(window).on('scroll', function() {

    var scrllTop = $('.about-me__info-min').offset().top;

    btnUp(scrllTop);
});

function btnUp(el) {

    if ($(window).scrollTop() > el) {

        $('[data-up]').css('display', 'block');
    } else if($(window).scrollTop() < el) {
        
        $('[data-up]').css('display', 'none'); 
    }
}