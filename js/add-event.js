

// Закрепление меню навигации

$(window).on('scroll', function() {

    var $heightNav = $(window).scrollTop(),
        $navScrll = $('[data-scrll]').offset().top - 50,
        $navScrllMedia = $('[data-scrll-media]').offset().top,
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
            right: ($('body').width() - 1300) / 2 + 115 + 'px',
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
        marginAdd()
    } else {
        $('[data-navigate]').parent().parent().parent().removeClass('main__content-nav_fixed');
        $('[data-scrll]').css('margin-top', 0);
    }
};
function marginAdd() {

    if ($(window).width() < 1069 && $(window).width() > 729) {
        $('[data-scrll]').css('margin-top', 32 + 'px');
    } else if ($(window).width() < 729) {
        $('[data-scrll]').css('margin-top', 40 + 'px');
    }
}



// Переключение класса active внутри навигации

$(document).on('click', '.main__content-nav-item', function () {

    $('.main__content-nav-item').removeClass('main__content-nav-item_active'); // Удаляю класс active у всех пунктов навигации

    $(this).addClass('main__content-nav-item_active'); // Добавляю класс active к выбранному пункту
    scrllThis($('.main__content-nav-item_active'))
});

function scrllThis(el) { // скролл до активного пунта меню (при клике)

    if($(window).width() > 425) {

        el.parent().parent().scrollLeft(0); // устанавлваю прокрутку на 0
        el.parent().parent().scrollLeft( el.position().left - 45 ) // Устанавливаю прокрутку на позицию активного пункта навиг - отступ контейнера( - 45)
    } else {

        el.parent().parent().scrollLeft(0);
        el.parent().parent().scrollLeft( el.position().left - 20 )
    }
}

// Скролл до якоря меню навигации

$(document).on('click', '.main__content-nav-item', function() {

    var elemId = $(this).attr('data-id'); // Получаю data-id соответств id якоря на стр 
    var elem = $('#' + elemId).offset().top; // Нахожу скролл якоря относительно верха стр

    if ($('body').width() > 1069) {
        
        $(document).scrollTop(elem - 50); // Перемещаюсь к якорю
    } else {

        $(document).scrollTop(elem - 80); // Перемещаюсь к якорю 
    }
});



// Переключение класса active на навигации при обычной прокрутке
// +
// Прокрутка до активного пункта на мобильных

$(window).on('scroll', function() {
    var $el = $('.main__content-nav-item_active'), // Получаю активный элемент навигации
        $prevEl = $el.prev().attr('data-id'),      // Получаю предыдущий элемент в навигации
        $nextEl = $el.next().attr('data-id');      // Получаю след элемент в навигации

        if ( $prevEl != undefined && $('#' + $el.attr('data-id')).offset().top > $(window).scrollTop() + 90) {
            
            $('.main__content-nav-item').removeClass('main__content-nav-item_active');
            $el.prev().addClass('main__content-nav-item_active');
            scrllPointPrev($el)
        }
        if ( $nextEl != undefined && $('#' + $nextEl).offset().top < $(window).scrollTop() + 90) {
            console.log('3')
    
            $('.main__content-nav-item').removeClass('main__content-nav-item_active');
            $el.next().addClass('main__content-nav-item_active');
            scrllPointNext($el)
        }
});

function scrllPointNext(el) {

    if($(window).width() > 425) {

        el.parent().parent().scrollLeft(0); // устанавлваю прокрутку на 0
        el.parent().parent().scrollLeft( el.next().position().left - 45 ) // Устанавливаю прокрутку на позицию активного пункта навиг - отступ контейнера( - 45)
    } else {

        el.parent().parent().scrollLeft(0);
        el.parent().parent().scrollLeft( el.next().position().left - 20 )
    }
};
function scrllPointPrev(el) {

    if($(window).width() > 425) {
        el.parent().parent().scrollLeft(0);
        el.parent().parent().scrollLeft( el.prev().position().left - 45 )
    } else {

        el.parent().parent().scrollLeft(0);
        el.parent().parent().scrollLeft( el.prev().position().left - 20 )
    }
};

// "Бесплатно" price-checkbox__item

$(document).on('click', '.main__price-checkbox', function() {
    console.log('tut')
    if ($('.price-checkbox__item').prop('checked')){

        $('.main__price-size').css('display', 'none');
        $('.main__price-size').next().css('display', 'none');
        $('.main__price-wrap_last').css('display', 'none');
    } else { 
        $('.main__price-size').css('display', '');
        $('.main__price-size').next().css('display', '');
        $('.main__price-wrap_last').css('display', '');
    }
})