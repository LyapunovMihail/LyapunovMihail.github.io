
// Меню для мобилок

$(document).on('click', '.head__navigate-menu', function() {

    $('.head__mobile').toggleClass('head__mobile-menu_no-login');
    if ($('.head__mobile').hasClass('head__mobile-menu_no-login')) {
        
        $('body').css({
            overflow: 'hidden'//,
            // position: 'fixed'
        });
        $('.head__mobile-menu_bloger').css({
            'overflow-y': 'scroll',
            'overflow-x': 'hidden',
            position: 'fixed'
        });
    } else {
        $('body').css({
            overflow: 'visible',
            //position: ''
        });
        $('.head__mobile-menu_bloger').css({
            'overflow-y': 'hidden',
            position: ''
        });
    ;}
});

// Закрепление кнопки настроек на Главной(События/Блоги)

var $height = '',
    $width = $(window).width();

    // console.log($height)

$(window).on('scroll', function() {
    if($('.main__show-more-wrap').length > 0) {

        $height = $(window).outerHeight();  // Динамично получаем высоту
        var $button = $('.main__show-more-wrap').offset().top; // получ коорд места где должны остановится кнопка
        var $fixBtn = $('.main__show-more-wrap').children().last().offset().top; // и координаты самой кнопки
    
        if($button < $fixBtn ) {
            $('.main__show-more-wrap').children().last().addClass('main__settings-btn');
            $('.main__show-more-wrap').children().last().removeClass('main__settings-btn_fixed');
        } else if( ($button + 110) > ($height + $(this).scrollTop()) ) { 
            $('.main__show-more-wrap').children().last().addClass('main__settings-btn_fixed')
            $('.main__show-more-wrap').children().last().removeClass('main__settings-btn');
        }
    } else { false }
});
$(document).on('click', '.main__settings-btn_fixed, .main__settings-btn', function() {

    if($width > 1069) {
        
        $('html, body').animate({scrollTop: $('[data-scrll]').offset().top - 20 + 'px'});
    } else {

        $('html, body').animate({scrollTop: $('[data-scrll]').offset().top - 70 + 'px'});
    }
});

// Открытие поля "Удалить аккаунт" на стр юзера/блогера

$(document).on('click', '.main__del-wrap', function() {
    $('.main__del').toggleClass('main__del_open');
});

// Открытие поля "Узнать больше обо мне" на стр блогера

$(document).on('click', '.about-me__show-more', function() {

    $('.about-me__more-info').css('height', 'auto');

    $('.about-me__show-more').css('display', 'none');
})

// Выделение всех тем на странице настроек юзера

$(document).on('click', '[data-all]', function() {

    if($(this).prop('checked')) {

        $('.main__mytape-checkbox').prop('checked', true);
    } else {

        $('.main__mytape-checkbox').prop('checked', false);
    }
})

// Ограничение на кол-во чекбоксов

$(document).ready( function() {

    $('.main__theme-checkbox').click( function() {

        if($('.main__theme-checkbox:checked').length >= 3) {

            $('.main__theme-checkbox').not(':checked').prop('disabled', true);
        } else { 
            
            $('.main__theme-checkbox').prop('disabled', false);
        }
    })
})

// Открытие модалки "Формат" на главной стр

$(document).on('click', '[data-format]', function() {

    $('.main__format').css({
        display: 'flex',
        position: 'fixed',
        'overflow-y': 'scroll',
        'overflow-x': 'hidden'
    });
    $('body').css({
        overflow: 'hidden'
    });

    $('.main__format-title').on('click', function() {

        $('.main__format').css({
            display: 'none',
            position: ''
        });
        $('body').css({
            overflow: ''
        });
    })
});

// Показать/Скрыть пароль в форме входа

$(document).on('click', '.main__login-show-pass, .change-pass__show-pass', function() {
    
    var $class = $(this).attr('class'),
        $classOpen = $class.split(' ')[0];
    
    if ($(this).prev().attr('type') == 'password') {

        $(this).prev().attr('type', 'text');
        $(this).addClass($class + '_open');
    } else {
        console.log($classOpen)
        $(this).prev().attr('type', 'password');
        $(this).removeClass($classOpen + '_open');
    }
});

// Подъем вверх

$(document).on('click', '[data-up]', function() {

    $('html, body').animate({scrollTop: 0 + 'px'});
});
$(document).on('click', '[data-up-modal]', function() {

    $('.event-modal').animate({scrollTop: 0 + 'px'});
});
$(document).on('click', '[data-up-blog]', function() {

    // $('.modal-blog').scrollTop(0);
    $('.modal-blog').animate({scrollTop: 0 + 'px'});
    
});

// Модальный сниппет

$(document).on('mousemove', '.recomend-slider__logo_today-event', function() {

    var $coordX = $(this).offset().left,
        $coordY = $(this).offset().top,
        $elHeight = num($('[data-modal-snippet]').css('height')),
        $elWidth = num($('.recomend-slider__logo_today-event').css('width'));

    $('[data-modal-snippet]').css({
        display: 'block',
        top: $coordY - ($elHeight / 2),
        left: $coordX + $elWidth + 5
    });
});
$(document).on('mouseleave', '.recomend-slider__logo_today-event', function() {

    $('[data-modal-snippet]').css({
        display: '',
        top: '',
        left: ''
    });
});


function num(el) { // Перевод строк в числа (обрезая "px")
    if(el != '0px') {
        return Number(el.slice(0, -2));
    } else {
        return 0
    }
}

$(document).on('click', '.change-theme__theme_background', function() {

    $('.change-theme').css('display', 'none');
    $(this).css('display', 'none');
});

// Кол-во символов 

$(document).ready( function() {

    var el = $('.main__snippet-title, .snippet-item__descr-title'),
        lengthArr = el.length;

    if ($('body').width() > 1399) {
        sbstrDesk(el, lengthArr)
    } else if ($('body').width() > 1069) {
        sbstrDeskMedia(el, lengthArr)
    } else if ($('body').width() > 730) {
        sbstrMobile(el, lengthArr)
    } else if ($('body').width() < 730) {
        sbstrMobileMedia(el, lengthArr)
    }

})
function sbstrDesk(elem, length) {

    for (var i = 0; i < length; i++ ) {
        var elText = $(elem[i]).text().trim();

        if ( elText.length > 65) {
            console.log(elText.length)
            $(elem[i]).text( elText.substr(0, 61) + '...' );
        }
    }
}
function sbstrDeskMedia (elem, length) {
    for (var i = 0; i < length; i++ ) {
        var elText = $(elem[i]).text().trim();

        if ( elText.length > 85) {
            
            $(elem[i]).text( elText.substr(0, 82) + '...' );
        }
    }
}
function sbstrMobile (elem, length) {
    for (var i = 0; i < length; i++ ) {
        var elText = $(elem[i]).text().trim();

        if ( elText.length > 55) {
            
            $(elem[i]).text( elText.substr(0, 50) + '...' );
        }
    }
}
function sbstrMobileMedia (elem, length) {
    for (var i = 0; i < length; i++ ) {
        var elText = $(elem[i]).text().trim();

        if ( elText.length > 142) {
            
            $(elem[i]).text( elText.substr(0, 138) + '...' );
        }
    }
}