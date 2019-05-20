
// Меню для мобилок

$(document).on('click', '.head__navigate-menu', function() {

    $('.head__mobile').toggleClass('head__mobile-menu_no-login');
    if ($('.head__mobile').hasClass('head__mobile-menu_no-login')) {
        
        $('body').css('overflow', 'hidden');
    } else {$('body').css('overflow', 'visible');}
});

// Закрепление кнопки настроек

var $width = $(window).width();
    $height = '';

    console.log($height)

$(window).on('scroll', function() {

    $height = $(window).height();  // Динамично получаем высоту для правильной фиксации на мобилках
    var $button = $('.main__show-more-wrap').offset().top + 110; // Где 110 это высота элемента + bottom кнопки с настройками
        $buttonFix = $('.main__show-more-wrap').children().last().offset().top

    if($button < ( $height + ( $(this).scrollTop() ) ) ) {
        $('.main__show-more-wrap').children().last().addClass('main__settings-btn');
        $('.main__show-more-wrap').children().last().removeClass('main__settings-btn_fixed');
    } else { 
        $('.main__show-more-wrap').children().last().addClass('main__settings-btn_fixed')
        $('.main__show-more-wrap').children().last().removeClass('main__settings-btn');
    }
    console.log($height)
});

// Открытие поля "Удалить аккаунт" на стр юзера/блогера

$(document).on('click', '.main__del-title', function() {
    $('.main__del').toggleClass('main__del_open');
});

// ОТкрытие поля "Узнать больше обо мне" на стр блогера

$(document).on('click', '.about-me__show-more', function() {

    $('.about-me__more-info').css( 'height', 'auto' );
    console.log($('.about-me__more-info').length)
    $('.about-me__show-more').css('display', 'none');
})

