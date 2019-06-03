
// Меню для мобилок

$(document).on('click', '.head__navigate-menu', function() {

    $('.head__mobile').toggleClass('head__mobile-menu_no-login');
    if ($('.head__mobile').hasClass('head__mobile-menu_no-login')) {
        
        $('body').css({
            overflow: 'hidden',
            position: 'fixed'
        });
        $('.head__mobile-menu_bloger').css({
            'overflow-y': 'scroll',
            'overflow-x': 'hidden'
        });
    } else {
        $('body').css({
            overflow: 'visible',
            position: ''
        });
        $('.head__mobile-menu_bloger').css('overflow-y', 'hidden');
    ;}
});

// Закрепление кнопки настроек на Главной(События/Блоги)

var $height = '';

    // console.log($height)

$(window).on('scroll', function() {

    $height = $(window).height();  // Динамично получаем высоту
    var $button = $('.main__show-more-wrap').offset().top + 110; // Где 110 это "bottom" элемента

    if($button < ( $height + ( $(this).scrollTop() ) ) ) {
        $('.main__show-more-wrap').children().last().addClass('main__settings-btn');
        $('.main__show-more-wrap').children().last().removeClass('main__settings-btn_fixed');
    } else { 
        $('.main__show-more-wrap').children().last().addClass('main__settings-btn_fixed')
        $('.main__show-more-wrap').children().last().removeClass('main__settings-btn');
    }
    // console.log($(window).scrollTop())
});

// Открытие поля "Удалить аккаунт" на стр юзера/блогера

$(document).on('click', '.main__del-wrap', function() {
    $('.main__del').toggleClass('main__del_open');
});

// Открытие поля "Узнать больше обо мне" на стр блогера

$(document).on('click', '.about-me__show-more', function() {

    $('.about-me__more-info').css( 'height', 'auto' );

    $('.about-me__show-more').css('display', 'none');
})

//Выделение всех тем на странице настроек юзера

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
    }); // TODO Добавить стиль display: flex; , доделать остальные модалки на главной и JS
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
})