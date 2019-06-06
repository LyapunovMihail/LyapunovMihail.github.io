
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

// $(window).load( function() {


// });


    // console.log($height)

$(window).on('scroll resize', function() {

    $height = $(window).outerHeight();  // Динамично получаем высоту
    var $button = $('.main__show-more-wrap').offset().top; // Где 110 это "bottom" элемента
    var $fixBtn = $('.main__show-more-wrap').children().last().offset().top;

    if($button < $fixBtn ) {
        $('.main__show-more-wrap').children().last().addClass('main__settings-btn');
        $('.main__show-more-wrap').children().last().removeClass('main__settings-btn_fixed');
    } else if( ($button + 110) > ($height + $(this).scrollTop()) ) { 
        $('.main__show-more-wrap').children().last().addClass('main__settings-btn_fixed')
        $('.main__show-more-wrap').children().last().removeClass('main__settings-btn');
    }
    console.log($button)
    console.log(($height + $(this).scrollTop()))
    // console.log($(window).height())
    // console.log(window.screen.availHeight)
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

$(document).on('click', '.main__login-show-pass', function() {

    if ($(this).prev().attr('type') == 'password') {

        $(this).prev().attr('type', 'text');
        $(this).addClass('main__login-show-pass_open');
    } else {

        $(this).prev().attr('type', 'password');
        $(this).removeClass('main__login-show-pass_open');
    }
});