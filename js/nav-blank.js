

// Закрепление меню навигации

$(window).on('scroll', function() {

    var $heightNav = $(window).scrollTop(),
        $navScrll = $('[data-scrll]').offset().top - 50,
        $navScrllMedia = $('[data-scrll-media]').offset().top - 50,
        $w1399 = 1300,
        $w1069 = 970,
        $w729 = 729;

    // console.log($(window).scrollTop())
    // console.log($navScrll)
    // console.log($('body').width())
    // console.log(($('body').width() - 970) / 2 + 115 + 'px')

    if ($('body').width() > 1399) {
        
        if ($heightNav >= $navScrll) {
            w1399($navScrll)
        } else {w1399($navScrll)}
    }
    if ($('body').width() < 1400 && $('body').width() > 1069) {

        if ($heightNav >= $navScrll) {
            w1399m($navScrll)
        } else {w1399m($navScrll)}
    }
    if ($('body').width() < 1069) {

        if ($heightNav >= $navScrllMedia) {
            w729($navScrllMedia)
        } else {w729($navScrllMedia)}
    }
});

function w1399(scroll) {

    if ($(window).scrollTop() >= scroll) {

        $('[data-navigate]').css({
            position: 'fixed',
            right: ($('body').width() - 1300) / 2 + 'px',
            top: '50px'
        });

    } else {
        $('[data-navigate]').css({
            position: '',
            right: '',
            top: ''
        });
    }
}
function w1399m(scroll) {
    if ($(window).scrollTop() >= scroll) {

        $('[data-navigate]').css({
            position: 'fixed',
            right: ($('body').width() - 970) / 2 + 'px',
            top: '50px'
        })
    } else {
        $('[data-navigate]').css({
            position: '',
            right: '',
            top: ''
        });
    }
}
function w729(scroll) { 
    if ($(window).scrollTop() >= scroll) {

        $('[data-navigate]').parent().parent().parent().addClass('main__content-nav_fixed');
    } else {
        $('[data-navigate]').parent().parent().parent().removeClass('main__content-nav_fixed');
    }
};



// Переключение класса active внутри навигации

$(document).on('click', '.main__content-nav-item', function () {

    $('.main__content-nav-item').removeClass('main__content-nav-item_active'); // Удаляю класс active у всех пунктов навигации

    $(this).addClass('main__content-nav-item_active'); // Добавляю класс active к выбранному пункту
});



// Скролл до якоря меню навигации

$(document).on('click', '.main__content-nav-item', function() {

    var elemId = $(this).attr('data-id'); // Получаю data-id соответств id якоря на стр 
    var elem = $('#' + elemId).offset().top; // Нахожу скролл якоря относительно верха стр

    if ($('body').width() > 1069) {
        
        $(document).scrollTop(elem - 50); // Перемещаюсь к якорю (фиксированное меню и навигация)
    } else {

        $(document).scrollTop(elem - 134); // Перемещаюсь к якорю - 134(фиксированное меню и навигация)
    }
});



// Переключение класса active на навигации при обычной прокрутке