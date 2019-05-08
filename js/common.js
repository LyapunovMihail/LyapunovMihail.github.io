
// Меню для мобилок

$(document).on('click', '.head__navigate-menu', function() {

    $('.head__mobile').toggleClass('head__mobile-menu_no-login');
    if ($('.head__mobile').hasClass('head__mobile-menu_no-login')) {
        
        $('body').css('overflow', 'hidden');
    } else {$('body').css('overflow', 'visible');}
});

// Закрепление кнопки настроек

var $width = $(window).width();
    $height = $(window).height(); // Получаю высоту экрана
    $sum = $height - 108;  // 108 = ( Высота экрана ) - ( (координаты кнопки "показать еще") - (координаты скролла) )

    // console.log($height)

$(window).on('scroll', function() {

    var $button = $('.main__show-more-wrap').offset().top;

    if($button < ( $(this).scrollTop() + $sum ) ) {
        $('.main__show-more-wrap').children().last().addClass('main__settings-btn');
        $('.main__show-more-wrap').children().last().removeClass('main__settings-btn_fixed');
    } else { 
        $('.main__show-more-wrap').children().last().addClass('main__settings-btn_fixed')
        $('.main__show-more-wrap').children().last().removeClass('main__settings-btn');
    }
    // console.log($('.main__show-more-wrap').offset().top)
    // console.log($(this).scrollTop())
});