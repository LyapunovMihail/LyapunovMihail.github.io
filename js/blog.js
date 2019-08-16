

$(window).on('scroll', function() {

    var scrllTop = $('.about-me__info-min').offset().top;

    btnUp(scrllTop);
    stpBtn();
});

function btnUp(el) {

    if ($(window).scrollTop() > el) {

        $('[data-up]').css('display', 'block');
    } else if($(window).scrollTop() < el) {
        
        $('[data-up]').css('display', 'none'); 
    }
};

// остановка кнопки

function stpBtn() {

    var $btnStop = $('.main__past').offset().top + $('.main__past').height() - 105 + 30,
        $btnStopMedia = $('.main__past').offset().top + $('.main__past').height() + 50 + 27,
        $fixBtn = $('[data-up]').offset().top,
        $height = $(window).outerHeight();

    if ($(window).width() < 730) {
        
        if ( $(window).scrollTop() + $height > $btnStopMedia) {

            $('[data-up]').css({
                position: 'absolute',
                bottom: '-25px'
            })
        } else { 

            $('[data-up]').css({
                position: '',
                bottom: ''
            })
        }
    } else {

        if($btnStop < $fixBtn) {
    
            $('[data-up]').css({
                position: 'absolute',
                bottom: '30px'
            })
        } else if ($btnStop > $height + $(window).scrollTop() - 150) {

            $('[data-up]').css({
                position: '',
                bottom: ''
            })
        }
    }
};